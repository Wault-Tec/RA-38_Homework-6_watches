import moment from "moment";
import { useState, useEffect } from "react";

const WatchesItem = (props) => {
  const [time, setTime] = useState(moment().utcOffset(props.offset).format("HH:mm:ss"));
  let timerId;

  const Watch = () => {
    console.log('tick')
    return setTime(moment().utcOffset(props.offset).format("HH:mm:ss"))
  }

  const handleRemove = () => {
    props.onRemove(props.id)
  }

  useEffect( () => {
    timerId = setInterval(Watch, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [time])

  return (
    <div className="watchItem">
      <div className="watchItem__content">
        <span className="watchName">{props.name}</span>
        <div className="watchTime">{time}</div>
      </div>
      <button className="watchBtn" onClick={handleRemove}>✘</button>
    </div>
  );
};

export default WatchesItem;

