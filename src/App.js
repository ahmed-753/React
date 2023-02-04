
import './style/style.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Layout from "./components/layout/Layout";

function App() {
  return (
  <BrowserRouter>
    <Routes >
    <Route to='/' element={<Layout/>}>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/' element={<Skills/>}/>
      <Route exact path='/' element={<Contacts/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
