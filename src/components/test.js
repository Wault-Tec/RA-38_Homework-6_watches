import moment from "moment";

var x = new Date();

/* const getDate = (date) => {
  return (
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  )
} */

const getDate = () => {
  return new Date().toTimeString().replace(/ .*/, '')
}

/* setInterval(() => console.log(getDate()),1 * 1000 ) */

