def new_map arr
	result = []
	i = 0
	while i < arr.length
		result.push(yield arr[i])
		i += 1
	end
	result
end

arr = [1, 2, 3]
p new_map(arr){|x| x * 2}