'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { node } from 'prop-types';
import { makeStore } from '../store';

function Initializer({ children = null }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  );
}

Initializer.propTypes = { children: node };

export default Initializer;
