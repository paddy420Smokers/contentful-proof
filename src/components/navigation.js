import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Start Here</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Guides</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/reviews/">Reviews</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/quick-tips/">Quick Tips</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/more/">More</Link>
      </li>
    </ul>
  </nav>
)
