/**
 * Funcion que si le damos como entrada una serie de letras y numeros, nos devolverá la media de los valores de los numeros y unirá las letras para formar una palabra segun el orden de entrada
 * @param entrada es un array que se le da como entrada a la funcion con una coleccion de numeros y letras sin orden alguno.
 * @returns un array con dos posiciones, en la primera, que sera un number, nos dará la media de los valores que haya encontrado en la entrada. Y en la segunda posicion del array nos devolvera la palabra formada tras concatenar todas las letras encontradas en el array de entrada
 */
export function meanAndConcatenate(entrada: (number | string)[]) {
  let media: number = 0;
  let contadorNum: number = 0;
  let str: string = '';

  let sol: (number | string)[] = [];

  entrada.forEach((dato) => {
    if (typeof dato === "string") {
      str += dato
    } 
    else if (typeof dato === "number") {
      media += dato;
      contadorNum++;
    }
  });

  media /= contadorNum;
  sol[0] = media;
  sol[1] = str;

  return sol;
}