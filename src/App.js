import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Fomulario';
import Time from './componentes/Time';

function App() {

  const times = [
    
  ]
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className='App'>
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nome='Cuida idoso bravo' />
      <Time nome='Cuida idoso bonzinho' />
      <Time nome='Só cuida de mulher' />
      <Time nome='Só cuida de homen' />
      <Time nome='Não cuida de problema mental' />
      <Time nome='Só cuida de problema mental' />
      <Time nome='Não da banho por nada' />
    </div>
  );
}

export default App;
