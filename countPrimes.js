/*
	tried to go for an optimized solution of tracking primes, could also just loop up to every number and return false if nothing divided cleanly.
*/
var countPrimes = function(n) {
	var primes = [];
	for (var i = 2; i < n; i++) {
		var sqrt = Math.sqrt(i)
		// if the sqrt is an integer, then it's not a prime
		if (Number.isInteger(sqrt)) {
			continue;
		}
		sqrt = Math.floor(sqrt);
		var isPrime = true;
		// for numbers up to the sqrt of N
		// check if prime numbers less then that number are a factor
		// if the number has no factors, then it is prime and add it to the arr
		var j = 0;
		while(primes[j] <= sqrt) {
			if(i % primes[j] === 0) {
				isPrime = false;
				break;
			}
			j += 1;
		}
		
		if (isPrime) {
			primes.push(i);
		}
	}

	return primes.length;
};

console.log(countPrimes(2) === 0);
console.log(countPrimes(5) === 2);
console.log(countPrimes(18) == 7);