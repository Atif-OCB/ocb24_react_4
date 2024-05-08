import { useState } from 'react';
import PropTypes from 'prop-types'

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    }}>
      <p>Hi {props.name}!</p>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((previousCount) => {
          return previousCount + 1;
        })}
      >
        Add 1
      </button>
    </div>
  )
}

Counter.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Counter;