import '../componentsCSS/Button.css'

const Button = (props) => {
    return (
            <button className="btn" type="submit"> Haz click {props.yourName} </button>
    )
}
export default Button;