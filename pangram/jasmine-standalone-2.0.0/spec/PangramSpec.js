describe("pangramChecker", function(){
	var phrase;
	
	it("should return null for a pangram with all lowercase", function(){
		phrase = "a quick brown fox jumps over the lazy dog"
		expect(pangramChecker(phrase)).toEqual(null)
	});

	it("should return null for a panagram with mixedcase", function(){
		phrase = "A quick brOWn fox jumps over the LAzy DOG"
		expect(pangramChecker(phrase)).toEqual(null)
	})

	it("should return 26 letters for an empty phrase",function(){
		phrase = " "
		expect(pangramChecker(phrase).length).toEqual(26)
	})

	it("should return 20 letters for a phrase with 6 unique letters",function(){
		phrase = "abc def"
		expect(pangramChecker(phrase).length).toEqual(20)
	})

	it("should not double count repeated letters in a phrase",function(){
		phrase = "aaaAAAAA"
		expect(pangramChecker(phrase).length).toEqual(25)
	})

})