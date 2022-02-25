import React, { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import DashboardHome from "./components/Dashboard/Home";
import NotFound from "./components/common/NotFound";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RequireAuth from "./components/common/RequireAuth";
import Profile from "./components/Dashboard/Profile/Profile";

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    document.body.appendChild(script);
  }, [])

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="auth">
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="dashboard" element={
          <RequireAuth>
            <DashboardHome />
          </RequireAuth>
        }>
        </Route>
        <Route path="profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
