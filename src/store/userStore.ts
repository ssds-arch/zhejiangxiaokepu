export interface User {
  name: string;
  grade: string;
  phone: string;
  school?: string;
}

// Simple in-memory store for prototype
let currentUser: User | null = null;

export const userStore = {
  getUser: () => {
    if (!currentUser) {
      const stored = localStorage.getItem('zhejiang_science_user');
      if (stored) currentUser = JSON.parse(stored);
    }
    return currentUser;
  },
  setUser: (user: User) => {
    currentUser = user;
    localStorage.setItem('zhejiang_science_user', JSON.stringify(user));
  },
  logout: () => {
    currentUser = null;
    localStorage.removeItem('zhejiang_science_user');
  }
};
