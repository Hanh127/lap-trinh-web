import { Link } from 'react-router-dom';

export default function ResetPassword() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-br from-primary/5 via-background-light to-primary/10 dark:from-background-dark dark:via-background-dark dark:to-primary/20">
        {/* Header / TopNavBar */}
        <header className="flex items-center justify-between border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4 sticky top-0 z-50">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-primary">
              <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h1 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">MobileStore</h1>
          </Link>
          <Link to="/otp-verification" className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </header>
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-white dark:bg-slate-900/50 rounded-xl shadow-2xl shadow-primary/5 border border-primary/10 p-8">
            {/* Title & Description */}
            <div className="mb-8">
              <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight mb-2">Thiết lập mật khẩu mới</h2>
              <p className="text-slate-600 dark:text-slate-400 text-base">Vui lòng nhập mật khẩu mới của bạn bên dưới để khôi phục quyền truy cập vào tài khoản.</p>
            </div>
            <form className="space-y-6">
              {/* New Password Field */}
              <div className="space-y-2">
                <label className="block text-slate-800 dark:text-slate-200 text-sm font-semibold">Mật khẩu mới</label>
                <div className="relative flex items-center">
                  <input className="w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 pr-12 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="Nhập mật khẩu mới" type="password" />
                  <button className="absolute right-4 text-slate-400 hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </div>
              {/* Confirm Password Field */}
              <div className="space-y-2">
                <label className="block text-slate-800 dark:text-slate-200 text-sm font-semibold">Xác nhận mật khẩu mới</label>
                <div className="relative flex items-center">
                  <input className="w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 pr-12 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="Nhập lại mật khẩu mới" type="password" />
                  <button className="absolute right-4 text-slate-400 hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </div>
              {/* Strength Indicator */}
              <div className="space-y-3 py-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Độ mạnh mật khẩu</span>
                  <span className="text-primary font-bold">Trung bình (60%)</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[60%] rounded-full shadow-[0_0_8px_rgba(15,44,189,0.5)]"></div>
                </div>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-xs text-green-500">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    <span>Ít nhất 8 ký tự</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="material-symbols-outlined text-sm">circle</span>
                    <span>Bao gồm chữ cái và số</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="material-symbols-outlined text-sm">circle</span>
                    <span>Ít nhất một ký tự đặc biệt (!@#)</span>
                  </li>
                </ul>
              </div>
              {/* Action Button */}
              <Link to="/login" className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Lưu mật khẩu mới
                <span className="material-symbols-outlined">lock_reset</span>
              </Link>
            </form>
            {/* Help Link */}
            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm">
                Bạn gặp khó khăn? <a className="text-primary font-bold hover:underline" href="#">Liên hệ hỗ trợ</a>
              </p>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="p-8 mt-auto border-t border-primary/5">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6 text-slate-400 grayscale opacity-60">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">verified_user</span>
                <span className="text-xs font-medium uppercase tracking-widest">Secure SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">gpp_maybe</span>
                <span className="text-xs font-medium uppercase tracking-widest">2FA Enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">encrypted</span>
                <span className="text-xs font-medium uppercase tracking-widest">End-to-end</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs">© 2024 MobileStore. Tất cả quyền được bảo lưu.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
