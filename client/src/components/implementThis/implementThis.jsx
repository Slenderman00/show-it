import "./implementThis.css"

export default function ImplementThis(props) {
    return( 
        <>
            <div className="implement-this">
                <div className="implement-this-title ">Implement This:</div>
                <img className="implement-this" src={props.src}/>
            </div>
        </>
    )
}