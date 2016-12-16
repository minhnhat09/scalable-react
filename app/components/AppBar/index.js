/**
*
* AppBar
*
*/

import React from 'react';


import styles from './styles.css';
import FontAwesome from 'react-fontawesome';
function AppBar({toggleDrawer}) {
  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton}
           onClick={toggleDrawer}
      >
        <FontAwesome
          className={styles.icon}
          name="bars"
          ></FontAwesome>
      </div>
      <div className={styles.heading}>
        Code daily
      </div>
      <div className={styles.linkContainer}>
        Log in
      </div>
    </div>
  );
}
AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
}
export default AppBar;
