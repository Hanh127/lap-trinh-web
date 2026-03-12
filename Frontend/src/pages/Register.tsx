import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header className="w-full px-6 lg:px-20 py-6 flex items-center justify-between border-b border-primary/10 bg-white/50 dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg text-white">
            <span className="material-symbols-outlined block">rocket_launch</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">MobileStore</h1>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400 hidden sm:block">Already have an account?</span>
          <Link to="/login" className="px-5 py-2 text-sm font-bold border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">Log In</Link>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-[96px]"></div>
        </div>
        <div className="w-full max-w-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden relative z-10">
          <div className="p-8 sm:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Join the Galaxy</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">Experience the future of premium mobile technology</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <img alt="" className="w-5 h-5" data-alt="Google logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClSFZRwpAlIOwHduOVrrp3RzKUDt66zSjh09qy2UucmhVSz-KPyB0MRuNVfyEURqqbwt420xmaqYwMILFfYFlgsTKKVKAKK8ZItjGHn51zte6VMd1sXQ4dvhcaVrZ4Qpum67kH_lOJoHIu-s8GqgCXTotliBhxScN3iJUHAttP_DOoTh1NwyMRukKPQWmzeHP8jkiyMXTa98mPWMcoDAJjXOPe5r_dKMji13woFfhpkTEaCvtRbTl9zdQy-CVym0BNN2sAeXXtzSU" />
                <span className="text-sm font-semibold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 px-4 py-3 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                <span className="text-sm font-semibold">Facebook</span>
              </button>
            </div>
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-800"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-slate-900 px-2 text-slate-500">Or register with email</span></div>
            </div>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                  <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                    <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="name@example.com" type="email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">smartphone</span>
                    <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                  <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="••••••••" type="password" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Confirm Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">lock_reset</span>
                  <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="••••••••" type="password" />
                </div>
              </div>
              <div className="flex items-start gap-3 py-2">
                <input className="mt-1 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" id="terms" type="checkbox" />
                <label className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed" htmlFor="terms">
                  I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>, including the processing of my personal data.
                </label>
              </div>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/30 hover:shadow-primary/40 active:scale-[0.98] transition-all" type="submit">
                Create Galaxy Account
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer className="w-full px-6 lg:px-20 py-10 bg-slate-50 dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 opacity-60 grayscale">
            <div className="bg-slate-400 p-1 rounded">
              <span className="material-symbols-outlined block text-white text-xs">rocket_launch</span>
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-700 dark:text-slate-300">MobileStore</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Cookie Settings</a>
            <a className="hover:text-primary transition-colors" href="#">Help Center</a>
          </div>
          <p className="text-xs text-slate-400">© 2024 MobileStore International. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
