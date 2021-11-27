<script>
    import { posts } from '$lib/store/blog.js'
</script>

<div>
    <h2>Blog</h2>
    {#each $posts as post}
        {post.Company}
    {/each}
    <div></div>
</div>
<style lang="scss"></style>
