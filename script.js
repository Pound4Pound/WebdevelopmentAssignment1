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

        for (var j = 0; j < images.length; j++) {
        // row creation
          row = document.createElement('tr');

        // create element <td> and text node 
        //Make image the contents of <td> element
          cell = document.createElement('td');
          image = document.createElement('img');
          image.src = images[j];

          
          cell.appendChild(image);
          row.appendChild(cell);
      
          for (var i = 0; i < 1; i++) {
            //table column creation
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table column
            cell = document.createElement('td');
            
            //var cellText = document.createTextNode('cell is row ' + j + ', column ' + i);
            cellText = document.createTextNode(imageDesc[j]);

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
      

//code to show instructions regarding input when field is focused


var fieldFocus = document.getElementById('name1');
var fieldInstruction = document.getElementById('firstNameInstr');
      
console.log(fieldFocus);
console.log(fieldInstruction);

if (fieldFocus !== null){

fieldFocus.addEventListener('focus', showInstruction);



};

function showInstruction(){
  fieldInstruction.style.display = "block";
};

// if (fieldFocus !== null){
// fieldFocus.removeEventListener('focus', showInstruction);

// for (var j = 0; j < images.length; j++) {
