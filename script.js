/*
///////////////////////////////////////////////
            _____ _____ ______ _______ _____ 
     /\    / ____/ ____|  ____|__   __/ ____|
    /  \  | (___| (___ | |__     | | | (___  
   / /\ \  \___ \\___ \|  __|    | |  \___ \ 
  / ____ \ ____) |___) | |____   | |  ____) |
 /_/    \_\_____/_____/|______|  |_| |_____/ 
///////////////////////////////////////////////
///////////////////////////////////////////////
- Alter the values here to adjust the information
	displayed. When adding new data, refer to the
	templates provided to ensure consistency.

-----------------------------------------------
VIDEO DATA
	- Template: {
		category: Label used to classify a group of videos
		videos: [ A list of videos assigned to a specific category
			{
				title: Title of the video,
				src: Link to the thumbnail image for the video,
				alt: Brief description of the video - this is not likely to be visible,
						but is important to include for screen readers and improved accessibility,
				link: Link to the video file,
				time: How long the video will last, written in format "HH:MM:SS",
				description: Full-length description of the video, will be visible in the modal view.
			}
		]
	}
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

/*
-----------------------------------------------
RESOURCE DATA
	- Template: {
		category: Label used to classify a group of resources
		resources: A list of resources assigned to a specific category [
			{
				text: visual text of the resource link,
				src: Link to the given resource,
			}
		]
	}
-----------------------------------------------
*/

const resourceData = [
	{
		category: "Category A",
		resources: [
			{
				text: "Resource A1",
				src: "#",
			},
			{
				text: "Resource A2",
				src: "#",
			},
			{
				text: "Resource A3",
				src: "#",
			},
		],
	},
	{
		category: "Category B",
		resources: [
			{
				text: "Resource B1",
				src: "#",
			},
			{
				text: "Resource B2",
				src: "#",
			},
		],
	},
	{
		category: "Category C",
		resources: [
			{
				text: "Resource C1",
				src: "#",
			},
			{
				text: "Resource C2",
				src: "#",
			},
			{
				text: "Resource C3",
				src: "#",
			},
			{
				text: "Resource C4",
				src: "#",
			},
		],
	},
];

/*
///////////////////////////////////////////////////////////////////////////////////
__          __     _____  _   _ _____ _   _  _____ 
\ \        / /\   |  __ \| \ | |_   _| \ | |/ ____|
 \ \  /\  / /  \  | |__) |  \| | | | |  \| | |  __ 
	\ \/  \/ / /\ \ |  _  /| . ` | | | | . ` | | |_ |
	 \  /\  / ____ \| | \ \| |\  |_| |_| |\  | |__| |
		\/  \/_/    \_\_|  \_\_| \_|_____|_| \_|\_____|
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
EDITING BELOW THIS LINE MAY AFFECT CORE FUNCTIONALITY							 
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
*/

/*
-----------------------------------------------
Navbar functions - hamburger menu animation + updating view
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

const mainText = document.getElementById("featureMainText");
const subText = document.getElementById("featureSubText");

const addVideoBtnFunctions = () => {
	const videoBtns = document.querySelectorAll(".videoNavBtn");
	const videoSect = document.querySelector("#videos");

	const resourcesSect = document.querySelector("#resources");

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
};

const addResourcesBtnFunctions = () => {
	const resourcesBtns = document.querySelectorAll(".resourcesNavBtn");
	const resourcesSect = document.querySelector("#resources");

	const videoSect = document.querySelector("#videos");

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
};

addVideoBtnFunctions();
addResourcesBtnFunctions();

/*
-----------------------------------------------
Mini-Map Expansion to map modal
-----------------------------------------------
*/
const mapImg = document.querySelector("#mapImg");
const modalMapView = document.querySelector("#modalMapView");

const updateNavMenu = () => {
	const navMenuExpanded = document.querySelector("#navMenuExpanded");
	navMenuExpanded.innerHTML = "";
	modalMapView.classList.toggle("hidden");

	if (modalMapView.classList.contains("hidden")) {
		// toggle hamburger menu
		menuBtn.classList.remove("open");
		// update expanded nav menu
		const resourceBtn = document.createElement("li");
		resourceBtn.classList.add("resourcesNavBtn");
		resourceBtn.classList.add("wide");

		const videoBtn = document.createElement("li");
		videoBtn.classList.add("videoNavBtn");
		videoBtn.classList.add("wide");

		resourceBtn.innerHTML = '<a href="#resources">RESOURCES</a>';
		videoBtn.innerHTML = '<a href="#videos">VIDEOS</a>';

		navMenuExpanded.append(videoBtn);
		navMenuExpanded.append(resourceBtn);
		addVideoBtnFunctions();
		addResourcesBtnFunctions();
	} else {
		// toggle hamburger menu
		menuBtn.classList.add("open");
		// update expanded nav menu
		const closeBtn = document.createElement("li");
		closeBtn.classList.add("resourcesNavBtn");
		closeBtn.classList.add("wide");

		closeBtn.innerHTML = '<a href="#">CLOSE</a>';
		closeBtn.addEventListener("click", () => {
			updateNavMenu();
		});
		navMenuExpanded.append(closeBtn);
	}
};

mapImg.addEventListener("click", () => {
	updateNavMenu();
});

/*
-----------------------------------------------
Video Modal - determines displayed info and video based on selected video
-----------------------------------------------
*/
const modalVideoView = document.querySelector("#modalVideoView");
const modalCloseBtn = document.querySelector("#modalClose");

modalCloseBtn.addEventListener("click", () => {
	modalVideoView.classList.toggle("hidden");
});

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

/*
-----------------------------------------------
Video List - Displays video thumbnails grouped by category based on how defined in videoData
-----------------------------------------------
*/

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

/*
-----------------------------------------------
Resources List - Displays resource links grouped by category based on how defined in resourceData
-----------------------------------------------
*/
const resourcesList = document.getElementById("resourcesList");

for (let r of resourceData) {
	const resourceCategory = document.createElement("li");
	const categoryHeader = document.createElement("h3");
	const resourcesSublist = document.createElement("ul");

	categoryHeader.innerHTML = r.category;
	resourcesSublist.className = "resourcesSublist";
	// build the sublist
	for (let i of r.resources) {
		const resourceItem = document.createElement("li");

		// resourceItem.innerHTML = `<a>${i.text}</a>`;
		resourceItem.innerHTML = `<a href="${i.src}">${i.text}</a>`;

		resourcesSublist.append(resourceItem);
	}
	resourceCategory.append(categoryHeader);
	resourceCategory.append(resourcesSublist);
	resourcesList.append(resourceCategory);
}
