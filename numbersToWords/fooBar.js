 function makeOnes(val) {
    var ones = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
    return ones[val];
}

function makeTens(val) {
    var tens = ['Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    return tens[val];
}

function makeBig(val) {
    var tens = ['Hundred', 'Thousand', 'Million', 'Billion']
    return tens[val];
}



function intToNum(val) {
    var sVal = val.toString();
    var readable;
    
    if (sVal.length <= 1) {
        readable = makeOnes(val - 1);
    }
    
    else if (sVal.length == 2){
        var first = parseInt(sVal[0]);
        var firstWord = makeTens(first - 1);
        
        var second = parseInt(sVal[1]);
        var secondWord;
        if (second === 0) {
        	secondWord = '';
        } else {

        	secondWord = makeOnes(second -1);
        }
        
        readable = firstWord + secondWord;
        
    }

    else if (sVal.length === 3) {
    	var first = parseInt(sVal[0]);
    	
    	var firstWord = makeOnes([first - 1])
    	var second = parseInt(sVal[1]);
    	var secondWord = makeTens(second-1)
    	var third = sVal[2];
    	var thirdWord = makeOnes([third - 1])

    	readable = firstWord + makeBig(0) + secondWord + thirdWord;


    }

    else if (sVal.length ===4) {

    	var first = parseInt(sVal[0]);
    	
    	var firstWord = makeOnes([first - 1])
    	var second = parseInt(sVal[1]);
    	var secondWord = makeOnes(second-1)
    	
    	var third = sVal[2];
    	var thirdWord = makeTens([third - 1])

    	var fourth = sVal[3];
    	var fourthWord = makeOnes([fourth - 1])

    	readable = firstWord + makeBig(1) + secondWord + makeBig(0) + thirdWord + fourthWord;


    }
    

    readable += 'Dollars';
    return readable;
}

// console.log(intToNum(3));
// console.log(intToNum(10));
// console.log(intToNum(21));
// console.log(intToNum(466))
console.log(intToNum(1234))
