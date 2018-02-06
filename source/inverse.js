'use strict';

const inverse = (array, number = 0) => {
	if (!(array instanceof Array)) {
		return array;
	}

	if (0 === number) {
		return array.reverse();
	} else if (number > 0) {
		return [...array.slice(0, number), ...array.slice(number).reverse()];
	} else {
		return [...array.slice(0, number).reverse(), ...array.slice(number)];
	}
};
