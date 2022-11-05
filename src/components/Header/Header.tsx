
import type {NavMenuOption, NavMenuOptions} from './types';

export interface Props {
    options : NavMenuOptions,
    pathname : string
}

export default function Header( {options, pathname} : Props ){

    console.log(pathname);

    return(<>
    
        <header> 
            { 
                options.map( (option : NavMenuOption, index : number) => (
                    <><div key={index}>
                        <a href={option.path}>
                            <div className={
                                option.path === pathname ? 'material-icons active-nav' : 'material-icons'
                            }>{option.icon}</div>
                        </a>
                    </div></>
                )) 
            }
        </header>

    </>)
}