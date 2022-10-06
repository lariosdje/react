export const apiGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Bm1gXPGuzb8kmwEQIfkGIHKIge0zbby2&q=${category}&limit=5`;
    
    const response  = await fetch(url);
    
    const {data} = await response.json();
    
    const gifs = data.map(x=>  ({
        id : x.id,
        url : x.images.downsized_medium.url,
        title: x.title
    }));

   

    return gifs;
}