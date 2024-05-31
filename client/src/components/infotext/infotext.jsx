import './infotextStyle.css'

export default function Infotext(props) {
    return(
        <div className="infoText">
            {props.children}
        </div>
    )
}