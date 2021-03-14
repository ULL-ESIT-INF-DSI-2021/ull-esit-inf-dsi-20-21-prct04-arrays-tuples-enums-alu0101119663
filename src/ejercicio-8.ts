type point = [number, number];

/**
 * Funcion para obtener la ruta para llegar a un destino deseado desde un punto inicial dado
 * @param x Tamaño del tablero a lo ancho
 * @param y Tamaño del tablero a lo alto
 * @param initialPoint Punto inicial
 * @param endPoint Punto destino
 * @returns Array indiciando la ruta que se debe seguir para llegar al destino
 */
export function theAgent(x: number, y: number, initialPoint: point, endPoint: point) {
  let ruta: string[] = [];

  while (!((initialPoint[0] == endPoint[0]) && (initialPoint[1] == endPoint[1]))) {
    if (initialPoint[1] < endPoint[1]) {
      ruta.push("North");
      initialPoint[1]++;
    }

    if (initialPoint[0] < endPoint[0]) {
      ruta.push("East");
      initialPoint[0]++;
    }

    if (initialPoint[1] > endPoint[1]) {
      ruta.push("South");
      initialPoint[1]--;
    }

    if (initialPoint[0] > endPoint[0]) {
      ruta.push("Oeast");
      initialPoint[0]--;
    }
  }
  return ruta;
}