
export interface Weapon {
  name: string;
  description: string;
  image?: string;
}

export interface ClassInfo {
  id: string;
  name: string;
  engName: string;
  description: string;
  signatureWeapon: Weapon;
  subWeapon: Weapon;
  specialEquipment: Weapon[];
}

export interface Character {
  name: string;
  code: string;
  faction: string;
  role: string;
  rank: string;
  personality: string;
  description: string;
  appearance: string;
  equipment: string;
}

export interface Faction {
  id: string;
  name: string;
  logo: string;
  slogan: string;
  description: string;
  location: string;
  stance: string; // Bicheonpa's view on them
  characters: Character[];
}

export const classes: ClassInfo[] = [
  {
    id: 'assault',
    name: '돌격병',
    engName: 'ASSAULT',
    description: '전선을 돌파하는데에 특화된 전투병이다. 어떤 상황에서도 대처 할 수 있는 능력이 필요하다.',
    signatureWeapon: {
      name: 'KAR-13 / K870',
      description: 'KAR-13: AR15 플랫폼을 기반으로 한 대한민국 현용 특수목적 카빈이다. 5.56mm 탄을 사용한다.\nK870: 근접 전투용 샷건이다.',
      image: 'https://raw.githubusercontent.com/qkrclstodn/site/refs/heads/main/41.webp'
    },
    subWeapon: {
      name: '권총',
      description: '대한민국 현용 권총이다. 9mm 탄을 사용한다.'
    },
    specialEquipment: [
      { name: '유탄발사기', description: '40mm 유탄을 사용한다. 고폭, 연막, 소이 유탄으로 나뉜다.' },
      { name: '브리쳐', description: '문이나 장애물을 파괴하여 진입로를 확보하는 장비다.' }
    ]
  },
  {
    id: 'medic',
    name: '의무병',
    engName: 'MEDIC',
    description: '방어와 지속적인 전투를 위한 모든 전투 부대의 중추다. 아군을 치료하고 재보급하며 방어 위치를 강화한다.',
    signatureWeapon: {
      name: 'KPX',
      description: '9mm탄을 사용하는 특수목적 기관단총이다. 경량화 설계가 추가로 들어간 모델이다.',
      image: 'https://raw.githubusercontent.com/qkrclstodn/site/refs/heads/main/42.webp'
    },
    subWeapon: {
      name: '권총',
      description: '대한민국 현용 권총이다. 9mm 탄을 사용한다.'
    },
    specialEquipment: [
      { name: '의료장비', description: '어떤 상흔에도 능동적으로 대처 가능한 의료상자다.' },
      { name: '탄약상자', description: '유닛제로가 사용하는 탄약이 모두 포함된 상자다.' }
    ]
  },
  {
    id: 'engineer',
    name: '공병',
    engName: 'ENGINEER',
    description: '전장의 기술자이자, 화력지원담당이다. 탑승장비를 파괴, 수리하는 능력이 요구되며, 아군의 화력을 끌어올려야 한다.',
    signatureWeapon: {
      name: 'LMG-15',
      description: '대한민국 현용 경기관총이다. 5.56mm 탄을 사용한다.',
      image: 'https://raw.githubusercontent.com/qkrclstodn/site/refs/heads/main/44.webp'
    },
    subWeapon: {
      name: '권총',
      description: '대한민국 현용 권총이다. 9mm 탄을 사용한다.'
    },
    specialEquipment: [
      { name: 'LAW 로켓', description: '1회용 대전차 로켓이다.' }
    ]
  },
  {
    id: 'recon',
    name: '정찰병',
    engName: 'RECON',
    description: '첩보 및 방첩 작전 요원이다. 멀리서 표적을 무력화하거나 정보를 수집하고 적의 계획을 방해하는 능력이 요구된다.',
    signatureWeapon: {
      name: 'AWK / K28 SDMR',
      description: 'AWK: 338 라푸아 매그넘을 사용한다. 4x15배율 스코프로 멀리 떨어진 목표도 명중 가능하다.\nK28 SDMR: 7.62mm를 사용하는 지정사수소총이다.',
      image: 'https://raw.githubusercontent.com/qkrclstodn/site/refs/heads/main/43.webp'
    },
    subWeapon: {
      name: '권총',
      description: '대한민국 현용 권총이다. 9mm 탄을 사용한다.'
    },
    specialEquipment: [
      { name: '거리측정기', description: '목표와의 거리를 측정 가능하다. 사격제원을 자동으로 산출해주는 기기가 포함된다.' },
      { name: '열상망원경', description: '주변의 열원을 탐지해주는 망원경이다.' }
    ]
  },
  {
    id: 'operator',
    name: '오퍼레이터',
    engName: 'OPERATOR',
    description: '해킹, 드론조종 임무를 전문적으로 수행한다. 팀원들에게 정보를 제공하거나, 전장에 직접 개입하여 작전수행을 원할하게 한다.',
    signatureWeapon: {
      name: '자폭드론 / 해킹장비',
      description: '자폭드론: 소형 폭탄을 장착한 드론이다. 정찰 임무도 같이 수행 가능하다.'
    },
    subWeapon: {
      name: '권총',
      description: '대한민국 현용 권총이다. 9mm 탄을 사용한다.'
    },
    specialEquipment: []
  }
];

export const factions: Faction[] = [
  {
    id: 'unit-zero',
    name: '유닛 제로',
    logo: 'https://raw.githubusercontent.com/qkrclstodn/t--logo/refs/heads/main/11.png',
    slogan: '존재하나, 존재하지 않는다',
    description: '비천파가 창설한 최정예 특수부대다. 존재 자체가 기밀이며, 대한민국 최고의 장비와 훈련을 지원받는다.',
    location: '기밀',
    stance: '비천파의 검이자 방패. 우리의 이상을 실현할 핵심 전력이다.',
    characters: [
      {
        name: '강한별',
        code: 'HB',
        faction: '유닛 제로',
        role: '팀 리더 / 의무병',
        rank: '대위',
        personality: '냉철, 강박, 정 많음',
        description: '스타폴 사건으로 고아가 된 후 설수안에게 발탁되었다. 팀원의 생존을 최우선으로 여긴다.',
        appearance: '흑색 포니테일, 황색 눈, 172cm',
        equipment: 'SMG, 흑색 플레이트캐리어, 헬멧, 의료장비'
      },
      {
        name: '백서윤',
        code: 'SY',
        faction: '유닛 제로',
        role: '돌격병',
        rank: '중위',
        personality: '다혈질, 과감',
        description: '국가대표 사격 선수 출신. 열차테러로 고아가 되었으나 비천파에게 구조되었다.',
        appearance: '헝클어진 적발 단발, 적색 눈, 168cm, 코등 반창고',
        equipment: 'AR, 흑색 플레이트캐리어, 유탄발사기'
      },
      {
        name: '민혜수',
        code: 'HS',
        faction: '유닛 제로',
        role: '정찰병',
        rank: '중위',
        personality: '침착, 다루데레, 피곤',
        description: '늘 피곤해 보이지만 임무 수행 능력은 확실하다.',
        appearance: '은색 장발, 회색 눈, 163cm, 다크서클',
        equipment: 'SR, 흑색 플레이트 캐리어, 거리측정기, 정글모'
      },
      {
        name: '이시아',
        code: 'SA',
        faction: '유닛 제로',
        role: '오퍼레이터',
        rank: '소위',
        personality: '천진난만, 잔인, 애교',
        description: '전직 프로게이머. 작전을 게임처럼 즐기며, 잔인한 면모를 보인다.',
        appearance: '연분홍색 트윈테일, 자색 눈, 155cm, 사탕',
        equipment: '권총, 헤드셋, 자폭드론'
      }
    ]
  },
  {
    id: 'bicheonpa',
    name: '비천파',
    logo: 'https://raw.githubusercontent.com/qkrclstodn/t--logo/refs/heads/main/11.png',
    slogan: '거짓된 하늘을 부정하다',
    description: '무능한 군부에 반기를 들고 일어선 진정한 애국자들의 집단이다. 테러에 대한 강력한 무력 진압을 지지한다.',
    location: '기밀',
    stance: '구국의 결단으로 일어선 정의로운 세력이다.',
    characters: [
      {
        name: '설수안',
        code: 'SN',
        faction: '비천파',
        role: '수뇌부',
        rank: '전직 국회의원',
        personality: '인자함',
        description: '유닛 제로의 정서적 지주이자 어머니 같은 존재다.',
        appearance: '흑색 보브컷, 갈색 눈, 165cm, 정장',
        equipment: 'X'
      },
      {
        name: '강철휘',
        code: 'CH',
        faction: '비천파',
        role: '수뇌부',
        rank: '전직 특전사령관',
        personality: '폭압적, 무자비',
        description: '비천파의 군사적 지도자.',
        appearance: '갈색 넘긴머리, 황색 눈, 178cm, 흉터',
        equipment: 'LMG, 킬스위치, 장교용 코트'
      }
    ]
  },
  {
    id: 'jingukwi',
    name: '진국군사위원회',
    logo: 'https://raw.githubusercontent.com/qkrclstodn/t--logo/refs/heads/main/16.png',
    slogan: '국토사수, 군령준수',
    description: '구태의연한 정통 군부 집단이다. 테러 예방이라는 미명 하에 소극적으로 대처하며 혼란을 키웠다.',
    location: '서울',
    stance: '스타폴 사건의 배후로 의심되는 테러리스트 집단이다.',
    characters: [
      {
        name: '도진아',
        code: 'DJ',
        faction: '진국위',
        role: '공병 / 행정',
        rank: '중령',
        personality: '오만, 피로',
        description: '서류 작업에 찌들어 있는 행정 장교.',
        appearance: '갈색 똥머리, 검정 눈, 170cm',
        equipment: 'LMG, 태블릿, 헬멧'
      },
      {
        name: '성유리',
        code: 'YR',
        faction: '진국위',
        role: '의무병',
        rank: '중위',
        personality: '결벽증, 활발, 소시오패스',
        description: '의무병이지만 위험한 성향을 가지고 있다.',
        appearance: '백금발 포니테일, 파랑 눈, 160cm, 라텍스 장갑',
        equipment: 'HG, 주사, 수술복'
      }
    ]
  },
  {
    id: 'hasta',
    name: 'PMC 하스타',
    logo: 'https://raw.githubusercontent.com/qkrclstodn/t--logo/refs/heads/main/12.png',
    slogan: '국민의 창',
    description: '전직 군인과 공무원으로 구성된 전투 전문 PMC다. 국민의 높은 지지를 받고 있다.',
    location: '서울',
    stance: '시민들의 지지를 받는 눈엣가시 같은 존재다.',
    characters: [
      {
        name: '차수지',
        code: 'SJ',
        faction: '하스타',
        role: '수장 / 공병',
        rank: '전직 중위',
        personality: '저돌적, 멍청',
        description: '직접 전장에 뛰어드는 저돌적인 지휘관이다.',
        appearance: '갈색 사이드 포니테일, 갈색 눈, 167cm',
        equipment: 'LMG, 녹색 바디아머, LAW로켓'
      },
      {
        name: '정세령',
        code: 'SR',
        faction: '하스타',
        role: '작전참모 / 정찰병',
        rank: '전직 소위',
        personality: '결벽적, 데이터 중심',
        description: '테러 패턴을 분석하는 참모.',
        appearance: '남색 긴 생머리, 회색 눈, 174cm, 안경',
        equipment: 'SR, 태블릿'
      }
    ]
  },
  {
    id: 'scutum',
    name: 'PMC 스쿠툼',
    logo: 'https://raw.githubusercontent.com/qkrclstodn/t--logo/refs/heads/main/13.png',
    slogan: '국민의 방패',
    description: '치안 유지를 주력으로 하는 PMC다. 경찰과 협력하며 심리학 전공자가 다수 포함되어 있다.',
    location: '서울',
    stance: '테러를 막는 데 일조하고 있으나, 경계해야 할 대상이다.',
    characters: [
      {
        name: '임하윤',
        code: 'HY',
        faction: '스쿠툼',
        role: '수장 / 의무병',
        rank: '전직 경위',
        personality: '책임감, 정의로움',
        description: '시민의 안전을 최우선으로 생각한다.',
        appearance: '땋은 흑발, 청색 눈, 170cm',
        equipment: 'SMG, 의료장비, 경찰유니폼'
      },
      {
        name: '송주아',
        code: 'JA',
        faction: '스쿠툼',
        role: '현장 조율사 / 돌격병',
        rank: '심리학자',
        personality: '공감능력, 엉뚱',
        description: '피해자들의 PTSD를 관리하고 치안을 담당한다.',
        appearance: '연갈색 묶음 머리, 녹색 눈, 162cm',
        equipment: 'SG, 의료장비, 경찰유니폼'
      }
    ]
  },
  {
    id: 'spectrum',
    name: 'PMC 스펙트룸',
    logo: 'https://raw.githubusercontent.com/qkrclstodn/t--logo/refs/heads/main/14.png',
    slogan: '국민의 그림자',
    description: '국가정보원과 협력하는 첩보 전문 PMC다. 대중에게는 잘 알려져 있지 않다.',
    location: '기밀',
    stance: '정보를 다루는 위험한 집단이다.',
    characters: [
      {
        name: '서이솔',
        code: 'SL',
        faction: '스펙트룸',
        role: '수장 / 돌격병',
        rank: '호위',
        personality: '히키코모리, 다루데레',
        description: '서이결의 쌍둥이 언니.',
        appearance: '흰색 히메컷, 청색 눈, 158cm, 창백',
        equipment: 'AR'
      },
      {
        name: '서이결',
        code: 'SG',
        faction: '스펙트룸',
        role: '오퍼레이터',
        rank: '드론조종',
        personality: '히키코모리, 해맑음',
        description: '서이솔의 쌍둥이 동생.',
        appearance: '흰색 단발, 청색 눈, 158cm, 창백',
        equipment: 'SG, 자폭드론'
      }
    ]
  },
  {
    id: 'lux',
    name: 'PMC 럭스',
    logo: 'https://raw.githubusercontent.com/qkrclstodn/t--logo/refs/heads/main/15.png',
    slogan: '비밀을 가리는 강력한 빛',
    description: '대외 선전과 홍보를 담당하는 PMC다. 실질적인 무력은 없다.',
    location: '부산 해상호텔',
    stance: '보여주기식 활동에 치중하는 선전 집단이다.',
    characters: [
      {
        name: '오윤지',
        code: 'YJ',
        faction: '럭스',
        role: '수장',
        rank: '명예 대위',
        personality: '메스가키',
        description: '대중의 시선을 끄는 사기꾼 기질이 다분하다.',
        appearance: '금발 웨이브 장발, 청색 눈, 160cm, 드레스',
        equipment: '액세서리'
      }
    ]
  }
];

export const timeline = [
  { year: '2020년대 후반', event: '대한민국 각지에서 연쇄 테러 발생. 국가적 혼란 가중.' },
  { year: '2028년', event: '정부의 통제력 상실. 군부, 수습을 명목으로 정권 장악 및 계엄령 선포.' },
  { year: '2028년 말', event: '테러 대응 방식을 두고 군부 내 갈등 심화. 강경 진압파(비천파)와 예방 중심파(진국위)로 분열.' },
  { year: '2029년', event: '스타폴 사건 발생. 양측 장성들이 참여한 협상 회담장에서 폭탄 테러 발생. 다수의 지휘관 사망. 양측은 서로를 배후로 지목하며 결별.' },
  { year: '2029년 후반', event: '치안 공백을 메우기 위해 민간군사기업(PMC) 설립 허용. 4대 PMC(하스타, 스쿠툼, 스펙트룸, 럭스) 탄생.' },
  { year: '2030년', event: '비천파, 독자적인 특수부대 유닛 제로(Unit Zero) 창설. 비밀리에 작전 개시.' },
  { year: '현재', event: '비천파와 진국위의 대립 지속. 4대 PMC가 치안과 안보의 한 축을 담당하며 세력 균형 유지.' }
];
