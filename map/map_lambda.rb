times_two = lambda { |x| x * 2}

class Array
	def new_map(func)
		result = []
		i = 0
		while i < self.length
			result << func.call(self[i])
			i += 1
		end
		return result
	end
end

arr = [1, 2, 3]
p arr.new_map(times_two)