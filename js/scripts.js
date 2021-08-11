$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const fullName = firstName + " " + lastName;

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".fullName").text(fullName);

    $("#letter").show();

    event.preventDefault();
  });
});