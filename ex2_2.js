//Hilla Bartov- 315636779, Ofir Cohen- 205989346
function memoize(func) {
	var memo = {};
	var calc;
	function f(n) {	
		
		if (n in memo) {
			calc = memo[n];
		} else {
			calc = func.apply(this,[n]); 
			memo[n] = calc;	
		}
		return calc;
	}
	return f;
}
//RUN SAMPLE: this function sum all numbers from 1 to n
// function sigmaN(n) {
//   if (n === 1)
//     return 1

//   return n + sigmaN(n-1)
// }
// sigmaN = memoize(sigmaN);
// console.log(sigmaN(5));
