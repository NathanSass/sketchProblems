/*
https://leetcode.com/problems/integer-break/
*/

var integerBreak2 = function(n) {
	if(n==2) return 1;
	if(n==3) return 2;
	var product = 1;
	while(n>4){
		product*=3;
		n-=3;
	}
	product*=n;
	return product;
};

var integerBreak = function(n) {
	if(n <= 2 ) { return n; }
  
  //find twos
  var twos = Math.floor(n / 2);
  var twosR = n - (twos * 2);

  var threes = Math.floor(n / 3);
  var threesR = n - (threes * 3);

  var twoResult = 1;
  for(var i = 0; i < twos; i++) {
  	twoResult *= 2;
  }
  if( twosR > 0) {
  	twoResult *= twosR;
  }

  var threeResult = 1;
  for(var i = 0; i < threes; i++) {
  	threeResult *= 3;
  }
  if( threesR > 0) {
  	threeResult *= threesR;
  }

  return Math.max(twoResult, threeResult);
};

console.log(integerBreak(10))