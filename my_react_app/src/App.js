import ClassComponent from "./Component/ClassComponent";
import UseStateHooks from "./Component/UseStateHooks";
import UseStateArray from "./Component/UseStateArray";
import UseEffectHooks from "./Component/UseEffectHooks";
import ClassComponentstate from "./Component/ClassComponentstate";
import FunctionalComponentEffect from "./Component/FunctionalComponentEffect";
import EffectEmptyDep from "./Component/EffectEmptyDep";
import MouseHover from "./Component/MouseHover";
import ReactHooks from "./Component/ReactHooks";


import './App.css';
import React from "react";
import ApiDatafetch from "./Component/ApiDatafetch";
import ButtonClickApi from "./Component/ButtonClickApi";
import Form from "./Component/Form";
import { ThemeChange } from "./Component/Context/ThemeChange";
import Counter from "./Component/Reducer/Counter";
import CounterTwo from "./Component/Reducer/CounterTwo";
import { ContextProvider } from "./Component/Reducer/CounterReducer";
import ComponentA from './Component/Reducer/Container/ComponentA'
import ComponentC from './Component/Reducer/Container/ComponentC'
import ComponentB from './Component/Reducer/Container/ComponentB'
import FetchApiReducer from "./Component/Reducer/FetchApiReducer";
import CallbackEx from "./Component/Callback/CallbackEx";
import UseRefEX from "./Component/Referencehook/UseRefhook";
import Hookuser from "./Component/Hookuser";

function App() {
  return (
    <div className="App">
      <Hookuser/>
    </div>
  );
}

export default App;
