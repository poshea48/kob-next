/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import { VBCOLORS } from '../utils/colors';

const Nav = () => (
  <header
    sx={{
      height: '60px',
      bg: 'transparent',
    }}>
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: '10px',
        height: '100%',
      }}>
      <Link href="/">
        <a
          sx={{
            variant: 'container.navLink',
          }}>
          Log in
        </a>
      </Link>
      <Link href="/leagues">
        <a
          sx={{
            variant: 'container.navLink',
          }}>
          Sign up
        </a>
      </Link>
    </nav>
  </header>
);

export default Nav;
