import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';

describe('Ejercicio 1 - Decodificar resistencias', () => {
  it('decodeResistor("Marron-Negro") return value 10', () => {
    expect(decodeResistor('Marron-Negro')).to.be.deep.equal(10);
  });

  it('decodeResistor("Marron-Negro-Violeta") return value 10', () => {
    expect(decodeResistor('Marron-Negro-Violeta')).to.be.deep.equal(10);
  });
})