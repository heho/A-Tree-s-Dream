#debugging Singleton Klasse. Mit Debug.getInstance() instanzieren


imports = []

define imports, () ->
	class Debug
		instance = null
		
		constructor: () ->
			
		#Singleton Klasse
		@getInstance: () ->
			if not instance?
				instance = new @
				instance.init()
		
		init: ->
			
		path: (canvas, path, circleFill = "#0000aa", lineFill = "#00ff00", fillOpacity = 0.5, lineOpacity = 1) ->
			array2 = path.replace(/[MZ]/g, "").split /[CS]/g
			array = new Array
			
			i = 0
			for part in array2
				array[i] = part.split " "
				counter = 0
				i++
			
			counter = 0
			nextStart = [0, 0]
			for part in array
				#alert part.length()
				switch part.length
					when 2 then [nextStart[0], nextStart[1]] = [part[0], part[1]]
					when 4 
						circle = canvas.circle part[0], part[1], 3
						circle.attr "fill-opacity", fillOpacity
						circle.attr "fill", circleFill
						circle.attr "stroke-opacity", 0
						
						circle = canvas.circle part[2], part[3], 3
						circle.attr "fill-opacity", fillOpacity
						circle.attr "fill", circleFill
						circle.attr "stroke-opacity", 0
						
						line = canvas.path "M#{part[2]} #{part[3]}L#{part[0]} #{part[1]}"
						line.attr "stroke-width", 2
						line.attr "stroke", lineFill
						line.attr "stroke-opacity", lineOpacity
						[nextStart[0], nextStart[1]] = [part[2], part[3]]
					when 6
						circle = canvas.circle nextStart[0], nextStart[1], 3
						circle.attr "fill-opacity", fillOpacity
						circle.attr "fill", circleFill
						circle.attr "stroke-opacity", 0
						
						circle = canvas.circle part[0], part[1], 3
						circle.attr "fill-opacity", fillOpacity
						circle.attr "fill", circleFill
						circle.attr "stroke-opacity", 0
						
						circle = canvas.circle part[2], part[3], 3
						circle.attr "fill-opacity", fillOpacity
						circle.attr "fill", circleFill
						circle.attr "stroke-opacity", 0
						
						circle = canvas.circle part[4], part[5], 3
						circle.attr "fill-opacity", fillOpacity
						circle.attr "fill", circleFill
						circle.attr "stroke-opacity", 0
						
						line = canvas.path "M#{nextStart[0]} #{nextStart[1]}L#{part[0]} #{part[1]}"
						line.attr "stroke-width", 2
						line.attr "stroke", lineFill
						line.attr "stroke-opacity", lineOpacity
						
						line = canvas.path "M#{part[2]} #{part[3]}L#{part[4]} #{part[5]}"
						line.attr "stroke-width", 2
						line.attr "stroke", lineFill
						line.attr "stroke-opacity", lineOpacity
						[nextStart[0], nextStart[1]] = [part[4], part[5]]
