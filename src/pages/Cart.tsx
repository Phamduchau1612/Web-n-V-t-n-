import { List, Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const removeItem = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cart.reduce((sum: number, item: any) => sum + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Giỏ hàng</h1>

      <Link to="/">
        <Button style={{ marginBottom: 20 }}>⬅️ Quay lại</Button>
      </Link>

      <List
        bordered
        dataSource={cart}
        renderItem={(item: any, index: number) => (
          <List.Item
            actions={[
              <Button danger onClick={() => removeItem(index)}>
                Xóa
              </Button>,
            ]}
          >
            {item.name} - {item.price} VND
          </List.Item>
        )}
      />

      <h2 style={{ marginTop: 20 }}>Tổng tiền: {total} VND</h2>
    </div>
  );
}

export default Cart;