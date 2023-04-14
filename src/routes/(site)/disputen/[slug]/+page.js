import { error } from '@sveltejs/kit';
import { base } from '$app/paths';


export const ssr = false;
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.slug === 'mocca') {
		return {
			title: "M.O.C.C.A.NEN STERVEN DOOR KAMELENTEEN",
			content: `M.O.C.C.A. was zoals elke dinsdag in hun zoektocht naar een kamelenteen verdwaald, maar dit keer waren ze dichterbij hun doel dan ooit tevoren. Ze waren met hun karavaan van alle drie de actieve leden in een woestijn beland; hier moest men natuurlijk wel een kameel kunnen vinden. <br><br>
			Na twee dagen in de schroeiende hitte rondgestrompeld te hebben vonden ze eindelijk wat ze zochten; een oase met alles erop en eraan, er was zelfs een waterval. Dit bleek echter een fata morgana. Na een paar liter zand gedronken / geadt te hebben bleek dit fataal voor één van de M.O.C.C.A.nen. <br><br>
			Geschrokken vertrokken de twee andere M.O.C.C.A.nen, snel op zoek naar een kameel om leeg te zuigen. Wonder boven wonder vonden ze na een paar uur zoeken een verdwaalde kameel, de ene M.O.C.C.A.an begon de kamelenteen te bewonderen en de andere begon aan de kameel te sabbelen in een poging om vocht binnen te krijgen. De kameel raakte opgewonden door al deze aandacht en maakte een sprongetje van geluk. Dit bleek echter de M.O.C.C.A.nen fataal, aangezien de sprong landde op de sabbelaar die verpletterd werd door de kamelenteen. De kamelenteenbewonderaar kreeg een trap tegen z’n hoofd en stierf aan bloedverlies.<br><br>
			Door het verlies van deze laatste M.O.C.C.A.nen stierf het dispuut in de stilte van de woestijn.
			 
      `
		};
	}
	if (params.slug === 'taenia') {
		return {
			title: 'T.A.E.N.I.A. HOUDT LAATSTE VERGADERING',
			content: `T.A.E.N.I.A.ni waren weer eens bij elkaar samen om een janksessie (vergadering) te houden. Wegens hun gebrek aan een Vaderdier-figuur in hun leven lijden ze allen aan bindings- en verlatingsangst. Er werd heen en weer “vergaderd” over verscheidene redenen dat ze hun Vaderdier toch al niet aardig vonden en dat ze blij zijn dat het vaderdier niet terug kwam van het halen van melk.  <br><br>
			In de vergaderkamer, die blauw zag van een van hun copingmechanismen (sigaren), werd het nu wel erg warm. Al die warme pakken en brandende sigaren zorgde ervoor dat een paar amici flauwvielen. De anderen begonnen dan weer te hallucineren en zagen hun zogenaamde Moederdier, terwijl ze intens en huilend naar de muur staarden.  <br><br>
			In de tussentijd ging natuurlijk de rookmelder af. De brandweer en politie snelden zich naar hun vergaderlocatie, waar ze zich na aankomst bij het huilende clubje alleen maar meer zorgen maakten over de gezondheid van de flauwgevallen T.A.E.N.I.A.ni. Dit vonden de andere T.A.E.N.I.A.ni echter geen probleem en ze verkondigden dat er geen reden was om te stressen. Na de discussie verloren te hebben verlieten de agenten treurig de vergaderlocatie, dit was wat het startschot vormde voor de amici om zichzelf de tering in te drinken. In combinatie met de warmte, een laatste sigaren hotbox-sesh en hun pakken werd dit hun echter fataal. <br><br>
			RIP T.A.E.N.I.A., gone but also forgotten.
			`
		};
	}
	if (params.slug === 'lucifer') {
		return {
			title: 'L.U.C.I.F.E.R. TREKT AAN HET KORTSTE LONTJE',
			content: `Op de zolderbar hield L.U.C.I.F.E.R., zoals gewoonlijk, een rituele verbranding. Ze verbrandden een condoom, wat schapen en de L.U.C.I.F.E.R. kandelaar.  Helaas ging dit niet helemaal volgens plan en riep het dispuut de Romeinse god Vulcanus op. L.U.C.I.F.E.R.’s favoriete romeinse god was hier echter niet zo blij mee, Vulcanus sliep immers al eeuwen als een uitgedoofde vlam, vergelijkbaar met het dispuut zelf.  Als wraak veroorzaakte hij daarom ‘s werelds grootste bosbrand.  <br><br>

			In een poging de brand te blussen en Vulcanus weer tevreden te maken probeerden de dispuutsgenoten de nachtbar uit te zitten en nogmaals Ein Prosit te zingen, maar helaas was de draad van het dispuut al door de schikgodinnen afgeknipt. Een kettingreactie werd veroorzaakt: een gat in de ozonlaag, ultiem veel ultraviolette straling, het uitsterven van planten, mens en dier… en oja het dispuut L.U.C.I.F.E.R., maar dat is van de minste zorg.  <br><br>
			`
		};
	}
	if (params.slug === 'soixante-neuf') {
		return {
			title: 'L.D.G. SOIXANTE-NEUF EINDELIJK VAN DE BAAN',
			content: `Niet alleen de borrelhoek maar ook de vangrail van de A73 kleurde rood en blauw afgelopen zomer toen het L.D.G. in haar auto op weg was naar de kampweek. In een wanhopige poging alle knorren op de snelweg te ontwijken moest Vlugge Japie helaas zijn laatste toeter uitblazen.  <br><br>

			Terwijl de praeses met de ANWB aan de telefoon sprak, stonden de clubgenoten te discussiëren naast de rokende motorkap. Was het de knor in de Citroën Cactus die met zijn Nederlandse rap hun Radio Phoenix overstemde? Waren het de bejaarden in de hoge Renault Espace die met hun slakkentempo hun “ambitie’’ beletten? Of hebben ze zichzelf toch iets te hoog ingeschat door met hoge snelheid achter die Lamborghini aan te jagen?  <br><br>
			
			Het ontbrak de clubgenoten aan de rode draad, al waren ze die, laten we eerlijk zijn, al enige tijd geleden kwijtgeraakt. Een goed verhaal hebben ze al jaren niet meer, om één uur is er geen Neufer meer op de borrel te vinden, ze winnen nooit meer van Zout en inmiddels stemmen ze eigenlijk allemaal GroenLinks. Geschokt door hun nieuwe identiteitscrisis ploften ze neer naast de snelweg. De das zat toch ineens niet zo lekker meer als vroeger. Wie waren ze nog als ze niet meer domineren, niet meer louter rechts zijn en nu ook nog eens geen auto meer hebben?  <br><br>
			
			Wanhopig keken ze hoe Vlugge Japie werd weggesleept samen met hun identiteit en tevergeefs wachtten ze op een reddingsheli, limo of privéjet, want zo rijk waren hun ouders helemaal niet. Ze bliezen hun laatste ‘vo’ uit naast de snelweg. Alles beter dan spoorknor zijn.  <br><br>
			`
		};
	}
	if (params.slug === 'corduroy') {
		return {
			title: 'CORDUROY BLIJKT VAN BLAUW BLOED',
			content: `Corduroy heeft tijdens de jaarlijkse traditie van de “verroding” dit keer een grote fout gemaakt, het gerucht op Ribbook ging namelijk dat rode muurverf genezende krachten tegen soa’s heeft en een goede antischurftzalf is. Als proefdieren werden natuurlijk de sjaarzen gebruikt.  <br><br>
			Een zwembad werd gevuld met de goedkoopst mogelijke muurverf, want het budget was al lang op door de inflatie van Mark Ratte. Hierna werden de aspirant-kameraden er één voor één ingetakeld, waarna ze er na vijf minuten uit werden gehaald. Het experiment bleek geslaagd: er was namelijk geen sprake meer van schurft. Jammer genoeg (gelukkig) was er ook geen sprake meer van levende sjaarzen.  <br><br>
			Om de gedachten aan de moord lost te kunnen laten,  besloten de levende Corduroyanen dat er maar één oplossing was, namelijk alles was los en vast zit op te snuiven. Het begon bij het bier, maar escaleerde al snel tot rode bakstenen, K en de verf. In deze niet-nuchtere staat opperde de Dictator dat het nu van levensbelang was dat ieders bloed werd gecontroleerd op roodheid en dat de verraders die geen rood bloed hadden werden geofferd. Echter bleek dat hun met drugs dichtgeslibde en verkalkte aderen helemaal geen rood bloed bevatten, het bloed was namelijk blauw. Terwijl het dispuut leegbloedde kwam bij een groot deel de realisatie: oja, mijn ouders zijn gewoon rijk. <br><br>
			Rest In Beace… 
			 
            `
		};
	}
	if (params.slug === '9x7') {
		return {
			title: '63 (9X7) HEEFT EEN EXISTENTIELE CRISES',
			content: `Na generatie op generatie lang te veel danoontjes met elkaar getongd te hebben, is dit kinderdispuut eindelijk aan hen einde. De doodsoorzaak? Insect uiteraard. Hun speekselketen was een te hevig ingekleurde kleurplaat geworden. Helaas had niemand 9X7 verteld dat incest dus geen wincest is. Misschien hebben mensen hen wel gewaarschuwd. Misschien waren ze te druk met opblaasitems gooien naar elkaars hoofd. Misschien waren ze te druk bezig met een oude man vereren die net als hen houdt van kleine kinderen.  <br><br>

			9X7 als plaag heeft er wel een aantal decennia over gedaan omdat ze vaak geen daadwerkelijke seks hebben of als kinderen niet weten hoe seks eigenlijk werkt. Niet alleen als insect was 9X7 een plaag, maar ook op de borrel. Zo staan ze altijd zeer in de weg bij de ingang van de kelderbar of zingen ze over zooien, terwijl ze dat eigenlijk niet doen.   <br><br>
			
			De echte vraag is, hoe lang de herinnering van het dispuut 9X7 mensen nog bij zal blijven…Misschien is het maar beter hen alvast te cancelen, net zoals Marco B. in hun dispuutslied. Of echter, wie weet heeft 9x7 nooit echt bestaan?! Net zoals dat Sinterklaas niet bestaat… <br><br>
			
			RIP 9X7
			
            `
		};
	}
	if (params.slug === 'bokkerijders') {
		return {
			title: 'FATALE ONTMOETING TUSSEN BOKKEN EN ALCOHOL',
			content: `
			Na een kort weekendje weg kwamen de Bokkerijders allesbehalve heel weer terug naar Nederland. Te brak om te realiseren dat Nederland eigenlijk niet zo was als vroeger. Helemaal verwoest en in het begin van een nucleaire winter - niet dat ze dat zelf doorhadden. Neejoh, het was vast gewoon een grote hallucinatie, veroorzaakt door het drankmisbruik tijdens het weekendje.  <br><br>
Toen het promillage van het door hun bloed stromende alcohol daalde, realiseerde dit loshangend stuk gezelschap zich dat ook de winkels niet meer open waren. Gegrom en gekrijs van wanhoop stroomde uit hun monden. Want waar konden ze hun volgende pilspijp vinden om eventjes door te pilsenieren?!  <br><br>
Stuk voor stuk kwamen de  ontwenningsverschijnselen: als eerst het trillen, daarna de hoofdpijn, hartkloppingen, intense angst en het zweet. Eventjes slapen hielp ook niet, want het enige wat hun tot redding zou zijn was een goeie slok alcohol, wat het enige was dat ze nodig hadden. De Bokkerijders gingen als verslaafden op zoek naar iets, iets dat hun een beetje de hint van alcohol kon geven. Uiteindelijk belanden deze niet-meer-zulke-stoere mannen bij een krat vol methanol. Deze verslonden ze zonder na te denken. Het eerste wat ze konden merken was het verlies van hun zicht. Maar, de dorst was te groot en dus bleven ze doordrinken. Hun lever was als volgende aan de beurt en gaf het op. Stoppen deden ze pas toen ze er allemaal bij neervielen. Gestorven aan datgene waar ze zo hartstochtelijk voor leefden.  <br><br>
`
		};
	}
	if (params.slug === 'kink-id') {
		return {
			title: 'K.I.N.K.-GEVOEL TEN EINDE',
			content: `Zoals elke vrijdagdixo, maakte K.I.N.K. het befaamde stereotype waar: om twaalf uur lagen ze als roosjes te ronken in bed. Terwijl het dispuut droomde over roze, festivals en roze festivals, ging het luchtalarm af. HELPPPPPPP!!!! DE ROBOTS ZIJN BINNENGEVALLEN!!!!! <br><br>

			Onopgemerkt bleken ze onze wereld gehackt te hebben. Het enige wat over bleef was slechte festivalmuziek: louter balen. K.I.N.K. - zich onbewust van alle paniek en chaos - snurkte heerlijk door tijdens deze chaos. Ook het SSR-bestuur kon de slapende leden niet meer bereiken, of tenminste… ze waren voornamelijk even vergeten dat het dispuut nog steeds actief was op SSR. Ze waren al zo lang niet meer op SSR geweest, dat al het contact tussen het dispuut en de vereniging verloren was.  <br><br>
			
			Toen de dispuutsleden eindelijk wakker werden uit hun schoonheidsslaapje, bleken ze tot hun grote schrik geen kleur meer te herkennen. Kleurenblind en alleen zocht dit dispuut naar het uitgangsbordje dat niet meer te vinden was. K.I.N.K. ID zat vast in een kleurloze hel, vol met slechte festivalmuziek en geen roze wolk in zicht. Huilend en net-uit-de-maat dansend was het dan toch echt gebeurd: het einde van het K.I.N.K.-gevoel.  <br><br>
			 `
		};
	}
	if (params.slug === 'bloq') {
		return {
			title: 'BLOQ VEREERT MACHINE',
			content: `HET IS BLOQ GELUKT. Ze hebben een machine gecreëerd die voor hen al het eten kan maken waar hun vierkante hartje naar smacht. Bitterballen, frikandel speciaal XXL en triple Whoppers gedoopt in zoveel kaas dat je aderen al dichtslibben bij het aanzien ervan. De machine begon echter te merken dat deze “Bourgondische” mensen steeds meer bleven vragen. Maar deze machine was slim en leerde om zijn machtspositie als maker van eten te misbruiken.  <br><br>
			Hij begon steeds minder eten direct uit te geven. Alleen als BLOQqers de machine genoeg aandacht gaven kregen zij het eten wat ze o zo graag wilden. BLOQqers, verslaafd aan de overheerlijke maaltijden, realiseerden zich niet eens wat ze nou eigenlijk aan het doen waren. Ze gehoorzaamden de machine zonder enige twijfel, alles voor het bourgondisch genot. De machine werd sluwer en begon met het testen van de BLOQers: tot welke niveau’s kon hij ze door laten gaan? Wat bleek: moorden, aanslagen en andere gewelddadige daden, de BLOQqers deden het allemaal.  <br><br>
			Hun menselijkheid verdween steeds meer door hun lust. Na het blijven eten van wat de machine hun schonk, was het enige wat van de BLOQqers overbleef een groep vierkante hersenloze machines van vlees en bloed, verdorven en breinloos, voor in de eeuwigheid de bevelen opvolgend om zo hun nooit-eindigende eetlust te voldoen.  <br><br>
			`
		};
	}
	if (params.slug === 'witte-wieven') {
		return {
			title: 'WITTE WIEVEN EINDELIJK KOEST',
			content: `Met een geschrokken blik kijken de schattige eerstejaars naar de borrelhoek. Hard gekrijs en onheilspellende kreten zijn te horen en men vraagt zich af wiens leven wordt bedreigd. Het bestuur stapt erop af en rent naar de oorzaak van dit geluid: twee wieven in een debat over of de satisfyer 2.0 pro wel écht de beste satisfyer is. Oops.  <br><br>

			De Witte Wieven blijven waar aan hun naam en staan als kwijnende geesten op de borrel te overleggen over hun week vol met slechte seks en net-niet klaarkomende orgasmes. Daarnaast had een van de wieven in een dronken bui geprobeerd om een daadwerkelijke zwaan als mascotte te vangen, bleek het een gans.  <br><br>
			
			Deze wilde vrouwen drinken zich elke dinsdag goed vol met louter bier. Wanneer zij op een avond besloten zichzelf uit te dagen met een ronde sourz- bacardi - sourz - bier en bier, liep het uit de hand. In een dronken ruis begonnen zij elkaar uit te dagen om de meest sensuele dildo te vinden van SSR. Helaas bleek het dat niet alles een dildo kan zijn als je maar dapper genoeg bent. Doorgescheurd en bebloed doordat iemand had geprobeerd de bokkenmeter als dildo te gebruiken, heerste er na al het gekrijs van de Wieven eindelijk stilte in de borrelhoek. <br><br>
			
			WITTE WIEVEN - KOEST! 
			 
            `
		};
	}
	if (params.slug === 'zephyr') {
		return {
			title: 'ZEPHYR DE STRIJD TEGEN DE ZEE VERLOREN',
			content: `Zephyr, vernoemd naar de Griekse god Zephyros, verantwoordelijk voor de westenwind. Of… eigenlijk het westenkuchje. Verstopt op de zolderbar, gekleed in enkel hun wit-doorschijnende gewaden, vluchtten de Zephyrianen jaarlijks richting het strand voor hun rust.  <br><br>

			Tijdens een ongeplande dispuutsduik besloot dit onstuimige dispuut om voor eeuwig te ontsnappen en met hun gezamenlijke westenwindkracht van 0,1 de zee te bevaren. Helaas bleef hun zeil ontspannen staan in het gezicht van dit koele briesje. Gelukkig gaven deze dappere zeevaarders niet op: met hun boot vol schuimend bier dronken zij door totdat zij in een gezamenlijk onstuimige boer een goede wind het zeil in bliezen.  <br><br>
			
			Eenmaal op zee bleken ze alleen vergeten te zijn om iets anders dan bier in hun boot mee te nemen. Na een week van stil dobberend op de Noordzee drankspellen spelen en luidkeels Mamma Mia liedjes  zingen, besloot het dispuut om over te gaan op een dieet van louter zeewater. Volledig gedehydrateerd baden deze blauwe lotgenoten tot Zephyros voor hun redding, maar hun gebeden bleven onbeantwoord.  <br><br>
			`
		};
	}
	if (params.slug === 'zoutkorrel') {
		return {
			title: 'HET ZOUTKORREL OPGEHEVEN DOOR EIGEN HEROPVOEDING',
			content: `Destructief werd zelfdestructief bij het Zoutkorrel toen de laatste overwinning bij de Gotcha naar hun kop steeg. Denkend dat ze met hun bloemkool, scheerschuim en waterpistolen iedereen de pan in zouden hakken, kwamen ze zichzelf tegen tijdens het zooien toen ze een van hun eigen dispuutsgenoten in de lever raakte. Het SSR-bestuur was er klaar mee en besloot het Zoutkorrel weg te sturen naar een ‘heropvoedings-vakantiepark.’ Het Zoutkorrel moest hervormen wilden ze het royeren van het dispuut stoppen. <br><br>

			Stap voor stap leerden deze Zouters over dat alcohol helaas niet altijd het antwoord is, dat een destructief karakter niet hetzelfde is als een eigen persoonlijkheid, en dat het geen goed teken is als je de helft van de week niet meer kan herinneren. Na jaren aan personal growth besloten de Zouters om de shirts van de pepers te gaan wassen, maar eens een lange broek aan te trekken en dat één meter voor de hele avond wel genoeg was.  <br><br>
			
			Met goede moed en een nieuwe identiteit keerde dit dispuut terug naar de borrel. Maar helaas, dit bleek hun fataal. Ze werden de borrelhoek finaal uitgelachen en bijna gelyncht toen de andere borreldisputen hun laffe borrelgedrag zagen. Voor schut gezet en weer terug in een identiteitscrisis besloot het Zoutkorrel dat er nog maar één oplossing was. Zo sprongen zij gezamenlijk op de woensdagochtend de gracht in - de Bokkemeter achterna - om nooit meer boven water terug te keren.  <br><br>
			
			`
		};
	}
	if (params.slug === 'terra') {
		return {
			content:
				`<div style="display:flex;"><h1 style="margin-right: 10px;">Terra</h1> <a href="${base}/disputen/terra-f"><h1>F.</h1><a/></div>`
		};
	}
	if (params.slug === 'terra-f') {
		return {
			title: 'TERRA F. IS ONDER INVLOED VAN GOUDKOORTS',
			content: `Terra F. ging, om de overvloed aan rug en het gebrek aan ruggengraat te verhelpen en weer een goud dispuut te worden, op zoek naar het echte goud. Als een Terraan over de dam is, dan volgt natuurlijk de rest. En zo geschiedde: Terra F., de mijn in, goed gevoed op Schelvispekel en kaas.  <br><br>

			Helaas vond dit dispuut tijdens hun goudkoorts eerst Fool’s gold en overleed de helft van het dispuut aan arsenicumvergiftiging. Radeloos en vermoeid zocht het ruggendispuut verder, steeds dieper de mijn in. Toen er goud werd gevonden, was er een kort moment van euforie. Eindelijk! Van korte duur, het dispuut had zo ver doorgehakt, dat de mijn instabiel werd en instortte. Zo stierf Terra F. in stilte.   <br><br>
			
			`
		};
	}
	if (params.slug === 'volante') {
		return {
			title: 'VOLANTE VERLIEST DE COMMUNICATIE',
			content: `Volante dacht het slim te spelen. Eerst waren ze allemaal getrouwd met echte paardenfokkers met lekker veel cash. Na vervolgens hun mannen vervolgens na de bruiloft te vergiftigen, gebruikte ze hun welverdiende erfenissen om gezamenlijk bij te leggen voor een nieuwe Ark van Noah.  <br><br>
			Na het laten bouwen van deze ark sloten ze zichzelf hierin op, wachtende op de aankomende rampvloed. Echter, na een dag met alleen zichzelf op de ark liep het al fout. Het eten dat door een van de meiden was gekookt, was niet zout genoeg. Hierdoor ontstond een gigantisch drama, maar er was geen plek meer om boos naartoe te stompen. Dus gingen ze het oplossen op de enige manier die ze kenden: the silent treatment.  <br><br>
			Jammer genoeg heb je op een ark wel coöperatie nodig en dat kan alleen bereikt worden door duidelijke communicatie. De ark begon te vervallen uit ellende, maar nog steeds wilden de Volantes niet meer met elkaar praten. Individueel probeerde ze nog Supra Modum te bereiken om hun probleem op te lossen, maar Supra Modum bestond al lang niet meer. Zonder hulp van buitenaf werd de ark helemaal verwaarloosd en begon het te rotten. Gaten begonnen te ontstaan en de boot begon langzaam vol te raken met water. Uiteindelijk ging de ark onder in een hoop van verderf en ellende. De Voligirls die nog niet verhongerd waren, verdronken stilletjes in de oceaan. 
			`
		};
	}
	if (params.slug === 'amaryllis') {
		return {
			title: 'AMARYLLIS PROBEERT DE VERGRIJZING TE STOPPEN!',
			content: `Amaryllis was er klaar mee. De wereld is steeds meer aan het vergrijzen en niet aan het vergroenen. Tijd om daar verandering in te brengen. Met hun gecombineerde girl en brein power begonnen ze met het maken van supersporen. Deze zouden dan gelanceerd worden en de wereld bedekken, waarna de wereld weer prachtig groen zou worden. Éen ding: om de wereld te bedekken moesten de supersporen wel hoog genoeg komen. Alleen zou het verdacht zijn als er zomaar een raket de atmosfeer in wordt geschoten. Daarom kwamen ze op het geniale plan om een gigantische Dipsy te maken, gevuld met de supersporen. De beste dekmantel ooit, wie zou nou verwachten dat Dipsy gevaarlijk zou zijn? <br><br>
			Toen de gigantische Dipsy klaar was moesten ze het alleen nog maar de atmosfeer in schieten. Echter, zo goed als ze zijn met genetica zijn ze niet met engineering. Ze hadden, dachten ze, goeie booster raketten onder Dipsy bevestigt: maar dit bleken eerder grote explosieven. Toen de lancering begon keek iedere Amarylli vol vreugde naar hun meesterwerk. Na een paar seconden hoopte zij dat deze de lucht in zou zijn. In een tragische en compleet onverwachte plottwist explodeerden de boosterrakketen met een zodanig kracht dat alles in een radius van 5km helemaal verwoest werd. De supersporen waren ook niet heel ver gekomen, maar wel op de plek waar een minuut geleden nog Amarylli stonden. Daar, bij de plek waar ze zelf tot as verpulverd waren, kwam toch nog een klein stukje groen.  
			`
		};
	}
	if (params.slug === 'kobra') {
		return {
			title: 'K.O.B.R.A. KAN NIET OP TEGEN EIGEN CREATIES',
			content: `Het zelfgeclaimde creatieve dispuut zit een middagje lekker therapeutisch te vingerverven. Een kloddertje hier, een verfspatje daar. Ze moeten hun best doen om iets origineels te maken. Want net als hun “sfeerimpressies,” zijn ze ook niet orgineel in het wel eens verkleed gaan. Wanneer was überhaupt de laatste keer dat K.O.B.R.A. verkleed op de borrel stond? Ach ja, de creaties van hun vingerverven zien er net zo uit als hun mentale gemoedstoestand; niet fraai dus.  <br><br>

			Waarschijnlijk komt het door het high worden van alle loodhoudende verf en terpentine, of door al het achterover gooien van anytimers in de vorm van bekertjes verf-water, maar alle creaties komen tot leven.  <br><br>
			
			Normaalgesproken is de kamer erg kleurrijk, net als dat de Kobranen zelf kleurrijk zijn, maar nu onttrekken alle kleuren van de kamer zich en wordt het vervangen door een onaardse grauwigheid. Hier schrikken de Kobranen van, want zij kennen niet anders dan kleur! De creaties worden steeds levendiger. Uit de hoek van de kamer beginnen ze langzaam hun kant op te komen. Met elke stap die wordt gezet, wordt de wereld steeds meer zwart en wit.  <br><br>De kobranen denken: Ik stem nog liever rechts dan dat al het kleur verdwijnt! Zonder erbij na te denken pakken ze de dichtstbijzijnde pot verf en slurpen deze naar binnen. Het laatste beetje houvast aan kleur. De Kobranen vallen in een korte tijd één voor één neer op de vloer. Waren de creaties echt? Of was het enkel hun verbeelding? Helaas is er niemand meer die het na kan vertellen.  <br><br>
			
			Tegen de tijd dat er hulp aankomt, zijn de lichamen al koud. Verschrikt en vol verwondering kijken mensen de kamer in. Ondanks dit gruwelijke plaatje en alle chaos eromheen, zit er eigenlijk ook wel iets moois en vredigs in. Dit plaatje, deze scene, K.O.B.R.A.’s laatste kunstwerk.   
			 `
		};
	}
	if (params.slug === 'perropates') {
		return {
			title: 'PERROPATES HOUDT GEVAARLIJKE BBQ',
			content: `Perropates, een vrolijk dispuut met een grote liefde voor papegaaien. Maar toen de vogelgriep toesloeg, werden veel van hun papegaaien ziek en stierf de grote meerderheid van hun identiteit. Dit was een grote klap voor de perros en het was voor sommige het begin van het einde. De Perropaten gaven hun papegaaien een waardig afscheid en richtten hun aandacht op een nieuw thema: cowboys. <br><br>

			Maar leren van hun fouten doen ze blijkbaar niet. Een van de koeien bleek besmet te zijn met de gekke koeien ziekte en dit had desastreuze gevolgen. Na een BBQ begonnen de leden langzaam maar zeker de symptomen van de ziekte te vertonen: ze kregen moeite met lopen, begonnen rare geluiden te maken en sommigen begonnen zelfs te kwijlen en hun bier te herkauwen. Al had dit ook gewoon door de alcohol kunnen komen<br><br>
			De gekke koeien ziekte had zijn tol geëist en de eens zo trotse cowboys waren nu veranderd in hulpeloze slachtoffers. Het dispuut, dat ooit gevuld was met gelach en gezang, was nu stil en verlaten.
			`
		};
	}
	if (params.slug === 'vinum') {
		return {
			title: 'VINUM VAPEND TEN ONDER',
			content: `Dispuut van waarheid, zo profileert VINUM zich. Waarheid door wijn zelfs, en dat is waar de eerste leugen begint. Zoveel wijn wordt er namelijk helemaal niet gedronken. Onwaarheidsdispuut dus, gevangen in een heuse identiteitscrisis. Want als je geen wijn bent, wat ben je dan wel? Vape? Slay? Sos? MDMA? Goedkope, ranzige wodka? Piemelliefde? Incest?  <br><br>

			Zoekend naar het antwoord op deze vraag trok VINUM door het land. Niet om de waarheid te verkondigen, maar om de waarheid te weten te komen. Buiten de randstad begon de gemiddelde VINUMist echter al te trillen… Toen iedereen al met elkaar had geregeld en de vapes opraakten begon de sfeer om te slaan.  <br><br>
			
			Op zoek naar een nachtwinkel om meer vapes te kopen kwam het dispuut er achter dat die buiten de randstad niet zo frequent voorkomen. De stank van mest was niet meer te verbloemen met zoete fruitsmaakjes. Binnen het dispuut ontstond ruzie, want iedereen vond dat ‘ie recht had op de laatste vape’. Vechtend om het laatste chemische hijsje druivenvape ging VINUM in de koude nacht ten onder. Er bleef maar wijnig van over. En tja, de enige echte waarheid is: een heilige drie-eenheid van vape, wodka en sos is niet genoeg om de hemel te bereiken. See you in hell bitchesss.
			`
		};
	}
	if (params.slug === 'supra-modum') {
		return {
			title: 'HEEL SUPRA MODUM FRITUURT' ,
			content: `Frat boy dispuut Supra Modum heeft meer overeenkomsten met de VS dan je misschien zou denken als je naar hun kaaskoppen kijkt: veel SOA’s, ongewenste kinderen en een ernstig gebrek aan breincapaciteit. Dit laatste werd ze helaas fataal tijdens de laatste will it fry OA. Want, “will it fry?” dachten de SuMo’s toen ze naar hun balzak keken.  <br><br>

			Een onschuldige sjaars probeerde het als eerste, maar verschroeide helaas zijn mannelijkheid en moest daardoor noodgedwongen het dispuut verlaten. Maarja waarom zou je iets niet doen alleen maar omdat het een kutidee is? Vol goede moed hingen ze hun zaakje in de friteuse.  <br><br>
			
			Radioactieve schade is een understatement. Misschien was het schaamluis, aids of hun druiper. Of was er toch iemand uitgeschoten bij het roze koekenspel? Er zat in ieder geval iets op de SuMo-zakken wat er voor zorgde dat de frituur ontplofte en de hele klikfusie onder de gifgroen dampende substantie zat. Er is geen verdere uitleg nodig over de staat van de leden, maar de leden die het overleefden waren in ieder geval geen mannen meer. Dus moest Supra Modum worden opgeheven. Om hun laatste vraag nog te beantwoorden: yes, it will fry. <br><br>
			`
		};
	}
	if (params.slug === 'cupa') {
		return {
			title: 'C.U.P.A. STIKT',
			content: `C.U.P.A. - een dispuut dat veel potentie had. Helaas is het dispuut al prenataal gestorven en heeft het nooit de kans gehad om op te kunnen groeien. Op de bedroefde avond waar het allemaal gebeurde, zat iedereen vol met moed en alchohol. Het desbetreffende dispuut zou ingezooid worden, maar het werd een avond met daadwerkelijk bloed, zweet en tranen, zo veel tranen. Een groot slagveld, waar zelfs de slag om Troje van opkijkt. Een roofdier die zijn prooi bij de nek doodbijt, en C.U.P.A. is dan niet het roofdier…  <br><br>

			Het was mooi zolang het leefde, maar nu is het het toch tijd om het prenatale dispuut te cremeren en hun assen met de wind mee te laten waaien, net als de tabak in hun longen. Rest In Peace. <br><br>
			
			<a href="https://www.ikstopnu.nl/stoppen-met-roken/
            ">Stop nu!</a>`
		};
	}

	throw error(404, 'Not found');
}
