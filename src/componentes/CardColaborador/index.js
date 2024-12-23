import { AiFillCloseCircle } from "react-icons/ai";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import './CardColaborador.css'

const CardColaborador = ({favorito, id, nome, imagem, funcao, background, deleteColaborador, favoritaColaborador}) => {
    function favoritar() {
        favoritaColaborador(id);
    }
    
    return (
        <div className="colaborador">
            <AiFillCloseCircle 
                className="deletar" 
                onClick={() => deleteColaborador(id)} />
            <div className='topo-card' style={background}>
                { imagem != '' ?
                    <img src={imagem} alt={nome} />
                  : <img src='/imagens/perfil_padrao.png' alt='Imagem padrão logo da Organo' />
                }
            </div>
            <div className='fim-card'>
                <h4>{nome}</h4>
                <h5>{funcao}</h5>
                <div className="favoritar">
                    { favorito 
                        ? <MdFavorite onClick={favoritar} style={{ color: "#992820" }} />
                        : <MdFavoriteBorder onClick={favoritar}/>
                    }
                </div>

            </div>
        </div>
    )
}

export default CardColaborador