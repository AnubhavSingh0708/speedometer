if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}


var l0,lt,w0,wt,ld,wd,speed;
const options = {
    timeout: 50000,
  };
  function success(pos) {
   var crd = pos.coords.speed;
    document.getElementById("speed").innerHTML=crd;
lt=pos.coords.latitude;
wt=pos.coords.longitude;

  }
  
  function successl(pos) {
    var crds = pos.coords.speed;
  document.getElementById("speed").innerHTML=crds;
if (crds == null){
  l0=lt;
  w0=wt;
  lt=pos.coords.latitude;
  wt=pos.coords.longitude;

  ld=(l0-lt)*111.3194;
  wd=(w0-wt)*111.133;

  speed=Math.sqrt(Math.pow(ld,2))*Math.pow(ld,2);
  document.getElementById("speed").innerHTML=speed;
}
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
  loop();
 function loop(){
  navigator.geolocation.getCurrentPosition(successl, error, options);
  setTimeout(loop, 500)
  }
 //navigator.geolocation.watchPosition(successl, error, options);
