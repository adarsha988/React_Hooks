import React from 'react'
import EffectEmptyDep from './EffectEmptyDep';

function  MouseHover () {
    const [display, setDisplay] = React.useState(true);
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle</button>
        {display && <EffectEmptyDep/>}
    </div>
  )
}

export default  MouseHover