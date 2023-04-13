import "./App.css";
import Banner from "./components/Pages/HomePage/Banner";
import Categories from "./components/Pages/HomePage/Categories";
import Navbar from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import route from "../src/components/Router/Router.jsx";

function App() {
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
