import "./App.scss";
import { Home, Messages } from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/messages" element={<Messages />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

function Root() {
  return (
    <>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/messages"> Messages </Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
