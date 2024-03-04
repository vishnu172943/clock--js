 const element=document.getElementById('second')
 let count=0;
 let hour=0;
 let minute=0;
 element.innerHTML=`${hour}:${minute}:${count}`

  setInterval(()=>{
    if(count===59){
        count=0;
        minutes()
    }
    count++;
    element.innerHTML=`${hour}:${minute}:${count}`
 },1000)
 function minutes(){
   minute++;
   if(minute==59){
    minute=0;
    hour++;
    if(hour===13){
        hour=1;
    }
   }
 }

 
 