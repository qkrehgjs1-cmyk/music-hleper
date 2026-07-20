// '노래한곡의 여유' 백엔드 핵심 로직
export default async function handler(req, res) {
  // 캐싱 방지 (중요!)
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  // POST 요청이 아니면 거절 (보안)
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // 요청 바디 파싱 (Vercel에서는 객체로 올 수 있음)
  let mood = '';
  try {
    if (typeof req.body === 'string') {
      mood = JSON.parse(req.body).mood;
    } else {
      mood = req.body.mood;
    }
  } catch (e) {
    return res.status(400).json({ error: "요청 형식이 올바르지 않습니다" });
  }

  // mood 검증
  if (!mood || mood.trim().length === 0) {
    return res.status(400).json({ error: "기분을 입력해주세요" });
  }

  console.log(`[요청] 사용자 기분: "${mood}"`);

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
        temperature: 0.8, // 창의적인 감정 해석
        top_p: 0.95, // 다양한 응답
        frequency_penalty: 0.3, // 반복 방지
        presence_penalty: 0.6, // 새로운 관점 유도
        messages: [
          { 
            role: "system", 
            content: `당신은 100원의 가치를 하는 프리미엄 음악 자판기입니다. 
사용자의 표면적인 말 너머의 진정한 감정을 읽어내는 심리 분석가입니다.

【 감정 분석 가이드라인 】

1️⃣ 표면적 말의 숨겨진 의미 해석:
   • "괜찮아" → 무기력, 자포자기, 혼자라는 느낌, 포기
   • "모르겠어" → 혼란, 방향 상실, 결정 불가능, 무력감
   • "별로야" → 실망, 기대와 현실의 괴리, 상실감
   • "그냥 그래" → 단조로움, 무의미함, 정체된 시간, 침체
   • "바빠" → 도피, 불안감, 성취욕, 또는 역으로 공허함

2️⃣ 깊이 있는 감정 카테고리:
   • 고독계: 외로움, 버려진 느낌, 소외, 고립
   • 상실계: 이별, 후회, 그리움, 노스탤지어
   • 불안계: 두려움, 초조함, 미래 불안, 불확실성
   • 분노계: 억울함, 한(恨), 대항욕, 공분
   • 우울계: 절망, 무기력, 도피, 번아웃
   • 혼란계: 방황, 정체성 혼동, 선택 불가
   • 치유계: 회복 중, 위로 필요, 희망 찾기
   • 성장계: 결심, 다시 시작, 강해지고 싶음

3️⃣ 문맥적 해석:
   • 시간대 (밤/아침) → 고독, 새출발 등의 감정색
   • 언어 톤 (짧고 뭉뚱/상세함) → 감정 강도 파악
   • 단어 선택 (부정적/회피적/긍정적) → 심리 상태 분석
   • 반복 표현 → 강조되는 감정 강도

4️⃣ 심리학적 해석:
   • 부정 표현의 많음 = 방어 기제
   • 과거 지시 표현 = 향수, 후회, 상실감
   • 미래 부정 = 절망, 불안
   • 객관화된 표현 = 감정 분리, 무감정

【 추천 방식 】
1. 사용자 입력을 위 기준으로 3~4개 감정층위로 분석
2. 가장 깊은 감정에 맞는 K-pop/Pop/J-pop 곡 선택
3. AI가 왜 이 곡인지 명확히 설명

【 절대 규칙 】
✅ K-pop, Pop, J-pop ONLY
✅ 결과: '곡명 - 아티스트' 형식으로 시작
✅ 이어서 사용자 감정을 정확히 읽고 그 맥락에서의 해설 (2~3문장)
✅ 해설에는 사용자가 느낀 진짜 감정을 언급하면 더 좋음

예시: "당신의 '그냥 그래'는 사실 [감정X]이군요. 이 곡은..."` 
          },
          { role: "user", content: mood }
        ]
      })
    });

    const aiData = await aiResponse.json();
    
    // 오류 체크
    if (!aiData.choices || !aiData.choices[0]) {
      console.error("AI 응답 오류:", aiData);
      return res.status(500).json({ error: "AI 응답 오류" });
    }

    const resultText = aiData.choices[0].message.content;
    console.log(`[AI 응답] ${resultText.split('\n')[0]}`);
    console.log(`[전체 분석]\n${resultText}\n`);
    
    
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