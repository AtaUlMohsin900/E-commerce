"use client";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "@/store/slice/cartSlice";
import { RootState } from "@/store/store";

const counterView = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(
    (state: RootState) => state.counterSlice.value
  );
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className="flex py-6 gap-6 justify-center items-center">
      <button
        className="py-4 px-3 rounded-full bg-green-400"
        onClick={increment}
      >
        Increment
      </button>
      <span>Counter Value {counterValue}</span>
      <button className="py-4 px-3 rounded-full bg-red-400" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default counterView;
