import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

export const Formulario = () => {
  const times = [
    'Cuida idoso bravo',
    'Cuida de idoso bonzinho',
    'So cuida de mulher',
    'So cuida de homem',
    'Nao cuida de problema mental',
    'So cuida de problema mental',
    'Nao da banho por nada',
  ];

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log('o form foi submetido');
  };
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados da cuidadora da laime</h2>
        <CampoTexto
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o nome'
        />
        <CampoTexto
          obrigatorio={true}
          label='Cargo'
          placeholder='Digite o cargo'
        />
        <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
        <ListaSuspensa obrigatorio={true} label='Time' itens={times} />
        <Botao children='Criar Card Da Cuidadora' />
      </form>
    </section>
  );
};
