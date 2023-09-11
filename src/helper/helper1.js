const obj1 = {
    '3RD PARTY BODY REPAIR/INSURANCE': 2,
    'AWAITING DECISION': 2,
    'BADLY CRASHED - POTENTIAL WRITE OFF': 2,
    'BODY REPAIR IN PROGRESS': 4,
    'DOE TEST': 3,
    'INTER BRANCH MOVEMENT': 1,
    'MECHANICAL REPAIR IN PROGRESS': 8,
    'PROBLEM - TO BE ADDRESSED': 10,
    'SERVICE IN PROGRESS': 1,
    'STAFF CARS': 3,
    'WARRANTY RECALL': 8,
};

function createUrlFilterStringForOtherLabel() {
    // * here we want to sort from High To Low and Remove first 4 items from the array
    // * and return string in format 'STRING+NAME+1,STRING+NAME+2' for URL
    let sortHighToLow = Object.entries(obj1).sort(([_, a], [__, b]) => b - a);
    sortHighToLow.splice(0, 4);
    return sortHighToLow
        .map(([label, value]) => {
            return label.replaceAll(' ', '+');
        })
        .join(',');
}
