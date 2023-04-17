<script>
    let persons = [
        {name: "Simone", imgName: "simone.png", assignment: "Pitch een nieuw verzonnen, binge-waardige, Nederlandse reality serie aan Simone."},
        {name: "Shirley", imgName: "shirley.png", assignment: "Bedank Shirley op een unieke manier voor haar werk in de zorg"},
        {name: "Jasper", imgName: "jasper.png", assignment: "Show je beste Comic-Con outfit aan Jasper"},
        {name: "Jochem", imgName: "jochem.png", assignment: " Breng Jochem een vers uniek stuk fruit en laat hem deze eten."},
        {name: "Kris", imgName: "kris.png", assignment: "Ontwerp een brug die minimaal Kris haar gewicht kan houden."},
        {name: "Rimmert", imgName: "rimmert.png", assignment: "Maak samen met Rimmert een glas bier leeg door dit te consumeren met een vork."},
        {name: "Merel", imgName: "merel.png", assignment: "Doe met Merel een nieuwe mindfulness oefening."},
        {name: "Elvira", imgName: "elvira.png", assignment: "Overtuig Elvira om nog een keer een rietadje te proberen."},
    ]
</script>


<div class="container">
    <h1>DE REDACTIE</h1>
    <div class="header-img">
        <img src="/redactie_fotos/groepsfoto.jpg" alt="">
    </div>
    <p class="subtitle">elk dispuut kan maximaal 25 bierdopjes per redactielid te verdienen</p>
    <p class="fat">Redactieleden</p>
    <div class="list">
        {#each persons as person, index}
        <div class="card">
            {#if !(index % 2)}
            <div class="avatar">
                <img src="/redactie_fotos/{person.imgName}" alt="">
            </div>
            {/if}
            <p class="assignment">{person.assignment}</p>
            {#if (index % 2)}
            <div class="avatar">
                <img src="/redactie_fotos/{person.imgName}" alt="">
            </div>
            {/if}
        </div>
        {/each}
    </div>
</div>

<style>

    .container{
        max-width: 600px;
        margin: auto;
    }

    h1{
        margin: 1rem;
        text-align: center;
    }

    .header-img{
        max-width: 100%;
        margin: 1rem;
    }

    .list{
        margin: 1rem;
    }

    .card{
        display: flex;
        border: 1px solid var(--ink-color);
        margin: 5px 0;
        min-height: 100px;
    }

    img{
        max-width: 100%;
        border: 3px solid var(--ink-color);
        filter: sepia(.8) saturate(1.2);
    }

    .avatar img{
        margin: 1rem;
        height: 60px;
        min-width: 60px;
    }

    .subtitle, .assignment, .fat{
        margin: 1rem;
    }

    .fat{
        font-weight: bold;
    }

</style>