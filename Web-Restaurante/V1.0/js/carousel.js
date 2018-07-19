
var carousel = document.getElementById("carousel");

if (carousel != undefined && carousel != null) {
	var timer = parseInt(carousel.getAttribute("ms-for-transition"));
	var i = 0;
	var max = carousel.childElementCount;
	var cols = parseInt(carousel.getAttribute("carousel-cols"));

	if (parseInt(cols) > 6) { cols = 6; }

	if (max > 0) {
		var obj_child =	undefined;
		var initialize = false;
		var left_calc = 0;
		var width_calc = (100/cols);

		for (let index = 0; index < cols; index++) {
			try {
				obj_child = carousel.children[i + index];
				left_calc = (index*(100/cols));
				var styleAtr = "left: " + left_calc + "%; width: " + width_calc + "%; transition-delay: " + ((index + 1.5) * ((100/cols) * 0.01)) + "s";
				obj_child.setAttribute("style", styleAtr );
				obj_child.classList.add("active");
			}
			catch {
				initialize = true;
				break;
			}
		}

		setInterval(function(){
			initialize = false;
			for (let index = 0; index < cols; index++) {
				try {
					obj_child = carousel.children[i + index];
					left_calc = (index*(100/cols));
					var styleAtr = "left: " + left_calc + "%; width: " + width_calc + "%; transition-delay: " + ((index + 0.01) * ((100/cols) * 0.01)) + "s";
					obj_child.setAttribute("style", styleAtr );
					obj_child.classList.remove("active");
				}
				catch {
					initialize = true;
					break;
				}
			}

			if (i < (max-parseInt(cols)) && !initialize) {
				i = i+parseInt(cols);
			}
			else {
				i = 0; 
			}

			for (let index = 0; index < cols; index++) {
				try {
					obj_child = carousel.children[i + index];
					left_calc = (index*(100/cols));
					var styleAtr = "left: " + left_calc + "%; width: " + width_calc + "%; transition-delay: " + ((index + 1.5) * ((100/cols) * 0.01)) + "s";
					obj_child.setAttribute("style", styleAtr );
					obj_child.classList.add("active");
				}
				catch {
					initialize = true;
					break;
				}
			}
		}, timer);
	}
}