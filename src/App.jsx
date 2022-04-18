import React from 'react';
import { Entry } from './components/Entry/Entry';
import { PokeManagerProvider } from './context/provider';
import './app.scss';

export default function App () {
  return (
    <>
      <PokeManagerProvider>
        <Entry />
      </PokeManagerProvider>
    </>
  );
};