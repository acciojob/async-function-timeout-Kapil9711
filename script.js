//your JS code here. If required.
const submitBtn = document.querySelector("#btn");
const textInput = document.querySelector("#text");
const delayInput = document.querySelector("#delay");
const textOutput = document.querySelector("#output");

const wait = (delay)=>{
	return new Promise((resolve,reject)=> {
		setTimeout(()=> resolve(),delay);
	})	
}


const handleInput = async ()=>{
	textOutput.textContent = '';
	const text = textInput.value;
	const delay = +delayInput.value;
	await wait(delay);
	return new Promise((resolve,reject)=> resolve(text));	
}

submitBtn.addEventListener("click",()=>{
	handleInput().then(msg=> textOutput.textContent = msg);	
})





