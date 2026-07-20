// 로컬 테스트용 스크립트
// 사용법: node test.js

import handler from './api/recommend.js/recommend.js';

// 환경 변수 확인
console.log('🔐 환경 변수 확인:');
console.log('✓ OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? '설정됨' : '❌ 미설정');
console.log('✓ YOUTUBE_API_KEY:', process.env.YOUTUBE_API_KEY ? '설정됨' : '❌ 미설정');

if (!process.env.OPENAI_API_KEY || !process.env.YOUTUBE_API_KEY) {
  console.log('\n⚠️  .env 파일에 API 키를 설정하세요!');
  console.log('cp .env.example .env');
  process.exit(1);
}

// Mock Request/Response
const mockReq = {
  method: 'POST',
  body: JSON.stringify({ mood: '요즘 기분이 복잡해' })
};

const mockRes = {
  status: (code) => ({
    json: (data) => {
      console.log(`\n✓ 응답 상태: ${code}`);
      console.log('✓ 응답 데이터:', JSON.stringify(data, null, 2));
      return { code, data };
    }
  })
};

// 테스트 실행
console.log('\n🎵 음악 추천 API 테스트 중...\n');
handler(mockReq, mockRes).catch(err => {
  console.error('❌ 테스트 실패:', err);
  process.exit(1);
});
