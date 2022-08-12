import '../componentsCSS/Button.css'

const Button = (props) => {
    return (
        <>
            <a href='https://es.reactjs.org/' rel='noopener noreferrer'>
            <button className="btn"> Haz click {props.usuario} </button></a>
        </>
    )
}
export default Button;