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
```
*Explicacion:*
Para llevar a cabo este ejercicio, a la función se le pasa un array de *numbers*. Dentro de la función creo dos *arrays* uno para los ceros, y otro para los números que no son cero. Recorro el array que nos dan como entrada y en función si el dato obtenido es cero o no, haremos un *push* a una de las otras arrays comentadas anteriormente. Una vez finalizado el bucle, se concatena el *array* que no contiene ceros con el que los tiene y se devuelve en un sólo *array*
### Ejercicio 5 - Factoría de multiplicaciones
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-5.ts)
```
export function multiplyAll(vector: number[]) {
  return (mul: number) => {
    let solution: number[] = [];

    vector.forEach((data) => {
      solution.push(data * mul);
    });
    return solution;
  }
}
```
*Explicacion:*
Para llevar a cabo este ejercicio, a la función se le pasa por parámetro el vector de números que queremos multiplicar y hacemos un return del multiplicador, durante el mismo se hará una función anónima que recibirá el valor del multiplicador. Dentro de un bucle hacemos que se realice la operación de multiplicación posición a posición y vaya haciendo *push* del resultado obtenido a un vector creado, el cual contendrá la solución y será que el se retornará de la función una vez se termine de realizar el bucle.

### Ejercicio 6 - Puntos bi-dimensionales
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-6.ts)
```
type point = [number, number];

export function pointSuma(p1: point, p2: point): point {
  let res: point = [0, 0];

  res[0] = p1[0] + p2[0];
  res[1] = p1[1] + p2[1];

  return res;
}

export function pointResta(p1: point, p2: point): point {
  let res: point = [0, 0];

  res[0] = p1[0] - p2[0];
  res[1] = p1[1] - p2[1];

  return res;
}

export function pointProducto(p1: point, mul: number): point {
  let res: point = [0, 0];

  res[0] = p1[0] * mul;
  res[1] = p1[1] * mul;

  return res;
}

export function pointDistanciaEuclidea(p1: point, p2: point): number {
  let res: number = Math.sqrt((Math.pow((p1[0] - p2[0]), 2)) + (Math.pow((p1[1] - p2[1]), 2)))

  return res; 
}
```
*Explicacion:*
Para llevar a cabo este ejercicio, he creado un tipo de dato con *type*, que posee dos *number*. Posteriormente he creado las funciones de suma y resta, comentaré ambas juntas debido a que son muy similares. Para realizar ambas, he creado una variable resultado del mismo tipo y he hecho la suma y la resta índice a índice. Para el producto, he hecho algo similar también. Primero se crea la variable de solución y luego se multiplica el valor de cada índice del vector por el multiplicador que se le ha pasado como parámetro a la función. Por último para el último ejercicio, solo he aplicado la fórmula ayudándome de las funciones que nos proporciona Math y he retornado el valor obtenido.
### Ejercicio 7 - Puntos n-dimensionales
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-7.ts)
```
type pointN = [number, number, number, ...number[]];

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

export function pointNProducto(p1: pointN, mul: number): pointN {
  for(let i: number = 0; i < p1.length; i++) {
    p1[i] *= mul;
  }
  return p1; 
}

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
```
*Explicacion:*
Para llevar a cabo este ejercicio, que es muy similar al anterior, he creado otro tipo de dato con *type*. Esta vez se nos pedía que fuera de 3 o más dimesiones, y con la primera lineas que podemos ver en el código lo conseguimos. Luego empiezan las funciones. Para las dos primeras se comprueba que ambos puntos pasados por parámetros son de la misma dimensión, en caso de que no se cumpla se lanza un *throw* con un mensaje de error, ya que no se podrá llevar a cabo la operación. Para hacer la operación se hace un bucle para recorrer todas las dimesiones e ir haciendo la operación correspondiente, ya sea suma o resta. El resultado se guardará en el primer operando y se retornará el valor obtenido. Para realizar el producto, se hace otro bucle para recorrer todas las dimesiones del punto y se van multiplicando los valores por el valor que se le ha pasado por parámetro. Por último para la distancia Euclidea, se comprueba que ambos puntos son de la misma dimensión y después se crean una variables, primero la variabble que gardará el resultado, esta será la que se retornará. Y luego hay dos variables auxiliares, la primera calculará la elevación al cuadrado de la resta de la distancia entre el punto 2 y el punto 1, posteriormente se irá sumando en la otra variable auxiliar. Una vez haya terminado el bucle ue calcula esa operación para todas las dimesiones que sea necesario, se realiza la raíz cuadrada y se retorna el resultado.
### Ejercicio 8 - El agente
[Código Resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101119663/blob/master/src/ejercicio-8.ts)
```
type point = [number, number];

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

```
*Explicacion:*
Para llevar a cabo este ejercicio, se crea un tipo de datos, como se puede ver en la primera línea. A la función se le pasan cuatro parámetros, primero se le pasa el valor del ancho y del largo del tablero. Luego se le pasa la posición del punto de inicio y por último se le pasa la posición del punto del destino. Una vez dentro de la función se crea la variable que albergará la ruta retornaremos como solución. Y luego un bucle *while* que tiene como condición para que se ejecute que el punto en el que estemos no debe ser el punto destino, si es así, saldremos del bucle. Dentro de este se calcula en base a los índices a que dirección debemos movernos, una vez cumplamos la condición para movernos, se añade al vector *ruta* la orientación y actualizamos nuestra posición. Una vez terminemos el bucle se devuelve el vector *ruta* que contendrá las indicaciones. Como comentario he decidido implementar en este orden las condiciones para ir en sentido antihorario: Norte -> Este -> Sur -> Oeste.
