'use strict';

const cellref = require('cellref');

module.exports = class Translate {
	constructor(ref) {
		this._cellref = cellref(ref);
	}

	translate(x,y) {
		let [,r,c] = this._cellref.split(/^R(\d+)C(\d+)$/);

		c = parseInt(c) + x;
		r = parseInt(r) + y;

		if (c < 1) {
			throw new Error('Invalid horizontal translation, would result in column index less than A');
		}

		if (r < 1) {
			throw new Error('Invalid vertical translation, would result in row number less than 1');
		}

		this._cellref = `R${r}C${c}`;
		return this.ref;
	}

	get ref() {
		return cellref(this._cellref);
	}
};
