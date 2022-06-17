import moment from "moment";

const Watches = () => {
  return (
  <form className="AppForm">
    <div className="InputWrapper">
      <label htmlFor="Title" className="formLabel">
        Название
      </label>
      <input name="Title">
      </input>
    </div>
    <div className="InputWrapper">
      <label htmlFor="Title" className="formLabel">
        Временная зона
      </label>
      <input name="Title" type="number" min="-12" max="14">
      </input>
    </div>
    <button type="submit" className="formButton">Добавить</button>
    <span>{moment().utcOffset(-23).format('HH:mm:ss')}</span>
  </form>
  )
}

export default Watches