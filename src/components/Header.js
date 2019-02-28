import React, { Component } from 'react';
import avatar from './avatar.png';
import './Header.css';

class Header extends Component {
  render() {
    const name = this.props.name;
    const phone = this.props.phone;
    return (
        <header className="App-header">
            <div className="container">
                <div className="avatar-wrap col">
                    <img src={avatar} className="leek-avatar" alt="avatar" />
                    <div className="name">
                        <span className="title">Full Name</span>
                        <h1>{name}</h1>
                    </div>
                </div>
                <div className="intro col">
                    <div>
                        <span className="title">Giới Thiệu</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    </div>
                    <div className="contact">
                        <span className="title">Liên Hệ</span>
                        <ul>
                            <li>Phone: <span>{phone}</span></li>
                            <li>Address: <span>116 Vu Trong Phung</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Header;
