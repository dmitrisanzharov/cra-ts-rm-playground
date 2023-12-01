let fleetRegex = /\/fleet(?!dashboard\b)/;
const fleetUrlSimple = '#/fleet/';
const fleetUrlComplex = 'http://web.local.rentalmatics.com/#/fleet/?stations=&stationGroups=&geoGroup=&geofence=';

let fleetDashRegex = /\/fleetdashboard(?!\/)/;
const fleetDashUrlSimple = '#/fleetdashboard';
const fleetDashUrlComplex = 'http://web.local.rentalmatics.com/#/fleetdashboard?stations=&stationGroups=&geoGroup=&geofence='; 




//FLEET

// fleet simple url, should match fleet regex
console.log(fleetUrlSimple.match(fleetRegex)); // found, pass

// fleet complex url, should match fleet regex
console.log(fleetUrlComplex.match(fleetRegex)); // found, pass

// fleetdashboard simple url, should NOT match fleet regex
console.log(fleetDashUrlSimple.match(fleetRegex)); // null, pass

// fleetdashborad complex url, should NOT match fleet regex
console.log(fleetDashUrlComplex.match(fleetRegex)); // null, pass



// FLEETDASHBOARD

// fleetdash simple url should match fleetdash regex
console.log(fleetDashUrlSimple.match(fleetDashRegex)); // found, pass

// fleetdash complex url should match fleetdash regex
console.log(fleetDashUrlComplex.match(fleetDashRegex)); // found, pass

// fleet simple url should NOT match fleetdash regex
console.log(fleetUrlSimple.match(fleetDashRegex)); // null, pass

// fleet complex url should NOT match fleetdash regex
console.log(fleetUrlComplex.match(fleetDashRegex)); // null, pass