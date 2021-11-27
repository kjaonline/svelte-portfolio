export async function getPosts() {
   return await fetch('https://api.krisalcordo.com/experiences')
        .then(res =>res.json())
        .then(data=>data)
}
