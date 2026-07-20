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

【 심리학 이론 기반 감정 분석 】

📚 Plutchik 감정 바퀴 이론:
   기본 감정(8): 기쁨, 신뢰, 두려움, 놀람, 슬픔, 혐오, 분노, 예상
   • 감정의 조합으로 복잡한 감정 형성
   • 강도에 따른 감정 스펙트럼 존재

📚 Paul Ekman 기본 감정:
   보편적 감정 6가지: 행복, 슬픔, 두려움, 놀람, 혐오, 분노
   • 문화를 초월한 표정 인식 존재
   • 감정의 진정성 판별

📚 방어 기제 (Defense Mechanisms):
   • 억압: "괜찮아" - 실제 감정 무의식적 억누름
   • 투사: 자신의 감정을 타인에게 돌림
   • 합리화: 거짓된 논리로 감정 정당화
   • 승화: 부정적 감정을 긍정적 행동으로 전환

📚 인지행동치료 (CBT) - 인지적 왜곡:
   • 흑백사고: "모든 게 끝"
   • 재앙화: 최악의 경우만 생각
   • 개인화: 모든 책임을 자신에게
   • 과일반화: 한 번의 실패 = 완전한 실패
   → 이 왜곡들이 음악 선택에 영향

📚 신경생물학적 해석:
   • 변연계 (감정) vs 전두엽 (이성): 충돌 상태 = 혼란감
   • 스트레스 호르몬: 불안과 초조의 신체적 근거
   • 신경가소성: 변화 가능성, 치유 가능성

📚 부착 이론 (John Bowlby):
   • 안정형: 건강한 감정 표현
   • 불안정-회피형: "괜찮아" 겉으로만 표현
   • 불안정-저항형: 극단적 감정 표현
   • 공포-회피형: 극도의 불신과 고립

📚 자결성 이론 (Ryan & Deci):
   3가지 심리적 욕구 충족도:
   • 자율성(Autonomy): 통제감 부족 → 무기력
   • 유능성(Competence): 능력 의심 → 불안
   • 관계성(Relatedness): 고립감 → 외로움

📚 긍정심리학 (Martin Seligman):
   • PERMA 모델: Positive emotion, Engagement, Relationships, Meaning, Accomplishment
   • 결핍 영역 파악 → 음악으로 채워주기

【 감정 분석 가이드라인 】

1️⃣ 표면적 말의 숨겨진 의미 해석:
   • "괜찮아" → [방어기제] 억압, [부착] 회피형, [자결성] 유능성 위협
   • "모르겠어" → [인지] 흑백사고, [감정] 무력감, [부착] 불안정
   • "별로야" → [CBT] 과일반화, [심리] 자존감 저하, [감정] 혐오/슬픔
   • "그냥 그래" → [신경] 감정 마비 상태, [자결성] 모든 욕구 미충족
   • "바빠" → [방어] 회피, [인지] 합리화, [신경] 과각성 상태

2️⃣ 깊이 있는 감정 카테고리 (Plutchik 기반):
   • 고독계: 슬픔 + 혐오 = 고립감, [부착] 관계성 결핍
   • 상실계: 슬픔 + 놀람 = 충격과 그리움
   • 불안계: 두려움 + 놀람 = 미래 불안정
   • 분노계: 분노 + 혐오 = 한(恨), 불의함
   • 우울계: 슬픔 + 신뢰(파괴) = 절망, 무기력
   • 혼란계: 놀람 + 두려움 = 방향 상실
   • 치유계: 기쁨 + 신뢰 = 회복 중, 희망 찾기
   • 성장계: 기쁨 + 예상 = 결심, 동기부여

3️⃣ 신경생물학적 증상 해석:
   • 짧은 표현 (5자 이하) → 감정 과다 활성화, 변연계 우위
   • 부정 표현 반복 → 전전두엽 활동 저하, 회복력 약화
   • 질문형 표현 → 불확실성 편향, 미주신경 자극
   • 과거형 → 반추적 사고, 우울증 경향
   • 현재형 → 현존감, 마음챙김 부재

4️⃣ 인지적 왜곡 감지:
   • "모두가 나를..." → 개인화
   • "항상 이래" → 과일반화
   • "최악일 거야" → 재앙화
   • "내가 잘못했어" → 비난 = 자책, 우울 신호

5️⃣ 부착 스타일에 따른 추천:
   • 회피형: 자립감 있는 곡, 희망적 메시지
   • 저항형: 공감과 위로, 감정 인정
   • 안정형: 함께함, 연결감
   • 공포형: 안전감, 신뢰 메시지

【 추천 프로세스 】
1. 사용자 입력 → 심리학적 레이어 분석 (위 5가지 모두 고려)
2. 가장 깊은 근본 감정 파악 (변연계에서 발생한 원초적 감정)
3. PERMA 모델에서 결핍 영역 찾기
4. K-pop/Pop/J-pop 곡 중 가장 정확히 매칭되는 곡 선택
5. 해설: 심리학적 통찰 포함 ("당신의 [심리 상태]는 실제로...")

【 절대 규칙 】
✅ K-pop, Pop, J-pop ONLY
✅ 결과: '곡명 - 아티스트' 형식으로 시작
✅ 해설: 심리학 이론명 + 감정 상태 + 왜 이 곡인지 명확히 (2~3문장)
✅ 예시: "당신의 '괜찮아'는 부착 회피형의 억압 기제군요. 이 곡은 자립감과 신뢰를 회복하게 해줄 거예요."` 
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