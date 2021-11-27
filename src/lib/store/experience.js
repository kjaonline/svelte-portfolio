import { readable } from 'svelte/store'
import { getExperiences } from '$lib/api/content.js'

export const experience = readable([], (set) => {
    getExperiences().then(set)
})
