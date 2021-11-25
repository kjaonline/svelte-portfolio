<script>
    let links =  [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'Blog',
            link: '/blog'
        },
        {
            text: 'Resume',
            link: '/resume'
        },
        {
            text: 'About',
            link: '/about'
        }
    ]

</script>

<header>
    <ul>
        {#each links as link}
            <li><a href={link.link}>{link.text}</a></li>
        {/each}
    </ul>
</header>

<style lang="scss">
    ul {
        list-style-type: none;
        display: flex;
        li {
            margin: 10px;
        }
    }
</style>
