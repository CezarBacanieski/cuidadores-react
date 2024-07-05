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
  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para ser cuidadora da laime</h2>
        <CampoTexto label='Nome' placeholder='Digite seu nome' />
        <CampoTexto label='Cargo' placeholder='Digite seu cargo' />
        <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
        <ListaSuspensa label='Time' itens={times} />
      </form>
    </section>
  );
};
