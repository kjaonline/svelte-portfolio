<script lang="ts">
    import Header from '$lib/header/Header.svelte';
    import Info from "$lib/info.svelte"
    import '../styles/app.css';
    import '../styles/normalize.css';
    import '../styles/typography.scss'
</script>

<Header />

<main>
    <section class="mainInfo">
        <Info />
    </section>

    <section class="pageContent">
        <slot />
    </section>
</main>

<footer>
</footer>

<style lang="scss">
    main {
        max-width: 1920px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: minmax(min-content, 300px) 70%;
        > section {
            padding: 10px;
        }
        .mainInfo {
        }
    }
</style>
