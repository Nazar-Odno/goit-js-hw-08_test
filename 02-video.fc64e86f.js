!function(){var e=document.querySelector("#vimeo-player"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}),1e3));try{var o=JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds;t.setCurrentTime(o)}catch(e){console.log(e.name),console.log(e.message)}}();
//# sourceMappingURL=02-video.fc64e86f.js.map
