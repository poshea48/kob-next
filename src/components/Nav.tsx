/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Nav = () => (
  <header
    sx={{
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary',
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
        <a sx={{ fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>Home</a>
      </Link>
      <Link href="/leagues">
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>Leagues</a>
      </Link>
      <a
        sx={{
          color: 'text',
          fontSize: 3,
          cursor: 'pointer',
        }}
        href={process.env.HELP_APP_URL}
        target="__blank">
        Help
      </a>
    </nav>
  </header>
);

export default Nav;
