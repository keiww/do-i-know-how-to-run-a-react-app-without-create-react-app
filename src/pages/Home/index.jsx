import React from 'react'

import Card from '../../components/Card'

import styles from './Home.css'

class Home extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <Card>
          <p>Do I know how to run a React App without create-react-app (</p>
        </Card>
      </div>
    )
  }
}

export default Home
