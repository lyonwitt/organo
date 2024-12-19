import './CardColaborador.css'

const CardColaborador = ({nome, imagem, funcao, textColor, background}) => {
    return (
        <div className="colaborador">
            <div className='topo-card' style={background}>
                { imagem != '' ?
                    <img src={imagem} alt={nome} />
                  : <img src='/imagens/perfil_padrao.png' alt='Imagem padrão logo da Organo' />
                }
            </div>

            <div className='fim-card'>
                <h4>{nome}</h4>
                <h5>{funcao}</h5>
            </div>
        </div>
    )
}

export default CardColaborador