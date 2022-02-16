import React, { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"
import NotFound from "./components/common/NotFound";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RequireAuth from "./components/common/RequireAuth";

const App = () => {
  const res = useSelector(state => state)
  console.log(res)
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
            <Dashboard />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
