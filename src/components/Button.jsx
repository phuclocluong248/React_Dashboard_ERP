import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

function Button({ icon, bgColor, color, bgHoverColor, customFunc, size, text, borderRadius, width }) {

  return (
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
