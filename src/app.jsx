import React from 'react'
import Bear from '../public/img/bear.svg'

export default class extends React.Component {
  render() {
    return (
      <div>
        <img src={Bear} alt="bare" style={{
          display: 'block',
          margin: 'auto',
          paddingTop: '2rem',
          width: '400px',
          height: 'auto'
        }} />
      </div>
    )
  }
}