import * as jsonData from "./../response.json";
import * as helper from "./helper";
import * as templates from "./templates";

let fromValue = helper.getClass("getFrom")[0],
	toValue = helper.getClass("getTo")[0],
	resultText = helper.getClass("resultText")[0],
	fastestId = helper.getId("fastest"),
	cheapestId = helper.getId("cheapest"),
	fastestBoolean = false,
	isResult = [];

fastestId.addEventListener("change", () => {
	fastestBoolean = true
}, true);

cheapestId.addEventListener("change", () => {
	fastestBoolean = false
}, true);

// Get unique departure from jsonData
helper.uniqueDeparture.map((arrayItem) => {
	let elementFrom = helper.createElement("option");
	
	elementFrom.innerHTML = arrayItem;
	elementFrom.value = arrayItem;
	fromValue.appendChild(elementFrom);
});

// Get unique arrival from jsonData
helper.uniqueArrival.map((arrayItem) => {
	let elementTo = helper.createElement("option");

	elementTo.innerHTML = arrayItem;
	elementTo.value = arrayItem;
	toValue.appendChild(elementTo);
});

// Sort Function Start
	const getSortedTrips = () => {
		// Make everything empty on UI
		helper.getClass("sortList")[0].innerHTML = "";
		isResult = [];
		
		// Map sorted data
		helper.sorted(fastestBoolean).map((item) => {
			if(item.departure == fromValue.value && item.arrival == toValue.value){
				isResult.push(item);
				resultText.style.display = 'none';
				return templates.itemTemplate(item);
			}
		})
		// Chacking if there is no items in isResult :: show No Result Found
		{(() => {
			if(isResult.length <= 0) {
				resultText.style.display = 'block';
				return templates.notFound("No Results Found")
			}
		})()}
	}
// Sort Function End

// Call by Click Function Start
	const submit = helper.getId("submit");
	submit.addEventListener('click', getSortedTrips, false);
// Call by Click Function End