imports = []

define imports, () ->
	class Vector
		constructor: (@x, @y) ->
			console.log "new Vector with x: #{@x} and y: #{@y} created"
		
		set: (x, y) -> 
			[@x, @y] = [x, y]
			return @
		
		copyValues: (vector) ->
			[@x, @y] = [vector.x, vector.y]
			return @
		
		add: (vector) ->
			@x += vector.x
			@y += vector.y
			return @
			
		subtract: (vector) ->
			@x -= vector.x
			@y -= vector.y
			return @

		multiply: (multiplicator) ->
			@x *= multiplicator
			@y *= multiplicator
			return @
		
		length: -> Math.sqrt @x*@x + @y*@y
		
		normalize: ->
			length = @length()
			if length < Number.MIN_VALUE
				@set 0, 0
				return null
			@x /= length
			@y /= length
			return @
		
		isValid: -> isFinite(@x) and isFinite(@y)
