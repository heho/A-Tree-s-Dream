(function() {
  var imports;

  imports = ["game/Game"];

  define(imports, function(Game) {
    var atd;
    atd = new Game;
    return atd.run();
  });

}).call(this);
