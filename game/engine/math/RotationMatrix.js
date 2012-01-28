(function() {
  var imports;

  imports = ["game/enine/math/Vector"];

  define(imports, function(Vector) {
    var RotationMatriix;
    return RotationMatriix = (function() {

      function RotationMatriix(angle) {
        var a, b, _ref, _ref2, _ref3;
        this.column1 = new Vector(0.0, 0.0);
        this.column2 = new Vector(0.0, 0.0);
        _ref = [Math.sin(angle), Math.cos(angle)], a = _ref[0], b = _ref[1];
        _ref2 = [b, -a], this.column1.x = _ref2[0], this.column2.x = _ref2[1];
        _ref3 = [a, b], this.column1.y = _ref3[0], this.column2.y = _ref3[1];
      }

      return RotationMatriix;

    })();
  });

}).call(this);
