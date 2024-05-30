import './cssGridStyle.css'

export default function Grid(props) {
    return(
        <div className="grid">
            {props.children}
        </div>
    )
}