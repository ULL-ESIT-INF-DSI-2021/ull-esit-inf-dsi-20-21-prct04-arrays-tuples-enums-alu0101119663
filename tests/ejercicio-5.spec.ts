import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-5';

describe('Ejercicio 5 - Factoría de multiplicaciones', () => {
  it('multiplyAll([2, 6, 8])(3) returns value [6, 18, 24]', () => {
    expect(multiplyAll([2, 6, 8])(3)).to.be.deep.equal([6, 18, 24]);
  });

  it('multiplyAll([8, 8, 8, 8])(8) returns value [64, 64, 64, 64]', () => {
    expect(multiplyAll([8, 8, 8, 8])(8)).to.be.deep.equal([64, 64, 64, 64]);
  });
});