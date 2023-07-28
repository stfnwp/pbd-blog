export const allBeerTypes = ['Lager', 'Kellerbier', 'Märzen'] as const
export type BeerType = (typeof allBeerTypes)[number]

export type BlogEntry = {
  id: string
  date: string
  type: BeerType
  title: string
  description: string
  content: string
  image: string
}
export const entries: BlogEntry[] = [
  {
    id: 'foerst-lager',
    date: '2022-07-05',
    type: 'Lager',
    title: 'Först Drügendorf Lager',
    description: 'Ist das etwa Bierschinken in der Nase?',
    content: `Nach Öffnen der Flasche sorgte mein neugieriges "den Zinken hineinstecken" für ein spontantes "ist da Bierschinken drin?".<br />Im Glas präsentiert sich ein dunkel bernsteinfarbiges, dezent ins rötliche gehendes und leicht trübes Lagerbier mit geringer Spundung.<br/> 
Das hat das dunkle Braun des Etiketts angekündigt, nichtsdestotrotz hätte ich ein helleres Lager erwartet.<br /><br />
Die Nase bemerkt deutliche Röstmalznoten, welche man durchaus als ins Rauchige gehend bewerten kann.<br /> 
Im Mund zeigt sich eine karamellige Würze, welche von einer moderaten Herbe vollendet wird, die nur eine dezente Bittere hinterlässt.<br /><br />
Insgesamt ein gelungenes Lager, das sich relativ süffig trinken und genießen lässt. 
`,
    image: 'foerst.webp'
  },
  {
    id: 'beck-kellerbier',
    date: '2022-07-07',
    type: 'Kellerbier',
    title: 'Beck Bräu Kellerbier',
    description: 'Eins ist nicht genug!',
    content: `Die Nase wird von einem herrlich malzigen, leicht karamelligen und röstmalzigem Gerüch begrüßt.<br /> Im Glas zeigt sich eine bernsteinfarbene, relativ trübe uns somit undurchsichtige Flüssigkeit.<br /> Im Antrunk folgt dann zu Beginn eine kleine Malzexplosion, welche in einer äußerst zurückhaltenden Herbe endet.<br />War ich zu Beginn des Seidlas etwas enttäuscht, dass der Hopfen keine sonderliche Präsenz zeigt, konnte man sich im weiteren Trinkverlauf äußerst mit diesem Gebräu anfreunden.<br />Dieses Kellerbier lässt sich wunderbar süffig trinken, ich bemitleide jeden, der keine zweite Flasche davon zur Hand hat.<br />Egal, ob man Astronaut ist, oder nicht: Mit diesem Gebräu lässt sich wahrhaft eine Rakete zünden!`,
    image: 'beck.webp'
  },
  {
    id: 'mager-maerzen',
    date: '2022-07-26',
    type: 'Märzen',
    title: 'Mager Märzen',
    description: 'Klare Empfehlung auch für Nicht-Märzen-Trinker!',
    content: `Im Glas zeigt sich ein goldfarbenes Gebräu mit leichter Spundung, was rein farblich in manchen fränkischen Gefilden locker als Helles durchgehen könnte.<br /> Schon in der Nase breiten sich herrliche Aromen aus, welche in leichten Nuancen an reife Beeren und Waldhonig erinnern. Am Gaumen zeigt sich eine grandiose geschmackliche Balance, dieses Märzen könnte definitiv als gut gewürztes Helles durchgehen!<br /> Zudem gehört mit einem Alkoholanteil von 5,1% dieses Märzen zu den eher leichteren Vertreter seiner Art.<br /> Der perfekt abgestimmte Geschmack sorgt zusammen mit dieser Leichtigkeit für ein wahrhaft meisterliches Trinkerlebnis, was sich kein Bierfreund entgehen lassen sollte.`,
    image: 'mager.webp'
  }
]
