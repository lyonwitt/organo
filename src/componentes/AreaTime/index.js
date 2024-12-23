import CardColaborador from '../CardColaborador'
import './AreaTime.css'
import hexToRgba from 'hex-to-rgba'

const AreaTime = ({colaboradores, favoritaColaborador, deleteColaborador, mudarCor, cor, id, titleTime }) => {
    return (
       (colaboradores.length > 0) && 
       <section 
            className='area-time' 
            style={{backgroundColor: hexToRgba(cor, '0.5')}}
        >
            <input 
                type="color" 
                className="input-cor"
                onChange={evento => mudarCor(evento.target.value, id)}
                value={cor}
            />

            <h3 
                style={{borderColor: cor}}
            >
                {titleTime}
            </h3>

            <div className="colaboradores">
                {colaboradores.map((colaborador, indice) => 
                    {
                        return <CardColaborador 
                                    key={indice}
                                    background={{backgroundColor: cor}}
                                    textColor={{color: cor}}
                                    nome={colaborador.nome}
                                    id={colaborador.id}
                                    funcao={colaborador.funcao}
                                    imagem={colaborador.imagem}
                                    deleteColaborador={deleteColaborador}
                                    favoritaColaborador={favoritaColaborador}
                                />
                     }
                )}
            </div>
            
        </section>
    )
}

export default AreaTime