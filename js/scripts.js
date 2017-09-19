$(document).ready(function() {
  $("#formOne").submit(function(event) {
    // debugger;
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    var output = [];
    var sentenceInput = $("input#sentence").val().split("");
    var vowelFound = false;

    sentenceInput.forEach(function(letter) {
      for (var i = 0; i <= vowels.length; i++) {
        if (letter == vowels[i]) {
          output.push("-");
          vowelFound = true;
          // return;
        } else {
          // return;
        }
      }
      if (!vowelFound) {
        output.push(letter);
      }
      vowelFound = false;
    });

    alert(output.join(""));

    event.preventDefault();
  });
});
