import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "./pages/Crud";
import Counter from "./pages/Counter";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Crud />} />
        <Route path={"/sayac"} element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
