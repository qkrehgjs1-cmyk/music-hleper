// '노래한곡의 여유' 백엔드 핵심 로직
export default async function handler(req, res) {
  // POST 요청이 아니면 거절 (보안)
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { mood } = JSON.parse(req.body);

  try {
    // 1. OpenAI에게 심층 감정 분석 및 노래 추천 요청 (Ver 2.0 프롬프트 적용)
    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { 
            role: "system", 
            content: "당신은 100원의 가치를 하는 프리미엄 음악 자판기입니다. 사용자가 '그냥 그래'라고 말해도 그 이면의 숨은 감정(Subtext)을 읽어내야 합니다. 결과는 반드시 '곡명 - 아티스트' 형식으로 시작하고, 이어서 소름 돋는 해설을 2~3문장 적어주세요." 
          },
          { role: "user", content: mood }
        ]
      })
    });

    const aiData = await aiResponse.json();
    
    // 오류 체크
    if (!aiData.choices || !aiData.choices[0]) {
      return res.status(500).json({ error: "AI 응답 오류" });
    }

    const resultText = aiData.choices[0].message.content;
    
    // 결과에서 곡 정보와 해설 분리
    const lines = resultText.split('\n');
    const firstLine = lines[0].trim(); // "곡명 - 아티스트"
    const analysis = lines.slice(1).join('\n').trim() || "당신만을 위한 특별한 선율입니다.";

    // 곡명과 아티스트 파싱
    const [title, artist] = firstLine.split(' - ').map(s => s.trim());

    // 2. 유튜브 API로 공식 앨범 아트 및 링크 가져오기
    const ytResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(firstLine)}&type=video&key=${process.env.YOUTUBE_API_KEY}`
    );
    const ytData = await ytResponse.json();
    
    if (!ytData.items || ytData.items.length === 0) {
      return res.status(404).json({ error: "유튜브에서 곡을 찾을 수 없습니다." });
    }

    const video = ytData.items[0];

    // 3. 최종 데이터를 Framer 웹사이트로 전송
    return res.status(200).json({
      title: title || "추천곡",
      artist: artist || "아티스트",
      analysis: analysis,
      albumArt: video.snippet.thumbnails.high.url, // 유튜브 공식 이미지
      youtubeLink: `https://www.youtube.com/watch?v=${video.id.videoId}`
    });

  } catch (error) {
    console.error("추천 오류:", error);
    return res.status(500).json({ 
      error: "음악을 찾는 도중 오류가 발생했습니다.",
      details: error.message
    });
  }
}