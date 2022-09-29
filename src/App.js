import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { New } from "./pages/new/New.jsx";
import { Single } from "./pages/single/Single.jsx";
import { List } from "./pages/list/List.jsx";
import { Login } from "./pages/login/Login.jsx";
import { productInputs, userInputs } from "./formSource.js";
import "./style/dark.scss";
import { useContext } from "react";
import { darkModeContext } from "./context/darkModeContext.js";

function App() {
  const { darkMode } = useContext(darkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              ></Route>
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
