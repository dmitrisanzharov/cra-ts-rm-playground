import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import countSlice from 'src/redux/countSlice';
import inputSlice from 'src/redux/inputSlice';

const Blah: React.FC<any> = () => {

    const dispatch = useDispatch();

    const count = useSelector((state: any) => {
        console.log('this is GLOBAL state', state);
        return state.shakeAndBake.countFromStore
    })


    const input = useSelector((state: any) => {

        return state.inputThingy.inputFromStore
    })


    function handleIncrease(){
        console.log('this is slice', countSlice);
        dispatch(countSlice.actions.increment());
    }

    function hanbleIncreaseByAmount(){
        dispatch(countSlice.actions.incrementByAmount(5));
    }


    function handleInputChange(arg: any){
        dispatch(inputSlice.actions.handleInputChange(arg))
    }

    return (
        <div>
              <h1>{count}</h1> 
              <hr />
              <button onClick={handleIncrease}>increase</button>
              <button onClick={hanbleIncreaseByAmount}>increase by amount</button>
              <hr />
              <input value={input} onChange={e=> handleInputChange(e.target.value)}/>
              <div>{input}</div>
        </div>
    );
};

export default Blah;
