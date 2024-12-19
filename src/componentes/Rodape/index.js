import './Rodape.css'

const Rodape = () => {
    return(
        <footer className="rodape">
            <div className='icones'>
                <img src='/imagens/ig.png' width="16" />
                <img src='/imagens/fb.png' width="16" />
                <img src='/imagens/tw.png' width="16" />
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' width="100" alt='' />
            </div>
            <p>Desenvolvido por <strong>Lyon Wittemar</strong></p>
        </footer>
    )
}

export default Rodape