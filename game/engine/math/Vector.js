(function() {
  var imports;

  imports = [];

  define(imports, function() {
    var Vector;
    return Vector = (function() {

      function Vector(x, y) {
        this.x = x;
        this.y = y;
        console.log("new Vector with x: " + this.x + " and y: " + this.y + " created");
      }

      Vector.prototype.set = function(x, y) {
        var _ref;
        _ref = [x, y], this.x = _ref[0], this.y = _ref[1];
        return this;
      };

      Vector.prototype.copyValues = function(vector) {
        var _ref;
        _ref = [vector.x, vector.y], this.x = _ref[0], this.y = _ref[1];
        return this;
      };

      Vector.prototype.add = function(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
      };

      Vector.prototype.subtract = function(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
      };

      Vector.prototype.multiply = function(multiplicator) {
        this.x *= multiplicator;
        this.y *= multiplicator;
        return this;
      };

      Vector.prototype.length = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      };

      Vector.prototype.normalize = function() {
        var length;
        length = this.length();
        if (length < Number.MIN_VALUE) {
          this.set(0, 0);
          return null;
        }
        this.x /= length;
        this.y /= length;
        return this;
      };

      Vector.prototype.isValid = function() {
        return isFinite(this.x) && isFinite(this.y);
      };

      return Vector;

    })();
  });

}).call(this);
