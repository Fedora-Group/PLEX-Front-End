module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': 'url(/src/assets/register_bg.png)',
        'sec-Img': 'url(/src/assets/secimg.jpg)',
        'patterns-pink': 'url(/src/assets/pattern8.png)',
        'pattern-orange' : 'url(/src/assets/pattern5.svg)',
        'patternre': 'url(/src/assets/patternre.jpeg)',
        'pattern5' : 'url(/src/assets/p8.svg)',
    
      }),
      colors: {
        hero: '#172B4D',
        createEvent: '#FB6340',
        createEventHover: '#E74F2C',
        joinEvent: '#2DCE89',
        joinEventHover: '#19B875',
        patterncolor1 : '#2d354c',
        patternreplacement : '#d1d1d1',
        tama : '#32325d',
        formhead : '#f4365c'
      },
      backgroundPosition: {
        centered: '50%',
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
       boxShadow : {
         card : '0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%)'
       },
       width : {
         card : '20%'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
