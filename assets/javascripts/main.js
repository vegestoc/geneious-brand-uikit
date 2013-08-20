$(document).ready(function(){

	var testimonials = $("#testimonials");
	testimonials.load = function() {
		this.logos = this.find("figure");
		var logos =  this.logos;

		testimonials.select = function(el){
			var li = $(el).closest("li").clone();
			testimonials.find(".current>*").on('webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd', function() { $(this).remove(); li.addClass("active"); }).addClass("hiding");
			testimonials.find(".current").prepend(li);
			slideTo(testimonials);
			}

		if(Modernizr.canvas){

			logos.each(function() {
				this.canvas = document.createElement('canvas');
				this.image = $(this).find('img');
				var canvas = this.canvas,
					image = this.image,
					temporaryImage = new Image(),
					context = canvas.getContext('2d'),
					imageData,
					pixelsArray,
					multiplyColor = [150, 221, 241];
				
				function multiply(topValue, bottomValue){
					var value = topValue<254 ? topValue : (topValue+170);
					return value * bottomValue / 255;
					}

				$(temporaryImage).on("load", function(){

								canvas.width = this.width;
								canvas.height = this.height;
								context.drawImage(this, 0, 0);
								imageData = context.getImageData(0, 0, canvas.width, canvas.height);
								pixelsArray = imageData.data;

								// Loop over each pixel.
								for (var i = 0, n = pixelsArray.length; i < n; i += 4) {
									//Greyscale
									var brightness = (0.34 * pixelsArray[i] + 0.5 * pixelsArray[i + 1] + 0.16 * pixelsArray[i + 2]);
									//Then multiply
								    pixelsArray[i  ] = multiply(multiplyColor[0], brightness); //pixelsArray[i  ]); // red
								    pixelsArray[i+1] = multiply(multiplyColor[1], brightness); //pixelsArray[i+1]); // green
								    pixelsArray[i+2] = multiply(multiplyColor[2], brightness); //pixelsArray[i+2]); // blue
								}
								// Draw the result on the canvas
								context.putImageData(imageData, 0, 0);

								image.after(canvas);
					});
					temporaryImage.src = $(image).attr("src");
			});

		}//end Modernizr Canvas

	$(logos).on("click", function(){ testimonials.select(this); });
		
	};
	if(testimonials){ testimonials.load(); }


	$(".menu").bind("touchend", function(e){
	    $(this).bind("touchmove", function(e){
	        $(this).addClass("moved");
	    }).bind("touchend", function(e){
	        $(this).unbind("touchmove");
	    });

	    $(".page-head").bind("touchstart", function(e){
	    	$(".menu").removeClass("open");
	    	$(this).unbind("touchstart");
	    });

	    if($(this).hasClass("moved")){
	        $(this).removeClass("moved");
	        e.preventDefault;
	        return false;
	    }else if(e.target.nodeName == "A" && $(this).hasClass("open")) {
	        //Follow Link
	    } else {
	        $(this).toggleClass("open");
	        e.preventDefault;
	        return false;
	    }
	});


	$('a').on("click",function(){
		var id = $(this).attr("href");
		$(id).toggleClass("open");
		return false;
	});

	$("a").hover(function(){
		var id = $(this).data("description");
		$("#" + id).addClass("visible");
	}, function(){
		var id = $(this).data("description");
		$("#" + id).removeClass("visible");
	});

});