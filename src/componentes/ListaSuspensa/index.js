import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    const selectValue = (evento) => {

        props.alterSelect(evento.target.value)

    }

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select 
                valor={props.valor} 
                onChange={evento => props.alterValue(evento.target.value)} 
                required={props.obrigatorio}
                defaultValue=''
                value={props.valor}
            >
                <option value='' disabled>Selecione uma opção...</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa
