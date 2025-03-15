import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home></Home>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/contac" element={<Contact></Contact>} />
    </Route>
  )
);
