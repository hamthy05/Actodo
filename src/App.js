import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Landing from "./pages/Landing";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([
    {
      username: "Hamthy",
      password: "123",
    },
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login user={user} setUser={setUser} />} />
          <Route
            path="/signup"
            element={<Signup user={user} setUser={setUser} />}
          />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
