import { Link } from 'react-router-dom';

export default function ProductDetail() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation Bar */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-20 py-4 sticky top-0 z-50 bg-[#4c0099] text-white">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">phone_iphone</span>
                <h2 className="text-xl font-bold leading-tight tracking-tight">MobileStore</h2>
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                <Link className="text-sm font-medium text-white/90 hover:text-white transition-colors" to="/">Trang chủ</Link>
                <a className="text-sm font-medium text-white/90 hover:text-white transition-colors" href="#">Điện thoại</a>
                <a className="text-sm font-medium text-white/90 hover:text-white transition-colors" href="#">Phụ kiện</a>
                <a className="text-sm font-medium text-white/90 hover:text-white transition-colors" href="#">Khuyến mãi</a>
              </nav>
            </div>
            <div className="flex flex-1 justify-end gap-4 items-center">
              <div className="hidden sm:flex relative max-w-xs w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input className="w-full border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary bg-white/10 text-white placeholder-white/60" placeholder="Tìm kiếm iPhone, phụ kiện..." />
              </div>
              <Link to="/cart" className="p-2 hover:bg-white/10 rounded-lg relative text-white">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
              </Link>
              <button className="p-2 hover:bg-white/10 rounded-lg relative text-white">
                <span className="material-symbols-outlined">person</span>
              </button>
            </div>
          </header>
          <main className="max-w-7xl mx-auto w-full px-4 md:px-10 py-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link className="hover:text-primary" to="/">Trang chủ</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <a className="hover:text-primary" href="#">iPhone</a>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-slate-900 dark:text-white font-medium">iPhone 15 Pro</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Image Gallery */}
              <div className="flex flex-col gap-4">
                <div className="aspect-square bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 p-8 flex items-center justify-center">
                  <img className="w-full h-full object-contain" data-alt="Cận cảnh mặt trước và sau của iPhone 15 Pro màu Titan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs5tXQVwtu8gQMB819U2f9F3-GdIOKhRymp9i6gku0rXD3dYzQww46hY7iZSw71n5KEt7pFJjyNc4T8hyzNmWUriA6MwQHatSkndMo73HVI73CP1X_GA9GKPQSyPPwW-e9a_owXKteYqy5m6okGuTfLhzeREQW5TdDtl0C3cKB_0bpYlhBDfDToue2cqO1wj7zh4F28YwcM7oOZXvhINnMLYsS9SEEPhTycbFQzRmcuGzCu4qekszhaA6e3rRP6HYQdHwXvlNZY30" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <button className="aspect-square bg-white dark:bg-slate-800 rounded-lg border-2 border-primary overflow-hidden p-2">
                    <img className="w-full h-full object-contain" data-alt="iPhone 15 Pro góc chính diện" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm3xDsdZqAJCKU-3NoQQfxaUoaVqfCrd5xJ6iMBYV_TYA-6MOh211ZrgDx_Qgk_OYHqzA_UZRx12r5uLojz_CeRIKFv6DVcQ24FK7zyw0tK94H7pUOBE_sLDDcB0tIFTN0lXexeHURdr0d2DWwvzIpi2kE2xzsu0JrGeYJ-WjK1ufYgdx0ppIE2A-xKsLhDyksypdLM0uuG6dFN8PxcD7RmAgp9OglzGinPdCrxbXoUmz_uADA8fy9QgVzRi-NqUcWXXc565JyxdA" />
                  </button>
                  <button className="aspect-square bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden p-2 hover:border-primary transition-colors">
                    <img className="w-full h-full object-contain" data-alt="iPhone 15 Pro góc nghiêng" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo4US7MoxCWFrihDt40bRRj353O1IfcJV5NVC76wZgIruG4wrLg-j5AXkZlxQuNQRB5woWX1lQP94iBj5qManjs5wFA14gYSMhIzqDCbpTfLegd2GfxXGnJA5Y6cSRdgP7GNDzqdfRKTY-jmAR-W5aiwznqwJFvMfuG6ZgI5WVgwbV7kbV878G0EDajhpRRn3dL2yYo_Rm_hP6IFxD-k_9KMZ-X-BWzIDuzdsVq_i7NVqMf5YGhbyw3rKXQanXDri4ar5hK3LqAoQ" />
                  </button>
                  <button className="aspect-square bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden p-2 hover:border-primary transition-colors">
                    <img className="w-full h-full object-contain" data-alt="iPhone 15 Pro cạnh bên" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfKlNBD9ep4wh4_nVP0gBc-mEdYOv-fQTljrn6Zm79ahkayT7kiTZ6KwORKlOHERQO5fIPVbed3YvUWPL5M3xqLq0BYw1yMK1eA2AkLDwazTOuW7ndGZ0j5hW1yD4mZ68oETeOR_g7_QPjpk3d_6gmh-qhV4WxR4KD12bx-BHV62pNfUEhuAaufYYEA1gN-OsO_AYO076abMAEiCOyP8VUxrgitnwJ6WLGsS-z_f-so97zARZANbanRvi5AOQIK_yEgCKIb7RBCQA" />
                  </button>
                  <button className="aspect-square bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden p-2 hover:border-primary transition-colors">
                    <img className="w-full h-full object-contain" data-alt="Hộp iPhone 15 Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPhZC-OYnJSSoZ1hrgv__xaCB2njG78msxahYIyxNDm2aufyXiUM9OskJGKEJtZodWo1_7BDgydwQogcs-IjpzUEaMMIUB5Gh4Y0qPW1K8MAJ7MgsB9kpTB3mjPuqt8gcQuXs9Fe7Ku4jMti2KrsUjtTSivdzWC6yN-7nMdMd9MMf_vJACjTALOVu61OUUq0D_z9JVED4tjMbyeQKjKUTrT44GdNQeWqEY7rdh61SqB9IaAY0YOMYyCAkm0h86k7bknu2sIcdpEZk" />
                  </button>
                </div>
              </div>
              {/* Product Info */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Mới 2024</span>
                  <h1 className="text-4xl font-bold mb-2">iPhone 15 Pro</h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex text-yellow-400">
                      <span className="material-symbols-outlined fill-1">star</span>
                      <span className="material-symbols-outlined fill-1">star</span>
                      <span className="material-symbols-outlined fill-1">star</span>
                      <span className="material-symbols-outlined fill-1">star</span>
                      <span className="material-symbols-outlined">star_half</span>
                    </div>
                    <span className="text-sm text-slate-500 underline">128 nhận xét</span>
                    <span className="text-sm text-slate-500">| Đã bán 2.5k</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-primary">28.990.000₫</span>
                    <span className="text-xl text-slate-400 line-through">34.990.000₫</span>
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-17%</span>
                  </div>
                </div>
                {/* Storage selection */}
                <div className="mb-8">
                  <p className="text-sm font-bold mb-4">Dung lượng bộ nhớ</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 border-2 border-primary rounded-xl text-sm font-bold bg-primary/5">128GB</button>
                    <button className="px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold hover:border-primary transition-colors">256GB</button>
                    <button className="px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold hover:border-primary transition-colors">512GB</button>
                    <button className="px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold hover:border-primary transition-colors">1TB</button>
                  </div>
                </div>
                {/* Color Selection */}
                <div className="mb-10">
                  <p className="text-sm font-bold mb-4">Chọn màu sắc: <span className="font-normal text-slate-500">Titan Tự Nhiên</span></p>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full border-2 border-primary p-0.5" title="Titan Tự Nhiên">
                      <div className="w-full h-full rounded-full bg-[#8e8c87]"></div>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 p-0.5 hover:border-primary transition-colors" title="Titan Xanh">
                      <div className="w-full h-full rounded-full bg-[#2f323c]"></div>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 p-0.5 hover:border-primary transition-colors" title="Titan Trắng">
                      <div className="w-full h-full rounded-full bg-[#f2f1ed]"></div>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 p-0.5 hover:border-primary transition-colors" title="Titan Đen">
                      <div className="w-full h-full rounded-full bg-[#222222]"></div>
                    </button>
                  </div>
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                    <span className="material-symbols-outlined">bolt</span>
                    MUA NGAY
                  </button>
                  <button className="flex-1 bg-white dark:bg-slate-800 border-2 border-primary text-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-all">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                    THÊM VÀO GIỎ
                  </button>
                </div>
                <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center gap-4 border border-slate-100 dark:border-slate-700">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <div className="text-sm">
                    <p className="font-bold">Chính sách bảo hành</p>
                    <p className="text-slate-500">Bảo hành 12 tháng chính hãng Apple Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Technical Specs Table */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Thông số kỹ thuật</h3>
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between">
                    <span className="text-slate-500">Màn hình:</span>
                    <span className="font-medium">6.1", LTPO Super Retina XDR OLED, 120Hz</span>
                  </div>
                  <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between">
                    <span className="text-slate-500">Chipset:</span>
                    <span className="font-medium">Apple A17 Pro (3 nm)</span>
                  </div>
                  <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between">
                    <span className="text-slate-500">RAM:</span>
                    <span className="font-medium">8 GB</span>
                  </div>
                  <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between">
                    <span className="text-slate-500">Camera sau:</span>
                    <span className="font-medium">48MP + 12MP + 12MP (3x zoom)</span>
                  </div>
                  <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between">
                    <span className="text-slate-500">Camera trước:</span>
                    <span className="font-medium">12MP, f/1.9</span>
                  </div>
                  <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between">
                    <span className="text-slate-500">Pin:</span>
                    <span className="font-medium">3274 mAh, Sạc nhanh 20W</span>
                  </div>
                  <div className="p-4 flex justify-between md:col-span-2">
                    <span className="text-slate-500">Tính năng khác:</span>
                    <span className="font-medium">Face ID, Kháng nước IP68, MagSafe, Cổng USB-C</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer Reviews Section */}
            <div className="mb-16">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Đánh giá khách hàng</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-bold">4.8</span>
                    <div>
                      <div className="flex text-yellow-400">
                        <span className="material-symbols-outlined fill-1">star</span>
                        <span className="material-symbols-outlined fill-1">star</span>
                        <span className="material-symbols-outlined fill-1">star</span>
                        <span className="material-symbols-outlined fill-1">star</span>
                        <span className="material-symbols-outlined fill-1">star</span>
                      </div>
                      <p className="text-sm text-slate-500">Dựa trên 128 đánh giá</p>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors">Viết đánh giá</button>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">NH</div>
                      <div>
                        <p className="font-bold">Nguyễn Hoàng</p>
                        <div className="flex text-yellow-400 text-xs">
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-slate-500">2 ngày trước</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Máy quá đẹp, màu Titan tự nhiên nhìn rất sang. Giao hàng cực nhanh, đóng gói cẩn thận. Rất hài lòng!</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">TT</div>
                      <div>
                        <p className="font-bold">Trần Thuỷ</p>
                        <div className="flex text-yellow-400 text-xs">
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-slate-500">5 ngày trước</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Nâng cấp từ iPhone 12 Pro lên 15 Pro cảm nhận rõ rệt về hiệu năng và màn hình 120Hz. Cổng USB-C rất tiện dụng.</p>
                </div>
              </div>
            </div>
            {/* Related Products */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Sản phẩm tương tự</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Related 1 */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all group">
                  <div className="aspect-square mb-4 p-4">
                    <img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="iPhone 15 Pro Max" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpZM8dXztxSawVB0eZ17mKqWR-XvIT00MpVZTu803Zeuqz8MxnrINR6w1XrNwoahS05rYxkellGJTUn0aYffNppVk98ikc9-tQgwzjo82qCeHSJgyEq2X9m-xgJqekrQBei7dVnXp2l2mz2n3U1YLH8dKt5Nch-asEMQvRBllJe4p6GN1ZhM122HmaSnUDvVXsiypxty4PlRYBjaoQZKAHhBrUNGF2uKJyCmSvHompYvMaT2Wp-soSl1UyCHmk7c3Hdw0HzjNnv5I" />
                  </div>
                  <h4 className="font-bold mb-2">iPhone 15 Pro Max</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">33.490.000₫</span>
                    <button className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined text-sm">shopping_cart</span>
                    </button>
                  </div>
                </div>
                {/* Related 2 */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all group">
                  <div className="aspect-square mb-4 p-4">
                    <img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="iPhone 15" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKvmJa6scKpzQ2yCnlGrWwPv5lyvHceMWC2DohsL5K1_raUyRy4SyX-ItnV2m-3v6kkFI9dKQ8-JJ4ucnDq6daCkjCbjYmZJM4RH2qwAvuHVNzF5sGaX5IFrlXGGtGW6i_b8cnx2t8QbpV_cTS8yBbH_Z0fqYp3oUlCgMkE7nJ15KL2L44zmiJWkp2nNID9pVwcFnx6n7Odiru0jnBK0N5TOKKlTTvBUm2X8Z2wLGwYldUI_-xo8mPIz0tKaa5-OecMyLJgsc6z74" />
                  </div>
                  <h4 className="font-bold mb-2">iPhone 15</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">19.990.000₫</span>
                    <button className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined text-sm">shopping_cart</span>
                    </button>
                  </div>
                </div>
                {/* Related 3 */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all group">
                  <div className="aspect-square mb-4 p-4">
                    <img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="iPhone 14 Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC96TZ7-lkbZV3XTB7PWhYzua_E4TT4PVFUlhdVI05_bapZdKE_nBLk9tY9jxmiyDpeln54j_-9nW3EbBKpobdnBe-LSPJ1VXRE3n0P_F9Br8kM3n4auZj-WgQWmc8ZBuF0LUieB2BdtD9QTMucYqIoVALFTMhza8t181A-qUkS2afpxcEuOEUfui-K3hgw9jUG_7d-B2_jM0Fuia3H4bi6FfKH5_qtuJ_Fs9TMLZlrBq2kpllxiVl32r1xA_LyTyZu-SpDp297eLM" />
                  </div>
                  <h4 className="font-bold mb-2">iPhone 14 Pro</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">24.590.000₫</span>
                    <button className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined text-sm">shopping_cart</span>
                    </button>
                  </div>
                </div>
                {/* Related 4 */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all group">
                  <div className="aspect-square mb-4 p-4">
                    <img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="Samsung Galaxy S23 Ultra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8JwX_JJ5GVyMXBdI_7xJORR3ASVwGagdTMT85d8U1fOudWh7hEVt-1ZL1Q9UFuq1hW9eb-T232FEe35mudqrAPMbTVK50kCSWEVUuo2TH4s3qzxRnU2Z0mirrlxIziJtTStl4cXHvwRMMJWes1DvtfW5T-7NHEEa0S2rvc1wrQufYJYOsv-q1wAEYvbd1idhG2K3uwQNX4wRTxFvp543FBWWEBKVoNPaidG67d5V88WdBZsD5RYaw6EvFo_29nQajYOWJ2TA7ZUU" />
                  </div>
                  <h4 className="font-bold mb-2">Galaxy S23 Ultra</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">23.990.000₫</span>
                    <button className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined text-sm">shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* Footer */}
          <footer className="bg-white dark:bg-slate-900 border-t border-primary/10 py-12 px-6 md:px-20 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">phone_iphone</span>
                  <h2 className="text-xl font-bold">MobileStore</h2>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">Hệ thống bán lẻ điện thoại di động chính hãng, phụ kiện công nghệ hàng đầu Việt Nam.</p>
              </div>
              <div>
                <h4 className="font-bold mb-6">Chính sách</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a className="hover:text-primary" href="#">Chính sách bảo mật</a></li>
                  <li><a className="hover:text-primary" href="#">Điều khoản dịch vụ</a></li>
                  <li><a className="hover:text-primary" href="#">Chính sách bảo hành</a></li>
                  <li><a className="hover:text-primary" href="#">Giao hàng &amp; đổi trả</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6">Liên kết</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a className="hover:text-primary" href="#">Sản phẩm mới</a></li>
                  <li><a className="hover:text-primary" href="#">Khuyến mãi</a></li>
                  <li><a className="hover:text-primary" href="#">Hệ thống cửa hàng</a></li>
                  <li><a className="hover:text-primary" href="#">Liên hệ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6">Liên hệ</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">call</span>
                    1900 6789
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    contact@mobilestore.vn
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    123 Đường ABC, Quận 1, TP.HCM
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-slate-100 dark:border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
              © 2024 MobileStore. All rights reserved. Designed with Galaxy Purple Theme.
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
