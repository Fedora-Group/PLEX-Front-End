module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': 'url(/src/assets/register_bg.png)',
        'sec-Img': 'url(/src/assets/secimg.jpg)',
        'cur-Img': 'url(/src/assets/s11.jpg)',
        'hero-t':
          'linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)',
      }),
      colors: {
        hero: '#172B4D',
        createEvent: '#FB6340',
        createEventHover: '#E74F2C',
        joinEvent: '#2DCE89',
        joinEventHover: '#19B875',
        rr: '#4c72c2',
        ll: '#59bfe8',
        card: '#172B4D',
        header: '#32325D',
      },
      backgroundPosition: {
        centered: '50%',
        blabla: '30% 50%',
      },
      fontFamily: {
        fuggle: ['Fuggles', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
