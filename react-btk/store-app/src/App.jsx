import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Login from "./pages/account/Login.jsx"
import Register from "./pages/account/Register.jsx"
import ErrorPage from "./pages/errors/Error"
import ProductDetails from "./pages/ProductDetails"
import ServerError from "./pages/errors/ServerError"
import NotFound from "./pages/errors/NotFound"
import { useEffect, useState } from "react"
import Cart from "./pages/cart/Cart.jsx"
import { getCart } from "./pages/cart/cartSlice.js"
import { getUser } from "./pages/account/accountSlice.js"
import { useDispatch } from "react-redux"
import Main from "./layouts/Main"
import Loading from "./components/Loading.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:"home",
        element: <Home />
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />
          },
          {
            path: ":id",
            element: <ProductDetails />
          },
        ]
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path:"error",
        children: [
          {
            index: true,
            element: <ErrorPage />
          },
          {
            path: "server-error",
            element: <ServerError />
          },
          {
            path: "not-found",
            element: <NotFound />
          }
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])

function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  const initApp = async () => {
    await dispatch(getUser());
    await dispatch(getCart());
  }

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [])

  if (loading) 
    return <Loading message="Uygulama Başlatılıyor..." />;

  return (
    <RouterProvider router={router} />
  );
}

export default App
