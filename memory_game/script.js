var imgs = [];
var gameImgs = [];
var selectedImgs = [];
var score = 0;
var moves=0;
var pomocnicza=30;
var koniec=false;
generateImgs();
generateTable();
updateScore();

setTimeout(HideImgs, 2000);

function HideImgs() {
	var imgsToHide = document.getElementsByClassName('scored');
	if (imgsToHide.length > 0) {
		var len = imgsToHide.length;
		for (var i = 0; i < len; i++) {
			imgsToHide[0].className = "hidden";
		}
	}
}



function updateScore() {
	document.getElementById('score')
	.innerHTML = score;

}

function generateImgs() {
	imgs = [
	'https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/02/27/931/524/694940094001_6008064783001_6008057472001-vs.jpg?ve=1&tl=1',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmcs7moSOk0KKkbYdM9X3PLaqlDYUhodAZehwJStAVYyGX4Al',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7MbFM6VOEYVuHgBm53bxoeVNUrpfKipshYlTjclouBrGMXqt',
	'https://s.hdnux.com/photos/64/11/35/13670266/3/920x920.jpg',
	'https://ewscripps.brightspotcdn.com/dims4/default/37800d8/2147483647/strip/true/crop/3000x1688+0+156/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2Ffa%2F1b%2F7794d4104f0d82afd41b730ecef0%2Fgettyimages-78439682.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGA4X1UL9HVPmYA4-NA-rAIuUP99K-IeesqJ_wDS3pLZMLy7E',
	'https://thenypost.files.wordpress.com/2019/02/llama.jpg?quality=90&strip=all',
	'https://s.w-x.co/llamablood.jpg'
	];
	
	imgs = shuffle(imgs);
	
	for (var i = 0; i < 8; i++){
	gameImgs.push(imgs[i]);
	gameImgs.push(imgs[i]);
	}
	
	gameImgs = shuffle(gameImgs);
}

function generateTable() {
	var table = document
	.getElementById('game_table');
	var k = 0;
	
	for (var i = 0; i < 4; i++)
	{
		var row = table.insertRow(i);
		for (var j = 0; j < 4; j++)
		{
			var cell = row.insertCell(j);
			var img = document.createElement('img');
			img.id = i.toString() + j.toString();
			img.src = gameImgs[k];
			img.className = "scored";
			img.addEventListener('click',
			function (obj) {selectImg(obj.currentTarget)}, false);
			cell.appendChild(img);
			k++;
		}
	}
}

function selectImg(img) {
	if (img.className == "hidden") 
	{
		img.className = "selected";
		selectedImgs.push(img);
		if (selectedImgs.length == 2) 
		{
			if (areTheSame(selectedImgs[0], selectedImgs[1])) 
			{
				setScored(selectedImgs[0],
			selectedImgs[1]);
			document.getElementById('left').innerHTML = "Pozostalo " + (pomocnicza-moves) + " ruchow"
			}
			else 
			{
				selectedImgs[0].className = "hidden";
				selectedImgs[1].className = "hidden";
				selectedImgs = [];
				document.getElementById('left').innerHTML = "Pozostalo " + (pomocnicza-moves) + " ruchow"
			}
			moves++;
		}
	}
	if (moves>30)
		{
		finish();
		}
	
	
}

function setScored(img1, img2) {
	img1.className = "scored";
	img2.className = "scored";
	score++;
	updateScore();
	selectedImgs = [];
}

function areTheSame(img1, img2) {
	return img1.src == img2.src;
}

function shuffle(array) {
	return array.sort(() => Math.random() - 0.5);
}

function left(moves){
	if (moves>30)
	{koniec=true;}
	else
	{koniec=false;}
		
}
function finish(){
	if (koniec==true&&score==8)
	{alert('Wygrales!');}
	else
	{alert('Przegrales!');}
}
