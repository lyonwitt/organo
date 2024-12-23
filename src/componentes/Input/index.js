import './Input.css';

const Input = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`

    return (
        <div className="campo">
            <label>
                {props.label}
            </label>
            <input 
                valor={props.valor} 
                onChange={evento => props.alterValue(evento.target.value)} 
                required={props.obrigatorio} 
                type={props.tipo} id='' 
                placeholder={placeholderModificado}
                value={props.valor}
            />
        </div>
    );

}

export default Input