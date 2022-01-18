$(document).ready(function() {
  $("form#favorites").submit(function(event) {
    event.preventDefault();
    const favoriteThings = [$("input#color").val(), $("input#food").val(), $("input#drink").val(), $("input#movie").val(), $("input#hobby").val()];
    const favoriteOtherThings = [];
    favoriteOtherThings.push(favoriteThings[2], favoriteThings[1], favoriteThings[0]);

    favoriteOtherThings.forEach(function(things) {
      $("#output").append("<li>" + things + "</li>");
    });
  });
});