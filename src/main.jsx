import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    <CounterWithCustomHook />
  </StrictMode>,
);
