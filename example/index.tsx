import React from 'react'
import ReactDOM from 'react-dom'
import format from '../src'

const App = () => {
  return <div>{format(12)}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))