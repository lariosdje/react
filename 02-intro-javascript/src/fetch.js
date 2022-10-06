const key = 'Bm1gXPGuzb8kmwEQIfkGIHKIge0zbby2'

const res = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}`);


res.then((res)=>{
    res.json()
    .then((data)=>{
        
        const {url} = (data.data.images.original);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
        

    })
})
.catch(console.warn); 