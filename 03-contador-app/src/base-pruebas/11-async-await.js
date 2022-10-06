
export const getImagen = async() => {

    try {

        const apiKey = 'Bm1gXPGuzb8kmwEQIfkGIHKIge0zbby2';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
    
        if(url === undefined){
            throw new Error('Imagen no encontrada');
        }
        return url;

    } catch (error) {
        // manejo del error  
        console.log(error)
    }
}

