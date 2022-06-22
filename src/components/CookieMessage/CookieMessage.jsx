// Cookie notification required for EU users

import { useState } from 'react';

const CookieMessage = () => {
  const [ hidden, setHidden ] = useState(false);

  if (hidden) return null;

  return (
    <div style={{
      width: '100%',
      position: 'fixed',
      color: 'blue',
      bottom: 0,
    }}>
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
