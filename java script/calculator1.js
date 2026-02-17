
let res=document.querySelector('#box');
function show(n){
	if(res.value==''){
		res.value=0;
	}else{
		res.value+=n
	}
}
function clear() {
	res.value=" ";
	res.value=0;
}
function calc(){
	let exp=res.value;
	let r=eval(exp);
	res.value=r;
} 
function clr(){
	if (res.value==" ") {
		res.value=0;
	} else {
		res.value=res.value.slice(0,-1);
	}
}