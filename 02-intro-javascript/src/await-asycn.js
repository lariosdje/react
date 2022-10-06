const getImage = async () => {
    const key = 'Bm1gXPGuzb8kmwEQIfkGIHKIge0zbby2'

    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}`);

    const { data } = await res.json();

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);


}

getImage();
console.log('HOLA');