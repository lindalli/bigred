var lines=[];
/*
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "zip_codes_states.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});
*/

jQuery.get('zip_code_states.csv', fucntion(data) {alert(data);});
  //$('#div').html(data.replace('n', '<br />'));
//});

function readFile() {
  var reader= new FileReader();
  reader.onload=function(e) {
    var text=reader.result;
    processData(text);
  }
  reader.readAsText("./zip_codes_states.csv");
}


function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        lines.push(data);
    }
    // alert(lines);
}

function findZip(zipcode) {
  for (var i=0; i<lines.length; i++) {
    if (lines[i][0]==zipcode) {
      var arry=[];
      arry.push(lines[i][1]);
      arry.push(lines[i][2]);
      return arry;
    }
  }
}

readFile();
var latlong=findZip("95120");
console.log(latlong[0]);
console.log(latlong[1]);