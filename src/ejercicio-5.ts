/**
 * Funcion anonima
 * @param mul Es el numero por el que multiplicaremos el array que nos pasan
 * @returns Array con los valores actualizados tras multiplicarlos por mul
 * 
 * 
 * Funcion multiplyAll, multiplica por un valor cada elemento del array que le pasemos
 * @param Array con los numeros que queremos multiplicar
 * @returns llamada a la funcion anonima
 */
export function multiplyAll(vector: number[]) {
  return (mul: number) => {
    let solution: number[] = [];

    vector.forEach((data) => {
      solution.push(data * mul);
    });
    return solution;
  }
}