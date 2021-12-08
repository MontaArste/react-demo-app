import PropTypes from "prop-types"

function Link({label, href, color,textDecoration}){
    const style ={
        padding: `${0.5}rem ${1}rem`,
        color,
        textDecoration
    }
    const labelStyle = {
        display: "block",
        margin: `${0.5}rem ${0}rem`
    }
    return (
        <div>
            <label style={labelStyle}>{label}</label>
            <a href={href} style={style}>Press here</a>  
        </div>
      
    )
}
Link.propTypes = {
    label: PropTypes.string
}

export default Link