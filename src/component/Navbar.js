import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link active" aria-expanded="true" to="/">Bitcoin Hari Ini</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-expanded="false" to="/Rupiahbitcoin">Rupiah ke Bitcoin</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-expanded="false" to="/Bitcoinrupiah">Bitcoin ke Rupiah</Link>
                </li>
            </ul>
        </div>
    );
  }
}
export default Navbar;