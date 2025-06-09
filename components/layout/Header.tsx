// components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <nav>
        <Link href="/home" style={{ marginRight: '15px' }}>Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
