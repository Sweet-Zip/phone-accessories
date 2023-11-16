import React from 'react';
import logo from '../logo.svg';
import NavBar from '../components/Navbar';

export default function Home() {
  return (

    <div className='justify-between items-center h-24 max-w-[1280px] mx-auto px-4'>
      <nav>
        <NavBar />
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
