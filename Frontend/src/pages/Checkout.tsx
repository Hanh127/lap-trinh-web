import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation Bar */}
          <header className="flex items-center justify-between border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4 sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-4">
              <div className="size-10 flex items-center justify-center rounded-xl galaxy-gradient text-white">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-primary dark:text-primary">GALAXY STORE</h2>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/cart" className="flex items-center justify-center rounded-full size-10 bg-primary/10 text-primary transition-colors hover:bg-primary/20">
                <span className="material-symbols-outlined">shopping_cart</span>
              </Link>
              <button className="flex items-center justify-center rounded-full size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined">person</span>
              </button>
            </div>
          </header>
          <main className="flex-1 px-4 md:px-20 py-8 max-w-7xl mx-auto w-full">
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Giỏ hàng</span>
                </div>
                <div className="flex-1 h-[2px] mx-4 bg-primary mb-6"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-primary/20 animate-pulse">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Thanh toán</span>
                </div>
                <div className="flex-1 h-[2px] mx-4 bg-slate-200 dark:bg-slate-700 mb-6"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-400 flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Hoàn tất</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Forms */}
              <div className="lg:col-span-8 space-y-8">
                {/* Shipping Information */}
                <section className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary">local_shipping</span>
                    <h2 className="text-xl font-bold">Thông tin giao hàng</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Họ và tên</label>
                      <input className="w-full h-12 px-4 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Nguyễn Văn A" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Số điện thoại</label>
                      <input className="w-full h-12 px-4 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="0901234567" type="tel" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Email nhận thông báo</label>
                      <input className="w-full h-12 px-4 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="email@example.com" type="email" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Địa chỉ chi tiết</label>
                      <textarea className="w-full p-4 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Số nhà, tên đường, phường/xã..." rows={3}></textarea>
                    </div>
                  </div>
                </section>
                {/* Payment Method */}
                <section className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                    <h2 className="text-xl font-bold">Phương thức thanh toán</h2>
                  </div>
                  <div className="space-y-4">
                    <label className="relative flex items-center p-4 rounded-lg border-2 border-primary bg-primary/5 cursor-pointer group">
                      <input defaultChecked className="w-5 h-5 text-primary border-primary focus:ring-primary" name="payment" type="radio" />
                      <div className="ml-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">credit_card</span>
                        <div className="flex flex-col">
                          <span className="font-bold">Thẻ tín dụng / Ghi nợ</span>
                          <span className="text-xs text-slate-500">Visa, Mastercard, JCB, Amex</span>
                        </div>
                      </div>
                      <div className="ml-auto flex gap-2">
                        <div className="h-6 w-10 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
                        <div className="h-6 w-10 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[10px] font-bold">MASTER</div>
                      </div>
                    </label>
                    <label className="relative flex items-center p-4 rounded-lg border-2 border-slate-100 dark:border-slate-800 hover:border-primary/50 cursor-pointer transition-all">
                      <input className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="payment" type="radio" />
                      <div className="ml-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-500">account_balance</span>
                        <div className="flex flex-col">
                          <span className="font-bold">Chuyển khoản ngân hàng</span>
                          <span className="text-xs text-slate-500">Quét mã QR qua ứng dụng ngân hàng</span>
                        </div>
                      </div>
                    </label>
                    <label className="relative flex items-center p-4 rounded-lg border-2 border-slate-100 dark:border-slate-800 hover:border-primary/50 cursor-pointer transition-all">
                      <input className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="payment" type="radio" />
                      <div className="ml-4 flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-500">payments</span>
                        <div className="flex flex-col">
                          <span className="font-bold">Thanh toán khi nhận hàng (COD)</span>
                          <span className="text-xs text-slate-500">Thanh toán tiền mặt cho shipper</span>
                        </div>
                      </div>
                    </label>
                  </div>
                </section>
              </div>
              {/* Right Column: Order Summary */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-6">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-primary/5 overflow-hidden">
                    <div className="relative">
                      <div className="absolute -top-10 -right-10 size-32 bg-primary/10 rounded-full blur-3xl"></div>
                      <h2 className="text-xl font-bold mb-6 relative z-10">Tóm tắt đơn hàng</h2>
                      {/* Items */}
                      <div className="space-y-4 mb-6">
                        <div className="flex gap-4">
                          <div className="size-16 rounded-lg bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt="Titanium natural iPhone 15 Pro mobile phone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYxfTozEfuxJtsr-NGEIFnxjPdOAVgnYe7w1L06KymxWh51BAeIH-cx5oFNTAKIQw6AmtgnSBymk01tUTQeM6UpAuOK34b58TByXIeMxU8O3G7lNPaeQV_GBlmi_41LIDLdY4A_FV6dzk-WnKRP_XJ60gRp4cf7MXgbBstmOfZlnhUMhXKmkOx-DgdZY3Wi9BUECRnWS_W53lBnv23dWdDnb-9IWc_0CbZMLDEzMYzSthZoDd53EsxDQjuGVDeLngqNkrMZP0cGI8" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-bold line-clamp-1">iPhone 15 Pro - Natural Titanium</h4>
                            <p className="text-xs text-slate-500">SL: 1</p>
                            <p className="text-sm font-bold text-primary">28.990.000đ</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="size-16 rounded-lg bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt="Purple silicone protective case for iPhone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgwUaRCREt8r6lMQn0IUaM0O51EJ3Qtl5uRVEmrRLCKULxTvTvRhr3sTKEZuB0x9ZKY9GoZqOlts3g0-wpmv1yjRN6ep1xRjsb7P3fCaQ1jffGPzDtVeEXZypuaoti75KxMtnYo7sEIXTgIRt0kC0PONkCcl3_XoLz-B8Yj4qdZYlHk0eCsgg0LdSMpduzKpqgm5XXt7fKJIWmx64mW4pNarg0qdA-cglRoSTJDU_uXOMbGFA0IIpO21v9xrm2fTjfMvIi0Uavv6I" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-bold line-clamp-1">Silicone Case with MagSafe - Purple</h4>
                            <p className="text-xs text-slate-500">SL: 1</p>
                            <p className="text-sm font-bold text-primary">1.290.000đ</p>
                          </div>
                        </div>
                      </div>
                      <hr className="border-slate-100 dark:border-slate-800 mb-6" />
                      {/* Totals */}
                      <div className="space-y-3 mb-8">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Tạm tính</span>
                          <span className="font-medium">30.280.000đ</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Phí vận chuyển</span>
                          <span className="text-green-500 font-medium">Miễn phí</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Giảm giá</span>
                          <span className="text-red-500 font-medium">-500.000đ</span>
                        </div>
                        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between">
                          <span className="font-bold text-lg">Tổng cộng</span>
                          <span className="font-bold text-xl text-primary">29.780.000đ</span>
                        </div>
                      </div>
                      {/* Checkout Button */}
                      <button className="w-full h-14 galaxy-gradient text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        ĐẶT HÀNG NGAY
                      </button>
                      <p className="text-[10px] text-center mt-4 text-slate-400">
                        Bằng cách đặt hàng, bạn đồng ý với các Điều khoản &amp; Chính sách của Galaxy Store.
                      </p>
                    </div>
                  </div>
                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                      <span className="material-symbols-outlined text-primary text-xl mb-1">verified_user</span>
                      <span className="text-[9px] font-bold uppercase">Bảo mật</span>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                      <span className="material-symbols-outlined text-primary text-xl mb-1">replay</span>
                      <span className="text-[9px] font-bold uppercase">30 ngày đổi trả</span>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                      <span className="material-symbols-outlined text-primary text-xl mb-1">support_agent</span>
                      <span className="text-[9px] font-bold uppercase">Hỗ trợ 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* Footer */}
          <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="size-8 flex items-center justify-center rounded-lg galaxy-gradient text-white">
                  <span className="material-symbols-outlined text-sm">rocket_launch</span>
                </div>
                <span className="font-bold tracking-tight text-slate-600 dark:text-slate-300">GALAXY STORE © 2024</span>
              </div>
              <div className="flex gap-8 text-sm text-slate-500">
                <a className="hover:text-primary transition-colors" href="#">Chính sách bảo mật</a>
                <a className="hover:text-primary transition-colors" href="#">Điều khoản dịch vụ</a>
                <a className="hover:text-primary transition-colors" href="#">Liên hệ</a>
              </div>
              <div className="flex gap-4">
                <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary cursor-pointer transition-all">
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                </div>
                <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary cursor-pointer transition-all">
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.355 2.618 6.778 6.98 6.978 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.359-2.62-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
