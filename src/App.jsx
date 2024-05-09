import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./ui_components/Home.jsx";
import Menu, {loader as loaderMenu} from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import Order from "./features/order/Order.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";
import AppLayout from "./ui_components/AppLayout.jsx";
import Error from "./ui_components/Error.jsx";

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/menu', element: <Menu />, loader: loaderMenu, },
            { path: '/cart', element: <Cart /> },
            { path: '/order/new', element: <CreateOrder /> },
            { path: '/order/:orderId', element: <Order /> },
        ]
    },

]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
