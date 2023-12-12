import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResults from "./Pages/Search";
import Hero from "./Pages/Hero";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero />,
    },
    {
      path: "/Hero",
      element: <Hero />,
    },
    {
      path: "/test",
      element: <SearchResults />,
    },
    {
      path: "/search",
      element: <SearchResults />,
    },
    {
      path: "/images",
      element: <SearchResults />,
    },
    {
      path: "/videos",
      element: <SearchResults />,
    },
    {
      path: "/news",
      element: <SearchResults />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
