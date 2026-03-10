import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-72 bg-white dark:bg-slate-900 border-r border-primary/10 flex flex-col p-6 gap-8">
          <Link to="/" className="flex items-center gap-3 px-2">
            <div className="p-2 bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl">smartphone</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-secondary">MobileStore</h2>
          </Link>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Menu</p>
            <a className="flex items-center gap-3 px-3 py-3 rounded-xl bg-primary/10 text-primary font-medium border border-primary/20" href="#">
              <span className="material-symbols-outlined">person</span>
              <span>Thông tin cá nhân</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined">history</span>
              <span>Lịch sử đơn hàng</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined">favorite</span>
              <span>Danh sách yêu thích</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined">location_on</span>
              <span>Sổ địa chỉ</span>
            </a>
          </div>
          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 px-3 py-4 mb-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                NV
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-bold truncate">Nguyễn Văn A</span>
                <span className="text-xs text-secondary font-medium">Thành viên Vàng</span>
              </div>
            </div>
            <a className="flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" href="#">
              <span className="material-symbols-outlined">logout</span>
              <span>Đăng xuất</span>
            </a>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10 space-y-8 overflow-y-auto">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Hồ sơ người dùng</h1>
              <p className="text-slate-500 dark:text-slate-400">Quản lý thông tin cá nhân và bảo mật tài khoản của bạn</p>
            </div>
            <div className="flex gap-3">
              <button className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </header>
          {/* Personal Info Card */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="h-32 galaxy-gradient w-full relative"></div>
            <div className="px-8 pb-8">
              <div className="relative flex flex-col md:flex-row items-end md:items-center gap-6 -mt-12">
                <div className="relative">
                  <img alt="User Avatar" className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 object-cover shadow-lg" data-alt="Portrait of a young man smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy4nW7-C4wqt1bb2Y4n3Udkm-BvfxYErJZGhjh3cpPhh7kSV2Wk3FbRCBKJKlGgOR54ANGoYcRW2QElG7gfyc-DlQ-YOm1ll_XMVeVTBqvLSfrns0uXIRJhcq60KtwqnmY__FmCl-41Zyvl7BKut4dfWLN0UhPIqIRbNpktIku--m2nnfBAyCmkYHlPHNIw4wod94HAeleX_2me4onwK3zubizanDqEE8TEkS5jbDZAVmnUNDHhQYmcCAvccR49bIp2TgnkOw7jSo" />
                  <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-sm">photo_camera</span>
                  </button>
                </div>
                <div className="flex-1 text-center md:text-left pt-2">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Nguyễn Văn A</h2>
                  <p className="text-slate-500">Khách hàng thân thiết từ 2023</p>
                </div>
                <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">edit</span>
                  Chỉnh sửa hồ sơ
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</label>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <span className="text-slate-700 dark:text-slate-200">nguyenvana@email.com</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Số điện thoại</label>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-primary">call</span>
                    <span className="text-slate-700 dark:text-slate-200">+84 90 123 4567</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Two Column Layout for Orders and Security */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders Summary */}
            <section className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">shopping_bag</span>
                  Đơn hàng gần đây
                </h3>
                <a className="text-sm font-bold text-primary hover:underline" href="#">Xem tất cả</a>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Mã đơn</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Ngày đặt</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right">Tổng cộng</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">#MS1234</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm">12/10/2023</td>
                      <td className="px-6 py-4 text-right font-bold">24.990.000₫</td>
                      <td className="px-6 py-4">
                        <div className="mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold w-max">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                          Đang giao
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">#MS1230</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm">05/10/2023</td>
                      <td className="px-6 py-4 text-right font-bold">1.250.000₫</td>
                      <td className="px-6 py-4">
                        <div className="mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold w-max">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Đã giao
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">#MS1215</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm">28/09/2023</td>
                      <td className="px-6 py-4 text-right font-bold">32.000.000₫</td>
                      <td className="px-6 py-4">
                        <div className="mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold w-max">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Đã giao
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            {/* Security Section */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2 px-2">
                <span className="material-symbols-outlined text-accent">shield</span>
                Bảo mật
              </h3>
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined">lock_reset</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-white">Mật khẩu</h4>
                    <p className="text-xs text-slate-500 mb-4">Thay đổi mật khẩu thường xuyên để bảo vệ tài khoản</p>
                    <button className="w-full py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      Đổi mật khẩu
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-white">Xác thực 2 lớp</h4>
                    <p className="text-xs text-slate-500 mb-4">Tăng cường bảo mật bằng mã OTP qua điện thoại</p>
                    <div className="flex items-center justify-between bg-primary/5 p-2 rounded-lg">
                      <span className="text-xs font-bold text-primary">Đã kích hoạt</span>
                      <div className="w-8 h-4 bg-primary rounded-full relative flex items-center px-1">
                        <div className="w-2.5 h-2.5 bg-white rounded-full ml-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Promo Card */}
              <div className="galaxy-gradient p-6 rounded-xl shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-8xl text-white">loyalty</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2 relative z-10">Tích điểm nhận quà</h4>
                <p className="text-white/80 text-sm mb-4 relative z-10">Bạn đang có 2,450 điểm thưởng MobileStore.</p>
                <button className="relative z-10 px-4 py-2 bg-accent text-background-dark font-bold text-xs rounded-lg hover:bg-white transition-colors">
                  Đổi quà ngay
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
