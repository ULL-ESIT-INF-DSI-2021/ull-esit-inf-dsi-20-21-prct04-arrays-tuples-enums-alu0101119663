import 'mocha';
import {expect} from 'chai';
import {theAgent} from '../src/ejercicio-8';


describe('Ejercicio 8 - El agente', () => {
  it('agent(15, 15, [1, 3], [3, 5]) returns value [North, East, North, East]', () => {
    expect(theAgent(15, 15, [1, 3], [3, 5])).to.be.deep.equal(["North", "East", "North", "East"]);
  });
});