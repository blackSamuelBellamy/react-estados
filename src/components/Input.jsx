import '../componentsCSS/Input.css';

const Input = ({type, inputId, campo, mainFunction}) => {
    return (
        <div className='inputContainer'>
            <input type={type} onChange = {mainFunction} id={`input${inputId}`} required />
            <label className='label' htmlFor={`input${inputId}`}> {campo} </label>
            <span></span>
        </div>
    );
}

export default Input;