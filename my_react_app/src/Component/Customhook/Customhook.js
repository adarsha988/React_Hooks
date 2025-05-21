import React, { useEffect} from 'react'

function useCustomhook(count) {
    
useEffect(()=>{
document.title=`count value : ${count}`
},[count])
}

export default useCustomhook