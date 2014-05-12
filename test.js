var fs = require('fs');
var lazy = require("lazy");


var words = {};
var ww =[];


var n = 0;


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

function getRandomElements(arr) {
	var temps = [];
	for(var i=0;i<arr.length;i++){
		var key = arr[i];
		var tmp = {};
			tmp[key] = words[key];
			temps.push(tmp);
	}
	return temps;
}



new lazy(fs.createReadStream('data_u.csv'))
.lines
.forEach(function(line){
		var c1 = line.toString();
		var c2 =  c1.split(";");
	if(c2[0]){
          n=n+1;
	  console.log(c2[0]+"\t"+c2[1]);
	  words[c2[0]] = c2[1];
	  ww.push(c2[0]);

	}
}).on('pipe',function(){
	    console.log(n);
		console.log("END");
		console.log( getRandomElements(getRandomArrayElements(ww, 10)) );
});
