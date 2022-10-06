import {useFetchGifs} from './hooks/useFetchGifs'

import { GifItem } from './GifItem'

export const GridGifs = ({ category }) => {

    const {images, isLoading} =useFetchGifs (category);


    return (
        <>
            <div className='card-grid'>
                {
                    images.map(x =>
                    (<GifItem
                        key={x.id}
                        title={x.title}
                        url={x.url}
                    />)
                    )
                }
            </div>
        </>
    )
}
