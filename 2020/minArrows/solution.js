/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length == 0) {
        return 0;
    };
    
    points = points.sort((balloon1, balloon2) => {
        return balloon1[1] < balloon2[1] ? -1 : 1;
    });
    
  	resArrays = [points[0]];
	for(let i = 0; i < points.length; i++) {
		let balloon = points[i];
        let updated = false;
		for(let j = 0; j < resArrays.length; j++) {
			let range = resArrays[j];
			let overlap = findOverlap(balloon, range);
 			if((overlap[0] <= overlap[1]) && ((range[0] == overlap[0]) || (range[1] == overlap[1]))) {
				resArrays[j] = overlap;
                updated = true;
			};
		};
        if(!updated) {
            resArrays.push(balloon);
        };
	};
	return resArrays.length;
};

const findOverlap = (arr1, arr2) => {
	let start = arr1[0] > arr2[0] ? arr1[0] : arr2[0];
	let end = arr1[1] < arr2[1] ? arr1[1] : arr2[1];
	return [start, end]
};