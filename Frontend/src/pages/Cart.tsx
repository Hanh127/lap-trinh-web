import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation Bar */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white dark:bg-background-dark px-6 md:px-20 py-4 sticky top-0 z-50">
            <div className="flex items-center gap-4 text-primary">
              <Link to="/" className="flex items-center gap-3">
                <div className="size-8">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-tight uppercase">MobileStore</h2>
              </Link>
            </div>
            <div className="hidden md:flex flex-1 justify-center gap-8">
              <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Sản phẩm</a>
              <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Khuyến mãi</a>
              <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Tin tức</a>
              <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Liên hệ</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-700 dark:text-slate-300 hover:bg-primary/10 rounded-full">
                <span className="material-symbols-outlined">search</span>
              </button>
              <Link to="/cart" className="p-2 text-primary bg-primary/10 rounded-full relative block">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
              </Link>
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm">
                <span className="material-symbols-outlined text-sm">person</span>
                Đăng nhập
              </button>
            </div>
          </header>
          <main className="max-w-7xl mx-auto w-full px-6 md:px-20 py-10">
            {/* Breadcrumbs & Stepper */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Giỏ hàng của bạn</h1>
                <nav className="flex items-center gap-2 text-sm text-slate-500">
                  <Link className="hover:text-primary" to="/">Trang chủ</Link>
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                  <span className="text-primary font-medium">Giỏ hàng</span>
                </nav>
              </div>
              {/* Progress Stepper */}
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1 px-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Giỏ hàng</span>
                </div>
                <div className="w-12 h-[2px] bg-slate-200 dark:bg-slate-700 mb-5"></div>
                <div className="flex flex-col items-center gap-1 px-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center font-bold text-sm">2</div>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Thanh toán</span>
                </div>
                <div className="w-12 h-[2px] bg-slate-200 dark:bg-slate-700 mb-5"></div>
                <div className="flex flex-col items-center gap-1 px-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center font-bold text-sm">3</div>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Hoàn tất</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Products List */}
              <div className="lg:col-span-2 space-y-6">
                {/* Product Item 1 */}
                <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-primary/10 flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover" data-alt="iPhone 15 Pro Titanium in Galaxy Purple theme" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmx2VuIIqGEprRtliyVW_-LAP5kRJSplF9e1pqluQ1IV94Lt_da0W366AeWNVmrz5XyPRKW7LQLjPfzhklb5LQ04uZaY_eM0-EiK5x4Uiu0WQG3TRzS4zlQUYhNCnE3Ful3aqdXtrs5pIMK05S6KZvYl9pSRwtKHG7_QGXkeNko9T6MJ2LVRORJf1VgaZhVeV3WXsdXNCws2Wy6INZuOc8v_zC2XsQtDclf9dZr0X-A7byUnIO2OugxbpGq2kUb9Qc-zPbE1ON72w" />
                  </div>
                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <h3 className="text-lg font-bold">iPhone 15 Pro</h3>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#5a4d6e]"></span> Màu: Galaxy Purple</span>
                      <span>Dung lượng: 256GB</span>
                    </div>
                    <p className="text-primary font-bold text-lg">28.990.000₫</p>
                  </div>
                  <div className="flex flex-col items-end justify-between self-stretch">
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                    <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded transition-all">-</button>
                      <input className="w-10 text-center bg-transparent border-none focus:ring-0 font-bold text-sm" type="text" defaultValue="1" />
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded transition-all">+</button>
                    </div>
                  </div>
                </div>
                {/* Product Item 2 */}
                <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-primary/10 flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover" data-alt="Apple Official Silicone Case Purple" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByqUJaNwVauCqWFLxkjnivxCFXYqy9EQvBtp6yPpUyzO8vWas9I0052llB_QlhhXOcaxjW7oIbhM7h3x1kFescU1xMsk-UISqBDJEBuP_FVEyhMPApQVGnHvjoQWb6pCr_j1iMWVmYjRlt-iTR5H9L66x7mPV-lqJZ7QltunFiUPc3cUlU6xphuKehWV0C5ZqmVDSV2t-1XiyjQX7XJOrl_cQ11rs41CEsvP-LKz3j98MvYXddEcSO10O-1e6CEbyKMjFMpwox6ao" />
                  </div>
                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <h3 className="text-lg font-bold">Ốp lưng Silicone MagSafe</h3>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#3d334d]"></span> Màu: Deep Violet</span>
                      <span>Tương thích: iPhone 15 Pro</span>
                    </div>
                    <p className="text-primary font-bold text-lg">1.290.000₫</p>
                  </div>
                  <div className="flex flex-col items-end justify-between self-stretch">
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                    <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded transition-all">-</button>
                      <input className="w-10 text-center bg-transparent border-none focus:ring-0 font-bold text-sm" type="text" defaultValue="1" />
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded transition-all">+</button>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex justify-start">
                  <Link to="/" className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
              {/* Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-background-dark p-8 rounded-xl border border-primary/10 sticky top-28 shadow-sm">
                  <h3 className="text-xl font-bold mb-6">Tóm tắt đơn hàng</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Tạm tính</span>
                      <span className="font-medium text-slate-900 dark:text-slate-100">30.280.000₫</span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Giảm giá (Khuyến mãi)</span>
                      <span className="font-medium text-green-600">- 500.000₫</span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>Phí vận chuyển</span>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Miễn phí</span>
                    </div>
                    <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full my-2"></div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-lg font-bold">Tổng cộng</span>
                      <span className="text-2xl font-bold text-primary">29.780.000₫</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wider">Mã giảm giá</label>
                    <div className="flex gap-2">
                      <input className="flex-1 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-primary focus:border-primary" placeholder="Nhập mã" type="text" />
                      <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/20 transition-all">Áp dụng</button>
                    </div>
                  </div>
                  <Link to="/checkout" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                    Tiến hành thanh toán
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <div className="mt-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                      Thanh toán bảo mật &amp; an toàn
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="material-symbols-outlined text-primary text-lg">local_shipping</span>
                      Giao hàng nhanh toàn quốc (2-4 ngày)
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="material-symbols-outlined text-primary text-lg">assignment_return</span>
                      7 ngày đổi trả dễ dàng
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recommended Items Section */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8">Có thể bạn sẽ thích</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="group bg-white dark:bg-background-dark p-4 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
                  <div className="aspect-square rounded-lg bg-slate-50 dark:bg-slate-800 mb-4 overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="iPad Pro 12.9 inch Display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeC5fA25HDE3NgjvxL7jx4tBxAYI33z1UkXz6im_Xr3SXNxFhRqtGI7zzQIVkvAZ2YhRiYfDhA5zzPruMd7jQpofgj4RZLVBKh9KHcdhB5luS3zNPMvTBdrJM86U7jrx5kDebFZg1RwiOwBViNnJRkP46cFsX03FKejNvkmMnfFsnIUWFzAKRkW1vVU4cHataYN3gnlXpAFfOFq8gHU8M-tW8-OSZmBsxXUJDYX_bjaucpMyK9c4EKLUXWn6zXP-bY6Ei7FVinZO4" />
                    <button className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-primary text-xl">favorite</span>
                    </button>
                  </div>
                  <h4 className="font-bold text-sm mb-1 truncate">iPad Pro M2 12.9"</h4>
                  <p className="text-primary font-bold text-sm">31.490.000₫</p>
                </div>
                <div className="group bg-white dark:bg-background-dark p-4 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
                  <div className="aspect-square rounded-lg bg-slate-50 dark:bg-slate-800 mb-4 overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Apple Watch Series 9 Purple Band" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa4MhFy77nMugderZ99z-wzOCrD9SroVleYii5h7O5Q4QqNA4ca8yNsyHJqfQlzsj-Axm7VQUzGReLof7n0iDIKF6x8aYJgQOmdfkst3bwMkAYCPyBhb3jRTSo6vMEih3kp2wJzKQtig4SGUAfvQzfe9nxV8-1HAqF5hDD-0AzoLbeVyPMRG9g7cgzP3hZa67QqwMo1ZLSyRTLKSizUJPU8oP-f5ogzMlOVhObnbbjBRaplrSQK2E7FUKiif-8EZSK9QHMhUxqrgc" />
                    <button className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-primary text-xl">favorite</span>
                    </button>
                  </div>
                  <h4 className="font-bold text-sm mb-1 truncate">Apple Watch Series 9</h4>
                  <p className="text-primary font-bold text-sm">10.290.000₫</p>
                </div>
                <div className="group bg-white dark:bg-background-dark p-4 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
                  <div className="aspect-square rounded-lg bg-slate-50 dark:bg-slate-800 mb-4 overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="AirPods Max Space Gray" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZPPbQB9qtLWyrJG5_phJ9CQ7RpYrYK0BnDULQkvcpqcmYqKMLdKAFB1ySnS4EWJm3rEZmB5x-8qKf3UWVyjgZzyeoqLIuaq3Up9QdSc4o27vQS3VSC4M1DZpRGI_8R9zICXWu_1SKUCfIzuSbcIMPVBVf_FtsexR6ku682Bj5c3Xgsd9oOrUbUX5WBq3_d8_KQhgZ-pefYV7IvPQ3N69-UAH2whcLw7vI-Xb1_A-iYKKQYX5ZKsuTodikhJqpaUie0NXLZ8dWl8k" />
                    <button className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-primary text-xl">favorite</span>
                    </button>
                  </div>
                  <h4 className="font-bold text-sm mb-1 truncate">AirPods Max</h4>
                  <p className="text-primary font-bold text-sm">13.190.000₫</p>
                </div>
                <div className="group bg-white dark:bg-background-dark p-4 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
                  <div className="aspect-square rounded-lg bg-slate-50 dark:bg-slate-800 mb-4 overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Apple MagSafe Duo Charger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBLJq2cwR5LC-KzWJAXvLvHweEFqvsGoU7ENWDp0n76x9wXWNFATNZCQhQn7KzX77jqz27n3RFNp9S8BnfV1sBW0V4yE857zef8GRltJzul7FCI7zhzCcNSkV1OPnZbCLT-I47ynG8nlNzTl-jLQ7fA3UgKWUMe7lTDqfmYwdVdzGHMGYoDEpmlFueFyOvPy9eQqIDpJfnmVrdnC_BnK-C__az227bGUZ_HiA1ise0b0XcrbYzYuWackoCutNEPn_zrSxlf8uBre8" />
                    <button className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-primary text-xl">favorite</span>
                    </button>
                  </div>
                  <h4 className="font-bold text-sm mb-1 truncate">Sạc MagSafe Duo</h4>
                  <p className="text-primary font-bold text-sm">3.490.000₫</p>
                </div>
              </div>
            </div>
          </main>
          <footer className="bg-white dark:bg-background-dark border-t border-primary/10 py-12 px-6 md:px-20 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="col-span-1 md:col-span-1 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <div className="size-6">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold uppercase tracking-tight">MobileStore</h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">Hệ thống bán lẻ thiết bị di động hàng đầu Việt Nam. Cam kết chất lượng và dịch vụ tận tâm.</p>
                <div className="flex gap-4">
                  <a className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
                  <a className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-lg">mail</span></a>
                  <a className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-lg">call</span></a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-[0.2em] text-slate-400">Sản phẩm</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><a className="hover:text-primary transition-colors" href="#">iPhone</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">iPad</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">MacBook</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Phụ kiện</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-[0.2em] text-slate-400">Hỗ trợ</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><a className="hover:text-primary transition-colors" href="#">Chính sách bảo hành</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Phương thức thanh toán</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Giao hàng &amp; lắp đặt</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Câu hỏi thường gặp</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-[0.2em] text-slate-400">Đăng ký nhận tin</h4>
                <p className="text-xs text-slate-500 mb-4">Nhận cập nhật về các sản phẩm mới nhất và khuyến mãi hấp dẫn.</p>
                <div className="flex">
                  <input className="flex-1 text-sm bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-l-lg px-4 focus:ring-primary focus:border-primary" placeholder="Email của bạn" type="email" />
                  <button className="bg-primary text-white px-4 py-2 rounded-r-lg font-bold text-sm">Gửi</button>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary/5 text-center text-xs text-slate-400">
              © 2024 MobileStore. Tất cả các quyền được bảo lưu.
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
