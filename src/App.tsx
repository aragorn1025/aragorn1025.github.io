import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import React from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
