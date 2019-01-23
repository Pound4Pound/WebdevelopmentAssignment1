

// Javascript added to the Travel website.

var input = document.getElementById ('submit');
console.log (input);

input.addEventListener ("click", function(event){
    console.log (event);
    alert("Are you sure you want to submit?");

} );


input = document.getElementById ('reset');
console.log (input);

input.addEventListener ("click", function(event){
    console.log (event);
    alert("Are you sure you want to reset?");

} );

