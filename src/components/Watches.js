import { useState, useRef } from "react";
import WatchesItem from "./WatchesItem";
import { v4 } from 'uuid';

const Watches = () => {
  const [name, setName] = useState("");
  const [offset, setOffset] = useState();
  const [timeArray, setTimeArray] = useState([]);

  const nameRef = useRef();
  const offsetRef = useRef();

  const onChangeHandler = (evt) => {
    const { value } = evt.target;
    evt.target.name === 'name' ? setName(value) : setOffset(Number(value));
  };

  const testData = (name, offset) => {
    if (nameRef.current.value === "" || offsetRef.current.value === "") {
      alert("Введите данные");
      return true;
    }
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    if (testData(name, offset)) {
      return;
    }
    const newTimeArray = [...timeArray]

    newTimeArray.push({timeName: name, timeOffset: offset, id: v4()})
    setTimeArray(newTimeArray);
    setName('');
    setOffset();
    nameRef.current.value = '';
    offsetRef.current.value = '';

  };

  const HandleRemove = (id) => {
    setTimeArray((prevTimeArray) => prevTimeArray.filter((o) => o.id !== id));
  }

  return (
    <div className="appWrapper">
    <form className="AppForm" onSubmit={onSubmitHandler}>
      <div className="InputWrapper">
        <label htmlFor="name" className="formLabel">
          Название
        </label>
        <input 
          name="name" 
          ref={nameRef}
          onChange={onChangeHandler}
          ></input>
      </div>
      <div className="InputWrapper">
        <label htmlFor="offset" className="formLabel">
          Временная зона
        </label>
        <input
          name="offset"
          type="number"
          min="-12"
          max="14"
          ref={offsetRef}
          onChange={onChangeHandler}
          placeholder={"UTC offset"}
        ></input>
      </div>
      <button type="submit" className="formButton">
        Добавить
      </button>
    </form>
    <div className="watchItems">
      {timeArray.map(item => <WatchesItem name={item.timeName} offset={item.timeOffset} id={item.id} key={item.id} onRemove={HandleRemove}/>)}
    </div>
    </div>
  );
};

export default Watches;
