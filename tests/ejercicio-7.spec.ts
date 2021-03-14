import 'mocha';
import {expect} from 'chai';
import {pointNSuma} from '../src/ejercicio-7';
import {pointNResta} from '../src/ejercicio-7';
import {pointNProducto} from '../src/ejercicio-7';
import {pointNDistanciaEuclidea} from '../src/ejercicio-7';

describe('Ejercicio 7 - Puntos n-dimensionales', () => {
  it('pointNSuma([5, 4, 8], [7, 4, 8]) return [12, 8, 16]', () => {
    expect(pointNSuma([5, 4, 8], [7, 4, 8])).to.be.deep.equal([12, 8, 16]);
  });

  it('pointNResta([5, 4, 8], [7, 4, 8]) return [-2, 0, 0]', () => {
    expect(pointNResta([5, 4, 8], [7, 4, 8])).to.be.deep.equal([-2, 0, 0]);
  });

  it('pointNProducto([5, 4, 8], 8) return [40, 32, 64]', () => {
    expect(pointNProducto([5, 4, 8], 8)).to.be.deep.equal([40, 32, 64]);
  });

  it('pointNDistanciaEuclidea([5, 4, 8], [7, 4, 8]) return 2', () => {
    expect(pointNDistanciaEuclidea([5, 4, 8], [7, 4, 8])).to.be.deep.equal(2);
  });
});