import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockArticles } from '../data/mockData';
import { ChevronLeft, Volume2, VolumeX, ZoomIn, ZoomOut, Star, Sun, Moon } from 'lucide-react';

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = mockArticles[id || ''];

  const [isPlaying, setIsPlaying] = useState(false);
  const [fontSize, setFontSize] = useState(18); // Base font size
  const [isEyeCare, setIsEyeCare] = useState(true);
  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    // Stop playing when leaving
    return () => setIsPlaying(false);
  }, []);

  if (!article) {
    return <div className="p-8 text-center">文章找不到了~</div>;
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real app, integrate with Web Speech API or custom audio player here
  };

  return (
    <div className={`min-h-full flex flex-col transition-colors duration-300 ${isEyeCare ? 'bg-[#FAF3E0] text-[#333333]' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <div className={`px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm transition-colors ${isEyeCare ? 'bg-[#F2E8D0]' : 'bg-white'}`}>
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600">
          <ChevronLeft size={28} />
        </button>
        <div className="flex gap-2">
          <button onClick={() => setIsEyeCare(!isEyeCare)} className="p-2 text-gray-600 bg-black/5 rounded-full">
            {isEyeCare ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="p-2 text-gray-600 bg-black/5 rounded-full">
            <ZoomOut size={20} />
          </button>
          <button onClick={() => setFontSize(Math.min(28, fontSize + 2))} className="p-2 text-gray-600 bg-black/5 rounded-full">
            <ZoomIn size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8 pb-32">
        <h1 className="font-bold leading-tight mb-4" style={{ fontSize: `${fontSize * 1.5}px` }}>
          {article.title}
        </h1>
        
        <div className="flex items-center justify-between mb-8 text-sm opacity-60">
          <span>作者：{article.author}</span>
          <span>{article.date}</span>
        </div>

        <div 
          className="leading-relaxed whitespace-pre-wrap font-serif"
          style={{ fontSize: `${fontSize}px` }}
        >
          {article.content}
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[380px] bg-white rounded-full shadow-xl border border-gray-100 p-2 flex items-center justify-between">
        <button 
          onClick={togglePlay}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold transition-all ${isPlaying ? 'bg-blue-100 text-blue-600' : 'bg-blue-500 text-white'}`}
        >
          {isPlaying ? <VolumeX size={20} /> : <Volume2 size={20} />}
          {isPlaying ? '暂停播报' : 'AI 语音播报'}
        </button>
        <div className="w-px h-8 bg-gray-200 mx-2"></div>
        <button 
          onClick={() => setIsStarred(!isStarred)}
          className={`w-14 h-14 flex items-center justify-center rounded-full transition-colors ${isStarred ? 'text-yellow-500' : 'text-gray-400'}`}
        >
          <Star size={24} fill={isStarred ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
}
