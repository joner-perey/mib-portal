import { Link, Route, Routes, BrowserRouter } from "react-router-dom"


import Login from './pages/Login';

import { Helmet } from "react-helmet";
import Home from "./pages/Home";


function App() {

  return (
    <div>

      <Helmet>
        <title>MIB Portal</title>
      </Helmet>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div >

  )
}

export default App;


