import { Card, Button, Badge, Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Menu() {
  const [cartCount, setCartCount] = useState(0);

  const foods = [
    {
      id: 1,
      name: "Trà sữa",
      price: 25000,
      img: "https://i.pinimg.com/originals/af/1c/20/af1c20a27156c0bf39afb8f4d1c9a58b.jpg",
    },
    {
      id: 2,
      name: "Bánh tráng trộn",
      price: 15000,
      img: "https://i.ytimg.com/vi/4IjRNTtAJas/maxresdefault.jpg",
    },
    {
      id: 3,
      name: "Cá viên chiên",
      price: 20000,
      img: "https://kenh14cdn.com/2018/5/1/dang-van-ngu-zon0396-1525160843549412091433.jpg",
    },
    {
      id: 4,
      name: "Xoài lắc",
      price: 20000,
      img: "https://i.pinimg.com/736x/ad/9b/7e/ad9b7e4711107a91d22ccc8fb4e988eb.jpg",
    },
  ];

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  const addToCart = (item: any) => {
    const oldCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const newCart = [...oldCart, item];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartCount(newCart.length);
  };

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <div
        style={{
          background: "#ee4d2d",
          padding: "15px 30px",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>🍔 Ăn Vặt Online</h2>

        <Link to="/cart">
          <Badge count={cartCount}>
            <ShoppingCartOutlined style={{ fontSize: 24, color: "#fff" }} />
          </Badge>
        </Link>
      </div>

      <Row gutter={[16, 16]} style={{ padding: 20 }}>
        {foods.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={item.name}
                  src={item.img}
                  style={{ height: 180, objectFit: "cover" }}
                />
              }
            >
              <h3>{item.name}</h3>
              <p style={{ color: "#ee4d2d", fontWeight: "bold" }}>
                {item.price} VND
              </p>

              <Button type="primary" block onClick={() => addToCart(item)}>
                Thêm vào giỏ
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Menu;