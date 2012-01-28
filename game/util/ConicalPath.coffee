imports = []

define imports, () ->
	class ConicalPath
		constructor: (@pathString, @startwidth) ->
			@newString = @convertString()

		convertString: ->
			array = @pathString.replace(/[CS]/g, " ").replace("M", "").split " "
			newArray1 = new Array
			newArray2 = new Array
			l = array.length;
			[tmpX, tmpY] = [array[l - 2], array[l - 1]]
			
			counter = 0
			for value in array
				array[counter] = parseInt(value)
				counter++
			
			i = 0
			while i <= array.length-1
				Xv = array[i] - array[i+2]
				Yv = array[i+1] - array[i+3]
				X_ = array[i+2] - Xv
				Y_ = array[i+3] - Yv
					
				alpha = Math.PI/2-Math.asin(Xv/(Math.sqrt(Xv*Xv+Yv*Yv)))
				x = Math.sin(alpha)*@startwidth
				y = Math.cos(alpha)*@startwidth
				
				newArray1.push Math.round(array[i] + x)
				newArray1.push Math.round(array[i+1] + y)
				newArray1.push Math.round(array[i+2] + x)
				newArray1.push Math.round(array[i+3] + y)
				
				newArray2.unshift Math.round(array[i+3] - y)
				newArray2.unshift Math.round(array[i+2] - x)
				
				if i is 0
					X_ = array[i+2]
					Y_ = array[i+3]
					newArray2.shift()
					newArray2.shift()
					newArray2.unshift Math.round(array[i+1] - y)
					newArray2.unshift Math.round(array[i] - x)
				else if i+4 >= array.length
					X_ = array[i+0]
					Y_ = array[i+1]
				else
					X_ = array[i+2] - Xv
					Y_ = array[i+3] - Yv
					
				newArray2.unshift Math.round(Y_ - y)
				newArray2.unshift Math.round(X_ - x)
				
				i += 4
				
			#alert newArray1.toString()
			#alert newArray2.toString()
			counter = 0
			for value in newArray1
				value.toString
				value = "M" + value if counter is 0
				value = "C" + value if counter is 2
				value = "S" + value if counter > 7 and counter%4 is 0
				newArray1[counter] = value
				counter++
			
			newArray1.pop()
			newArray1.pop()
			newArray1.push tmpX
			newArray1.push tmpY
			s1 = newArray1.join " "
			s1 = s1.replace(/\sC/g, "C").replace(/\sS/g, "S")
			
			newArray2.splice 2, 2
			counter = 0
			for value in newArray2
				value.toString
				value = "C" + value if counter is 0
				value = "S" + value if counter > 5 and (counter - 2) % 4 is 0
				newArray2[counter] = value
				counter++
				
			s2 = newArray2.join " "
			s2 = s2.replace(/\sC/g, "C").replace(/\sS/g, "S")
			s = s1 + s2 + "Z"
			return s