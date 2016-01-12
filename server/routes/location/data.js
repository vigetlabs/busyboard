const facingDegreeOffset = 14

const hours              = (defaultTime, overrides) => {
  const array = (new Array(7)).fill(defaultTime)
  for (let key in overrides) {
    array[key] = overrides[key]
  }
  return array
}

let data = [
  {
    // http://www.foolishcraigs.com/hours/
    name                : `Foolish Craig${String.fromCharCode(8217)}s`,
    directionsLength    : '5 min',
    directionsDirection : 'Northeast - On Pearl',
    degreesFromNorth    : 35,
    open                : hours('8am'),
    close               : hours('9:30pm', {0: '9pm'})
  },

  {
    // http://snoozeeatery.com/locations/boco/
    name                : `Lindsay${String.fromCharCode(8217)}s Boulder Deli`,
    directionsLength    : '3 min',
    directionsDirection : 'Northwest - On Broadway',
    degreesFromNorth    : -73,
    open                : hours('8am'),
    close               : hours('11pm', {6: '12am', 7: '12am'})
  },

  {
    // http://snoozeeatery.com/locations/boco/
    name                : 'Snooze',
    directionsLength    : '5 min',
    directionsDirection : 'Northeast - On Pearl',
    degreesFromNorth    : 47,
    open                : hours('7am'),
    close               : hours('3pm')
  },

  {
    // http://www.centrolatinkitchen.com/contact/
    name                : 'Mountain Sun',
    directionsLength    : '7 min',
    directionsDirection : 'Northeast - On Pearl',
    degreesFromNorth    : 37,
    open                : hours('11am'),
    close               : hours('1am')
  },

  {
    // http://www.centrolatinkitchen.com/contact/
    name                : 'Centro',
    directionsLength    : '7 min',
    directionsDirection : 'West - On Pearl',
    degreesFromNorth    : -85,
    open                : hours('11:30am'),
    close               : hours('11pm')
  },

  {
    // http://www.yelp.com/biz/illegal-petes-boulder
    name                : `Illegal Pete${String.fromCharCode(8217)}s`,
    directionsLength    : '4 min',
    directionsDirection : 'Northeast - On Pearl',
    degreesFromNorth    : 20,
    open                : hours('7am', {0: '9am', 6: '9am'}),
    close               : hours('10:30pm', {4: '2:30am', 5: '2:30am', 6: '2:30am'})
  },

  {
    // http://mateorestaurant.com/
    name                : 'Mateo',
    directionsLength    : '10 min',
    directionsDirection : 'Northeast - On Pearl',
    degreesFromNorth    : 61,
    open                : hours('11:30am', {0: '9am', 6: '9am'}),
    close               : hours('10pm', {0: '2pm'})
  },

  {
    // http://www.yelp.com/biz/zoe-ma-ma-boulder
    name                : 'Zoe Ma Ma',
    directionsLength    : '6 min',
    directionsDirection : 'West - On Pearl & 10th',
    degreesFromNorth    : -82,
    open                : hours('11am'),
    close               : hours('10pm', {5: '11pm', 6: '11pm'})
  },

  {
    // http://www.tahonaboulder.com/
    name                : 'Tahona',
    directionsLength    : '6 min',
    directionsDirection : 'West - On Pearl',
    degreesFromNorth    : -81,
    open                : hours('4pm', {0: '3pm', 5: '3pm', 6: '11:30am'}),
    close               : hours('11pm', {5: '1am', 6: '1am'})
  },

  {
    // http://www.yelp.com/biz/t-aco-an-urban-taqueria-boulder
    name                : 'T/aco',
    directionsLength    : '3 min',
    directionsDirection : 'West - On Walnut',
    degreesFromNorth    : -87,
    open                : hours('11:30am', {0: '11am', 6: '11am'}),
    close               : hours('9pm', {2: '10pm', 5: '10pm', 6: '10pm'})
  },

  {
    // http://thekitchen.com/upstairs-boulder/
    name                : 'Kitchen Upstairs',
    directionsLength    : '5 min',
    directionsDirection : 'West - On Pearl',
    degreesFromNorth    : -76,
    open                : hours('5:30pm'),
    close               : hours('12am')
  },

  {
    // http://thekitchen.com/nextdoor-boulder/
    name                : 'Kitchen Next Door',
    directionsLength    : '5 min',
    directionsDirection : 'West - On Pearl',
    degreesFromNorth    : -80,
    open                : hours('11am'),
    close               : hours('11pm')
  },

  {
    // http://wfbrews.com/
    name                : 'West Flanders',
    directionsLength    : '4 min',
    directionsDirection : 'North - On Pearl',
    degreesFromNorth    : -70,
    open                : hours('11am', {0: '10am'}),
    close               : hours('10pm', {5: '11pm', 6: '11pm'})
  },

  {
    // http://www.yelp.com/biz/pizzeria-locale-boulder-boulder
    name                : 'Pizzeria Locale',
    directionsLength    : '7 min',
    directionsDirection : 'Northeast - On Pearl',
    degreesFromNorth    : 60,
    open                : hours('11:30am'),
    close               : hours('10pm', {0: '9pm', 5: '10:30pm', 6: '10:30pm'})
  },

  {
    // http://www.sushizanmai.com/
    name                : 'Sushi Zanmai',
    directionsLength    : '7 min',
    directionsDirection : 'Northwest - On Spruce',
    degreesFromNorth    : -41,
    open                : hours('11:30am', {0: '5pm', 6: '5pm'}),
    close               : hours('10pm', {6: '12am'})
  },

  {
    // http://moongateasianbistro.com/
    name                : 'Moongate Asian Bistro',
    directionsLength    : '5 min',
    directionsDirection : 'Northeast - On Pearl',
    degreesFromNorth    : 52,
    open                : hours('11am'),
    close               : hours('10pm', {5: '11pm', 6: '11pm'})
  }
]

data.forEach(location => {
  location.degreesFromFacing = location.degreesFromNorth + facingDegreeOffset
})

export default data
