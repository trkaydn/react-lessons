import { createBrowserRouter, RouterProvider } from "react-router"
import Main from "./layouts/Main"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ErrorPage from "./pages/errors/Error"
import ProductDetails from "./pages/ProductDetails"
import ServerError from "./pages/errors/ServerError"
import NotFound from "./pages/errors/NotFound"
import { useEffect } from "react"
import requests from "./api/apiClient"
import { useCartContext } from "./context/CartContext.jsx"

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

  const { setCart } = useCartContext();

  useEffect(() => {
    requests.cart.get().then(response => {
      setCart(response);
    });
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
