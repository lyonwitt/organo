import './InputText.css';

const InputText = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                valor={props.valor} 
                onChange={evento => props.alterValue(evento.target.value)} 
                required={props.obrigatorio} 
                type="text" id='' 
                placeholder={placeholderModificado}
                value={props.valor}
            />
        </div>
    );

}

export default InputText