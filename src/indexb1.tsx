



import React from 'react';
import { createRoot } from 'react-dom/client';
import { defineCustomElements, } from '@ionic/pwa-elements/loader';
import './ionicCoreCss1.css';
import 'draft-js/dist/Draft.css'; // integral CSS due to Draft(Js) usage within the app codebase. placed here to avoid the cascading-related problems.
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

(window as any ).React = React ; // debug

export class WithErrorbound extends React.Component<React.PropsWithChildren, { e ?: null | Error ; } > {
  render(): React.ReactNode {
    return (
      ((this.state || {} ).e ? (
        <div> 
          <button onClick={() => this.setState({ e: null, }) } >
            !!!
          </button>
        </div>
      ) : null )
      || this.props.children
    ) ;
  }
  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
  //   console["error"](error , { error, errorInfo , } , ) ;
  // }
  static getDerivedStateFromError(e: Error, ) {
    return { e: e, } ;
  }
}
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <WithErrorbound>
    <App />
    </WithErrorbound>
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
  } , 60 * 60 * 1000 ) ;
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
