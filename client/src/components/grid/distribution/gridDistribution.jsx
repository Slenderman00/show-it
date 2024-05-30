import "./gridDistributionStyle.css"

export function Distribute100(props) {
    return (
        <>
            <div className="grid-0-100 grid-item">
                {props.one}
            </div>
        </>
    )
}

export function Distribute25252525(props) {
    return (
        <>
            <div className="grid-0-25 grid-item">
                {props.one}
            </div>
            <div className="grid-1-25 grid-item">
                {props.two}
            </div>
            <div className="grid-2-25 grid-item">
                {props.three}
            </div>
            <div className="grid-3-25 grid-item">
                {props.four}
            </div>
        </>
    )
}

export function Distribute5050(props) {
    return (
        <>
            <div className="grid-0-50 grid-item">
                {props.one}
            </div>
            <div className="grid-1-50 grid-item">
                {props.two}
            </div>
        </>
    )
}

export function Distribute2575(props) {
    return (
        <>
            <div className="grid-0-25 grid-item">
                {props.one}
            </div>
            <div className="grid-1-75 grid-item">
                {props.two}
            </div>
        </>
    )
}

export function Distribute255025(props) {
    return (
        <>
            <div className="grid-0-25 grid-item">
                {props.one}
            </div>
            <div className="grid-2-50 grid-item">
                {props.two}
            </div>
            <div className="grid-3-25 grid-item">
                {props.three}
            </div>
        </>
    )
}