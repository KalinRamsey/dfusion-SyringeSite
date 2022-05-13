const menuBtn = document.querySelector("#menuBtn");
const menuNav = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("open");
	menuNav.classList.toggle("open");
});

const videoBtn = document.querySelector(".videoNavBtn");
const videoSect = document.querySelector("#videos");
const resourcesBtn = document.querySelector(".resourcesNavBtn");
const resourcesSect = document.querySelector("#resources");

const mainText = document.getElementById("featureMainText");
const subText = document.getElementById("featureSubText");

videoBtn.addEventListener("click", () => {
	videoSect.classList.remove("hidden");
	resourcesSect.classList.add("hidden");
	mainText.innerHTML = "Be Smart. Be Safe.";
	subText.innerHTML =
		"Watch free videos about safe administration, proper disposal, wound treatment, and more:";
});

resourcesBtn.addEventListener("click", () => {
	videoSect.classList.add("hidden");
	resourcesSect.classList.remove("hidden");
	mainText.innerHTML =
		'Know the Facts.<span id="divider"></span>Protect Yourself.';
	subText.innerHTML =
		"Use the links below to find additional information and resources:";
});
