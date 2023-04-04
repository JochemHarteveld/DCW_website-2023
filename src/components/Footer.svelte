<footer>
    <div class="top">
        <div class="logo">
            <img src="/icons/dcw-cropped.svg" alt="">
            <h1>DCWe gaan er aan</h1>
        </div>
        <div class="links">
            <div>
                <h2>SSR</h2>
                <a href="#">Pas opwaarderen</a>
                <a href="#">Maaltijdsite</a>
                <a href="#">Teller</a>

                <!-- More links -->
            </div>
            <div>
                <h2>Contact</h2>
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
        <a href="" class="fa-brands fa-github">
            <img src="/flaticon/envelope.svg" alt="Email icon">
        </a>
        <a href="" class="fa-brands fa-linkedin">
            <img src="/flaticon/instagram.svg" alt="Instagram icon">
        </a>
        <a href="" class="fa-brands fa-fa-docker">
            <img src="/flaticon/whatsapp.svg" alt="Whatsapp icon">
        </a>

    </div>
   </div>
</footer>


<style>

    img{
        height: 40px;
    }

    .logo{
        display: flex;
    }

    .logo h1{
        justify-content: center;
        line-height: 40px;
        margin-left: 6px;
        font-weight: bold;
        font-size: 24px;
    }

    footer{
        display: flex;
        align-items: flex-start;
        gap: 40px;
        margin: 0 30px;
        color: var(--ink-color);
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

    @media (max-width: 420px) {
        footer {
            background-color: red;
            text-align: center;
            align-items: center;
        }

        .top .links{
            grid-template-columns: 1fr;
        }

        .bottom{
            align-items: center;
        }

        .legal > span{
            display: block;
            margin-right: 2px;
        }
    }

    @media (max-width: 620px){
        footer {
            background-color: orange;
            flex-direction: column;
        }

        .bottom{
            gap: 16px;
            flex-direction: column-reverse;
        }

    }

    @media (min-width: 620px){
        footer{
            background-color: yellow;
            margin: 0 auto;
            max-width: 600px;
            padding: 0;
            flex-direction: column;

        }

        .top{
            grid-template-columns: repeat(3, 1fr);
        }

        .bottom .links > a{
            font-size: 24px;
        }

    }

</style>