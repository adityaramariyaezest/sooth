import InputGroup from "../Input/InputGroup";

const NewsLetter = (props) => {
    const { modifier, placeholder, buttonClass, buttonText } = props
    return (
        <InputGroup
            type="text"
            placeholder={placeholder}
            btnText={buttonText}
            btnClass={buttonClass}
            modifier={modifier}
        />
    );
}

export default NewsLetter;