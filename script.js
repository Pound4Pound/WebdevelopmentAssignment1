// Javascript added to the Travel website.

var input = document.getElementById ('submit');
console.log (input);

if (input !== null){
input.addEventListener ("click", function(){
  console.log (input);
    alert("Are you sure you want to submit?");
} 
)};


input = document.getElementById ('resetForm');
console.log (input);

if (input !== null){
input.addEventListener ("click", function(event){
    console.log (event);
    alert("Are you sure you want to reset?");

} 
)};

var images = ['img/harley1.jpg', 
                  'img/Joker2.jpg',
                  'img/old-lady-harley-quinn.jpg',
                  'img/old_man_joker_by_djdyme-d9kevep.jpg'
                ];

var imageDesc = ['Primary Japan Travel Agent',
                 'Primary Thailand Travel Agent',
                 'Primary Philippines Travel Agent',
                 'Primary China Travel Agent'
                ];

// URLs used to link agents to profiles
// each agent will be a specialist to a region i.e. Southeast Asia, Japan, China, Thailand
var webLinks = ['https://www.japan.travel/en/',  
                'https://www.tourismthailand.org/home',
                'http://www.tourism.gov.ph/',
                'http://www.travelchina.gov.cn/en/index/index.shtml'
];





  tableCreate();

  

    function tableCreate() {
      var tbl;
      var contactBody; 
      var tblBody;


        //body reference 
        contactBody = document.getElementById('contact');
        console.log(contactBody);

        // create elements <table> and a <tbody>
        tbl = document.createElement('table');
        console.log(tbl);

        tblBody = document.createElement('tbody');
      
        // header creation

        var th1 = document.createElement('th');
        var imageHeader = document.createTextNode('Images');
        th1.appendChild(imageHeader);
        tblBody.appendChild(th1);

        var th2 = document.createElement('th');
        var descriptionHeader = document.createTextNode('Descriptions');
        th2.appendChild(descriptionHeader);
        tblBody.appendChild(th2);
        
      var cell;
      var image;
      var row;
      var cellText;
      var webPageAnchor;

        for (var j = 0; j < images.length; j++) {
        // row creation
          row = document.createElement('tr');

        // create element <td> and text node 
        //Make image the contents of <td> element
          cell = document.createElement('td');
          webPageAnchor = document.createElement('a');
          webPageAnchor.href = webLinks[j];

          image = document.createElement('img');
          image.src = images[j];
          image.style.maxWidth = '15em';

          
          
          
//          var infoWindow = window.open("")
          
          webPageAnchor.appendChild(image);
          cell.appendChild(webPageAnchor)
          row.appendChild(cell);
      
          for (var i = 0; i < 1; i++) {
            //table column creation
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table column
            cell = document.createElement('td');
            
            //var cellText = document.createTextNode('cell is row ' + j + ', column ' + i);
            cellText = document.createTextNode(imageDesc[j]);

            cell.style.backgroundColor = 'lightblue';

            cell.appendChild(cellText);
            row.appendChild(cell);

          }
                 
          //row added to end of table body
          tblBody.appendChild(row);
        }
      
        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);

        // error check for null value of the document element () as an error was returning a null value
        if (contactBody !== null) {

        // put <table> in the <body>
          contactBody.appendChild(tbl);
        } else console.log("aaaaa");


        // tbl border attribute to 
        tbl.setAttribute('border', '3');
      };
     
      //found an example of table creation on stack overflow
      //was able to modify javascript example by M.A.K. Ripon:
      //https://stackoverflow.com/questions/14643617/create-table-using-javascript
      









                            /*          Second attempt to reference to display and hide fields. In this section I tried to reference the 
                                        fields by getElementsByClassName. I misread the instructions and was toggling
                                        messages with an 'addEventListener' action.  I re-read the instructions and modified my CSS style
                                        sheet to hide instructions and set information into a stack.



                            */

                            //first name field
                            //code to 'show instructions' when field becomes focused
                            //var fieldFocus = document.getElementById('name1');
                            //var fieldInstruction = document.getElementById('firstNameInstr');

                            // var fieldFocus = document.getElementsByClassName('inputs')[0];
                            // var fieldInstruction = document.getElementsByClassName('instruction')[0];

                            // console.log(fieldFocus);
                            // console.log(fieldInstruction);

                            // if (fieldFocus !== null){
                            // fieldFocus.addEventListener('focus', showInstruction);
                            // }; 

                            // if (fieldFocus !== null){
                            // function showInstruction(){
                            //   fieldInstruction.style.display = "block";
                            //   console.log(fieldFocus);
                            //   console.log(fieldInstruction);
                            // };
                            // }

                            // //code to 'show instructions' when field becomes blurred

                            // fieldFocus.addEventListener('blur', hideInstruction);

                            // if (fieldFocus !== null){
                            // function hideInstruction(){
                            //   fieldInstruction.style = "display:none";
                            //   console.log(fieldInstruction);
                            // }
                            // }



/*          First attempt to reference to display and hide fields. I misread the instructions and was toggling
            messages with an 'addEventListener' action.  I re-read the instructions and modified my CSS style
            sheet to hide instructions and set information into a stack.

*/


                //toggle focus for additonal field.  
                //last name field
                //code to 'show instructions' when field becomes focused
                var fieldFocus1 = document.getElementById('name1'),
                fieldFocus2 = document.getElementById('name2'),
                fieldFocus3 = document.getElementById('userPassword'),
                fieldFocus4 = document.getElementById('userStreetAddress'),
                fieldFocus5 = document.getElementById('userCity'),
                fieldFocus6 = document.getElementById('userProvince'),
                fieldFocus7 = document.getElementById('userPostCode');
                
                var fieldInstruction1 = document.getElementById('firstNameInstr'),
                fieldInstruction2 = document.getElementById('lastNameInstr'),
                fieldInstruction3 = document.getElementById('passwordInstr'),
                fieldInstruction4 = document.getElementById('AddressInstr'),
                fieldInstruction5 = document.getElementById('CityInstr'),
                fieldInstruction6 = document.getElementById('provinceInstr'),
                fieldInstruction7 = document.getElementById('postCodeInstr');

//1)First name field
                if (fieldFocus1 !== null){
                  fieldFocus1.addEventListener('focus', showInstruction1);
                  }; 
                  function showInstruction1(){
                    fieldInstruction1.style = "visibility:visible";
                  };
                  if (fieldFocus1 !== null){
                  fieldFocus1.addEventListener('blur', hideInstruction1);
                  function hideInstruction1(){
                    fieldInstruction1.style = "visibilty:hidden";
                  }};


//2)Last name field                
                if (fieldFocus2 !== null){
                fieldFocus2.addEventListener('focus', showInstruction2);
                }; 
                function showInstruction2(){
                  fieldInstruction2.style = "visibility:visible";
                };
                //code to 'show instructions' when field becomes blurred
                if (fieldFocus1 !== null){
                fieldFocus2.addEventListener('blur', hideInstruction2);
                function hideInstruction2(){
                  fieldInstruction2.style = "visibilty:hidden";
                }};

//3)password
                if (fieldFocus3 !== null){
                  fieldFocus3.addEventListener('focus', showInstruction3);
                  }; 
                  function showInstruction3(){
                    fieldInstruction3.style = "visibility:visible";
                  };
                  //code to 'show instructions' when field becomes blurred
                  if (fieldFocus1 !== null){
                  fieldFocus3.addEventListener('blur', hideInstruction3);
                  function hideInstruction3(){
                    fieldInstruction3.style = "visibilty:hidden";
                  }};


//4)Address              
                if (fieldFocus4 !== null){
                fieldFocus4.addEventListener('focus', showInstruction4);
                }; 
                function showInstruction4(){
                  fieldInstruction4.style = "visibility:visible";
                };
                //code to 'show instructions' when field becomes blurred
                if (fieldFocus1 !== null){
                fieldFocus4.addEventListener('blur', hideInstruction4);
                function hideInstruction4(){
                  fieldInstruction4.style = "visibilty:hidden";
                }}; 
//5)City              
                if (fieldFocus5 !== null){
                fieldFocus5.addEventListener('focus', showInstruction5);
                }; 
                function showInstruction5(){
                  fieldInstruction5.style = "visibility:visible";
                };
                //code to 'show instructions' when field becomes blurred
                if (fieldFocus1 !== null){
                fieldFocus5.addEventListener('blur', hideInstruction5);
                function hideInstruction5(){
                  fieldInstruction5.style = "visibilty:hidden";
                }};
//6)Province
                if (fieldFocus6 !== null){
                  fieldFocus6.addEventListener('focus', showInstruction6);
                  }; 
                  function showInstruction6(){
                    fieldInstruction6.style = "visibility:visible";
                  };
                  //code to 'show instructions' when field becomes blurred
                  if (fieldFocus1 !== null){
                  fieldFocus6.addEventListener('blur', hideInstruction6);
                  function hideInstruction6(){
                    fieldInstruction6.style = "visibilty:hidden";
                  }};
//7)Postal Code                
                if (fieldFocus7 !== null){
                fieldFocus7.addEventListener('focus', showInstruction7);
                }; 
                function showInstruction7(){
                  fieldInstruction7.style = "visibility:visible";
                };
                //code to 'show instructions' when field becomes blurred
                if (fieldFocus1 !== null){
                fieldFocus7.addEventListener('blur', hideInstruction7);
                function hideInstruction7(){
                  fieldInstruction7.style = "visibilty:hidden";
                }};
                
                
//check input of Postal Code

                var submitBtn = document.getElementById('submitBtn');
                // var postalCode = document.myform.userPostCode.value; 
                var postalCode = document.getElementById('userPostCode'); 
                console.log(postalCode);
                console.log(submitBtn);
                

                postalFilter(postalCode);  

                function postalFilter (postalCode) {


                  if (! postalCode) {
                    return null;
                  }
              
                  postalCode = postalCode.toString().trim();
              
                  var us = new RegExp("^\\d{5}(-{0,1}\\d{4})?$");
                  var ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);
              
                  if (us.test(postalCode.toString())) {
                      return postalCode;
                  }
              
                  if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
                      return postalCode;
                  }

                  return null;
              }

                if(submitBtn !== null){
                submitBtn.addEventListener("click", function(event){
    console.log(postalCode);
                  if (postalCode === null){
                   
                    event.preventDefault();
                    console.log('invalid entry');
                    }
                  })};
                                
//verify postal code
 
                  










// if (fieldFocus !== null){
//   while (fieldInstruction.style.display === "block"){
//     fieldFocus.addEventListener('blur', hideInstruction);
//     }
//     console.log(fieldInstruction);
// };

//console.log(fieldInstruction);

// if (fieldFocus !== null){
// fieldFocus.addEventListener('blur', hideInstruction);
// };

// function hideInstruction(){
//   fieldInstruction.style.display = "display:none";
// };


// fieldFocus.addEventListener('blur', hideInstruction) = function(){
  
//   if (!fieldFocus.style.display )  //field not in focus

// }



// if (fieldFocus !== null){
// fieldFocus.removeEventListener('focus', showInstruction);

// for (var j = 0; j < images.length; j++) {
