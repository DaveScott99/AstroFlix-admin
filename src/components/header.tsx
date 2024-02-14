import logo from '../assets/logo.png'
import { Nav } from './nav'

export function Header() {

    return (
        
        <header className="mx-auto max-full mb-16 py-4 px-12 flex justify-between items-center">
      
            <div>
                <img src={logo} alt="Astroflix logo" className='max-w-32'/>
            </div>
    
            <div>
                <Nav />
            </div>

            <div className='outline outline-2 rounded-md w-8 h-8 cursor-pointer'>
                <img className='rounded-md' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Account image" />
            </div>
    
      </header>
    )
}