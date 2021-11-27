<script>
    import { posts } from '$lib/store/blog.js'
</script>

<div>
    <h2>Blog</h2>
    {#each $posts as post}
        <div>
            {post.Title}
        </div>
    {/each}
    <div></div>
</div>
<style lang="scss"></style>
