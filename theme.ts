import { roboto } from '@theme-ui/presets';
import { Theme, merge } from 'theme-ui';
import { base as preset } from '@theme-ui/presets';
import { VBCOLORS } from './src/utils/colors';

const theme: Theme = merge(
  preset as Theme,
  {
    ...roboto,
    colors: {
      ...roboto.colors,
    },
    fonts: {
      ...roboto.fonts,
      heading: 'Taviraj, serif',
      headingSecondary: 'Atma, Fira Sans Extra Condensed, cursive',
      body: 'Biryani, Sarala, Telex, sans-serif',
    },
    breakpoints: ['320px', '480px', '768px', '992px', '1200px'],
    main: {
      width: '100vw',
      height: '100vh',
    },
    containers: {
      card: {
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        border: '1px solid',
        borderColor: 'muted',
        borderRadius: '4px',
        p: 2,
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
      },
      volleyball: {
        display: 'flex',
        flexDirection: 'column',
        width: ['100px', '150px', '200px'],

        borderRadius: '10px',
        p: 2,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // background: 'rgb(6,6,6)',
        background:
          'linear-gradient(180deg, rgba(238,41,92,1) 0%, rgba(249,207,0,1) 25%, rgba(249,207,0,1) 75%, rgba(238,41,92,1) 100%)',
      },
      page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '960px',
        m: 0,
        mx: 'auto',
      },
      link: {
        fontSize: 3,
        color: VBCOLORS.black,
        fontWeight: 'bold',
        p: 2,
        cursor: 'pointer',
        '&:hover': {
          color: VBCOLORS.pink,
          textDecoration: 'underline',
        },
      },
      navLink: {
        fontWeight: 'bold',
        fontSize: 4,
        cursor: 'pointer',
        color: VBCOLORS.black,
      },
      button: {
        display: 'flex',
        width: ['100px', '120px', '30%'],
        maxWidth: '200px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderColor: 'text',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      },
    },
    styles: {
      ...roboto.styles,
      root: {
        ...roboto.styles.root,
        backgroundColor: 'background',
      },
    },
  } as Partial<Theme>,
);

export default theme;
