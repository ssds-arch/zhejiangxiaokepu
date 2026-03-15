import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userStore, User } from '../store/userStore';
import { User as UserIcon, Book, Phone, School, LogOut, ChevronRight, Star, Clock } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const u = userStore.getUser();
    if (!u) {
      navigate('/login', { replace: true });
    } else {
      setUser(u);
    }
  }, [navigate]);

  const handleLogout = () => {
    userStore.logout();
    navigate('/login', { replace: true });
  };

  if (!user) return null;

  return (
    <div className="min-h-full bg-[#F5F7FA] flex flex-col">
      {/* Header Background */}
      <div className="bg-blue-500 pt-12 pb-24 px-6 rounded-b-[40px] shadow-sm">
        <h1 className="text-white text-xl font-bold text-center">个人中心</h1>
      </div>

      {/* Profile Card */}
      <div className="px-4 -mt-16">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <UserIcon size={32} className="text-yellow-800" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-sm text-blue-500 font-medium mt-1">科学探索小达人</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500">
                <Book size={20} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500">就读年级</div>
                <div className="font-bold text-gray-800">{user.grade}年级</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-500">
                <Phone size={20} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500">家长手机</div>
                <div className="font-bold text-gray-800">{user.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}</div>
              </div>
            </div>

            {user.school && (
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-500">
                  <School size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500">所在学校</div>
                  <div className="font-bold text-gray-800">{user.school}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="px-4 mt-6 space-y-3">
        <button className="w-full bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm active:scale-[0.98] transition-transform">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
              <Star size={18} />
            </div>
            <span className="font-bold text-gray-700">我的收藏</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </button>

        <button className="w-full bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm active:scale-[0.98] transition-transform">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <Clock size={18} />
            </div>
            <span className="font-bold text-gray-700">阅读历史</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Logout */}
      <div className="px-4 mt-auto mb-8 pt-8">
        <button 
          onClick={handleLogout}
          className="w-full py-4 rounded-2xl text-red-500 font-bold bg-red-50 active:bg-red-100 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut size={20} />
          退出登录
        </button>
      </div>
    </div>
  );
}
