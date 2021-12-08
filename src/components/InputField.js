import PropTypes from "prop-types"

function InputField({ label, backgroundColor, type}){
    const style ={
        backgroundColor,
        padding: `${0.5}rem ${1}rem`,
        border:"solid 3px black",
    }
    const labelStyle = {
        display: "block",
        margin: `${0.5}rem ${0}rem`
    }
    return (
        <div>
            <label style={labelStyle}>{label}</label>
            <input type={type} style={style}></input>  
        </div>
      
    )
}
InputField.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    type: PropTypes.oneOf([PropTypes.number, PropTypes.string, PropTypes.simbol]),
}

export default InputField