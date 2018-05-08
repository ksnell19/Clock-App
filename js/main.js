//Array of month and day names to display
months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

function date_time(){
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();  //Month doesn't need +1
  const day = now.getDay();

  d = now.getDate();
  h = now.getHours();
    if(h<10){
      h = "0"+h;
}
  m = now.getMinutes();
    if(m<10){
      m = "0"+m;
}
  s = now.getSeconds();
    if(s<10){
      s = "0"+s;
}

//Grab all info and put it together in a string to display
  result = ''+days[day]+' '+months[month]+' '+d+', '+year+' '+h+':'+m+':'+s;
  document.querySelector("#displayInfo").textContent= result;
};

setInterval(date_time, 1000);
