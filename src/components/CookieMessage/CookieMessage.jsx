// Cookie notification required for EU users

import { useEffect, useState } from 'react';
import styles from './CookieMessage.module.css';

const CookieMessage = () => {
  const [ hidCookieMessage, setHidCookieMessage ] = useState(
    // double negation since the value could be null (not set)
    !!JSON.parse(localStorage.getItem('hidCookieMessage'))
  );

  useEffect(() => {
    localStorage.setItem('hidCookieMessage', JSON.stringify(hidCookieMessage));
  }, [hidCookieMessage])

  if (hidCookieMessage) return null;

  return (
    <div className={styles.container}>
      <p>This website uses essential cookies.</p>

      <button
        onClick={() => {
          setHidCookieMessage(true);
        }}
      >
        OK
      </button>
    </div>
  );
};

export default CookieMessage;
