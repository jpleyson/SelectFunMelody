/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color.

// 2. Using jQuery, add the fun class to the elements with the class .box
$(".box").addClass("fun");

// 3. When #box2 is clicked on
	// a) Remove the crazy class from all the items with a class of .box
	// b) Add the crazy class to the h1
	// c) Slide toggle #box3
$("#box2").on("click",function(){
	$(".box").removeClass("crazy");
	$("h1").addClass("crazy");
	$("#box3").slideToggle("slow");
});


// 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
	$(".box").on("click", function(){
		$("h1").text("jQuery Ninja");
	});


// 5. Have the following code execute when the #box1 is clicked. Write a JavaScript comment with a description of what happened.

//when box1 is clicked, find the tag with the class "moto" and add a src attribute with the moto.jpg image

// 6. when box one is clicked you are changing the attribute of src to moto.jpg
$("#box1").on("click", function(){
	$(".moto").attr("src","../images/moto.jpg");
});


/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #dropdownMenu
$("#dropdownMenu").hide();

// 7. When the element with the id #dropdownButton is clicked,
	// a) slide toggle #dropdownMenu
$("#dropdownButton").on("click",function(){
	$("#dropdownMenu").slideToggle("slow");
});	


/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
$("#answer2").hide();


// 9. Show the item with the id #answer1
$("#answer1").show();

// 10. When #question2 is clicked:
	// a) Slide down #answer2
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2

	$("#question2").on("click",function(){
		$("#answer2").slideToggle("slow");
		$("#answer1").slideToggle("slow");
		$("li").removeClass("active");
		$("#question2").addClass("active");

	});	


// 11. When #question1 is clicked:
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1

	$("#question1").on("click",function(){
		$("#answer1").slideToggle("slow");
		$("#answer2").slideToggle("slow");
		$("li").removeClass("active");
		$("#question1").addClass("active");

	});	

	//Just finished the select fun assignment. I didn't realize how powerful jQuery is and how clean it makes the code look. Also, learning about the .addClass() method just gave me a whole new perspective on how to utilize classes. I orgininally thought they were just a way to classify html tags but its more than that. I am really enjoying these exercises thats giving me new insight and practice.