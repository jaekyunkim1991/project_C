function clock() {
  const elem = document.getElementById("clock");
  let date = new Date();
  let years = date.getFullYear(); // 의문1: getYear()하면 122로 표현되는데 왜지?
  let month = date.getMonth();
  let clockDate = date.getDate();
  let day = date.getDay();
  let week = ['SON', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let inputH, inputM, inputS, inputMonth, inputclockDate;
  inputMonth = checkTime(month+1);
  inputclockDate = checkTime(clockDate);
  inputH = checkTime(hours);
  inputM = checkTime(minutes);
  inputS = checkTime(seconds);

  // document.body.style.backgroundImage = "url('./img/background_04.jpg')";
  document.body.style.backgroundImage = "url('./img/background_05.jpg')";
  elem.innerHTML = `SEOUL ${years} ${inputMonth} / ${inputclockDate} ${week[day]} \n ${inputH}:${inputM}:${inputS}`; // 의문2: \n했는데 왜 띄어쓰기가 안될까??
  // `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
  setInterval(clock, 1000);
};

// function init(){
// clock();
// setInterval(clock, 1000);
// }
// init();

function checkTime(i){
  if( i < 10 ){
    i = "0" + i;
  }
  return i;
}
clock();



// 의문3: 시계말고 다른 요소를 추가하는 방법은??
