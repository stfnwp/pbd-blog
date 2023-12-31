export const allBeerTypes = [
  'Lager',
  'Kellerbier',
  'Märzen',
  'Rotbier',
  'Dunkel',
  'Helles'
] as const
export type BeerType = (typeof allBeerTypes)[number]

interface Rating {
  taste: number
  schuettability: number
  overall: number
}

export type BlogEntry = {
  id: string
  date: string
  type: BeerType
  title: string
  description: string
  rating: Rating
  content: string
  image: string
}

export const entries: BlogEntry[] = [
  {
    id: 'lang',
    date: '26.08.2023',
    type: 'Helles',
    title: 'Lang Hell',
    description: 'Solides, schlankes Helles.',
    rating: { taste: 3, schuettability: 4, overall: 3 },
    content: `Ein Helles der Lang Bräu aus Schönbrunn im Fichtelgebirge sollte heute meine Brotzeitbegleitung werden.<br /> Im Glas präsentiert sich ein filtriertes, strohblondes Helles, was in der Nase eine feine malzige Note zeigt. Die für ein Helles typische Schaumkrone verfliegt schnell, daher kann der Sud gleich ungebremst hinabfließen.<br /> Das mit nur 4,5% recht schlanke Helle weiß mit einem runden Malzaroma in Kombination mit einer minimalen Herbe vor allem den auf widerstandslose Trinkbarkeit ausgerichteten Trinker zu überzeugen.<br /> Aber auch so ist es eine gelungene Begleitung zur Brotzeit oder anderen Mahlzeiten.`,
    image: 'lang-hell.webp'
  },
  {
    id: 'hetzelsdorfer',
    date: '08.08.2023',
    type: 'Helles',
    title: 'Hetzelsdorfer Vollbier',
    description: 'Ein Vollbier, das nach Weizen riecht?',
    rating: { taste: 3, schuettability: 3, overall: 3 },
    content: `Beim Schnüffeltest wäre ich bei einer Blindverkostung sicher darauf hereingefallen:<br /> Das muss ein Weizenbier sein! - Denkste, das ist ein bernsteinfarbenes Vollbier!?<br />Nachdem der nasale, hefige Irrtum verflossen ist, zeigt sich im Geschmack eine typische "altfränkische" Malzigkeit, das Bier macht allgemein in Nase und Gaumen einen klassischen Old School Eindruck.<br /> Im Abgang zeigt sich eine trockene Herbe, die das ganze abrundet.<br /> Das filtrierte, eher dunkel-bernsteinfarbige Bier mit geringer Spundung kann man gut zu einer fränkischen Brotzeit oder auch einfach so mal trinken.`,
    image: 'hetzelsdorfer.webp'
  },
  {
    id: 'neder-keller',
    date: '06.08.2023',
    type: 'Kellerbier',
    title: 'Neder Kellerbier',
    description: 'Schmeckt, wie es das Etikett verspricht!',
    rating: { taste: 3, schuettability: 2, overall: 3 },
    content: `Die Brauerei Neder aus Forchheim, weithin für die Schwarze Anna bekannt, stellt sich heute mit ihrem Kellerbier vor.<br />Im Glas zeigt sich eine typische Kellerbier-Flüssigkeit: Unfiltriert, goldfarben und mit vernachlässigbarer Spundung.<br />In der Nase wird allerdings schon das erste Ausrufezeichen gesetzt:<br /> Hier ist deutlich kräftigeres Malzaroma am Start, als bei manch anderem Konkurrenten.<br />Das Bier macht einen klassichen, kräftigen Eindruck und auch der Hopfen wurde nicht vergessen.<br />Nachdem die Malzigkeit vorbeigeglitten ist, folgt ein erkennbar bitterer Abgang.<br />Dieses Bier ist eher an den Genießer adressiert, der kräftige Geschmack bei Malz und Hopfen mindert eine zügige Schüttability.`,
    image: 'neder-keller.webp'
  },
  {
    id: 'greifenklau-keller',
    date: '05.08.2023',
    type: 'Kellerbier',
    title: 'Greifenklau Kellerbier',
    description: 'Solide Bamberger Kellerbier-Angelegenheit',
    rating: { taste: 3, schuettability: 4, overall: 3 },
    content: `Im Glas präsentiert sich ein relativ helles, unfiltriertes Gebräu mit geringer Spundung.<br /> Die Nase wird mit reichlich Malzaromen begrüßt und so geht es auch am Gaumen weiter.<br />Das Greifenklau Kellerbier ist eine leicht trinkbare, lockere Angelegenheit. Schnörkellos und ohne Zicken läuft es in die ohnehin verwöhnte fränkische Biertrinkerkehle hinunter, ohne einen signifikant-speziellen Eindruck zu hinterlassen.`,
    image: 'greifenklau-keller.webp'
  },
  {
    id: 'dorn-dunkel',
    date: '30.07.2023',
    type: 'Dunkel',
    title: 'Dorn Dunkel Export',
    description: 'Dunkles mit bitterem Abgang - man lernt nie aus!',
    rating: { taste: 2, schuettability: 2, overall: 2 },
    content: `Die Nase wird nach dem obligatorischen Flaschen-Riechtest von kräftigen Malznoten begrüßt, was bei einem Dunklen immer zu erwarten ist. <br /> Im Glas zeigt sich ein kastanienbraunes, dunkles Bier mit oppulenter Schaumkrone, welche leider nicht lange anhält. Beim ersten Schluck offenbart sich zum initial gerochenen, dominanten Malzaroma allerdings eine ungeahnte Wendung:<br /> Nachdem die feinen Malzaromen den Gaumen hinabgeglitten sind, macht sich eine markante Bittere breit, welche kurz anhält und in einem wässrigen Abgang mündet.<br /> Sowas hab ich bei einem Dunklen in dem Ausmaß noch nicht im Glas, man lernt nie aus.<br /> Wer malzbetonte dunkle Biere verehrt, wird mit diesem Gebräu nur bedingt seine Freude haben, die Hopfenbittere in der zweiten Trinkhälfte ist für diesen Biertyp mehr als ungewohnt.`,
    image: 'dorn-dunkel.webp'
  },
  {
    id: 'bayer-knoerzla',
    date: '28.07.2023',
    type: 'Rotbier',
    title: 'Bayer Knörzla',
    description: 'Ein Rotbier für alle Fälle!',
    rating: { taste: 5, schuettability: 5, overall: 5 },
    content: `Gleich nachdem man mit dem Riechkolben die Flasche nach deren geschmacklichen Inhalten auskundschaftete, konnte man die feinen getreidigen Noten erahnen, die dieses Bier verspricht. Im Glas offenbart sich ein unfiltriertes rotbräunliches Gebräu ohne Spundung.<br /> Schon der ersten Schluck macht Freude auf mehr, hier sind Malz und Hopfen derart gekonnt ausgewogen, dass eine äußerst süffige Angelegenheit zu erwarten ist. Dies wird im weiteren Trinkverlauf mehr als erfüllt:<br />Ein brotig-getreidiges Bier mit sensationeller Balance lässt das Biertrinkerherz höherschlagen.<br />Die fehlenden Hopfennoten machen sich hier kaum negativ bemerkbar, vielmehr kann man sich an den herrlich malzigen Aromen erfreuen und hoffen, dass genug Nachschub vorhanden ist.`,
    image: 'bayer-knoerzla.webp'
  },
  {
    id: 'mager-maerzen',
    date: '26.07.2023',
    type: 'Märzen',
    title: 'Mager Märzen',
    description: 'Klare Empfehlung auch für Nicht-Märzen-Trinker!',
    rating: { taste: 4, schuettability: 5, overall: 4 },
    content: `Im Glas zeigt sich ein goldfarbenes Gebräu mit leichter Spundung, was rein farblich in manchen fränkischen Gefilden locker als Helles durchgehen könnte.<br /> Schon in der Nase breiten sich herrliche Aromen aus, welche in leichten Nuancen an reife Beeren und Waldhonig erinnern. Am Gaumen zeigt sich eine grandiose geschmackliche Balance, dieses Märzen könnte definitiv als gut gewürztes Helles durchgehen!<br /> Zudem gehört mit einem Alkoholanteil von 5,1% dieses Märzen zu den eher leichteren Vertretern seiner Art.<br /> Der perfekt abgestimmte Geschmack sorgt zusammen mit dieser Leichtigkeit für ein wahrhaft meisterliches Trinkerlebnis, was sich kein Bierfreund entgehen lassen sollte.`,
    image: 'mager.webp'
  },
  {
    id: 'beck-kellerbier',
    date: '07.07.2023',
    type: 'Kellerbier',
    title: 'Beck Bräu Kellerbier',
    description: 'Eins ist nicht genug!',
    rating: { taste: 4, schuettability: 5, overall: 4 },
    content: `Die Nase wird von einem herrlich malzigen, leicht karamelligen und röstmalzigem Gerüch begrüßt.<br /> Im Glas zeigt sich eine bernsteinfarbene, relativ trübe uns somit undurchsichtige Flüssigkeit.<br /> Im Antrunk folgt dann zu Beginn eine kleine Malzexplosion, welche in einer äußerst zurückhaltenden Herbe endet.<br />War ich zu Beginn des Seidlas etwas enttäuscht, dass der Hopfen keine sonderliche Präsenz zeigt, konnte man sich im weiteren Trinkverlauf äußerst mit diesem Gebräu anfreunden.<br />Dieses Kellerbier lässt sich wunderbar süffig trinken, ich bemitleide jeden, der keine zweite Flasche davon zur Hand hat.<br />Egal, ob man Astronaut ist, oder nicht: Mit diesem Gebräu lässt sich wahrhaft eine Rakete zünden!`,
    image: 'beck.webp'
  },
  {
    id: 'foerst-lager',
    date: '05.07.2023',
    type: 'Lager',
    title: 'Först Drügendorf Lager',
    description: 'Ist das etwa Bierschinken in der Nase?',
    rating: { taste: 3, schuettability: 4, overall: 3 },
    content: `Nach Öffnen der Flasche sorgte mein neugieriges "den Zinken hineinstecken" für ein spontantes "Ist da Bierschinken drin?".<br />Im Glas präsentiert sich ein dunkel bernsteinfarbiges, dezent ins rötliche gehendes und leicht trübes Lagerbier mit geringer Spundung.<br/> 
Das hat das dunkle Braun des Etiketts angekündigt, nichtsdestotrotz hätte ich ein helleres Lager erwartet.<br /><br />
Die Nase bemerkt deutliche Röstmalznoten, welche man durchaus als ins Rauchige gehend bewerten kann.<br /> 
Im Mund zeigt sich eine karamellige Würze, welche von einer moderaten Herbe vollendet wird, die nur eine dezente Bittere hinterlässt.<br /><br />
Insgesamt ein gelungenes Lager, das sich relativ süffig trinken und genießen lässt. 
`,
    image: 'foerst.webp'
  }
]
