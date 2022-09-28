import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { New } from "./pages/new/New.jsx";
import { Single } from "./pages/single/Single.jsx";
import { List } from "./pages/list/List.jsx";
import { Login } from "./pages/login/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="users">
            <Route index element={<List />}></Route>
            <Route path=":userId" element={<Single />}></Route>
            <Route path="new" element={<New />}></Route>
          </Route>
          <Route path="products">
            <Route index element={<List />}></Route>
            <Route path=":productId" element={<Single />}></Route>
            <Route path="new" element={<New />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
