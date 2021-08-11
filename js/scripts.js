$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);

    event.preventDefault();
  });
});