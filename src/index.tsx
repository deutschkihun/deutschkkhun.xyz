import ReactDOM from 'react-dom/client'
import App from './App'
import {RecoilRoot} from 'recoil'
import '@fontsource/material-icons'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    &.light {
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
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>
)
