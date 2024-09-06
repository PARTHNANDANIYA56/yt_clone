import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Video } from "./Components/Video/Video";
import { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Error } from "./Error";
function App() {
  const [sideBar, setSideBar] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar setSideBar={setSideBar} />
          <Home sideBar={sideBar} />
        </>
      ),
    },
    {
      path: "/video/:categoryId/:videoId",
      element: (
        <>
          <Navbar setSideBar={setSideBar} />
          <Video />
        </>
      ),
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
