import React from 'react';

const Statistics = ({ state }) => (
  <>
    <p className="">Good:{state.good}</p>
    <p className="">Neutral:{state.neutral}</p>
    <p className="">Bad:{state.bad}</p>
  </>
);

export default Statistics;
