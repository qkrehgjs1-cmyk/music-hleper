# 🎵 music-hleper - AI 음악 추천 서비스

100원의 가치를 하는 프리미엄 음악 자판기. 당신의 감정을 읽어내 완벽한 곡을 추천합니다.

## 📋 기능

- **AI 감정 분석**: OpenAI GPT-4를 사용한 심층 감정 분석
- **맞춤 음악 추천**: 당신의 감정에 정확히 맞는 노래 추천
- **YouTube 통합**: 공식 앨범 아트 및 동영상 링크 제공
- **해설 제공**: 왜 이 곡이 당신에게 필요한지 설명

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
npm install
```

### 환경 변수 설정

`.env` 파일을 생성하고 다음을 입력하세요:

```bash
cp .env.example .env
```

그리고 `.env` 파일에 API 키를 입력하세요:

```
OPENAI_API_KEY=your_openai_key_here
YOUTUBE_API_KEY=your_youtube_api_key_here
```

### API 키 발급

1. **OpenAI API Key**: https://platform.openai.com/api-keys
2. **YouTube API Key**: https://console.cloud.google.com/

## 📡 API 엔드포인트

### POST `/api/recommend`

감정 입력을 받아 음악을 추천합니다.

**요청:**
```json
{
  "mood": "요즘 기분이 그냥 그래"
}
```

**응답:**
```json
{
  "title": "곡명",
  "artist": "아티스트",
  "analysis": "이 곡이 당신에게 필요한 이유...",
  "albumArt": "https://...",
  "youtubeLink": "https://www.youtube.com/watch?v=..."
}
```

## 🔧 기술 스택

- **Runtime**: Node.js
- **AI**: OpenAI GPT-4 API
- **Video**: YouTube Data API v3
- **Framework**: Vercel Edge Functions (배포 예정)

## ⚠️ 주의사항

- API 키는 절대 깃허브에 올리지 마세요
- `.env` 파일은 `.gitignore`에 포함되어 있습니다
- 프로덕션 배포시 Vercel, AWS Lambda 등 사용 권장

## 📝 라이선스

MIT