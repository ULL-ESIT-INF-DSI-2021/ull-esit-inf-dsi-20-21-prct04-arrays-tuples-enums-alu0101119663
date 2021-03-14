import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-4';

describe('Ejercicio 4 - Mover los ceros al final', () => {
  it('([1,0,1,2,0,1,3]) return [1,1,2,1,3,0,0]', () => {
    expect(moveZeros([1,0,1,2,0,1,3])).to.be.deep.equal([1,1,2,1,3,0,0])
  });

  it('([0,0,0,10,1,0,0]) return [10,1,0,0,0,0,0]', () => {
    expect(moveZeros([0,0,0,10,1,0,0])).to.be.deep.equal([10,1,0,0,0,0,0])
  });

});