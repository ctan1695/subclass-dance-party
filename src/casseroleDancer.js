var CasseroleDancer = function(top, left, timeBetweenSteps) {
  //debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('casseroleDancer');
  this.name = 'casseroledancer';
};

CasseroleDancer.prototype = Object.create(Dancer.prototype);
CasseroleDancer.prototype.constructor = CasseroleDancer;

CasseroleDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};

CasseroleDancer.prototype.lineUp = function () {
  this.setPosition(this.top, 1200);
};