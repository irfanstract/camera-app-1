import React from 'react';
import { createRoot } from 'react-dom/client';
import { defineCustomElements, } from '@ionic/pwa-elements/loader';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

/**    
 * Some Capacitor plugins, including the Camera API, 
 * provide the web-based functionality and UI via the Ionic PWA Elements library.
 * 
 * Call the element loader after the platform has been bootstrapped. 
 * 
 * https://ionicframework.com/docs/react/your-first-app .
 * 
 */
defineCustomElements(window);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**       
 * some arguments to automatic `reload()` .    
 * - "the WebPack server has diconnnected. refresh the page of necessary."  
 * avoid doing this in production, since 
 * - that will mean loss of usability when internet-access goes away
 */
if (1) {
  setTimeout(() => {
    setTimeout(() => {
      (window.location).reload() ;
    }, 5 * 1000 ) ;
  } , 15 * 60 * 1000 ) ;
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
