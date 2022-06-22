// Cookie notification required for EU users

import { useState } from 'react';
import styles from './CookieMessage.module.css';

const CookieMessage = () => {
  const [ hidden, setHidden ] = useState(false);

  if (hidden) return null;

  return (
    <div className={styles.container}>
      <p>This website uses essential cookies.</p>

      <button
        onClick={() => {
          setHidden(true);
        }}
      >
        OK
      </button>
    </div>
  );
};

export default CookieMessage;
