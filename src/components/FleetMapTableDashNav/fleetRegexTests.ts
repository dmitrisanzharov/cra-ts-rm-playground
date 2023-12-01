export const fleetRegex = /\/fleet(?!dashboard\b)/; 
export const fleetDashRegex = /\/fleetdashboard(?!\/)/;
export const mapRegex = /\bmap\b/; 

/* 

const fleetUrlSimple = '#/fleet/';
const fleetUrlComplex = 'http://web.local.rentalmatics.com/#/fleet/?stations=&stationGroups=&geoGroup=&geofence=';


const fleetDashUrlSimple = '#/fleetdashboard';
const fleetDashUrlComplex = 'http://web.local.rentalmatics.com/#/fleetdashboard?stations=&stationGroups=&geoGroup=&geofence=';


const mapUrlSimple = '#/map';
const mapUrlComplex = 'http://web.local.rentalmatics.com/#/map?stations=&stationGroups=&geoGroup=&geofence=';
const mapUrlComplex2 = 'https://example.com/foo/path/with/map/vehicles/fleetofmaps';



//FLEET

// fleet simple url, should match fleet regex
console.log(fleetRegex.exec(fleetUrlSimple)); // found, pass
console.log(fleetRegex.test(fleetUrlSimple)); // true, pass

// fleet complex url, should match fleet regex
console.log(fleetRegex.exec(fleetUrlComplex)); // found, pass
console.log(fleetRegex.test(fleetUrlComplex)); // true, pass

// fleetdashboard simple url, should NOT match fleet regex
console.log(fleetRegex.exec(fleetDashUrlSimple)); // null, pass
console.log(fleetRegex.test(fleetDashUrlSimple)); // false, pass

// fleetdashboard complex url, should NOT match fleet regex
console.log(fleetRegex.exec(fleetDashUrlComplex)); // null, pass
console.log(fleetRegex.test(fleetDashUrlComplex)); // false, pass

// FLEETDASHBOARD

// fleetdash simple url should match fleetdash regex
console.log(fleetDashRegex.exec(fleetDashUrlSimple)); // found, pass
console.log(fleetDashRegex.test(fleetDashUrlSimple)); // true, pass

// fleetdash complex url should match fleetdash regex
console.log(fleetDashRegex.exec(fleetDashUrlComplex)); // found, pass
console.log(fleetDashRegex.test(fleetDashUrlComplex)); // true, pass

// fleet simple url should NOT match fleetdash regex
console.log(fleetDashRegex.exec(fleetUrlSimple)); // null, pass
console.log(fleetDashRegex.test(fleetUrlSimple)); // false, pass

// fleet complex url should NOT match fleetdash regex
console.log(fleetDashRegex.exec(fleetUrlComplex)); // null, pass
console.log(fleetDashRegex.test(fleetUrlComplex)); // false, pass

//MAP
console.log(mapRegex.exec(mapUrlSimple)); // found, pass
console.log(mapRegex.exec(mapUrlComplex)); // found, pass
console.log(mapRegex.exec(mapUrlComplex2)); // found, pass



// OTHER CODE FOR COMPONENT TESTS


*/