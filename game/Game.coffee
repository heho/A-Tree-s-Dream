imports = ["game/engine/math/Vector", "game/util/Debug"]

define imports, (Vector, Debug) ->
	class Game		
		constructor: ->
			@canvas = Raphael 0, 0, 640, 480
			
		run: ->
			v1 = new Vector 12, 23.6
			v2 = new Vector 14, 16