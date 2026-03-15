import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userStore } from '../store/userStore';
import { mockIssues } from '../data/mockData';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [currentIssueIndex, setCurrentIssueIndex] = useState(0);

  useEffect(() => {
    if (!userStore.getUser()) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const issue = mockIssues[currentIssueIndex];

  if (!issue) return null;

  return (
    <div className="min-h-full bg-[#FDFBF7] flex flex-col">
      {/* Header */}
      <div className="bg-blue-500 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <Menu size={24} />
          <span className="font-bold text-lg">科普电子报</span>
        </div>
        <div className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
          {userStore.getUser()?.grade}年级版
        </div>
      </div>

      {/* Issue Selector */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <button 
          disabled={currentIssueIndex === mockIssues.length - 1}
          onClick={() => setCurrentIssueIndex(prev => prev + 1)}
          className="p-2 text-gray-500 disabled:opacity-30"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="text-center">
          <div className="font-bold text-gray-800">{issue.issueNumber}</div>
          <div className="text-xs text-gray-500">{issue.date}</div>
        </div>
        <button 
          disabled={currentIssueIndex === 0}
          onClick={() => setCurrentIssueIndex(prev => prev - 1)}
          className="p-2 text-gray-500 disabled:opacity-30"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Newspaper View (Interactive Image Map Simulator) */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <div className="relative w-full aspect-[2/3] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          {/* Simulated Newspaper Background */}
          <div className="absolute inset-0 bg-[#F4F1EA] p-4 flex flex-col">
            <div className="border-b-4 border-red-600 pb-2 mb-4 text-center">
              <h1 className="text-4xl font-serif font-bold text-red-600 tracking-widest">浙江科普报</h1>
            </div>
            <div className="flex-1 relative">
              {/* Render Hot Zones */}
              {issue.articles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => navigate(`/article/${article.id}`)}
                  className="absolute border-2 border-dashed border-blue-300 bg-blue-50/30 hover:bg-blue-100/50 transition-colors cursor-pointer flex items-center justify-center p-2 rounded"
                  style={{
                    left: `${article.x}%`,
                    top: `${article.y}%`,
                    width: `${article.width}%`,
                    height: `${article.height}%`
                  }}
                >
                  <span className="bg-white/80 px-2 py-1 rounded text-sm font-bold text-blue-800 shadow-sm text-center">
                    点击阅读: {article.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">点击版面上的虚线框阅读对应文章</p>
      </div>
    </div>
  );
}
