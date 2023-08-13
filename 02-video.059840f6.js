const e=document.querySelector("#vimeo-player"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}),1e3));try{const{seconds:e}=JSON.parse(localStorage.getItem("videoplayer-current-time"));t.setCurrentTime(e)}catch(e){console.log(e.name),console.log(e.message)}
//# sourceMappingURL=02-video.059840f6.js.map
