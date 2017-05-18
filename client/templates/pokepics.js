function pokepics() {

	var str = "";
	for (i=1; i<153;) {
		str += "<img width='30px' src='http://pokeapi.co/media/img/"+i+".png'/><img width='30px' src='http://pokeapi.co/media/img/"+(i+1)+".png'/><br>";
		i=i+2;
	};

	
	
	str = "<span id='popup_span' width='100px' height='400px'> Poke Pics <br>"+str+"</span>";

	return str;
};
