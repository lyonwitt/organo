import Button from '../Button';
import Input from '../Input';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Formulario = (props) => {
    
    // Dados Colaboradores
    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [id, setID] = useState((uuidv4))
    // Dados Time
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [idTime, setIDTime] = useState((uuidv4))


    const createCard = (evento) => {
        evento.preventDefault();
        
        props.dadosEnviados({
            id,
            nome,
            funcao,
            imagem,
            time,
            favorito: false,
        })

        setID((uuidv4))
        setNome('')
        setFuncao('')
        setImagem('')
        setTime('')
    }

    const createTime = (evento) => {
        evento.preventDefault();
        
        props.dadosNovoTime({
            id: idTime,
            nome: nomeTime,
            cor: corTime,
        })

        setIDTime((uuidv4))
        setNomeTime('')
        setCorTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={createCard}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <input
                    required
                    onChange = {evento => props.alterValue(evento.target.value)} 
                    value = {id}
                    type='hidden'
                />

                <Input
                    tipo='text'
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    alterValue = {valor => setNome(valor)}
                    valor={nome}
                />
                <Input
                    tipo='text'
                    obrigatorio={true} 
                    label="Função" 
                    placeholder="Digite a sua função. (Voluntário, VTL, Líder, LTP, Pastor)"
                    alterValue = {valor => setFuncao(valor)}
                    valor={funcao}
                />
                <Input 
                    tipo='text'
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
            <form onSubmit={createTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <input
                    required
                    onChange = {evento => props.alterValue(evento.target.value)} 
                    value = {idTime}
                    type='hidden'
                />

                <Input 
                    obrigatorio
                    tipo='text'
                    label="Nome do Time" 
                    placeholder="Digite o nome do time" 
                    alterValue = {valor => setNomeTime(valor)}
                    valor={nomeTime}
                />
                <Input
                    obrigatorio
                    tipo='color'
                    label="Cor do Time" 
                    placeholder="Digite a cor do time"
                    alterValue = {valor => setCorTime(valor)}
                    valor={corTime}
                />
                <Button type="submit" classNameBtn="btn-first">
                    Criar Time
                </Button>
            </form>
        </section>
    );  
}

export default Formulario
