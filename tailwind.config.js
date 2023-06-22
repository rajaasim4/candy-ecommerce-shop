/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxl: { min: "1800px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      slg: { max: "991px" },
      md: { max: "768px" },
      sm: { max: "540px" },
      xsm: { max: "377px" },
    },
    fontFamily: {
      
      'pacifico': ['Pacifico, cursive'],
      
    },
    extend: {
      width: {
        95: "95%",
      },
     
      backgroundImage: {
        categoryCardImg1: "url('./assets/Images/Category-img1.jpg')",
        categoryCardImg3: "url('./assets/Images/Category-img3.jpg')",
        categoryCardImg5: "url('./assets/Images/Category-img5.jpg')",
        detailsBg1: "url('./assets/Images/Details-bg1.jpg')",
        detailsBg2: "url('./assets/Images/Details-bg2.jpg')",
        newsletterbg: "url('./assets/Images/newsletter-bg.jpg')",
        breadcrumb: "url('./assets/Images/shop-breadcrumb.jpg')",
      },
      colors: {
        overlaybg: "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
