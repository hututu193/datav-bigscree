import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const RATIO = 16/9
function applScreenSize(){
  const {clientWidth, clientHeight} = document.documentElement
  const pageWidth = clientWidth / clientHeight > RATIO ? clientHeight * RATIO : clientWidth
  const pageHeight = pageWidth / RATIO

  document.documentElement.style.fontSize = `${pageWidth/ 100}px`
  const rootEl = document.getElementById('root')
  if(rootEl){
    rootEl.style.width = `${pageWidth}px`
    rootEl.style.height = `${pageHeight}px`
    rootEl.style.margin = '0 auto'
    rootEl.style.marginTop = `${(clientHeight - pageHeight) / 2}px`
  }
}

applScreenSize()
window.addEventListener('resize', applScreenSize)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

