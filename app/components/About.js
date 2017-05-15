import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>About</h2>
          <div className={styles.links}>
            <Link to="/">to Home</Link>
            <Link to="/counter">to Counter</Link>
          </div>
        </div>
      </div>
    );
  }
}
