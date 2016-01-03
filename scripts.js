// scripts

var destinations = [];

var bmtBroadWayLine = {
      color: 'yellow',
      poi: ['times square', 'south ferry', 'union square', 'canal street'],
      services: 'N Q R',
      name: "Broadway Line",
};
destinations.push(bmtBroadWayLine);

var secondAveLine = {
      color: 'blue',
      poi: ['125th Street (proposed)',
            '<br>Lexington Avenue Line',
            '<br>116th Street (proposed)',
            '<br>106th Street (proposed)',
            '<br>96th Street (under construction)',
            '<br>86th Street (under construction)',
            '<br>72nd Street (under construction)',
            '<br>63rd Street Lines',
            '<br>Broadway Line',
            '<br>55th Street (proposed)',
            '<br>Lexington Avenue – 53rd Street',
            '<br>Queens Boulevard Line',
            '<br>42nd Street (proposed)',
            '<br>Grand Central',
            '<br>34th Street (proposed)',
            '<br>23rd Street (proposed)',
            '<br>14th Street (proposed)',
            '<br>Third Avenue',
            '<br>Houston Street Second Avenue',
            '<br>Chrystie Street Connection (to Williamsburg Bridge)',
            '<br>Nassau Street Line',
            '<br>Grand Street (proposed)',
            '<br>Chrystie Street Connection (to Manhattan Bridge)',
            '<br>Chatham Square (proposed)',
            '<br>Broadway Line (to Manhattan Bridge)',
            '<br>Seaport (proposed)',
            '<br>Eighth Avenue Line',
            '<br>Broadway',
            '<br>Hanover Square'],
      services: 'Q T',
      name: "Second Avenue Subway",
      stops: function() {
            document.getElementById('station-list').innerHTML = secondAveLine.poi;
      }
};
destinations.push(secondAveLine);

var sixthAveLine = {
      color: 'red',
      poi: ['columbia university', 'columbus circle', 'times square', 'penn station', 'canal street', 'south ferry'],
      services: '1 2 3',
      name: 'Broadway -- Seventh Avenue Line',
      stops: function showStops() {

      }
};
destinations.push(sixthAveLine);


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
      poi: ['Norwood – 205th Street', 'Concourse Yard', 'Bedford Park Boulevard', 'Kingsbridge Road', 'Fordham Road','182nd–183rd Streets', 'Tremont Avenue', '174th–175th Streets', '170th Street','167th Street','161st Street – Yankee Stadium' ,'IRT Jerome Avenue Line' ,'MNR Hudson Line' ,'Concourse Tunnel under Harlem River','155th Street','145th Street'],
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
