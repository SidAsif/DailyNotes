import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notes from "./components/Notes";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Delete from "./components/Delete";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Notes />,
        </>
      ),
    },
    {
      path: "/Create",
      element: (
        <>
          <Navbar />
          <Create />,
        </>
      ),
    },
    {
      path: "/Delete",
      element: (
        <>
          <Navbar />
          <Delete />,
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
