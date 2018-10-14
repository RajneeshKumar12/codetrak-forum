

function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo");
}
function react() {
    alert("Hello! I am an alert box!");
}
	

	var count=false;
var likeclicks1=8;
var dislikeclicks1=6;
var discount=false;
	function liked1(){
		
		
		document.getElementById('like1').classList.toggle('text-success');
		if (count== false){
		
        likeclicks1 += 1;
        
        count=true;
        }
        else
        {
        	likeclicks1 -= 1;
        	count=false;
        }
        document.getElementById("likeclicks1").innerHTML = likeclicks1;

	}
	function disliked1(){
		document.getElementById('dislike1').classList.toggle('text-danger');
		if (discount== false){
	
        dislikeclicks1 += 1;

        
        discount=true;
        }
        else
        {
        	dislikeclicks1 -= 1;
        	discount=false;
        }
        document.getElementById("dislikeclicks1").innerHTML = dislikeclicks1;
	}
	 
	


	var count=false;
var likeclicks2=8;
var dislikeclicks2=6;
var discount=false;
	function liked2(){
		
		
		document.getElementById('like2').classList.toggle('text-success');
		if (count== false){
		
        likeclicks2 += 1;
        
        count=true;
        }
        else
        {
        	likeclicks2 -= 1;
        	count=false;
        }
        document.getElementById("likeclicks2").innerHTML = likeclicks2;

	}
	function disliked2(){
		document.getElementById('dislike2').classList.toggle('text-danger');
		if (discount== false){
		
        dislikeclicks2 += 1;

        
        discount=true;
        }
        else
        {
        	dislikeclicks2 -= 1;
        	discount=false;
        }
        document.getElementById("dislikeclicks2").innerHTML = dislikeclicks2;
	}
	 
	
	var count=false;
var likeclicks3=8;
var dislikeclicks3=6;
var discount=false;
	function liked3(){
		
		
		document.getElementById('like3').classList.toggle('text-success');
		if (count== false){
		
        likeclicks3 += 1;
        
        count=true;
        }
        else
        {
        	likeclicks3 -= 1;
        	count=false;
        }
        document.getElementById("likeclicks3").innerHTML = likeclicks3;

	}
	function disliked3(){
		document.getElementById('dislike3').classList.toggle('text-danger');
		if (discount== false){
		
        dislikeclicks3 += 1;

        
        discount=true;
        }
        else
        {
        	dislikeclicks3 -= 1;
        	discount=false;
        }
        document.getElementById("dislikeclicks3").innerHTML = dislikeclicks3;
	}
	 
	
	
	

var count=false;
var likeclicks=8;
var dislikeclicks=6;
var discount=false;
	function liked(){
		
		
		document.getElementById('like').classList.toggle('text-success');
		if (count== false){
		
        likeclicks += 1;
        
        count=true;
        }
        else
        {
        	likeclicks -= 1;
        	count=false;
        }
        document.getElementById("likeclicks").innerHTML = likeclicks;

	}
	function disliked(){
		document.getElementById('dislike').classList.toggle('text-danger');
		if (discount== false){
		
        dislikeclicks += 1;

        
        discount=true;
        }
        else
        {
        	dislikeclicks -= 1;
        	discount=false;
        }
        document.getElementById("dislikeclicks").innerHTML = dislikeclicks;
	}


	
	function validateForm() {
    var x = document.getElementById("type").value;
    if (x == "") {
        alert("Title must be filled out");
        return false;

    }
}
function validateForm1() {
    var x = document.getElementById("tab").value;
    if (x == "") {
        alert("Description must must be filled out");
        return false;

    }
}
function validateForm2() {
    var x = document.getElementById("don").value;
    if (x == "") {
        alert("Tags must be added");
        return false;

    }
}