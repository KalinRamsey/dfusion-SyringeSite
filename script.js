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
	// {
	// 	category: "Harm Reduction",
	// 	videos: [
	// 		{
	// 			title: "Harm Reduction Works",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink:
	// 				"https://www.dropbox.com/sh/mmami5rluuwz56c/AABXsuW4yVB3gw_hJyIF4cTia/SafeInjection_10_HRW_NO_TITLE.mp4?raw=1",
	// 			time: "01:47",
	// 			description:
	// 				"Pharmacist describes why harm reduction strategies and access to sterile syringes are important in reducing the spread of HIV and hepatitis.",
	// 		},
	// 		{
	// 			title: "Your Role in Non-Prescription Syringe Sales",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist explains how laws regarding access to syringes vary by state. She also shares how pharmacies are a vital resource for communities with limited access to health resources and can help people receive the care they need to reduce the spread of blood-borne infections.",
	// 		},
	// 		{
	// 			title: "Understand the Safe Injection Kit",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist outlines the contents, application, and importance of each item in the Safe Injection Kit.",
	// 		},
	// 	],
	// },
	// {
	// 	category: "Inform and Motivate Staff",
	// 	videos: [
	// 		{
	// 			title: "This Pharmacy Sells Non-Prescription Syringes",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist calls a meeting with the pharmacy technicians to share a new policy on NPSS, explain why it is going into effect, and how pharmacy staff will be involved. ",
	// 		},
	// 		{
	// 			title: "This Pharmacy Supports Safe Disposal",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"Pharmacist reviews pharmacy policies on NPSS and safe disposal with pharmacy technicians before opening. ",
	// 		},
	// 		{
	// 			title: "Educate on Needle Sizes",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist calls a meeting with the pharmacy technicians to share differences between different syringe gauges and why it matters.",
	// 		},
	// 		{
	// 			title: "Support Uncomfortable Staff",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"Hesitant pharmacy technicians bring their concerns about selling NPS to injection drug users to the pharmacist. The pharmacist demonstrates their understanding and encourages research into harm reduction practices as well as options for staff members that are still opposed.",
	// 		},
	// 		{
	// 			title: "Plan for Staff that Opt Out",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"A pharmacy technician opts-out of NPSS, so the pharmacists sits them down and goes over how they should react when a customer asks for NPS. The technician then illustrates how opt-out staff can help an NPS customer in action.",
	// 		},
	// 	],
	// },
	// {
	// 	category: "Be Informed About Syringe Sales",
	// 	videos: [
	// 		{
	// 			title: "This Pharmacy Sells Non-Prescription Syringes",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"Pharmacy technicians gather in a meeting with the pharmacist to learn about new policies regarding NPSS and how they should be implemented.",
	// 		},
	// 		{
	// 			title: "This Pharmacy Supports Safe Disposal",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"Pharmacy technitions review pharmacy policies on NPSS and safe disposal with the pharmacist before opening.",
	// 		},
	// 		{
	// 			title: "Seek Support Regarding Syringe Sales",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"Hesitant pharmacy technicians bring their concerns about selling NPS to injection drug users to the pharmacist. The pharmacist demonstrates their understanding and encourages research into harm reduction practices as well as options for staff members that are still opposed.",
	// 		},
	// 		{
	// 			title: "Navigating Opt-out Process",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"A pharmacy technician opts-out of NPSS, so the pharmacists goes over how they should respond when a customer asks for NPS. The technician then illustrates how opt-out staff can help an NPS customer in action.",
	// 		},
	// 		{
	// 			title: "Understand Needle Sizes",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist elaborates on the differences between different syringe sizes and why it matters to NPS customers with pharmacy technicians.",
	// 		},
	// 	],
	// },
	// {
	// 	category: "Provide Respectful and Compliant Service",
	// 	videos: [
	// 		{
	// 			title: "Provide Professional Services",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"Pharmacy technician makes an NPS sale when all offers for the Safe Injection Kit, a sharps container, and a pharmacy consultation are rejected. This video outlines all reccomened best practices; unfortunatly these are not legally possible in all states. Please refer to your state law videos to learn which of these best practices are applicable to your state.",
	// 		},
	// 		{
	// 			title: "Understand Slang or Unfamiliar Terms",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"Pharmacy technician used the slang guide chart to make an NPS sale when the desired syringe gauge is unknown.",
	// 		},
	// 		{
	// 			title: "Offer Safe Injection Kits",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacy technician respectfully makes an NPS sale to a customer interested in the Safe Injection Kit.",
	// 		},
	// 		{
	// 			title: "Offer Private Consults",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacy technician respectfully offers naloxone consultations to all NPS customers each visit.",
	// 		},
	// 		{
	// 			title: "Provide Brief Education on Single-Use",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"Pharmacy technician answers questions about the content and use of the Safe Injection Kit.",
	// 		},
	// 		{
	// 			title: "Provide Detailed Education on Single-Use",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"Questions about the importance of single use items are discussed with the pharmacist during a consultation.",
	// 		},
	// 	],
	// },
	// {
	// 	category: "Understand Your State Laws",
	// 	videos: [
	// 		{
	// 			title:
	// 				"NPSS Permitted - Sale for Use With Illegal Drugs Is Only Prohibited If The Seller Should “Reasonably Know” Use",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				'The pharmacist shares best practice guidelines and legal information about states where NPSS is legal unless the seller, "should reasonably know" they will be used to inject illegal drugs.',
	// 		},
	// 		{
	// 			title:
	// 				"NPSS Permitted - Sale for Use with Illegal Drugs Is Only Prohibited if Intended Use is Known",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist shares best practice guidelines and legal information about states where NPSS is legal unless the seller, knows they will be used to inject illegal drugs.",
	// 		},
	// 		{
	// 			title:
	// 				"NPSS Permitted – Sale for Use with Illegal Drugs Is Permitted in Your State",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist shares best practice guidelines and legal information about states where NPSS is legal.",
	// 		},
	// 		{
	// 			title: "Sell When Medical Purpose is Required",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist shares legal information about states where a medical need is required for NPSS. A pharmacy technician demonstrates how to ask for the medical need from an NPS customer.",
	// 		},
	// 		{
	// 			title: "Navigate Age Requirements",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist shares legal information about states where NPSS is legal for customers are of a certain age.  A pharmacy technician demonstrates how to inact age requirement laws with an NPS customer.",
	// 		},
	// 		{
	// 			title: "Navigate Syringe Sale Limit",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist shares legal information about states where NPSS is regulated by a sale limit.  A pharmacy technician demonstrates how to enact age requirement laws with an NPS customer.",
	// 		},
	// 		{
	// 			title: "Navigate Logbook Requirements",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist shares legal information about states where a logbook is required for NPS sales.  A pharmacy technician demonstrates how to use the logbook with an NPS customer.",
	// 		},
	// 		{
	// 			title: "Transfer Syringe Sales to Required Staff",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist shares legal information about states where NPSS is regulated by a who can sell syringes.  A pharmacy technician and pharmacist demonstrate how to enact these laws with an NPS customer.",
	// 		},
	// 		{
	// 			title: "Provide Required Information Upon Syringe Sale",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist shares legal information for states where harm reduction information is required to be shared with all NPSS customers.  A pharmacy technician and pharmacist demonstrate how to enact these laws with an NPS customer.",
	// 		},
	// 	],
	// },
	// {
	// 	category: "Provide Harm Reduction Consultation",
	// 	videos: [
	// 		{
	// 			title: "Provide a Private Consult",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"During a private consultation, the pharmacist addresses an infection and provides resources for an NPSS customer.",
	// 		},
	// 		{
	// 			title: "Provide Substance Use Treatment Referral",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"While conducting an NPS sale, the customer openly confesses wanting to quit using, allowing the pharmacist the opportunity to offer substance use disorder treatment resources.",
	// 		},
	// 		{
	// 			title: "Provide Guidance on HIV/HCV Testing",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"During a private consultation, the pharmacist offers to discuss HIV and Hep C testing and provides resources.",
	// 		},
	// 		{
	// 			title: "Identify Community Resources",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"During a private consultation, an NPSS customer asks for assistance accessing the resource locator map online. The pharmacist shows how to use the resource and provides more resources as needed.",
	// 		},
	// 		{
	// 			title: "Support Overdose Prevention Planning",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"A consultation about overdose prevention is held with an NPSS customer and the pharmacist, who suggests they create an overdose safety plan together.",
	// 		},
	// 		{
	// 			title: "Distribute Naloxone",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacist shares information about the legal distribution and benefits of providing Naloxone to NPSS customers.",
	// 		},
	// 	],
	// },
	// {
	// 	category: "Respond to Challenging Situations",
	// 	videos: [
	// 		{
	// 			title: "Respond to Customer Offended by Kit Offer",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"A pharmacy technician offers a Safe Injection Kit to a customer who becomes offended.",
	// 		},
	// 		{
	// 			title: "Respond to Syringe Sale Complaints in Person",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"When a customer complains about NPSS being enacted at the pharmacy, the pharmacy technician respectfully addresses her and transfers her to the pharmacist who provides more in-depth information.",
	// 		},
	// 		{
	// 			title: "Respond to Concerns Over the Phone",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"When a concerned customer calls to complain about her niece buying NPS at the pharmacy, the pharmacist calmly addresses her chief concerns, explains why and how the pharmacy follows a harm reduction approach, and offers appropriate services.",
	// 		},
	// 		{
	// 			title: "Respond to Syringe Sale Concerns from Local Businesses",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"When a local business owner complains about unsafe syringe disposal affecting his business, the pharmacist shares her concern and plan of action.",
	// 		},
	// 		{
	// 			title: "Respect Desired Level of Communication",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"When a customer complains about Safe Injection Kits being offered at the pharmacy, the pharmacy technician respectfully offers more information and ways for her to voice her concerns.",
	// 		},
	// 		{
	// 			title: "Navigate Disposal Challenges with Customer",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"A pharmacy technician informs an NPSS customer of the possible ending of the NPSS program at the pharmacy due to unsafe disposal. The technician respectfully encourages discussion regarding better ways to provide and discuss safe disposal.",
	// 		},
	// 		{
	// 			title: "Share Policy Change if Syringe Sales Stop",
	// 			thumbnailSrc: "#",
	// 			alt: "Alt text",
	// 			videoLink: "",
	// 			time: "00:00",
	// 			description:
	// 				"The pharmacy technician respectfully communicates the unfortunate end of the NPSS program at the pharmacy and transfers the confused and upset customer to the pharmacist who compassionately listens, explains why the program ended, and offers a safe place to share their complaints.",
	// 		},
	// 	],
	// },
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
				text: "How can I prevent getting HIV from injection drug use?",
				src: "https://www.cdc.gov/hiv/basics/hiv-prevention/inject-drugs.html",
			},
			{
				text: "Hepatitis C Basics for People Who Use Drugs (PWUD)",
				src: "https://harmreduction.org/issues/hepatitis-c/basics-brochure/",
			},
			{
				text: "Avoiding Hepatitis C / HIV – Tips from your peers",
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
				text: "Resource B2Injecting and infections: what you need to know",
				src: "https://www.exchangesupplies.org/pdf/HRPUB4.pdf",
			},
			{
				text: "The Safer Injecting Handbook",
				src: "https://www.exchangesupplies.org/pdf/P303_10.pdf",
			},
			{
				text: "What works? A comprehensive guide to safer needle and syringe selection for injecting drug users",
				src: "https://www.exchangesupplies.org/pdf/A299.pdf",
			},
			{
				text: "Citric Acid in Heroin: How Much is too Much?",
				src: "https://blackpoppymag.wordpress.com/substances/citric-acid-in-heroin-how-much-is-too-much/",
			},
			{
				text: "How to use Fentanyl test strips",
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
				text: "Keep Walking: A MAGAZINE FOR GROIN INJECTORS",
				src: "https://www.exchangesupplies.org/pdf/HRDVD4.pdf",
			},
			{
				text: "Vein Care: Look After your Veins",
				src: "https://www.exchangesupplies.org/pdf/P703_5.1.pdf",
			},
			{
				text: "Hygiene Do’s & Don’ts, Compiled by users for users",
				src: "https://blackpoppymag.wordpress.com/a-z-of-health/hygiene-dos-and-donts/",
			},
			{
				text: "Resource B2How To Clean Your Syringes",
				src: "https://www.cdc.gov/hiv/pdf/library/factsheets/cdc-hiv-clean-your-syringes.pdf",
			},
		],
	},
	{
		category: "Overdose Prevention and Response",
		resources: [
			{
				text: "OPIOID OVERDOSE BASICS",
				src: "https://harmreduction.org/issues/overdose-prevention/overview/overdose-basics/",
			},
			{
				text: "OVERDOSE RISKS &amp; PREVENTION",
				src: "https://harmreduction.org/issues/overdose-prevention/overview/overdose-basics/opioid-od-risks-prevention/",
			},
			{
				text: "RECOGNIZING OPIOID OVERDOSE",
				src: "https://harmreduction.org/issues/overdose-prevention/overview/overdose-basics/recognizing-opioid-overdose/",
			},
			{
				text: "STIMULANT OVERAMPING BASICS",
				src: "https://harmreduction.org/issues/overdose-prevention/overview/stimulant-overamping-basics/",
			},
			{
				text: "The Many Types of Overdose",
				src: "https://blackpoppymag.wordpress.com/the-a-z-of-overdose/the-many-types-of-overdose/",
			},
			{
				text: "RESPONDING TO OPIOID OVERDOSE",
				src: "https://harmreduction.org/issues/overdose-prevention/overview/overdose-basics/responding-to-opioid-overdose/",
			},
			{
				text: "SAMHSA Opioid Overdose Prevention TOOLKIT",
				src: "https://store.samhsa.gov/sites/default/files/d7/priv/five-essential-steps-for-first-responders.pdf",
			},
			{
				text: "How to use naloxone",
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
				text: "MEDICATION FOR OPIOID USE DISORDER",
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
				text: "DOs and DON&#39;Ts of Proper Sharps Disposal",
				src: "https://www.fda.gov/medical-devices/safely-using-sharps-needles-and-syringes-home-work-and-travel/dos-and-donts-proper-sharps-disposal#:~:text=DON&#39;T%20throw%20loose%20needles,needles%20used%20by%20another%20person.",
			},
		],
	},
	{
		category: "Wound Care and Medical Complications",
		resources: [
			{
				text: "Safer Injection &amp; Wound Care",
				src: "https://slideplayer.com/slide/14225163/",
			},
			{
				text: "Introduction to Common Wounds for PWID",
				src: "https://issuu.com/nextdistro/docs/zine_wound_care_web_110118/16",
			},
			{
				text: "Wound &amp; Abscess Care: FOR PEOPLE WHO USE DRUGS",
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
				text: "What is a collapsed vein?",
				src: "https://journeypure.com/ask-our-doctors/drug-addiction/opioids/what-is-a-collapsed-vein/",
			},
			{
				text: "QUALITY HEALTHCARE IS YOUR RIGHT",
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
