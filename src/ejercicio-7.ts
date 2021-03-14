type pointN = [number, number, number, ...number[]];

/**
 * Funcion que realiza la suma entre dos puntos dados de N dimensiones
 * @param p1 Primer sumando de N dimesiones
 * @param p2 Segundo sumando de N dimesiones
 * @returns Resultado de la suma de ambos sumandos de N dimesiones
 */
export function pointNSuma(p1: pointN, p2: pointN): pointN {
  if(p1.length == p2.length) {
    for(let i: number = 0; i < p1.length; i++) {
      p1[i] += p2[i];
    }
    return p1; 
  }else{
    throw "Imposible realizar la operación, los puntos no pertenecen a la misma dimension";
  }
}

/**
 * Funcion que realiza la diferencia entre dos puntos dados de N dimensiones
 * @param p1 Minuendo de N dimensiones
 * @param p2 Sustrendo de N dimensiones
 * @returns Resultado de la diferencia de ambos puntos de N dimensiones
 */
export function pointNResta(p1: pointN, p2: pointN): pointN {
  if(p1.length == p2.length) {
    for(let i: number = 0; i < p1.length; i++) {
      p1[i] -= p2[i];
    }
    return p1; 
  }else{
    throw "Imposible realizar la operación, los puntos no pertenecen a la misma dimension";
  }
}

/**
 * Funcion que realiza el producto entre un punto de N dimensiones y un valor
 * @param p1 Multiplicando de N dimensiones
 * @param mul Multiplicador
 * Resultado de realizar el producto entre el punto de N dimensiones (multiplicando) y el valor (multiplicador)
 */
export function pointNProducto(p1: pointN, mul: number): pointN {
  for(let i: number = 0; i < p1.length; i++) {
    p1[i] *= mul;
  }
  return p1; 
}

/**
 * Funcion que realiza el calculo de la distancia Euclidea entre dos puntos dados de N dimensiones
 * @param p1 Primer punto de N dimensiones
 * @param p2 Segundo punto de N dimensiones
 * @returns Resultado tras haber calculado la distancia Euclidea entre ambos puntos de N dimensiones
 */
export function pointNDistanciaEuclidea(p1: pointN, p2: pointN): number {
  if(p1.length == p2.length) {
    let result: number = 0;
    let part1: number = 0;
    let part2: number = 0;

    for(let i: number = 0; i < p1.length; i++) {
      part1 = Math.pow((p1[i] - p2[i]), 2);
      part2 += part1;
    }

    result = Math.sqrt(part2);
    return result;
  }
}