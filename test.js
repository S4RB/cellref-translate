'use strict';

require('chai').should();

const Translate = require('.');

describe('Translate', () => {
	describe('instantiation', () => {
		it('should reflect the constructor arguments', () => new Translate('A1').ref.should.equal('A1'));
	});

	describe('getting column', () =>
		it('should return Z', () => new Translate('M1').col.should.equal('M'))
	);

	describe('getting column number', () =>
		it('should return 26', () => new Translate('M1').colNum.should.equal(13))
	);

	describe('getting row number', () =>
		it('should return 5', () => new Translate('L5').row.should.equal(5))
	);

	describe('horizontal translation', () =>
		it('should reflect the horizontal translation', () => new Translate('A1').translate(1,0).ref.should.equal('B1'))
	);

	describe('vertical translation', () =>
		it('should reflect the vertical translation', () => new Translate('A1').translate(0,1).ref.should.equal('A2'))
	);

	describe('vertical and horizontal translations', () =>
		it('should reflect the vertical and horizontal translations', () => new Translate('A1').translate(2,2).ref.should.equal('C3'))
	);

	describe('negative vertical and horizontal translations', () =>
		it('should reflect the vertical and horizontal translations', () => new Translate('D4').translate(-2,-2).ref.should.equal('B2'))
	);

	describe('invalid horizontal translation', () =>
		it('should throw an error', () => (() => new Translate('A1').translate(-1,0)).should.throw(Error))
	);

	describe('invalid vertical translation', () =>
		it('should throw an error', () => (() => new Translate('A1').translate(0,-1)).should.throw(Error))
	);
});
