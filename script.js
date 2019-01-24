

// Javascript added to the Travel website.

var input = document.getElementById ('submit');
console.log (input);

window.onload=function(){
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
}


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

//   var contactBody = document.getElementById('contact');

//       console.log(contactBody);




    function tableCreate() {



        //body reference 
        var contactBody = document.getElementById('contact');
        console.log(contactBody);

        // //create header
        

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
        //Make text node the contents of <td> element
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

      






