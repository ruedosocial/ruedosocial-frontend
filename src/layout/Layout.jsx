import React from 'react';
import '../styles/PageLayout.css';

export default function Layout({ children }) {
  return (
    <div className="layout-content">
      {children}
    </div>
  );
}
