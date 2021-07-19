import React from 'react';

const Controls = ({ onGoodClick, onNeutralClick, onBadClick }) => (
  <>
    <button type="button" onClick={onGoodClick} className="">
      Good
    </button>
    <button type="button" onClick={onNeutralClick} className="">
      Neutral
    </button>
    <button type="button" onClick={onBadClick} className="">
      Bad
    </button>
  </>
);

export default Controls;
