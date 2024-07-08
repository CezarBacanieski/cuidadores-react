import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

export const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados da cuidadora da laime</h2>
        <CampoTexto
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o nome'
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label='Cargo'
          placeholder='Digite o cargo'
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label='Imagem'
          placeholder='Digite o endereço da imagem'
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label='Time'
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao children='Criar Card Da Cuidadora' />
      </form>
    </section>
  );
};
