puzzle = function(inputString) {
    var newString = inputString.replace(/[aeiou]/gi, '-');
    return newString
}

$(document).ready(function(){
  $("#puzzleText").submit(function(event){
    // debugger;
    var inputString =$("#inputString").val();
    var resolvedString = puzzle (inputString);
    // location.href = "puzzleOutput.html";
    $(".calculated").text(resolvedString);

    $( '#puzzleText' ).each(function(){
      this.reset();
    });
    event.preventDefault();
  });
});
