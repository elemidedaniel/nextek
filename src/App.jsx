import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import Orders from "./pages/Order";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoutes";
import Profile from "./pages/Profile";
import CheckoutPage from "./pages/CheckOut";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "products", element: <ProductPage /> },
        { path: "products/:id", element: <ProductDetailPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "cart", element: <CartPage /> },
        { path: "checkout", element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ) },
        { path: "profile", element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ) },

        // Auth pages
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },

        // Protected Orders page
        {
          path: "orders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

