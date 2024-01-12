// 1.
let fructs = document.querySelectorAll("li");
for (let i = 0; i < fructs.length; i++) {
	console.log(`Количества фруктов: ${fructs.length}`);
}

// 2.
const heightOutput = document.querySelector(".height");
const widthOutput = document.querySelector(".width");

function windowSize() {
	heightOutput.textContent = window.innerHeight;
	widthOutput.textContent = window.innerWidth;
}
window.onresize = windowSize;

// 3.
const boldTxt = document.querySelectorAll("b");
for (let i = 0; i < boldTxt.length; i++) {
	boldTxt[i].addEventListener("mouseenter", handleClick);
}
function handleClick(event) {
	const addClass = event.target;
	addClass.classList.toggle("txt");
}

// 4.
const img = document.querySelectorAll("img");
for (let i = 0; i < img.length; i++) {
	img[i].addEventListener("mouseenter", event => {
		if (i % 2 === 0) {
			event.target.classList.add("red");
		} else {
			event.target.classList.add("yellow");
		}
	});
}
