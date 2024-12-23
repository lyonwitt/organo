import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import AreaTime from './componentes/AreaTime';
import { useState } from 'react';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App(props) {

  const [listaTimes, setListaTimes] = useState([
        {
          id: uuidv4(),
          nome: 'Next',
          cor: '#468D88',
        },
        {
          id: uuidv4(),
          nome: 'uReach',
          cor: '#928463',
        }
  ])

  const [colaboradores, setColaboradores] = useState([])


  function deletarColaborador (id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id ));
  }

  function favoritarColaborador(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  function mudarCorDoTime (cor, id) {
    setListaTimes(listaTimes.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  
  console.log(colaboradores)

  return (
    <div className="App">
      <Banner />
      <Formulario
        allTimes={listaTimes.map(time => time.nome)}
        dadosEnviados = {colaborador => setColaboradores([...colaboradores, colaborador])}
        dadosNovoTime = {novoTime => setListaTimes([...listaTimes, novoTime])}
      />

      {listaTimes.map(
        (time, indice) => <AreaTime
                              mudarCor={mudarCorDoTime}
                              key={indice}
                              id={time.id}
                              titleTime={time.nome} 
                              corPrimaria={time.corPrimaria} 
                              cor={time.cor}
                              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                              deleteColaborador={deletarColaborador}
                              favoritaColaborador={favoritarColaborador}
                          />
      )}

      <Rodape />
    </div>
  );
}

export default App;
