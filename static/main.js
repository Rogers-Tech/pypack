var upload_page = document.getElementById('upload');
var call_upload = document.getElementById('call_upload');
var back_upload = document.getElementById('non_upload');
var par = document.getElementById('par');

var key = document.getElementById('key');
var downloader = document.getElementsByClassName('downloader');




var rate = document.getElementById('rate');
var zipper = document.getElementById('zip');
var pruf = document.getElementById('pruf');
var prof = document.getElementById('prof');
var rated_me = document.getElementById('ratedme');
var notice = document.getElementById('not');
var rate_form = document.getElementById('rate-form');
var texter = document.getElementById('texter');


var light = 'rgba(70,70,70,1)';

var st1 = document.getElementById('star1');
var st2 = document.getElementById('star2');
var st3 = document.getElementById('star3');
var st4 = document.getElementById('star4');
var st5 = document.getElementById('star5');

var hm = document.getElementById('homee');
var up = document.getElementById('uplo');
var lg = document.getElementById('logg');

var tr = document.getElementById('tru');
var conf = document.getElementById('config');
var cd = document.getElementById('code');



var pg = document.getElementById('page');
var bu = document.getElementById('backup');
var page = document.getElementsByClassName('page');

var rogers = document.getElementById('rogers');

var per = document.getElementsByClassName('per');
var pe = document.getElementsByClassName('per1');

var ba = document.getElementsByClassName('back');

function call_page(){
	pg.style.display = 'block';
	bu.style.display = 'none';
}

function back(){
	for (let i = 0; i < page.length; i++){
		page[i].style.display = 'none';
	}
	bu.style.display = 'block';
}

function cat_(){
	for (let i = 0; i < page.length; i++){
		page[i].style.display = 'none';
	}
	bu.style.display = 'none';
	rogers.style.display = 'block';
}



for(let i = 0; i < per.length; i++){
	console.log('yes man');
	per[i].addEventListener('click', call_page);
}

for(let i = 0; i < ba.length; i++){
	console.log('yes man');
	ba[i].addEventListener('click', back);
}



var man = document.getElementById('manifest');
var log = document.getElementById('logs');
var ra = document.getElementById('rate');
var thank = document.getElementById('thank');
var tut = document.getElementById('tutorial');
var choose = document.getElementById('choose');


function upload_(){
	upload_page.style.display = block;
}

function star1(){
	st1.style.color = 'red';
	rate.value = '1';
	rated_me.value = '1'
}

function star2(){
	st2.style.color = 'red';
	rate.value = '2';
	rated_me.value = '2'
}

function star3(){
	st3.style.color = 'red';
	rate.value = '3';
	rated_me.value = '3'
}

function star4(){
	st4.style.color = 'red';
	rate.value = '4';
	rated_me.value = '4'
}

function star5(){
	st5.style.color = 'red';
	rate.value = '5';
	rated_me.value = '5'
}

st1.addEventListener('click', ()=>{
	st2.style.color = light;
	st3.style.color = light;
	st4.style.color = light;
	st5.style.color = light;
	star1();
	console.log(rated_me.value);
});

st2.addEventListener('click', ()=>{
	star1();
	st3.style.color = light;
	st4.style.color = light;
	st5.style.color = light;
	star2();
	console.log(rated_me.value);
});

st3.addEventListener('click', ()=>{
	star1();
	st4.style.color = light;
	st5.style.color = light;
	star2();
	star3();
	console.log('okay it has refused')
});

st4.addEventListener('click', ()=>{
	star1();
	star2();
	star3();
	st5.style.color = light;
	star4();
	console.log('okay it has refused')
});

st5.addEventListener('click', ()=>{
	star1();
	star2();
	star3();
	star4();
	star5();

});

function rated(){
	console.log(rate.value);
	if(rate.value < 3){
		alert('Thanks for rating, you have given ' + rate.value + ' stars.');
	}else if(rate.value > '2'){
		alert('Thanks for loving me, you have given me ' + rate.value + ' stars.');
	}else{
		alert('Please rate us by pressing the stars and leave a comment too.')
	}
}

console.log(zipper.value.length);

function aler(){
	if(zipper.value.length > 1){
		prof.style.display = 'none';
		pruf.style.display = 'block';
		alert('Please wait for about 1-2 days. The task will be done and come back to the website.');
	}else{
		console.log(zipper.value.length, ' hi slnegth');
		pruf.style.display = 'none';
		prof.style.display = 'block';
	}
	upload_page.style.display = 'none';
	
}


// call_upload.addEventListener('click', ()=>{
// 	upload_page.style.display = 'block';
// });

// back_upload.addEventListener('click', ()=>{
// 	upload_page.style.display = 'none';
// });


function profiler(){
	for(let i = 0; i < page.length; i++){
		page[i].style.display = 'none';
	}
	log.style.display = 'flex';
}




function logs(){
		man.style.display = 'none';
		ra.style.display = 'none';
		thank.style.display = 'none';
		tut.style.display = 'none';
		choose.style.display = 'none';
		notice.style.display = 'none';
		par.style.display = 'none';
		log.style.display = 'block';
		log.style.display = 'flex';

		for(let i = 0; i < page.length; i++){
			page[i].style.display = 'none';
		}

		hm.classList.remove('tab-active');
		up.classList.remove('tab-active');
		lg.classList.add('tab-active');
		log.style.display = 'flex';
}

function home(){
		log.style.display = 'none';
		par.style.display = 'none';
		man.style.display = 'flex';
		ra.style.display = 'flex';
		thank.style.display = 'flex';
		notice.style.display = 'flex';
		tut.style.display = 'flex';
		choose.style.display = 'flex';
		hm.classList.add('tab-active');
		up.classList.remove('tab-active');
		lg.classList.remove('tab-active');
}

function parar(){
	try{
		profiler();
	}catch{

	}
		man.style.display = 'none';
		ra.style.display = 'none';
		thank.style.display = 'none';
		tut.style.display = 'none';
		choose.style.display = 'none';
		notice.style.display = 'none';
		log.style.display = 'none';
		par.style.display = 'flex';
		hm.classList.remove('tab-active');
		lg.classList.remove('tab-active');
		up.classList.add('tab-active');
}


console.log('refused');

console.log(key.innerHTML, 'not yet');
console.log('what is it now');

function changer(){
	if(key.value === 'rogers2525'){
		for (var i = 0; i < downloader.length; i++) {
			downloader[i].style.display = 'block';
		}
	}else{
		console.log('no it is not ');
	}
}

key.addEventListener('input', changer);