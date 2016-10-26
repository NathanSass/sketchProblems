var yourself = {
	memo: {},
    fibonacci : function(n) {
    		var value;
    		if (n in this.memo) {
    			value = this.memo[n];
    		} else {
		      if (n === 0) {
		          return 0;
		      }
		      if (n === 1) {
		          return 1;
		      }
		      else {
		      	value = this.fibonacci(n - 1) + this.fibonacci(n - 2);
		        this.memo[n] = value;
		      }
    		}

    		return value;
    }
};


console.log(yourself.fibonacci(11));