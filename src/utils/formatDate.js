const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatDate = (date) => {
  const d = new Date(date);
  //let month = `${d.getMonth() + 1}`;
  const month = months[d.getMonth()];

  let day = `${d.getDate()}`;
  const year = d.getFullYear();

/*   if (month.length < 2) {
    //1-jan -> 01-jan
    month = `0${month}`;
  } */

  if (day.length < 2) {
    day = `0${day}`;
  }

  return [day, month, year].join(" ");
};

export default formatDate;

///////////////////////////////////
//////////////////////
/////////////
//////// for social media joined on and post added on dates

/*const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatDate = (date) => {
  const d = new Date(date);
  //let month = `${d.getMonth() + 1}`;
  const month = months[d.getMonth()];
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  //if (month.length < 2) {
    //1-jan -> 01-jan
   // month = `0${month}`;
  //}

  if (day.length < 2) {
    day = `0${day}`;
  }

  return [day, month, year].join(" ");
};
//console.log(Date.now())
const finalDate = formatDate("2022-02-22T11:26:12.007Z")
console.log(finalDate);*/
