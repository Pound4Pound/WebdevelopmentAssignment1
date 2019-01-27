// Javascript added to the Travel website.

var input = document.getElementById ('submit');
console.log (input);

window.onload = function(){
input.addEventListener ("click", function(){
  console.log (input);
    alert("Are you sure you want to submit?");

} );


input = document.getElementById ('resetForm');
console.log (input);

input.addEventListener ("click", function(event){
    console.log (event);
    alert("Are you sure you want to reset?");

} );
};

 //code to show instructions regarding input when field is focused

 var fieldFocus = document.getElementById('name1');
 var fieldInstruction = document.getElementById('firstNameInstr');
 
 console.log(fieldFocus);
 console.log(fieldInstruction);
 
 
 fieldFocus.addEventListener('focus', showInstruction);

function showInstruction(){
  fieldInstruction.style.display = "block"
};

if (fieldFocus != 'focus'){
fieldFocus.removeEventListener('focus', showInstruction);
};

var images = ['img/harley1.jpg', 
                  'img/Joker2.jpg',
                  'img/old-lady-harley-quinn.jpg',
                  'img/old_man_joker_by_djdyme-d9kevep.jpg'
                ];

var imageDesc = ['pretty girl',
                   'handsome boy',
                   'old woman',
                   'old man'
                ];

// URLs used to link agents to profiles
// each agent will be a specialist to a region i.e. Southeast Asia, Japan, China, Thailand
var webLinks = ['https://www.japan.travel/en/',  
                'https://www.tourismthailand.org/home',
                'http://www.tourism.gov.ph/',
                'http://www.travelchina.gov.cn/en/index/index.shtml'

]




    function tableCreate() {

        //body reference 
        var contactBody = document.getElementById('contact');
        console.log(contactBody);

        // create elements <table> and a <tbody>
        var tbl = document.createElement('table');
        var tblBody = document.createElement('tbody');
      
        // header creation

        var th1 = document.createElement('th');
        var imageHeader = document.createTextNode('Images');
        th1.appendChild(imageHeader);
        tblBody.appendChild(th1);

        var th2 = document.createElement('th');
        var descriptionHeader = document.createTextNode('Descriptions');
        th2.appendChild(descriptionHeader);
        tblBody.appendChild(th2);
        
        for (var j = 0; j < images.length; j++) {
        // row creation
          var row = document.createElement('tr');

        // create element <td> and text node 
        //Make image the contents of <td> element
          var cell = document.createElement('td');
          var image = document.createElement('img');
          image.src = images[j];
          cell.appendChild(image);
          row.appendChild(cell);
      
          for (var i = 0; i < 1; i++) {
            //table column creation
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table column
            var cell = document.createElement('td');
            
            //var cellText = document.createTextNode('cell is row ' + j + ', column ' + i);
            var cellText = document.createTextNode(imageDesc[j]);

            cell.appendChild(cellText);
            row.appendChild(cell);
          }
                 
          //row added to end of table body
          tblBody.appendChild(row);
        }
      
        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        contactBody.appendChild(tbl);
        // tbl border attribute to 
        tbl.setAttribute('border', '3');
      }

      tableCreate()
      //found an example of table creation on stack overflow
      //was able to modify javascript example on: M.A.K. Ripon
      //https://stackoverflow.com/questions/14643617/create-table-using-javascript
      //unclear on how to fix  line 108 error: body.appendChild(tbl);
      //without line 108, table is not created

// });

// if(fieldFocus.addEventListener('focus',function(event)
// {
//   //document.getElementById('name1').style.display = block;
//   fieldInstruction.style.display = "block";
// }



// fieldFocus.addEventListener('focus')



// function myFunction(fieldInstruction) {
//   fieldInstruction.style.display = "block"
// }

//fieldInstruction.style.setAttribute('')


//imgKitten.setAttribute('src', 'http://placekitten.com/g/600/500'); 

// if (document.myform.firstname.focus()){

//   document.myform.firstNameInstr.style.display = "block";
// };


// var f = function(){

//   var focusField = function(event){
//     var formInstruction = document.getElementById("firstNameInstr");
//     formInstruction.style.display = "block";
//   };
  
    
//   }


// focusField.addEventListener('focus', focusField, false);
// focusField.addEventListener('blur', focusField, false);




      //add a listener to present instructions to fields when focused on

      // var f = function(){

      //   var focusEventHandler = function(event){

      //       var divElement = document.getElementById('credentials')[0];
      //       divElement.sty
      //   }

      // }










      // var formInstruction = document.getElementById("name1");

      // formInstruction.addEventListener("onfocus", function(event){
      //   //focus will display instructions for selected field.
      //   if( formInstruction)
      //   {
      //     firstNameInstr.style.display = "block";
      //   }

      // })

      // document.myform.name1.onfocus = function(){
      //   if("focus") {
      //     firstNameInstr.style.display = "block";
      //   }  

      // }

   

  

      






