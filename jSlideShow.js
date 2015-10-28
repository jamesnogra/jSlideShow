/**
 * jSlideShow is a simple image slideshow plugin
 * This plugin requires jQuery
 * @param element_name is the name of the html element in which to put the slideshow of images
 * @param image_array is an array of the path(s) of images for the slideshow (remote images is allowed)
 * @param delay (optional) is the time interval before the next image is show (in milliseconds)
 * @param width (optional) is the width in pixels of the slideshow element 
 * @param height (optional) is the height in pixels of the slideshow element 
 * @param type (optional) is the type of transition animation (slide and fade are the only two options)
 */

var jSlideShow = function(element_name, image_array, delay, width, height, type) {
	
	var width = width || 350;
	var height = height || 200;
	var image_array = image_array;
	var element_name = element_name;
	var type = type || "fade";
	var picture_index = 0;
	var prev_index;
	var delay = delay || 2500;
	if (delay < 1000) { delay = 1000;}
	
	$("#"+element_name).css({
		"width": width,
		"height": height,
		"background-color": "#F5F5F5",
		"overflow": "hidden"
	});
	
	if (image_array.length == 0) { return;	}
	$("#"+element_name).html("<div style='width:100%;height:100%;position:relative;' id='img-arr-"+picture_index+"-"+element_name+"'><img src='"+image_array[0]+"' width='100%' height='100%' /></div>");
	image_loop = setInterval(function() {
		prev_index = picture_index;
		picture_index++;
		if (picture_index >= image_array.length) {
			picture_index = 0;
		}
		if (type == "fade") {
			$("#img-arr-"+prev_index+"-"+element_name).remove();
			$("#"+element_name).html("<div style='width:100%;height:100%;position:relative;' id='img-arr-"+picture_index+"-"+element_name+"'><img src='"+image_array[picture_index]+"' width='100%' height='100%' /></div>");
			$("#img-arr-"+picture_index+"-"+element_name).hide();
			$("#img-arr-"+picture_index+"-"+element_name).fadeIn();
		}
		else if (type == "slide") {
			$("#img-arr-"+prev_index+"-"+element_name).animate({opacity:0, left:"-=100"}, 100, function() {
				$("#img-arr-"+prev_index+"-"+element_name).remove();
				$("#"+element_name).html("<div style='width:100%;height:100%;position:relative;left:100px;' id='img-arr-"+picture_index+"-"+element_name+"'><img src='"+image_array[picture_index]+"' width='100%' height='100%' /></div>");
				$("#img-arr-"+picture_index+"-"+element_name).css({"opacity":"0"});
				$("#img-arr-"+picture_index+"-"+element_name).animate({opacity:1, left:"-=100"}, 100, function() {});
			});
		} else {
			$("#"+element_name).html("<span style='color:red;'>Some of the parameters for jSlideShow is/are incorrect.</span>");
		}
	}, delay);
	
}