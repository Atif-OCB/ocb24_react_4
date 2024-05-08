import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((previousCount) => {
    return previousCount + 1;
  });

  console.log(styles);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
    }}>
      <p className={styles.title}>Hi {props.name}!</p>
      <p>Count: {count}</p>
      <button onClick={handleClick} >
        Add 1
      </button>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Card;