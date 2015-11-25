$(document).ready(function() {
// The date picker 
$('.datepicker').pickadate()

$('.carousel').carousel()

  $('#myButton').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
  })
