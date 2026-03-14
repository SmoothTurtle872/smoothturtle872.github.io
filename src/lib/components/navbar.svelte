<script>
    let { selected, options = [] } = $props();
</script>

<ul>
    {#each options as option}
        <li class={selected === option ? "selected" : ""}>
            <button>{option}</button>
        </li>
    {/each}
</ul>

<style>
    ul {
        background-color: #537fe7;
        width: 100%;
        list-style: none;
        display: flex;
        li button {
            padding: 10px;
            background-color: #00000000;
            border: none;
            color: #e9f8f9;
        }
        :hover {
            background-color: #ffffff55;
        }
        position: sticky;
    }
    .selected {
        background-color: #c0eef2;
        button {
            color: #181823;
        }
    }
</style>
