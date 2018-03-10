/*    Copyright 2018 Gaeddar
        This work is free. You can redistribute it and/or modify it under the
        terms of the Do What The Fuck You Want To Public License, Version 2,
        as published by who knows. See the COPYING file for more details. */

window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var ctx = canvas.getContext('2d'),

    w = canvas.width,
    h = canvas.height,
    video1 = document.createElement('video'),
    video2 = document.createElement('video'),
    isVideo1 = false,
    list = [],
    current = 0,
    isPlaying = false,
    
    /// watermark
    wm = document.createElement('canvas'),
    wctx = wm.getContext('2d'),
    wtxt = '';

wm.width = 380;
wm.height = 20;
wctx.font = 'bold 20px Arial';
wctx.fillStyle = 'rgba(255,255,255, 0.5)';
wctx.textBaseline = 'top';
wctx.fillText(wtxt, 0, 0);

video1.addEventListener('ended', play, false);
video2.addEventListener('ended', play, false);

addVideo('themes/ruri-dark/videos/Club Bathroom Gondola.webm', 'themes/ruri-dark/videos/Club Bathroom Gondola.ogg');
addVideo('themes/ruri-dark/videos/84e gondola garde.webm', 'themes/ruri-dark/videos/84e gondola garde.ogg');
addVideo('themes/ruri-dark/videos/1460048475339.webm', 'themes/ruri-dark/videos/1460048475339.ogg');
addVideo('themes/ruri-dark/videos/1460277195319.webm', 'themes/ruri-dark/videos/1460277195319.ogg');
addVideo('themes/ruri-dark/videos/afterraindola.webm', 'themes/ruri-dark/videos/afterraindola.ogg');
addVideo('themes/ruri-dark/videos/alone gondo.webm', 'themes/ruri-dark/videos/alone gondo.ogg');
addVideo('themes/ruri-dark/videos/alone.webm', 'themes/ruri-dark/videos/alone.ogg');
addVideo('themes/ruri-dark/videos/Anor Gondo.webm', 'themes/ruri-dark/videos/Anor Gondo.ogg');
addVideo('themes/ruri-dark/videos/ARareGondola.webm', 'themes/ruri-dark/videos/ARareGondola.ogg');
addVideo('themes/ruri-dark/videos/beachdola.webm', 'themes/ruri-dark/videos/beachdola.ogg');
addVideo('themes/ruri-dark/videos/Behemoths World.webm', 'themes/ruri-dark/videos/Behemoths World.ogg');
addVideo('themes/ruri-dark/videos/besaid gondo.webm', 'themes/ruri-dark/videos/besaid gondo.ogg');
addVideo('themes/ruri-dark/videos/chernobyl gondola.webm', 'themes/ruri-dark/videos/chernobyl gondola.ogg');
addVideo('themes/ruri-dark/videos/Club Bathroom Gondola.webm', 'themes/ruri-dark/videos/Club Bathroom Gondola.ogg');
addVideo('themes/ruri-dark/videos/comfy gondola.webm', 'themes/ruri-dark/videos/comfy gondola.ogg');
addVideo('themes/ruri-dark/videos/Configondola.webm', 'themes/ruri-dark/videos/Configondola.ogg');
addVideo('themes/ruri-dark/videos/Conjurers_Clutter.webm', 'themes/ruri-dark/videos/Conjurers_Clutter.ogg');
addVideo('themes/ruri-dark/videos/Dorky.webm', 'themes/ruri-dark/videos/Dorky.ogg');
addVideo('themes/ruri-dark/videos/drive_gondola.webm', 'themes/ruri-dark/videos/drive_gondola.ogg');
addVideo('themes/ruri-dark/videos/druid.webm', 'themes/ruri-dark/videos/druid.ogg');
addVideo('themes/ruri-dark/videos/eyedivinefuggmancy.webm', 'themes/ruri-dark/videos/eyedivinefuggmancy.ogg');
addVideo('themes/ruri-dark/videos/gondol17.webm', 'themes/ruri-dark/videos/gondol17.ogg');
addVideo('themes/ruri-dark/videos/gondola bridge.webm', 'themes/ruri-dark/videos/gondola bridge.ogg');
addVideo('themes/ruri-dark/videos/gondola crash.webm', 'themes/ruri-dark/videos/gondola crash.ogg');
addVideo('themes/ruri-dark/videos/Gondola Cruisin.webm', 'themes/ruri-dark/videos/Gondola Cruisin.ogg');
addVideo('themes/ruri-dark/videos/Gondola Kraftwerk.webm', 'themes/ruri-dark/videos/Gondola Kraftwerk.ogg');
addVideo('themes/ruri-dark/videos/gondola mountain.webm', 'themes/ruri-dark/videos/gondola mountain.ogg');
addVideo('themes/ruri-dark/videos/gondola night drive.webm', 'themes/ruri-dark/videos/gondola night drive.ogg');
addVideo('themes/ruri-dark/videos/Gondola ocean.webm', 'themes/ruri-dark/videos/Gondola ocean.ogg');
addVideo('themes/ruri-dark/videos/gondola salt flats 2.webm', 'themes/ruri-dark/videos/gondola salt flats 2.ogg');
addVideo('themes/ruri-dark/videos/Gondola Snow.webm', 'themes/ruri-dark/videos/Gondola Snow.ogg');
addVideo('themes/ruri-dark/videos/Gondola Year.webm', 'themes/ruri-dark/videos/Gondola Year.ogg');
addVideo('themes/ruri-dark/videos/Gondola_-_Ashes_in_the_snow.webm', 'themes/ruri-dark/videos/Gondola_-_Ashes_in_the_snow.ogg');
addVideo('themes/ruri-dark/videos/Gondola_after_school.webm', 'themes/ruri-dark/videos/Gondola_after_school.ogg');
addVideo('themes/ruri-dark/videos/GondolasMovingCastle.webm', 'themes/ruri-dark/videos/GondolasMovingCastle.ogg');
addVideo('themes/ruri-dark/videos/GondolasSummerLove.webm', 'themes/ruri-dark/videos/GondolasSummerLove.ogg');
addVideo('themes/ruri-dark/videos/gondolearth.webm', 'themes/ruri-dark/videos/gondolearth.ogg');
addVideo('themes/ruri-dark/videos/gondolian interloper.webm', 'themes/ruri-dark/videos/gondolian interloper.ogg');
addVideo('themes/ruri-dark/videos/gondolib.webm', 'themes/ruri-dark/videos/gondolib.ogg');
addVideo('themes/ruri-dark/videos/Gondongen.webm', 'themes/ruri-dark/videos/Gondongen.ogg');
addVideo('themes/ruri-dark/videos/gondotopwimdy.webm', 'themes/ruri-dark/videos/gondotopwimdy.ogg');
addVideo('themes/ruri-dark/videos/Gontoola.webm', 'themes/ruri-dark/videos/Gontoola.ogg');
addVideo('themes/ruri-dark/videos/guestdola.webm', 'themes/ruri-dark/videos/guestdola.ogg');
addVideo('themes/ruri-dark/videos/HopeForYouYetGondoler.webm', 'themes/ruri-dark/videos/HopeForYouYetGondoler.ogg');
addVideo('themes/ruri-dark/videos/im sad gondola.webm', 'themes/ruri-dark/videos/im sad gondola.ogg');
addVideo('themes/ruri-dark/videos/legmeme cant catch a break.webm', 'themes/ruri-dark/videos/legmeme cant catch a break.ogg');
addVideo('themes/ruri-dark/videos/Lost Time.webm', 'themes/ruri-dark/videos/Lost Time.ogg');
addVideo('themes/ruri-dark/videos/Made it.webm', 'themes/ruri-dark/videos/Made it.ogg');
addVideo('themes/ruri-dark/videos/Max Gondola 3.webm', 'themes/ruri-dark/videos/Max Gondola 3.ogg');
addVideo('themes/ruri-dark/videos/Max Gondola.webm', 'themes/ruri-dark/videos/Max Gondola.ogg');
addVideo('themes/ruri-dark/videos/Melody of Gondola.webm', 'themes/ruri-dark/videos/Melody of Gondola.ogg');
addVideo('themes/ruri-dark/videos/Meta-Gondola.webm', 'themes/ruri-dark/videos/Meta-Gondola.ogg');
addVideo('themes/ruri-dark/videos/MY OWN.webm', 'themes/ruri-dark/videos/MY OWN.ogg');
addVideo('themes/ruri-dark/videos/nature sounds gondola.webm', 'themes/ruri-dark/videos/nature sounds gondola.ogg');
addVideo('themes/ruri-dark/videos/neo venezian gondola.webm', 'themes/ruri-dark/videos/neo venezian gondola.ogg');
addVideo('themes/ruri-dark/videos/OuroGondola.webm', 'themes/ruri-dark/videos/OuroGondola.ogg');
addVideo('themes/ruri-dark/videos/part.webm', 'themes/ruri-dark/videos/part.ogg');
addVideo('themes/ruri-dark/videos/pekko.webm', 'themes/ruri-dark/videos/pekko.ogg');
addVideo('themes/ruri-dark/videos/propagondola.webm', 'themes/ruri-dark/videos/propagondola.ogg');
addVideo('themes/ruri-dark/videos/RareGondola.webm', 'themes/ruri-dark/videos/RareGondola.ogg');
addVideo('themes/ruri-dark/videos/raymandola.webm', 'themes/ruri-dark/videos/raymandola.ogg');
addVideo('themes/ruri-dark/videos/song source.webm', 'themes/ruri-dark/videos/song source.ogg');
addVideo('themes/ruri-dark/videos/stalker gondola.webm', 'themes/ruri-dark/videos/stalker gondola.ogg');
addVideo('themes/ruri-dark/videos/steppe.webm', 'themes/ruri-dark/videos/steppe.ogg');
addVideo('themes/ruri-dark/videos/Teatime Dandies.webm', 'themes/ruri-dark/videos/Teatime Dandies.ogg');
addVideo('themes/ruri-dark/videos/Texan Gondola.webm', 'themes/ruri-dark/videos/Texan Gondola.ogg');
addVideo('themes/ruri-dark/videos/the cloud.webm', 'themes/ruri-dark/videos/the cloud.ogg');
addVideo('themes/ruri-dark/videos/theworstgondola.webm', 'themes/ruri-dark/videos/theworstgondola.ogg');
addVideo('themes/ruri-dark/videos/to spurdoland.webm', 'themes/ruri-dark/videos/to spurdoland.ogg');
addVideo('themes/ruri-dark/videos/too young to gondola.webm', 'themes/ruri-dark/videos/too young to gondola.ogg');
addVideo('themes/ruri-dark/videos/treeGondo.webm', 'themes/ruri-dark/videos/treeGondo.ogg');
addVideo('themes/ruri-dark/videos/Veranda.webm', 'themes/ruri-dark/videos/Veranda.ogg');
addVideo('themes/ruri-dark/videos/WALLASaGROMITTgondola.webm', 'themes/ruri-dark/videos/WALLASaGROMITTgondola.ogg');
addVideo('themes/ruri-dark/videos/1518000393355.webm', 'themes/ruri-dark/videos/1518000393355.ogg');
addVideo('themes/ruri-dark/videos/1518000757649.webm', 'themes/ruri-dark/videos/1518000757649.ogg');
addVideo('themes/ruri-dark/videos/1518002606020.webm', 'themes/ruri-dark/videos/1518002606020.ogg');
addVideo('themes/ruri-dark/videos/1518003255957.webm', 'themes/ruri-dark/videos/1518003255957.ogg');
addVideo('themes/ruri-dark/videos/1518003435800.webm', 'themes/ruri-dark/videos/1518003435800.ogg');
addVideo('themes/ruri-dark/videos/1518003512598.webm', 'themes/ruri-dark/videos/1518003512598.ogg');
addVideo('themes/ruri-dark/videos/1518006880299.webm', 'themes/ruri-dark/videos/1518006880299.ogg');
addVideo('themes/ruri-dark/videos/1518009091431.webm', 'themes/ruri-dark/videos/1518009091431.ogg');
addVideo('themes/ruri-dark/videos/1518013624803.webm', 'themes/ruri-dark/videos/1518013624803.ogg');
addVideo('themes/ruri-dark/videos/1518014128140.webm', 'themes/ruri-dark/videos/1518014128140.ogg');
addVideo('themes/ruri-dark/videos/1518022375787.webm', 'themes/ruri-dark/videos/1518022375787.ogg');
addVideo('themes/ruri-dark/videos/1518042666927.webm', 'themes/ruri-dark/videos/1518042666927.ogg');
addVideo('themes/ruri-dark/videos/1518042752297.webm', 'themes/ruri-dark/videos/1518042752297.ogg');
addVideo('themes/ruri-dark/videos/1518067727407.webm', 'themes/ruri-dark/videos/1518067727407.ogg');
addVideo('themes/ruri-dark/videos/1518104369405.webm', 'themes/ruri-dark/videos/1518104369405.ogg');
addVideo('themes/ruri-dark/videos/1518140221628.webm', 'themes/ruri-dark/videos/1518140221628.ogg');
addVideo('themes/ruri-dark/videos/1518141257817.webm', 'themes/ruri-dark/videos/1518141257817.ogg');
addVideo('themes/ruri-dark/videos/1518196867768.webm', 'themes/ruri-dark/videos/1518196867768.ogg');
addVideo('themes/ruri-dark/videos/1518246201020.webm', 'themes/ruri-dark/videos/1518246201020.ogg');
addVideo('themes/ruri-dark/videos/1518252609718.webm', 'themes/ruri-dark/videos/1518252609718.ogg');
addVideo('themes/ruri-dark/videos/1518336519183.webm', 'themes/ruri-dark/videos/1518336519183.ogg');
addVideo('themes/ruri-dark/videos/1518389144561.webm', 'themes/ruri-dark/videos/1518389144561.ogg');
addVideo('themes/ruri-dark/videos/1518551699824.webm', 'themes/ruri-dark/videos/1518551699824.ogg');
addVideo('themes/ruri-dark/videos/1518554806213.webm', 'themes/ruri-dark/videos/1518554806213.ogg');
addVideo('themes/ruri-dark/videos/1518576216592.webm', 'themes/ruri-dark/videos/1518576216592.ogg');
addVideo('themes/ruri-dark/videos/1518585893403.webm', 'themes/ruri-dark/videos/1518585893403.ogg');
addVideo('themes/ruri-dark/videos/1518635874354.webm', 'themes/ruri-dark/videos/1518635874354.ogg');
addVideo('themes/ruri-dark/videos/1518749700364.webm', 'themes/ruri-dark/videos/1518749700364.ogg');
addVideo('themes/ruri-dark/videos/1518835200509.webm', 'themes/ruri-dark/videos/1518835200509.ogg');
addVideo('themes/ruri-dark/videos/1519137016799.webm', 'themes/ruri-dark/videos/1519137016799.ogg');
addVideo('themes/ruri-dark/videos/1519251228404.webm', 'themes/ruri-dark/videos/1519251228404.ogg');
addVideo('themes/ruri-dark/videos/1519371927653.webm', 'themes/ruri-dark/videos/1519371927653.ogg');
addVideo('themes/ruri-dark/videos/1519567622695.webm', 'themes/ruri-dark/videos/1519567622695.ogg');
addVideo('themes/ruri-dark/videos/1519577757683.webm', 'themes/ruri-dark/videos/1519577757683.ogg');
addVideo('themes/ruri-dark/videos/1519793881274.webm', 'themes/ruri-dark/videos/1519793881274.ogg');
addVideo('themes/ruri-dark/videos/1519867120959.webm', 'themes/ruri-dark/videos/1519867120959.ogg');
addVideo('themes/ruri-dark/videos/1519954971372.webm', 'themes/ruri-dark/videos/1519954971372.ogg');
addVideo('themes/ruri-dark/videos/1520059224460.webm', 'themes/ruri-dark/videos/1520059224460.ogg');
addVideo('themes/ruri-dark/videos/1520233134589.webm', 'themes/ruri-dark/videos/1520233134589.ogg');
addVideo('themes/ruri-dark/videos/1520545583337.webm', 'themes/ruri-dark/videos/1520545583337.ogg');
addVideo('themes/ruri-dark/videos/1520657146202.webm', 'themes/ruri-dark/videos/1520657146202.ogg');

list.sort(function(a, b) {return 0.5 - Math.random()});

getVideo(list[0], play);

/// start loop
render();

function play(){

    var video = (isVideo1 === false ? video1 : video2),
        next = current;
		video.muted = true;

    isVideo1 = !isVideo1;

    next++;
    if (next > list.length - 1) next = 0;
    
    if (list.length > 0) getVideo(list[next]);
        
    /// start video
    video.play();
    isPlaying = true;
    
    current = next;
}

function render() {
    if (isPlaying) {
        var video = (isVideo1 === true ? video1 : video2);
        ctx.drawImage(video, 0, 0, w, h);
        ctx.drawImage(wm, 8, 8);
    }
    requestAnimationFrame(render);
}

function addVideo(urlMP4, url) {
    list.push({
        urlMP4: urlMP4,
        url: url,
        isReady: false
    })
}

function getVideo(vid, callback) {

    var video = (isVideo1 === false ? video1 : video2),
        me = this;

    video.addEventListener('canplay', canPlay, false);;
    
    function canPlay(e) {
        video.removeEventListener('canplay', canPlay, false);
        vid.isReady = true;
        if (typeof callback === 'function')
            callback(vid);
    }

    if (video.canPlayType("video/mp4").replace('no', '').length > 0) {
        video.src = vid.urlMP4;
    } else {
        video.src = vid.url;
    }
}