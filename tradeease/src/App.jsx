import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastProvider } from "./components/Toast";
import { ModalProvider } from "./components/Modal";
import BottomNav from "./components/BottomNav";
import WelcomeScreen from "./pages/WelcomeScreen";
import Home from "./pages/Home";
import Converter from "./pages/Converter";
import Invoice from "./pages/Invoice";
import Ledger from "./pages/Ledger";
import { storage } from "./utils/storage";
import "./styles/main.css";
import "./styles/components.css";
import "./styles/animations.css";

export default function App() {
  const [user, setUser] = useState(() => storage.getUser());

  const handleWelcomeComplete = (name) => {
    const newUser = { name, createdAt: new Date().toISOString() };
    storage.setUser(newUser);
    setUser(newUser);
  };

  // Show welcome screen if no user saved
  if (!user) {
    return (
      <ToastProvider>
        <ModalProvider>
          <WelcomeScreen onComplete={handleWelcomeComplete} />
        </ModalProvider>
      </ToastProvider>
    );
  }

  return (
    <BrowserRouter>
      <ToastProvider>
        <ModalProvider>
          <div className="app-shell">
            <div className="page-container">
              <Routes>
                <Route
                  path="/"
                  element={<Home user={user} setUser={setUser} />}
                />
                <Route path="/converter" element={<Converter />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/ledger" element={<Ledger />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
            <BottomNav />
          </div>
        </ModalProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}
