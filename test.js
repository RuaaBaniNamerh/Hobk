function bookStoreFactory(name, author, langauge, genres){
	return {
		name: name,
		author: author,
		langauge: langauge,
		genres: genres
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

function displayBooks(books){
	var str="";
    for (var i = 0; i < arrOfBooks.length; i++) {
    	str+=i+1+"." + books[i]['name']+" by " + books[i]['author'] +" " + books[i]['langauge'] +" " + books[i]['genres']+"\n";
    }
    return str;
}

function isMatch(query, book){
    for(var key in book){
	    if(book[key].toString().toLowerCase().indexOf(query) > -1){    
	    }
	    return true;
	}
}

function searchBooks(query, arrOfBooks){
	var result=[];
	for (var i=0; i < arrOfBooks.length; i++){
		if (isMatch (query , arrOfBooks[i]) === true ){
			result.push(book(arrOfBooks[i]));
		}
	}
	return result;
}
	