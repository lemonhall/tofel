var word_data = chrome.extension.getURL("data_u.csv");

var toDisplay =[];

$("body").before("<p id='toDisplayWords' style='margin-left:20px'></p>");
//console.log(word_data);

var word_to_display = 0;

setTimeout(function(){
	console.log("I am in setTimeout...............");

	$( "#toDisplayWords" ).html(toDisplay[word_to_display]);

	word_to_display = word_to_display + 1;
	if(word_to_display === 10){
		word_to_display = 0;
	}

	$( "#toDisplayWords" ).fadeToggle(40000, function() {
   		 // Animation complete.
  	});
},1500);


setInterval(function(){
	console.log("I am in interval...............");

	$( "#toDisplayWords" ).html(toDisplay[word_to_display]);

	word_to_display = word_to_display + 1;
	if(word_to_display === 10){
		word_to_display = 0;
	}

	$( "#toDisplayWords" ).fadeToggle(40000, function() {
   		 // Animation complete.
  	});
},45000);


function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

var xhr = new XMLHttpRequest();
xhr.open('GET', word_data, true);
xhr.onreadystatechange = function()
{
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
    {
        //... The content has been read in xhr.responseText
        var file=xhr.responseText;
        var lines = file.split("\n");
        //console.log(lines[0]);
        	toDisplay = getRandomArrayElements(lines, 10);

        console.log(toDisplay);
    }
};
xhr.send();