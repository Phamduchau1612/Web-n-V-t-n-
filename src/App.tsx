import "./index.css";

function App() {
  return (
    <div>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="top-left">
          <span>Kênh Người Bán</span>
          <span>Trở Thành Đối Tác</span>
          <span>Tải Ứng Dụng</span>
        </div>

        <div className="top-right">
          <span>🔔 Thông Báo</span>
          <span>❓ Hỗ Trợ</span>
          <span>👤 Đăng Nhập</span>
        </div>
      </div>

      {/* HEADER */}
      <div className="header">

        <div className="logo">
          🍔 ZenSnack
        </div>

        <div className="search-box">
          <input placeholder="Tìm món ăn vặt..." />

          <button>🔍</button>
        </div>

        <div className="cart">
          🛒
        </div>

      </div>

      {/* KEYWORDS */}
      <div className="keywords">
        <span>Trà sữa</span>
        <span>Bánh tráng</span>
        <span>Cá viên</span>
        <span>Tokbokki</span>
        <span>Khoai tây chiên</span>
        <span>Xiên que</span>
      </div>

      {/* BANNER */}
      <div className="banner-section">

        <div className="main-banner">
          <h1>🔥 SALE ĂN VẶT</h1>

          <p>Giảm đến 50% hôm nay</p>

          <button>Mua ngay</button>
        </div>

        <div className="side-banner">

          <div className="mini-banner">
            <h3>🚚 Freeship</h3>

            <p>Đơn từ 49k</p>
          </div>

          <div className="mini-banner orange">
            <h3>🥤 Trà sữa</h3>

            <p>Buy 1 Get 1</p>
          </div>

        </div>

      </div>

      {/* MENU ICON */}
      <div className="menu-icons">

        <div className="menu-item">
          <div className="icon">🥤</div>
          <p>Trà Sữa</p>
        </div>

        <div className="menu-item">
          <div className="icon">🍟</div>
          <p>Ăn Vặt</p>
        </div>

        <div className="menu-item">
          <div className="icon">🔥</div>
          <p>Đồ Chiên</p>
        </div>

        <div className="menu-item">
          <div className="icon">🌭</div>
          <p>Xiên Que</p>
        </div>

        <div className="menu-item">
          <div className="icon">🥭</div>
          <p>Trái Cây</p>
        </div>

      </div>

      {/* PRODUCTS */}
      <div className="products">

        <div className="product-card">

          <img src="https://i.ytimg.com/vi/4IjRNTtAJas/maxresdefault.jpg" />

          <h3>Bánh tráng trộn</h3>

          <p>15.000đ</p>

          <button>+ Thêm vào giỏ</button>
        </div>

        <div className="product-card">

          <img src="https://statics.didau.com/image/2022/02/28/b90621dbe4a542f48b816f173ac32b85.jpg" />

          <h3>Trà sữa full topping</h3>

          <p>25.000đ</p>

          <button>+ Thêm vào giỏ</button>
        </div>

        <div className="product-card">

          <img src="https://kenh14cdn.com/2018/5/1/dang-van-ngu-zon0396-1525160843549412091433.jpg" />

          <h3>Cá viên chiên</h3>

          <p>20.000đ</p>

          <button>+ Thêm vào giỏ</button>
        </div>

        <div className="product-card">

          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591" />

          <h3>Pizza mini</h3>

          <p>35.000đ</p>

          <button>+ Thêm vào giỏ</button>
        </div>

      </div>

    </div>
  );
}

export default App;