import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "../redux/slices/counterSlice";
import { useState } from "react";

const Counter = () => {
  const state = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div className="d-flex flex-column gap-5  align-items-center justify-content-center vh-100">
      <div className="d-flex gap-3 ">
        <Button onClick={() => dispatch(increment())}>Arttır</Button>
        <p className="fs-3">{state}</p>
        <Button variant="danger" onClick={() => dispatch(decrement())}>
          Azalt
        </Button>
        <Button variant="success" onClick={() => dispatch(reset())}>
          Sıfırla
        </Button>
      </div>
      <div className="d-flex gap-2 ">
        <input
          className="form-control "
          type="number"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button onClick={() => dispatch(incrementByValue(Number(value)))}>
          Ekle
        </Button>
      </div>
    </div>
  );
};

export default Counter;
