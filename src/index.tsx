import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import { RecoilRoot } from 'recoil'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: rgba(17, 16, 34, 0.911);
    color: #FFFAFA;
    font-family: "Montserrat", sans-serif;
    line-height: 1.75;
    width: 100%;
    position: relative;
    overflow-x: hidden;
    margin: 0 auto;


    &.light-mode {
      background-color: #FFFAFA;
      color: rgba(17, 16, 34, 0.911);

      form {      
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      } 
    }

    form {      
        box-shadow: 0 20px 25px -5px rgba(243, 237, 237, 0.1),
    0 10px 10px -5px rgba(243, 239, 239, 0.4);
      
    }




    p {
      margin: 0;
      font-size:1rem;
    }
    
    ul {
      padding: 0;
      list-style-type: none;
    }
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .reveal.active {
    opacity: 1;
  }
  .active.fade-bottom {
    z-index: -1;
    animation: fade-bottom 1.5s ease-in; 
  }

  @keyframes fade-bottom {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes eye-ani {
    from { transform: scaleY(1); }
    to { transform: scaleY(0.2); }
  }

  .right-eye {
    transform-origin: 19px 42px;
    animation: eye-ani 0.5s alternate infinite;
  }

  .left-eye {
    transform-origin: 19px 42px;
    animation: eye-ani 0.5s alternate infinite 0.5s;
  }

  @keyframes dash-ani {
    0% { stroke-dashoffset: 700; stroke:black }
    50% { stroke-dashoffset: 350; stroke:blue }
    100% { stroke-dashoffset: 0; stroke: red }
  }
  .stroke-circle {
    stroke: black;
    stroke-width: 5;
    stroke-dasharray: 700;
    stroke-dashoffset: 0;
    fill: transparent;
    animation: dash-ani 2s infinite alternate;
  }
  .stroke-path {
    stroke: black;
    stroke-width: 5;
    stroke-dasharray: 727;
    fill: transparent;
    animation: dash-ani 2s linear infinite alternate;
  }

  @keyframes logo-ani {
    0% { stroke-dashoffset: 5171; stroke:deepskyblue }
    20% { stroke-dashoffset: 4171; stroke:dodgerblue }
    40% { stroke-dashoffset: 3171; stroke:darkgreen }
    60% { stroke-dashoffset: 2171; stroke:darkslategrey }
    80% { stroke-dashoffset: 1171; stroke:darkgoldenrod }
    100% { stroke-dashoffset: 0; stroke:darkolivegreen }
  }
  .cls-1 {
    fill: #fff;
  }

  .cls-2 {
    fill: none;
    stroke: #f91d00;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 25px;
    stroke-dasharray: 5171;
    animation: logo-ani 10s linear infinite alternate;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
