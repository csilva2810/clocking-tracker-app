export default function createTheme(mode = 'light') {
  if (mode === 'light') {
    return {
      mode,
      colors: {
        background: {
          base: '#FFFFFF',
          variant1: '#F7F7F7',
        },
        surface: {
          base: '#FFFFFF',
          variant1: '#F7F7F7',
          variant2: '#F0F0F0',
        },
        text: {
          base: '#313131',
          variant1: '#888888',
          variant2: '#BBBBBB',
        },
        divisors: {
          base: '#EEEEEE',
          variant1: '#DDDDDD',
        },
        gray: {
          base: 'rgba(0, 0, 0, 0.1)',
          variant1: 'rgba(0, 0, 0, 0.2)',
          variant2: 'rgba(0, 0, 0, 0.3)',
        },
        primary: {
          base: '#2196f3',
          text: '#FFFFFF',
          variant1: '#1e88e5',
          variant1Text: '#FFFFFF',
        },
        accent: {
          base: '#1DE9B6',
          text: '#313131',
          variant1: '#13c79a',
          variant1Text: '#313131',
        },
        danger: {
          base: '#FF4444',
          text: '#FFFFFF',
        },
        success: {
          base: '#00C851',
          text: '#FFFFFF',
        },
      },
    };
  }

  return {
    mode: 'dark',
    colors: {
      background: {
        base: '#263238',
        variant1: '#263238',
      },
      surface: {
        base: '#313E45',
        variant1: '#313E45',
        variant2: '#455A64',
      },
      text: {
        base: '#ECEFF1',
        variant1: '#b0bec5',
        variant2: '#90a4ae',
      },
      divisors: {
        base: 'rgba(236, 239, 241, 0.1)',
        variant1: 'rgba(236, 239, 241, 0.15)',
      },
      gray: {
        base: 'rgba(255, 255, 255, 0.1)',
        variant1: 'rgba(255, 255, 255, 0.2)',
        variant2: 'rgba(255, 255, 255, 0.3)',
      },
      primary: {
        base: '#6ec6ff',
        text: '#313131',
        variant1: '#5bbeff',
        variant1Text: '#313131',
      },
      accent: {
        base: '#1DE9B6',
        text: '#313131',
        variant1: '#13c79a',
        variant1Text: '#313131',
      },
      danger: {
        base: '#B71C1C',
        text: '#ef9a9a',
      },
      success: {
        base: '#4caf50',
        text: '#c8e6c9',
      },
    },
  };
}
