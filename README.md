jSlideShow is a very simple and easy to integrate image slideshow plugin. There are only two available slide transitions (fade and slide) that can be used. This image slideshow plugin requires jQuery.

Example of usage:
```html
<!--somewhere in the <body> -->
<div id="show-here"></div>

<!--javascript code -->
<script>
  $(document).ready(function() {
  			//basic slideshow example
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
