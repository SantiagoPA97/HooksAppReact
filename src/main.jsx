
import './index.css'
import { CallBackHook } from './06-memos/CallBackHook';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { FocusScreen } from './04-useRef/FocusScreen';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { HooksApp } from '../src/HooksApp';
import { Layout } from './05-useLayoutEffect/Layout';
import { MemoHook } from './06-memos/MemoHook';
import { Memorize } from './06-memos/Memorize';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { Padre } from './07-tarea-memo/Padre';
import { SimpleForm } from './02-useEffect/SimpleForm';
import React from 'react'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Padre />
  </>
)
