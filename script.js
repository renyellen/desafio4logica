//1 - crie uma função que exiba uma mensagem no console

function msg(mensagem){
  console.log(mensagem);
}
msg("Bem vind@");

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function meuNome(name){
  console.log(name);
}
meuNome("Renyellen");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function perfil(nome, idade, estilo){
  console.log("Olá ${nome},você tem ${idade} anos e seu estilo musical favorito é ${estilo}.");
}
perfil("Ana", "25", "gospel");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function filmMusic(filme, musica){
  console.log(`O seu filme preferido é ${filme} e a música é ${musica}`);
}
filmMusic("Vingadores", "Halleluia");