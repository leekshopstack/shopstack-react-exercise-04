import React, { Component } from 'react';
import Header from './Header';
import Main from './content/Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <Header name={'Le Ke Tuan'} phone={'0839.988.266'} />
            <Main />
            <Footer />
        </div>
    );
  }
}

export default App;
