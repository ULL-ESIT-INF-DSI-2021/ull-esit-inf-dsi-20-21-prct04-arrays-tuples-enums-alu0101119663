import 'mocha';
import {expect} from 'chai';
import {pointSuma} from '../src/ejercicio-6';
import {pointResta} from '../src/ejercicio-6';
import {pointProducto} from '../src/ejercicio-6';
import {pointDistanciaEuclidea} from '../src/ejercicio-6';

describe('Ejercicio 6 - Puntos bi-dimensionales', () => {
  it('pointSuma([5, 4], [7, 4]) return [12, 8]', () => {
    expect(pointSuma([5, 4], [7, 4])).to.be.deep.equal([12, 8]);
  });

  it('pointResta([5, 4], [7, 4]) return [-2, 0]', () => {
    expect(pointResta([5, 4], [7, 4])).to.be.deep.equal([-2, 0]);
  });

  it('pointProducto([5, 4], 8) return [40, 32]', () => {
    expect(pointProducto([5, 4], 8)).to.be.deep.equal([40, 32]);
  });

  it('pointDistanciaEuclidea([5, 4], [7, 4]) return 2', () => {
    expect(pointDistanciaEuclidea([5, 4], [7, 4])).to.be.deep.equal(2);
  });
});