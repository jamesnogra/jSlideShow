jSlideShow is a very simple and easy to integrate image slideshow plugin. There are only two available slide transitions (fade and slide) that can be used. This image slideshow plugin requires jQuery.

Example of usage:
```html
<!--somewhere in the <body> -->
<div id="show-here"></div>

<!--javascript code -->
<script>
	$(document).ready(function() {
		var image_list = [
			"images/dog1.jpg",
			"images/doge.jpg",
			"images/1.gif",
			"images/two.gif",
		];
		var test1 = new jSlideShow("my-pictures", image_list);
	});
</script>
```

Another example with custom size (700x250) and time delay (3 seconds)
```html
<!--somewhere in the <body> -->
<div id="slideshow"></div>

<!--javascript code -->
<script>
	$(document).ready(function() {
		var another_list = [
			"images/dog1.jpg",
			"images/doge.jpg"
		];
		var test2 = new jSlideShow("slideshow", another_list, 3000, 700, 250);
	});
</script>
```

Another example with custom size (400x200), time delay (4 seconds), and animation transition (slide)
```html
<!--somewhere in the <body> -->
<div id="slideshow-1"></div>

<!--javascript code -->
<script>
	$(document).ready(function() {
		var image_list_2 = [
			"http://wpuploads.appadvice.com/wp-content/uploads/2013/10/Clash-of-Clans-for-iPad-1.jpg",
			"http://jogos-para-android.com/wp-content/uploads/2015/05/Clash-of-Clans-e1392659745720.png",
			"https://clashfordummiesdotcom.files.wordpress.com/2015/07/clash-of-clans-wallpaper-7.png",
			"http://images.gamenguide.com/data/images/full/21768/clash-of-clans.jpg?w=720",
		];
		var test3 = new jSlideShow("slideshow-1", image_list_2, 4000, 400, 200, "slide");
	});
</script>
```
