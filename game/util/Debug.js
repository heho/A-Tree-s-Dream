(function() {
  var imports;

  imports = [];

  define(imports, function() {
    var Debug;
    return Debug = (function() {
      var instance;

      instance = null;

      function Debug() {}

      Debug.getInstance = function() {
        if (!(instance != null)) {
          instance = new this;
          return instance.init();
        }
      };

      Debug.prototype.init = function() {};

      Debug.prototype.path = function(canvas, path, circleFill, lineFill, fillOpacity, lineOpacity) {
        var array, array2, circle, counter, i, line, nextStart, part, _i, _j, _len, _len2, _ref, _ref2, _ref3, _results;
        if (circleFill == null) circleFill = "#0000aa";
        if (lineFill == null) lineFill = "#00ff00";
        if (fillOpacity == null) fillOpacity = 0.5;
        if (lineOpacity == null) lineOpacity = 1;
        array2 = path.replace(/[MZ]/g, "").split(/[CS]/g);
        array = new Array;
        i = 0;
        for (_i = 0, _len = array2.length; _i < _len; _i++) {
          part = array2[_i];
          array[i] = part.split(" ");
          counter = 0;
          i++;
        }
        counter = 0;
        nextStart = [0, 0];
        _results = [];
        for (_j = 0, _len2 = array.length; _j < _len2; _j++) {
          part = array[_j];
          switch (part.length) {
            case 2:
              _results.push((_ref = [part[0], part[1]], nextStart[0] = _ref[0], nextStart[1] = _ref[1], _ref));
              break;
            case 4:
              circle = canvas.circle(part[0], part[1], 3);
              circle.attr("fill-opacity", fillOpacity);
              circle.attr("fill", circleFill);
              circle.attr("stroke-opacity", 0);
              circle = canvas.circle(part[2], part[3], 3);
              circle.attr("fill-opacity", fillOpacity);
              circle.attr("fill", circleFill);
              circle.attr("stroke-opacity", 0);
              line = canvas.path("M" + part[2] + " " + part[3] + "L" + part[0] + " " + part[1]);
              line.attr("stroke-width", 2);
              line.attr("stroke", lineFill);
              line.attr("stroke-opacity", lineOpacity);
              _results.push((_ref2 = [part[2], part[3]], nextStart[0] = _ref2[0], nextStart[1] = _ref2[1], _ref2));
              break;
            case 6:
              circle = canvas.circle(nextStart[0], nextStart[1], 3);
              circle.attr("fill-opacity", fillOpacity);
              circle.attr("fill", circleFill);
              circle.attr("stroke-opacity", 0);
              circle = canvas.circle(part[0], part[1], 3);
              circle.attr("fill-opacity", fillOpacity);
              circle.attr("fill", circleFill);
              circle.attr("stroke-opacity", 0);
              circle = canvas.circle(part[2], part[3], 3);
              circle.attr("fill-opacity", fillOpacity);
              circle.attr("fill", circleFill);
              circle.attr("stroke-opacity", 0);
              circle = canvas.circle(part[4], part[5], 3);
              circle.attr("fill-opacity", fillOpacity);
              circle.attr("fill", circleFill);
              circle.attr("stroke-opacity", 0);
              line = canvas.path("M" + nextStart[0] + " " + nextStart[1] + "L" + part[0] + " " + part[1]);
              line.attr("stroke-width", 2);
              line.attr("stroke", lineFill);
              line.attr("stroke-opacity", lineOpacity);
              line = canvas.path("M" + part[2] + " " + part[3] + "L" + part[4] + " " + part[5]);
              line.attr("stroke-width", 2);
              line.attr("stroke", lineFill);
              line.attr("stroke-opacity", lineOpacity);
              _results.push((_ref3 = [part[4], part[5]], nextStart[0] = _ref3[0], nextStart[1] = _ref3[1], _ref3));
              break;
            default:
              _results.push(void 0);
          }
        }
        return _results;
      };

      return Debug;

    })();
  });

}).call(this);
