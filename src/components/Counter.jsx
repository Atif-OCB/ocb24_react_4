import { useState } from 'react';
import PropTypes from 'prop-types';
// import styles from './Counter.module.css';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((previousCount) => {
    return previousCount + 1;
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
    }}>
      <p>Hi {props.name}!</p>
      <p>Count: {count}</p>
      <button onClick={handleClick} >
        Add 1
      </button>
    </div>
  )
}

Counter.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Counter;