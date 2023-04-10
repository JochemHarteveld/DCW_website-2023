<script>
    import disputen from "../../../disputen";
    import { page } from '$app/stores';
    import { base } from '$app/paths';


</script>

<div class="list">
    {#each disputen as dispuut}
    <div class="list-item">
        <a href="{base}{dispuut.dispuutPath}">
            <!-- <p>{dispuut.name}</p> -->
                <img class="cover" class:active={$page.url.pathname == dispuut.dispuutPath} src="{base}{dispuut.logoUrl}" alt="">
        </a>
    </div>
{/each}
</div>



<slot></slot>

<style>
  
    .list{
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        justify-content: space-between;
    }

    .cover{
        object-fit: contain;
        height: 60px;
        width: 60px;
        padding: 5px;
        border: 3px double var(--ink-color);
    }

    .active{
        border: 3px solid var(--ink-color);
    }
</style>

