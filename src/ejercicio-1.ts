/**
 * Funcion para obtener el valor de una resistencia pasada por parámetro
 * Negro == 0 | Marrón == 1 | Rojo == 2 | Naranja == 3 | Amarillo == 4 | Verde == 5 | Azul == 6 | Violeta == 7 | Gris == 8 | Blanco == 9
 * @param str Cadena con los colores de la resistencia
 * @returns El numero formado por los dos primeros colores de la resistencia
 */
export function decodeResistor(str: string): number {
  let vector = str.toLocaleLowerCase().split('-');
  let resistor = ['negro', 'marron', 'rojo', 'naranja', 'amarilla', 'verde', 'azul', 'violeta', 'gris', 'blanco'];
  let value1: string = '';
  let value2: string = '';

  for (let i = 0; i < resistor.length; i++) {
    if (vector[0] == resistor[i]) {
      value1 = i.toString();
    }
    if (vector[1] == resistor[i]) {
      value2 = i.toString();
    }
  }

  let valueResistor: string = (value1 + value2);
  return parseInt(valueResistor);
}