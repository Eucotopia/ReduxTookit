import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "./counterSlice";

export function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button
                    onClick={() => dispatch(increment())}>
                    increment
                </button>
                <span>{count}</span>
                <button
                    onClick={() => dispatch(decrement())}>
                    decrement
                </button>
                <button
                    onClick={() => dispatch(incrementByAmount(2))}>
                    incrementByAmount
                </button>
            </div>
        </div>
    )

}