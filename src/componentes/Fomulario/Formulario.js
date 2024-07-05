import CampoTexto from '../CampoTexto/CampoTexto';
import './Formulario.css';

export const Formulario = () => {
  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para ser cuidadora da laime</h2>
        <CampoTexto label='Nome' placeholder='Digite seu nome' />
        <CampoTexto label='Cargo' placeholder='Digite seu cargo' />
        <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
      </form>
    </section>
  );
};
