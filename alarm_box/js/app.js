function animateClockTick (oldNumber, newNumber) {
  var animateFunction = function () {
    d3.select(this)
      .text(oldNumber)
      .transition()
      .duration(1000)
      .text(newNumber)
      .transition()
      .duration(1000)
      .text(oldNumber)
      .each('end', animateFunction);
  };
  return animateFunction;
}

// when document is ready
window.addEventListener('load', function () {
  d3.xml('img/nums.svg', 'image/svg+xml', function (error, data) {
    // Append the SVG node to the DOM
    d3.select('#clock-div').node().appendChild(data.documentElement);

    var svg = d3.select('svg');
    var appScreen = svg.select('#Page-1');
    var clockNums = svg.selectAll('.clock-number tspan');

    // Get width and height directly from the file, so
    // you can change them on the SVG and they will automatically
    // be updated in the code
    var screenWidth  = +appScreen.attr('width'),
        screenHeight = +appScreen.attr('height');


    appScreen.width = Math.floor(screenWidth / 2);
    appScreen.height = Math.floor(screenHeight / 2);

    // var appButton    = svg.select('')
    
    var firstNum = d3.select('.clock-number tspan')
    var initNumber = firstNum.text();

    // clockNums.each(animateClockTick(initNumber, '7'));

    // ON CLICK up the number if it hits 9 reset to 0

    // Event handlers for clockNums
    clockNums.on('click', function(d) {
      var clickedNum = d3.select(this);

      // get this text
      var currentNum = +clickedNum.text();

      // update
      clickedNum.text(function() {
        if (currentNum < 9) {
          return String(currentNum + 1);
        } else {
          return '0';
        }
      });

      return;
    });

  });
});