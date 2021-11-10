import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import EggApp from './EggApp';


import './assets/fonts/ProductSans-Black.woff'
import './assets/fonts/ProductSans-BlackItalic.woff'
import './assets/fonts/ProductSans-Bold.woff'
import './assets/fonts/ProductSans-BoldItalic.woff'
import './assets/fonts/ProductSans-Italic.woff'
import './assets/fonts/ProductSans-Medium.woff'
import './assets/fonts/ProductSans-Regular.woff'
import './assets/fonts/ProductSans-Thin.woff'



ReactDOM.render(
  <React.StrictMode>
    <EggApp />
  </React.StrictMode>,
  document.getElementById('root')
);


