var PieDancer = function(top, left, timeBetweenSteps) {
  //debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pieDancer');
  this.mouseOver(PieDancer.prototype.disappear);
  this.name = 'pieDancer';
};

PieDancer.prototype = Object.create(Dancer.prototype);
PieDancer.prototype.constructor = PieDancer;

PieDancer.prototype.lineUp = function () {
  this.setPosition(50, this.left);
};

PieDancer.prototype.disappear = function() {
  this.$node.slideToggle();
};
