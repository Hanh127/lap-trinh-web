import { Link } from 'react-router-dom';

export default function OtpVerification() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white/50 dark:bg-galaxy-deep/50 backdrop-blur-md">
            <Link to="/" className="flex items-center gap-3 text-primary dark:text-violet-400">
              <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined">smartphone</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">MobileStore</h2>
            </Link>
            <div className="flex flex-1 justify-end gap-4">
              <button className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
          </header>
          <main className="flex flex-1 items-center justify-center p-4">
            <div className="layout-content-container flex flex-col max-w-[480px] w-full bg-white dark:bg-slate-900 rounded-xl shadow-2xl shadow-primary/5 p-8 border border-slate-100 dark:border-slate-800">
              <div className="flex justify-center mb-8">
                <div className="relative size-24 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
                  <div className="absolute -top-1 -right-1 size-8 rounded-full bg-galaxy-purple flex items-center justify-center border-4 border-white dark:border-slate-900">
                    <span className="material-symbols-outlined text-white text-xs">lock</span>
                  </div>
                </div>
              </div>
              <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight text-center mb-2">Xác thực mã OTP</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed text-center mb-8">
                Vui lòng nhập mã 6 số đã được gửi đến thiết bị của bạn
              </p>
              <div className="flex justify-center mb-8">
                <fieldset className="relative flex gap-2 md:gap-3">
                  <input autoComplete="one-time-code" className="flex h-14 w-11 md:w-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" inputMode="numeric" max="9" maxLength={1} type="text" />
                  <input className="flex h-14 w-11 md:w-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" inputMode="numeric" max="9" maxLength={1} type="text" />
                  <input className="flex h-14 w-11 md:w-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" inputMode="numeric" max="9" maxLength={1} type="text" />
                  <input className="flex h-14 w-11 md:w-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" inputMode="numeric" max="9" maxLength={1} type="text" />
                  <input className="flex h-14 w-11 md:w-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" inputMode="numeric" max="9" maxLength={1} type="text" />
                  <input className="flex h-14 w-11 md:w-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" inputMode="numeric" max="9" maxLength={1} type="text" />
                </fieldset>
              </div>
              <div className="flex flex-col gap-4">
                <button className="w-full h-14 bg-primary hover:bg-galaxy-purple text-white font-bold rounded-xl transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                  <span>Xác nhận</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <div className="flex flex-col items-center gap-2 mt-4">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Bạn chưa nhận được mã?</p>
                  <button className="text-primary dark:text-violet-400 font-semibold hover:underline flex items-center gap-1 group">
                    <span className="material-symbols-outlined text-sm">refresh</span>
                    <span>Gửi lại sau (59s)</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <footer className="p-8 text-center text-slate-400 dark:text-slate-600 text-sm">
            © 2024 MobileStore. Bảo mật thông tin khách hàng là ưu tiên hàng đầu của chúng tôi.
          </footer>
        </div>
      </div>
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-galaxy-purple/5 blur-[120px]"></div>
      </div>
    </div>
  );
}
