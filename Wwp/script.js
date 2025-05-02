function openProfileIcon(){
 	var ProfileSet = document.getElementById('ProfileSettings');
 	if(ProfileSet.style.display === "none") {
 		ProfileSet.style.display = "block";
 	}else{
 		ProfileSet.style.display = "none";
 	}
 }
 //Another script
 var inputcontainer =document.getElementById('inputContainer');

 function openInput() {
 	inputcontainer.style.display= "flex";
 }
function closeDash(){
	inputcontainer.style.display= "none";
}



//script 2

var adontainer =document.getElementById('adContainer');

 function openAddress() {
 	adContainer.style.display= "flex";
 }
function closeAddress(){
	adContainer.style.display= "none";
}