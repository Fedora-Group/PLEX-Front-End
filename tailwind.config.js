module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': 'url(/src/assets/register_bg.png)',
        'sec-Img': 'url(/src/assets/secimg.jpg)',
        'hero-myEvents':'url(/src/assets/myEvents.svg)',
        'hero-details':'url(/src/assets/details.svg)',

      }),
      colors: {
        hero: '#172B4D',
        createEvent: '#FB6340',
        createEventHover: '#E74F2C',
        joinEvent: '#2DCE89',
        joinEventHover: '#19B875',
        myEvents:'#5E72E4',
        myEventsHover:'#F5365C',
        details:'#FE5E33',
        iconsInDetails:'#A3E9CB',
        detailsButton:'#FBA7B7'
      },
      backgroundPosition: {
        centered: '50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
