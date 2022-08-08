import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    
  }

  html, body, #root {
    height: 100%;
    background-color: #EBEBEB;
  }

  @keyframes from-left-about {
    from {
      opacity: 0;
      margin-left: -100px;
    }

    to {
      opacity: 1;
      margin-left: 20px;
    }
  }


  @keyframes from-left-portifolio {
    from {
      opacity: 0;
      margin-left: -100px;
    }

    to {
      opacity: 1;
      margin-left: 20px;
    }
  }

  @keyframes from-left-contact {
    from {
      opacity: 0;
      margin-left: -100px;
    }

    to {
      opacity: 1;
      margin-left: 20px;
    }
  }

  @keyframes title-header-shaddow {
    from {
      bottom: -200px;
      transform: rotate(4deg);
    }

    to {
      bottom: -90px;
      transform: rotate(-2deg);

    }
  }

`;
