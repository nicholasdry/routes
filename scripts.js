// scripts

var bmtBroadWayLine = {
      color: 'yellow',
      poi: ['times square', 'south ferry', 'union square', 'canal street'],
      services: 'N Q R',
      name: "BMT Broadway Line",
};

var secondAveLine = {
      color: 'blue',
      poi: ['grand central', 'lexington avenue'],
      services: 'Q T',
      name: "Second Avenue Subway",
};

var sixthAveLine = {
      color: 'orange',
      poi: ['rockefeller center', 'bryant park', 'broadway'],
      services: 'B D F M',
      name: 'IND Sixth Avenue Line'
};

var destinations = [];
destinations.push(bmtBroadWayLine);
destinations.push(secondAveLine);
destinations.push(sixthAveLine);

function findDestination() {

      var lines = [];

      for (var i = 0; i < destinations.length; i++) {
            for (var j = 0; j < destinations[i].poi.length; j++) {
                  if (destinations[i].poi[j] == document.getElementById("dest-entry").value) {
                        lines.push(destinations[i].name)
                        break;
                  }
            }
      }

      if (lines.length == 0) {
            document.getElementById('output').innerHTML = "Check spelling or re-enter destination.";
      } else {
            document.getElementById('output').innerHTML = "You can take any of the follow lines: " + lines;
      }

}
