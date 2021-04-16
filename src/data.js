const gameDataFactory = (name, link, genres, description, price) => {
    return { name, link, genres, description, price }
}

const gameData = []

gameData.push(gameDataFactory(
    'Atomicrops',
    'atomicrops',
    ['Farming', 'Shooter', 'Action'],
    'An action-packed roguelite where you must cultivate and defend the last farm in the post-apocalypse wasteland.Farm mutated crops, marry townsfolk, and kill every mutant creature that tries to invade! 𝐓𝐡𝐢𝐬 𝐚𝐢𝐧\'𝐭 𝐧𝐨 𝐨𝐫𝐝𝐢𝐧𝐚𝐫𝐲 𝐟𝐚𝐫𝐦𝐢𝐧𝐠 𝐬𝐢𝐦𝐮𝐥𝐚𝐭𝐨𝐫.',
    21.50
))
gameData.push(gameDataFactory(
    'Dead Cells',
    'deadcells',
    ['Platformer', 'Metroidvania', 'Action'],
    'Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. You\'ll explore a sprawling, ever-changing castle... assuming you’re able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.',
    35.95
))
gameData.push(gameDataFactory(
    'Dicey Dungeons',
    'diceydungeons',
    ['Deck Building', 'Card Battler', 'Turn-based'],
    'Fighting against fortune would be a lot easier if you weren\'t a walking dice.',
    21.50
))
gameData.push(gameDataFactory(
    'Going Under',
    'goingunder',
    ['Beat \'em up', 'Action', 'Dungeon Crawler'],
    'Going Under is a satirical dungeon crawler about exploring the cursed ruins of failed tech startups. As an unpaid intern in the dystopian city of Neo-Cascadia, you’ll wield office junk as weaponry as you make your way through the offbeat procedural dungeons beneath your company campus.',
    28.95
))
gameData.push(gameDataFactory(
    'Hades',
    'hades',
    ['RPG', 'Isometric', 'Action'],
    'Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.',
    35.95
))
gameData.push(gameDataFactory(
    'The Binding of Isaac',
    'isaac',
    ['Shooter', 'Adventure', 'Action'],
    'When Isaac’s mother starts hearing the voice of God demanding a sacrifice be made to prove her faith, Isaac escapes into the basement facing droves of deranged enemies, lost brothers and sisters, his fears, and eventually his mother.',
    45.99
))
gameData.push(gameDataFactory(
    'Loop Hero',
    'loophero',
    ['Tactical', 'Deck Building', 'RPG'],
    'The Lich has thrown the world into a timeless loop and plunged its inhabitants into never ending chaos. Wield an expanding deck of mystical cards to place enemies, buildings, and terrain along each unique expedition loop for the brave hero.',
    19.99
))
gameData.push(gameDataFactory(
    'Monster Sanctuary',
    'monstersanctuary',
    ['RPG', 'Metroidvania', 'Monster Taming'],
    'Monster taming meets metroidvania. Collect, train and battle monsters in a lovely side-view pixel world.',
    28.95
))
gameData.push(gameDataFactory(
    'Monster Train',
    'monstertrain',
    ['Deck Building', 'Card Game', 'Strategy'],
    'Monster Train is a strategic roguelike deck building game with a twist. Set on a train to hell, you’ll use tactical decision making to defend multiple vertical battlegrounds. With real time competitive multiplayer and endless replayability, Monster Train is always on time.',
    35.95
))
gameData.push(gameDataFactory(
    'Nexomon: Extinction',
    'nexomon',
    ['RPG', 'Monster Taming', 'Turn-based Combat'],
    'Nexomon: Extinction is a return to classic monster catching games, with a brand new story, eccentric characters and over 300 unique Nexomon to trap, tame and evolve.',
    20.26
))
gameData.push(gameDataFactory(
    'Ring of Pain',
    'ringofpain',
    ['Dungeon Crawler', 'Card Game', 'Strategy'],
    'Enter the Ring of Pain, a roguelike card crawler where encounters come to you. Each step around the ring a dire decision. Go for the loot or backstab a creeping horror? Meet strange friends bearing gifts and treasure. Choose your gear wisely to survive and discover the secrets of the Ring of Pain.',
    28.95
))
gameData.push(gameDataFactory(
    'Risk of Rain 2',
    'riskofrain',
    ['Looter', 'Third-person Shooter', 'Action'],
    'Escape a chaotic alien planet by fighting through hordes of frenzied monsters – with your friends, or on your own. Combine loot in surprising ways and master each character until you become the havoc you feared upon your first crash landing.',
    35.95
))
gameData.push(gameDataFactory(
    'Skul: The Hero Slayer',
    'skul',
    ['Action', 'Platformer', 'Hack and Slash'],
    'Guide \'Skul\' on his quest to single-handedly take on the Imperial Army and rescue his King from captivity, in an action-packed rogue-lite 2D platformer for the ages.',
    28.95
))
gameData.push(gameDataFactory(
    'Spelunky 2',
    'spelunky',
    ['Platformer', 'Action'],
    'Spelunky 2 builds upon the unique, randomized challenges that made the original a roguelike classic, offering a huge adventure designed to satisfy players old and new. Meet the next generation of explorers as they find themselves on the Moon, searching for treasure and missing family.',
    28.95
))

export default gameData