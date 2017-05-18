function pokepics() {

	var str = "";
	for (i=1; i<153;) {
		str += "<img width='30px' src='http://pokeapi.co/media/img/"+i+".png' onclick='pic_submit(this)'/>";
		str += "<img width='30px' src='http://pokeapi.co/media/img/"+(i+1)+".png' onclick='pic_submit(this)/><br>";
	
		i=i+2;
	};

	
	
	str = "<span id='popup_span' width='100px' height='400px'> Poke Pics <br>"+str+"</span>";
	console.log(str);
	placer=getElementByID("popup");
	placer.innerHTML = str;
};
