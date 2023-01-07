import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import HomePage from "./routes/homePage";
import LoginPage from "./routes/loginPage";
import ProfilePage from "./routes/profilePage";

function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/profile/:userId" element={<ProfilePage />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
