import * as React from 'react';
import './App.css';
import { Header } from './Header';
import { Description } from './Description';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  return (
    <div className='Frame'>
      < Header />
      < Description /> 
    </div>
  );
}

