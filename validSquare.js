function validSquare(n) {
	var squares = [0];
	var i = 0;

	while (squares[i] <= n) {
		if (n == squares[i]) {
			return true;
		} else {
			i += 1;
			squares[i] = i * i;
		}

	}
	return false;

}

console.log(validSquare(14) == false);
console.log(validSquare(16) == true)