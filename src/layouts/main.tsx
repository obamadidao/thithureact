import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
const MainLayout = () => {
    return (
       <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Thi</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">List</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/">Add</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/auth/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/auth/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <main style={{ padding: "0 100px" }}>
        <h1 style={{ textAlign: "center", margin: 10 }}>Bài Làm</h1>
      </main>
    </Layout> 
    );
};
export default MainLayout;
