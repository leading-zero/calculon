(function(){ //https://flaviocopes.com/javascript-iife/ JS IIFE

  //select input class and on click pass it's html to the updateDisplay function
  $('.input').click(function() {

      updateDisplay($(this).html()); // $(this) = $('.input')

  });

  //select plusMinus id and on click pass it's html to the plusMinus function
  $('#plusMinus').click(function () {

    plusMinus($(this).html());

  });

  //select clear id and on click pass it's html to the clear function
  $('#clear').click(function () {

    clear($(this).html());

  });

  //select decimal id and on click pass it's html to the decimal function
  $('#decimal').click(function () {

    decimal($(this).html());

  });

  //select key--operator class and on click pass it's html to the operation function
  $('.key--operator').click(function () {

    operation($(this).html());

  });

  //select equals id and on click pass it's html to the calculon function
  $('#equals').click(function () {

    calculon($(this).html());

  });

// TODO handle case where operator has been selected already

// updateDisplay function
  function updateDisplay(nextNumber) {
    const display = $('#disp'); //create const for display div
    const counter = $('#counter'); //create const for hidden counter div
    const previousValue = $('#previousValue').val();

    // logic for determining if operator should be locked (*I think?!*)
    if ($('#counter').val() === '0' && previousValue !== "") { //if counter value is equal to 0 AND previousValue is not equal to an empty string
      display.html('0'); // set display to 0
      counter.val('1'); // set counter value to 1
      $('.key--operator').prop("disabled", true); // add disabled property to .key--operator class
    }

  /*

  1 check to see if previousValue is set & check to see if value is equal to zero
  3 set display to 0 / set counter to 1
  4 disable other operators

   */

    if (display.html() === '0' || $('#counter').val() === '1') { // if display is equal to 0 then
      console.log('#counter'.val);

      display.html(nextNumber); // pass nextNumber to display (override the zero)

    } else { // otherwise

      var currentValue = display.html(); //create currentValue variable and store display html
      display.html(currentValue + nextNumber); // add nextNumber to currentValue in display

    }

  }

  // positive/negative function
  function plusMinus() {

    const display = $('#disp'); // create const for display
    var currentValue = display.html(); // create currentValue variable to store display content

    if (currentValue[0] === '-') { // check to see if the first character of the currentValue string is equal to -
      display.html(currentValue.substr(1)); // if true, then display the currentValue string from the second character
    } else {
      display.html('-' + currentValue); //otherwise add a - to the beginning of the currentValue string
    }
  }

  // decimal function
  function decimal() {

    const display = $('#disp'); // create const display from #disp id
    var currentValue = display.html(); // create variable currentValue and store display's html content

    var regex = /[^\.]/g; // create regex variable - search string for first '.' (\backslash to escape .)

    if (currentValue.replace(regex, '').length === 0) { // replace '.' with '' in currentValue and if the length of currentValue is equal to zero (ie: there are leftover values after the '.' is removed from the string)
      display.html(currentValue + '.') // add a '.' to the display
    }
  }

  //clear display function
  function clear() {
    const display = $('#disp'); // create const display by selecting #disp id

    display.html('0'); // set display to 0

    $('#previousValue').val(''); // set previousValue to empty string
    $('#counter').val('0'); // set counter to zero
    $('.key--operator').prop("disabled", false); // remove disabled property from .key--operator class
  }

  // operator function - pass in operator variable from ~line 138
  function operation(operator) {

    $('#operator').val(operator); // select operator id and store value of operator in it. operator = $(this).html()
    $('#previousValue').val($('#disp').html()); // select previousValue id and store display contents in it

  }

  function calculon() {
    var previousVal = parseInt($('#previousValue').val()); // create previousVal variable, use parseInt to turn the value of #previousValue into an integer
    var currentVal = parseInt($('#disp').html()); // create currentVal variable, use parseInt to turn the value of #disp into an integer
    var operator = $('#operator').val(); // create operator variable, store the value of the #operator's button

    switch (operator) { //create switch and pass in operator variable from above

      case '+': //case if + is pressed
         $('#disp').html(previousVal + currentVal); //add
         break;

      case '-': //case if - is pressed
        $('#disp').html(previousVal - currentVal); // subtract
        break;

      case 'x': //case if x is pressed
        $('#disp').html(previousVal * currentVal); // multiply
        break;

      case '÷': //case if ÷ is pressed
        $('#disp').html(previousVal / currentVal); // divide
        break;

      default:
        break;

    }
    $('#previousValue').val("");


    $('.key--operator').prop("disabled", false); // remove disabled class from operator keys

  }

  /* testing RSA Key */


})()
