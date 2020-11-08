$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //debugger;
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });

  $('.lineUpButton').on('click', function(event) {
    // loop through our dancers array
    for (var i = 0; i < window.dancers.length; i++) {
      // implement line up method on each dancer
      window.dancers[i].lineUp();
    }
  });

  $('.avoidTurkeyButton').on('click', function(event) {
    //find all turkeys in window.dancers
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].name === 'turkeyDancer') {
        var turkey = window.dancers[i];

        for (var t = 0; t < window.dancers.length; t++) {
          if (window.dancers[t].name !== 'turkeyDancer') {
            var nonTurkey = window.dancers[t];

            console.log(turkey.getDistance(turkey, nonTurkey));

            if (turkey.getDistance(turkey, nonTurkey) < 50) {
              nonTurkey.$node.css('display', 'none');
            }
          }
        }

      }
    }
  });
});

