import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />}></Route>)
);
