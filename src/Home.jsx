import products from "./products";

function Home({ addToCart, cart }) {

  return (
    <div>

      {/* Navbar */}
      <div className="navbar">

        <h1>🍔 ZenSnack</h1>

        <div className="cart-icon">
          🛒 {cart.length}
        </div>

      </div>

      {/* Banner */}
      <div className="banner">

        <div className="banner-left">

          <span className="mini-title">
            ĐẶC SẢN SÀI GÒN
          </span>

          <h1>Bánh Tráng Trộn</h1>

          <p>
            Hương vị truyền thống với bò khô.
          </p>

          <button>Đặt ngay</button>

        </div>

        <div className="banner-right">

          <span className="mini-title">
            GIẢI NHIỆT MÙA HÈ
          </span>

          <h1>Trà Sữa Full Topping</h1>

          <p>
            Trà sữa đậm vị cùng topping hấp dẫn.
          </p>

          <button>Khám phá</button>

        </div>

      </div>

      {/* Product */}
      <div className="container">

        <div className="title-row">

          <h2>Gợi ý hôm nay</h2>

        </div>

        <div className="grid">

          {products.map((item) => (

            <div className="card" key={item.id}>

              <img
                src={item.image}
                alt=""
                className="product-img"
              />

              <div className="card-body">

                <h3>{item.name}</h3>

                <p>{item.desc}</p>

                <h4>{item.price} VND</h4>

                <button
                  onClick={() => addToCart(item)}
                >
                  Thêm vào giỏ
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;