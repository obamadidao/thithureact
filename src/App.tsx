import { useRoutes } from "react-router-dom";
import "antd/dist/reset.css";
import MainLayout from "./layouts/main";
import ProductList from "./pages/products/list";

function App() {
const routes = useRoutes([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
          path: "products",
          element: <ProductList />,
      },
      {
        path: "auth/register",
      },
      {
        path: "auth/login",
      }
    ]
  }
]);
return <div>[{routes}]</div>
}
export default App;
