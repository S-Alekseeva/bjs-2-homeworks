"use strict"

function solveEquation(a, b, c) {
	const discriminant = Math.pow(b, 2) - (4 * a * c);
	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		const x = -b / (2 * a);
		return [x];
	} else {
		const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [x1, x2];
	}
}
console.log(solveEquation (-2, 1, 1));
console.log(solveEquation (5, 3, 1));
console.log(solveEquation (3, 6, 3));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const percentMonth = percent / 100 / 12;
	const loanBody = amount - contribution;
	const monthlyPayment = loanBody * (percentMonth + percentMonth / ((Math.pow(1 + percentMonth, countMonths) - 1)));
	const totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));
	return totalAmount;
}
console.log(calculateTotalMortgage(10, 0, 50_000, 12));
console.log(calculateTotalMortgage(10, 1_000, 50_000, 12));
console.log(calculateTotalMortgage(10, 0, 20_000, 24));
console.log(calculateTotalMortgage(10, 1000, 20_000, 24));
console.log(calculateTotalMortgage(10, 20_000, 20_000, 24));
console.log(calculateTotalMortgage(10, 0, 10_000, 36));
console.log(calculateTotalMortgage(15, 0, 10_000, 36));