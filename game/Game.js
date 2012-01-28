(function() {
  var imports;

  imports = ["game/engine/math/Vector", "game/util/Debug"];

  define(imports, function(Vector, Debug) {
    var Game;
    return Game = (function() {

      function Game() {
        this.canvas = Raphael(0, 0, 640, 480);
      }

      Game.prototype.run = function() {
        var v1, v2;
        v1 = new Vector(12, 23.6);
        return v2 = new Vector(14, 16);
      };

      return Game;

    })();
  });

}).call(this);
