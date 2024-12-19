import CardColaborador from '../CardColaborador'
import './AreaTime.css'

const AreaTime = (props) => {
    return (
       (props.colaboradores.length > 0) && 
       <section 
            className='area-time' 
            style={{backgroundColor: props.corSecundaria}}
        >
            <h3 
                style={{borderColor: props.corPrimaria}}
            >
                {props.titleTime}
            </h3>

            <div className="colaboradores">
                {props.colaboradores.map(colaborador => 
                    <CardColaborador 
                        key={colaborador.nome}
                        background={{backgroundColor: props.corPrimaria}}
                        textColor={{color: props.corPrimaria}}
                        nome={colaborador.nome}
                        funcao={colaborador.funcao}
                        imagem={colaborador.imagem}
                    />
                )}
            </div>
            
        </section>
    )
}

export default AreaTime