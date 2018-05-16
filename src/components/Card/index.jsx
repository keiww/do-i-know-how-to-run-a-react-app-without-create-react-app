import React from 'react'

import styles from './Card.css'

class Card extends React.PureComponent {
  render () {
    return (
      <div className={styles.card}>
        {this.props.children}
      </div>
    )
  }
}

export default Card
