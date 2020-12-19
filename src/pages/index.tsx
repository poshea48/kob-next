import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <main>
      <h1>KOB Tracker App</h1>
      <div className="links-container">
        <Link href="/leagues">
          <a>Create or join a KOB league</a>
        </Link>
        <Link href="/tournaments">
          <a>Create or join a KOB tournament</a>
        </Link>
      </div>
    </main>
  );
};

export default Home;
