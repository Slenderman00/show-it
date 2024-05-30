import logoUrl from './Logo_Show-IT_green.png'
import './logoStyle.css'

export default function Logo() {
    return(
        <div className="logoContainer">
            <img className='logoImg'
                src={logoUrl}
            />
        </div>
    )
}