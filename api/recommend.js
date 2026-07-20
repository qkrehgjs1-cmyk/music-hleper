const SONG_LIBRARY = [
  { title: 'Love Dive', artist: 'IVE', genre: 'kpop', moodTags: ['confident', 'playful', 'self-love', 'healing'] },
  { title: 'Ditto', artist: 'NewJeans', genre: 'kpop', moodTags: ['comfort', 'nostalgic', 'gentle', 'romantic'] },
  { title: 'Hype Boy', artist: 'NewJeans', genre: 'kpop', moodTags: ['playful', 'energetic', 'romantic', 'curious'] },
  { title: 'Super Shy', artist: 'NewJeans', genre: 'kpop', moodTags: ['shy', 'romantic', 'gentle', 'curious'] },
  { title: 'OMG', artist: 'NewJeans', genre: 'kpop', moodTags: ['romantic', 'hopeful', 'gentle', 'comfort'] },
  { title: 'Seven', artist: 'Jungkook', genre: 'kpop', moodTags: ['playful', 'confident', 'romantic', 'happy'] },
  { title: 'Dynamite', artist: 'BTS', genre: 'kpop', moodTags: ['happy', 'hopeful', 'energetic', 'uplift'] },
  { title: 'Spring Day', artist: 'BTS', genre: 'kpop', moodTags: ['sad', 'nostalgic', 'healing', 'comfort'] },
  { title: 'Euphoria', artist: 'BTS', genre: 'kpop', moodTags: ['lonely', 'introspective', 'healing', 'romantic'] },
  { title: 'Butter', artist: 'BTS', genre: 'kpop', moodTags: ['playful', 'confident', 'energetic', 'happy'] },
  { title: 'Lilac', artist: 'IU', genre: 'kpop', moodTags: ['nostalgic', 'gentle', 'romantic', 'healing'] },
  { title: 'Celebrity', artist: 'IU', genre: 'kpop', moodTags: ['confident', 'self-love', 'playful', 'cool'] },
  { title: 'Blueming', artist: 'IU', genre: 'kpop', moodTags: ['romantic', 'soft', 'comfort', 'gentle'] },
  { title: 'Drama', artist: 'aespa', genre: 'kpop', moodTags: ['energetic', 'confident', 'rebellious', 'cool'] },
  { title: 'Savage', artist: 'aespa', genre: 'kpop', moodTags: ['fierce', 'angry', 'empowered', 'rebellious'] },
  { title: 'Feel My Rhythm', artist: 'Red Velvet', genre: 'kpop', moodTags: ['happy', 'playful', 'dreamy', 'energetic'] },
  { title: 'How You Like That', artist: 'BLACKPINK', genre: 'kpop', moodTags: ['angry', 'fierce', 'empowered', 'rebellious'] },
  { title: 'Kill This Love', artist: 'BLACKPINK', genre: 'kpop', moodTags: ['angry', 'confident', 'fierce', 'rebellious'] },
  { title: 'Blood Sweat & Tears', artist: 'BTS', genre: 'kpop', moodTags: ['intense', 'lonely', 'emotional', 'dramatic'] },
  { title: 'Lovers', artist: 'KAI', genre: 'kpop', moodTags: ['romantic', 'gentle', 'dreamy', 'comfort'] },
  { title: 'Levitating', artist: 'Dua Lipa', genre: 'pop', moodTags: ['happy', 'playful', 'energetic', 'hopeful'] },
  { title: 'Lovely', artist: 'Billie Eilish', genre: 'pop', moodTags: ['sad', 'lonely', 'gentle', 'comfort'] },
  { title: 'Ocean Eyes', artist: 'Billie Eilish', genre: 'pop', moodTags: ['dreamy', 'soft', 'healing', 'lonely'] },
  { title: 'Drivers License', artist: 'Olivia Rodrigo', genre: 'pop', moodTags: ['sad', 'heartbroken', 'nostalgic', 'vulnerable'] },
  { title: 'Sunflower', artist: 'Post Malone', genre: 'pop', moodTags: ['hopeful', 'warm', 'gentle', 'comfort'] },
  { title: 'Shallow', artist: 'Lady Gaga', genre: 'pop', moodTags: ['heartbroken', 'dramatic', 'emotional', 'introspective'] },
  { title: 'Someone Like You', artist: 'Adele', genre: 'pop', moodTags: ['sad', 'heartbroken', 'lonely', 'healing'] },
  { title: 'Stay', artist: 'The Kid LAROI', genre: 'pop', moodTags: ['lonely', 'anxious', 'tired', 'intense'] },
  { title: 'Shape of You', artist: 'Ed Sheeran', genre: 'pop', moodTags: ['romantic', 'playful', 'light', 'comfort'] },
  { title: 'Cruel Summer', artist: 'Taylor Swift', genre: 'pop', moodTags: ['angry', 'heartbroken', 'dramatic', 'rebellious'] },
  { title: 'Anti-Hero', artist: 'Taylor Swift', genre: 'pop', moodTags: ['self-reflective', 'confident', 'dark', 'introspective'] },
  { title: 'Yellow', artist: 'Coldplay', genre: 'pop', moodTags: ['hopeful', 'warm', 'comfort', 'gentle'] },
  { title: 'A Thousand Years', artist: 'Christina Perri', genre: 'pop', moodTags: ['romantic', 'heartbroken', 'nostalgic', 'healing'] },
  { title: 'Pretender', artist: 'Official Hige Dandism', genre: 'jpop', moodTags: ['sad', 'heartbroken', 'gentle', 'nostalgic'] },
  { title: 'Shinunoga E-Wa', artist: 'Fujii Kaze', genre: 'jpop', moodTags: ['nostalgic', 'comfort', 'lonely', 'healing'] },
  { title: 'Kaikai Kitan', artist: 'Eve', genre: 'jpop', moodTags: ['dreamy', 'energetic', 'curious', 'intense'] },
  { title: 'Yoru ni Kakeru', artist: 'YOASOBI', genre: 'jpop', moodTags: ['romantic', 'nostalgic', 'lonely', 'gentle'] },
  { title: 'Mikazuki', artist: 'Miyu Nagase', genre: 'jpop', moodTags: ['dreamy', 'gentle', 'comfort', 'nostalgic'] },
  { title: 'Sukiyaki', artist: 'Kyu Sakamoto', genre: 'jpop', moodTags: ['nostalgic', 'gentle', 'melancholy', 'comfort'] },
  { title: 'Kimi no Na wa', artist: 'RADWIMPS', genre: 'jpop', moodTags: ['romantic', 'nostalgic', 'heartbroken', 'dreamy'] },
  { title: 'Nandemonaiya', artist: 'RADWIMPS', genre: 'jpop', moodTags: ['hopeful', 'healing', 'comfort', 'warm'] },
  { title: 'Blue', artist: 'Big Bang', genre: 'kpop', moodTags: ['sad', 'melancholy', 'slow', 'introspective'] },
  { title: 'What is Love', artist: 'TWICE', genre: 'kpop', moodTags: ['playful', 'romantic', 'light', 'happy'] },
  { title: 'Fiction', artist: 'BEAST', genre: 'kpop', moodTags: ['nostalgic', 'sad', 'romantic', 'healing'] },
  { title: 'I Will Survive', artist: 'Gloria Gaynor', genre: 'pop', moodTags: ['empowered', 'confident', 'healing', 'rebellious'] },
  { title: 'Rolling in the Deep', artist: 'Adele', genre: 'pop', moodTags: ['angry', 'heartbroken', 'fierce', 'empowered'] },
  { title: 'Bad Guy', artist: 'Billie Eilish', genre: 'pop', moodTags: ['dark', 'cool', 'rebellious', 'confident'] },
  { title: 'Make You Feel My Love', artist: 'Adele', genre: 'pop', moodTags: ['comfort', 'gentle', 'romantic', 'healing'] },
  { title: 'Without Me', artist: 'Halsey', genre: 'pop', moodTags: ['angry', 'self-reflective', 'empowered', 'rebellious'] },
  { title: 'As It Was', artist: 'Harry Styles', genre: 'pop', moodTags: ['playful', 'confident', 'light', 'cool'] },
  { title: 'Sour', artist: 'Olivia Rodrigo', genre: 'pop', moodTags: ['sad', 'angry', 'heartbroken', 'rebellious'] },
  { title: 'Merry Go Round', artist: 'KOH', genre: 'jpop', moodTags: ['comfort', 'gentle', 'hopeful', 'warm'] },
  { title: 'Mata Kimi ni', artist: 'Kou', genre: 'jpop', moodTags: ['romantic', 'nostalgic', 'gentle', 'healing'] }
];

const MOOD_KEYWORDS = {
  sad: ['슬픔', '슬퍼', '우울', '우울해', '울적', '눈물', '비통', '상실', '상실감', '아파', '아프', '지침', '무기력', '무너져', '흐려', '비참', '서럽', '허무'],
  lonely: ['외로워', '혼자', '고독', '소외', '버려진', '쓸쓸', '고립', '공허', '공허해', '허전', '허전해', '외롭', '덜어', '남겨진'],
  anxious: ['불안', '초조', '걱정', '두려워', '긴장', '불안해', '불안정', '미래가', '불안정해', '떨려', '조마조마', '불안정', '초조해'],
  angry: ['화나', '분노', '분통', '짜증', '열받', '억울', '미운', '너무 화', '한이', '화가', '분노해', '답답', '짓궂', '화난'],
  exhausted: ['지쳐', '피곤', '번아웃', '탈진', '힘들', '너무 바빠', '정신없', '버티기', '져', '너무 지침', '녹초', '지친'],
  hopeful: ['희망', '회복', '다시', '좋아질', '괜찮아질', '치유', '위로', '다시 시작', '새로움', '기운', '회복할', '좋아질'],
  calm: ['차분', '평온', '편안', '안정', '잔잔', '조용', '안정감', '쉼', '마음이 편해', '순해', '안정적'],
  confident: ['자신감', '용기', '자립', '강해', '결심', '해낼', '할 수', '좋아질 수', '해야지', '버텨', '끈기', '잡아'],
  romantic: ['사랑', '설렘', '연애', '좋아해', '좋아', '애틋', '달콤', '로맨스', '그리움', '좋아하는', '사랑해', '연애중'],
  playful: ['신나', '재미', '즐거워', '기분전환', '흥분', '들뜨', '파티', '신나고', '기분 업', '밝아', '개운', '유쾌'],
  nostalgic: ['추억', '옛날', '그때', '향수', '후회', '아련', '그리워', '다시 보고', '예전', '옛날 생각', '다시 보고 싶어'],
  selfLove: ['자존감', '내가', '스스로', '나를', '자기', 'self', '내 마음', '사랑해', '내가 중요해', '나를 위한'],
  rebellious: ['반항', '저항', '불만', '거부', '안 맞아', '싫어', '내 뜻대로', '자유로워', '지겨워', '불만', '반발'],
  dreamy: ['몽환', '꿈같', '아득', '부드럽', '환상', '환상적', '떠오르', '몽롱', '감성'],
  intense: ['심장', '강렬', '진심', '격해', '불타', '뜨거운', '감정이 폭발', '무겁', '묵직']
};

const MAX_MOOD_LENGTH = 160;

function sanitizeMoodInput(value) {
  return String(value || '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .trim()
    .slice(0, MAX_MOOD_LENGTH);
}

function normalizeMoodText(text) {
  return String(text || '').toLowerCase().replace(/[^가-힣a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function inferEmotionTags(text) {
  const normalized = normalizeMoodText(text);
  const tags = [];

  Object.entries(MOOD_KEYWORDS).forEach(([tag, keywords]) => {
    if (keywords.some(keyword => normalized.includes(keyword))) {
      tags.push(tag);
    }
  });

  if (tags.length === 0) {
    if (/(괜찮아|그냥 그래|모르겠|별로|뭐가|어떻게|어렵|복잡)/.test(normalized)) {
      tags.push('confused', 'tired');
    } else {
      tags.push('neutral');
    }
  }

  if (/(좋아|좋아해|좋다|기분 좋아|기분이 좋아)/.test(normalized) && !tags.includes('happy')) {
    tags.push('happy');
  }

  if (/(괜찮아|그냥 그래|어떻게든|버티|견디)/.test(normalized)) {
    tags.push('healing');
  }

  return tags.slice(0, 5);
}

function scoreSong(song, emotionTags) {
  let score = 0;
  const tags = new Set(emotionTags);

  song.moodTags.forEach(tag => {
    if (tags.has(tag)) score += 4;
  });

  if (tags.has('sad') && song.moodTags.includes('healing')) score += 2;
  if (tags.has('lonely') && song.moodTags.includes('comfort')) score += 2;
  if (tags.has('anxious') && song.moodTags.includes('healing')) score += 2;
  if (tags.has('angry') && song.moodTags.includes('empowered')) score += 2;
  if (tags.has('hopeful') && song.moodTags.includes('hopeful')) score += 2;
  if (tags.has('confident') && song.moodTags.includes('confident')) score += 2;
  if (tags.has('playful') && song.moodTags.includes('playful')) score += 2;
  if (tags.has('romantic') && song.moodTags.includes('romantic')) score += 2;
  if (tags.has('dreamy') && song.moodTags.includes('dreamy')) score += 2;
  if (tags.has('intense') && song.moodTags.includes('intense')) score += 2;
  if (tags.has('selfLove') && song.moodTags.includes('self-love')) score += 2;
  if (tags.has('rebellious') && song.moodTags.includes('rebellious')) score += 2;

  return score;
}

function selectSongForMood(text) {
  const emotionTags = inferEmotionTags(text);
  const scored = SONG_LIBRARY.map(song => ({
    song,
    score: scoreSong(song, emotionTags),
    matchedTags: song.moodTags.filter(tag => emotionTags.includes(tag))
  }))
    .sort((a, b) => b.score - a.score || a.song.title.localeCompare(b.song.title));

  const top = scored[0];
  return {
    song: top?.song || SONG_LIBRARY[0],
    emotionTags,
    matchedTags: top?.matchedTags || []
  };
}

function buildLocalAnalysis(song, emotionTags, moodText) {
  const topEmotion = emotionTags[0] || 'neutral';
  const moodSummary = emotionTags.length > 0 ? emotionTags.join(', ') : '감정 미세 조정';
  return `${moodText}라는 입력은 ${moodSummary} 쪽으로 읽힙니다. ${song.title} - ${song.artist}는 ${topEmotion} 감정과 잘 맞는 곡으로, 위로와 공감을 더해줄 수 있는 분위기입니다.`;
}

function parseRequestBody(body) {
  if (typeof body === 'string') {
    const parsed = JSON.parse(body);
    return parsed?.mood || '';
  }
  return body?.mood || '';
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

export function getMoodRecommendationDebugInfo(moodText) {
  return selectSongForMood(moodText);
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  let mood = '';
  try {
    mood = sanitizeMoodInput(parseRequestBody(req.body));
  } catch (e) {
    return res.status(400).json({ error: '요청 형식이 올바르지 않습니다' });
  }

  if (!mood || mood.trim().length === 0) {
    return res.status(400).json({ error: '기분을 입력해주세요' });
  }

  if (mood.length >= MAX_MOOD_LENGTH) {
    return res.status(413).json({ error: '입력은 160자 이내로 보내주세요.' });
  }

  console.log(`[요청] 사용자 기분: "${mood}"`);

  try {
    const selection = selectSongForMood(mood);
    const { song, emotionTags } = selection;
    let analysis = buildLocalAnalysis(song, emotionTags, mood);

    if (process.env.OPENAI_API_KEY) {
      try {
        const aiResponse = await fetchWithTimeout('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            temperature: 0.8,
            top_p: 0.95,
            frequency_penalty: 0.2,
            presence_penalty: 0.5,
            messages: [
              {
                role: 'system',
                content: `당신은 K-pop, Pop, J-pop 감정 음악 추천 전문가입니다. 사용자의 감정 입력을 해석해서 하나의 노래를 추천해야 합니다. 추천한 노래는 반드시 실제로 존재하는 곡이어야 하고 K-pop, Pop, J-pop 장르만 사용하세요. 사용자 감정의 깊이와 맥락을 반영해 2~3문장으로 설명하세요.`
              },
              {
                role: 'user',
                content: `${mood}\n추천 곡: ${song.title} - ${song.artist}\n감정 태그: ${emotionTags.join(', ')}`
              }
            ]
          })
        }, 10000);

        if (!aiResponse.ok) {
          throw new Error(`OpenAI request failed with status ${aiResponse.status}`);
        }

        const aiData = await aiResponse.json();
        if (aiData?.choices?.[0]?.message?.content) {
          analysis = aiData.choices[0].message.content.trim();
        }
      } catch (aiError) {
        console.warn('AI 분석 실패, 로컬 해석 사용:', aiError.message);
      }
    }

    if (!process.env.YOUTUBE_API_KEY) {
      return res.status(500).json({ error: 'YouTube API 키가 설정되지 않았습니다.' });
    }

    const ytResponse = await fetchWithTimeout(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(`${song.title} ${song.artist}`)}&type=video&key=${process.env.YOUTUBE_API_KEY}`
    );

    if (!ytResponse.ok) {
      throw new Error(`YouTube request failed with status ${ytResponse.status}`);
    }

    const ytData = await ytResponse.json();

    if (!ytData.items || ytData.items.length === 0) {
      return res.status(404).json({ error: '유튜브에서 곡을 찾을 수 없습니다.' });
    }

    const video = ytData.items[0];

    return res.status(200).json({
      title: song.title,
      artist: song.artist,
      analysis,
      albumArt: video.snippet.thumbnails.high.url,
      youtubeLink: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      moodTags: emotionTags,
      genre: song.genre.toUpperCase()
    });
  } catch (error) {
    console.error('추천 오류:', error);
    return res.status(500).json({
      error: '음악을 찾는 도중 오류가 발생했습니다.',
      ...(process.env.NODE_ENV !== 'production' ? { details: error.message } : {})
    });
  }
}