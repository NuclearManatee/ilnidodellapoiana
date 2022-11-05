import type { Geo } from "../types"

interface Props {
    coordinates : Geo
}

export default function Location( {coordinates} : Props ){


    return(<>
    
        <div>
            <span>
                location.
            </span>
        </div>

    </>)
}