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
      services: 'N Q R',
      name: "BMT Broadway Line",
};

var destinations = [];
destinations.push(bmtBroadWayLine);

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
