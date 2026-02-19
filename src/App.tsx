
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Crosshair, Users, Map as MapIcon, Info, ChevronRight, Menu, X } from 'lucide-react';
import { classes, factions, timeline, Faction, ClassInfo } from './data';

// Components
const EntryScreen = ({ onEnter }: { onEnter: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, y: -50 }}
    className="fixed inset-0 bg-black text-red-600 flex flex-col items-center justify-center z-50 font-mono"
  >
    <motion.h1 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-center uppercase font-black-han-sans"
    >
      태극의 그림자 안에서
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="text-xl md:text-2xl text-red-800 mb-12 tracking-widest"
    >
      SHADOW OF TAEGEUK
    </motion.p>
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: '#991b1b', color: '#000' }}
      whileTap={{ scale: 0.95 }}
      onClick={onEnter}
      className="px-12 py-4 border-2 border-red-600 text-red-600 text-xl font-bold uppercase tracking-widest hover:bg-red-900 transition-colors duration-300"
    >
      시스템 접속
    </motion.button>
    <div className="absolute bottom-10 text-red-900 text-xs">
      AUTHORIZED PERSONNEL ONLY // BICHEONPA NETWORK
    </div>
  </motion.div>
);

const WorldView = () => (
  <div className="space-y-12">
    <section className="space-y-6">
      <h2 className="text-4xl font-bold text-red-600 border-b border-red-900 pb-4">세계관</h2>
      <p className="text-gray-300 leading-relaxed text-lg">
        2030년대 대한민국. 잇따른 테러와 혼란 속에서 우리는 길을 잃었다.
        무능한 정부를 대신해 군부가 일어섰으나, 그들 또한 분열되었다.
        거짓된 평화를 외치는 '진국위'와, 진정한 질서를 위해 칼을 든 우리 '비천파'.
        그리고 그 사이에서 피어난 4대 PMC와 그림자 속의 유닛 제로.
        이것은 생존을 위한 투쟁이자, 진정한 애국을 위한 기록이다.
      </p>
    </section>

    <section className="space-y-6">
      <h2 className="text-4xl font-bold text-red-600 border-b border-red-900 pb-4">연표</h2>
      <div className="relative border-l-2 border-red-900 ml-4 space-y-8 py-4">
        {timeline.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-8"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full" />
            <span className="text-red-500 font-mono text-sm font-bold block mb-1">{item.year}</span>
            <p className="text-gray-200">{item.event}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

const ClassDetail = ({ cls }: { cls: ClassInfo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={`bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-300
        ${isExpanded ? 'border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.2)]' : 'hover:border-red-600/50'}`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">{cls.name}</h3>
          <span className="text-red-900 font-mono font-bold">{cls.engName}</span>
        </div>
        <p className="text-gray-400 text-sm line-clamp-2">{cls.description}</p>
        
        <div className="mt-4 flex justify-end">
          <span className={`text-xs font-bold flex items-center transition-colors ${isExpanded ? 'text-red-500' : 'text-zinc-600'}`}>
            {isExpanded ? '접기' : '장비 확인'} <ChevronRight className={`w-3 h-3 ml-1 transition-transform ${isExpanded ? '-rotate-90' : 'rotate-90'}`} />
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-black/50 border-t border-zinc-800"
          >
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-zinc-900/50 p-3 rounded border-l-2 border-red-600">
                  <span className="text-red-500 text-[10px] font-bold tracking-wider block mb-1">SIGNATURE WEAPON</span>
                  <div className="font-bold text-gray-200 text-sm">{cls.signatureWeapon.name}</div>
                  <div className="text-gray-400 text-xs mt-1 whitespace-pre-line">{cls.signatureWeapon.description}</div>
                </div>
                
                <div className="bg-zinc-900/50 p-3 rounded border-l-2 border-zinc-600">
                  <span className="text-zinc-500 text-[10px] font-bold tracking-wider block mb-1">SUB WEAPON</span>
                  <div className="font-bold text-gray-200 text-sm">{cls.subWeapon.name}</div>
                  <div className="text-gray-400 text-xs mt-1">{cls.subWeapon.description}</div>
                </div>

                {cls.specialEquipment.length > 0 && (
                  <div className="bg-zinc-900/50 p-3 rounded border-l-2 border-zinc-600">
                    <span className="text-zinc-500 text-[10px] font-bold tracking-wider block mb-1">SPECIAL EQUIPMENT</span>
                    {cls.specialEquipment.map((eq, idx) => (
                      <div key={idx} className="mb-2 last:mb-0">
                        <div className="font-bold text-gray-200 text-sm">{eq.name}</div>
                        <div className="text-gray-400 text-xs mt-1">{eq.description}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Classes = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold text-red-600 border-b border-red-900 pb-4">병과 정보</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((cls) => (
        <ClassDetail key={cls.id} cls={cls} />
      ))}
    </div>
  </div>
);

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Crosshair, Users, Map as MapIcon, Info, ChevronRight, Menu, X, ZoomIn } from 'lucide-react';
import { classes, factions, timeline, Faction, ClassInfo, Character } from './data';

// Helper to get character image URL
const getCharacterImage = (code: string, emotion: number) => 
  `https://raw.githubusercontent.com/qkrclstodn/${code}/refs/heads/main/${emotion}.webp`;

const emotions = [
  { id: 1, label: '일반' },
  { id: 2, label: '화남' },
  { id: 3, label: '슬픔' },
  { id: 4, label: '부끄' },
  { id: 5, label: '웃음' },
  { id: 6, label: '놀람' },
  { id: 7, label: '전투' },
];

const CharacterModal = ({ character, onClose }: { character: Character; onClose: () => void }) => {
  const [currentEmotion, setCurrentEmotion] = useState(1);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-zinc-900 border border-red-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 bg-black/50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800">
          <div className="relative w-full aspect-[3/4] max-w-sm mx-auto mb-6">
            <img 
              src={getCharacterImage(character.code, currentEmotion)} 
              alt={character.name}
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {emotions.map((emo) => (
              <button
                key={emo.id}
                onClick={() => setCurrentEmotion(emo.id)}
                className={`px-3 py-1 text-xs font-bold rounded border transition-colors
                  ${currentEmotion === emo.id 
                    ? 'bg-red-900/50 border-red-600 text-white' 
                    : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-500'}`}
              >
                {emo.label}
              </button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 p-8 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-black text-white">{character.name}</h2>
              <span className="bg-red-900/30 text-red-500 px-2 py-1 rounded text-sm font-bold border border-red-900/50">
                {character.rank}
              </span>
            </div>
            <div className="text-zinc-400 font-mono text-sm">{character.role}</div>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-800/50 p-4 rounded border-l-2 border-red-600">
              <span className="text-xs text-red-400 font-bold block mb-1">DESCRIPTION</span>
              <p className="text-gray-300 text-sm leading-relaxed">{character.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-800/50 p-3 rounded border-l-2 border-zinc-600">
                <span className="text-xs text-zinc-500 font-bold block mb-1">PERSONALITY</span>
                <p className="text-gray-300 text-sm">{character.personality}</p>
              </div>
              <div className="bg-zinc-800/50 p-3 rounded border-l-2 border-zinc-600">
                <span className="text-xs text-zinc-500 font-bold block mb-1">APPEARANCE</span>
                <p className="text-gray-300 text-sm">{character.appearance}</p>
              </div>
            </div>

            <div className="bg-zinc-800/50 p-4 rounded border-l-2 border-zinc-600">
              <span className="text-xs text-zinc-500 font-bold block mb-1">EQUIPMENT</span>
              <p className="text-gray-300 text-sm font-mono">{character.equipment}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FactionDetail = ({ faction, onBack }: { faction: Faction; onBack: () => void }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      <button 
        onClick={onBack}
        className="flex items-center text-red-500 hover:text-red-400 transition-colors mb-4"
      >
        <ChevronRight className="rotate-180 mr-2" /> 목록으로 돌아가기
      </button>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-32 h-32 shrink-0 bg-black rounded-lg border border-red-900/30 p-2 flex items-center justify-center">
          <img src={faction.logo} alt={faction.name} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1">
          <div className="border-l-4 border-red-600 pl-6 py-2 bg-gradient-to-r from-red-900/20 to-transparent mb-6">
            <h2 className="text-5xl font-black text-white mb-2">{faction.name}</h2>
            <p className="text-red-400 font-mono text-xl italic">"{faction.slogan}"</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <p className="text-gray-300 leading-relaxed mb-4">{faction.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-zinc-500 block">본거지</span>
                <span className="text-gray-200">{faction.location}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">비천파의 견해</span>
                <span className="text-red-400">{faction.stance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white border-b border-zinc-800 pb-2">소속 인물</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {faction.characters.map((char, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCharacter(char)}
              className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden cursor-pointer group hover:border-red-600/50 transition-colors"
            >
              <div className="aspect-[3/4] bg-black relative overflow-hidden">
                <img 
                  src={getCharacterImage(char.code, 1)} 
                  alt={char.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-white font-bold text-lg">{char.name}</div>
                  <div className="text-zinc-400 text-xs">{char.role}</div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-white drop-shadow-md" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCharacter && (
          <CharacterModal 
            character={selectedCharacter} 
            onClose={() => setSelectedCharacter(null)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Factions = () => {
  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);

  if (selectedFaction) {
    return <FactionDetail faction={selectedFaction} onBack={() => setSelectedFaction(null)} />;
  }

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-red-600 border-b border-red-900 pb-4">주요 세력</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {factions.map((faction) => (
          <motion.div
            key={faction.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedFaction(faction)}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg cursor-pointer hover:border-red-600/50 transition-colors group h-full flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0">
              <img src={faction.logo} alt={faction.name} className="w-full h-full object-contain" />
            </div>
            
            <div className="flex-1 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{faction.name}</h3>
              <p className="text-red-900 font-mono text-sm mb-4">{faction.slogan}</p>
              <p className="text-gray-400 text-sm line-clamp-3">{faction.description}</p>
            </div>
            <div className="mt-6 flex justify-end relative z-10">
              <span className="text-red-600 text-sm font-bold flex items-center">
                상세 정보 <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Map = () => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  // Adjusted coordinates for the new map image
  // Assuming the map is roughly centered on South Korea
  // Seoul is roughly top-left quadrant
  // Busan is bottom-right quadrant
  const markers = [
    { id: 'jingukwi', x: 32, y: 25, name: '진국위 (서울)', code: '90' },
    { id: 'hasta', x: 35, y: 27, name: '하스타 (서울)', code: '84' },
    { id: 'scutum', x: 30, y: 23, name: '스쿠툼 (서울)', code: '85' },
    { id: 'lux', x: 75, y: 75, name: '럭스 (부산)', code: '87' },
    { id: 'spectrum', x: 45, y: 40, name: '스펙트룸 (기밀)', code: '86', hidden: true }, // Added for completeness based on request, though initially hidden
  ];

  // Helper to get location image URL
  const getLocationImage = (code: string) => 
    `https://raw.githubusercontent.com/qkrclstodn/SIT/refs/heads/main/${code}.webp`;

  const activeLocation = markers.find(m => m.id === activeMarker);

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-red-600 border-b border-red-900 pb-4">작전 지도</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 relative overflow-hidden rounded-lg">
          {/* Map Image */}
          <div className="w-full h-full bg-[#1a1a1a] relative">
            <img 
              src="https://raw.githubusercontent.com/qkrclstodn/map/refs/heads/main/korean_map.webp" 
              alt="Operations Map" 
              className="w-full h-full object-cover opacity-50"
            />
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20" 
                 style={{ 
                   backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
                 }} 
            />

            {/* Markers */}
            {markers.filter(m => !m.hidden).map(m => (
              <button
                key={m.id}
                onClick={() => setActiveMarker(m.id)}
                className={`absolute w-4 h-4 -ml-2 -mt-2 rounded-full border-2 transition-all duration-300 z-10
                  ${activeMarker === m.id ? 'bg-red-600 border-white scale-150' : 'bg-zinc-800 border-red-600 hover:scale-125'}`}
                style={{ left: `${m.x}%`, top: `${m.y}%` }}
              >
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] whitespace-nowrap text-gray-200 font-mono bg-black/80 px-2 py-0.5 rounded border border-red-900/50">
                  {m.name}
                </span>
              </button>
            ))}

            {/* Classified Markers - Spectrum added as hidden but clickable via list if we wanted, or just hidden markers */}
            <div className="absolute bottom-4 right-4 space-y-2 bg-black/80 p-4 rounded border border-red-900/30">
              <div className="flex items-center gap-2 text-xs text-red-500 font-mono">
                <div className="w-3 h-3 bg-black border border-red-900 rounded-full flex items-center justify-center">?</div>
                <span>유닛 제로: 위치 불명</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-red-500 font-mono">
                <div className="w-3 h-3 bg-black border border-red-900 rounded-full flex items-center justify-center">?</div>
                <span>비천파: 위치 불명</span>
              </div>
              <button 
                onClick={() => setActiveMarker('spectrum')}
                className="flex items-center gap-2 text-xs text-red-500 font-mono hover:text-red-400 transition-colors text-left"
              >
                <div className={`w-3 h-3 border border-red-900 rounded-full flex items-center justify-center transition-colors ${activeMarker === 'spectrum' ? 'bg-red-600' : 'bg-black'}`}>?</div>
                <span>스펙트룸: 위치 불명 (클릭하여 정보 확인)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-zinc-700 pb-2">지역 정보</h3>
          {activeLocation ? (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300 flex-1 flex flex-col">
              <div className="text-red-500 font-bold text-lg">{activeLocation.name}</div>
              
              <div className="relative aspect-video w-full bg-black rounded border border-zinc-700 overflow-hidden mb-2 group">
                <img 
                  src={getLocationImage(activeLocation.code)} 
                  alt={activeLocation.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-red-500 border border-red-500 px-1">
                  SECURE FEED: LIVE
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                해당 지역은 {activeLocation.name.split(' ')[0]}의 주요 거점입니다.
                상세 정보는 보안 등급이 필요합니다.
              </p>
              
              <div className="mt-auto p-4 bg-black/30 rounded border border-red-900/20">
                <div className="text-xs text-zinc-500 mb-1">THREAT LEVEL</div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full w-[45%]" />
                </div>
              </div>
            </div>
          ) : (
            <div className="text-zinc-500 text-sm text-center py-10 flex-1 flex items-center justify-center">
              <div>
                지도에서 거점을 선택하여<br/>정보를 확인하십시오.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [entered, setEntered] = useState(false);
  const [activeTab, setActiveTab] = useState('world');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!entered) {
    return <EntryScreen onEnter={() => setEntered(true)} />;
  }

  const tabs = [
    { id: 'world', label: '세계관', icon: Info },
    { id: 'factions', label: '주요세력', icon: Users },
    { id: 'classes', label: '병과', icon: Crosshair },
    { id: 'map', label: '지도', icon: MapIcon },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-red-900 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-red-900/50 h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <img src="https://raw.githubusercontent.com/qkrclstodn/t--logo/refs/heads/main/11.png" alt="Bicheonpa Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-black tracking-tighter text-white font-black-han-sans">태극의 그림자 안에서</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2
                ${activeTab === tab.id 
                  ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' 
                  : 'text-gray-400 hover:text-white hover:bg-zinc-800'}`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bg-zinc-900 border-b border-red-900 z-30 md:hidden p-4"
          >
            <div className="flex flex-col gap-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`p-4 rounded text-left font-bold flex items-center gap-3
                    ${activeTab === tab.id ? 'bg-red-900/30 text-red-500 border border-red-900' : 'text-gray-400'}`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'world' && <WorldView />}
            {activeTab === 'factions' && <Factions />}
            {activeTab === 'classes' && <Classes />}
            {activeTab === 'map' && <Map />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-600 text-xs font-mono">
        <p>© 203X BICHEONPA COMMAND. ALL RIGHTS RESERVED.</p>
        <p className="mt-2">PROPAGANDA DEPARTMENT</p>
      </footer>
    </div>
  );
}
