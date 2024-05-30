import './cssGridStyle.css'

export default function Grid(props) {
    return(
        <div className="container">
            {props.children}
        </div>
    )
}