import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/all/login";
import Home from "./pages/all/home";
import 'ionicons'
function App() {
  return (

    <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
              
            </Routes>
          </div>
        </BrowserRouter>

  );
}

export default App;
