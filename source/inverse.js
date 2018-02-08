'use strict';

const inverse = (array, number = 0) => {
	if (!(array instanceof Array)) {
		return array;
	}

	switch (true) {
		case (number > 0):
			return [...array.slice(0, number), ...array.slice(number).reverse()];
		case (number < 0):
			return [...array.slice(0, number).reverse(), ...array.slice(number)];
		default:
			return array.reverse();
	}
};
