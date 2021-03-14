/**
 * Funcion que comprueba si las palabras pasadas por parámetro en un array de string son palabras concatendas
 * @param str Array de string con las palabras para ser analizadas
 * @returns string con las silabas encadenadas de todas las palabras pasadas como entradas o en su defecto si no hay palabras concatenadas retorna un mensaje de error
 */
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