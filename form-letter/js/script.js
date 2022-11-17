$(document).ready(function() {
   console.log("script executing");
   $("#formOne").submit(function(event) {
      event.preventDefault()
    console.log("Submit form successfully reached");
    const day1Input = $("input#day1").val();
    const day2Input = $("input#day2").val();
    const day3Input = $("input#day3").val();
    const day4Input = $("input#day4").val();
    const day5Input = $("input#day5").val();
    const day6Input = $("input#day6").val();
    console.log(day6Input)
    $(".day1").text(day1Input);
    $(".day2").text(day2Input);
    $(".day3").text(day3Input);
    $(".day4").text(day4Input);
    $(".day5").text(day5Input);
    $(".day6").text(day6Input);

    $("#story").show();  
  })
})