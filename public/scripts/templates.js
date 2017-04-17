import * as helper from "./helper";

// itemTemplate Function Start
export const itemTemplate = data => {
	let getList = helper.getClass("sortList")[0];
	getList.innerHTML += `
		<article class="item">
			<div class="card ${data.transport}">
				<div class="itemHeader">
					<h1>${data.transport}</h1>
				</div>
				<div class="itemContent overlay">
					<div class="detail">
						<div class="row">
							<div class="colPlace">
								<h2>${data.departure}</h2>
							</div>
							<div class="icon"></div>
							<div class="colPlace">
								<h2>${data.arrival}</h2>
							</div>
						</div>
						<ul class="row">
							<li>Duration: ${data.duration.h} Hours
								<span>${data.duration.m} Mints</span>
							</li>
							<li>Reference No: ${data.reference} <span>Discount: ${data.discount}</span></li>
						</ul>
						<a href="javascript:;" class="priceTag">$${data.cost}</a>
					</div>
				</div>
			</div>
		</article>
	`
}
// itemTemplate Function End

// Not Found Template
export const notFound = data => {
	let resultNotFound = helper.getClass("resultText")[0];
	resultNotFound.innerHTML = data;
}