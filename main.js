var dis1=document.querySelector(".dropdown-1").style;
function show1() {
	if (dis1.display=="block") {
		dis1.display= "none";
	}
	else{
		dis1.display= "block";
	}
}

var dis2=document.querySelector(".dropdown-2").style;
function show2() {
	if (dis2.display=="block") {
		dis2.display= "none";
	}
	else{
		dis2.display= "block";
	}
}

var dis3=document.querySelector(".dropdown-3").style;
function show3() {
	if (dis3.display=="block") {
		dis3.display= "none";
	}
	else{
		dis3.display= "block";
	}
}

var dis4=document.querySelector(".dropdown-4").style;
function show4() {
	if (dis4.display=="block") {
		dis4.display= "none";
	}
	else{
		dis4.display= "block";
	}
}

var dis5=document.querySelector(".dropdown-5").style;
function show5() {
	if (dis5.display=="block") {
		dis5.display= "none";
	}
	else{
		dis5.display= "block";
	}
}

function show11(){
	if(dis3.display=="block" || dis2.display=="block" || dis4.display=="block" || dis5.display=="block" ){
		dis3.display="none";
		dis2.display="none";
		dis4.display="none";
		dis5.display="none";
	}
	
}


function show21(){
	if(dis3.display=="block" || dis1.display=="block" || dis4.display=="block" || dis5.display=="block" ){
		dis3.display="none";
		dis1.display="none";
		dis4.display="none";
		dis5.display="none";
	}
}

function show31(){
	if(dis2.display=="block" || dis1.display=="block" || dis4.display=="block" || dis5.display=="block" ){
		dis2.display="none";
		dis1.display="none";
		dis4.display="none";
		dis5.display="none";
	}
}

function show41(){
	if(dis3.display=="block" || dis1.display=="block" || dis2.display=="block" || dis5.display=="block" ){
		dis3.display="none";
		dis1.display="none";
		dis2.display="none";
		dis5.display="none";
	}
}

function show51(){
	if(dis3.display=="block" || dis1.display=="block" || dis4.display=="block" || dis2.display=="block" ){
		dis3.display="none";
		dis1.display="none";
		dis4.display="none";
		dis2.display="none";
	}
}


var pg1 = document.querySelector(".co_header").style;
function toggle(){
	if (pg1.display == "block") {
		pg1.display="none";
	}
	else{
		pg1.display ="block";
	}
	
}

$(".toggle-btn").click(function(){
	$(this).toggleClass('rotate');
})










