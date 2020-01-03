(function(){ //https://flaviocopes.com/javascript-iife/ JS IIFE

  $('.input').click(function() { //select input class and on click run this function

    updateDisplay($(this).html());

  });

  $('#plusMinus').click(function () {

    plusMinus($(this).html());

  });

  $('#clear').click(function () {

    clear($(this).html());

  });

  $('#decimal').click(function () {

    decimal($(this).html());

  });

  $('.key--operator').click(function () {

    operation($(this).html());

  });

  $('#equals').click(function () {

     calculon($(this).html());

  });



//document.getElementById("equals").addEventListener("click", function() { ans(); });

// TODO handle case where operator has been selected already

// update string function
  function updateDisplay(nextNumber) {
    const display = $('#disp');
    const counter = $('#counter')

    if ($('#counter').val() === '0' && $('#previousValue').val() !== "") {
      display.html('0');
      counter.val('1');
      $('.key--operator').prop("disabled", true);
    }


  /*

  1 check to see if previousValue is set & check to see if value is equal to zero
  3 set display to 0 / set counter to 1
  4 disable other operators

   */

    if (display.html() === '0') {
      display.html(nextNumber);
    } else {

      var currentValue = display.html();
      display.html(currentValue + nextNumber);
    }

  }

  function plusMinus() {

    const display = $('#disp');
    var currentValue = display.html();

    if (currentValue[0] === '-') {
      display.html(currentValue.substr(1));
    } else {
      display.html('-' + currentValue);
    }
  }

  function clear() {
    const display = $('#disp');

    display.html('0');

    $('#previousValue').val('');
    $('#counter').val('0');
    $('.key--operator').prop("disabled", false);
  }

  function decimal() {

    const display = $('#disp');
    var currentValue = display.html();

    var regex = /[^\.]/g;

    if (currentValue.replace(regex, '').length === 0) {
      display.html(currentValue + '.')
    }
  }

  function operation(operator) {


    $('#operator').val(operator);
    $('#previousValue').val($('#disp').html());

    /*

    1. store current value of display
    2. store operator in variable
    3.

     */
  }

  function calculon() {
    var previousVal = parseInt($('#previousValue').val());
    var currentVal = parseInt($('#disp').html());
    var operator = $('#operator').val();

    console.log(operator)
    switch (operator) {

      case '+':
         $('#disp').html(previousVal + currentVal);
        break;

      default:
        break;

    }

  }

  /* testing RSA Key */


})()
