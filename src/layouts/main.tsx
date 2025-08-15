import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";
import type { MenuProps } from 'antd'
const MainLayout = () => {
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            key: '1',
            label: 'List',
        },
        {
            key: '2',
            label: 'Add',
        },
        {
            key: '3',
            label: 'Register',
        },
        {
            key: '4',
            label: 'Login',
        },
    ];
    return (
       <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} items={items}></Menu>


      </Header>
      <main style={{ padding: "0 100px" }}>
        <h1 style={{ textAlign: "center", margin: 10 }}>Bài Làm</h1>
      <Outlet />
      </main>
    </Layout> 
    );
};
export default MainLayout;
