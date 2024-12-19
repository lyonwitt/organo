import Button from '../Button';
import InputText from '../InputText';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const createCard = (evento) => {
        evento.preventDefault();
        
        props.dadosEnviados({
            nome,
            funcao,
            imagem,
            time
        })

        setNome('')
        setFuncao('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={createCard}>
                <h2>{props.h2}</h2>
                <InputText 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    alterValue = {valor => setNome(valor)}
                    valor={nome}
                />
                <InputText
                    obrigatorio={true} 
                    label="Função" 
                    placeholder="Digite a sua função. (Voluntário, VTL, Líder, LTP, Pastor)"
                    alterValue = {valor => setFuncao(valor)}
                    valor={funcao}
                />
                <InputText 
                    label="Imagem" 
                    placeholder="Insira o link da sua imagem de perfil"
                    alterValue = {valor => setImagem(valor)}
                    valor={imagem}
                /> 
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={props.allTimes}
                    valor={time}
                    alterValue = {valor => setTime(valor)}
                />
                <Button type="submit" classNameBtn="btn-first">
                    Criar Card
                </Button>
            </form>
        </section>
    );  
}

export default Formulario
