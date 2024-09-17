//DECLARANDO FUNÇÕES (MÓDULOS)

const nome = "Akyra";

function olaPessoa() {
  console.log("Olá, ${nome}");
}
export function textoMaiusculas(texto) {
  console.log(texto.toUpperCase());
}

export { nome, olaPessoa };
