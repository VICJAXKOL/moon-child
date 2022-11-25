$(document).ready(function(){
    $("#character").submit(function(event){
      event.preventDefault();
      const option1 = $("input:radio[name=question1]:checked").val();
      const option2 = $("input:radio[name=question2]:checked").val();
      const option3 = $("input:radio[name=question3]:checked").val();
      const option4 = $("input:radio[name=question4]:checked").val();

      if(option1 ==="yes" && option2 === "yes" && option3 === "no" && option4 === "no"){
        $("#harry").text("Harry Potter");
        $(".potter").show(3000)
      }else if(option1=== "yes" && option2=== "no" && option3=== "yes" && option4=== "no"){
        $("#micheal").text("Micheal Scofield");
        $(".micheal").show(3000)
      }else if(option1=== "no" && option2=== "yes" && option3=== "no" && option4=== "yes"){
        $("#selena").text("Selena Gomez");
        $(".selena").show(3000)
      }else if(option1=== "no" && option2=== "no" && option3=== "yes" && option4=== "yes"){
        $("#myers").text("Micheal Myers");
        $(".myers").show(3000)
      }
    });
});