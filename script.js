const menuBtn = document.querySelector("#menuBtn");
const menuNav = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("open");
	menuNav.classList.toggle("open");
});

const videoBtns = document.querySelectorAll(".videoNavBtn");
const videoSect = document.querySelector("#videos");
const resourcesBtns = document.querySelectorAll(".resourcesNavBtn");
const resourcesSect = document.querySelector("#resources");

const mainText = document.getElementById("featureMainText");
const subText = document.getElementById("featureSubText");

console.log(typeof videoBtns);
console.log(resourcesBtns);

videoBtns.forEach((element) => {
	element.addEventListener("click", () => {
		videoSect.classList.remove("hidden");
		resourcesSect.classList.add("hidden");
		mainText.innerHTML = "Be Smart. Be Safe.";
		subText.innerHTML =
			"Watch free videos about safe administration, proper disposal, wound treatment, and more:";
	});
});

resourcesBtns.forEach((element) => {
	element.addEventListener("click", () => {
		videoSect.classList.add("hidden");
		resourcesSect.classList.remove("hidden");
		mainText.innerHTML =
			'Know the Facts.<span id="divider"></span>Protect Yourself.';
		subText.innerHTML =
			"Use the links below to find additional information and resources:";
	});
});
