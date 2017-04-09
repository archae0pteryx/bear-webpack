import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Bear from '../public/img/bear.svg'
import './index.css'

class App extends Component {
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

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

render()