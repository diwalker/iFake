import faker from 'faker/locale/pt_BR.js';
import cpfCnpjValidator from 'cpf-cnpj-validator';

const { internet, phone, address, random, company, date, lorem } = faker;
const { cpf: { generate } } = cpfCnpjValidator;

function gerarPessoa() {
  faker.locale = "pt_BR"; // definindo a localidade para português do Brasil

  const nome = faker.name.firstName() + ' ' + faker.name.lastName(); // concatenando o primeiro e último nome
  const email = faker.internet.email(nome); // utilizando o nome gerado para o email
  const telefone = faker.phone.phoneNumber('(##) #####-####'); // definindo formato do telefone
  const pais = 'Brasil'; // definindo país como Brasil
  const corFavorita = faker.commerce.color(); // pegando o nome da cor em vez do hexadecimal

  const pessoa = {
    nome,
    email,
    telefone,
    cpf: generate({ format: true }),
    dataNascimento: faker.date.between('1950-01-01', '2004-12-31').toLocaleDateString(),
    endereco: {
      cep: faker.address.zipCode(),
      rua: faker.address.streetName(),
      numero: faker.datatype.number({ min: 1, max: 9999 }),
      complemento: random.arrayElement(['', 'APTO', 'CASA']),
      bairro: faker.address.streetName(),
      cidade: faker.address.city(),
      estado: faker.address.stateAbbr(),
      pais
    },
    idade: faker.datatype.number({ min: 18, max: 99 }),
    genero: random.arrayElement(['Masculino', 'Feminino', 'Não-binário']),
    profissao: faker.name.jobTitle(),
    empresa: faker.company.companyName(),
    website: faker.internet.url(),
    interesses: [
      'Leitura',
      'Cinema',
      'Música',
      'Esportes',
      'Viagens',
      'Gastronomia',
      'Tecnologia',
      'Arte',
      'Moda',
      'Beleza',
      'Animais',
      'Natureza',
      'Política',
      'Economia',
      'Ciência',
      'História',
      'Religião',
      'Filosofia',
      'Psicologia'
    ],
    corFavorita,
    filmeFavorito: random.arrayElement(['Matrix', 'Star Wars', 'O Poderoso Chefão', 'De Volta para o Futuro']),
    musicaFavorita: random.arrayElement(['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California', 'Thriller']),
    esporteFavorito: random.arrayElement(['Futebol', 'Basquete', 'Tênis', 'Natação']),
    timeFavorito: random.arrayElement(['Flamengo', 'Corinthians', 'São Paulo', 'Palmeiras', 'Vasco', 'Botafogo', 'Fluminense', 'Cruzeiro', 'Atlético Mineiro', 'Santos', 'São Caetano', 'Santo André', 'São Bento', 'Coritiba', 'Athletico Paranaense', 'Internacional', 'Grêmio', 'Juventude', 'Caxias'])
  };

  return pessoa;
}

const pessoa = gerarPessoa();

// imprimir as propriedades de pessoa em um formato de lista simples
console.log('Nome:', pessoa.nome);
console.log('País:', pessoa.endereco.pais);
console.log('CPF:', pessoa.cpf);
console.log('Data de nascimento:', pessoa.dataNascimento);
console.log('Endereço:', pessoa.endereco.rua + ', ' + pessoa.endereco.numero + ' - ' + pessoa.endereco.complemento + ' - ' + pessoa.endereco.bairro);
console.log('Cidade:', pessoa.endereco.cidade);
console.log('Estado:', pessoa.endereco.estado);
console.log('Telefone:', pessoa.telefone);
console.log('E-mail:', pessoa.email);
console.log('Idade:', pessoa.idade);
console.log('Gênero:', pessoa.genero);
console.log('Profissão:', pessoa.profissao);
console.log('Empresa:', pessoa.empresa);
console.log('Website:', pessoa.website);
console.log('Interesses:', pessoa.interesses.slice(0, 5).join(', '));
console.log('Cor favorita:', pessoa.corFavorita);
console.log('Filme favorito:', pessoa.filmeFavorito);
console.log('Música favorita:', pessoa.musicaFavorita);
console.log('Esporte favorito:', pessoa.esporteFavorito);
console.log('Time favorito:', pessoa.timeFavorito);
