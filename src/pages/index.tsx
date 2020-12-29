/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import { jsx } from 'theme-ui';
import Link from 'next/link';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <React.Fragment>
      <Nav />
      <main sx={{ height: `calc(100vh - 60px)` }}>
        <div sx={{ variant: 'containers.page' }}>
          <h1 sx={{ fontSize: 8, my: 0 }}>KOB Tracker App</h1>
          <div
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-around',
            }}>
            <Link href="/leagues">
              <a>Create or join a KOB league</a>
            </Link>
            <Link href="/tournaments">
              <a>Create or join a KOB tournament</a>
            </Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
