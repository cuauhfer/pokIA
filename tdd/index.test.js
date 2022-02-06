const chai = require('chai');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const expect = chai.expect;

chai.use(deepEqualInAnyOrder);

describe('TDD beggining', () => {
    it('Mocha execution test', () => {
        expect(true).to.equal(true);
    });

    it('Checking deep equal in any order - Array', () => {
        const testArr1 = ['Array', 5, true];
        const testArr2 = [true, 5, 'Array'];
        expect(testArr1).to.deep.equalInAnyOrder(testArr2);
    });

    it('Checking deep equal in any order - Object', () => {
        const testObj1 = {prop1: true, prop2: false};
        const testObj2 = {prop1: true, prop2: false};
        expect(testObj1).to.deep.equalInAnyOrder(testObj2);
    });
});
