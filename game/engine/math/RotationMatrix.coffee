imports = ["game/enine/math/Vector"]

define imports, (Vector) ->
	class RotationMatriix
		constructor: (angle)->
			@column1 = new Vector 0.0, 0.0
			@column2 = new Vector 0.0, 0.0
			
			[a, b] = [Math.sin(angle), Math.cos(angle)]
			[@column1.x, @column2.x] = [b, -a]
			[@column1.y, @column2.y] = [a, b]
