import React from 'react';

import * as styles from './styles.css';

export default class Array extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((item, idx) =>
          <div key={idx} className={styles.arrayItem}>
            {item}
          </div>
        )}
      </div>
    )
  }
}