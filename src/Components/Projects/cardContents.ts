import pureFinance from "./Images/pure-finance.gif";
import neoShop from "./Images/neo-shop.gif";
import mapBox from "./Images/mapbox.gif";

export const cardContents = [
	{
		header: pureFinance,
		title: "Pure Finance (Project)",
		details: "Build a Finance Calculation Web Application for Users to Determine Their Borrowing Power",
		website: "https://www.purefinance.com.au/calculate/funding-position/"
	},
	{
		header: neoShop,
		title: "Neo Shop",
		details: "An Online Mini Shop E-commerce, Built on MongoDB Express React Node (MERN Stack)",
		source: "https://github.com/oscarhermawan17/mern_ecommerce",
		website: "http://203.194.112.12:3000/"
	},
	{
		header: mapBox,
		title: "Maps created using Mapbox",
		details: "[Mini Project] Build a simple Google Maps Clone using Mapbox",
		source: "https://github.com/oscarhermawan17/trying_mapbox",
	},
	// {
	// 	header: cardHero,
	// 	title: "8common-CardHero (Project)",
	// 	details: "A robust technology platform that offers enterprise a tailored card payment solution.",
	// 	website: "https://www.cardhero.co/"
	// },
];

// init for populating split arrays
const cardNumber = 3;
const cardNumberSmall = 2;
const firstSectionInit = [];
const secondSectionInit = [];
const thirdSectionInit = [];
const firstSmallSectionInit = [];
const secondSmallSectionInit = [];

// populate arrays for each section
for (let i = 0; i < cardContents.length; i++) {
	firstSectionInit.push(cardContents[i * cardNumber]);
	secondSectionInit.push(cardContents[i * cardNumber + 1]);
	thirdSectionInit.push(cardContents[i * cardNumber + 2]);

	if (i * cardNumber + cardNumber >= cardContents.length) {
		break;
	}
}
for (let i = 0; i < cardContents.length; i++) {
	firstSmallSectionInit.push(cardContents[i * cardNumberSmall]);
	secondSmallSectionInit.push(cardContents[i * cardNumberSmall + 1]);

	if (i * cardNumberSmall + cardNumberSmall >= cardContents.length) {
		break;
	}
}

// export arrays for each section
export const firstSectionCards = firstSectionInit;
export const secondSectionCards = secondSectionInit;
export const thirdSectionCards = thirdSectionInit;
export const firstSmallSectionCards = firstSmallSectionInit;
export const secondSmallSectionCards = secondSmallSectionInit;