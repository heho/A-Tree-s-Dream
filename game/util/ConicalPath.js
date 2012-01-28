(function() {
  var imports;

  imports = [];

  define(imports, function() {
    var ConicalPath;
    return ConicalPath = (function() {

      function ConicalPath(pathString, startwidth) {
        this.pathString = pathString;
        this.startwidth = startwidth;
        this.newString = this.convertString();
      }

      ConicalPath.prototype.convertString = function() {
        var X_, Xv, Y_, Yv, alpha, array, counter, i, l, newArray1, newArray2, s, s1, s2, tmpX, tmpY, value, x, y, _i, _j, _k, _len, _len2, _len3, _ref;
        array = this.pathString.replace(/[CS]/g, " ").replace("M", "").split(" ");
        newArray1 = new Array;
        newArray2 = new Array;
        l = array.length;
        _ref = [array[l - 2], array[l - 1]], tmpX = _ref[0], tmpY = _ref[1];
        counter = 0;
        for (_i = 0, _len = array.length; _i < _len; _i++) {
          value = array[_i];
          array[counter] = parseInt(value);
          counter++;
        }
        i = 0;
        while (i <= array.length - 1) {
          Xv = array[i] - array[i + 2];
          Yv = array[i + 1] - array[i + 3];
          X_ = array[i + 2] - Xv;
          Y_ = array[i + 3] - Yv;
          alpha = Math.PI / 2 - Math.asin(Xv / (Math.sqrt(Xv * Xv + Yv * Yv)));
          x = Math.sin(alpha) * this.startwidth;
          y = Math.cos(alpha) * this.startwidth;
          newArray1.push(Math.round(array[i] + x));
          newArray1.push(Math.round(array[i + 1] + y));
          newArray1.push(Math.round(array[i + 2] + x));
          newArray1.push(Math.round(array[i + 3] + y));
          newArray2.unshift(Math.round(array[i + 3] - y));
          newArray2.unshift(Math.round(array[i + 2] - x));
          if (i === 0) {
            X_ = array[i + 2];
            Y_ = array[i + 3];
            newArray2.shift();
            newArray2.shift();
            newArray2.unshift(Math.round(array[i + 1] - y));
            newArray2.unshift(Math.round(array[i] - x));
          } else if (i + 4 >= array.length) {
            X_ = array[i + 0];
            Y_ = array[i + 1];
          } else {
            X_ = array[i + 2] - Xv;
            Y_ = array[i + 3] - Yv;
          }
          newArray2.unshift(Math.round(Y_ - y));
          newArray2.unshift(Math.round(X_ - x));
          i += 4;
        }
        counter = 0;
        for (_j = 0, _len2 = newArray1.length; _j < _len2; _j++) {
          value = newArray1[_j];
          value.toString;
          if (counter === 0) value = "M" + value;
          if (counter === 2) value = "C" + value;
          if (counter > 7 && counter % 4 === 0) value = "S" + value;
          newArray1[counter] = value;
          counter++;
        }
        newArray1.pop();
        newArray1.pop();
        newArray1.push(tmpX);
        newArray1.push(tmpY);
        s1 = newArray1.join(" ");
        s1 = s1.replace(/\sC/g, "C").replace(/\sS/g, "S");
        newArray2.splice(2, 2);
        counter = 0;
        for (_k = 0, _len3 = newArray2.length; _k < _len3; _k++) {
          value = newArray2[_k];
          value.toString;
          if (counter === 0) value = "C" + value;
          if (counter > 5 && (counter - 2) % 4 === 0) value = "S" + value;
          newArray2[counter] = value;
          counter++;
        }
        s2 = newArray2.join(" ");
        s2 = s2.replace(/\sC/g, "C").replace(/\sS/g, "S");
        s = s1 + s2 + "Z";
        return s;
      };

      return ConicalPath;

    })();
  });

}).call(this);
