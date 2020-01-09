
$(function(){
  $("#profile-right").hide().fadeIn(1000)
  $(".categories").hide().fadeIn(1300);
 });


// Animate social media icons too

$(function() {
   
    $(function() {

    let phrases = ['a web developer.', 'an innovator.', 'an advocate.', 'whimsical!'];
    let description = document.getElementsByTagName('span')[0];
    let phraseIndex = 1;

    var resetAnimation = function() {
      description.classList.remove('turn');
    }

    setInterval(function(){
        switch (phraseIndex) {
          case 0:
            description.classList.add('turn');
            description.textContent = phrases[phraseIndex];
            phraseIndex = 1;
            setTimeout(resetAnimation, 1000);
          break;

          case 1:
            description.classList.add('turn');
            description.textContent = phrases[phraseIndex];
            phraseIndex = 2;
            setTimeout(resetAnimation, 1000);
          break;

          case 2:
            description.classList.add('turn');
            description.textContent = phrases[phraseIndex];
            phraseIndex = 3;
            setTimeout(resetAnimation, 1000);
          break;

          case 3:
            description.classList.add('turn');
            description.textContent = phrases[phraseIndex];
            phraseIndex = 0;
            setTimeout(resetAnimation, 1000);
          break;
        }
    },2000)
}());
})



// Write a script that says when the page loads, the right div fades in




//animate all headers, .categories/ on hover something happens

/*
$(function(){
  $(".categories").hover(function(){
    $(this).fadeIn("slow");
  
  });
});

*/


/*
allows us to execute a function when the document is fully loaded. 
$(document).ready(function(){
  $("button").click(function(){
    var div = $("div");  
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
  });
}); 

_____________________________________


$("#p1").hover(function(){
  alert("You entered p1!");
},
function(){
  alert("Bye! You now leave p1!");
});




*/