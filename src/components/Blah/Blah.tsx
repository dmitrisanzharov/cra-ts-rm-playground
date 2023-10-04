import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import countSlice, { selectCountFromStore as countSliceCountSelector } from 'src/redux/countSlice';
import inputSlice from 'src/redux/inputSlice';

const Blah: React.FC<any> = () => {

    const dispatch = useDispatch();

    // const count = useSelector((state: any) => {
    //     return state.shakeAndBake.countFromStore
    // })

    const count2 = useSelector(countSliceCountSelector);


    const input = useSelector((state: any) => {
        return state.inputThingy.inputFromStore
    })


    function handleIncrease(){
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
              <h1>{count2}</h1> 
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
