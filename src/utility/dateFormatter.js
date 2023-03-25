export const dateFormatter = (date) =>{
   function pad(s) { return (s < 10) ? '0' + s : s; }
   return [pad(date.getDate()), pad(date.getMonth()+1), date.getFullYear()].join('/')
}