<script>
    import { experience } from '$lib/store/experience.js'
</script>
<div>
    <h2>Experience</h2>
    {#each $experience as exp}
        <div>
            {exp.Company}
        </div>
    {/each}
    <div></div>
</div>

<style lang="scss"></style>
