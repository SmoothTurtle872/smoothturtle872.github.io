<script>
    let { selected, options = [] } = $props();
</script>

<ul>
    {#each options as option}
        <li class={selected === option ? "selected" : ""}>
            <a href={option}>{option}</a>
        </li>
    {/each}
</ul>

<style>
    ul {
        background-color: #537fe7;
        width: 100%;
        list-style: none;
        display: flex;
        position: sticky;
        height: 40px;
        li a {
            padding: 10px;
            background-color: #00000000;
            border: none;
            color: #e9f8f9;
            text-decoration: none;
        }
        li {
            align-content: center;
            transition: 500ms;
        }
        li:hover {
            background-color: #ffffff55;
            transition: 500ms;
        }
    }
    .selected {
        background-color: #c0eef2;
        a {
            color: #181823;
        }
    }
</style>
