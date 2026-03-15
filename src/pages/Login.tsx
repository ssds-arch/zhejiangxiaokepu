import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userStore } from '../store/userStore';
import { BookOpen } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (userStore.getUser()) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const isFormValid = name.trim() !== '' && grade !== '' && phone.trim().length >= 11 && agreed;

  const handleLogin = () => {
    if (isFormValid) {
      userStore.setUser({ name, grade, phone, school });
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="min-h-full bg-[#F0F7FF] flex flex-col px-6 py-12">
      <div className="flex flex-col items-center mt-10 mb-12">
        <div className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-200 mb-4">
          <BookOpen size={40} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">浙江小学生科普报</h1>
        <p className="text-sm text-blue-600 mt-2 font-medium">探索科学奥秘，伴你快乐成长</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-blue-100 flex-1">
        <h2 className="text-lg font-bold text-gray-800 mb-6">欢迎来到科学世界！</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              学生姓名 <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="请输入真实姓名"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              就读年级 <span className="text-red-500">*</span>
            </label>
            <select 
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none"
            >
              <option value="" disabled>请选择年级</option>
              <option value="1">一年级</option>
              <option value="2">二年级</option>
              <option value="3">三年级</option>
              <option value="4">四年级</option>
              <option value="5">五年级</option>
              <option value="6">六年级</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              家长手机号 <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="请输入家长手机号"
              maxLength={11}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              所在学校 <span className="text-gray-400 font-normal">(选填)</span>
            </label>
            <input 
              type="text" 
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="请输入浙江地区小学名称"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="mt-8 flex items-start gap-2">
          <input 
            type="checkbox" 
            id="agreement"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-5 h-5 rounded text-blue-500 focus:ring-blue-500 border-gray-300"
          />
          <label htmlFor="agreement" className="text-xs text-gray-500 leading-relaxed">
            我已阅读并同意 
            <span className="text-blue-500 font-medium">《用户隐私政策》</span> 和 
            <span className="text-blue-500 font-medium">《儿童个人信息保护声明》</span>
          </label>
        </div>

        <button 
          onClick={handleLogin}
          disabled={!isFormValid}
          className={`w-full mt-6 py-4 rounded-2xl text-lg font-bold transition-all ${
            isFormValid 
              ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-200 active:scale-95' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          开启科学之旅
        </button>
      </div>
    </div>
  );
}
