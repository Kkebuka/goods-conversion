import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  const cls = ({ isActive }) => `nav-item ${isActive ? 'active' : ''}`;

  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className={cls}>
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span className="nav-label">Home</span>
      </NavLink>
      <NavLink to="/converter" className={cls}>
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/>
        </svg>
        <span className="nav-label">Calculator</span>
      </NavLink>
      <NavLink to="/invoice" className={cls}>
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
        <span className="nav-label">Invoice</span>
      </NavLink>
      <NavLink to="/ledger" className={cls}>
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
        </svg>
        <span className="nav-label">Ledger</span>
      </NavLink>
    </nav>
  );
}
