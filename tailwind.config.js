module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url(/src/assets/register_bg.png)",
        "sec-Img": "url(/src/assets/secimg.jpg)",


        whatsbg: 'url(/src/assets/whats.png)',

        "hero-myEvents2": "url(/src/assets/myEvents.png)",
        "hero-myEvents": "url(/src/assets/009.png)",

        "hero-details": "url(/src/assets/details.svg)",
        "hero-login": "url(/src/assets/login.jpeg)",
        aboutImg: "url(/src/assets/about2.jpeg)",


        'aboutImg':'url(/src/assets/pexels-photo-a2.jpeg)',
        
       


        //tama
        'patterns-pink': 'url(/src/assets/pattern8.png)',

        'pattern-orange' : 'url(/src/assets/pattern5.svg)',
        'patternre': 'url(/src/assets/patternre.jpeg)',
        'pattern5' : 'url(/src/assets/p8.svg)',
        '404' : 'url(/src/assets/notFound.png)',
        'kicked-img' : 'url(/src/assets/kicked.svg)',


        'cur-Img': 'url(/src/assets/s11.jpg)',
        'hero-t':
          'linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)',
      }),

      colors: {

        hero: "#172B4D",
        createEvent: "#FB6340",
        createEventHover: "#E74F2C",
        joinEvent: "#2DCE89",
        joinEventHover: "#19B875",

        myEvents: "#5E72E4",
        myEventsHover: "#F5365C",
        details: "#FE5E33",
        iconsInDetails: "#A3E9CB",
        detailsButton: "#FBA7B7",
        myEventsButton: "#FFC300",
        myEventsHeading: "#D3E12E",
        patterncolor1: "#2d354c",
        patternreplacement: "#d1d1d1",
        tama: "#32325d",
        formhead: "#f4365c",

        rr: "#4c72c2",
        ll: "#59bfe8",
        card: "#5E72E4",
        header: "#172B4D",
        buttono: "#11CDEF",
        buttonoHover: "#07C3D7",
        mess: "#525f7f",
        end: "#ea4335",
        whats: '#DCF8C6',
        whatsgray: '#9A9A9A',
        whatsgraylight: '#F0F0F0',
        whatsname: '#FFA97A',

      },
      backgroundPosition: {
        centered: "50%",
        blabla: "30% 50%",
      },
      fontFamily: {
        fuggle: ["Fuggles", "cursive"],
      },
      boxShadow: {
        card: "0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%)",
        round:
          "0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important",
        message: "0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%);",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      minHeight: {
        di: "60px",
      },
      maxWidth: {

        cc: "300px",

      },

      width: {
        card: "20%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
