import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <ul>
            <li>Phone: <span>083.9988.266</span></li>
            <li>Email: <a href="mailto:tuan@shopstack.asia">tuan@shopstack.asia</a></li>
            <li>Skype: <span>tuanleek</span></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
