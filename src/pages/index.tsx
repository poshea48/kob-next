/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import { jsx } from 'theme-ui';
import Link from 'next/link';
import { VBCOLORS } from '../utils/colors';
import Nav from '../components/Nav';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <main sx={{ variant: 'main' }}>
      <header sx={{ variant: 'containers.header' }}>
        <Logo />
        <Nav />
      </header>
      <div sx={{ variant: 'containers.page' }}>
        <div
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <div sx={{ variant: 'containers.volleyball' }}>
            <Link href="/leagues">
              <a
                sx={{
                  variant: 'containers.link',
                  fontFamily: 'headingSecondary',
                }}>
                Continous Play
              </a>
            </Link>
          </div>
          <div sx={{ variant: 'containers.volleyball' }}>
            <Link href="/tournaments">
              <a
                sx={{
                  variant: 'containers.link',
                  fontFamily: 'headingSecondary',
                }}>
                Tournament Play
              </a>
            </Link>
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4,
          }}>
          <p sx={{ mb: 0 }}>
            To Create and manage a tournament or continous play
          </p>
          <Link href="#">
            <a
              sx={{
                variant: 'containers.link',
                p: 0,
              }}>
              Log in
            </a>
          </Link>
          <Link href="#">
            <a
              sx={{
                variant: 'containers.link',
                p: 0,
              }}>
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
