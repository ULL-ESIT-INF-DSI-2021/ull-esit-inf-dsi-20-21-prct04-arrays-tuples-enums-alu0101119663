## Informe Práctica 4 - Arrays, tuplas y enumerados

### Introducción

Durante esta práctica llevaremos a cabo los 8 ejercicios propuestos en lenguaje **TypeScript** para familiarizarnos con tipos de datos como **arrays, tuplas y enumerados**.

### Lista de ejercicios
- Ejercicio 1 Decodificador resistencias
- Ejercicio 2 Palabras encadenadas en un array
- Ejercicio 3 Calcular la media y concatenar cadenas
- Ejercicio 4 Mover los ceros al final
- Ejercicio 5 Factoría de multiplicaciones
- Ejercicio 6 Puntos bi-dimensionales
- Ejercicio 7 Puntos n-dimensionales
- Ejercicio 8 El agente

### Tareas previas
Como hicimos en la practica anterior, debemos crear una estructura adecuada, y esta vez utilizar **Typedoc** para la generacion de documentación y **Mocha** y **Chai** para realizar pruebas unitarias.

### Ejercicio 1 - Decodificador resistencias
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-1.ts)

```
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
```
*Explicacion:*
Para la realización de este ejercicio he hecho que se le pase por parámetro un *string*, donde se le pasará los nombres de la resistencias. Primero trato de eliminar los guiones que separan los colores. Una vez hecho creo el vector con los colores, como los valores de las resistencias es igual al indice del nombre del vector no me ha hecho falta crear otro vector para almacenar dichos valores. Creo dos variables para guardar los dos primeros valores de las resistencias que son los que nos interensan. Y por último, recorro el vector hasta encontrar los dos primeros nombres, una vez encontrados los concateno en una variable y esta última es la que se retorna.

### Ejercicio 2 - Palabras encadenadas en un array
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-2.ts)
```
export function meshArray(str: string[]): string {
  let arrayMeshed: string = '';

  for(let i = 0; i < str.length - 1; i++) {
    const word: string = str[i];
    const next_word: string = str[i + 1];
    const errorMessage: string = "Error al encadenar";

    let index: number = word.length - 1;
    let next_index: number = 0;

    while (word[index] != next_word[next_index]) {
      index--;
      if (index < 0) {
        return errorMessage;
      }
    }

    for(let j: number = index; j < word.length; j++) {
      if(word[j] == next_word[next_index]) {
        arrayMeshed += word[j];
        next_index++;
      } else {
        return errorMessage;
      }
    }
  }
  return arrayMeshed;
}
```
*Explicacion:*
Para la realización de este ejercicio, se le pasa a la función un parámetro que se corresponde con un *array de strings*. Se crea una variable donde guardaremos las silabas que se correspondan con la concatenacion. Se recorre el tamaño del array. Crearemos una variable *word* que apunta a la primera palabra y otra variable que apuntará a la siguiente palabra. Usando bucles recorremos de derecha a izquierda las letras de la primera palabra y de derecha a izquierda la segunda palabra, los iteradores seguiran avanzando para ir comprobando cuantas letras coinciden. En caso de que no se cumpla se devolverá un mensaje de error. En caso de que las palabras puedas ser encadenadas, se devolverá un *string* con las letras usadas por todas las palabras.

### Ejercicio 3 - Calcular la media y concatenar cadenas
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-3.ts)
```
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
```
*Explicacion:*
Para la realización de este ejercicio a la función se le pasa una entrada, que es un array compuesto por *string* o *number* indistintamente. Una vez dentro de la función se crea una variable *media*, otra para contar las veces que aparece un *number* y una cadena que será donde iremos metiendo las letras que vayan apareciendo, por último se crea la variable para devolver la solución. Con un bucle recorremos el *array* de entrada y en base al tipo de dato que sea, *string* o *number* sumará el valor para hallar la media o meterá la letra en el *string*. Por último se hace la media, con la variable *media* entre la variable *contadorNum* y se introduce la solución de la media en la primera posición del vector y en la segunda posición del vector se introduce el *string* que tiene las letras que han ido saliendo. Finalmente se retorna la solución.
### Ejercicio 4 - Mover los ceros al final
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-4.ts)
```
```
*Explicacion:*
### Ejercicio 5 - Factoría de multiplicaciones
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-5.ts)
```
```
*Explicacion:*
### Ejercicio 6 - Puntos bi-dimensionales
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-6.ts)
```
```
*Explicacion:*
### Ejercicio 7 - Puntos n-dimensionales
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-7.ts)
```
```
*Explicacion:*
### Ejercicio 8 - El agente
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-8.ts)
```
```
*Explicacion:*
