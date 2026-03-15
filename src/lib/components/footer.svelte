<script>
    import ExternalSite from "./external_site.svelte";
</script>

<ul>
    <li>
        <ExternalSite name="github" site="https://github.com/SmoothTurtle872" />
    </li>
    <li>
        <ExternalSite name="itchio" site="https://smoothturtle872.itch.io/" />
    </li>
    <li>
        <p class="mini">
            This website is a personal project to show off all of my projects in
            one easy to access location
        </p>
    </li>
</ul>

<style>
    ul {
        background-color: #537fe7;
        width: 100%;
        list-style: none;
        display: flex;
        position: fixed;
        bottom: 0px;
        align-content: center;

        li {
            padding: 10px;
            align-content: center;
        }
    }

    .mini {
        font-size: 7px;
        width: 100rem;
        text-align: right;
    }
</style>
