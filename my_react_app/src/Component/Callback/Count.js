import React, { Children } from 'react'

function Count({text,Children}) {
    console.log(" component rendering"+text)
  return (
    <div>{Children} &nbsp; {text}</div>
  )
}

export default React.memo(Count);