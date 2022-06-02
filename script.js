/*
-----------------------------------------------
Mini-Map Expansion Methods
-----------------------------------------------
*/
const mapImg = document.querySelector("#mapImg");
const modalMapView = document.querySelector("#modalMapView");

mapImg.addEventListener("click", () => {
	modalMapView.classList.toggle("hidden");
	menuBtn.classList.toggle("open");
});

/*
-----------------------------------------------
Navber functions
-----------------------------------------------
*/

const menuBtn = document.querySelector("#menuBtn");
const menuNav = document.querySelector("#navMenu");

const toggleMenuNav = () => {
	// if mini-map is active, hide it
	if (!modalMapView.classList.contains("hidden")) {
		modalMapView.classList.add("hidden");
		menuBtn.classList.toggle("open");
	} else {
		// Toggles hamburger menu appearance
		menuBtn.classList.toggle("open");
		menuNav.classList.toggle("open");
	}
};
menuBtn.addEventListener("click", () => toggleMenuNav());

const videoBtns = document.querySelectorAll(".videoNavBtn");
const videoSect = document.querySelector("#videos");
const resourcesBtns = document.querySelectorAll(".resourcesNavBtn");
const resourcesSect = document.querySelector("#resources");

const mainText = document.getElementById("featureMainText");
const subText = document.getElementById("featureSubText");

videoBtns.forEach((element) => {
	// Adds click function to mobile & desktop version "Videos" button
	element.addEventListener("click", () => {
		videoSect.classList.remove("hidden");
		resourcesSect.classList.add("hidden");
		mainText.innerHTML = "Be Smart. Be Safe.";
		subText.innerHTML =
			"Watch free videos about safe administration, proper disposal, wound treatment, and more:";
	});
});

resourcesBtns.forEach((element) => {
	// Adds click function to mobile & desktop version "Resources" button
	element.addEventListener("click", () => {
		videoSect.classList.add("hidden");
		resourcesSect.classList.remove("hidden");
		mainText.innerHTML =
			'Know the Facts.<span id="divider"></span>Protect Yourself.';
		subText.innerHTML =
			"Use the links below to find additional information and resources:";
	});
});

/*
-----------------------------------------------
Modal Section Methods
-----------------------------------------------
*/
const modalVideoView = document.querySelector("#modalVideoView");
const modalCloseBtn = document.querySelector("#modalClose");

modalCloseBtn.addEventListener("click", () => {
	modalVideoView.classList.toggle("hidden");
});

/*
-----------------------------------------------
Video Section Assets
-----------------------------------------------
*/

const videoData = [
	{
		category: "Safe Application",
		videos: [
			{
				title: "Safe Application Video #1",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description: "Test short description",
			},
			{
				title: "Safe Application Video #2",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{
				title: "Safe Application Video with Long Title #3",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
		],
	},
	{
		category: "Proper Disposal",
		videos: [
			{
				title: "Proper Disposal Video #1",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{
				title: "Proper Disposal Video #2",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{
				title: "Proper Disposal Video #3",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
		],
	},
	{
		category: "Wound Care",
		videos: [
			{
				title: "Wound Care Video #1",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{
				title: "Wound Care Video #2",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{
				title: "Wound Care Video #3",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
		],
	},
	{
		category: "Miscellaneous",
		videos: [
			{
				title: "Miscellaneous Video #1",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{
				title: "Miscellaneous Video #2",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{
				title: "Miscellaneous Video #3",
				src: "#",
				alt: "Alt text",
				link: "",
				time: "00:00",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
		],
	},
];

const populateVideoModal = (title, time, link, description) => {
	let modalTitle = document.querySelector("#modalTitle");
	let modalTime = document.querySelector("#modalTime");
	let modalVideo = document.querySelector("#modalVideoSrc");
	let modalDesc = document.querySelector("#modalDesc");

	modalTitle.innerHTML = title;
	modalTime.innerHTML = time;
	modalVideo.src = link;
	modalDesc.innerHTML = description;

	modalVideoView.classList.remove("hidden");
};

const buildThumbnail = (video) => {
	const listItem = document.createElement("li");
	const div = document.createElement("div");
	const header = document.createElement("h4");
	const img = document.createElement("img");

	if (video.title.length > 40) {
		header.className = "videoTitleFull";
	} else {
		header.className = "videoTitle";
	}
	listItem.className = "videoItem";
	div.className = "videoThumbnail";
	header.innerHTML = video.title;
	img.src = video.src;
	img.alt = video.alt;

	div.append(header);
	div.append(img);
	listItem.append(div);

	listItem.addEventListener("click", () => {
		populateVideoModal(video.title, video.time, video.link, video.description);
	});

	return listItem;
};

const populateVideoList = (videoArr) => {
	const videoList = document.querySelector(".videoSet");

	videoList.innerHTML = "";

	for (let v of videoArr) {
		videoList.append(buildThumbnail(v));
	}
};

let currentVidSection = 0;
const vidSectText = document.getElementById("vidCategory");
const nextVidSectBtn = document.querySelector("#nextArrow");
const prevVidSectBtn = document.querySelector("#prevArrow");

const updateVideoSection = (categoryIndex) => {
	const currentVideosTitle = videoData[categoryIndex].category;
	const currentVideosList = videoData[categoryIndex].videos;
	vidSectText.innerHTML = currentVideosTitle;

	populateVideoList(currentVideosList);
};

// Populate initial video list
updateVideoSection(currentVidSection);

nextVidSectBtn.addEventListener("click", () => {
	// Update video list to display next category
	if (currentVidSection === videoData.length - 1) {
		currentVidSection = 0;
	} else {
		currentVidSection++;
	}
	updateVideoSection(currentVidSection);
});
prevVidSectBtn.addEventListener("click", () => {
	// Update video list to display prev category
	if (currentVidSection === 0) {
		currentVidSection = videoData.length - 1;
	} else {
		currentVidSection--;
	}
	updateVideoSection(currentVidSection);
});
