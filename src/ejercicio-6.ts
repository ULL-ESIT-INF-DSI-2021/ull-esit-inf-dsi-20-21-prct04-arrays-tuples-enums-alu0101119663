type point = [number, number];

/**
 * Funcion que realiza la suma entre dos puntos dados
 * @param p1 Primer sumando
 * @param p2 Segundo sumando
 * @returns Resultado de la suma de ambos sumandos
 */
export function pointSuma(p1: point, p2: point): point {
  let res: point = [0, 0];

  res[0] = p1[0] + p2[0];
  res[1] = p1[1] + p2[1];

  return res;
}

/**
 * Funcion que realiza la diferencia entre dos puntos dados
 * @param p1 Minuendo
 * @param p2 Sustrendo
 * @returns Resultado de la diferencia de ambos puntos
 */
export function pointResta(p1: point, p2: point): point {
  let res: point = [0, 0];

  res[0] = p1[0] - p2[0];
  res[1] = p1[1] - p2[1];

  return res;
}

/**
 * Funcion que realiza el producto entre un punto y un valor
 * @param p1 Multiplicando
 * @param mul Multiplicador
 * @returns Resultado de realizar el producto entre el punto (multiplicando) y el valor (multiplicador)
 */
export function pointProducto(p1: point, mul: number): point {
  let res: point = [0, 0];

  res[0] = p1[0] * mul;
  res[1] = p1[1] * mul;

  return res;
}

/**
 * Funcion que realiza el calculo de la distancia Euclidea entre dos puntos dados
 * @param p1 Primer punto
 * @param p2 Segundo punto
 * @returns Resultado tras haber calculado la distancia Euclidea entre ambos puntos
 */
export function pointDistanciaEuclidea(p1: point, p2: point): number {
  let res: number = Math.sqrt((Math.pow((p1[0] - p2[0]), 2)) + (Math.pow((p1[1] - p2[1]), 2)))

  return res; 
}