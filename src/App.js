import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import AreaTime from './componentes/AreaTime';
import { useState } from 'react';
import Rodape from './componentes/Rodape';

function App(props) {

  const listaTimes = [
        {
          nome: 'Next',
          corPrimaria: '#859493',
          corSecundaria: '#C7E3E1',
        },
        {
          nome: 'uReach',
          corPrimaria: '#928463',
          corSecundaria: '#F6E2B5',
        }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const dadosNovoColaborador = (colaborador) => {
      setColaboradores([...colaboradores, colaborador])
      console.log(colaboradores)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        allTimes={listaTimes.map(time => time.nome)}
        dadosEnviados = {colaborador => dadosNovoColaborador(colaborador)}
        h2="Preencha os dados para criar o card do colaborador:"
      />

      {listaTimes.map(
        time => <AreaTime 
                    key={time.nome} 
                    titleTime={time.nome} 
                    corPrimaria={time.corPrimaria} 
                    corSecundaria={time.corSecundaria}
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                />
      )}

      <Rodape />
    </div>
  );
}

export default App;
