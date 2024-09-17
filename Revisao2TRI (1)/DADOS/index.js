//ARRAYS SÃO INDEXADOS
//POSSUEM MÉTODOS
//PODEM SER ITERADOS
const nome = "Luis";
const time = ["Gustavo", "Gaby", "Augusto", "Kruger", "Luis"];
//(PARENTESES), [COLCHETES], {CHAVES}
time.push("Matheus"); // SEMPRE NO FINAL DA LISTA
time.shift(); // REMOVE ALGUÉM DO INÍCIO
console.log(time);
console.log(time[2]); // Augusto
console.log(time[20]); // undefined
time[20] = "Gabriel";
console.log(time[20]); // Gabriel
// ITERAR - LOOP ATÉ O ESGOTAMENTO(FOR, FOREACH, WHILE, FOR IN, FOR OF)
for (var i = 0; i <= 4; i++) {
  console.log(time[i]);
}
