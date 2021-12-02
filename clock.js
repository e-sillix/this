setInterval(()=>{
  d=new Date();
//   console.log(d);  
  hours=d.getHours();
  minutes=d.getMinutes();
  seconds=d.getSeconds();
  mil=d.getMilliseconds();
  hrot=hours*30+minutes/2;
  mrot=minutes*6+0.1*seconds+0.0001*mil;
  srot=seconds*6+0.006*mil;
  hour.style.transform=`rotate(${hrot}deg)`;
  minute.style.transform=`rotate(${mrot}deg)`;
  second.style.transform=`rotate(${srot}deg)`;
  //   console.log(hours,minutes,seconds)
//   daysd.get
},1);
