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
		category: "Community Education",
		videos: [
			{
				title: "Prevent HIV and Hepatitis",
				thumbnailSrc: "./Assets/01_PreventHIV.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/wuMAhktyJQ8",
				time: "3:02",
				description:
					"Explores ways for someone using injection drugs to lower their to risk of contracting HIV, Hepatitis B, and Hepatitis C.",
			},
			{
				title: "What's in the Kit?",
				thumbnailSrc: "./Assets/02_WhatsInTheKit.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/7OpKXdAjzkM",
				time: "4:46",
				description:
					"Describes items in the Safe Injection Kit and their uses in safe injection.",
			},
			{
				title: "Needle Knowledge",
				thumbnailSrc: "./Assets/03_NeedleKnowledge.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/4JyvDprmpvQ",
				time: "2:49",
				description:
					"Shares information about selecting the appropriate needle size and why it is important.",
			},
			{
				title: "Select the Best Injection Site",
				thumbnailSrc: "./Assets/04_BestInjectionSite.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/TFyMnDCoNE8",
				time: "3:37",
				description:
					"Reviews the best and safest injection sites on the body, and other considerations for selecting an injection site.",
			},
			{
				title: "Safer Injection Strategies",
				thumbnailSrc: "./Assets/05_SafeInjectionStrategies.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/tnoELQ3LZkE",
				time: "2:17",
				description:
					"Suggests a number of ways to prepare and be safer before injecting.",
			},
			{
				title: "Overdose Prevention",
				thumbnailSrc: "./Assets/06_OverdosePrevention.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/MVsyWtE7Ak8",
				time: "3:03",
				description:
					"Reviews common causes of overdose and suggest a list of risk reduction and prevention methods.",
			},
			{
				title: "Recognize Overdose",
				thumbnailSrc: "./Assets/07_RecognizeOverdose.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/CrwpdstNje8",
				time: "2:19",
				description:
					" Explains overdose signs, treatments, and prevention strategies.",
			},
			{
				title: "Treat Overdose",
				thumbnailSrc: "./Assets/08_TreatOverdose.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/sUhDXcHUbXM",
				time: "4:22",
				description: "Provides steps on how to respond if someone overdoses.",
			},
			{
				title: "Safe Disposal",
				thumbnailSrc: "./Assets/09_SafeDisposal.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/IGyb546TomE",
				time: "2:34",
				description:
					"Shares information about safe disposal and why it is important.",
			},
			{
				title: "Wound Care",
				thumbnailSrc: "./Assets/10_WoundCare.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/zvWnKRoSimA",
				time: "3:02",
				description:
					"Suggests ways to prevent wounds and care for existing wounds.",
			},
			{
				title: "Abscess & Vein Care",
				thumbnailSrc: "./Assets/11_Abscess&VeinCare.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/Uz60EdqrRhE",
				time: "3:49",
				description:
					"Suggests ways to treat mild abscesses and care for veins.",
			},
			{
				title: "Medical Complications",
				thumbnailSrc: "./Assets/12_MedicalComplications.jpg",
				alt: "Alt text",
				videoLink: "https://youtube.com/embed/Xe5_Kk1_lm8",
				time: "2:15",
				description:
					"Describes symptoms of dangerous medical complications and when to seek medical care.",
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
		category: "HIV and Viral Hepatitis Prevention and Treatment",
		resources: [
			{
				text: "How Can I Prevent Getting HIV From Injection Drug Use?",
				src: "https://www.cdc.gov/hiv/basics/hiv-prevention/inject-drugs.html",
			},
			{
				text: "Hepatitis C Basics for People Who Use Drugs (PWUD)",
				src: "https://harmreduction.org/issues/hepatitis-c/basics-brochure/",
			},
			{
				text: "Avoiding Hepatitis C / HIV – Tips From Your Peers",
				src: "https://blackpoppymag.wordpress.com/a-z-of-health/avoiding-hepatitis-c-hiv-tips-from-your-peers/",
			},
			{
				text: "Find HIV and Viral Hepatitis Services Near You",
				src: "https://npin.cdc.gov/search/organizations/map",
			},
			{
				text: "PrEP vs. PEP",
				src: "https://hivinfo.nih.gov/understanding-hiv/infographics/prep-vs-pep",
			},
		],
	},
	{
		category: "Safer Injection Practices",
		resources: [
			{
				text: "NASEN Syringe Service Program",
				src: "https://nasen.org/map/",
			},
			{
				text: "Getting Off Right: A Safety Manual for Injection Drug Users",
				src: "https://harmreduction.org/issues/safer-drug-use/injection-safety-manual/",
			},
			{
				text: "Resource B2Injecting and Infections: What You Need to Know",
				src: "https://www.exchangesupplies.org/pdf/HRPUB4.pdf",
			},
			{
				text: "The Safer Injecting Handbook",
				src: "https://www.exchangesupplies.org/pdf/P303_10.pdf",
			},
			{
				text: "What Works? A Comprehensive Guide to Safer Needle and Syringe Selection for Injecting Drug Users",
				src: "https://www.exchangesupplies.org/pdf/A299.pdf",
			},
			{
				text: "Citric Acid in Heroin: How Much is Too Much?",
				src: "https://blackpoppymag.wordpress.com/substances/citric-acid-in-heroin-how-much-is-too-much/",
			},
			{
				text: "How to Use Fentanyl Test Strips",
				src: "https://www.youtube.com/watch?v=o0n6-MCrex8",
			},
			{
				text: "National Naloxone Map",
				src: "https://www.arcgis.com/apps/webappviewer/index.html?id=153b0c32fefc432eae6a0e8439b9f56b",
			},
			{
				text: "Images of Veins in Body Part 1",
				src: "https://blackpoppymag.wordpress.com/images-of-veins-in-body-part-1/",
			},
			{
				text: "Injecting in the Hands",
				src: "https://blackpoppymag.wordpress.com/a-z-of-health/injecting-in-the-hands/",
			},
			{
				text: "Keep Walking: A Magazine for Groin Injectors",
				src: "https://www.exchangesupplies.org/pdf/HRDVD4.pdf",
			},
			{
				text: "Vein Care: Look After Your Veins",
				src: "https://www.exchangesupplies.org/pdf/P703_5.1.pdf",
			},
			{
				text: "Hygiene Do’s & Don’ts, Compiled by Users for Users",
				src: "https://blackpoppymag.wordpress.com/a-z-of-health/hygiene-dos-and-donts/",
			},
			{
				text: "Resource B2How to Clean Your Syringes",
				src: "https://www.cdc.gov/hiv/pdf/library/factsheets/cdc-hiv-clean-your-syringes.pdf",
			},
		],
	},
	{
		category: "Overdose Prevention and Response",
		resources: [
			{
				text: "Opioid Overdose Basics",
				src: "https://harmreduction.org/issues/overdose-prevention/overview/overdose-basics/",
			},
			{
				text: "Overdose Risks & Prevention",
				src: "https://harmreduction.org/issues/overdose-prevention/overview/overdose-basics/opioid-od-risks-prevention/",
			},
			{
				text: "Recognizing Opioid Overdose",
				src: "https://harmreduction.org/issues/overdose-prevention/overview/overdose-basics/recognizing-opioid-overdose/",
			},
			{
				text: "Stimulat Overamping Basics",
				src: "https://harmreduction.org/issues/overdose-prevention/overview/stimulant-overamping-basics/",
			},
			{
				text: "The Many Types of Overdose",
				src: "https://blackpoppymag.wordpress.com/the-a-z-of-overdose/the-many-types-of-overdose/",
			},
			{
				text: "Responding to Opioid Overdose",
				src: "https://harmreduction.org/issues/overdose-prevention/overview/overdose-basics/responding-to-opioid-overdose/",
			},
			{
				text: "SAMHSA Opioid Overdose Prevention Toolkit",
				src: "https://store.samhsa.gov/sites/default/files/d7/priv/five-essential-steps-for-first-responders.pdf",
			},
			{
				text: "How to Use Naloxone",
				src: "https://www.youtube.com/watch?v=-xTKsHFBXlI",
			},
			{
				text: "Narcan Access and How-To",
				src: "https://www.narcan.com/",
			},
			{
				text: "Receive Naloxone in the Mail",
				src: "https://nextdistro.org/naloxone",
			},
			{
				text: "Never Use Alone Hotline",
				src: "https://neverusealone.com/",
			},
			{
				text: "Medication for Opioid Use Disorder",
				src: "https://harmreduction.org/issues/medication-for-opioid-use-disorder/",
			},
			{
				text: "SAMHSA: Find Treatment",
				src: "https://www.samhsa.gov/find-treatment",
			},
		],
	},
	{
		category: "Safe Disposal",
		resources: [
			{
				text: "FDA-Cleared Sharps Containers",
				src: "https://www.fda.gov/medical-devices/safely-using-sharps-needles-and-syringes-home-work-and-travel/sharps-disposal-containers",
			},
			{
				text: "Disposal Options",
				src: "https://safeneedledisposal.org/sharps-management/management-and-disposal/",
			},
			{
				text: "How to Dispose of Used Sharps by State",
				src: "https://safeneedledisposal.org/",
			},
			{
				text: "DOs and DON'Ts of Proper Sharps Disposal",
				src: "https://www.fda.gov/medical-devices/safely-using-sharps-needles-and-syringes-home-work-and-travel/dos-and-donts-proper-sharps-disposal#:~:text=DON&#39;T%20throw%20loose%20needles,needles%20used%20by%20another%20person.",
			},
		],
	},
	{
		category: "Wound Care and Medical Complications",
		resources: [
			{
				text: "Safer Injection & Wound Care",
				src: "https://slideplayer.com/slide/14225163/",
			},
			{
				text: "Introduction to Common Wounds for PWID",
				src: "https://issuu.com/nextdistro/docs/zine_wound_care_web_110118/16",
			},
			{
				text: "Wound & Abscess Care: For People Who Use Drugs",
				src: "https://nextdistro.org/resources-collection/wound-care-pamphlet",
			},
			{
				text: "Abscesses",
				src: "https://blackpoppymag.wordpress.com/a-z-of-health/abscesses/",
			},
			{
				text: "What Can Cause a Blown Vein and How to Treat It",
				src: "https://www.healthline.com/health/blown-vein",
			},
			{
				text: "What is a Collapsed Vein?",
				src: "https://journeypure.com/ask-our-doctors/drug-addiction/opioids/what-is-a-collapsed-vein/",
			},
			{
				text: "Quality Healthcare is Your Right",
				src: "https://harmreduction.org/issues/safer-drug-use/quality-healthcare-brochure/",
			},
			{
				text: "Septicemia",
				src: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/septicemia",
			},
			{
				text: "Necrotizing Fasciitis: All You Need to Know",
				src: "https://www.cdc.gov/groupastrep/diseases-public/necrotizing-fasciitis.html",
			},
			{
				text: "Injection Drug Use and Wound Botulism",
				src: "https://www.cdc.gov/botulism/wound-botulism.html",
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
const mapImg = document.querySelector("#headerImage");
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
	// this will end whatever video is playing when the video modal is closed
	let modalVideo = document.querySelector("#modalVideo");
	modalVideo.src = "";

	modalVideoView.classList.toggle("hidden");
});

const populateVideoModal = (title, time, link, description) => {
	let modalTitle = document.querySelector("#modalTitle");
	let modalTime = document.querySelector("#modalTime");
	let modalVideo = document.querySelector("#modalVideo");
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
	img.src = video.thumbnailSrc;
	img.alt = video.alt;

	div.append(header);
	div.append(img);
	listItem.append(div);

	listItem.addEventListener("click", () => {
		populateVideoModal(
			video.title,
			video.time,
			video.videoLink,
			video.description
		);
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

	if (categoryIndex < 1) {
		nextVidSectBtn.classList.add("hidden");
		prevVidSectBtn.classList.add("hidden");
	}

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
	categoryHeader.className = "resourcesSubheader";
	resourcesSublist.className = "resourcesSublist";
	// build the sublist
	for (let i of r.resources) {
		const resourceItem = document.createElement("li");

		// resourceItem.innerHTML = `<a>${i.text}</a>`;
		resourceItem.innerHTML = `<a href="${i.src}" target="_blank">${i.text}</a>`;

		resourcesSublist.append(resourceItem);
	}
	resourceCategory.append(categoryHeader);
	resourceCategory.append(resourcesSublist);
	resourcesList.append(resourceCategory);
}
