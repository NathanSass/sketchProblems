describe("pangramChecker", function(){
	it("should return null for a pangram", function(){
		var phrase = 'I am Nathan'
		var response = []
		pangramChecker('abcd');
		expect(pangramChecker(phrase)).toEqual(response)
	})

})