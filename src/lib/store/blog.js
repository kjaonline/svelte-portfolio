import { readable } from 'svelte/store'
import { getPosts } from '$lib/api/content.js'

export const posts = readable([], (set) => {
    getPosts().then(set)
})

