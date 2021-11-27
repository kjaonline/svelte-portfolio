import { readable } from 'svelte/store'


const getPosts = async () =>  {
   return await fetch('https://api.krisalcordo.com/experiences')
        .then(res =>res.json())
        .then(data=>data)
}

export const posts = readable([], (set) => {
    getPosts().then(set)
})
