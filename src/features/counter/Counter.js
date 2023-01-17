import React, { useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, 
         decrement, 
         reset, 
         incrementByAmount 
} from './counterSlice'



const Counter = () => {
  const count = useSelector((state)=>state.counttt.count);
  const dispatch = useDispatch();

const [incrementAmount, setIncrementAmount]= useState(0)

const addValue = Number(incrementAmount) || 0

const resetAll = ()=>{
    setIncrementAmount(0);
    dispatch(reset())
}


    return (
   <section>
<p>{count}</p>
<div>
    <button className='button buttonPlusMinus' onClick={()=>dispatch(increment())}>+</button>
    <button className='button buttonPlusMinus' onClick={()=>dispatch(decrement())}>-</button>
</div>
<input type="text" 
value={incrementAmount}
onChange={(e)=>{setIncrementAmount(e.target.value)}}
/>
<div>
    <button className='button' onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
    <button className='button' onClick={()=>dispatch(resetAll)}>Reset</button>
</div>
   </section>
  )
}

export default Counter