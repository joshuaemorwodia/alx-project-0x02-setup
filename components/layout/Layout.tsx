// components/layout/Layout.tsx
import React from 'react';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
