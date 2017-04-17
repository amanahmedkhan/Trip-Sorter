import * as jsonData from "./../response.json";

// Crate Element Function Start
export const createElement = (tagElement) => {
	return document.createElement(tagElement)
}
// Crate Element Function End

// Get ClassName Function Start
export const getClass = (className) => {
	return document.getElementsByClassName(className)
}
// Get ClassName Function End

// Get IDName Function Start
export const getId = (idName) => {
	return document.getElementById(idName)
}
// Get IDName Function End

const departureItems = [];
const arrivalItems = [];

jsonData.deals.map((itemKey, index) => {
	departureItems.push(itemKey.departure)
	arrivalItems.push(itemKey.arrival)
});

export const uniqueDeparture = departureItems.filter((unique, index) => departureItems.indexOf(unique) == index);

export const uniqueArrival = arrivalItems.filter((unique, index) => arrivalItems.indexOf(unique) == index);

export const sorted = (fastestBoolean) => {
	return jsonData.deals.sort((item, nextItem) => {
		if(fastestBoolean){
			return parseFloat(nextItem.cost) - parseFloat(item.cost);
		} else {
			return parseFloat(item.cost) - parseFloat(nextItem.cost);
		}
	})
}