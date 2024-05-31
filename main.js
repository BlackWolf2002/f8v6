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
// console.log(database);

database.ref("TT_IoT/TEMP").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var nhietdo = snapshot.val();
  document.getElementById("Tempvalue").innerHTML= nhietdo;
});
database.ref("TT_IoT/HUM").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var doam = snapshot.val();
  document.getElementById("Humvalue").innerHTML= doam;
});
database.ref("TT_IoT/HUMreal").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var doamdat = snapshot.val();
  document.getElementById("Humvalue2").innerHTML= doamdat;
});
database.ref("TT_IoT/PHvalue").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var doph = snapshot.val();
  document.getElementById("PHvalue").innerHTML= doph;
});
// ---------------dien ap--------------------

database.ref("PowerV/V1").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var dienap1 = snapshot.val();
 var dienap11=dienap1.toFixed(2);
document.getElementById("voltage_1").innerHTML= dienap11;
});
database.ref("PowerV/V2").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var dienap2 = snapshot.val();
 var dienap22=dienap2.toFixed(2);
document.getElementById("voltage_4").innerHTML= dienap22;
});
database.ref("PowerV/V3").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var dienap3 = snapshot.val();
 var dienap33=dienap3.toFixed(2);
document.getElementById("voltage_2").innerHTML= dienap33;
});
database.ref("PowerV/V4").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var dienap4 = snapshot.val();
 var dienap44=dienap4.toFixed(2);
document.getElementById("voltage_3").innerHTML= dienap44;
});
// --------------------dòng điện----------------------

database.ref("Power/I1").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var dongdien1 = snapshot.val();
 var dongdien11=dongdien1.toFixed(2);
document.getElementById("current_1").innerHTML= dongdien11;
});
database.ref("Power/I2").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var dongdien2 = snapshot.val();
 var dongdien22=dongdien2.toFixed(2);
document.getElementById("current_2").innerHTML= dongdien22;
});
database.ref("Power/I3").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var dongdien3 = snapshot.val();
 var dongdien33=dongdien3.toFixed(2);
document.getElementById("current_3").innerHTML= dongdien33;
});
database.ref("Power/I4").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var dongdien4 = snapshot.val();
 var dongdien44=dongdien4.toFixed(2);
document.getElementById("current_4").innerHTML= dongdien44;
});
// ------------------ ----------công suất--------------------------------

database.ref("PowerP/P1").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var congsuat1 = snapshot.val();
 var congsuat11= congsuat1.toFixed(2);
document.getElementById("pow_1").innerHTML= congsuat11;
});
database.ref("PowerP/P2").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var congsuat2 = snapshot.val();
 var congsuat22= congsuat2.toFixed(2);
document.getElementById("pow_2").innerHTML= congsuat22;
});
database.ref("PowerP/P3").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var congsuat3 = snapshot.val();
 var congsuat33= congsuat3.toFixed(2);
document.getElementById("pow_3").innerHTML= congsuat33;
});
database.ref("PowerP/P4").on("value", function (snapshot) {
//----------------------------- Gauge ----------------------------
 var congsuat4 = snapshot.val();
 var congsuat44= congsuat4.toFixed(2);
document.getElementById("pow_4").innerHTML= congsuat44;
});
//document.getElementById('FANbtn').innerHTML == 'ON'
// database.ref("TT_IoT/LED").on("value", function (snapshot) {
//     //----------------------------- Gauge ----------------------------
//      var doph1 = snapshot.val();
//     document.getElementById("PH1value").innerHTML= doph1;
// });

//     //----------------------------- MAN ----------------------------
database.ref("MAN/FAN").on("value", function (snapshot) {
   var manfan= snapshot.val();
  if(manfan==1) {
    document.getElementById('img-1').src = "./IMG/Light-Bulb-on2.jpg"
    document.getElementById('FANbtn').innerHTML = 'ON'; 
    
  }
  else{
    document.getElementById('img-1').src = "./IMG/light_off1.png"
     document.getElementById('FANbtn').innerHTML = 'OFF';
     
    }
});

database.ref("MAN/HUM").on("value", function (snapshot) {
   var manhum= snapshot.val();
  if(manhum==1) {
    document.getElementById('img-2').src = "./IMG/fan_on.png"
    document.getElementById('HUMbtn').innerHTML = 'ON';
    
  }
  else {
    document.getElementById('img-2').src = "./IMG/fan_off.png"
    document.getElementById('HUMbtn').innerHTML = 'OFF';
  
}
});
database.ref("MAN/HUM2").on("value", function (snapshot) {
  var manhum2= snapshot.val();
 if(manhum2==1) {document.getElementById('img-3').src = "./IMG/spray_on.png";document.getElementById('HUMbtn2').innerHTML = 'ON';}
 else {document.getElementById('img-3').src = "./IMG/spay_off.png";document.getElementById('HUMbtn2').innerHTML = 'OFF';}
});
database.ref("MAN/HUM3").on("value", function (snapshot) {
  var manhum3= snapshot.val();
 if(manhum3==1) {document.getElementById('img-4').src = "./IMG/water-pump_on.png";document.getElementById('HUMbtn3').innerHTML = 'ON';}
 else {document.getElementById('img-4').src = "./IMG/water-pump_off.png";document.getElementById('HUMbtn3').innerHTML = 'OFF';}
});
database.ref("MAN/AUTOMAN").on("value", function (snapshot) {
  var automan= snapshot.val();
 if(automan==1) {
  document.getElementById('autobtn').innerHTML = 'AUTO'
  document.getElementById('div_tudong').style.display = "flex";
  document.getElementById('div_tay').style.display = "none";
 }
else {document.getElementById('autobtn').innerHTML = 'MAN'
document.getElementById('div_tay').style.display = "flex";
document.getElementById('div_tudong').style.display = "none";}
});
// -------------------------------------
// function checkfanONOFF()
// { 
//    if(document.getElementById('FANbtn').innerHTML == 'ON' )
//    {
//      document.getElementById('img-1').src = "./IMG/Light-Bulb-on2.jpg"
//    }
//    else
//    {
//      document.getElementById('img-1').src = "./IMG/light_off1.png"
//    }
// }

// function checkhumONOFF()
// { 
//    if(document.getElementById('HUMbtn').innerHTML == 'ON' )
//    {
//      document.getElementById('img-2').src = "./IMG/fan_on.png"
//    }
//    else
//    {
//      document.getElementById('img-2').src = "./IMG/fan_off.png"
//    }
// }  

// function checkhumONOFF2()
// { 
//      if(document.getElementById('HUMbtn2').innerHTML == 'ON' )
//      {
//        document.getElementById('img-3').src = "./IMG/spray_on.png"
//      }
//      else
//      {
//        document.getElementById('img-3').src = "./IMG/spay_off.png"
//      }
// }  

// function checkhumONOFF3()
// { 
//      if(document.getElementById('HUMbtn3').innerHTML == 'ON' )
//      {
//        document.getElementById('img-4').src = "./IMG/water-pump_on.png"
//      }
//      else
//      {
//        document.getElementById('img-4').src = "./IMG/water-pump_off.png"
//      }
// } 

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
function autoONOFF()
{
  if(document.getElementById('autobtn').innerHTML == 'MAN')
  {
  database.ref("/MAN").update({
   "AUTOMAN" : 1
  });
 document.getElementById('autobtn').innerHTML == 'AUTO'
 database.ref("/MAN").update({
  "FAN" : 0
 });
//document.getElementById('FANbtn').innerHTML == 'OFF'
database.ref("/MAN").update({
  "HUM" : 0
 });
 //document.getElementById('HUMbtn').innerHTML == 'OFF'
 database.ref("/MAN").update({
  "HUM2" : 0
 });
 //document.getElementById('HUMbtn2').innerHTML == 'OFF'
 database.ref("/MAN").update({
  "HUM3" : 0
 });
// document.getElementById('HUMbtn3').innerHTML == 'OFF'
 document.getElementById('div_tudong').style.display = "flex";
 document.getElementById('div_tay').style.display = "none";
  }
  else {
  //  FANbtn = 'fanLEDonoff=OFF';
  database.ref("/MAN").update({
      "AUTOMAN" : 0
     });
 document.getElementById('autobtn').innerHTML == 'MAN'
 document.getElementById('div_tay').style.display = "flex";
 document.getElementById('div_tudong').style.display = "none";
  
}
}


function giatri(){
var fname=Number(document.getElementById("setnhietdo").value);
database.ref("/AUTO").update({
  "ND" : fname
 });
}

function giatri1(){
var lname=Number(document.getElementById("setdoam").value);
 database.ref("/AUTO").update({
  "DA" : lname
 });
}
function giatri2(){
var nname=Number(document.getElementById("setdoamdat").value);
 database.ref("/AUTO").update({
  "DAD" : nname
 });
}
//--------------------hien thi thong so ca dat------------------------
database.ref("AUTO/ND").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var nhietdocatdat = snapshot.val();
  document.getElementById("hienthiND").innerHTML= nhietdocatdat;
});
database.ref("AUTO/DA").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var doamcatdat = snapshot.val();
  document.getElementById("hienthiDA").innerHTML= doamcatdat;
});
database.ref("AUTO/DAD").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var doamdatcatdat = snapshot.val();
  document.getElementById("hienthiDAD").innerHTML= doamdatcatdat;
});
//-----------------------------------------------------------------
//-----------------------------------------------------------------
database.ref("AUTO/GIOMO").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var giomocatdat = snapshot.val();
 document.getElementById("hienthiGM").innerHTML= giomocatdat;
});
database.ref("AUTO/PHUTMO").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var phutmocatdat = snapshot.val();
 document.getElementById("hienthiPM").innerHTML= phutmocatdat;
});
//-----------------------------------------------------------------
//-----------------------------------------------------------------
database.ref("AUTO/GIOTAT").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var giotatcatdat = snapshot.val();
 document.getElementById("hienthiGT").innerHTML= giotatcatdat;
});
database.ref("AUTO/PHUTTAT").on("value", function (snapshot) {
  //----------------------------- Gauge ----------------------------
   var phuttatcatdat = snapshot.val();
 document.getElementById("hienthiPT").innerHTML= phuttatcatdat;
});
//document.getElementById('thoigianmo').innerHTML = hienthiGM + ":" + hienthiPM;
// function giatri3(){
//   var tname=Tim(document.getElementById("setthoigian").value);
//    database.ref("/AUTO").update({
//     "TG" : tname
//    });
// }
// ----------------thời gian thực-------------------
var GIOMOfb, PHUTMOfb, GIOTATfb, PHUTTATfb;
function startTime() 
{
  // Lấy Object ngày hiện tại
  var today = new Date();

  // Giờ, phút, giây hiện tại
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  // Chuyển đổi sang dạng 01, 02, 03
  m = checkTime(m);
  s = checkTime(s);

  // Ghi ra trình duyệt
  document.getElementById('timer').innerHTML = h + ":" + m + ":" + s;

  // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
  var t = setTimeout(function() {
      startTime();
  }, 500);

  database.ref("AUTO/GIOMO").on("value", function (snapshot) {
    //----------------------------- Gauge ----------------------------
    GIOMOfb = snapshot.val();
    // document.getElementById("hienthiGM").innerHTML= GIOMOfb;
    });
    database.ref("AUTO/PHUTMO").on("value", function (snapshot) {
      //----------------------------- Gauge ----------------------------
      PHUTMOfb = snapshot.val();
      // document.getElementById("hienthiPM").innerHTML= PHUTMOfb;
      });
      database.ref("AUTO/GIOTAT").on("value", function (snapshot) {
        //----------------------------- Gauge ----------------------------
        GIOTATfb = snapshot.val();
        // document.getElementById("hienthiGT").innerHTML= GIOTATfb;
        });
        database.ref("AUTO/PHUTTAT").on("value", function (snapshot) {
          //----------------------------- Gauge ----------------------------
          PHUTTATfb = snapshot.val();
          // document.getElementById("hienthiPT").innerHTML= PHUTTATfb;
          });
  if((h>GIOMOfb)||(h==GIOMOfb && m >= PHUTMOfb ))
  {
   if((h < GIOTATfb) || ((h ==GIOTATfb) && (m < PHUTTATfb)))
    {
      database.ref("/AUTO").update({
        "AUTODEN" : 1
       });
    }
    else
    {
      database.ref("/AUTO").update({
        "AUTODEN" : 0
       });
    }
  }
  else
  {
    database.ref("/AUTO").update({
      "AUTODEN" : 0
     });
  }
}

         
        // Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
        function checkTime(i) 
{
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}
// ------------------------------
function readTime() {
// Lấy phần tử nhập liệu thời gian bằng id
const timeInput = document.getElementById('timeInput');

// Lấy giá trị của phần tử nhập liệu
const timeValue = timeInput.value;
const [hours, minutes] = timeValue.split(':');
var GIO = Number(hours);
var PHUT = Number(minutes);

database.ref("/AUTO").update({
  "GIOMO" : GIO
 });
 database.ref("/AUTO").update({
  "PHUTMO" : PHUT
 });
}
function readTime1() {
  // Lấy phần tử nhập liệu thời gian bằng id
  const timeInput = document.getElementById('timeInput1');
  
  // Lấy giá trị của phần tử nhập liệu
  const timeValue = timeInput.value;
  const [hours1, minutes1] = timeValue.split(':');
  var GIOTAT = Number(hours1);
  var PHUTTAT = Number(minutes1);
  
  database.ref("/AUTO").update({
    "GIOTAT" : GIOTAT
   });
   database.ref("/AUTO").update({
    "PHUTTAT" : PHUTTAT
   });
  }
  //--------------------------link ưeb
//   function function_tay() {
//     document.getElementById('div_tay').style.display = "flex";
//     document.getElementById('div_tudong').style.display = "none";
// }