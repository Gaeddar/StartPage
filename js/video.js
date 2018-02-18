var videoList = ["http://www.w3schools.com/html/mov_bbb.mp4", "http://media.sublimevideo.net/v/next15-sublime_360p.mp4"];
videoList.sort(function(a, b) {
  return 0.5 - Math.random()
});

$("#videoplayer").html("<video id='rawvideo' autoplay poster='' id='bgvid' loop><source src='" + videoList[0] + "' type='video/mp4'></video>");
