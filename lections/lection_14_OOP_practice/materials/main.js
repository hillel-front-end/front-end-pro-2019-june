function SuperArray (n, m, opt) {
  var mass = new Array(n);

    for (var i = 0; i < mass.length; i++) {
      mass[i] = new Array(m);

      for (var j = 0; j < mass[i].length; j++) {
        mass[i][j] = Math.round(Math.random() * (opt.max - opt.min) + opt.min );
      }
    }

    this.mass = mass;
}

SuperArray.prototype.rander = function (separator) {
  var mass = this.mass;
  separator = separator || '@@@@@@@@@@';

  document.write('<br>')

  for (var i = 0; i < mass.length; i++) {
    for (var j = 0; j < mass[i].length; j++) {
      document.write(mass[i][j] + ' ')
    }
    document.write('<br>')
  }

  document.write(separator)

  for(var i = 0; i < mass.length; i++) {
    document.write(separator + "" + separator)
  }

}
var foo = new SuperArray(5, 5, { min: 10, max: 55 });

foo.rander("!");
foo.rander("!");

console.log(foo, 'foo');


var game = new SuperArray(10, 10, { min: 10, max: 55 });

game.rander();
game.rander()