import { error } from '@sveltejs/kit';
import { base } from '$app/paths';


export const ssr = false;
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.slug === 'mocca') {
		return {
			title: "M.O.C.C.A.NEN STERVEN DOOR KAMELENTEEN",
			content: `M.O.C.C.A. was zoals elke dinsdag in hun zoektocht naar kamelenteen verdwaald, maar dit keer waren ze dichterbij hun doel dan ooit tevoren.<br><br> Ze waren met hun karavaan van alle 3 de actieve leden in een woestijn beland, hier moest men natuurlijk wel een kameel kunnen vinden. Na twee dagen in de schroeiende hitte rondgestrompeld te hebben vonden ze eindelijk wat ze zochten; een oase met alles erop en eraan, er was zelfs een waterval. Dit was echter een fatamorgana.<br><br> Na een paar liter zand gedronken / geadt te hebben bleek dit fataal voor één van de moccanen. Geschrokken vertrokken de 2 andere moccanen snel op zoek naar een kameel om leeg te zuigen.  Wonder boven wonder vonden ze na een paar uur zoeken een verdwaalde kameel, de ene moccaan begon de kamelenteen te bewonderen en de andere begon aan de kameel te sabbelen in een poging om vocht binnen te krijgen. <br><br> De kameel raakte opgewonden door al deze aandacht en maakte een sprongetje van geluk, dit was echter de moccanen fataal aangezien de sprong landde op de sabbelaar die verpletterd werd door de kamelenteen. De kamelenteenbewonderaar kreeg een trap tegen z’n hoofd aan en stierf aan bloedverlies.
      <br><br>Dit was misschien wel de dood van deze moccanen maar mocca was al lang dood 
      `
		};
	}
	if (params.slug === 'taenia') {
		return {
			title: 'T.A.E.N.I.A. HOUDT LAATSTE VERGADERING',
			content: `Taenianen waren weer eens bij elkaar samen om een janksessie (vergadering) te houden.<br><br> Wegens hun gebrek aan een Vaderdier-figuur in hun leven lijden ze allen aan bindings- en verlatingsangst. Er werd heen en weer “vergaderd” over verscheidene redenen dat ze hun vaderdier toch niet aardig vonden en dat ze blij zijn dat het vaderdier niet terug kwam van het halen van melk. <br><br> Allemaal vaderdierloos gedrag dus, in de vergaderkamer die blauw zag van een van hun coping mechanisms, sigaren, werd het nu wel erg warm. Al die warme pakken en brandende sigaren zorgde ervoor dat een paar amici flauwvielen. De anderen begonnen weer te halicuneren en zagen hun zogenaamde moederdier, terwijl ze intens en huilend naar de muur aan het staren waren. <br> <br> In de tussentijd ging natuurlijk de rookmelder af en was de brandweer en politie onderweg naar hun vergaderlocatie, eenmaal aangekomen bij het huilende clubje maakte de politie zich zorgen over de gezondheid van de flauwgevallen tenianen. Dit vonden de andere tenianen echter geen probleem en ze verkondigden dat er geen reden was om te stressen. Terwijl een paar tenianen discussie aangingen met de politieagenten over het moederdier, kropen anderen steeds dichterbij. <br><br> Na gesynchroniseerd alle pistolen gestolen te hebben besloten ze dat de meest verstandige gang van zaken een gijzeling was. Dit ging echter niet ongemerkt, binnen 3 minuten stond de ME op de stoep, en werden de gijzelaars één voor één neergeschoten. Ze stierven allen opgelucht toen ze in hun sigaar induced psychosis visies zagen van hun vaderdier waarmee ze herenigd werden. 
            `
		};
	}
	if (params.slug === 'lucifer') {
		return {
			title: 'L.U.C.I.F.E.R. TREKT AAN HET KORTSTE LONTJE',
			content: `Lucifer hield, zoals gewoonlijk, een rituele verbranding. Ze verbrandden een condoom, wat schapen, de lucifer kandelaar en een Latijn woordenboek. <br><br>  Helaas ging dit niet helemaal volgens plan en riep het dispuut de Romeinse god Vulcanus op. Lucifer’s favoriete romeinse god was hier echter niet zo blij mee, Vulcanus sliep immers al eeuwen als een uitgedoofde vlam, net zo als lucifer nu is. Als wraak veroorzaakte hij daarom werelds grootste bosbrand. Een kettingreactie werd veroorzaakt: een gat in de ozonlaag, fucking veel ultraviolette straling, het uitsterven van planten, mens en dier… en oja het dispuut Lucifer, maar dat is van de minste zorg. 
            `
		};
	}
	if (params.slug === 'soixante-neuf') {
		return {
			title: 'L.D.G. SOIXANTE-NEUF EINDELIJK VAN DE BAAN',
			content: `Niet alleen de borrelhoek maar ook de vangrail van de A73 kleurde rood en blauw afgelopen zomer toen het L.D.G. in haar auto opweg was naar de kampweek. <br> <br> In een wanhopige poging alle knorren op de snelweg te ontwijken moest Vlugge Japie helaas zijn laatste toeter uitblazen. Terwijl de praeses met de anwb aan de telefoon sprak, stonden de clubgenoten te discussiëren naast de rokende motorkap. Was het de knor in de Citroën cactus die met zijn nederlandse rap hun radio phoenix overstemde? Waren het de bejaarden in de hoge renault espace die met hun slakkentempo hun “ambitie’’ beletten? Of hebben ze zichzelf toch iets te hoog ingeschat door met hoge snelheid achter die lamborghini aan te jagen? Het ontbrak de clubgenoten aan de rode draad, al waren ze die, laten we eerlijk zijn, al enige tijd geleden kwijtgeraakt. <br> <br> Een goed verhaal hebben ze al jaren niet meer, om een uur is er geen neufer meer op de borrel te vinden, ze winnen nooit meer van zout en inmiddels stemmen ze eigenlijk allemaal groenlinks.  <br> <br> Geschokt door hun nieuwe identiteitscrisis ploften ze neer naast de snelweg. De das zat toch ineens niet zo lekker meer als vroeger. Wie waren ze nog als ze niet meer domineren, niet meer louter rechts zijn en nu ook nog eens geen auto meer hebben?  <br> <br> Wanhopig keken ze hoe vlugge Japie werd weggesleept samen met hun identiteit en tevergeefs wachtten ze op een reddingsheli, limo of privéjet, want zo rijk waren hun ouders helemaal niet. Ze bliezen hun laatste ‘vo’ uit naast de snelweg. Alles beter dan spoorknor zijn. 
            `
		};
	}
	if (params.slug === 'corduroy') {
		return {
			title: 'CORDUROY ONDERGAAT EEN BLOEDIG EINDE',
			content: `Corduroy heeft tijdens de jaarlijkse traditie van de “verroding” dit keer een grote fout gemaakt, het gerucht op Ribbook ging namelijk dat rode muurverf genezende krachten tegen soa’s heeft en een goede antischurft zalf is.  <br> <br> Als proefdieren werden natuurlijk de sjaarzen gebruikt, een zwembad werd gevuld met de goedkoopst mogelijke muurverf  want het budget was al lang op door de inflatie van Mark Ratte. Hierna werden de aspirant-kameraden er één voor één ingetakeld, na 5 minuten marineren werden ze er uit gehaald.  <br> <br> Het was geslaagd, er was namelijk geen spraak meer van schurft, jammer genoeg (gelukkig) was er ook geen sprake meer van levende sjaarzen. Om de gedachten van de moord lost te laten besloten de levende Corduroyanen dat er maar één oplossing was, namelijk alles was los en vast zit op te snuiven.  <br> <br> Het begon bij het bier, maar escaleerde al snel tot rode bakstenen, K en de verf. In deze onnuchtere staat opperde de dictator dat het nu van noodbelang was dat ieders bloed werd gecontroleerd op roodheid en dat de verraders die geen rood bloed hadden werden geofferd. Echter bleek dat deze met drugs dichtgeslibde en verkalkte aderen helemaal geen rood bloed bevatten, hun bloed was namelijk blauw.  <br> <br> Terwijl het dispuut leegbloedde herinnerde een groot deel zich opeens, oja, mijn ouders zijn gewoon rijk. 
            Rest In Beace. 
            `
		};
	}
	if (params.slug === '9x7') {
		return {
			title: '9X7 HEEFT 63 EXISTENTIELE CRISES',
			content: `Na generaties lang te veel danoontjes met elkaar getongd te hebben, is dit kinderdispuut overleden aan incest. Hun speekselketen was een te hevig ingekleude kleurplaat geworden.   <br> <br>Helaas had niemand 9x7 verteld dat incest dus geen wincest is. Misschien hebben mensen ze wel gewaarschuwd, maar waren ze te druk met opblaasitems naar elkaars hoofd aan het gooien of bezig met een oude man vereren die net als zij van kleine kinderen houden.  <br> <br> Dit hardnekkige volk heeft er wel decennia over gedaan omdat ze vaak geen daadwerkelijke seks hebben of misschien weten kinderen niet hoe seks eigenlijk werkt. 9x7 was een hardnekkig volk of meer een plaag net zoals het zeer in de weg zitten bij de ingang van de kelderbar.  <br> <br> De vraag zal zijn of 9x7 mensen later gaan herinneren. Want het is niet alsof ze zooien, terwijl dat wel in hun dispuutslied wordt gezongen. Misschien moeten we na al die incest ze toch wel gaan cancelen, net als marco borsato van hun dispuutslied. RIP 9x7  <br> <br>
            9x7 heeft nooit bestaan, in tegenstelling tot sinterklaas
            
            `
		};
	}
	if (params.slug === 'bokkerijders') {
		return {
			title: 'Bokkerijders WORDEN NIET GEMIST',
			content: 'Rip'
		};
	}
	if (params.slug === 'kink-id') {
		return {
			title: 'K.I.N.K.-GEVOEL TEN EINDE',
			content: `Vrijdag 22 april 2023 RIP KINK-ID
            Ook op deze laatste dag van de werkweek, maakte KINK het befaamde stereotype waar: om 12 lagen ze al te dronken in bed.  <br> <br> Terwijl het dispuut droomde over roze en festivals, ging het luchtalarm af. HELP …. IS BINNEN GEVALLEN! KINK, zich onbewust van alle chaos, snurkte heerlijk door. Ook SSR kon de gevallen leden niet meer bereiken.  <br> <br> Ze waren al zo lang niet meer op SSR geweest, dat al het contact tussen dispuut en vereniging verloren was. Dan was het toch echt gebeurd: het einde van het KINK-gevoel. 
            `
		};
	}
	if (params.slug === 'bloq') {
		return {
			title: 'BLOQ',
			content: 'Welcome to our bloq. Lorem ipsum dolor sit amet...'
		};
	}
	if (params.slug === 'witte-wieven') {
		return {
			title: 'WITTE WIEVEN EINDELIJK KOEST',
			content: `Met een geschrokken blik kijken de schattige eerstejaars naar de borrelhoek. Hard gekrijs en onheilspellende kreten zijn te horen en men vraagt zich af wiens leven wordt bedreigd.  <br> <br> Het bestuur stapt erop af en rent naar de oorzaak van dit geluid: twee wieven in een debat over of de satisfyer 2.0 pro wel écht de beste satisfyer is. Oops. 
			<br> <br> De Witte Wieven blijven waar aan hun naam en staan als kwijnende geesten op de borrel te overleggen over hun week vol met slechte seks en net-niet klaarkomende orgasmes. Daarnaast had een van de wieven in een dronken bui geprobeerd om een daadwerkelijke zwaan als mascotte te vangen, bleek het een gans.  <br> <br> Deze wilde vrouwen drinken zich elke dinsdag goed vol met louter bier. Wanneer zij op een avond besloten zichzelf uit te dagen met een ronde sourz- bacardi - sourz - bier en bier, liep het uit de hand.  <br> <br> In een dronken ruis begonnen zij elkaar uit te dagen om de meest sensuele dildo te vinden van SSR. Helaas bleek het dat niet alles een dildo kan zijn als je maar dapper genoeg bent. Doorgescheurd en bebloed doordat iemand had geprobeerd de bokkenmeter als dildo te gebruiken, heerste er na al het gekrijs van de Wieven eindelijk stilte in de borrelhoek.
			<br> <br> WITTE WIEVEN - KOEST! 
            `
		};
	}
	if (params.slug === 'zephyr') {
		return {
			title: 'ZEE ONTDEKT DOOR ZEPHYR DIE ZELFS HEN TE ONTSTUIMIG WAS',
			content: `Zephyr, vernoemd naar de Griekse god Zephyros, verantwoordelijk voor de westenwind. Of… eigenlijk het westenkuchje. Verstopt op de zolderbar, gekleed in enkel hun wit-doorschijnende gewaden, vluchtten de zephyrianen jaarlijks richting het strand voor hun rust. Tijdens een ongeplande dispuutsduik besloot dit onstuimige dispuut om voor eeuwig te ontsnappen en met hun gezamenlijke westenwindkracht van 0,1 de zee te bevaren.  <br> <br> Helaas bleef hun zeil ontspannen staan in het gezicht van dit koele briesje. Gelukkig gaven deze dappere zeevaarders niet op: met hun boot vol schuimend bier dronken zij door totdat zij in een gezamenlijk onstuimige boer een goede wind het zeil in bliezen.  <br> <br> Eenmaal op zee bleken ze alleen vergeten te zijn om iets anders dan bier in hun boot mee te nemen. Na een week van stil dobberend op de Noordzee drankspellen spelen en luidkeels mamma mia liedjes  zingen, besloot het dispuut om over te gaan op een dieet van louter zeewater.  <br> <br> Volledig gedehydrateerd baden deze blauwe lotgenoten tot Zephyros voor hun redding, hun gebeden bleven onbeantwoord. 
            `
		};
	}
	if (params.slug === 'zoutkorrel') {
		return {
			title: 'HET ZOUTKORREL VERLIEST KARAKTER',
			content: `[Page intentianny left blank]`
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
			title: 'Terra F. STERFT IN CHAT',
			content: `Terra F. ging, om de overvloed aan rug en het gebrek aan ruggengraat te verhelpen en weer een goud dispuut te worden, op zoek naar het echte goud.  <br> <br> Als een Terraan over de dam is, dan volgt de rest. En zo geschiedde: Terra Forty-niner, op de mijn in, goed gevoed op schelvispekel en kaas. Helaas vond dit dispuut tijdens hun goudkoorts eerst Fool’s gold en overleed de helft van het dispuut aan arsenicumvergiftiging. Radeloos en vermoeid zocht het ruggendispuut verder, steeds dieper de mijn in. Toen er goud werd gevonden, was er een kort moment van euforie. Eindelijk! Van korte duur, het dispuut had zo ver doorgehakt, dat de mijn instabiel werd en instortte.  <br> <br> Zo stierf Terra F. in stilte.  
            `
		};
	}
	if (params.slug === 'volante') {
		return {
			title: 'ANTI-VO\'LANTE',
			content: `Anti-Vo`
		};
	}
	if (params.slug === 'amaryllis') {
		return {
			title: 'Amaryllis',
			content: `Ama-nee`
		};
	}
	if (params.slug === 'kobra') {
		return {
			title: 'K.O.B.R.A. EET EIGEN EITJES',
			content: `Het zelf claimende creatieve dispuut zat op een middagje lekker therapeutisch te vingerverven. De creaties zagen er net zo uit als hun mentale gemoedstoestand, niet fraai dus.  <br> <br> Niemand wist of het kwam door alle ingeademde loodhoudende verf en terpentine of dat het kwam doordat nachtmerries werkelijk zijn, maar alle creaties kwamen tot leven. Kobranen 

            <br> <br> Ze werden allemaal high van de verflucht. Vervolgens gingen ze ommeletten maken van de eitjes waardoor ze hun eigen lichting in de pan hebben gebakken en hebben opgegeten. Daardoor sterven ze uit.
            `
		};
	}
	if (params.slug === 'perropates') {
		return {
			title: 'Perropates',
			content: `Stinkpiraten`
		};
	}
	if (params.slug === 'vinum') {
		return {
			title: 'VAPEND VINUM BEVRIEST OP ZOEK NAAR WAARHEID',
			content: `Dispuut van waarheid, zo profileert VINUM zich. Waarheid door wijn zelfs, en dat is waar de eerste leugen begint. Zoveel wijn wordt er namelijk helemaal niet gedronken. <br> <br> Onwaarheidsdispuut dus, gevangen in een heuse identiteitscrisis. Want als je geen wijn bent, wat ben je dan wel? Vape? Slay? Sos? MDMA? Goedkope, ranzige wodka? Piemelliefde? Incest? Zoekend naar het antwoord op deze vraag trok VINUM door het land. Niet om de waarheid te verkondigen, maar om de waarheid te weten te komen.  <br> <br> Buiten de randstad begon de gemiddelde vinumist echter al te trillen… Toen iedereen al met elkaar had geregeld en de vapes opraakten begon de sfeer om te slaan. Op zoek naar een nachtwinkel om meer vapes te kopen kwam het dispuut er achter dat die buiten de randstad niet zo frequent voorkomen.  <br> <br> De stank van mest was niet meer te verbloemen met zoete fruitsmaakjes. Binnen het dispuut ontstond ruzie, want iedereen vond dat ‘ie recht had op de laatste vape’. Vechtend om het laatste chemische hijsje druivenvape ging VINUM in de koude nacht ten onder. Er bleef maar wijnig van over. En tja, de enige echte waarheid is: een heilige drie-eenheid van vape, wodka en sos is niet genoeg om de hemel te bereiken. <br> <br> See you in hell bitchesss.
            `
		};
	}
	if (params.slug === 'supra-modum') {
		return {
			title: 'HEEL SUPRA MODUM FRITUURT' ,
			content: `Frat boy dispuut Supra Modum heeft meer overeenkomsten met de VS dan je misschien zou denken als je naar hun kaaskoppen kijkt: veel SOA’s, ongewenste kinderen en een ernstig gebrek aan breincapaciteit.  <br> <br> Dit laatste werd ze helaas fataal tijdens de laatste will it fry OA. Want will it fry? Dachten de sumo’s toen ze naar hun balzak keken. Om toch wat potentiële radioactieve schade te voorkomen besloten ze het te proberen op een maagdelijke sjaars. Deze verschroeide helaas zijn hele mannelijkheid en moest daardoor noodgedwongen het dispuut verlaten.   <br> <br>Maarja waarom zou je iets niet doen alleen maar omdat het een kutidee is? Vol goede moed hingen ze hun zaakje in de friteuse. 
            Radioactieve schade is een understatement. Misschien was het schaamluis, aids of hun druiper. Of was er toch iemand uitgeschoten bij het roze koeken spel? Er zat in ieder geval iets op de sumo zakken wat er voor zorgde dat de frituur ontplofte en de hele klikfusie onder de gifgroene dampende substantie zat.  <br> <br> Er is geen verdere uitleg nodig over de staat van de leden, maar de leden die het overleefden waren in ieder geval geen mannen meer. Dus moest Supra Modum worden opgeheven.  <br> <br> Om hun laatste woorden nog te beantwoorden: yes, it will fry.
            `
		};
	}
	if (params.slug === 'cupa') {
		return {
			title: 'C.U.P.A. STIKT',
			content: `Cupa een dispuut dat veel potentie had. Helaas is dispuut al prenataal gestorven en heeft het nooit de kans gehad om op te kunnen groeien. <br> <br> Op de bedroefde avond waar het allemaal gebeurde, zat iedereen vol met moed en alchohol. Het desbetreffende dispuut zou ingezooid worden, maar het werd een avond met daadwerkelijk bloed, zweet en tranen, zo veel tranen. Een groot slagveld, waar zelfs de slag om Troje van opkijkt. Een roofdier die zijn prooi bij de nek doodbijt, en Cupa is dan niet het roofdier…  <br> <br>
            Het was mooi zolang het leefde, maar nu is het het toch tijd om het prenatale dispuut te cremeren en hun assen met de wind mee te laten waaien, net als de tabak in hun longen. Rest In Peace.
			<br> <br><a href="https://www.ikstopnu.nl/stoppen-met-roken/
            ">Stop nu!</a>`
		};
	}

	throw error(404, 'Not found');
}
