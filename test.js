function bookStoreFactory(name, author, langauge, genres){
	return {
		name: name,
		author: author,
		langauge: langauge,
		genres: genres,
	};
}

var book1 = bookStoreFactory("The Weight of Water", "Sarah Crossan", "English", 
"Novel")
var book2 = bookStoreFactory("Dead Girls Society", "Michel Krys", "English", 
"Mystery")
var book3 = bookStoreFactory("Tantoura", "Radwa Asour", "arabic", 
"Novel")
var book4 = bookStoreFactory("Dance Dance", "Haruki Murakami", "English", 
"Novel")

function displaybook(book){
	return book['name']+   +"by "+book['author']  +book['langauge']  +book['genres'];
}

var arrOfBooks = [book1 ,book2 , book3, book4]

$("#link").change(function(){

	var result=[];
	for (var i=0; i < arrOfBooks.length; i++){
		if (isMatch ($('#link').val() , arrOfBooks[i]) === true ){
			result.push(arrOfBooks[i]);
		}
	}
	//alert(result[0].name)
	window.localStorage.book=result;
	window.location.path('book.html')
})
           
// function displayBooks(books){
// 	var str="";
//     for (var i = 0; i < arrOfBooks.length; i++) {
//     	str+=i+1+"." + books[i]['name']+" by " + books[i]['author'] +" " + books[i]['langauge'] +" " + books[i]['genres']+"\n";
//     }
//     return str;
// }

function isMatch(query, book){
    for(var key in book){
	    if(book[key].toString().toLowerCase().indexOf(query) > -1){    
	    	return true;
	    }
	    return false;
	}
}
var links = document.getElementById('link');
function searchBooks(query, arrOfBooks){
	var result=[];
	for (var i=0; i < arrOfBooks.length; i++){
		if (isMatch (query , arrOfBooks[i]) === true ){
			result.push(book(arrOfBooks[i]));
		}
	}
	return result;
}

	var image1 = new Image();
image1.src = "Dance.jpg";


var image2 = new Image();
image2.src = "dead-girls-society.jpg";

var image3 = new Image();
image3.src = "The weight of water.jpg";


var image4 = new Image();
image4.src = "Tantoura.jpg";


var images = [image1,image2,image3,image4];

   var step = 0;//step is now 0 because 1st index of an array is 0

    function slideit() {
      document.getElementById('slide1').src = images[step].src;
       $('#slide1').click(function() {
       // $(this).parent().find('.image_desc').toggle();
       console.log("clicked")
       var dii=$('<div>'+images[step].name +'<div/>', {
    id: 'foo'
});
       dii.appendTo('.boxInner')
       

		});

       $('#slide2').click(function() {
       // $(this).parent().find('.image_desc').toggle();
      

		});
//       $(".slide1").click(function( books){
// 	var str="";
//     for (var i = 0; i < arrOfBooks.length; i++) {
//     	str+=i+1+"." + books[i]['name']+" by " + books[i]['author'] +" " + books[i]['langauge'] +" " + books[i]['genres']+"\n";
//     }
//     return str;
// })
// }
document.getElementById('slide2').src = images[step+1].src;
      if (step < (images.length-1)/2)
        step=step+2;
      else
        step = 0;
      setTimeout("slideit()", 8000);
    }
      	
      
    slideit();

// 	var pic = document.getElementById('img1');
// var counter = 0;
// var array = ["b.jpg","12.jpg","1.jpg"];
// function imgReplace() {
//   counter ++;
//     if (counter > array.length -1) {
//     counter = 0;
//   }
//   pic.src = array[counter];
// } 
//function changeImage() {
 //   document.getElementByTag('img').src="http://rbk.org/prep/images/logo.png?crc=3962195778";
//}