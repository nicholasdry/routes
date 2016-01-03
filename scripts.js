// scripts

var destinations = [];

var bmtBroadWayLine = {
      color: 'yellow',
      poi: ['Lexington Avenue',
            '<br>59th Street Roosevelt Island Tramway',
            '<br>Lexington Avenue Line',
            '<br>Fifth Avenue',
            '<br>59th Street',
            '<br>Sixth Avenue Line',
            '<br>63rd Street Line',
            '<br>57th Street',
            '<br>Queens Boulevard',
            '<br>Sixth Avenue lines',
            '<br>49th Street',
            '<br>42nd Street Shuttle',
            '<br>Times Square',
            '<br>34th Street',
            '<br>28th Street',
            '<br>23rd Street',
            '<br>14th Street',
            '<br>New York University',
            '<br>Sixth Avenue Line',
            '<br>Prince Street',
            '<br>Lexington Avenue',
            '<br>Nassau Street lines',
            '<br>Canal Street',
            '<br>Fourth Avenue and Brighton lines',
            '<br>Manhattan Bridge',
            '<br>City Hall',
            '<br>Broadway',
            '<br>Eighth Avenue Line',
            '<br>Cortlandt Street',
            '<br>Rector Street',
            '<br>Lexington Avenue Line',
            '<br>Whitehall Street',
            '<br>South Ferry'],
      services: 'N Q R',
      name: "Broadway Line",
      stops: function() {
            document.getElementById('station-list').innerHTML = bmtBroadWayLine.poi;
      }
};
destinations.push(bmtBroadWayLine);

var secondAveLine = {
      color: 'blue',
      poi: ['125th Street (proposed)',
            '<br>Lexington Avenue Line',
            '<br>96th Street',
            '<br>86th Street',
            '<br>72nd Street',
            '<br>63rd Street Lines',
            '<br>Broadway Line',
            '<br>Lexington Avenue – 53rd Street',
            '<br>Queens Boulevard Line',
            '<br>Grand Central',
            '<br>Third Avenue',
            '<br>Houston Street Second Avenue',
            '<br>Chrystie Street Connection (to Williamsburg Bridge)',
            '<br>Nassau Street Line',
            '<br>Chrystie Street Connection (to Manhattan Bridge)',
            '<br>Broadway Line (to Manhattan Bridge)',
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
      poi: ['57th Street',
            'S<br>eventh Avenue',
            '<br>Queens Boulevard Line',
            '<br>Rockefeller Center',
            '<br>42nd Street Shuttle',
            '<br>42nd Street',
            '<br>34th Street',
            '<br>PATH at 33rd Street',
            '<br>23rd Street',
            '<br>14th Street',
            '<br>Port Authority Trans-Hudson (PATH)',
            '<br>Eighth Avenue Line',
            '<br>Washington Square',
            '<br>Eighth Avenue',
            '<br>Eighth Avenue Line',
            '<br>Broadway Line',
            '<br>Broadway',
            '<br>Chrystie Street Connection',
            '<br>Second Avenue',
            '<br>Delancey Street',
            '<br>Nassau Street Line',
            '<br>Grand Street',
            '<br>East Broadway',
            '<br>Manhattan Bridge',
            '<br>York Street'],
      services: '1 2 3',
      name: 'Seventh Avenue Line',
      stops: function() {
            document.getElementById('station-list').innerHTML = sixthAveLine.poi;
      }
};
destinations.push(sixthAveLine);


var canarsieLine = {
      color: 'gray',
      poi: ['Eighth Avenue',
            '<br>14th Street',
            '<br>Sixth Avenue',
            '<br>Union Square',
            '<br>14th Street',
            '<br>Third Avenue',
            '<br>First Avenue',
            '<br>14th Street Tunnel',
            '<br>Bedford Avenue',
            '<br>Lorimer Street',
            '<br>Metropolitan Avenue',
            '<br>Graham Avenue',
            '<br>Grand Street',
            '<br>Montrose Avenue',
            '<br>Morgan Avenue',
            '<br>Jefferson Street',
            '<br>DeKalb Avenue',
            '<br>Myrtle–Wyckoff Avenues',
            '<br>Halsey Street',
            '<br>Wilson Avenue',
            '<br>Aberdeen Street',
            '<br>East New York Yard',
            '<br>Broadway Junction',
            '<br>Atlantic Avenue',
            '<br>Sutter Avenue',
            '<br>New Lots Line',
            '<br>Livonia Avenue',
            '<br>Long Island Rail Road',
            '<br>New Lots Avenue',
            '<br>East 105th Street',
            '<br>Rockaway Parkway'],
      services: 'L',
      name: 'Canarsie Line',
      stops: function() {
            document.getElementById('station-list').innerHTML = canarsieLine.poi;
      }
};
destinations.push(canarsieLine);

var concourseLine = {
      color: 'orange',
      poi: ['Norwood – 205th Street',
      '<br>Concourse Yard',
      '<br>Bedford Park Boulevard',
      '<br>Kingsbridge Road',
      '<br>Fordham Road',
      '<br>182nd–183rd Streets',
      '<br>Tremont Avenue',
      '<br>174th–175th Streets',
      '<br>170th Street',
      '<br>167th Street',
      '<br>161st Street – Yankee Stadium' ,
      '<br>IRT Jerome Avenue Line' ,
      '<br>MNR Hudson Line' ,
      '<br>Concourse Tunnel under Harlem River',
      '<br>155th Street','145th Street'],
      services: 'B D',
      name: 'Concourse Line',
      stops: function() {
            document.getElementById('station-list').innerHTML = concourseLine.poi;
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
                  if (destinations[i].poi[j].toLowerCase() == "<br>" + document.getElementById("dest-entry").value) {
                        lines.push("<br>" + destinations[i].name + " (" + destinations[i].services + ") ");
                        break;
                  }
            }
      }

      if (lines.length == 0) {
            document.getElementById('output').innerHTML = "Check spelling or re-enter destination.";
      } else {
            document.getElementById('output').innerHTML = "You can take any of the follow lines: <br>" + lines;
      }

}
