<footer>
    <div class="top">
        <img src="/icons/dcw-cropped.svg" alt="">
        <div class="links">
            <div>
                <h2>Platform</h2>
                <a href="#">Directus Core</a>
                <!-- More links -->
            </div>
            <div>
                <h2>Cloud</h2>
                <a href="#">Directus Core</a>
            </div>
        </div>
    </div>
   <div class="bottom">
    <div class="legal">
        <span>
            c 2023 All rights reserved
        </span>
        <a href="">License</a>
    </div>
    <div class="links">
        <a href="" class="fa-brands fa-github"></a>
        <a href="" class="fa-brands fa-linkedin"></a>
        <a href="" class="fa-brands fa-fa-docker"></a>

    </div>
   </div>
</footer>


<style>

    img{
        height: 40px;
    }

    footer{
        display: flex;
        align-items: flex-start;
        gap: 40px;
        margin: 0 30px;
        color: var(--ink-color);
        border-top: 1px solid var(--ink-color);
        margin-top: 1rem;
        background-color: bisque;
    }

    .top{
        border-bottom: 2px solid var(--ink-color);
        padding-bottom: 20px;
    }

    .top .links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }

    .bottom{
        padding: 20px 0;
        justify-content: space-between;
    }

    .links > div {
        display: grid;
        gap: 10px;
        margin-bottom: 30px;
    }

    footer h2{
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        color: var(--ink-color);
    }

    footer .legal{
        font-size: 12px;
    }

    footer .legal > a {
        margin: 0 4px;
    }

    footer .legal > span {
        margin-right: 10px;
    }

    .bottom .links{
        display: flex;
        gap: 18px;
    }

    @media (max-width: 620px) {
        footer {
            flex-direction: column;
        }

        .bottom{
            gap: 16px;
            flex-direction: column-reverse;
        }
    }

    @media (min-width: 621px) and (max-width: 1023px){
        footer {
            margin: 0 auto;
            max-width: 600;
            padding: 0;
        }

        .bottom .links > a {
            font-size: 24px;
        }
    }

    @media (max-width: 419px){
        footer{
            text-align: center;
            align-items: center;
        }

        .top .links{
            grid-template-columns: 1fr;
        }

        .bottom{
            align-items: center;
        }

        .legal > span {
            display: block;
            margin-right: 0;
            margin-bottom: 2px;
        }
    }

</style>