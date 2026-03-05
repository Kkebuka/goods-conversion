import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton({ to }) {
  const navigate = useNavigate();
  return (
    <button className="back-btn" onClick={() => to ? navigate(to) : navigate(-1)}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
  );
}
