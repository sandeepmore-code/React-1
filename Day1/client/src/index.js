// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from 'react-router-dom';
// import {Toaster} from 'react-hot-toast';
// import ProviderCounterContext from './Components/10-03/context/Countercontect';
// import AuthContextComponent from './Components/10-03/context/AuthContext';
// import { Provider } from 'react-redux';
// import store from './Redux/reducers/Store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//     <BrowserRouter>
//     <AuthContextComponent>
//     <ProviderCounterContext>
//     <Toaster
//   position="top-center"
//   reverseOrder={false}
//   gutter={8}
//   containerClassName=""
//   containerStyle={{}}
//   toastOptions={{
//     // Define default options
//     className: '',
//     duration: 5000,
//     style: {
//       background: '#363636',
//       color: '#fff',
//       icon : 'tick'
//     },

//     // Default options for specific types
//     success: {
//       duration: 3000,
//       theme: {
//         primary: 'green',
//         secondary: 'black',
//         icon : 'tick'
//       },
//     },
//   }}
// />
//     <Provider store={store}>
//     <App />
//     </Provider>
//     </ProviderCounterContext>
//   </AuthContextComponent>
// </BrowserRouter>
  
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ProviderCounterContext from './Components/10-03/context/Countercontect';
import AuthContextComponent from './Components/10-03/context/AuthContext';
import { Provider } from 'react-redux';
import store from './Redux/reducers/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextComponent>
      <ProviderCounterContext>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
              icon: 'tick'
            },
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
                icon: 'tick'
              },
            },
          }}
        />
        <Provider store={store}>
          <App />
        </Provider>
      </ProviderCounterContext>
    </AuthContextComponent>
  </BrowserRouter>
);

reportWebVitals();

