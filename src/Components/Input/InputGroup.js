import Button from "../Button/Button";

const InputGroup = ({ type, placeholder, btnText, btnClass, modifier }) => {
    return (
        <div className={`input-group input-group--${modifier}`}>
            <input className="form-control" type={type} placeholder={placeholder} />
            <Button text={btnText} classes={btnClass} />
        </div>
    );
}

export default InputGroup;