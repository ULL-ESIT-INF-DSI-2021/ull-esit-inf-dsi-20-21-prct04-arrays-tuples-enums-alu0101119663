/**
 * Funcion que a partir de una array de numero, la modifica y devuelve un array con todos los ceros de la primera al final del array que retorna
 * @param entrada Array con los numeros de entrada
 * @returns array con los ceros al final y el resto de numeros siguen manteniendo el mismo orden
 */
export function moveZeros(entrada: number[]): number[] {
  let arrayZero: number[] = [];
  let arrayNoZero: number[] = [];

  entrada.forEach((dato) => {
    if (typeof dato === "number") {
      if (dato == 0) {
        arrayZero.push(dato);
      }else {
        arrayNoZero.push(dato);
      }  
    } 
  });

  const solMoveZero = arrayNoZero.concat(arrayZero);
  return solMoveZero;
}