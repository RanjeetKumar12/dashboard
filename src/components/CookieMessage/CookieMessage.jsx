// Cookie notification required for EU users

import { useState } from 'react';
import styles from './CookieMessage.module.css';

const CookieMessage = () => {
  const [ clickedOk, setClickedOk ] = useState(false);

  if (clickedOk) return null;

  return (
    <div className={styles.container}>
      <p>This website uses essential cookies.</p>

      <button
        onClick={() => {
          setClickedOk(true);
        }}
      >
        OK
      </button>
    </div>
  );
};

export default CookieMessage;
