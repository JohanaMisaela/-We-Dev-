import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/all/login";
import Home from "./pages/all/home";
import Add from './pages/all/add'
import Profil from './pages/all/profil'
import Play from './pages/all/play'
import Chat from './pages/all/chat'

import Addpost from "./layouts/addpost";



import 'ionicons'
function App() {
  return (

    <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Add" element={<Add />} />
              <Route path="/Play" element={<Play />} />
              <Route path="/Profil" element={<Profil />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/Addpost" element={<Addpost />} />

            </Routes>
          </div>
        </BrowserRouter>

  );
}

export default App;
