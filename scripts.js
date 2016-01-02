// scripts

var bmtBroadWayLine = {
      color: 'yellow',
      poi: ['times square', 'south ferry', 'union square', 'canal street'],
      services: 'N Q R',
      name: "Broadway Line",
      stops: function showStops() {

      }
};
destinations.push(bmtBroadWayLine);

var secondAveLine = {
      color: 'blue',
      poi: ['grand central', 'lexington avenue'],
      services: 'Q T',
      name: "Second Avenue Subway",
      stops: function showStops() {

      }
};
destinations.push(secondAveLine);

var sixthAveLine = {
      color: 'orange',
      poi: ['rockefeller center', 'bryant park', 'broadway'],
      services: 'B D F M',
      name: 'Sixth Avenue Line',
      stops: function showStops() {

      }
};
destinations.push(sixthAveLine);

var 42streetShuttle = {
      color: 'grey',
      poi: ['times square', 'grand central'],
      services: 'S',
      name: '42nd Street Shuttle',
      stops: function showStops() {

      }
};
destinations.push(42streetShuttle);

var sixthAveLine = {
      color: 'orange',
      poi: ['rockefeller center', 'bryant park', 'broadway'],
      services: 'B D F M',
      name: 'IND Sixth Avenue Line',
      stops: function showStops() {

      }
};
destinations.push(sixthAveLine);

var 63streetLine = {
      color: 'orange',
      poi: ['roosevelt island', 'lexington avenue'],
      services: 'F',
      name: '63rd Street Line',
      stops: function showStops() {

      }
};
destinations.push(63streetLine);

var sixthAveLine = {
      color: 'red',
      poi: ['columbia university', 'columbus circle', 'times square', 'penn station', 'canal street', 'south ferry'],
      services: '1 2 3',
      name: 'Broadway -- Seventh Avenue Line',
      stops: function showStops() {

      }
};
destinations.push(63streetLine);


var canarsieLine = {
      color: 'gray',
      poi: ['broadway junction'],
      services: 'L',
      name: 'Canarsie Line',
      stops: function showStops() {

      }
};
destinations.push(canarsieLine);

var concourseLine = {
      color: 'orange',
      poi: ['tremont avenue'],
      services: 'B D',
      name: 'Concourse Line',
      stops: function showStops() {

      }
};
destinations.push(concourseLine);

var flushingLine = {
      color: 'purple',
      poi: ['grand central', 'times square', 'fifth avenue'],
      services: 'B D',
      name: 'Flushing Line',
      stops: function showStops() {

      }
};
destinations.push(flushingLine);

var lenoxAveLine = {
      color: 'red',
      poi: ['harlem', 'central park'],
      services: '2 3',
      name: 'Lenox Avenue Line',
      stops: function showStops() {

      }
};
destinations.push(lenoxAveLine);

var lexingtonAveLine = {
      color: 'green',
      poi: ['grand central', 'union square', 'canal street', 'south ferry'],
      services: '4 5 6',
      name: 'Lexington Avenue Line',
      stops: function showStops() {

      }
};
destinations.push(lexingtonAveLine);

var nassauStreet = {
      color: 'brown',
      poi: ['chambers street', 'canal street'],
      services: 'J Z',
      name: 'Nassau Street Line',
      stops: function showStops() {

      }
};
destinations.push(nassauStreet);

var queensBoulevard = {
      color: 'black',
      poi: ['lexington avenue'],
      services: 'E F M R',
      name: 'Queens Boulevard Line',
      stops: function showStops() {

      }
};
destinations.push(queensBoulevard);

var destinations = [];

function findDestination() {

      var lines = [];

      for (var i = 0; i < destinations.length; i++) {
            for (var j = 0; j < destinations[i].poi.length; j++) {
                  if (destinations[i].poi[j] == document.getElementById("dest-entry").value) {
                        lines.push(destinations[i].name + " (" + destinations[i].services + ") ");
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
