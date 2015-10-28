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

Another example with custom size (700x250) and delay transition (3 seconds)
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
