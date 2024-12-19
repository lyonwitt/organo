import './Button.css'

const Button = (props) => {
    return(
        <div className="button">
            <button type={props.typeBtn} className={props.classNameBtn}>
                {props.children}
            </button>
        </div>
    )
}

export default Button