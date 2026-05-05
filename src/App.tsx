import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ee4d2d", // màu Shopee
          borderRadius: 10,
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;