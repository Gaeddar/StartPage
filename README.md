Homepage
====

![alt tag](screenshots/preview.png "Homepage preview")

This repository contains a custom homepage made using html, css and javascript (jQuery).

Features:
* Flashy links
* Flashy Slidy sublinks
* Randomly selected 2D characters and videos of Gondolas
* Motivation text, and some quotes from songs
* Column style links.

Customizing, adding mascots and themes
----

To customize mascots in `ruri-dark` theme, modify the array in [themes/ruri-dark/mascots.js](themes/ruri-dark/mascots.js):
```javascript
var mascotList = [ "ex.png", "ex2.png" ];
```

To make new theme, you can copy an existing one, and change images and [colors.css](themes/ruri-dark/colors.css) as you like.  
Please note that entries in your theme's [mascots.js](themes/ruri-dark/mascots.js) should match with contents of [mascots/](themes/ruri-dark/mascots/) directory.  
(The links used in `ruri-dark` theme only as an example. Change them to wathever you like :) )
To change Gondola videos add new "addvideo" line in [videos.js] (js/videos.js) directory.

Disclaimer
----
This is a modified version of the original Ruri dark homepage by gokoururi see link for original -> https://github.com/gokoururi/homepage