const firebaseConfig = {
    apiKey: "AIzaSyDvHzVFjGZWVcTqhnDSjnSNOOU1JXr6fV0",
    authDomain: "datn-ute-2024.firebaseapp.com",
    databaseURL: "https://datn-ute-2024-default-rtdb.firebaseio.com",
    projectId: "datn-ute-2024",
    storageBucket: "datn-ute-2024.appspot.com",
    messagingSenderId: "438617299569",
    appId: "1:438617299569:web:02cd9c6ceb88b4d03619d0"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
function checkfanONOFF()
{ 
   if(document.getElementById('FANbtn').innerHTML == 'ON' )
   {
     document.getElementById('img-1').src = "./IMG/Light-Bulb-on2.jpg"
    
   }
   else
   {
     document.getElementById('img-1').src = "./IMG/light_off1.png"
   }
}

function checkhumONOFF()
{ 
   if(document.getElementById('HUMbtn').innerHTML == 'ON' )
   {
     document.getElementById('img-2').src = "./IMG/fan_on.png" 
     

   }
   else
   {
     document.getElementById('img-2').src = "./IMG/fan_off.png"
    
   }
}  

function checkhumONOFF2()
{ 
     if(document.getElementById('HUMbtn2').innerHTML == 'ON' )
     {
       document.getElementById('img-3').src = "./IMG/spray_on.png"
     }
     else
     {
       document.getElementById('img-3').src = "./IMG/spay_off.png"
     }
}  

function checkhumONOFF3()
{ 
     if(document.getElementById('HUMbtn3').innerHTML == 'ON' )
     {
       document.getElementById('img-4').src = "./IMG/water-pump_on.png"
     }
     else
     {
       document.getElementById('img-4').src = "./IMG/water-pump_off.png"
     }
} 

// -----------------------------------------------------------------
function fanONOFF()
{
      if(document.getElementById('FANbtn').innerHTML == 'OFF')
  {
  database.ref("/MAN").update({
   "FAN" : 1
  });
 document.getElementById('FANbtn').innerHTML == 'ON'
 checkfanONOFF();
  }
  else {
  //  FANbtn = 'fanLEDonoff=OFF';
  database.ref("/MAN").update({
      "FAN" : 0
     });
 document.getElementById('FANbtn').innerHTML == 'OFF'
 checkfanONOFF();
}

  
}
function humONOFF()
{
      if(document.getElementById('HUMbtn').innerHTML == 'OFF')
  {
  database.ref("/MAN").update({
   "HUM" : 1
  });
 document.getElementById('HUMbtn').innerHTML == 'ON'
 checkhumONOFF();
  }
  else {
  //  FANbtn = 'fanLEDonoff=OFF';
  database.ref("/MAN").update({
      "HUM" : 0
     });
 document.getElementById('HUMbtn').innerHTML == 'OFF'
 checkhumONOFF();
}
  
}
function humONOFF2()
{
      if(document.getElementById('HUMbtn2').innerHTML == 'OFF')
      {
      database.ref("/MAN").update({
       "HUM2" : 1
      });
     document.getElementById('HUMbtn2').innerHTML == 'ON'
     checkhumONOFF2();
      }
      else {
      //  FANbtn = 'fanLEDonoff=OFF';
      database.ref("/MAN").update({
          "HUM2" : 0
         });
     document.getElementById('HUMbtn2').innerHTML == 'OFF'
     checkhumONOFF2();
    }

 
}
function humONOFF3()
{
      if(document.getElementById('HUMbtn3').innerHTML == 'OFF')
  {
  database.ref("/MAN").update({
   "HUM3" : 1
  });
 document.getElementById('HUMbtn3').innerHTML == 'ON'
 checkhumONOFF3();
  }
  else {
  //  FANbtn = 'fanLEDonoff=OFF';
  database.ref("/MAN").update({
      "HUM3" : 0
     });
 document.getElementById('HUMbtn3').innerHTML == 'OFF'
 checkhumONOFF3();
}
}