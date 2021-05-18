const mockMoviesShowing = [
  {
    id: 460465,
    title: 'Mortal Kombat',
    popularity: 3477.711,
    vote_average: 7.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg',
    genre_ids: [28, 14, 12],
    overview:
      "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
    release_date: '2021-04-07'
  },
  {
    id: 615457,
    title: 'Nobody',
    popularity: 2138.495,
    vote_average: 8.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
    genre_ids: [28, 53, 80, 35],
    overview:
      'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
    release_date: '2021-03-26'
  },
  {
    id: 399566,
    title: 'Godzilla vs. Kong',
    popularity: 2011.606,
    vote_average: 8.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
    genre_ids: [878, 28, 18],
    overview:
      'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
    release_date: '2021-03-24'
  },
  {
    id: 632357,
    title: 'The Unholy',
    popularity: 1408.118,
    vote_average: 5.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/b4gYVcl8pParX8AjkN90iQrWrWO.jpg',
    genre_ids: [27],
    overview:
      'Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.',
    release_date: '2021-03-31'
  },
  {
    id: 635302,
    title: 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
    popularity: 1204.459,
    vote_average: 8.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
    genre_ids: [16, 28, 12, 14, 18],
    overview:
      "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    release_date: '2020-10-16'
  },
  {
    id: 804435,
    title: 'Vanquish',
    popularity: 1176.685,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/AoWY1gkcNzabh229Icboa1Ff0BM.jpg',
    genre_ids: [28, 80, 53],
    overview:
      'Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts and a motorcycle to take out a series of violent gangsters—or she may never see her child again.',
    release_date: '2021-04-16'
  },
  {
    id: 527774,
    title: 'Raya and the Last Dragon',
    popularity: 1099.916,
    vote_average: 8.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
    genre_ids: [16, 12, 14, 10751, 28],
    overview:
      'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
    release_date: '2021-03-03'
  },
  {
    id: 634528,
    title: 'The Marksman',
    popularity: 1048.613,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
    genre_ids: [28, 53, 80],
    overview:
      'Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.',
    release_date: '2021-01-15'
  },
  {
    id: 813258,
    title: 'Monster Pets: A Hotel Transylvania Short',
    popularity: 972.289,
    vote_average: 7.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dkokENeY5Ka30BFgWAqk14mbnGs.jpg',
    genre_ids: [16, 35, 14],
    overview: 'Drac tries out some new monster pets to help occupy Tinkles for playtime.',
    release_date: '2021-04-02'
  },
  {
    id: 643586,
    title: "Willy's Wonderland",
    popularity: 962.478,
    vote_average: 6.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/keEnkeAvifw8NSEC4f6WsqeLJgF.jpg',
    genre_ids: [28, 27, 35],
    overview:
      "When his car breaks down, a quiet loner agrees to clean an abandoned family fun center in exchange for repairs. He soon finds himself waging war against possessed animatronic mascots while trapped inside Willy's Wonderland.",
    release_date: '2021-02-12'
  },
  {
    id: 412656,
    title: 'Chaos Walking',
    popularity: 766.614,
    vote_average: 7.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg',
    genre_ids: [878, 28, 12, 53],
    overview:
      'Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.',
    release_date: '2021-02-24'
  },
  {
    id: 581387,
    title: 'Ashfall',
    popularity: 614.025,
    vote_average: 6.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zoeKREZ2IdAUnXISYCS0E6H5BVh.jpg',
    genre_ids: [28, 12, 53],
    overview:
      'A group of unlikely heroes from across the Korean peninsula try to save the day after a volcano erupts on the mythical and majestic Baekdu Mountain.',
    release_date: '2019-12-19'
  },
  {
    id: 647302,
    title: 'Benny Loves You',
    popularity: 594.362,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3RE9DNBCvuso5OPZPg71ryntNjx.jpg',
    genre_ids: [27, 35],
    overview:
      'Jack, a man desperate to improve his life throws away his beloved childhood plush, Benny. It’s a move that has disastrous consequences when Benny springs to life with deadly intentions!',
    release_date: '2021-05-07'
  },
  {
    id: 587807,
    title: 'Tom & Jerry',
    popularity: 560.178,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8XZI9QZ7Pm3fVkigWJPbrXCMzjq.jpg',
    genre_ids: [35, 10751, 16],
    overview:
      'Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.',
    release_date: '2021-02-11'
  },
  {
    id: 681260,
    title: 'Maya the Bee: The Golden Orb',
    popularity: 545.664,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tMS2qcbhbkFpcwLnbUE9o9IK4HH.jpg',
    genre_ids: [12, 16, 10751],
    overview:
      'When Maya, a headstrong little bee, and her best friend Willi, rescue an ant princess they find themselves in the middle of an epic bug battle that will take them to strange new worlds and test their friendship to its limits.',
    release_date: '2021-01-07'
  },
  {
    id: 529203,
    title: 'The Croods: A New Age',
    popularity: 447.623,
    vote_average: 7.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg',
    genre_ids: [10751, 14, 16, 35],
    overview:
      "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
    release_date: '2020-11-25'
  },
  {
    id: 722780,
    title: 'For the Sake of Vicious',
    popularity: 391.445,
    vote_average: 7.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iqO2sTFqm6XwEXmlLxKDX75RPjY.jpg',
    genre_ids: [28, 27, 9648],
    overview:
      'An overworked nurse returns home to find a maniac hiding out with a bruised and beaten hostage. When an unexpected wave of violent intruders descend upon her home, it becomes a fight for survival.',
    release_date: '2021-04-16'
  },
  {
    id: 644083,
    title: 'Twist',
    popularity: 381.682,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/h3oT6lZcYC2khtZnzHBgqthj5W.jpg',
    genre_ids: [80, 18, 28],
    overview:
      'A Dickens classic brought thrillingly up to date in the teeming heartland of modern London, where a group of street smart young hustlers plan the heist of the century for the ultimate payday.',
    release_date: '2021-01-22'
  },
  {
    id: 651571,
    title: 'Breach',
    popularity: 326.953,
    vote_average: 4.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/13B6onhL6FzSN2KaNeQeMML05pS.jpg',
    genre_ids: [878, 28],
    overview:
      'A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.',
    release_date: '2020-12-17'
  },
  {
    id: 578701,
    title: 'Those Who Wish Me Dead',
    popularity: 268.992,
    vote_average: 7.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg',
    genre_ids: [53, 18, 28],
    overview:
      'A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protecting him - and a forest fire threatening to consume them all.',
    release_date: '2021-05-05'
  },
  {
    id: 471498,
    title: 'Oxygen',
    popularity: 248.703,
    vote_average: 6.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/u74DFoZGTcZ8cuHO8nvQkCqXEVP.jpg',
    genre_ids: [878, 53],
    overview:
      'A woman wakes in a cryogenic chamber with no recollection of how she got there, and must find a way out before running out of air.',
    release_date: '2021-05-12'
  },
  {
    id: 602734,
    title: 'Spiral: From the Book of Saw',
    popularity: 234.876,
    vote_average: 5.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lcyKve7nXRFgRyms9M1bndNkKOx.jpg',
    genre_ids: [53, 27, 9648],
    overview:
      'Working in the shadow of an esteemed police veteran, brash Detective Ezekiel “Zeke” Banks and his rookie partner take charge of a grisly investigation into murders that are eerily reminiscent of the city’s gruesome past.  Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer’s morbid game.',
    release_date: '2021-05-12'
  },
  {
    id: 797394,
    title: 'Secret Magic Control Agency',
    popularity: 234.776,
    vote_average: 7.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4ZSzEDVdxWVMVO4oZDvoodQOEfr.jpg',
    genre_ids: [16, 35, 14],
    overview:
      'The Secret Magic Control Agency sends its two best agents, Hansel and Gretel, to fight against the witch of the Gingerbread House.',
    release_date: '2021-03-18'
  },
  {
    id: 501929,
    title: 'The Mitchells vs. The Machines',
    popularity: 233.5,
    vote_average: 8.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mI2Di7HmskQQ34kz0iau6J1vr70.jpg',
    genre_ids: [16, 12, 35, 10751, 878],
    overview:
      "A quirky, dysfunctional family's road trip is upended when they find themselves in the middle of the robot apocalypse and suddenly become humanity's unlikeliest last hope.",
    release_date: '2021-04-22'
  },
  {
    id: 598896,
    title: 'Land',
    popularity: 215.92,
    vote_average: 7.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6pYhDPzYPGKvDYpxdf0IUE3RDAS.jpg',
    genre_ids: [18],
    overview:
      'Edee, in the aftermath of an unfathomable event, finds herself unable to stay connected to the world she once knew and in the face of that uncertainty, retreats to the magnificent, but unforgiving, wilds of the Rockies. After a local hunter brings her back from the brink of death, she must find a way to live again.',
    release_date: '2021-02-12'
  },
  {
    id: 520946,
    title: '100% Wolf',
    popularity: 206.738,
    vote_average: 5.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2VrvxK4yxNCU6KVgo5TADJeBEQu.jpg',
    genre_ids: [10751, 16, 14],
    overview:
      "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf.",
    release_date: '2020-06-26'
  },
  {
    id: 581392,
    title: 'Peninsula',
    popularity: 201.197,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7S9RvfMBWSTlUZ4VbxDY7oLeenk.jpg',
    genre_ids: [28, 27, 53],
    overview:
      'A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.',
    release_date: '2020-07-15'
  },
  {
    id: 503736,
    title: 'Army of the Dead',
    popularity: 188.01,
    vote_average: 8.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/x3taBaWfRzw1NIKhEPpKPwKBAOC.jpg',
    genre_ids: [28, 27, 878, 53],
    overview:
      'Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.',
    release_date: '2021-05-13'
  },
  {
    id: 660943,
    title: 'Forgotten We’ll Be',
    popularity: 174.078,
    vote_average: 6.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cKCVRr3Hvy4MoV2R0tvS31C9wql.jpg',
    genre_ids: [18],
    overview:
      "Portrays the life of Héctor Abad Gómez, a prominent doctor and human rights activist in the polarized, violent Medellin of the 70s. A family man worried not only for his own children but those of the underprivileged classes as well, his home was imbued with vitality and creativity, the result of an education based on tolerance and love. Nothing could foretell that a terrible cancer would take the life of one of his beloved daughters. Driven by sadness and rage, Héctor devoted himself to the social and political causes of the time. But Medellin's intolerant society would harass him until he was finally silenced.",
    release_date: '2020-08-22'
  },
  {
    id: 714277,
    title: 'The Funeral Home',
    popularity: 168.56,
    vote_average: 2.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1rlgIzw129hEl46bFaJZ7wpEEZZ.jpg',
    genre_ids: [27, 35],
    overview:
      'Bernardo is an undertaker. He runs his mortuary business in the same house where he resides. In the front, he has his clients. And in the back, his dysfunctional family lives amongst coffins, wreaths, and the mischievous but nonviolent ghosts that visit on a daily basis. But when a malevolent entity enters the scene, it wreaks havoc on the already fractured household.',
    release_date: '2021-04-15'
  },
  {
    id: 637649,
    title: 'Wrath of Man',
    popularity: 163.063,
    vote_average: 7.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/YxopfHpsCV1oF8CZaL4M3Eodqa.jpg',
    genre_ids: [28, 80],
    overview:
      "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
    release_date: '2021-04-22'
  },
  {
    id: 560192,
    title: 'Grand Isle',
    popularity: 155.321,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8mcXb3km7hZ8aJKpxxgnvvxt9gW.jpg',
    genre_ids: [53, 28],
    overview:
      "Walter and his neglected wife lure a young man into their Victorian home to escape a hurricane. When the man is charged with murder by Det. Jones, he must reveal the couple's wicked secrets to save himself.",
    release_date: '2019-12-06'
  },
  {
    id: 631058,
    title: 'Boogie',
    popularity: 151.749,
    vote_average: 6.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/n5xmNu7Lb4IqOahsE8K6W8xBTC7.jpg',
    genre_ids: [18, 35],
    overview:
      'Alfred “Boogie” Chin is a basketball phenom living in Queens, New York, who dreams of one day playing in the NBA. While his parents pressure him to focus on earning a scholarship to an elite college, Boogie must find a way to navigate a new girlfriend, high school, on-court rivals and the burden of expectation.',
    release_date: '2021-03-05'
  },
  {
    id: 611914,
    title: 'The Courier',
    popularity: 151.594,
    vote_average: 6.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cmC7bJZ5sCzx9ZsrlXOrYJfYtLc.jpg',
    genre_ids: [28, 80, 18, 53],
    overview:
      'This intense action-thriller unfolds in real time as two embattled souls fight for their lives. Gary Oldman stars as a vicious crime boss out to kill Nick, the lone witness set to testify against him. He hires a mysterious female motorcycle courier to unknowingly deliver a poison-gas bomb to slay Nick, but after she rescues Nick from certain death, the duo must confront an army of ruthless hired killers in order to survive the night.',
    release_date: '2019-11-22'
  },
  {
    id: 675327,
    title: 'Shadow in the Cloud',
    popularity: 146.132,
    vote_average: 5.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/t7EUMSlfUN3jUSZUJOLURAzJzZs.jpg',
    genre_ids: [27, 28, 18, 10752],
    overview:
      'A WWII pilot traveling with top secret documents on a B-17 Flying Fortress encounters an evil presence on board the flight.',
    release_date: '2021-01-01'
  },
  {
    id: 581734,
    title: 'Nomadland',
    popularity: 140.457,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg',
    genre_ids: [18],
    overview:
      'A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.',
    release_date: '2021-01-29'
  },
  {
    id: 601666,
    title: 'I Care a Lot',
    popularity: 131.328,
    vote_average: 6.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gKnhEsjNefpKnUdAkn7INzIFLSu.jpg',
    genre_ids: [35, 80, 53],
    overview:
      'A court-appointed legal guardian defrauds her older clients and traps them under her care. But her latest mark comes with some unexpected baggage.',
    release_date: '2021-02-19'
  },
  {
    id: 741228,
    title: 'Locked Down',
    popularity: 127.96,
    vote_average: 5.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/svHelD0Hb3TXPAQoPsoBwdDMTvf.jpg',
    genre_ids: [35, 80, 18],
    overview:
      "During a COVID-19 lockdown, sparring couple Linda and Paxton call a truce to attempt a high-risk jewellery heist at one of the world's most exclusive department stores, Harrods.",
    release_date: '2021-02-25'
  },
  {
    id: 573680,
    title: 'The Banishing',
    popularity: 122.059,
    vote_average: 6.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg',
    genre_ids: [27],
    overview:
      'In the 1930s, a young reverend and his family are forced to confront their worst fears when they discover their new home holds a horrifying secret.',
    release_date: '2021-04-29'
  },
  {
    id: 595813,
    title: 'Barb and Star Go to Vista Del Mar',
    popularity: 120.306,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8oiV8GtBG7GDJa3ejvxZzJnBgff.jpg',
    genre_ids: [35],
    overview:
      'The story of best friends Barb and Star, who leave their small midwestern town for the first time to go on vacation in Vista Del Mar, Florida, where they soon find themselves tangled up in adventure, love, and a villain’s evil plot to kill everyone in town.',
    release_date: '2021-03-29'
  },
  {
    id: 590223,
    title: 'Love and Monsters',
    popularity: 96.157,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg',
    genre_ids: [35, 28, 12, 14],
    overview:
      'Seven years since the Monsterpocalypse began, Joel Dawson has been living underground in order to survive. But after reconnecting over radio with his high school girlfriend Aimee, Joel decides to venture out to reunite with her, despite all the dangerous monsters that stand in his way.',
    release_date: '2020-10-16'
  },
  {
    id: 535292,
    title: '21 Bridges',
    popularity: 96.559,
    vote_average: 6.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bSN9SysoRBMwJKNkfOlQlCw2YQO.jpg',
    genre_ids: [80, 28, 18],
    overview:
      'An embattled NYPD detective, is thrust into a citywide manhunt for a pair of cop killers after uncovering a massive and unexpected conspiracy. As the night unfolds, lines become blurred on who he is pursuing, and who is in pursuit of him.',
    release_date: '2019-10-24'
  },
  {
    id: 797946,
    title: 'The Djinn',
    popularity: 79.79,
    vote_average: 5.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kE4j7XP64RvTFNvamhOrf6ZYkb9.jpg',
    genre_ids: [53, 27],
    overview:
      'A mute boy is trapped in his apartment with a sinister monster when he makes a wish to fulfill his heart’s greatest desire.',
    release_date: '2021-05-14'
  },
  {
    id: 522478,
    title: 'Peter Rabbit 2: The Runaway',
    popularity: 71.721,
    vote_average: 6.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cycDz68DtTjJrDJ1fV8EBq2Xdpb.jpg',
    genre_ids: [10751, 35, 12],
    overview:
      'Bea, Thomas, and the rabbits have created a makeshift family, but despite his best efforts, Peter can’t seem to shake his mischievous reputation. Adventuring out of the garden, Peter finds himself in a world where his mischief is appreciated, but when his family risks everything to come looking for him, Peter must figure out what kind of bunny he wants to be.',
    release_date: '2021-03-25'
  },
  {
    id: 808023,
    title: 'The Virtuoso',
    popularity: 88.424,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg',
    genre_ids: [53, 28, 80],
    overview:
      "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing.",
    release_date: '2021-04-30'
  },
  {
    id: 681887,
    title: 'Cosmic Sin',
    popularity: 52.49,
    vote_average: 4.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6Wm7P6y22UZA40QuPYHyWyJ6leI.jpg',
    genre_ids: [878, 28, 10752],
    overview:
      'Bruce Willis and Frank Grillo star in the new epic sci-fi adventure set in the year 2524, four hundred years after humans started colonizing the outer planets. Retired Military General James Ford (Willis) is called back into service after soldiers on a remote planet are attacked by a hostile alien fleet. The threat against the human race escalates into an inevitable interstellar war. General Ford teams up with General Eron Ryle (Grillo) and a team of elite soldiers in a race to stop the imminent attack before it is too late.',
    release_date: '2021-03-12'
  },
  {
    id: 679844,
    title: 'Radhe: Your Most Wanted Bhai',
    popularity: 42.737,
    vote_average: 3.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3l7FGKHDanLhEI1ECdmzK9LnJrj.jpg',
    genre_ids: [28, 80, 18, 53],
    overview:
      'As Mumbai’s youth are falling prey to rampant drug abuse, suspended cop Radhe is recalled for a clean-up mission. But Radhe is up against a dangerous new outlaw Rana, who will stop at nothing to rule the city.',
    release_date: '2021-05-12'
  },
  {
    id: 597890,
    title: 'Voyagers',
    popularity: 80.913,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gn2vCmWO7jQBBto9SYuBHYZARaU.jpg',
    genre_ids: [878, 10749, 53],
    overview:
      'With the future of the human race at stake, a group of young men and women -- bred for intelligence and obedience -- embark on an expedition to colonize a distant planet. When they uncover disturbing secrets about the mission, they defy their training and begin to explore their most primitive natures. As life on the ship descends into chaos, they soon become consumed by fear, lust and an insatiable hunger for power.',
    release_date: '2021-04-08'
  },
  {
    id: 583406,
    title: 'Judas and the Black Messiah',
    popularity: 59.138,
    vote_average: 7.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gPRy77DNDeLrvGyfloFqnZ7HA7o.jpg',
    genre_ids: [18, 36],
    overview:
      "Bill O'Neal infiltrates the Black Panthers on the orders of FBI Agent Mitchell and J. Edgar Hoover. As Black Panther Chairman Fred Hampton ascends—falling for a fellow revolutionary en route—a battle wages for O’Neal’s soul.",
    release_date: '2021-02-12'
  },
  {
    id: 611698,
    title: 'A Writers Odyssey',
    popularity: 49.812,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6BNjjfdFJDGRF59nYNEb2i042xX.jpg',
    genre_ids: [18, 28, 14],
    overview:
      'Kongwen Lu is the author of a fantasy novel series following a heroic teenager, also named Kongwen, on a quest to end the tyrannical rule of Lord Redmane, under the guidance of a Black Armor. But through a strange twist of fate, the fantasy world of the novel begins to impact life in the real world, leading Guan Ning to accept a mission from Tu Ling to kill the author.',
    release_date: '2021-02-12'
  },
  {
    id: 551804,
    title: 'Freaky',
    popularity: 55.48,
    vote_average: 6.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8xC6QSyxrpm0D5A6iyHNemEWBVe.jpg',
    genre_ids: [27, 53, 35, 14],
    overview:
      'A mystical, ancient dagger causes a notorious serial killer to magically switch bodies with a 17-year-old girl.',
    release_date: '2020-11-12'
  },
  {
    id: 582014,
    title: 'Promising Young Woman',
    popularity: 45.929,
    vote_average: 7.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hNPwomKbMyOPXqPDqkfz34mK19p.jpg',
    genre_ids: [53, 80, 18],
    overview:
      'A young woman, traumatized by a tragic event in her past, seeks out vengeance against those who crossed her path.',
    release_date: '2020-12-13'
  },
  {
    id: 586047,
    title: 'Seobok',
    popularity: 62.524,
    vote_average: 7.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nxxuWC32Y6TULj4VnVwMPUFLIpK.jpg',
    genre_ids: [878, 28],
    overview:
      'A former intelligence agent gets involved with the first human clone, Seo Bok, who others seek, causing trouble.',
    release_date: '2021-04-12'
  },
  {
    id: 575446,
    title: 'New Order',
    popularity: 47.243,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/v6NodCMzqilx0Xw541P65WFnDfE.jpg',
    genre_ids: [18],
    overview:
      'In the near future, a popular uprising in Mexico City interrupts a wedding held at the home of a wealthy family. After the riots have been quashed, they discover the bride has gone missing and plea with the military to help locate her.',
    release_date: '2020-10-22'
  },
  {
    id: 599960,
    title: 'French Exit',
    popularity: 56.43,
    vote_average: 5.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9fyG5y5czwDVOSRsrkSjaob1Hsc.jpg',
    genre_ids: [35, 18],
    overview:
      '“My plan was to die before the money ran out,” says 60-year-old penniless Manhattan socialite Frances Price, but things didn’t go as planned. Her husband Franklin has been dead for 12 years and with his vast inheritance gone, she cashes in the last of her possessions and resolves to live out her twilight days anonymously in a borrowed apartment in Paris, accompanied by her directionless son Malcolm and a cat named Small Frank—who may or may not embody the spirit of Frances’s dead husband.',
    release_date: '2021-02-12'
  },
  {
    id: 580532,
    title: 'Crisis',
    popularity: 37.446,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ao4JajLcPITivfstlzENge3MPkq.jpg',
    genre_ids: [53, 80, 18],
    overview:
      'Three stories about the world of opioids collide: a drug trafficker arranges a multi-cartel Fentanyl smuggling operation between Canada and the U.S., an architect recovering from an OxyContin addiction tracks down the truth behind her son\'s involvement with narcotics, and a university professor battles unexpected revelations about his research employer, a drug company with deep government influence bringing a new "non-addictive" painkiller to market.',
    release_date: '2021-02-26'
  },
  {
    id: 580175,
    title: 'Another Round',
    popularity: 36.048,
    vote_average: 7.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fsn4cjpCvWuP9wU9hcFnK7M8RZC.jpg',
    genre_ids: [35, 18],
    overview:
      'Four high school teachers launch a drinking experiment: upholding a constant low level of intoxication.',
    release_date: '2020-09-24'
  },
  {
    id: 615643,
    title: 'Minari',
    popularity: 36.045,
    vote_average: 7.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6mPNdmjdbVKPITv3LLCmQoKs9Zw.jpg',
    genre_ids: [18],
    overview:
      'A Korean-American family moves to Arkansas in search of their own American Dream. With the arrival of their sly, foul-mouthed, but incredibly loving grandmother, the stability of their relationships is challenged even more in this new life in the rugged Ozarks, testing the undeniable resilience of family and what really makes a home.',
    release_date: '2020-12-11'
  },
  {
    id: 513310,
    title: 'Boss Level',
    popularity: 33.417,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wKTsXAQvDy6uip7EiCvHUuCSQJX.jpg',
    genre_ids: [28, 878, 53, 9648],
    overview:
      'A retired special forces officer is trapped in a never-ending time loop on the day of his death.',
    release_date: '2021-02-19'
  },
  {
    id: 425001,
    title: 'The War with Grandpa',
    popularity: 35.017,
    vote_average: 6.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ltyARDw2EFXZ2H2ERnlEctXPioP.jpg',
    genre_ids: [35, 10751, 18],
    overview:
      "Peter is thrilled that his Grandpa is coming to live with his family. That is, until Grandpa moves into Peter's room, forcing him upstairs into the creepy attic. And though he loves his Grandpa, he wants his room back - so he has no choice but to declare war.",
    release_date: '2020-08-27'
  },
  {
    id: 567797,
    title: 'The Dry',
    popularity: 33.38,
    vote_average: 7.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zM12bfL2TEqVRXjiQIFUWUMLcCg.jpg',
    genre_ids: [18, 80, 9648, 53],
    overview:
      'Aaron Falk returns to his drought-stricken hometown to attend a tragic funeral. But his return opens a decades-old wound - the unsolved death of a teenage girl.',
    release_date: '2021-01-01'
  },
  {
    id: 522241,
    title: 'The Courier',
    popularity: 27.546,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zFIjKtZrzhmc7HecdFXXjsLR2Ig.jpg',
    genre_ids: [18, 53],
    overview:
      'Cold War spy Greville Wynne and his Russian source try to put an end to the Cuban Missile Crisis.',
    release_date: '2020-09-27'
  },
  {
    id: 315064,
    title: 'Animal Crackers',
    popularity: 42.847,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dxFqZiO5MqqVoFZuWOjTdjmDh6d.jpg',
    genre_ids: [35, 16, 12],
    overview:
      'A family must use a magical box of Animal Crackers to save a rundown circus from being taken over by their evil uncle Horatio P. Huntington.',
    release_date: '2020-07-24'
  },
  {
    id: 694843,
    title: 'Asia',
    popularity: 41.458,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3dvOmfAHkMoTQfogaUnfnpRfRDd.jpg',
    genre_ids: [18],
    overview:
      "Asia is the single mother of 17-year-old Vika. Vika's deteriorating health urges Asia to finally find her voice as a mother and to embrace and cherish their time together.",
    release_date: '2020-04-17'
  },
  {
    id: 339395,
    title: 'Georgetown',
    popularity: 17.078,
    vote_average: 5.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rXuh98jgybOANGOYt0g6KjmM3QS.jpg',
    genre_ids: [18, 80],
    overview:
      "Ulrich Mott  is an eccentric and versatile social climber with grandiose plans to affect United States foreign policy. Encouraged  in his attempts by his strategically chosen (and much older) wife, the well-connected journalist Elsa Brecht, Mott has a knack for making himself indispensable and impossible to ignore. The only one seemingly immune to his charms is Elsa's daughter Amanda, who might simply disapprove of her mother marrying a much younger man - or perhaps she senses something more sinister beneath the smooth-talking surface?",
    release_date: '2021-05-14'
  },
  {
    id: 812456,
    title: 'Barbie & Chelsea the Lost Birthday',
    popularity: 17.916,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/esS12yF3CDuk5juvdFvi4PIwOuW.jpg',
    genre_ids: [16],
    overview:
      'Enjoy high-sea thrills as Barbie, Chelsea and the rest of the Roberts family set sail on an adventure cruise.  "Barbie & Chelsea The Lost Birthday" tells the story of Chelsea, Barbie’s precocious youngest sister, and the rest of the Roberts family as they set sail on an adventure cruise for her seventh birthday. When they cross the International Date Line, Chelsea discovers her actual birthday has been lost and she embarks on a fantastical journey through an enchanted jungle island in order to save it.',
    release_date: '2021-05-14'
  },
  {
    id: 400090,
    title: 'The Nightingale',
    popularity: 36.996,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hWA8QwSM1kJYMoTANEPoqrqBapg.jpg',
    genre_ids: [18, 53],
    overview:
      'In 1825, Clare, a 21-year-old Irish convict, chases a British soldier through the rugged Tasmanian wilderness, bent on revenge for a terrible act of violence he committed against her family. She enlists the services of an Aboriginal tracker who is also marked by trauma from his own violence-filled past.',
    release_date: '2018-09-23'
  },
  {
    id: 658009,
    title: 'Ip Man: Kung Fu Master',
    popularity: 30.734,
    vote_average: 7.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vkfdePw5VLa3GP5MqBBObyws5yH.jpg',
    genre_ids: [28, 18],
    overview:
      'Ip Man’s promising career as a Policeman is ruined after he is framed for murder and targeted by a mob boss’s daughter.',
    release_date: '2019-12-23'
  },
  {
    id: 683127,
    title: 'Earwig and the Witch',
    popularity: 28.598,
    vote_average: 5.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/86jyzdxtAX8p956rVQDKwGbrYh2.jpg',
    genre_ids: [16, 14, 10751],
    overview:
      'A headstrong orphan discovers a world of spells and potions while living with a selfish witch.',
    release_date: '2021-01-27'
  },
  {
    id: 502033,
    title: 'Sound of Metal',
    popularity: 29.665,
    vote_average: 7.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/y89kFMNYXNKMdlZjR2yg7nQtcQH.jpg',
    genre_ids: [18, 10402],
    overview:
      'Metal drummer Ruben begins to lose his hearing. When a doctor tells him his condition will worsen, he thinks his career and life is over. His girlfriend Lou checks the former addict into a rehab for the deaf hoping it will prevent a relapse and help him adapt to his new life. After being welcomed and accepted just as he is, Ruben must choose between his new normal and the life he once knew.',
    release_date: '2020-11-20'
  },
  {
    id: 630004,
    title: 'Way Down',
    popularity: 24.035,
    vote_average: 7.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iiHubBBVFg6K7t5THdsImqy1ct2.jpg',
    genre_ids: [80, 28, 53],
    overview:
      "When an engineer learns of a mysterious, impenetrable fortress hidden under The Bank of Spain, he joins a crew of master thieves who plan to steal the legendary lost treasure locked inside while the whole country is distracted by Spain's World Cup Final. With thousands of soccer fans cheering in the streets, and security forces closing in, the crew have just minutes to pull off the score of a lifetime.",
    release_date: '2021-03-04'
  },
  {
    id: 686548,
    title: 'Son of the South',
    popularity: 16.8,
    vote_average: 6.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3LExC6FEHKkHdeb7z3W0ncU2CKY.jpg',
    genre_ids: [36, 18],
    overview:
      'Based on a true story, Bob Zellner, grandson of a Klansman, comes of age in the Deep South and eventually joins the Civil Rights Movement.',
    release_date: '2021-02-05'
  },
  {
    id: 637462,
    title:
      'Fate/Grand Order: The Movie - Divine Realm of the Round Table: Camelot - Paladin; Agateram',
    popularity: 18.894,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2a5ZB9s9gVFCZQrCj2w3ZdES73w.jpg',
    genre_ids: [16],
    overview: '',
    release_date: '2021-05-15'
  },
  {
    id: 748853,
    title: 'In the Earth',
    popularity: 23.893,
    vote_average: 5.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bUcWwnm2mHgllN4m95Xj8kSVyzp.jpg',
    genre_ids: [27],
    overview:
      'As a deadly virus ravages the world, Dr. Martin Lowery embarks on a mission to reach test site ATU327A, a research hub deep in the Arboreal Forest. The arduous journey, guided by park scout Alma, is set back by a nighttime attack that leaves the two bruised and shoeless. When they run into Zach, a man living off the grid, they gratefully accept his help. Zach’s intentions aren’t exactly what they seem, however, and a path out of the forest and into safety quickly fades as the line between myth and science blurs.',
    release_date: '2021-04-16'
  },
  {
    id: 603768,
    title: 'Super Me',
    popularity: 23.91,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/eP6wSMPXmEaGjwrqITmcjcBLViE.jpg',
    genre_ids: [12, 18, 14],
    overview:
      'Sang Yu is so exhausted from trying to stay awake. Every time he closes his eyes, a demon chases and kills him in his dreams. One night Sang realizes he has a special power: he can bring treasures from his dreams into reality. Almost overnight, he becomes a rich man. But his wealth also attracts the attention of a ruthless gangster.',
    release_date: '2019-09-09'
  },
  {
    id: 607259,
    title: 'Fatherhood',
    popularity: 22.271,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/Jabww5OzSZrTyovwSYQ5UAzSyQ.jpg',
    genre_ids: [18, 10751],
    overview:
      'A widowed new dad copes with doubts, fears, heartache and dirty diapers as he sets out to raise his daughter on his own.',
    release_date: '2021-05-06'
  },
  {
    id: 533514,
    title: 'Violet Evergarden: The Movie',
    popularity: 23.387,
    vote_average: 7.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fwSonK8WrAEqWY7sqjvGRCgzIij.jpg',
    genre_ids: [16, 18, 10749, 14],
    overview:
      'After working as an Auto Memory Doll, Violet Evergarden has come to learn the meaning of the words "I love you." Her soul, which has been deeply scarred by the war, has begun to heal. She continues to move forward in life, helping others in need, while keeping the words of the first person who ever said "I love you" to her close to her heart. When she takes on a job to write a letter for a terminally-ill boy, time starts to move forward.',
    release_date: '2020-09-18'
  },
  {
    id: 776515,
    title: 'Together Together',
    popularity: 25.796,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9WtVYwBs3a5zIzuSc169VLBIiS.jpg',
    genre_ids: [35, 10749],
    overview:
      'When young loner Anna is hired as the surrogate for Matt, a single man in his 40s, the two strangers come to realize this unexpected relationship will quickly challenge their perceptions of connection, boundaries and the particulars of love.',
    release_date: '2021-04-23'
  },
  {
    id: 663870,
    title: 'Riders of Justice',
    popularity: 22.047,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sshNnwmQLk720iBQ0dZg3GVGKfK.jpg',
    genre_ids: [35, 28, 18],
    overview:
      'Markus, a deployed military man, has to go home to his teenage daughter, Mathilde, when his wife dies in a tragic train accident. It seems to be plain bad luck - but it turns out that it might have been a carefully orchestrated assassination, which his wife ended up being a random casualty of.',
    release_date: '2020-11-19'
  },
  {
    id: 823358,
    title: '7 Purnama di Satu Syawal',
    popularity: 13.228,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/y2X5adn1vSN8IsqHXlSIvyRjyNU.jpg',
    genre_ids: [18],
    overview:
      'With a cultural background of Bangka Belitung and the nuances of Eid al-Fitr, this film tells the story of a romantic romantic religious drama about the simplicity of love that offers elements of peace conveyed in Islam and Malay culture through the proven bond of a man when leaving. hometown named Malik Ahmad towards a woman named Mariam Syahida who has extraordinary loyalty.',
    release_date: '2021-05-15'
  },
  {
    id: 650,
    title: 'Boyz n the Hood',
    popularity: 21.297,
    vote_average: 7.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/v4ox4aSCNT5vyLXl4Q71JiWwCXW.jpg',
    genre_ids: [18, 80],
    overview:
      'Boyz n the Hood is the popular and successful film and social criticism from John Singleton about the conditions in South Central Los Angeles where teenagers are involved in gun fights and drug dealing on a daily basis.',
    release_date: '1991-07-12'
  },
  {
    id: 721625,
    title: 'Songbird',
    popularity: 24.775,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pm7pstYup0ZHpImjT0k6YyxGVkX.jpg',
    genre_ids: [53, 10749, 18, 9648],
    overview:
      'During a pandemic lockdown, Nico, a young man with rare immunity, must overcome martial law, murderous vigilantes and a powerful family to reunite with his love, Sara.',
    release_date: '2020-12-10'
  },
  {
    id: 627103,
    title: 'Love, Weddings & Other Disasters',
    popularity: 19.31,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8P1H3tmf7o322agBGsdVFRP84aG.jpg',
    genre_ids: [10749, 35],
    overview:
      'The female-driven, multi-story rom-com follows the people who work to create the perfect wedding day for the spouses-to-be even as their own relationships are outlandish and imperfect.',
    release_date: '2020-12-04'
  },
  {
    id: 588921,
    title: 'Ainbo: Spirit of the Amazon',
    popularity: 22.423,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nyDU092PeGGcd6wUIzlhFoaWcyX.jpg',
    genre_ids: [12, 16, 10751, 14],
    overview:
      "A girl was born and grew up in the deepest jungle of the Amazon, Colonia, that rests on the back of the most powerful Mother Spirit in the Amazon, Turtle Motelo Mama. One day she discovers that her homeland is being threatened and realizes that there are other humans in the world besides her people. As she fights to save her paradise against the greed and exploitation of children, logging, and illegal mining, she begins to struggle to reverse this destruction and impending evil of the Yucuruna, the darkness that lives in the Amazon. Guided by her mother's spirit, Ainbo is determined to save her land and save her people before it's too late.",
    release_date: '2021-02-10'
  },
  {
    id: 587130,
    title: 'The Reckoning',
    popularity: 15.295,
    vote_average: 5.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3jdBOApDt1DXlJtdzUtp76DhmmP.jpg',
    genre_ids: [27, 18],
    overview:
      'In the aftermath of the Great Plague and amidst the subsequent witch-hunts against women, a young widow grapples with the tragic death of her husband in a society completely consumed by fear and death. Because she rejects the advances of her landlord, she is falsely accused of being a witch and thrown in jail for a crime she didn’t commit. She must endure physical persecution at the hands of England’s most ruthless witch-hunter and face her own inner demons as the devil himself starts to work his way into her mind.',
    release_date: '2021-02-05'
  },
  {
    id: 549294,
    title: 'Synchronic',
    popularity: 26.107,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wgm4gdJwb7iSYX0uBsRAZmHQmPm.jpg',
    genre_ids: [878, 18, 53, 27],
    overview:
      "Two New Orleans paramedics' lives are ripped apart after encountering a series of horrific deaths linked to a designer drug with bizarre, otherworldly effects.",
    release_date: '2020-10-23'
  },
  {
    id: 633342,
    title: 'Locked In',
    popularity: 21.086,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/34lLv6C7Pq6ypBSEPRqWceIW8oA.jpg',
    genre_ids: [28, 53],
    overview:
      'A single mother must protect her daughter and herself during a heist gone wrong at a high-tech storage facility.',
    release_date: '2021-05-07'
  },
  {
    id: 581577,
    title: 'Persian Lessons',
    popularity: 19.119,
    vote_average: 7.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iRuyXANJJ7AMrFOdmzGrk3jEifr.jpg',
    genre_ids: [18, 10752],
    overview:
      '1942, occupied Europe. Gilles Cremieux, a Belgian of Jewish origin, once in a concentration camp, pretends to be a Persian - for him this is the only opportunity to stay alive. This lie, indeed, saves him from being shot, but Gilles does not yet know what price he will have to pay for this salvation. German soldiers bring Gilles to Klaus Koch, a cook in a concentration camp who wants to leave for Iran and open a restaurant there as soon as the war ends. Koch is looking for a real Persian who will teach him how to speak Farsi. Thus begins the story of Gilles Cremier and Klaus Koch - a Jew and a German, a prisoner and a jailer, student and teacher.',
    release_date: '2020-04-17'
  },
  {
    id: 602654,
    title: 'Horizon Line',
    popularity: 13.626,
    vote_average: 6.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vWGkIHeCLw9wWvPXnPTOM9d5GiK.jpg',
    genre_ids: [53],
    overview:
      'A couple flying on a small plane to attend a tropical island wedding must fight for their lives after their pilot suffers a heart attack.',
    release_date: '2020-10-29'
  },
  {
    id: 731738,
    title: 'The Paper Tigers',
    popularity: 16.994,
    vote_average: 8.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/x54tAgLfS51fO5EcipNJJ9tfSRK.jpg',
    genre_ids: [28, 35],
    overview:
      'Three Kung Fu prodigies have grown into washed-up, middle-aged men, now one kick away from pulling their hamstrings. But when their master is murdered, they must juggle their dead-end jobs, dad duties, and old grudges to avenge his death.',
    release_date: '2021-05-07'
  },
  {
    id: 805051,
    title: 'The Ogglies',
    popularity: 16.718,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ovORf6r6qdwxLhi35f7kRtY0806.jpg',
    genre_ids: [16],
    overview:
      'The Ogglies are looking for a new home. They end up in Smelliville, a beautiful and peaceful village. Unfortunately, Smelliville has a stinky problem: The local garbage dump is spoiling the place. Something must be done.',
    release_date: '2021-05-06'
  },
  {
    id: 550524,
    title: 'Monday',
    popularity: 18.352,
    vote_average: 7.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3KpX047xiXCjqvoXh5ckIDpbv2A.jpg',
    genre_ids: [18],
    overview:
      'A spark on a Friday can lead to a sizzling weekend fling, but what happens when you get to the inevitable Monday?',
    release_date: '2021-04-16'
  },
  {
    id: 579221,
    title: 'American Fighter',
    popularity: 17.987,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7XzWFB2GdghagwEl0bndo33cFDI.jpg',
    genre_ids: [28, 18],
    overview:
      "A desperate teenager is forced into the dangerous world of underground fighting to win enough money to save his ailing mother. He finds out what he's made of in the face of these violent hungry competitors.",
    release_date: '2021-04-29'
  },
  {
    id: 566076,
    title: 'The United States vs. Billie Holiday',
    popularity: 19.035,
    vote_average: 6.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vEzkxuE2sJcmHYjXQHM8xvR9ICH.jpg',
    genre_ids: [10402, 18, 36],
    overview:
      'Billie Holiday spent much of her career being adored by fans. In the 1940\'s, the government targeted Holiday in a growing effort to racialize the war on drugs, ultimately aiming to stop her from singing her controversial ballad, "Strange Fruit."',
    release_date: '2021-03-31'
  },
  {
    id: 493675,
    title: 'Profile',
    popularity: 16.401,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3fMsf59RGi8P5x7J7iyRnb8Dvrb.jpg',
    genre_ids: [53],
    overview:
      'Looking to investigate recruitment techniques of ISIS to lure women into Syria, Amy Whitaker, a journalist, creates a Facebook profile of a Muslim convert. When an ISIS recruiter contacts her online character, she experiences the process first hand.',
    release_date: '2021-05-14'
  },
  {
    id: 605286,
    title: 'Si vive una volta sola',
    popularity: 20.733,
    vote_average: 5.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uoRWemOqdlljCf4mC2xbVGVKOT9.jpg',
    genre_ids: [35],
    overview: '',
    release_date: '2021-04-28'
  },
  {
    id: 823837,
    title: 'Black Easter',
    popularity: 11.5,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/Ak3WXExyPIvh0oOeAlo2VIcJuvG.jpg',
    genre_ids: [878, 18],
    overview:
      'An extremist group travels back in time to assassinate Christ before the crucifixion. The fate of the world now depends on a genius with no faith... and a man who has lost his.',
    release_date: '2021-05-14'
  },
  {
    id: 861,
    title: 'Total Recall',
    popularity: 22.469,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wVbeL6fkbTKSmNfalj4VoAUUqJv.jpg',
    genre_ids: [28, 12, 878],
    overview:
      "Construction worker Douglas Quaid discovers a memory chip in his brain during a virtual-reality trip. He also finds that his past has been invented to conceal a plot of planetary domination. Soon, he's off to Mars to find out who he is and who planted the chip.",
    release_date: '1990-06-01'
  },
  {
    id: 691423,
    title: 'Cerebrum',
    popularity: 16.389,
    vote_average: 7.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/r8F5EzTrjCwo4nptgfWVAm8RrZs.jpg',
    genre_ids: [878, 53],
    overview:
      'To make ends meet, Tom signs on as a guinea pig at a home-based lab, but when he commits a crime he cannot remember, he must risk his own sanity to reveal the truth.',
    release_date: '2021-05-04'
  },
  {
    id: 400157,
    title: 'Wonder Park',
    popularity: 18.138,
    vote_average: 6.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8KomINZhIuJeB4oB7k7tkq8tmE.jpg',
    genre_ids: [35, 16, 12, 10751, 14],
    overview:
      "A young girl named June with a big imagination makes an incredible discovery -- the amusement park of her dreams has come to life. Filled with the world's wildest rides operated by fun-loving animals, the excitement never ends. But when trouble hits, June and her misfit team of furry friends begin an unforgettable journey to save the park.",
    release_date: '2019-03-13'
  },
  {
    id: 645856,
    title: 'The Seventh Day',
    popularity: 22.461,
    vote_average: 5.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dtt2dfMdmlCcgaJZkPPQsIY5oR6.jpg',
    genre_ids: [27],
    overview:
      'A renowned exorcist teams up with a rookie priest for his first day of training. As they plunge deeper into hell on earth, the lines between good and evil blur, and their own demons emerge.',
    release_date: '2021-03-26'
  },
  {
    id: 620249,
    title: 'The Legend of Hei',
    popularity: 11.072,
    vote_average: 8.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/w9f9KLWxTAUQhQF0AlZGbaTNAqY.jpg',
    genre_ids: [16, 14, 28],
    overview:
      'In the bustling human world, various demons are hidden and live in peace with humans. Luo Xiaohei, the cat demon, begins his journey of wandering because his forest home is destroyed. On his search for a new home he encounters other demons as well as understanding human allies, leaving Hei in the dilemma of which side will be his true attribution.',
    release_date: '2019-08-27'
  },
  {
    id: 624812,
    title: 'Love Me, Love Me Not',
    popularity: 15.849,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9bn2vf6k945pZQg6Wl0H1Zxd48Y.jpg',
    genre_ids: [16, 18, 10749, 35],
    overview:
      "Yuna and Akari are two high school girls with very different views on love: Yuna dreams about romance through rose-coloured glasses, while Akari is down-to-earth and practical. Meanwhile, high school boys Kazuomi and Rio also have different views on love: Kazuomi is an airhead who can't grasp the concept of love, while Rio grabs onto any confession as an opportunity—so long as the girl looks cute. Will these four classmates end up leading a youthful romance that meets their expectations?",
    release_date: '2020-09-18'
  },
  {
    id: 602063,
    title: 'Rurouni Kenshin: The Final',
    popularity: 13.804,
    vote_average: 8.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oS4jWkkS9A6FTLcHQb7Z6FVr9tH.jpg',
    genre_ids: [28, 12, 18],
    overview:
      'The wandering swordsman will return for his final battle. Warner Brothers Japan announced that a two-part "Final Chapter" from the live-action film adaptation project based on Nobuhiro Watsuki\'s action jidaigeki manga series.',
    release_date: '2021-04-23'
  },
  {
    id: 429733,
    title: 'Mayhem',
    popularity: 15.371,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3M6SQXW3UsEtWGoBLQoqFBvLYP0.jpg',
    genre_ids: [28, 35, 27],
    overview:
      'A virus spreads through an office complex causing white collar workers to act out their worst impulses.',
    release_date: '2017-11-10'
  },
  {
    id: 728754,
    title: 'Stand by Me Doraemon 2',
    popularity: 16.07,
    vote_average: 8.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mu5t94c8IZU781aMg1E1FKinYG2.jpg',
    genre_ids: [16],
    overview:
      "She and her beloved Shizuka are finally married! Nobita's childhood dream was supposed to come true on his wedding day, but for some reason, Nobita doesn't show up... One of the most popular episodes from the original story transcends time and space, and leads to Nobita's future. Doraemon and Nobita's great adventure begins in order to fulfill his grandmother's wish to see his bride at first sight. This is a story of tears and bonds, set in the past, present and future.",
    release_date: '2020-11-20'
  },
  {
    id: 680652,
    title: 'Karnan',
    popularity: 13.866,
    vote_average: 7.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xIDQqpLBYHrXE9G34UbVD9K0pvG.jpg',
    genre_ids: [18, 28],
    overview:
      'An angry young man fights for the rights of his oppressed people. Can he save them from those who weild power and weapons?',
    release_date: '2021-04-09'
  },
  {
    id: 525660,
    title: 'Dynasty Warriors : Destiny of an Emperor',
    popularity: 12.24,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9Y9mBU305rbJov60e6LDv0sTRhA.jpg',
    genre_ids: [14, 28],
    overview:
      'Dynasty Warriors is an upcoming Hong Kong fantasy-action film based on the Japanese video game franchise of the same title.',
    release_date: '2021-04-29'
  },
  {
    id: 508935,
    title: 'The Eight Hundred',
    popularity: 11.513,
    vote_average: 7.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/skGBLKakvPhyXaTPwZzx2zyOKz5.jpg',
    genre_ids: [10752, 36, 18, 28],
    overview:
      'In 1937, eight hundred Chinese soldiers fight under siege from a warehouse in the middle of the Shanghai battlefield, completely surrounded by the Japanese army.',
    release_date: '2020-08-14'
  },
  {
    id: 735134,
    title: 'Bhajarangi 2',
    popularity: 9.429,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nwav8REutambSEh8SL3wv8Y3EoF.jpg',
    genre_ids: [28, 53],
    overview:
      'Bhajarangi 2 is a sequel to blockbuster movie Bhajarangi and it is an action entertainer movie directed by Harsha and produced by jayanna combines banner. The movie cast includes Shiva Rajkumar and Bhavana are played the main lead roles while Arjun Janya scored the music.',
    release_date: '2021-05-14'
  },
  {
    id: 549514,
    title: 'Fatale',
    popularity: 13.584,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9v43jAAfCYcQEgeMJ1H0rghN0of.jpg',
    genre_ids: [53],
    overview: 'A married man is tricked into a murder scheme by a female police detective.',
    release_date: '2020-12-18'
  },
  {
    id: 421473,
    title: 'Above Suspicion',
    popularity: 17.159,
    vote_average: 5.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kpZ2SfwLHjuf2HmgaFko32cPgbl.jpg',
    genre_ids: [53, 80],
    overview:
      "The chilling true story of a newly married FBI poster boy assigned to an Appalachian mountain town in Kentucky. There he is drawn into an illicit affair with an impoverished local woman who becomes his star informant. She sees in him her means of escape; instead, it's a ticket to disaster for both of them.",
    release_date: '2019-06-20'
  },
  {
    id: 505436,
    title: 'Serial (Bad) Weddings 2',
    popularity: 13.545,
    vote_average: 5.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uT9FhaKYzR8XQg0etoPiqQxaMj8.jpg',
    genre_ids: [35],
    overview:
      'Claude and Marie Verneuil face a new crisis. The four spouses of their daughters, David, Rachid, Chao and Charles decided to leave France for various reasons. Here they are imagining their lives elsewhere.',
    release_date: '2019-01-30'
  },
  {
    id: 740822,
    title: 'Kidnapped Soul',
    popularity: 8.384,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pe4u5bnA9266CokLGdGVSa6RkQQ.jpg',
    genre_ids: [],
    overview: 'Starring Rainie Yang, Ke-Hsi Wu and Rexen Cheng',
    release_date: '2021-05-14'
  },
  {
    id: 794709,
    title: 'Vitt skräp',
    popularity: 8.616,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/o0REgdtwyXUH3vNL3qSx7nDztcy.jpg',
    genre_ids: [],
    overview:
      'In a small Swedish town during the 1980s two strangers accidentally find themselves caught up in a drug cartel.',
    release_date: '2021-05-14'
  },
  {
    id: 670343,
    title: 'Sun Children',
    popularity: 13.224,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2G3BazaiReAM8bazC1HuQHaltA0.jpg',
    genre_ids: [18],
    overview:
      'The story of 12-year-old Ali and his three friends. Together they work hard to survive and support their families, doing small jobs in a garage and committing petty crimes to make fast money. In a turn of events that seems miraculous, Ali is entrusted to find hidden treasure underground. He recruits his gang, but first, to gain access to the tunnel, the children must enroll at the Sun School, a charitable institution that tries to educate street kids and child laborers, close to where the treasure is located.',
    release_date: '2021-05-14'
  },
  {
    id: 843,
    title: 'In the Mood for Love',
    popularity: 12.684,
    vote_average: 8.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iYypPT4bhqXfq1b6EnmxvRt6b2Y.jpg',
    genre_ids: [18, 10749],
    overview:
      'A melancholy story set in Hong Kong in 1962. A woman and a man who live in the same crowded apartment building discover that their husband and wife are having an affair.',
    release_date: '2000-09-29'
  },
  {
    id: 711475,
    title: 'Here Today',
    popularity: 8.717,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3e1PedEUeSjhPbgrtVlpAs40pK8.jpg',
    genre_ids: [35, 18],
    overview:
      'Veteran comedy writer Charlie Berns, who is slowly but surely losing his grip on reality, befriends a talented young New York street singer Emma Payge. Together, they form an unlikely yet hilarious and touching friendship that kicks the generation gap aside and redefines the meaning of love and trust.',
    release_date: '2021-05-07'
  },
  {
    id: 524097,
    title: 'New Turn',
    popularity: 9.126,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/a8W8KCysiLZJwDz8kTG9mjBZRmU.jpg',
    genre_ids: [],
    overview:
      'Looking for her long-lost twin sister, a woman from Hong Kong bikes around Taiwan, joined by three complete strangers, one from Hong Kong, one from Taiwan, one from China, each biking around the island for his/her own reasons.',
    release_date: '2021-05-14'
  },
  {
    id: 799865,
    title: 'The Red Ring',
    popularity: 9.344,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/i24IHdZyN1FYYeO1oA7tMW1CJVi.jpg',
    genre_ids: [99],
    overview:
      'Director, Joonas Berghäll, suffers from chronic Lyme disease. He looks for a cure to his illness and by doing so finds himself thrown into the midst of a worldwide lobby-driven and political medical debate about Lyme disease and the threat of it becoming the next wide scale epidemic.',
    release_date: '2021-05-14'
  },
  {
    id: 816317,
    title: 'Summer Arousal',
    popularity: 8.316,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/17l3LHCcd93jVTiXZcj3YeS8gXs.jpg',
    genre_ids: [],
    overview:
      'Somewhere in a southern county of China, summer has just begun and it’s already greeted by a series of indecent assault, victims are identical: Girl in one-piece dress. Captain Hu along with Officer Tsai are assigned to crack the case, meanwhile Tsai is suffering from hemorrhoids that makes his life more complicated. Little did Tsai know that he’d reunite with a nurse named Fen whom he first met in the hospital again at a matchup afterwards. Meanwhile, Papa Hu has other issues to deal with; he realizes his teenage daughter has grown up into a young woman overnight, he must now learn to reconnect with an adolescent. Elsewhere, his semi-paralyzed father-in-law has been awfully picky on choosing a desirable nanny. Obviously the old man is seeking for someone young, to make things worse, Hu’s wife, slippery like an eel, has gradually isolated herself from the family.',
    release_date: '2021-05-14'
  },
  {
    id: 11104,
    title: 'Chungking Express',
    popularity: 13.119,
    vote_average: 8.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/43I9DcNoCzpyzK8JCkJYpHqHqGG.jpg',
    genre_ids: [18, 35, 10749],
    overview:
      'Two melancholic Hong Kong policemen fall in love: one with a mysterious underworld figure, the other with a beautiful and ethereal server at a late-night restaurant he frequents.',
    release_date: '1994-07-14'
  },
  {
    id: 760195,
    title: 'Separation',
    popularity: 13.128,
    vote_average: 5.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/u97rvkruZxoIUio3r3ZySFETHB7.jpg',
    genre_ids: [27],
    overview: 'A young girl finds solace in her artist father and the ghost of her dead mother.',
    release_date: '2021-04-30'
  },
  {
    id: 30018,
    title: 'Mother',
    popularity: 10.861,
    vote_average: 7.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dbVNHiJW280j3pFoCm2J6uahojW.jpg',
    genre_ids: [80, 18, 9648, 53],
    overview:
      "A mother lives quietly with her son. One day, a girl is brutally killed, and the boy is charged with the murder. Now, it's his mother's mission to prove him innocent.",
    release_date: '2009-05-28'
  },
  {
    id: 557950,
    title: 'Mainstream',
    popularity: 11.259,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sVYgFC6z0RZJrgUpve4XlyrVrgr.jpg',
    genre_ids: [18, 35],
    overview:
      'A young woman finds a path to internet stardom when she starts making videos with a charismatic stranger.',
    release_date: '2020-09-05'
  },
  {
    id: 809314,
    title: 'Trigger Point',
    popularity: 17.338,
    vote_average: 6.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8oW2n2iCA9AZ0bnoZ7qinRx3LDq.jpg',
    genre_ids: [28, 53],
    overview:
      "Nicolas Shaw is a retired U.S. special operative who becomes part of an elite 'invisible' team that quietly takes out the worst villains around the world.",
    release_date: '2021-04-23'
  },
  {
    id: 545237,
    title: 'The Nest',
    popularity: 9.15,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mSTrRgXGzu2t1jVhTexIqwSHlk7.jpg',
    genre_ids: [18, 10749],
    overview:
      "Rory is an ambitious entrepreneur who brings his American wife and kids to his native country, England, to explore new business opportunities. After abandoning the sanctuary of their safe American suburban surroundings, the family is plunged into the despair of an archaic '80s Britain and their unaffordable new life in an English manor house threatens to destroy the family.",
    release_date: '2020-05-08'
  },
  {
    id: 811828,
    title: 'Vivo',
    popularity: 15.067,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2tzgxNAIEnBeINYXXsR9wj7F0Nm.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-09'
  },
  {
    id: 650783,
    title: 'The Comeback Trail',
    popularity: 11.818,
    vote_average: 6.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gxsvZDA79tUGgSu1GsuRzkmaubZ.jpg',
    genre_ids: [28, 35, 80],
    overview:
      'After his latest film bombs, Producer Max Barber creates a new film, all to kill his lead, Duke Montana, in a stunt for insurance. But when Duke is unable to be killed in a basic stunt, Max puts him into more dangerous situations.',
    release_date: '2020-11-12'
  },
  {
    id: 611489,
    title: 'Initiation',
    popularity: 8.219,
    vote_average: 5.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oT3q1gClsLyDS6kI15FYISy4arw.jpg',
    genre_ids: [80, 27, 9648, 53],
    overview:
      "Whiton University unravels the night a star-athlete is murdered, kicking off a spree of social media slayings that force students to uncover the truth behind the school's hidden secrets and the horrifying meaning of an exclamation point.",
    release_date: '2021-05-07'
  },
  {
    id: 769749,
    title: 'Finding You',
    popularity: 9.129,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kw80NSqnwDzwsrAdxVc3KAZV3Ta.jpg',
    genre_ids: [18, 10749],
    overview:
      'Finley, a talented aspiring violinist, meets Beckett, a famous young movie star, on the way to her college semester abroad program in a small coastal village in Ireland. An unexpected romance emerges as the heartthrob Beckett leads the uptight Finley on an adventurous reawakening, and she emboldens him to take charge of his future, until the pressures of his stardom get in the way.',
    release_date: '2021-05-13'
  },
  {
    id: 529106,
    title: 'Major Grom: Plague Doctor',
    popularity: 12.428,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/t3sd3GemzTlejUmXfwlOQzqrwFA.jpg',
    genre_ids: [28, 12],
    overview:
      'Igor Grom is a skilled policeman from St. Petersburg, known for his daring nature and uncompromising attitude towards the criminals of all kinds. Incredible strength, analytical mind and integrity – these qualities make Major Grom the perfect policeman. Working tirelessly, he always pushes through, and meets the challenges standing in the way.',
    release_date: '2021-04-01'
  },
  {
    id: 632276,
    title: 'Deedo',
    popularity: 7.036,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bm2QgXHGBPwJbCJwUGA95K5bJa4.jpg',
    genre_ids: [35],
    overview:
      'comedy about Dido who plans with his friends to rob the rich scientist (Bayoumi Fouad), who discovers the matter and transforms them by one of his experiments into tom thumbs, which makes them encounter many exciting adventures.',
    release_date: '2021-05-13'
  },
  {
    id: 654754,
    title: "Billie Eilish: The World's a Little Blurry",
    popularity: 11.635,
    vote_average: 8.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bDQ95W5LPHW9FHlPj3QX3jvM9Z7.jpg',
    genre_ids: [99, 10402],
    overview:
      'This documentary offers a deeply intimate look at extraordinary teenager Billie Eilish. Award-winning filmmaker R.J. Cutler follows her journey on the road, onstage, and at home with her family as the writing and recording of her debut album changes her life.',
    release_date: '2021-02-26'
  },
  {
    id: 571265,
    title: 'Digimon Adventure: Last Evolution Kizuna',
    popularity: 15.11,
    vote_average: 6.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7bjTzPQUV2KVI0HdUjf1l8lUoLF.jpg',
    genre_ids: [16, 28, 53, 12, 14],
    overview:
      'Tai is now a university student, living alone, working hard at school, and working every day, but with his future still undecided. Meanwhile, Matt and others continue to work on Digimon incidents and activities that help people with their partner Digimon. When an unprecedented phenomenon occurs, the DigiDestined discover that when they grow up, their relationship with their partner Digimon will come closer to an end.  As a countdown timer activates on the Digivice, they realize that the more they fight with their partner Digimon, the faster their bond breaks. Will they fight for others and lose their partner? The time to choose and decide is approaching fast. There is a short time before “chosen children” will become adults. This is the last adventure of Tai and Agumon.',
    release_date: '2020-02-21'
  },
  {
    id: 776670,
    title: 'All the Moons',
    popularity: 10.702,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jM9Pgnnmq34c03Mv9Dmtj0QCb1C.jpg',
    genre_ids: [18, 14, 27],
    overview:
      "Eternal forests and snow-capped mountains... It is the last third of the 19th century and in some valley in the north of Navarra the death throes of the last Carlist war are experienced... A projectile destroys a girls' hospice and only one girl survives, how badly injured she is rescued by a beautiful woman who cares for her until she is cured. However, fate is not on her side, and as a result of an unexpected attack on her hiding place, the girl is left alone and isolated in the mountains. It will be then that she will discover her new and strange condition, which will prevent her from seeing the light of day, and from having an ordinary life like any other girl.",
    release_date: '2021-05-14'
  },
  {
    id: 774116,
    title: 'TO BE',
    popularity: 7.981,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pVJBeXDydch0HxKwWjRb3n3BFT0.jpg',
    genre_ids: [18],
    overview:
      'TO BE is an introspection of the being, which covers life and existential issues through phrases and questions on top of a series of abstract images.',
    release_date: '2021-05-14'
  },
  {
    id: 586863,
    title: 'Les Misérables',
    popularity: 9.792,
    vote_average: 7.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pUc2ZaIxvPHROjT0Trd6tpSnTme.jpg',
    genre_ids: [80, 18, 53],
    overview:
      'Inspired by the 2005 riots in Paris, Stéphane, a recent transplant to the impoverished suburb of Montfermeil, joins the local anti-crime squad. Working alongside his unscrupulous colleagues Chris and Gwada, Stéphane struggles to maintain order amidst the mounting tensions between local gangs. When an arrest turns unexpectedly violent, the three officers must reckon with the aftermath and keep the neighborhood from spiraling out of control.',
    release_date: '2019-11-14'
  },
  {
    id: 694919,
    title: 'Money Plane',
    popularity: 9.378,
    vote_average: 5.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
    genre_ids: [28, 80],
    overview:
      "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
    release_date: '2020-09-29'
  },
  {
    id: 793332,
    title: "Some People Don't Revisit the Marriage Officiant",
    popularity: 7.387,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lhfWhH31NQWZ3sIsfEt73ycY5j7.jpg',
    genre_ids: [35, 18, 10751],
    overview:
      'A comedy that revolves around the experience of marriage, and if husbands can go back in time will they marry their wives again?',
    release_date: '2021-05-13'
  },
  {
    id: 656796,
    title: 'Hoy se arregla el mundo',
    popularity: 8.115,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9QFiRicoeI9uvOgEPvRFciuhOUM.jpg',
    genre_ids: [18, 35],
    overview: '',
    release_date: '2021-05-13'
  },
  {
    id: 10376,
    title: 'The Legend of 1900',
    popularity: 8.481,
    vote_average: 8.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iOcbJ5pxokOPDRgieVDbsFMrCc6.jpg',
    genre_ids: [18, 10402, 10749],
    overview:
      'The story of a virtuoso piano player who lives his entire life aboard an ocean liner. Born and raised on the ship, 1900 (Tim Roth) learned about the outside world through interactions with passengers, never setting foot on land, even for the love of his life. Years later, the ship may be destroyed, and a former band member fears that 1900 may still be aboard, willing to go down with the ship.',
    release_date: '1998-10-28'
  },
  {
    id: 821991,
    title: 'Tarian Lengger Maut',
    popularity: 9.093,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/beJaflz5NIxRzlklRD2QL4f9l0n.jpg',
    genre_ids: [53, 27],
    overview:
      'One by one the corpses without a heart were found in Pagar Alas Village. At the same time, Sukma, a beautiful girl in the village is just about to become a Lengger dancer, and Dr. Jati, a young doctor has just arrived to work in the village.',
    release_date: '2021-05-13'
  },
  {
    id: 634521,
    title: 'The Promised Neverland',
    popularity: 9.117,
    vote_average: 7.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/yWOv6jlAtPAnHeaPfsfy964bGKA.jpg',
    genre_ids: [28, 53, 14, 9648, 12, 18],
    overview:
      'A group of the smartest kids at a seemingly perfect orphanage uncover its dark secret, and they set in motion a dangerous and desperate escape plan.',
    release_date: '2020-12-18'
  },
  {
    id: 463257,
    title: 'The Peanut Butter Falcon',
    popularity: 7.925,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qyQcRGvdW3VtxHR4fSDgPOePEip.jpg',
    genre_ids: [12, 18, 35],
    overview:
      'A down-on-his-luck crab fisherman embarks on a journey to get a young man with Down syndrome to a professional wrestling school in rural North Carolina and away from the retirement home where he’s lived for the past two and a half years.',
    release_date: '2019-08-09'
  },
  {
    id: 558582,
    title: 'First Cow',
    popularity: 9.079,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/yS41crZ1i0fFxCQbuL7I1Y1VBwm.jpg',
    genre_ids: [18, 37, 36],
    overview:
      'A taciturn loner and skilled cook has traveled west and joined a group of fur trappers in Oregon Territory, though he only finds true connection with a Chinese immigrant also seeking his fortune; soon the two collaborate on a successful business, although its longevity is reliant upon the clandestine participation of a nearby wealthy landowner’s prized milking cow.',
    release_date: '2020-03-06'
  },
  {
    id: 796516,
    title: 'Abbar Kanchenjunga',
    popularity: 6.228,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xQVHjUqagCvUecB7YzOe6hQJ87H.jpg',
    genre_ids: [],
    overview:
      'Abbar Kanchenjunga is a Bengali feature film celebrating 100 years of Satyajit Ray, produced by Shilpi A Pandey & Akshatt K Pandey and Directed by Raajhorshee De . First time ever 17 stars come together as a cast for any Bengali film .',
    release_date: '2021-05-13'
  },
  {
    id: 37861,
    title: 'Valhalla Rising',
    popularity: 8.963,
    vote_average: 6.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kcnbZxKyfyBM4NcEW9y90o6dcjl.jpg',
    genre_ids: [12, 18, 28, 14],
    overview:
      '1000 AD, for years, One Eye, a mute warrior of supernatural strength, has been held prisoner by the Norse chieftain Barde. Aided by Are, a boy slave, One Eye slays his captor and together he and Are escape, beginning a journey into the heart of darkness. On their flight, One Eye and Are board a Viking vessel, but the ship is soon engulfed by an endless fog that clears only as the crew sights an unknown land. As the new world reveals its secrets and the Vikings confront their terrible and bloody fate, One Eye discovers his true self.',
    release_date: '2009-09-04'
  },
  {
    id: 769271,
    title: 'The Humans & the Mongoose',
    popularity: 6.704,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zZRZaQJSXmKKQARBczbtuuztWF.jpg',
    genre_ids: [35],
    overview: '',
    release_date: '2021-05-13'
  },
  {
    id: 821656,
    title: 'Dear Imamku',
    popularity: 7.179,
    vote_average: 3.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ivLFsXPfj9GIYzbi5PC2uraNHb1.jpg',
    genre_ids: [18, 10749],
    overview:
      "Haris and Alysa, lovers who are also YouTubers, are successful by selling their romantic relationship content. Life suddenly changes when Haris almost loses his mother to a stroke. Haris decided to move and cut his relationship with Alysa. How is the continuation of Haris's intention to move?",
    release_date: '2021-05-13'
  },
  {
    id: 809755,
    title: 'King Otto',
    popularity: 6.447,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3X2quzl2hXIkKLCnigTfSeuN0LQ.jpg',
    genre_ids: [99],
    overview:
      'In the summer of 2004, audiences looked on in disbelief as the Greek National Football Team, a country that had never previously won a single match or even scored a goal in a major tournament, took down the giants of world football to become the unlikeliest of European Champions. The architect behind this unprecedented triumph was legendary German football coach ‘King’ Otto Rehhagel. After accomplishing every major success in Germany, he made the bold decision to leave all he knew behind and work in a foreign country with the underachieving Greek National Team. This is the story of how these two contrasting cultures came together to speak the same language and write a new chapter of Greek mythology.',
    release_date: '2021-05-13'
  },
  {
    id: 743128,
    title: 'Ivanovo Happiness',
    popularity: 6.699,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hKitVNaItefMm2MTB4zn4fcbRSE.jpg',
    genre_ids: [18, 35, 10749],
    overview:
      'Reflections of the shift worker Ivan, who, due to life circumstances, overcomes more than 9000 km to return home. On his way he meets many interesting people: military, students, mothers with children, men, women, old people. The landscapes outside the window, time zones, people are changing. But their stories remain, stories about life, love, hope and faith.',
    release_date: '2021-05-13'
  },
  {
    id: 682377,
    title: 'Chick Fight',
    popularity: 12.377,
    vote_average: 5.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg',
    genre_ids: [28, 35],
    overview:
      'When Anna Wyncomb is introduced to an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.',
    release_date: '2021-04-01'
  },
  {
    id: 756501,
    title: 'In The Name of The Son',
    popularity: 6.668,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/e1gDiNNzRcfY0TyHForszpugYyr.jpg',
    genre_ids: [53],
    overview:
      'Chae-geun is a driver for hire with manic depression. He often talks to his son who is studying in the States and tells him he would keep his promise. He does a favor by acting as a temporary fiancé of a single woman named Jin-hee, who works as a waitress at a restaurant he frequents. Her father, who was a victim of the Gwangju Uprising in 1980, shows him a gun he stashed away 39 years ago and asks Chae-geun to help him exact revenge on those who were responsible for the May 18 incident.',
    release_date: '2021-05-13'
  },
  {
    id: 662638,
    title: 'Detective Conan: The Scarlet Bullet',
    popularity: 6.325,
    vote_average: 8.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7SfwkGhKKD5mrXpgIZs9Y71t5wO.jpg',
    genre_ids: [16, 28, 80, 10749, 53, 9648],
    overview:
      "At the opening ceremony of the WSG (World Sports Games) Tokyo Games, a sports festival held once every four years, it is announced that the world's first vacuum superconducting maglev with a maximum speed of 1,000 kilometers per hour will open. While attracting attention from around the world, top executives of large companies are kidnapped from the party venue where WSG tournament sponsors gather. Conan moves toward a solution and eventually finds a connection with the WSG abduction case that occurred 15 years ago in Boston, USA.",
    release_date: '2021-04-16'
  },
  {
    id: 823353,
    title: "The Knower: Younis's Return",
    popularity: 6.41,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/z1xWJllr9dXRZYdpg7GTXkAutvM.jpg',
    genre_ids: [28],
    overview:
      'The film tackles cybercrime through the story of Younis, a man who lives with his wife and their baby girl, as he decides to rob a bank through the internet, but then finds himself chased by a dangerous gang.',
    release_date: '2021-05-13'
  },
  {
    id: 633793,
    title: 'Tell Her',
    popularity: 6.657,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/d4k9dgTahNhmc01QLp0Wcp7N5zD.jpg',
    genre_ids: [18],
    overview:
      'How to be a son, whose parents ask every day whom he loves more? Mother or father? How to be a mother if she madly loves her son, but circumstances compel her to take away the child from his father? How to be a father if his son is taken away to America forever, and he can’t imagine a life without him? This is a story about choice. Parents who decide for their children more than often act as best suits them. The child agrees, afraid to cause pain, but time will pass and the child will mature and at some point decide for himself. Only for the parents this is a lot more painful.',
    release_date: '2021-05-13'
  },
  {
    id: 827803,
    title: 'Ahmed Noterdame',
    popularity: 6.392,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qPTHnDX2hAbuV0JKbeLYQOxDgkn.jpg',
    genre_ids: [35],
    overview:
      'As a series of murders and kidnappings take place, the police begin to search for the mysterious killer. But when a journalist discovers that the killer is obsessed with the character of the hunchback of Notre Dame, he disguises himself as a similar character and calls himself Ahmed Notre Dame, in order to get close to the killer.',
    release_date: '2021-05-13'
  },
  {
    id: 523428,
    title: 'Parquet',
    popularity: 6.66,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ytnSMGecRO4dFchrnao0jk81qbr.jpg',
    genre_ids: [18],
    overview:
      'The creators of the legendary tango à trois reunite for an encore performance 25 years after breaking up. Determined to take on the night as if they had never aged they face the realities when their families arrive to join the audience.',
    release_date: '2021-05-13'
  },
  {
    id: 820625,
    title: '범털 2: 쩐의 전쟁',
    popularity: 6.368,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/u2zpKzwrv8gjEgoqDOxR5LVzH2B.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-05-13'
  },
  {
    id: 800344,
    title: '10:45 in a city like any other',
    popularity: 6.368,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7gva3n6KY48LFZWBKJvvv1WEMXo.jpg',
    genre_ids: [16, 35, 18],
    overview:
      'At the bus stop of an animated city, several fragments of everyday stories happening at the same time, become a space for reflection, love, death, and other situations that could resemble a city like any other.',
    release_date: '2021-05-13'
  },
  {
    id: 563110,
    title: 'Mama’s Girl',
    popularity: 6.106,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lOvJRezu1KBdz3zqhFlu97BnGGv.jpg',
    genre_ids: [18],
    overview:
      'Tenth-grade Tanya, being in a difficult life situation, is torn between love for mother and hatred of her stepfather. A decision matures in her mind that can fatally affect not only her life, but also the lives of her closest people.',
    release_date: '2021-05-13'
  },
  {
    id: 491926,
    title: 'Resistance',
    popularity: 11.432,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kPotrGRJf9Z5qYECXv7BjubyFRp.jpg',
    genre_ids: [10752, 36, 18],
    overview:
      'The story of mime Marcel Marceau as he works with a group of Jewish boy scouts and the French Resistance to save the lives of ten thousand orphans during World War II.',
    release_date: '2020-03-27'
  },
  {
    id: 808228,
    title: 'Night of the Sicario',
    popularity: 7.025,
    vote_average: 6.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rgFewciOc5lFXVoUDuboN87vbwO.jpg',
    genre_ids: [28, 18, 53],
    overview:
      'Taylor is forced to hide the young daughter of a Colombian woman in witness protection who will be testifying against a powerful drug cartel in Federal Court, as ruthless sicarios aim to hunt them down.',
    release_date: '2021-04-16'
  },
  {
    id: 472815,
    title: 'Buddy Games',
    popularity: 7.124,
    vote_average: 5.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uNCZh6YGg6r0GMyrctI14R0lHGL.jpg',
    genre_ids: [35, 18],
    overview:
      "A group of friends reunite to play The Buddy Games, a wild assortment of absurd physical and mental challenges. In the process, they'll heal old wounds, right past wrongs and figure out the true meaning of friendship...or die trying.",
    release_date: '2021-04-15'
  },
  {
    id: 816652,
    title: 'Aida - Gran Teatre del Liceu de Barcelona',
    popularity: 6.323,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hdghDP1G1UoEaFQsiDCuN6DFzp4.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-05-13'
  },
  {
    id: 589761,
    title: 'Chernobyl: Abyss',
    popularity: 11.189,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kfQJQWFEoWRVBH8FUKnT0HX1yRS.jpg',
    genre_ids: [18, 36],
    overview:
      'Chernobyl: Abyss is the first major Russian feature film about the aftermath of the explosion at the Chernobyl nuclear power station, when hundreds of people sacrificed their lives to clean up the site of the catastrophe, and to successfully prevent an even bigger disaster that could have turned a large part of the European continent into an uninhabitable exclusion zone.',
    release_date: '2021-04-15'
  },
  {
    id: 518502,
    title: 'The Unthinkable',
    popularity: 6.721,
    vote_average: 5.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/470k2PqJSFTzRCM2XLS35nPKmfA.jpg',
    genre_ids: [53, 28, 18, 10749],
    overview:
      'Sweden faces a mysterious attack while Alex tries to reunite with his youth love, Anna.',
    release_date: '2018-06-20'
  },
  {
    id: 827373,
    title: 'أحمد نوتردام',
    popularity: 6.311,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jn5KpQm2zHcnFBpcnOY6LXp8uey.jpg',
    genre_ids: [35],
    overview: '',
    release_date: '2021-05-13'
  },
  {
    id: 659699,
    title: 'Delete History',
    popularity: 7.903,
    vote_average: 5.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5JXC451k9TD9zE4FSrASv66MowV.jpg',
    genre_ids: [35],
    overview:
      'In a provincial suburb, three neighbours come to terms with the consequences of the new world of social media. Marie, who lives off her husband’s family allowance, is afraid of losing her son’s respect because of a sex tape. Bertrand can’t say no to advertising calls and is fighting to protect his daughter, who is being bullied online. Christine, after losing everything because of her addiction to TV series, wonders why her rating as an Uber driver is not taking off. These three lone fighters are incapable of finding a solution to their problems on their own — until they join forces to declare war on the tech giants.',
    release_date: '2020-08-26'
  },
  {
    id: 571625,
    title: 'The Closet',
    popularity: 6.228,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/W2tus8EwEagKCCCPqqocHEM9F2.jpg',
    genre_ids: [27, 53],
    overview:
      'After moving into a new house, a young girl begins displaying strange and disturbing behavior until, one day, she disappears behind a closet. While the devastated father is left with no clue about his daughter’s disappearance, an exorcist shows up to help.',
    release_date: '2020-02-05'
  },
  {
    id: 624788,
    title: 'Black Bear',
    popularity: 6.626,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/syrY3P8a30tGcmSlVtZjXO0VX5r.jpg',
    genre_ids: [18, 35, 53],
    overview:
      'At a remote lake house in the Adirondack Mountains, a couple entertains an out-of-town guest looking for inspiration in her filmmaking. The group quickly falls into a calculated game of desire, manipulation, and jealousy, unaware of how dangerously intertwined their lives will soon become.',
    release_date: '2020-12-04'
  },
  {
    id: 12548,
    title: 'I Vitelloni',
    popularity: 9.423,
    vote_average: 7.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4bSqvgj7e9adaRu0ZQ4yQgOAjaN.jpg',
    genre_ids: [35, 18],
    overview:
      "Five young men dream of success as they drift lazily through life in a small Italian village. Fausto, the group's leader, is a womanizer; Riccardo craves fame; Alberto is a hopeless dreamer; Moraldo fantasizes about life in the city; and Leopoldo is an aspiring playwright. As Fausto chases a string of women, to the horror of his pregnant wife, the other four blunder their way from one uneventful experience to the next.",
    release_date: '1953-08-26'
  },
  {
    id: 554761,
    title: 'Falling',
    popularity: 7.89,
    vote_average: 6.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/x1W0y61gDv3gcc0E5NDoM0rclTu.jpg',
    genre_ids: [18],
    overview:
      'John Peterson lives with his partner Eric and their adopted daughter in Southern California. When he is visited by his aging father Willis from Los Angeles who is searching for a place to retire, their two very different worlds collide.',
    release_date: '2020-10-02'
  },
  {
    id: 827818,
    title: 'One Second',
    popularity: 6.28,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lGVkh5Ur6TZKTgj36hFkyTZdZLo.jpg',
    genre_ids: [10749, 35],
    overview:
      "The story follows a young man who gets to know a girl and causes her many problems. But when he's exposed to an accident, his life takes a drastic turn.",
    release_date: '2021-05-13'
  },
  {
    id: 480100,
    title: 'Nightmare Cinema',
    popularity: 5.184,
    vote_average: 5.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wKQt91hfroplixdx4B5gRNHRBax.jpg',
    genre_ids: [27],
    overview:
      'A series of down-on-their-luck individuals enter the decrepit and spine-chilling Rialto theater, only to have their deepest and darkest fears brought to life on the silver screen by The Projectionist – a mysterious, ghostly figure who holds the nightmarish futures of all who attend his screenings.',
    release_date: '2019-06-21'
  },
  {
    id: 346687,
    title: 'The Water Man',
    popularity: 6.013,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7yxdEkfTIBtKF7JbGMq7Hp6KCKf.jpg',
    genre_ids: [12, 18],
    overview:
      'Gunner and his mother share a special bond. She supports his daydreaming and artistic pursuits, while his frequently-on-the-road father, Amos, with whom Gunner shares a strained relationship, has other ideas about where his son’s interests should lie. Gunner and his dad attempt to smooth over their differences for the sake of the family, but when his mom’s sickness worsens, Gunner disappears into stacks of books on both science and the supernatural in search of possible cures. When Gunner and his rebellious friend Jo go missing during their quest into the Water Man’s mysterious forest, Amos must immerse himself in his son’s world to find them and put his family back together.',
    release_date: '2021-05-07'
  },
  {
    id: 744738,
    title: 'Dune Drifter',
    popularity: 8.744,
    vote_average: 3.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hBLJzYriF9zZAHc2Gjb3KTQGTGT.jpg',
    genre_ids: [878, 27],
    overview:
      'When the trainee pilot and her mortally wounded gunner are shot down, they crash land on a nearby planet. An enemy craft offers the chance of spare parts to fix her ship, but then she spots another survivor - an enemy alien soldier with no intention of letting her escape.',
    release_date: '2020-10-24'
  },
  {
    id: 348672,
    title: 'About Endlessness',
    popularity: 6.647,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fRIBlFJiMNm7DkphQgcHgDS2Pvx.jpg',
    genre_ids: [18, 35],
    overview:
      'A reflection on human life in all its beauty and cruelty, its splendor and banality, guided by a Scheherazade-esque narrator. Inconsequential moments have the same significance as historical events. Simultaneously an ode and a lament, presents a kaleidoscope of all that is eternally human, an infinite story of the vulnerability of existence.',
    release_date: '2019-11-15'
  },
  {
    id: 572751,
    title: 'Seized',
    popularity: 6.59,
    vote_average: 4.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5YtWsBAv3HvdeTXidyvAsiP4sVu.jpg',
    genre_ids: [28, 53],
    overview:
      'Hiding out with his son Taylor on the Mexican coast, Nero hopes to put his violent Special Forces career behind him. But after Nero’s home is attacked and Taylor is abducted, the mysterious Mzamo orders Nero to slaughter the members of three rival crime syndicates. If he fails, Taylor will die. Now, with bullets flying and bodies dropping as Nero completes his mission, he races to find Mzamo’s hideout and seek revenge.',
    release_date: '2021-04-08'
  },
  {
    id: 826048,
    title: 'Blue Call',
    popularity: 6.264,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sOvkpcdGgJnIwl7d8YcUuQ2d4bQ.jpg',
    genre_ids: [27],
    overview:
      "Haylee, a local EMT suffering from PTSD, spends her days making split second decisions with lives that hang in the balance. One night on a routine call, she is faced with a moral decision, taking matters into her own hands and mercy kills a young woman. Her decision opens a pandora's box that leads Haylee to blur the lines of her job responsibilities and wanting to help those in need. Now, falling deeper and deeper into a rabbit hole, she gets caught up in a world of underground drugs and a sadistic killer who's made her his next victim.",
    release_date: '2021-05-04'
  },
  {
    id: 609181,
    title: 'Golden Arm',
    popularity: 6.241,
    vote_average: 8.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/w4vwJK62cWhVFq6SZKHIcdHrh5T.jpg',
    genre_ids: [35],
    overview:
      'A tough lady trucker trains her girly best friend to compete in the National Ladies Arm Wrestling Championship.',
    release_date: '2021-04-30'
  },
  {
    id: 728118,
    title: 'Quo vadis, Aida?',
    popularity: 6.179,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vwZhw2hqKYCijfnkPJYPsM7aTEr.jpg',
    genre_ids: [18, 10752],
    overview:
      'Bosnia, July 1995. Aida is a translator for the UN in the small town of Srebrenica. When the Serbian army takes over the town, her family is among the thousands of citizens looking for shelter in the UN camp. As an insider to the negotiations Aida has access to crucial information that she needs to interpret. What is at the horizon for her family and people - rescue or death? Which move should she take?',
    release_date: '2021-02-26'
  },
  {
    id: 742396,
    title: 'Kakegurui Part 2',
    popularity: 5.944,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jHRM4B7uUAElJvffXeJ0WvxZ4je.jpg',
    genre_ids: [],
    overview:
      'A school appears peaceful from a distance, but a fierce gambling battle takes place once again. Yumeko Jabami is involved in the battle.',
    release_date: '2021-04-29'
  },
  {
    id: 618363,
    title: 'Collective',
    popularity: 4.778,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oR93n0CAn2GznyHDFSRTp0J1t8c.jpg',
    genre_ids: [99],
    overview:
      'In the aftermath of a tragic fire in a Romanian club, burn victims begin dying in hospitals from wounds that were not life threatening.  A team of investigative journalists move into action uncovering the mass corruption of the health system and of the state institutions. Collective follows journalists, whistle blowers, and authorities alike. An immersive and uncompromising look into a dysfunctional system, exposing corruption, propaganda, and manipulation that nowadays affect not only Romania, but societies around the world.',
    release_date: '2020-02-28'
  },
  {
    id: 797294,
    title: 'Assault on VA-33',
    popularity: 4.571,
    vote_average: 7.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wSAvEMPr8ddriiIX2fxbaPwpa5a.jpg',
    genre_ids: [28, 53],
    overview:
      'Decorated army veteran Jason Hill is on a routine visit to the local VA hospital when organized terrorists infiltrate the building and take hostages, including a decorated general, and Hill’s wife. The highly trained veteran is outnumbered and the last line of defense, taking on a building full of armed insurgents before it’s too late.',
    release_date: '2021-04-02'
  },
  {
    id: 642208,
    title: 'Supernova',
    popularity: 5.145,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/c21Vwt4shqVxCQziFz0Hf91wSow.jpg',
    genre_ids: [18, 10749],
    overview:
      'Sam and Tusker, partners of 20 years, are traveling across England in their old RV visiting friends, family and places from their past. Since Tusker was diagnosed with early-onset dementia two years ago, their time together is the most important thing they have.  As the trip progresses, however, their ideas for the future clash, secrets come out, and their love for each other is tested as never before. Ultimately, they must confront the question of what it means to love one another in the face of Tusker’s illness.',
    release_date: '2021-01-29'
  },
  {
    id: 659943,
    title: 'Poly',
    popularity: 4.778,
    vote_average: 6.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tcD0lAVrV87sBhKkJ7e3CqdyM1x.jpg',
    genre_ids: [10751],
    overview: 'The adventures of Shetland pony Poly in the South of France.',
    release_date: '2020-10-21'
  },
  {
    id: 483742,
    title: 'The Violin Player',
    popularity: 3.916,
    vote_average: 5.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/A6toQ712qXgcPVYI9DPTtIgB2Id.jpg',
    genre_ids: [18, 10749],
    overview:
      'A celebrated violin player, Karin, has to end her stellar career after a car accident makes her fingers stop working their magic. She starts teaching students who are twenty years younger than her, only to find herself falling in love with Antti, one of her students. They are not an easy match, both being passionate about the music and overly ambitious about their careers.',
    release_date: '2018-06-21'
  },
  {
    id: 539364,
    title: 'Satanic Panic',
    popularity: 4.329,
    vote_average: 5.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qnxAGrRwBynkQXCs4Dh6zpEVajN.jpg',
    genre_ids: [27, 35],
    overview:
      'A pizza delivery girl is suddenly in for the fight of her young life when encountering a group of Satanists in need of a virgin to ritually sacrifice.',
    release_date: '2019-10-28'
  },
  {
    id: 820921,
    title: 'Así Crecí',
    popularity: 7.72,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vimcNOoguDm8rAMvYZRTbqJY1Op.jpg',
    genre_ids: [18],
    overview:
      'Beto is a neighborhood boy who, defending his mother from his stepfather, finds himself in a difficult situation; Although it ends up being a blessing for his life since he realizes his enormous talent thanks to that situation. Battling to find himself and to fulfill his goals of getting out of poverty, Beto finds himself in a world of rap, drugs, promoters, groupies and gangsters who want a piece of him. A film written by Jose “JB” Castro, based on the experiences that all the new talents of Mexican rap have experienced. Follow Beto on his journey from poverty to fame and everything it takes to become a successful rapper in a country where rap has become one of the few ways young Mexicans can lift themselves out of poverty.',
    release_date: '2021-04-16'
  },
  {
    id: 365961,
    title: 'Help, I Shrunk My Teacher',
    popularity: 5.133,
    vote_average: 5.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dKcp0LzAPF1Y78JjJlVU3WITtms.jpg',
    genre_ids: [35, 10751, 14],
    overview:
      'Already having a hard time adjusting at his new school, things take a turn for the bizarre for eleven year old Felix when he accidentally shrinks his strict principal to only fifteen centimetres in height!',
    release_date: '2015-12-17'
  },
  {
    id: 811959,
    title: 'The United Way',
    popularity: 3.475,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/eQpdI0WJhnc77nUculoWH8UdhXS.jpg',
    genre_ids: [99],
    overview:
      'The United Way is the legendary story of one of the most iconic sports teams in the world, Manchester United, from their humblest of beginnings to a behemoth with over 650 million supporters worldwide. Presented by Eric Cantona and featuring Charlton, Best, Cantona, Beckham, and Ronaldo, alongside stunning archival and never-before-seen footage, The United Way celebrates the global phenomenon of a unifying club for the people, by the people.',
    release_date: '2021-05-10'
  },
  {
    id: 822231,
    title: 'Mohist Mechanism',
    popularity: 4.098,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/y5f5KT7UnN42JFbmpYvylvSIt7A.jpg',
    genre_ids: [],
    overview:
      "The film is adapted from the novel of the same name written by Yan Zhiyang. It tells the story of Shen Tuo (Liu Lincheng), a descendant of Mohist's official technique, who enters the Promise Prison alone in order to rescue his beloved wife, Jiang Ren (Liu Jingyi).",
    release_date: '2021-04-23'
  },
  {
    id: 573644,
    title: 'The Outside Story',
    popularity: 5.473,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gONHahY9aygWGvnAa8sx86ExD3O.jpg',
    genre_ids: [18, 35],
    overview:
      'After locking himself out of his apartment, an introverted, heartbroken editor finds himself on an epic journey up, down and around his block with life-altering ramifications.',
    release_date: '2021-04-30'
  },
  {
    id: 828322,
    title: 'Pináculo',
    popularity: 7.466,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mzo4cSs5NGEL4ickHNDv0mC2bCh.jpg',
    genre_ids: [18],
    overview: '',
    release_date: '2021-05-14'
  },
  {
    id: 828254,
    title: 'الثلاثاء 12',
    popularity: 5.513,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8eyhEFw1dMZHL9BFMdVaO9goX09.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-05-12'
  },
  {
    id: 721955,
    title: 'Goodbye Honey',
    popularity: 7.531,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1BoNks9Ha4FtPX7GLD5JpAsnIfM.jpg',
    genre_ids: [27, 53],
    overview:
      'After escaping abduction, a frantic woman must coerce an exhausted truck driver to hide in the back of her truck for the night. The two women take refuge, not knowing what the rest of the night has in store.',
    release_date: '2021-05-11'
  },
  {
    id: 799668,
    title: 'The Hypnosis',
    popularity: 7.395,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/d9mOGJTtcSXuJ9aBauYmMHJ8Uqr.jpg',
    genre_ids: [27, 53],
    overview:
      "Jin-ho lost his parents in an accident when he was a child, he receives hypnosis to treat his trauma related to the accident. Do-hyun, a college student gets interested in Jin-ho's hypnosis and he tries doing it too.",
    release_date: '2021-03-24'
  },
  {
    id: 744750,
    title: 'Held',
    popularity: 4.046,
    vote_average: 5.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tFaeztksfufY5uewvu7DbUeiSey.jpg',
    genre_ids: [27, 9648, 53],
    overview:
      "A couple's ailing marriage is put to the test when they are held hostage in an isolated vacation rental by an unseen Voice that commands their every move.",
    release_date: '2021-04-09'
  },
  {
    id: 624793,
    title: 'Creation Stories',
    popularity: 7.314,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7sEbuICGmFqooR5dbYQQpQa1zYo.jpg',
    genre_ids: [18, 10402],
    overview:
      'The true story of the rise and fall of Creation Records and its infamous founder Alan McGee; the man responsible for supplying the “Brit Pop” soundtrack to the ‘90s, a decade of cultural renaissance known as Cool Britannia.  From humble beginnings to Downing Street soirées, from dodging bailiffs to releasing multi-platinum albums, Creation had it all. Breakdowns, bankruptcy, fights and friendships… and not forgetting the music. Featuring some of the greatest records you have ever heard, we follow Alan through a drug-fuelled haze of music and mayhem, as his rock’n’roll dream brings the world Oasis, Primal Scream, and other generation-defining bands.',
    release_date: '2021-04-15'
  },
  {
    id: 575463,
    title: 'Mama Weed',
    popularity: 4.531,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jjMMG9BAqcCe2EwDuHsByucO3Lx.jpg',
    genre_ids: [18, 80, 35],
    overview:
      'A translator working for the police gets involved in the other side of drug dealing.',
    release_date: '2020-09-09'
  },
  {
    id: 762735,
    title: 'Wildcat',
    popularity: 3.168,
    vote_average: 8.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oy16WaZVnjNU86kEUrSc9qPwsgK.jpg',
    genre_ids: [18, 53, 10752],
    overview:
      'An ambitious reporter stationed in the Middle East who is taken captive after her convoy is ambushed. She is confronted by the trauma of her past and must find a way to bring down the militants who incarcerated her.',
    release_date: '2021-04-23'
  },
  {
    id: 621744,
    title: 'Two of Us',
    popularity: 4.268,
    vote_average: 7.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/itPHi7V84mUOYuvD3t0QK2oWfVP.jpg',
    genre_ids: [18, 10749],
    overview:
      'Pensioners Nina and Madeleine have hidden their deep and passionate love for many decades. From everybody’s point of view, including Madeleine’s family, they are simply two neighbors living on the top floor of their building. They come and go between their two apartments, sharing the tender delights of everyday life together. Until the day their relationship is turned upside down by an unexpected event leading Madeleine’s daughter to slowly unveil the truth about them.',
    release_date: '2020-02-12'
  },
  {
    id: 750272,
    title: 'Paper Spiders',
    popularity: 5.118,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mkqn1OvJpKfxxXW3mPH6DNjh54D.jpg',
    genre_ids: [18],
    overview: 'A bittersweet story about coming of age in the shadow of mental illness.',
    release_date: '2021-05-07'
  },
  {
    id: 664601,
    title: 'Gunda',
    popularity: 5.207,
    vote_average: 6.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/11UF91CRTtDKOAfwYWatz1i4nS1.jpg',
    genre_ids: [99],
    overview:
      'It is a film about pigs, cows and chicken. Black and white. Without words. Without music. Victor Kossakovsky is offering not just a mesmerizing poetic work of art but also a wonderful life experience. We get to know Gunda the sow, her family and neighbors, and it gives us the reason to think about the secret of consciousness and the value of life of those with whom we share this planet.',
    release_date: '2021-04-15'
  },
  {
    id: 815152,
    title: 'Painkiller',
    popularity: 7.014,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2YlkF8TxVCh06GDMrYTYTIjweo0.jpg',
    genre_ids: [53],
    overview:
      'After a man loses his child, he begins a campaign to destroy the white collar criminals behind the opioid epidemic, and reluctantly embraces his anti-hero status.',
    release_date: '2021-05-04'
  },
  {
    id: 826531,
    title: 'The First Myth: Clash of Gods',
    popularity: 3.553,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9jmthyomnQSdqH7XhU9Y8NHBok5.jpg',
    genre_ids: [28],
    overview:
      'In the last years of the Yin and Shang dynasties, King Zhou was tyrannical, and the people did not have a living. The Lord Tongtian and Shen Gongbao wanted to take advantage of the chaos and use the Ten Thousand Immortal Array to destroy the mortal world. In order to fight against the evil forces, Jiang Ziya assembled Yang Jian, Nezha and other immortals to save the mortal world. In the past, the heroes of Eastern mythology who had led the way in different stories gathered passionately and showed their magical powers. A magnificent story of confrontation between good and evil, full of oriental mythology, unfolds…',
    release_date: '2021-05-05'
  },
  {
    id: 768939,
    title: 'Army of One',
    popularity: 3.568,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xxv6yHSNTGaf7aqwF1XdLVNpvpB.jpg',
    genre_ids: [28],
    overview:
      "Out hiking, Special Forces Brenner Baker stumbles onto a Cartel's compound. Her husband's killed and she's left for dead. The Cartel made two mistakes, killed her husband and left her alive. They won't live to make another.",
    release_date: '2020-12-14'
  },
  {
    id: 803923,
    title: 'Every Breath You Take',
    popularity: 4.503,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nrgNXpH4x9NAkqOKhxEs3TspkHc.jpg',
    genre_ids: [53],
    overview:
      'A psychiatrist, whose client commits suicide, finds his family life disrupted after introducing her surviving brother to his wife and daughter.',
    release_date: '2021-04-02'
  },
  {
    id: 824286,
    title: '뮤턴트 파이톤',
    popularity: 3.837,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tpbcsCO4CoFKPnvomhbBkdEjdN6.jpg',
    genre_ids: [14, 28],
    overview: '',
    release_date: '2021-05-11'
  },
  {
    id: 672475,
    title: 'V2. Escape from Hell',
    popularity: 5.026,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3lCIHrL4fXHiIbxfFwx8HJR2alC.jpg',
    genre_ids: [10752, 28, 18],
    overview:
      'Mikhail Devyatayev, a captured Soviet pilot who leads an escape from a German concentration camp by hijacking an aircraft.',
    release_date: '2021-04-29'
  },
  {
    id: 660330,
    title: 'Night Shift',
    popularity: 6.861,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/52KQaRQiEIZ9TE4P5iIrRIK7Wej.jpg',
    genre_ids: [18],
    overview:
      'Three Parisian police officers are charged with driving a stranger back to the border. However, Virginie realizes their prisoner will most likely be killed upon return to his country and so goes about attempting to convince her fellow officers to release him.',
    release_date: '2020-05-21'
  },
  {
    id: 684684,
    title: 'Shortcut',
    popularity: 3.501,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sLU8QVaM3CHJkv6JaBiXt0YnqHa.jpg',
    genre_ids: [27, 12, 14],
    overview:
      'A group of five classmates is trapped inside their school bus after a mysterious creature invade the road. Time runs and every passing minute decreases their survival chances against the constant threats of that unknown entity.',
    release_date: '2020-09-25'
  },
  {
    id: 555457,
    title: 'Four Kids and It',
    popularity: 4.605,
    vote_average: 6.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vIFyMT7HIUdfYPqgjsFsXlbaVZx.jpg',
    genre_ids: [10751, 14],
    overview:
      'A group of kids on holiday in Cornwall meet a magical creature on the beach with the power to grant wishes.',
    release_date: '2020-04-03'
  },
  {
    id: 810271,
    title: 'The Resort',
    popularity: 4.319,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/maJs2KmP4R0AmkAjSk1iadCL1De.jpg',
    genre_ids: [27],
    overview:
      'Four friends head to Hawaii to investigate reports of a haunting at an abandoned resort in hopes of finding the infamous Half-Faced Girl. When they arrive, they soon learn you should be careful what you wish for.',
    release_date: '2021-04-30'
  },
  {
    id: 37185,
    title: 'Comrades: Almost a Love Story',
    popularity: 3.97,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4mlgaRFBSztO5WKRmHPgTCL8UDc.jpg',
    genre_ids: [18, 10749],
    overview:
      'Jun arrives in Hong Kong from mainland China, hoping to be able to earn enough money to marry his girlfriend back home. He meets the streetwise Qiao and they become friends. As friendship turns into love, problems develop, and although they seem meant for each other they somehow keep missing out.',
    release_date: '1996-11-02'
  },
  {
    id: 808159,
    title: 'Bisping',
    popularity: 3.383,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jCgjAA312OwMXjWpGCaSeZmIj61.jpg',
    genre_ids: [99],
    overview:
      'After a tumultuous decade-long career filled with injuries and missed opportunities, 38-year-old UFC middleweight Michael Bisping finally got his due, and he plans to go out swinging.',
    release_date: '2021-05-10'
  },
  {
    id: 672489,
    title: 'The Only Way Out',
    popularity: 3.638,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uAZTea31PyxEcjmwIhmRRK2MIEP.jpg',
    genre_ids: [53],
    overview:
      "Six years after her husband, a prominent Belgrade lawyer, died in a fire, Anja Kolar receives information that makes her question everything she thought she knew about the accident and about her own family as well. At the same time the sudden death of his best friend's daughter draws police inspector Dejan Strbac into a whirlpool of crimes, starting with the mysterious disappearance of a young female lawyer, which took place six years earlier.",
    release_date: '2021-05-01'
  },
  {
    id: 589713,
    title: 'Shades of the Heart',
    popularity: 4.892,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2ye3wbYECwfTm6pRpDiaZGYLXE3.jpg',
    genre_ids: [18],
    overview:
      'Chang-seok’s marriage failed. He left his wife and came back to South Korea. He is about to publish a novel based on his own experience. He meets various people, including Mi-young, Yoo-jin, Sung-ha and Ju-eun. Upon meeting these people, Chang-seok changes his mind and starts weaving yet another story.',
    release_date: '2021-03-31'
  },
  {
    id: 734353,
    title: 'Anything for Jackson',
    popularity: 3.724,
    vote_average: 6.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5W4jCXl5sznY5hlVzNTwNV4AoIW.jpg',
    genre_ids: [27],
    overview:
      "A bereaved Satanist couple kidnap a pregnant woman so they can use an ancient spellbook to put their dead grandson's spirit into her unborn child, but they end up summoning more than they bargained for.",
    release_date: '2021-03-04'
  },
  {
    id: 669665,
    title: 'Our Father',
    popularity: 4.509,
    vote_average: 6.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/woa5t4LuiJ14Pl2Bqjn8DtLHne8.jpg',
    genre_ids: [18],
    overview: 'Two young boys, Valerio and Christian, form a powerful friendship over the summer.',
    release_date: '2020-09-24'
  },
  {
    id: 746554,
    title: 'Food Luck',
    popularity: 3.118,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/t7fg5dCaQ6BOfSg3I8SW9BW5U38.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-05-06'
  },
  {
    id: 590304,
    title: 'June Again',
    popularity: 3.364,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4C1MwHWXerPuBx2ckfC11YW74hw.jpg',
    genre_ids: [18, 35],
    overview:
      "A woman experiences a medical miracle, after which she has only a few days to bring together her estranged children, save the family's wallpaper business and rekindle an old flame.",
    release_date: '2021-05-06'
  },
  {
    id: 826047,
    title: 'Why?',
    popularity: 3.75,
    vote_average: 3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/j9sPFnnlTjGLdOYhiEZHqdtkQ6F.jpg',
    genre_ids: [27],
    overview:
      'Writer Blake Sinclair finds herself in a fight for her life against a bloodthirsty maniac who has been leaving multiple victims in his wake as he returns to the mountain town of Northdale.',
    release_date: '2021-05-05'
  },
  {
    id: 520390,
    title: 'The Kindness of Strangers',
    popularity: 3.55,
    vote_average: 6.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/TUDtIFrvtVnQ0hnJBqGIjod6s9.jpg',
    genre_ids: [18],
    overview:
      'Clara and her two sons escape from her abusive husband with little more than their car and plan to start over in New York. After the car towed away, the family meets Alice, who gets them into an emergency shelter. While stealing food at a Russian restaurant called ‘Winter Palace’, Clara meets Marc, who has been given the chance to help the old eatery regain its former glory. The ‘Winter Palace’ soon becomes a place of unexpected encounters between people who are all undergoing some sort of crisis and whom fate has now brought together.',
    release_date: '2019-12-19'
  },
  {
    id: 786110,
    title: "Jakob's Wife",
    popularity: 5.047,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hsOSdY9ALwBLP41c6tAF5UXkpc0.jpg',
    genre_ids: [27, 53],
    overview:
      'Anne is married to a small-town Minister and feels her life and marriage have been shrinking over the past 30 years. After a brutal and bloody encounter with "The Master", she discovers a new sense of power and an appetite to live bigger and bolder than before. However, these changes come with a heavy body count and a toll on her marriage.',
    release_date: '2021-04-16'
  },
  {
    id: 669363,
    title: 'The Man Who Sold His Skin',
    popularity: 4.261,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/o1wRIwEttuWUByTm1wXsfCstNlh.jpg',
    genre_ids: [18],
    overview:
      'To be able to travel to Europe and find the love of his life, Sam Ali, a Syrian refugee, accepts to have his back tattooed by one of the most sulfurous contemporary artist; becoming that way a precious work of art.',
    release_date: '2020-09-05'
  },
  {
    id: 733740,
    title: 'Dara of Jasenovac',
    popularity: 4.392,
    vote_average: 8.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/inXhGdmfE6GCV1NpnZPUd6ECF2c.jpg',
    genre_ids: [18, 36, 10752],
    overview:
      'During the Nazi-occupied Ustasha regime "NDH" in former Yugoslavia during WWII, little girl Dara is sent to the concentration camp complex Jasenovac in Croatia also known as "Balkan\'s Auschwitz".',
    release_date: '2020-11-25'
  },
  {
    id: 501738,
    title: 'Charlatan',
    popularity: 4.011,
    vote_average: 6.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ferQ5Ko7z44C1FVHuvncSt9XrLg.jpg',
    genre_ids: [18],
    overview:
      'Born in the early 20th century, herbalist Jan Mikolasek became rich and famous after curing countless diseases with unorthodox means. A true emblem of Czechoslovakia before World War II, the healer became even more appreciated during the Nazi occupation and the communist regime. Each regime appreciates his skill and protects him. But how much will it cost him to maintain his status in a new political change?',
    release_date: '2020-08-20'
  },
  {
    id: 828524,
    title: 'In the Clear',
    popularity: 3.985,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/md6sB3AKYVXTU0HjDpTd2rGMKNq.jpg',
    genre_ids: [14, 18, 12],
    overview:
      "After centuries of silence, a new age of prophets has begun. Mick has accepted that, as the first and only recipient of the gift of prophecy, it's finally time that he found someone who can help him navigate this new path. On his journey to find guidance, Mick is confronted by an old friendship that had crumbled under the weight of his newly designated responsibilities. In a situation where he might typically take a bit of a back seat, Mick decided it's just time to be decisive and honest. Not even through the third day of his journey and this is shaping up to be a larger venture than anticipated.",
    release_date: '2021-05-11'
  },
  {
    id: 828520,
    title: 'Pigface',
    popularity: 3.735,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3pLw3QnawDJbj81JBdT7tXLjnym.jpg',
    genre_ids: [],
    overview: 'Short film written and directed by John Paul Lopez',
    release_date: '2021-05-11'
  },
  {
    id: 828374,
    title: 'Baggage',
    popularity: 3.736,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nRhPyPJNhrgaRXYqnfK9VF2werg.jpg',
    genre_ids: [18],
    overview:
      'Kiki visits her estranged brother Jack in the Lofty Mountains. As her motivations become clear she is forced to decide. Can she  sacrifice her #FoodFam for her real family?',
    release_date: '2021-05-11'
  },
  {
    id: 728552,
    title: 'Mara',
    popularity: 3.321,
    vote_average: 4.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iM3dJPxVoI8h9q5oGfas5xeCL6l.jpg',
    genre_ids: [53, 27],
    overview:
      "A traumatic experience leads to a break-up between a young married couple. In a desperate attempt to save their marriage, Andrey, the husband, seeks help from a psychic named Mara. His only wish is to make his wife Olga forget the past. Mara's magic works, but the second honeymoon soon turns into a living nightmare... Andrey gradually recognizes that he is dealing with a powerful evil that possesses his wife, and the price of the psychic's service is Olga’s life.",
    release_date: '2020-11-05'
  },
  {
    id: 618228,
    title: 'Moffie',
    popularity: 2.854,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5MmpFYN4DnQLK7J7cVe3tACnQcO.jpg',
    genre_ids: [18, 10752, 10749],
    overview:
      'Moffie (a derogatory Afrikaans term for a gay man) follows the story of Nicholas van der Swart: from a very young age, he realises he is different. Try as he may, he cannot live up to the macho image expected of him by his family, by his heritage. Set during the South African border war against communism, this is a long-overdue story about the emotional and physical suffering endured by countless young men.',
    release_date: '2020-03-13'
  },
  {
    id: 608232,
    title: 'Tove',
    popularity: 3.917,
    vote_average: 6.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/adStgMg4WizU2Fe3Tcc8TA7iUv7.jpg',
    genre_ids: [18],
    overview:
      'The movie centres on the life of Tove Jansson, showing both her personal relationships, and the creation of the popular Moomin books.',
    release_date: '2020-10-02'
  },
  {
    id: 567566,
    title: 'Blizzard of Souls',
    popularity: 5.81,
    vote_average: 7.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/z3lVSySBEW17JK4k5RZJ5mALHM5.jpg',
    genre_ids: [10752, 18, 36],
    overview:
      'The love story of sixteen-year-old Arturs is interrupted by the First World War. After losing his mother and his home, he finds some consolation in joining the army, because this is the first time national battalions are allowed in the Russian Empire. But war is nothing like Arturs imagined – no glory, no fairness. It is brutal and painful. Arturs is now completely alone as war takes the lives of his father and brother. Also, no progress is made in the promised quick resolution of the war and timely return home. Within the notion that only he alone cares about returning home and that his homeland is just a playground for other nations, Arturs finds strength for the final battle and eventually returns home to start everything from scratch, just like his newly born country.',
    release_date: '2019-11-11'
  },
  {
    id: 827976,
    title: 'Burning Lies',
    popularity: 4.447,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/eyXXl07trsF0ajlXyeShC3cQkgX.jpg',
    genre_ids: [53],
    overview:
      'A woman falls for a handsome firefighter after he rescues her from a suspicious car crash. But her life spins into tragedy after his seemingly overprotective behavior burns through her life.',
    release_date: '2021-05-09'
  },
  {
    id: 825843,
    title: 'Only People',
    popularity: 3.301,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kEpLcXJIteIuB0NCklr55XeG2x.jpg',
    genre_ids: [18],
    overview:
      "Two friends who've had feelings for one another for years decide to set aside their current relationships for a weekend to meet and explore what could've been.",
    release_date: '2021-05-04'
  },
  {
    id: 782150,
    title: 'Workhorse Queen',
    popularity: 2.711,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ki5lqiv2r3KNSyAHGLhgzyFeN16.jpg',
    genre_ids: [99],
    overview:
      'After an unlikely casting onto a reality television show, 47-year old suburban telemarketer Ed Popil leaves his job to pursue a full-time entertainment industry career as his drag queen alter ego, 1960’s era housewife Mrs. Kasha Davis.',
    release_date: '2021-05-08'
  },
  {
    id: 824394,
    title: 'An seiner Seite',
    popularity: 3.014,
    vote_average: 7.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ijSecVKul6GYSHyxuBpdeY0nTZi.jpg',
    genre_ids: [18],
    overview: '',
    release_date: '2021-04-30'
  },
  {
    id: 827852,
    title: "J'écoute l'univers",
    popularity: 3.51,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iyUdMmpiFknZCIjbFGAmAfQSXeL.jpg',
    genre_ids: [],
    overview:
      '"Her hallucinations, she emphasized, were unlike anything she had ever experienced before. They tended to be fragmentary--a few bars of this, a few bars of that--and to switch at random, sometimes even in mid-bar, as if broken records were being turned on and off in her brain." (Oliver Sacks, Musicophilia)',
    release_date: '2021-05-10'
  },
  {
    id: 575293,
    title: 'Under the Stars of Paris',
    popularity: 3.08,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hhQ63VCnIpnYtuIRpeVEydxiLVR.jpg',
    genre_ids: [18, 35],
    overview:
      'Christine’s life has not been easy lately. Her lonely routine is divided between free food banks distributions and wandering the streets. On a cold winter night she founds Suli, an 8-year-old Eritrean boy, sobbing in front of her shelter. Christine understands that he is lost and has been separated from his mother. Bounded by their marginal condition, they embark together on an emotional journey to find Suli’s mother in the underground world of Paris...',
    release_date: '2021-04-08'
  },
  {
    id: 618214,
    title: 'The Perfect Candidate',
    popularity: 4.241,
    vote_average: 6.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wxHGzOY7SiEnVt5kp5Hjj5ImpK6.jpg',
    genre_ids: [18],
    overview:
      "A determined young Saudi doctor's surprise run for office in the local city elections sweeps up her family and community as they struggle to accept their town's first female candidate.",
    release_date: '2020-03-06'
  },
  {
    id: 795729,
    title: 'Nizhal',
    popularity: 3.688,
    vote_average: 5.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vJPBuR4BufcNXZ2pDrj99QpPLmc.jpg',
    genre_ids: [9648, 53],
    overview:
      'A First class judicial Magistrate comes across an 8 year old boy-Nithin & his murder stories. Do they have real life connection?',
    release_date: '2021-04-09'
  },
  {
    id: 600950,
    title: 'Hijra in Between',
    popularity: 3.234,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kLsm9xzgMF83Q1N8ue4SvD9duX2.jpg',
    genre_ids: [10749, 18, 10770],
    overview:
      'After facing an irresistible change, what is she? Still him?  Two women with different personalities have unexpectedly become the best sisters - He Xizhen, Liu Wanting, who like the above students at the same time, but in fact Wen Haosheng has long noticed Liu Wanting, in the hope of his friend, Yu Ting When the twins entered the relationship, the three also formed an intimate triangular relationship until an accident caused Wan Ting to discover that she had a double sexuality, and at this moment she must choose to live as one of the genders.  Wan Ting unexpectedly refused to let the twins and Xi Zhen get caught off guard. After many years, Xi Zhen and the twins appeared a pure-looking boy, Liu Ting.',
    release_date: '2021-03-31'
  },
  {
    id: 828972,
    title: 'Mata Grossa',
    popularity: 3.92,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uPsvmFbEUYzChhmRnHmjZYn1xIS.jpg',
    genre_ids: [],
    overview:
      'Thirteen women and their stories violate the historically established logic of a place where men have always been protagonists, proving the invaluable contribution of women to the construction of the State.',
    release_date: '2021-05-11'
  },
  {
    id: 828869,
    title: 'Bigli',
    popularity: 5.194,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/inCc1M9HoTso1tHEoJg0oJc4WmM.jpg',
    genre_ids: [18],
    overview: '',
    release_date: '2021-05-13'
  },
  {
    id: 828868,
    title: '스쿨 오브 락(樂)',
    popularity: 5.379,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3R6pcoie87gEiZlCInqKdvQXTId.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-05-13'
  },
  {
    id: 828714,
    title: "The Story of Mother's Day",
    popularity: 3.439,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ibBykkyGRBopRt88sFzHFT2CKG6.jpg',
    genre_ids: [10751],
    overview:
      "Struggling to find the correct script, music and choreography, the students find inspiration when they discover the origin and the true meaning behind Mother's Day.",
    release_date: '2021-05-07'
  },
  {
    id: 828707,
    title: 'Noda Ranjang Membekas',
    popularity: 4.53,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6GHxnXofdPYJrqHZJYYjMQ6h14e.jpg',
    genre_ids: [18, 53],
    overview:
      'Awakening from a coma, Bobby falls in love with Inggrid, a nurse whose age is far apart from him. Disasters arise as they drift deeper and deeper into love. They were caught in a cunning scheme.',
    release_date: '2021-05-12'
  },
  {
    id: 78854,
    title: 'Scialla! (Stai sereno)',
    popularity: 4.33,
    vote_average: 6.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/stb0lsrQZsecMrr2aChyMJ8HFyZ.jpg',
    genre_ids: [35],
    overview:
      'The life of a melancholy professor is turned upside down when he discovers that a rebellious teenager he is tutoring is actually his son.',
    release_date: '2011-11-18'
  },
  {
    id: 586537,
    title: 'Wings 2',
    popularity: 5.324,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sJC6RNP8Fk6zRKr618jXx1mAKjO.jpg',
    genre_ids: [12, 35, 16, 10751],
    overview:
      'Modern electric trains replaced the old diesel equipment, and Vityaz was sent to the reserve. But when the city is attacked by aliens who are hunting for energy, the Knight again soars into the sky to save the earth. On new bends he is helped by good old friends and the liner Lightning, with which he again falls in love as a boy.',
    release_date: '2021-04-15'
  },
  {
    id: 822390,
    title: 'In The Process of Life',
    popularity: 3.223,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3oZZcqhq272Bq34fRBN0LAWLm5r.jpg',
    genre_ids: [14],
    overview:
      'A free adaptation of the Greek myth of the Moiras, specifically Cloto, which weaves the thread of life. Frightened every day and every night, a cloud hovers over each movement. Innocence was lost in the face of a worthless collection of ancient hopes and desires. In the wake of reason, a voice calls.',
    release_date: '2021-05-10'
  },
  {
    id: 802068,
    title: 'Wild Dog',
    popularity: 5.285,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8377XckHbfJDMrkSpEa9ZQJlVE0.jpg',
    genre_ids: [28, 53],
    overview:
      'Wild Dog aka Vijay Varma is an NIA agent who’s brought back to field from a desk job to handle a terrorism case. Despite having a personal motive, he moves heaven and earth to ensure justice is served for the sake of the country.',
    release_date: '2021-04-02'
  },
  {
    id: 828116,
    title: 'Family Vacation',
    popularity: 3.472,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vHjrlHylKXMuVuvSt7kZwPQx1fP.jpg',
    genre_ids: [18],
    overview:
      "Milena and Marko are visiting Marko's father on a remote mountain. Both Marko and Milena have their own agendas for the vacation: Marko wants to convince father that he should sell the mountain house, while Milena wants to advance their relationship. The couple plays nice in front of the father, and Milena soon realizes Marko isn't the man she fell in love with.",
    release_date: '2021-05-10'
  },
  {
    id: 623184,
    title: 'No Hard Feelings',
    popularity: 4.231,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/t0EYA4KHJKr9ed4n8gMZeSdajbT.jpg',
    genre_ids: [18, 10749],
    overview:
      'Parvis, the son of exiled Iranians, copes with life in his small hometown by indulging himself with pop culture, Grindr dates, and raves. After being caught shoplifting, he is sentenced to community service at a refugee shelter where he meets siblings Banafshe and Amon, who have fled Iran. As a romantic attraction between Parvis and Amon grows, the fragile relationship between the three is put to a test.',
    release_date: '2020-09-24'
  },
  {
    id: 697064,
    title: 'Beckman',
    popularity: 2.628,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/z0r3YjyJSLqf6Hz0rbBAnEhNXQ7.jpg',
    genre_ids: [28],
    overview:
      'A contract killer, becomes the reverend of a LA church, until a cult leader and his minions kidnap his daughter. Blinded by vengeance, he cuts a bloody path across the city. The only thing that can stop him is his newfound faith.',
    release_date: '2021-04-08'
  },
  {
    id: 827790,
    title: 'Memories Of A Murder',
    popularity: 3.628,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/o8i9UK7F4rddSejroaAO8d9c1En.jpg',
    genre_ids: [18, 53],
    overview:
      'A young woman named Gail who runs a murderabilia store is stalked by a killer who is anonymous. He leaves trophies from murders that have been unsolved at her doorstep. As she digs deeper, the stakes get higher',
    release_date: '2021-05-08'
  },
  {
    id: 628479,
    title: 'The Human Factor',
    popularity: 3.42,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xGcDmtshlGWyBwMjy331GSMIfsA.jpg',
    genre_ids: [99],
    overview:
      "With unprecedented access to the foremost American negotiators, this documentary is the behind-the-scenes story from the last 25 years, of how the United States came within reach of pulling off the impossible - securing peace between Israel and its neighbors. Today, the need to learn from past mistakes couldn't be more urgent.",
    release_date: '2021-05-07'
  },
  {
    id: 826888,
    title: 'Mommy Issues',
    popularity: 2.917,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/p5D4jtAZ4kQUM74wmPC5mCC4s9C.jpg',
    genre_ids: [35],
    overview:
      '“Mommy Issues” revolves around Ella (Pokwang), a hardworking single mother who has devoted her life for her only daughter Katya (Sue). Her zealousness to protect her daughter leads to conflict but thanks to grandmother Fenny (Gloria Diaz), they blow over because of the quirky and fun ways she helps bridge the gap between her loved ones.',
    release_date: '2021-05-07'
  },
  {
    id: 821992,
    title: 'Miss Mom',
    popularity: 4.219,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uidDS3NJTQmCxCZeL5z9Vh56fc4.jpg',
    genre_ids: [10749, 35],
    overview: '',
    release_date: '2021-05-01'
  },
  {
    id: 828617,
    title: 'Ella y la oscuridad',
    popularity: 3.206,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bwOoAydkWMKOVWjme0a6F1dWEnh.jpg',
    genre_ids: [14],
    overview: '',
    release_date: '2021-05-10'
  },
  {
    id: 824617,
    title: 'Mexican Moon',
    popularity: 2.52,
    vote_average: 9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3lqrL4zCe59OmiWGOUUQ1uvFGkq.jpg',
    genre_ids: [80, 18, 37],
    overview:
      'The drug cartels are putting a financial strangle hold on a small Texas town, forcing a Vietnam vet to lose his job at a local garage. He soon learns about one hundred thousand dollars buried by the cartel in a false grave.',
    release_date: '2021-04-20'
  },
  {
    id: 828395,
    title: 'Sirena',
    popularity: 2.848,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/i2tEPE64nxDiXbzWvwoNuhzWUwR.jpg',
    genre_ids: [18, 9648],
    overview: '',
    release_date: '2021-04-24'
  },
  {
    id: 530351,
    title: 'Bad Hair',
    popularity: 2.368,
    vote_average: 5.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/979LvAwRGCkVFgJ04uyPcsPaPF2.jpg',
    genre_ids: [27],
    overview:
      'In 1989, an ambitious young woman gets a weave in order to succeed in the image-obsessed world of music television. However, her flourishing career may come at a great cost when she realizes that her new hair may have a mind of its own.',
    release_date: '2021-05-05'
  },
  {
    id: 695199,
    title: 'Hinomaru Soul ～The Heroes Behind the Scenes～',
    popularity: 2.391,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/neXBwndlfacANZ8Vj5XV0OGnl0o.jpg',
    genre_ids: [18],
    overview: 'The true story of the emotion hidden in the gold medal of the Nagano Olympics.',
    release_date: '2021-05-07'
  },
  {
    id: 659290,
    title: 'The Ties',
    popularity: 3.493,
    vote_average: 7.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aAWocIYyjy1xII7HO3tTqVhAwLz.jpg',
    genre_ids: [18],
    overview:
      'Naples, early 1980’s. Aldo and Vanda go through a separation, after he reveals his affair. Their two young children are torn between their parents, in a whirlwind of resentment. But the ties that keep people together are inescapable, even without love. Now, 30 years later, Aldo and Vanda are still married.',
    release_date: '2020-10-01'
  },
  {
    id: 678997,
    title: 'Killer Among Us',
    popularity: 2.687,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pyGB4nD6k1qKnvcuDeuwMbZwThY.jpg',
    genre_ids: [53],
    overview:
      'On the 4th of July, a serial killer has a moral crisis when he discovers that his latest victim is a high-school student; simultaneously, a rookie cop and a seasoned detective race against the clock to save her life.',
    release_date: '2021-04-16'
  },
  {
    id: 730506,
    title: 'Crock of Gold: A Few Rounds with Shane MacGowan',
    popularity: 2.756,
    vote_average: 9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qvA887EE1XGPcBE5gtRs4zNp15f.jpg',
    genre_ids: [99],
    overview:
      'A celebration of the Irish punk/poet Shane MacGowan, lead singer and songwriter of The Pogues, that combines unseen archive footage from the band and MacGowan’s family with original animations.',
    release_date: '2020-12-04'
  },
  {
    id: 674505,
    title: 'The Pedal Movie',
    popularity: 2.616,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2ykbFE2YRhuZUs8RxS7qGzQ2nrE.jpg',
    genre_ids: [99, 10402],
    overview:
      "For the first time ever, the story of guitar pedals and effects will be told by the people who make them and the artists that use them. Coming in 2021, The Pedal Movie, Reverb's first-ever feature-length film, will dive into the culture of pedals and tell the story of how a small industry grew from a handful of companies into the galaxy of different makers building pedals today.",
    release_date: '2021-04-30'
  },
  {
    id: 568994,
    title: 'Driveways',
    popularity: 2.06,
    vote_average: 7.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/29UQOiKJGpt4rYldmSPbydZakXm.jpg',
    genre_ids: [18],
    overview:
      "Eight-year-old Cody is spending the summer in an unfamiliar setting with his mom Kathy. Though he can't relate to the neighbourhood kids, things take an unexpected turn when he develops an unusual friendship with grouchy old Del from next door.",
    release_date: '2020-12-17'
  },
  {
    id: 613348,
    title: 'The Vets',
    popularity: 3.099,
    vote_average: 6.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/w7bS4nnqZArSgkFU96uPIhxNP6v.jpg',
    genre_ids: [35, 18],
    overview:
      'In the heart of Morvan, Nico, the last vet in the area, struggles to save his patients, his clinic, and his family. When Michel, his partner and mentor, announces his retirement, Nico knows that the hard part is yet to come. "Don\'t worry, I\'ve found the next generation" Except that ... The next generation is Alexandra, a 24-hour graduate, brilliant, misanthropic, and not at all willing to return to bury herself in the village of her childhood. Will Nico manage to make her stay?',
    release_date: '2020-01-01'
  },
  {
    id: 741636,
    title: 'Bloodthirsty',
    popularity: 3.407,
    vote_average: 4.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5bGQYPGE4Ndb98XDRUJW25h0LFC.jpg',
    genre_ids: [27],
    overview:
      'When indie singer Grey struggles to write her sophomore album, she teams up with a mysterious producer at his secluded cabin. Though their bond strengthens her music, it also starts to irreparably alter Grey’s body and mind.',
    release_date: '2021-04-23'
  },
  {
    id: 476044,
    title: 'Street Gang: How We Got to Sesame Street',
    popularity: 3.563,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qeuFHbuHof2RWb7QzfM4XNR66BF.jpg',
    genre_ids: [99, 10751],
    overview:
      "Take a stroll down Sesame Street and witness the birth of the most influential children's show in television history. From the iconic furry characters to the classic songs you know by heart, learn how a gang of visionary creators changed the world.",
    release_date: '2021-04-23'
  },
  {
    id: 475908,
    title: 'Carmilla',
    popularity: 2.252,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jeVujtPRWHSusWGcNJ68BZYKIB1.jpg',
    genre_ids: [10749, 14, 18],
    overview:
      'Isolated from the outside world, fifteen-year-old Lara lives in seclusion on a vast country estate with her father and strict governess Miss Fontaine. Late one evening, a mysterious carriage crash brings a young girl into their home to recuperate. Lara immediately becomes enchanted by this strange visitor who arouses her curiosity and awakens her burgeoning desires.',
    release_date: '2020-07-17'
  },
  {
    id: 598389,
    title: 'The Eleventh Chapter',
    popularity: 4.588,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wkjkCeiT0sftvKRKH02oIMBPzak.jpg',
    genre_ids: [18],
    overview:
      'A man must attempt to clear his name after a theatre puts on a play that accuses him of committing a 30-year-old murder.',
    release_date: '2021-04-02'
  },
  {
    id: 652837,
    title: 'Josee, the Tiger and the Fish',
    popularity: 3.621,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/o4AEdJfu5XLuqQc9DjAIJLZxmjh.jpg',
    genre_ids: [16, 18, 10749],
    overview:
      'A youth romantic drama with themes of growing up, the story focuses on college student Tsuneo and dreamer Josee, who lives her life stuck in a wheelchair. Josee—named after the heroine in Françoise Sagan’s Wonderful Clouds—spends most of her days reading and painting until by chance she encounters Tsuneo, and decides it’s time to face the real world.',
    release_date: '2020-12-25'
  },
  {
    id: 619594,
    title: 'My Salinger Year',
    popularity: 4.231,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dC4IBKaCLFwnQlGmsYT8mr0Sp4n.jpg',
    genre_ids: [18],
    overview:
      'A college grad takes a clerical job working for the literary agent of the renowned, reclusive writer J.D. Salinger.',
    release_date: '2021-01-14'
  },
  {
    id: 653710,
    title: 'Beast Beast',
    popularity: 3.872,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xVtQhvCoWm31YlV2X29oipFYfgi.jpg',
    genre_ids: [18],
    overview: 'A look at the lives and trauma surrounding three people living in a southern town.',
    release_date: '2021-04-16'
  },
  {
    id: 468735,
    title: "Madeline's Madeline",
    popularity: 2.936,
    vote_average: 6.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8PcvYO5SHmPUFzdXpI2kzj3JtXN.jpg',
    genre_ids: [18],
    overview:
      "Madeline has become an integral part of a prestigious physical theater troupe. When the workshop's ambitious director pushes the teenager to weave her rich interior world and troubled history with her mother into their collective art, the lines between performance and reality begin to blur. The resulting battle between imagination and appropriation rips out of the rehearsal space and through all three women's lives.",
    release_date: '2018-08-10'
  },
  {
    id: 721686,
    title:
      "Cells at Work!! The Return of the Strongest Enemy. A Huge Uproar Inside the Body's Bowels!",
    popularity: 2.09,
    vote_average: 1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uz9IZsyiklsRTI1z7EufroTFdVE.jpg',
    genre_ids: [16, 28, 35],
    overview: 'The theatrical episode will cover events from the fifth volume of the manga.',
    release_date: '2020-09-05'
  },
  {
    id: 553837,
    title: 'Code Geass: Lelouch of the Re;Surrection',
    popularity: 3.487,
    vote_average: 7.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ghD2HJyAk6EYVHrzBhddNDJ73Go.jpg',
    genre_ids: [16, 878, 80, 9648, 10752],
    overview:
      'It is the second year of the Kowa Period. The world has unified around the reorganize United Federation of Nations, and has enjoyed days of continuing peace, but now, that peace suddenly comes to an end. Suzaku, while travelling as the masked man "Zero" accompanying Nunnally on her visit to the refugee camp, is defeated by a mysterious Knightmare Frame, and the two of them are taken away. Following secret orders from Schneizel, Kallen, Lloyd and Sayoko infiltrate Zilkistan, the Land of Warriors, where they are attacked by a mysterious Geass user. There in Zilkhstan is a person named C.C., known to the assailants as the "former master". In the indomitable kingdom which once conquered even the great army of the Holy Britannian Empire, what do the people desire? Hope, or despair? The people of Zilkhstan Palace certainly know of Geass. What are they, and C.C., planning?',
    release_date: '2019-02-09'
  },
  {
    id: 805195,
    title: 'The Girl Who Believes in Miracles',
    popularity: 2.979,
    vote_average: 9.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oFSr5josSDeOq3vl6NP8e5pghhQ.jpg',
    genre_ids: [10751, 18],
    overview:
      'When Sara hears a preacher say faith can move mountains, she starts praying. Suddenly people in her town are mysteriously healed! But fame soon takes its toll – can Sara’s family save her before it’s too late?',
    release_date: '2021-04-02'
  },
  {
    id: 827552,
    title: 'Canelo Alvarez vs. Billy Joe Saunders',
    popularity: 2.8,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/83PzinEPIycZ6glXVZboXMIWj3B.jpg',
    genre_ids: [],
    overview: 'Canelo Alvarez vs. Billy Joe Saunders',
    release_date: '2021-05-08'
  },
  {
    id: 600348,
    title: 'Volition',
    popularity: 2.812,
    vote_average: 5.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cttGxFQt5nRROFZYC3nJbs3dPE1.jpg',
    genre_ids: [878, 53],
    overview:
      'A man afflicted with clairvoyance tries to change his fate when a series of events leads to a vision of his own imminent murder.',
    release_date: '2019-03-15'
  },
  {
    id: 760546,
    title: 'The Bike Thief',
    popularity: 4.113,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9mKMzo21Tw1in9uPwoAcIv8rMx2.jpg',
    genre_ids: [18, 53],
    overview:
      'To the Rider his moped is everything. As a pizza delivery driver it is his livelihood. As a breadline straddling, immigrant father it is his family’s anchor. It takes his wife to work. It gets his daughter to school. So when one night the moped is stolen, his world collapses.  He has to get back his bike – or replace it – in whatever way possible, before his next shifts starts. If he fails, he won’t just lose his job, he will lose it all. He tries to ask the few familiar faces for help in this unfamiliar, disorienting city. However, as he runs out of time and his options are wearing thin, his moral compass begins to crack and he grows more and more willing to forgo his conscience in order to save himself and his family.',
    release_date: '2021-05-02'
  },
  {
    id: 648412,
    title: 'Silo',
    popularity: 3.083,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aFrWBHdxUVdq7kEWHRUcb75OlY5.jpg',
    genre_ids: [],
    overview:
      'Disaster strikes in a small American farm town when teenager Cody Rose becomes the victim of a grain entrapment accident. As corn becomes quicksand inside of a 50-foot tall silo, the town locals must put aside their differences to save Cody from drowning in the crop they harvest.',
    release_date: '2021-05-07'
  },
  {
    id: 688343,
    title: 'The Curse of Audrey Earnshaw',
    popularity: 2.694,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kMVxPRyDuod7479mTykw4SPHMQN.jpg',
    genre_ids: [27, 18],
    overview:
      'A devout community suffering from a plague is torn apart by a beautiful young woman and the forces of witchcraft, black magic, and possession.',
    release_date: '2021-04-08'
  },
  {
    id: 554371,
    title: 'Limbo',
    popularity: 3.063,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6Mxg6UilmB50jRe4aJPcfs437Ud.jpg',
    genre_ids: [18],
    overview:
      'An offbeat observation of refugees waiting to be granted asylum on a fictional remote Scottish island. It focuses on Omar, a young Syrian musician who is burdened by the weight of his grandfather’s oud, which he has carried all the way from his homeland.',
    release_date: '2021-04-30'
  },
  {
    id: 581390,
    title: 'The Book of Fish',
    popularity: 4.166,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tTIULfN1xR0j7weyTD35kIy3RMQ.jpg',
    genre_ids: [36, 18],
    overview:
      'In 1801, after a new king ascended the throne, a scholar Jeong Yak-jeon who served the late king is exiled to Heuk-san Island. There he meets Chang-dae, a young fisherman who is a huge admirer of Confucianism and has a wide knowledge about the sea.',
    release_date: '2021-03-31'
  },
  {
    id: 664596,
    title: 'Funny Face',
    popularity: 3.872,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fD2ZAcCt4BEhKGpTxdBFoSRCn1Y.jpg',
    genre_ids: [18],
    overview:
      'In a Brooklyn threatened by disfigurement from greedy urban developers, two young people meet in a late-night bodega. Their unexpected bond takes on a romantic tone and brings solace to these two superheroes who are powerless in the face of oppression.',
    release_date: '2021-03-30'
  },
  {
    id: 653758,
    title: 'The Reason I Jump',
    popularity: 3.079,
    vote_average: 8.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hqvze6LNRPZLwaXkBWel5zjmHPb.jpg',
    genre_ids: [99],
    overview:
      'Filmmaker Jerry Rothwell examines the lives of five young people who live with autism spectrum disorder.',
    release_date: '2020-01-23'
  },
  {
    id: 717021,
    title: 'The Oak Room',
    popularity: 1.794,
    vote_average: 5.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aO2QfOSGYcxCudORrfT0D2k2i0p.jpg',
    genre_ids: [53, 27, 9648],
    overview:
      "During a raging snowstorm, a drifter returns home to the blue-collar bar located in the remote Canadian town where he was born. When he offers to settle an old debt with a grizzled bartender by telling him a story, the night's events quickly spin into a dark tale of mistaken identities, double-crosses and shocking violence.",
    release_date: '2020-11-27'
  },
  {
    id: 829023,
    title: 'Muñecas',
    popularity: 2.811,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mRgqwrLkBWVau6FXT06PVXWDNys.jpg',
    genre_ids: [27, 14],
    overview: '',
    release_date: '2021-05-07'
  },
  {
    id: 639557,
    title: 'Cliff Walkers',
    popularity: 2.883,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tdyfT4EIGpt2cWnwyNGP0gJdsPN.jpg',
    genre_ids: [18, 36, 53, 80],
    overview:
      'Set in the puppet state of Manchukuo in the 1930s, the film follows four Communist party special agents who return to China after receiving training in the Soviet Union. Together, they embark on a secret mission code-named "Utro". After being sold out by a traitor, the team find themselves surrounded by threats on all sides from the moment they parachute into the mission. Will the agents break the impasse and complete their mission? On the snowy grounds of Manchukuo, the team will be tested to their limit.',
    release_date: '2021-04-30'
  },
  {
    id: 825704,
    title: 'O Inocente Hotel',
    popularity: 3.056,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/m7duS5c9gY99KPO03N8pZAdQk5s.jpg',
    genre_ids: [80],
    overview: '',
    release_date: '2021-05-07'
  },
  {
    id: 719266,
    title: '23 Walks',
    popularity: 1.772,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aGo4K0eUVGg3H7VrCOZsuTMUHUd.jpg',
    genre_ids: [18, 10749],
    overview:
      'A gentle, sweet, funny, romantic story of love in later life. Following a couple in their sixties, Dave and Fern who get to know one another over the course of 23 dog walks. Set against the dramatic background of the changing seasons of one year.',
    release_date: '2020-07-30'
  },
  {
    id: 579647,
    title: 'One Breath',
    popularity: 1.77,
    vote_average: 7.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2oPeD9ZT28cibXrNV19ogTQwKRe.jpg',
    genre_ids: [18],
    overview:
      'Following her divorce, Marina thinks that she’ll never meet love again. Little does she know that one day, she’ll find the love of her life in freediving, one of the most extreme sports in existence, built on diving as deep as possible on a single breath. In the vast, mysterious realm of the sea, Marina not only regains her sense of peace and well being, but also redefines her existence.',
    release_date: '2020-03-05'
  },
  {
    id: 653708,
    title: 'Herself',
    popularity: 2.33,
    vote_average: 7.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qTCdyHTibEl90w6rDxTTHTX9k3O.jpg',
    genre_ids: [18],
    overview:
      'Struggling to provide her daughters with a safe, happy home, Sandra decides to build one - from scratch. Using all her ingenuity to make her ambitious dream a reality, Sandra draws together a community to lend a helping hand to build her house and ultimately recover her own sense of self.',
    release_date: '2020-11-26'
  },
  {
    id: 680779,
    title: 'Naughty Grandma 3',
    popularity: 4.066,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/e3WbLp1CnkA8W3152C5XRGtzr3D.jpg',
    genre_ids: [35],
    overview:
      "1980, the whole country follows the events of the Moscow Olympics. Vova Rubinstein alone, on the sly, disguises himself as Soviet pop stars and tries to get rich by arranging fake concerts. At one of these concerts, he is exposed by the KGB and recruited as an undercover agent. Now, in order not to go to jail, Vova must fulfill a responsible mission - to find a deadly chemical developed in a secret laboratory on the black market. Vova will have to plunge headlong into the abyss of the spy passions of Moscow in the 80s: to find a chemical, to prevent the undermining of the Olympic Bear, to experience Brezhnev's passionate kiss, and to meet the love of his life ... And all this is in the image of the currency prostitute Louise Karpovna Rubinstein.",
    release_date: '2021-05-06'
  },
  {
    id: 56616,
    title: 'Goodbye, Dragon Inn',
    popularity: 2.894,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/js1uTY2FuKspVRQWLudFkEteFI5.jpg',
    genre_ids: [35, 18],
    overview:
      'On a dark, rainy night, a historic and regal Taipei cinema sees its final film: 1967 martial arts feature "Dragon Inn". As the film plays, the lives of the theater\'s various employees and patrons intersect, and two ghostly actors arrive to mourn the passing of an era.',
    release_date: '2003-12-12'
  },
  {
    id: 827878,
    title: "Purkyně's Dusk",
    popularity: 2.502,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aJdBq51jPlWlmGCj0gSUHMzAB3e.jpg',
    genre_ids: [],
    overview:
      'Purkyně’s Dusk is an experimental short film based on the studies of light and colour carried out by the Czech physiologist Jan Evangelista Purkyně. The visual effect he described in 1825 determines that our perception of colour is dependant on the degree of illumination. Both the identifiable tints and the contrast between colours are perceived differently in bright or low light conditions.',
    release_date: '2021-05-08'
  },
  {
    id: 665779,
    title: 'A Common Crime',
    popularity: 2.938,
    vote_average: 4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6trGbQiFqIrACfaRdMAYuFx8mPj.jpg',
    genre_ids: [53, 27],
    overview:
      'Cecilia is too afraid one night to let her housekeeper’s son into the house. The next day his dead body is found.',
    release_date: '2021-04-08'
  },
  {
    id: 827017,
    title: 'Los subterráneos',
    popularity: 2.292,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [18, 35],
    overview: '',
    release_date: '2021-05-07'
  },
  {
    id: 827522,
    title: 'Water Clock',
    popularity: 2.123,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'No Synopsis',
    release_date: '2021-05-06'
  },
  {
    id: 292381,
    title: 'The Clockwork Girl',
    popularity: 2.517,
    vote_average: 7.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jBY5jia6kDm2IFN6H3bqqvoegF2.jpg',
    genre_ids: [10751, 16, 14, 12, 878],
    overview:
      'A nameless robot girl has recently been given the gift of life from her creator, while exploring the wonders of an ordinary world she meets an amazing mutant boy and they share a friendship that must overcome their warring families.',
    release_date: '2021-04-21'
  },
  {
    id: 827890,
    title: 'Fictions',
    popularity: 2.497,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gsSayCl9TtPg0g3Vi5p7bnkwqHm.jpg',
    genre_ids: [],
    overview:
      'Ficciones is a spell that conjures representations as if imagined from the perspective of the plant world, that which invents prior to consciousness, as a thinking before thinking (M. Marder). Ceramic sculptures were gardened for a year letting plant life grow on them as their skin. Four super-8 cameras were made into a mobile, thereby also filming the process and its shared motion. To embrace the filmed material as a fictional construction, it was optically printed and altered; to accompany the notion of the sculptures as possible chests, containers of heart, vocal sounds were recorded with Camila de Laborde and weaved into the film.',
    release_date: '2021-05-08'
  },
  {
    id: 814772,
    title: 'All U Need Is Love',
    popularity: 1.7,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ckIb0gkghyLoyo7UoqjGh8mmZxv.jpg',
    genre_ids: [],
    overview:
      'Initiated by the Hong Kong Performing Artists Association and the Hong Kong Film Workers Association, ten film companies in Hong Kong (China Star, Anle Film, Emperor Films, Oriental Films, Media Asia Films, Meiya Films, World Films, Shaw Brothers, Sun Entertainment Culture , Huanyu Film) and the Hong Kong Film Development Council’s "Film Production Financing Project". It tells about a quiet afternoon when the Gurney Hotel suddenly detected a suspected case. The epidemic prevention center ordered a total blockade. All guests staying in the hotel must accept Mandatory quarantine for 14 days. Everyone is isolated in the hotel, and the relationship between people is getting closer unconsciously. Everyone has lived through difficult times together, and learned to cherish what may be the last time to get along with each other.',
    release_date: '2021-04-22'
  },
  {
    id: 828206,
    title: "Good Grief It's Friday",
    popularity: 3.038,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5cZAJT6PLgwHOP7CGCvHG2bBW0a.jpg',
    genre_ids: [18, 80],
    overview:
      "A former Bay City cop tries to keep his failing P. I. business alive, and his loyal assistant employed, by finding and returning a piece of very expensive jewelry for a fabulously wealthy and beautiful client. She's the first client he's had in a long time but Philip discovers that there is far more to her story than she told him. Most puzzling of all, the police don't want him to follow this case or the suspicious circumstances surrounding the death of his late wife. The deeper he goes into this case, the clearer it becomes that everyone with whom he comes in contact has a secret.",
    release_date: '2021-05-07'
  },
  {
    id: 666959,
    title: 'Are We Lost Forever',
    popularity: 2.822,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fy8iufEgmxWPZfSVgGcofW3XIVE.jpg',
    genre_ids: [18],
    overview:
      'One morning it is over. For Hampus it is a relief to break up from their destructive relationship, while Adrian is devastated. Will he be able to survive without the love of his life, or is there a way of somehow getting him back?',
    release_date: '2020-01-25'
  },
  {
    id: 810545,
    title: 'A Once and Future Peace',
    popularity: 2.492,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1f3LvBFxlub7txR11v6mBCx4WvW.jpg',
    genre_ids: [99],
    overview:
      'A hybrid animated / live-action documentary that explores the past, present and future of Peacemaking Circles, and how this ancient restorative justice practice has been reimagined to keep youth out of prison. The film tracks the parallel stories of a troubled teen facing serious jail time, and the former Cambodian gang leader serving as his mentor.',
    release_date: '2021-05-08'
  },
  {
    id: 640815,
    title: 'Las Rojas',
    popularity: 2.826,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fPBqQV5rQIzXR0czSwfy6Tk5S9O.jpg',
    genre_ids: [18, 53],
    overview:
      'In a remote camp in the Carlota mountains, a renowned paleontologist, guards the most important finding of her scientific career: the fossil remains of a hippogriff, a mythical animal half bird half lion of which there is no certainty of its existence. The arrival of Constanza, a biologist sent to supervise the works of Carlota, and Freddy, an old rival with dark intentions, force Carlota to face a powerful enemy that threatens to destroy the territory and its natural resources.',
    release_date: '2021-04-01'
  },
  {
    id: 507712,
    title: 'The Devil Has a Name',
    popularity: 2.293,
    vote_average: 6.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1qfJI2RTMPsCn75ngWQMVrUcWZm.jpg',
    genre_ids: [18, 53],
    overview:
      'An oil baron and a farmer standoff after the water on his farm is poisoned by her company.',
    release_date: '2021-04-29'
  },
  {
    id: 829448,
    title: "Chance the Rapper's Magnificent Coloring World",
    popularity: 2.744,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/e3Pd6YjCsymOeNVvI78kjOa9siV.jpg',
    genre_ids: [10402],
    overview:
      "A concert film of the eponymous tour used to support Chance the Rapper's third mixtape, Coloring Book.",
    release_date: '2021-05-14'
  },
  {
    id: 829411,
    title: 'Deixe Chover',
    popularity: 3.842,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cz9CZEGppJF1djWD6kdlHpZU7St.jpg',
    genre_ids: [18],
    overview: '',
    release_date: '2021-05-12'
  },
  {
    id: 829308,
    title: 'When Today Ends',
    popularity: 3.842,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/30feAWmgfTDaAhdwYYbrRiSjpym.jpg',
    genre_ids: [],
    overview:
      'Four teenagers post their personal stories online using the hashtag, #WhenTodayEnds. With no filter and complete abandon, Jenna, Nick, Megan and James all share their deepest, darkest secrets only to fall eerily down the same path.',
    release_date: '2021-05-14'
  },
  {
    id: 824676,
    title: 'Police Academy Collection Part One',
    popularity: 2.624,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ygMrVv236md8dLoIkdN9rjsZyD1.jpg',
    genre_ids: [35, 28, 10751],
    overview:
      'Police Academy is a series of American comedy films, the first six of which were made in the 1980s. The seventh and to date last installment, Mission to Moscow, was released in 1994. The new film is scheduled for production for 2014. The series opened with Police Academy (1984) which started with the premise that a new mayor had announced a policy requiring the police department to accept all willing recruits. The movie followed a group of misfit recruits in their attempts to prove themselves capable of being police officers. The main character, Carey Mahoney (Steve Guttenberg), was a repeat offender who was forced to join the police academy as punishment.',
    release_date: '2021-05-04'
  },
  {
    id: 679886,
    title: 'Crónica de una tormenta',
    popularity: 2.007,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/QG68qhhh2vOIgJ4o46z18UgyV6.jpg',
    genre_ids: [18],
    overview: '',
    release_date: '2021-04-30'
  },
  {
    id: 607528,
    title: 'Daniel',
    popularity: 3.802,
    vote_average: 7.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aEVjCgxq4RLPsK39xQI9LCtMHI0.jpg',
    genre_ids: [18],
    overview:
      'The story of Danish photographer Daniel Rye, who was captured by ISIS in Syria in 2013 and held hostage for 398 days.',
    release_date: '2019-08-29'
  },
  {
    id: 763240,
    title: 'Sugar Daddy',
    popularity: 2.428,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xM8Cbn3MvpCVUszeZhNnrtirLpa.jpg',
    genre_ids: [18],
    overview:
      "When a struggling musician can't afford her rent, she signs up for a website where rich older men pay to date younger women. Her new money-making venture sends her down a dark rabbit hole that forces her to grow up fast, shaping her music, and how she sees the world.",
    release_date: '2021-04-09'
  },
  {
    id: 734622,
    title: 'Hello Again - A Wedding A Day',
    popularity: 2.691,
    vote_average: 4.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aWX3inf2hAAUj9KDi1KlZF17Agb.jpg',
    genre_ids: [35, 10749, 14],
    overview:
      "Zazie lives with her buddies, womanizer Patrick and sweetheart Anton, in a flat share. All three are completely incapable of being in a relationship. Finding the great love? No need. Zazie is sure of that. When Philipp, Zazie's best friend from childhood, sends an invitation to his wedding, Zazie is shocked to find out that he wants to marry stuck up and vicious Franziska. She is definitely the wrong girl for Philipp! Zazie decides to do everything she can to save him from making the biggest mistake of his life. But will this turn out to be her own path to happiness?",
    release_date: '2020-09-17'
  },
  {
    id: 806067,
    title: 'Mandela',
    popularity: 3.773,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/df2wqcuyW4Gn9AwIqO8RnW1iRyt.jpg',
    genre_ids: [35, 18],
    overview:
      "An underprivileged hairdresser becomes the game changer in a local body election in a village where caste politics rules the roost. Will he be able to bring some changes to people's lives?",
    release_date: '2021-04-05'
  },
  {
    id: 708808,
    title: 'Witness Infection',
    popularity: 2.912,
    vote_average: 5.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zXN3bsLTcFhKazWuFGzSF3Ln8NI.jpg',
    genre_ids: [27, 35],
    overview:
      'Two rival mob families are transferred from the Witness Protection Agency by mistake to same city, Temecula, CA, and find themselves fending off a zombie outbreak.',
    release_date: '2021-03-30'
  },
  {
    id: 826118,
    title: 'É Sua Vez',
    popularity: 1.981,
    vote_average: 9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xhIZ0gIWIUL6pzrojOzi1orZMLu.jpg',
    genre_ids: [27],
    overview: '',
    release_date: '2021-05-05'
  },
  {
    id: 746781,
    title: 'The Night',
    popularity: 2.054,
    vote_average: 5.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vHoeIopknC6fCUTJfagDGwr6qmf.jpg',
    genre_ids: [27, 53, 18, 9648],
    overview:
      'An Iranian couple living in the US become trapped inside a hotel when insidious events force them to face the secrets that have come between them, in a night that never ends.',
    release_date: '2021-04-29'
  },
  {
    id: 658032,
    title: 'Chasing',
    popularity: 3.498,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7lVh2KVKkPtjJC2NoNOvgLT7SQK.jpg',
    genre_ids: [80, 28],
    overview: 'A cop from Chennai sets out to nab a dreaded drug racket based out of Malaysia.',
    release_date: '2021-04-16'
  },
  {
    id: 656159,
    title: 'Endless Rain',
    popularity: 1.877,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5sNRwx5rn8w98oScy9E6sCKIx3I.jpg',
    genre_ids: [10749, 18],
    overview:
      "Young-ho doesn't have any dreams for his life. He has been studying for three years to enter a university. He decides to send a letter to his childhood friend So-yeon. But her younger sister So-hee receives the letter instead of her sick sister. So-hee writes back to Young-ho, pretending to be So-yeon. Meanwhile, So-hee takes care of her sick sister and also runs a secondhand bookstore with her mother.",
    release_date: '2021-04-28'
  },
  {
    id: 827280,
    title: 'Corona Film Club',
    popularity: 2.197,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'Documentary about filmmaker and film lover Stig Björkman during the pandemic year of 2020 when he stay in touch with his friends over his laptop.',
    release_date: '2021-05-05'
  },
  {
    id: 606149,
    title: 'Captain Sabertooth and the Magical Diamond',
    popularity: 1.89,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/y9O7Gw0FyFB8gKv1sFDd8VW6u34.jpg',
    genre_ids: [16, 10751],
    overview:
      'Captain Sabertooth and his crew are up against a sunburnt vampire, a manipulating queen, a violent monkey army and two young pirates while on the hunt for the magical diamond.',
    release_date: '2020-02-13'
  },
  {
    id: 624385,
    title: 'Ascendant',
    popularity: 1.899,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9jip5YuuUxL8Wv510lLITiSgR27.jpg',
    genre_ids: [9648, 878, 53],
    overview:
      'Kidnapped and held hostage in a high-speed elevator in a 120-floor building in Shanghai, Aria Wolf has no memory of her past, who her captors are, or what they want from her. Pushed to her limits, she realises she has incredible powers within, and that unlocking these powers is her only chance to escape.',
    release_date: '2021-04-08'
  },
  {
    id: 824680,
    title: 'Police Academy Collection Part Two',
    popularity: 1.836,
    vote_average: 4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oaZaZCmJwA6rabf6UTltCdG27FU.jpg',
    genre_ids: [28, 35, 10751],
    overview:
      'Police Academy is a series of American comedy films, the first six of which were made in the 1980s. The seventh and to date last installment, Mission to Moscow, was released in 1994. The new film is scheduled for production for 2014. The series opened with Police Academy (1984) which started with the premise that a new mayor had announced a policy requiring the police department to accept all willing recruits. The movie followed a group of misfit recruits in their attempts to prove themselves capable of being police officers. The main character, Carey Mahoney (Steve Guttenberg), was a repeat offender who was forced to join the police academy as punishment.',
    release_date: '2021-05-01'
  },
  {
    id: 741148,
    title: 'A Long Way to School',
    popularity: 2.693,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cife13a1Z1BSJgwPpPBrFVT3UPF.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-05-05'
  },
  {
    id: 678491,
    title: "No Man's Land",
    popularity: 2.569,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7PloiGUSH2OUWrk6ctchGhMOL3s.jpg',
    genre_ids: [37, 28, 12, 53],
    overview:
      'Late one night, Bill Greer and his son Jackson patrol their ranch when Jackson accidentally kills an immigrant Mexican boy. When Bill tries to take the blame for his son, Jackson flees south on horseback, becoming a gringo "illegal alien" in Mexico. Chased by Texas Rangers and Mexican federales, Jackson journeys across Mexico to seek forgiveness from the dead boy\'s father only to fall in love with the land he was taught to hate.',
    release_date: '2021-01-22'
  },
  {
    id: 823279,
    title: '베르테르',
    popularity: 1.94,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/eLhXNkv5LTuFlGTP0Fgy3MmA1zV.jpg',
    genre_ids: [10402],
    overview: '',
    release_date: '2021-05-05'
  },
  {
    id: 616558,
    title: 'The Spy',
    popularity: 2.677,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uAYpUabiKvECmQINVys1ZQ6STKQ.jpg',
    genre_ids: [53, 18, 36],
    overview:
      "Sonja Wigert, Scandinavia's most acclaimed female movie star, enlists as a spy for Swedish intelligence but ends up becoming entangled with the German Reichskommissar Terboven.",
    release_date: '2019-10-18'
  },
  {
    id: 824157,
    title: 'Emily @ the Edge of Chaos',
    popularity: 2.499,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9jq9ByNjkbGYEzzy49rktfcjXUW.jpg',
    genre_ids: [99],
    overview:
      'Emily @ the Edge of Chaos interweaves Emily Levine’s live performance with animation, appearances by scientists, and animated characters. The film uses physics, which explains how the universe works, to explain our metaphysics – the story of our values, our institutions, our interactions. Using her own experience and a custom blend of insight and humor, provocation and inspiration, personal story and social commentary, Emily takes her audience through its own paradigm shift: from the Fear of Change to the Edge of Chaos.',
    release_date: '2021-05-07'
  },
  {
    id: 809395,
    title: 'Llegando',
    popularity: 2.248,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: '',
    release_date: '2021-05-07'
  },
  {
    id: 827144,
    title: 'The Corruption of Divine Providence',
    popularity: 2.748,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9JW09WzZUyD6Xy15pBWbumDhWST.jpg',
    genre_ids: [27, 18],
    overview:
      'When a teenage girl becomes a battleground for good and evil, only pure faith can broker peace.',
    release_date: '2021-05-07'
  },
  {
    id: 560008,
    title: 'Minamata',
    popularity: 2.577,
    vote_average: 8.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7FT5v8O5oFcK58FfAaGOHPGc2hz.jpg',
    genre_ids: [18],
    overview:
      'A movie about  reporter W. Eugene Smith and his research on mercury poisoning in Minamata, Japan, resulting in severe neurological symptoms.',
    release_date: '2020-03-13'
  },
  {
    id: 825652,
    title: 'Wrong Place Wrong Time',
    popularity: 2.317,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/alukWHakEoYWSbbd5Vz8vDOFYDR.jpg',
    genre_ids: [80],
    overview:
      "Having lost everything, David leaves memories of a London police cell behind him and heads for Marbella in Spain with it's promise of adventure and fun. Little does David know, he's about to be thrust into the most terrifying time of his life!",
    release_date: '2021-05-04'
  },
  {
    id: 666267,
    title: 'Kids Cup',
    popularity: 2.496,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xbgyMEn736DkB1FjWyK2qNfWOCP.jpg',
    genre_ids: [99],
    overview:
      'Kids Cup is a character driven coming-of-age family film from the world´s largest sports tournament for kids. We dive into a teenage universe and follow 13-14 year olds from different parts of the world, competing at the football tournament, Norway Cup, in Oslo.',
    release_date: '2021-05-07'
  },
  {
    id: 826625,
    title: 'Eternity',
    popularity: 2.826,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jXG78UdZvVc9yV5Utmg4IglNGZL.jpg',
    genre_ids: [18],
    overview:
      'A married couple, Thomas and Ariana Mitchell are struggling to get pregnant, and is suddenly faced with an even bigger obstacle. A life and death tale that examines God and our relationship with him through the best of times and the darkest times.',
    release_date: '2021-05-06'
  },
  {
    id: 823608,
    title: 'A Conversation',
    popularity: 2.243,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/za2h0lS8hA7PCcCJo5JEbDZVxkX.jpg',
    genre_ids: [18],
    overview:
      'A successful man goes to the barbers and is greeted by an unfamiliar face. At first, there is mistrust between the two which evolves into a heated argument, everything is on the table, what does success truly mean?',
    release_date: '2021-05-07'
  },
  {
    id: 786170,
    title: 'The Guardian',
    popularity: 1.508,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vHzXJST28rfjrlfnYhdl0ohAWsL.jpg',
    genre_ids: [53, 18, 27],
    overview:
      'The death of a superstar singer leads to the new success of another young backstage singer. How does this story relate to the help of one “guardian angel”?',
    release_date: '2021-04-30'
  },
  {
    id: 802803,
    title: 'My True Fairytale',
    popularity: 1.508,
    vote_average: 5.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/j8Y5c7WgD1tG4qFnec79KcGtFK0.jpg',
    genre_ids: [18, 9648, 53],
    overview:
      'Angie Goodwin, 17, along with her best friends, Sarah and Andre, go through a horrific car crash. While her friends miraculously survive, Angie disappears. She decides to fulfill her childhood fantasy & embarks on a mysterious journey.',
    release_date: '2021-04-09'
  },
  {
    id: 792334,
    title: 'Sulthan',
    popularity: 2.472,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/z9TqB7GcyM0tMOFlI5mZuqNq351.jpg',
    genre_ids: [28, 10749],
    overview:
      'A man raised by gangsters tries to reform them, and a hired job to protect a village presents him with the perfect opportunity.',
    release_date: '2021-04-02'
  },
  {
    id: 690179,
    title: 'Below the Fold',
    popularity: 3.206,
    vote_average: 1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1spYDzCFA9B4REDs72ZaU1zyIw.jpg',
    genre_ids: [9648, 18],
    overview:
      'Without a trace, Susie Potter vanished from her home in the quiet town of Skidmore, Missouri. Ten years later two reporters uncover a harrowing new detail, which leads them on an obsessive hunt for the truth through the dark labyrinth of rural northwest Missouri.',
    release_date: '2021-04-13'
  },
  {
    id: 575659,
    title: 'Berlin Alexanderplatz',
    popularity: 1.962,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5i3ZUjsjDWrcqPGRoKrHsAltBvD.jpg',
    genre_ids: [18],
    overview:
      "An adaptation of Doblin's text to 2015 Berlin to tell the story of 30-year-old refugee Francis, the sole survivor of a boat which crossed the Mediterranean illegally. Without citizenship papers, Francis is drawn into the underbelly of the city.",
    release_date: '2020-06-25'
  },
  {
    id: 818047,
    title: 'Смешарики и друзья в кино. Выпуск 1',
    popularity: 2.82,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3P14zMg2pXfGrlnTnHkoG1MPCEB.jpg',
    genre_ids: [16, 10751],
    overview: '',
    release_date: '2021-05-06'
  },
  {
    id: 719164,
    title: 'Women',
    popularity: 2.271,
    vote_average: 6.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/doFIExzwIDzqpYxFSX0GBo14nHS.jpg',
    genre_ids: [53],
    overview:
      'A small town detective while investigating the disappearance of a local woman comes across an unassuming Sociology professor who is hiding a secret life.',
    release_date: '2021-04-01'
  },
  {
    id: 826995,
    title: 'Alone in the City',
    popularity: 2.238,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/Kao5EmODMOWwaZRbPDJ4YNALxn.jpg',
    genre_ids: [],
    overview:
      'At the end of the exhibition Step Out of the Strange Light, the musician Anika presents a video produced exclusively for the online program of the Neuer Berliner Kunstverein. Alone in the City accompanies Anika through the streets of Berlin and contains previously unreleased songs that were staged at numerous locations in cooperation with the nbk team. (nbk, 2021).',
    release_date: '2021-05-07'
  },
  {
    id: 817931,
    title: 'My Love',
    popularity: 2.569,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: '',
    release_date: '2021-05-06'
  },
  {
    id: 793155,
    title: 'Brothers-In-Law',
    popularity: 2.396,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/34mk9BfGmIjERETs4JLBhS6ifxr.jpg',
    genre_ids: [35, 80],
    overview:
      'Brothers-in-law, Eduardo and Sabonis, married to sisters Cuca and Peque Ribeiro, have made a real mess of one of their business ventures and are in need of money, a lot of money. It will be Sabonis who, in one of his uncontrollable fits of rage, comes up with a plan to fix all their problems in one go: kidnap Modesto, brother-in-law to Alicia Zamora, the businesswoman who screwed them over. There’s just one problem: Alicia has no intention of paying even a penny to get her brother-in-law back. In the end, it will be Modesto himself who comes up with a new plan to help Eduardo and Sabonis get the money they need to save the family wine business. What they don’t know is that police officer Mati, the Ribeiro’s middle sister, is on to their little plan. Eduardo, Sabonis and Modesto have everything to lose, but as Sabonis would say, what could go wrong?',
    release_date: '2021-04-09'
  },
  {
    id: 765057,
    title: '69: The Saga of Danny Hernandez',
    popularity: 2.942,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dvN3WgpoGKklvtoojgaNTmMElUC.jpg',
    genre_ids: [10402, 99],
    overview:
      'Part investigative documentary, part real-life gangster movie, this film unpacks the life of polarizing rap sensation and internet troll Tekashi69, aka 69, while chronicling his meteoric rise and fall from fame.',
    release_date: '2021-04-29'
  },
  {
    id: 603783,
    title: 'Home Sweet Home',
    popularity: 1.878,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bDEjzADys1EF4ZyuIxAdjhp8Ne9.jpg',
    genre_ids: [9648, 53, 80],
    overview:
      'A story that follows a family of four leading harmonious and contented lives. When a mysterious visitor starts residing in their basement, their lives are turned upside down as strange events begin to occur.',
    release_date: '2021-05-01'
  },
  {
    id: 708352,
    title: 'The Academy of Magic',
    popularity: 3.445,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9B10tJ9LrvzcYaMQdx6yyovszzN.jpg',
    genre_ids: [10751, 16, 14],
    overview:
      'Aura is gifted with magical abilities; she and her friends have many exciting adventures at the academy, but soon Aura learns that the school hatches many dark secrets that she must uncover. Will she be able to unveil the truth?',
    release_date: '2021-04-29'
  },
  {
    id: 797444,
    title: 'Exodus',
    popularity: 1.467,
    vote_average: 4.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rhIRPRlVLsn2GFxLUf9FUB9a9hP.jpg',
    genre_ids: [878],
    overview:
      'When a VHS-tape proves the existence of a rumored doorway to paradise, a young man abandons his decaying hometown in pursuit of the door to salvation, evading vengeful pursuers along the way.',
    release_date: '2021-03-19'
  },
  {
    id: 803623,
    title: 'Kids are fine',
    popularity: 2.414,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zqqXTskGW6tXk39VhUL68367PyY.jpg',
    genre_ids: [18],
    overview: '',
    release_date: '2021-05-05'
  },
  {
    id: 748994,
    title: 'Moon Rock for Monday',
    popularity: 2.054,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6nhuA7bsj5kFrBJ3cfb8hDghwMR.jpg',
    genre_ids: [18],
    overview:
      'Set in Sydney, 1999, after an unlikely encounter at a train station, a young girl befriends a fugitive teenage boy and they travel to visit a moon rock that the girl believes will heal her.',
    release_date: '2021-05-06'
  },
  {
    id: 649137,
    title: 'Billie',
    popularity: 1.417,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ypIq3W5OQjZjBGJQk9l4cHjR6Lu.jpg',
    genre_ids: [99, 10402],
    overview:
      '‘Lady Day’ was one of the greatest jazz vocalists the world ever heard. In 1971, journalist Linda Lipnack Kuehl set out to write the definitive biography of Billie Holiday. Before her mysterious death in 1978, Lipnack Kuehl had taped over 200 hours of interviews. The tapes have never been heard. Now they form the basis of an atmospheric, multi-layered documentary that captures the many complex facets of a proud black woman, violent drug addict, loyal friend, vindictive lover and unforgettable singer of ‘God Bless The Child’, ‘Saddest Tale’ and the haunting ‘Strange Fruit’.',
    release_date: '2020-09-30'
  },
  {
    id: 816583,
    title: 'LA BELLA DURMIENTE - DIFERIDO LA SCALA 2019',
    popularity: 1.415,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nZQayTSQayVHz6kEi4q9sVlQBr.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-13'
  },
  {
    id: 702479,
    title: 'Lei mi parla ancora',
    popularity: 3.042,
    vote_average: 5.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4Dfpud12iipDRvx8QhG3BCch6Nz.jpg',
    genre_ids: [18],
    overview:
      'Nino and Caterina have been married for sixty-five years. On the death of Caterina , his daughter Elisabetta, trying to help her father to overcome the loss, hires an editor to write a book on their love story.',
    release_date: '2021-04-29'
  },
  {
    id: 827442,
    title: 'Carta ao Magrao',
    popularity: 2.078,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99, 18, 36],
    overview:
      'Taking advantage of an unpublished interview material held in 2010 for the film “Democracy in black and white”, this short marks the 10 years of Doctor Socrates, while  a rapid retrospective of that period is explained and talked about.',
    release_date: '2021-05-06'
  },
  {
    id: 680319,
    title: 'We Broke Up',
    popularity: 2.749,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qPeSznx1YJkjKwd3B5yqRlxq0xD.jpg',
    genre_ids: [35],
    overview:
      "Lori and Doug break up right before Lori's sister's wedding and decide to pretend they're still together for the weekend as to not disrupt the fun.",
    release_date: '2021-04-23'
  },
  {
    id: 827455,
    title: 'Finado Taquari',
    popularity: 2.543,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      "For 10 days the team accompanied Everton  and the crew of the vessel 20 de Janeiro  down the lower Taquari River.  The silting up of  rivers, especially Taquari, is a central theme that  demonstrates the difficulties with a river that  one side flooded and the other, where the film is approached, was  drying ... drying ... where's Rio?",
    release_date: '2021-05-06'
  },
  {
    id: 827519,
    title: 'Ouver',
    popularity: 2.042,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'No synopsis',
    release_date: '2021-05-06'
  },
  {
    id: 824649,
    title: '100m Criminal Conviction',
    popularity: 2.384,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mO5dk8tsfukxmGotZp9JaFQhF4a.jpg',
    genre_ids: [80],
    overview:
      '100 M Criminal Conviction is a crime thriller set against the backdrop of the fashion industry. As they maneuver through the maze, the characters weave an enthralling tale of tactics and trickery.',
    release_date: '2021-04-29'
  },
  {
    id: 513340,
    title: 'Animals',
    popularity: 2.321,
    vote_average: 5.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tQyvlLavdNz8xg1vn3Dt7ZC5SnK.jpg',
    genre_ids: [35, 18],
    overview:
      'Laura and Tyler are best friends and drinking buddies whose hedonistic existence falls under the creeping horror of adulthood when Laura gets engaged to Jim – an ambitious pianist who surprisingly decides to go teetotal.',
    release_date: '2019-08-02'
  },
  {
    id: 804896,
    title: 'James & Isey',
    popularity: 2.038,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zjgIEWa5RpwXM2wdxmafe1Xr4bQ.jpg',
    genre_ids: [99],
    overview:
      "Genuine New Zealand treasures Isey and James invite us into their lives in the week leading up to Isey's 100th birthday!  A Northland celebration of life and aroha like no other!",
    release_date: '2021-05-06'
  },
  {
    id: 827518,
    title: 'O Artista - Todas As Horas',
    popularity: 2.036,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'No synopsis',
    release_date: '2021-05-06'
  },
  {
    id: 795564,
    title: 'Crayon Shin-chan: Shrouded in Mystery! The Flowers of Tenkazu Academy',
    popularity: 3.137,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2FB7YpiJ8KIYRM8XdGbFNiZbuKl.jpg',
    genre_ids: [],
    overview:
      'When the five visit a private academy Kazama is attacked. He is left with reduced intelligence and strange bite marks.',
    release_date: '2021-04-23'
  },
  {
    id: 731249,
    title: 'Crayon Shin-Chan: Crash! Rakuga Kingdom and Almost Four Heroes',
    popularity: 2.41,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1ehi5JDsgiBjVUgK61LVPFdGCVq.jpg',
    genre_ids: [16],
    overview:
      'The kingdom that floats above in the sky, that uses free doodles as an energy source, “Rakuga Kingdom.” However, now in the face of a lack in energy, they are on the brink of ruin. In order to force the creation of doodles, the kingdom’s army begins its attack on Kasukabe on the surface! Meanwhile, as the drawings begin to move, the hero who is bestowed the hidden treasure of the kingdom, the “Miracle Crayon”—is none other than the “super happy-go-lucky 5-year-old,” Nohara Shinnosuke!! Together as the “Almost Four Heroes,” Shinnosuke and the drawn doodles try to take back Kasukabe! Amongst that, they discover the weakness of the doodles, where they dissolve upon contact with water! To make matters worse, a raincloud that looks to start pouring at any moment hovers above… What awaits their encounter with the doodles and the end of their adventure—will it be smiles, or tears!?',
    release_date: '2020-09-11'
  },
  {
    id: 795098,
    title: 'International Dawn Chorus Day',
    popularity: 2.031,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gLJ5LDCn9YUzglmMsZ2yXtbwF5X.jpg',
    genre_ids: [99, 35, 18],
    overview:
      'Birds from six continents on a zoom call gossip about the deaths of Egyptian filmmaker Shady Habash and Egyptian queer activist Sarah Hegazi.',
    release_date: '2021-05-06'
  },
  {
    id: 681774,
    title: 'Terima Kasih Emak Terima Kasih Abah',
    popularity: 2.918,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kEbWX2Iu5bwR4S9oX5LQv1bCaPw.jpg',
    genre_ids: [18, 10751],
    overview:
      "The story begins when Abah has lost his home and property. That is a consequence of paying too much brother-in-law's debt. Then Abah and his family moved to a house in a remote village in West Java. The house is his childhood home, a legacy from his father. Initially, they planned to stay temporarily during the trial of his brother's debt case. Unfortunately, they lost in court. The court's decision left Abah's family threatened to live forever in the small house in a state of poverty. Not only Abah, Euis, Abah's first child also helped raise money for the family. While Cemara or Ara, who is still small, seems to remain eager to live life. They work hand in hand to rise from the deterioration of economic conditions. The Cemara family is an adaptation of a television series with the same title by Arswendo Atmowiloto.",
    release_date: '2021-04-15'
  },
  {
    id: 801831,
    title: 'Saina',
    popularity: 1.327,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8zYQArJgqGpr7qm6OuV7sBbfssP.jpg',
    genre_ids: [18],
    overview:
      "Champion. Olympic Medallist. The Doyen of Indian Badminton. Saina Nehwal is all of this and much more. This biopic chronicles the inspiring story of a gifted youngster's ascendance to the pinnacle of the Badminton World through sheer passion and perseverance.",
    release_date: '2021-03-26'
  },
  {
    id: 549859,
    title: 'The Dead Center',
    popularity: 3.069,
    vote_average: 5.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cMvuo4DianPqhp6rvuvTkiICTCS.jpg',
    genre_ids: [53, 27, 9648],
    overview:
      'When a mysterious "John Doe" wakes up in a morgue and wanders into a psychiatric ward, a devoted doctor and curious medical examiner must slowly uncover dark and sinister secrets about the man that reveal a more horrifying truth than they could have ever imagined.',
    release_date: '2019-10-11'
  },
  {
    id: 774353,
    title: 'The Real Ghost Seekers',
    popularity: 2.496,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ni0GNLi0gOT2i2OHyYLWIvQSnFi.jpg',
    genre_ids: [35, 18],
    overview:
      'Danny tries to relive past glories by trying to revive his cancelled ghost hunting show.',
    release_date: '2021-05-01'
  },
  {
    id: 623266,
    title: "The Artist's Wife",
    popularity: 1.31,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/g0GLJ7hRTMwBAbFq5Zkm90kUByz.jpg',
    genre_ids: [18],
    overview:
      "Claire Smythson, wife of the renowned abstract artist Richard Smythson, is plunged into a late-life crisis when her husband is diagnosed with Alzheimer's disease and is in danger of not completing the paintings for his final show.",
    release_date: '2020-09-25'
  },
  {
    id: 825381,
    title: 'Maresco / Pasolini',
    popularity: 1.877,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'Franco Maresco celebrates the heritage of Pier Paolo Pasolini on the 99th anniversary of his birth through a series of exchanges with renowned intellectuals which were involved or influenced by his works and ideas.',
    release_date: '2021-05-05'
  },
  {
    id: 670328,
    title: 'Dino Dana: The Movie',
    popularity: 2.355,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/95MgKRfzJr4Ewo6aCHE7acniasS.jpg',
    genre_ids: [12, 35, 10751],
    overview:
      "Finds 10-year-old Dana, who sees dinosaurs in the real world, solving dino experiment #901 - where are all the kid dinosaurs? But while working on the solution, her new neighbor Mateo is dino-napped by a Tyrannosaurus Rex, and it's up to Dana, her sister Saara, and Mateo's brother Jadiel to finish the experiment.",
    release_date: '2020-03-21'
  },
  {
    id: 735744,
    title: 'No Way Out',
    popularity: 2.216,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1IxZqwaqJUqMlasGgKdpvGFooWx.jpg',
    genre_ids: [27, 53, 18, 9648],
    overview:
      'Trying to salvage a relationship, 2 couples go on a weekend camping trip only to find out they aren’t alone in the woods.',
    release_date: '2021-04-15'
  },
  {
    id: 673732,
    title: 'Vakeel Saab',
    popularity: 2.992,
    vote_average: 5.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jiIKf2tXZJDnpeDxEsA5UnH6DID.jpg',
    genre_ids: [28, 18, 53],
    overview:
      'Three girls find themselves accused of attempt to murder after escaping molestation. Their only hope is an alcoholic lawyer who agrees to take up the case.',
    release_date: '2021-04-09'
  },
  {
    id: 522893,
    title: 'Wildland',
    popularity: 2.55,
    vote_average: 5.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/25TLEK4DUinIhgqM4kpn0haPEl2.jpg',
    genre_ids: [53, 80],
    overview:
      'Following a car accident, which kills her mother, 17-year-old Ida moves in with her estranged aunt and her aunt’s grown sons. The home is filled with physical tenderness and love, but outside of the home, the family leads a violent and criminal life.',
    release_date: '2020-05-28'
  },
  {
    id: 775753,
    title: 'Be My Kirill',
    popularity: 1.796,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wwBmR4i1lVPH7ZHJKsQIPTVbYhf.jpg',
    genre_ids: [35],
    overview:
      "The insecure girl Sasha is lying to her family that she is dating handsome Cyril, although he is just her running coach, with whom she is afraid to even speak. Sister Pasha's husband knows the truth, but he has enough of his own problems - he and his wife have not had sex for a year. Having signed up for running therapy together, Sasha and Pasha decide that they can get away from problems together.",
    release_date: '2021-04-08'
  },
  {
    id: 825754,
    title: 'Collage',
    popularity: 1.871,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3ZV71YQGCJb67eJwSuIA7oOslzY.jpg',
    genre_ids: [99],
    overview:
      'Considerations on collage as a cognitive act in artists’ cinema. A pedagogical film adrift: 35mm photographs and other materials collected over the last fifteen years by artist Stefano Miraglia meet a text written by Baptiste Jopeck and the voice of Margaux Guillemard.',
    release_date: '2021-05-05'
  },
  {
    id: 821664,
    title: 'Ovella',
    popularity: 1.732,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iIy2GulN97Y7aW2GsjNpkb5Cvg0.jpg',
    genre_ids: [18],
    overview:
      'Ove is a young man who has been treated and raised like a sheep all his life. His daily life consists of eating, sleeping, grazing and hanging out with LL, the only sheep in the herd that seems to accept him.',
    release_date: '2021-05-01'
  },
  {
    id: 821699,
    title: 'Break Through the Darkness',
    popularity: 1.981,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ApqhOe1KirU9nMdU83peM9jchfb.jpg',
    genre_ids: [80],
    overview:
      'Film tells about Song Yirui, the leader of a certain anti-criminal task force, who led the team to conduct an in-depth investigation of a land acquisition case.',
    release_date: '2021-05-01'
  },
  {
    id: 825203,
    title: 'LARRUA JO',
    popularity: 1.479,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iwb8S6EVTYRQonomApgqkW04Q4q.jpg',
    genre_ids: [18],
    overview:
      "Falling in love with your best friend is not easy. Avoiding the subject and feeding the fantasy is something which will take its toll. Knowing you are crossing a red line is not always a reason to stop. Sometimes, it's necessary to meet a harsh reality in order to believe it. Gentzane, a young girl settled in her inner world, justifies each one of her actions to be around the person she loves.",
    release_date: '2021-05-01'
  },
  {
    id: 825683,
    title: 'O Inocente Palácio',
    popularity: 1.894,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qNUY2HCneZX8TnV8r0fqGWhIzTf.jpg',
    genre_ids: [80, 53],
    overview: '',
    release_date: '2021-05-03'
  },
  {
    id: 742739,
    title: 'Days of Green',
    popularity: 1.865,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fZMqg5To1mBITOCvs2w8IiYto9J.jpg',
    genre_ids: [10749],
    overview:
      'A young man is eking out a living driving a taxi while being chased by moneylenders. A young woman just ran out of her father’s funeral',
    release_date: '2021-05-05'
  },
  {
    id: 513326,
    title: 'The Tangle',
    popularity: 1.281,
    vote_average: 5.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hDHGVapSPWd9hx6vvtsCA733K6h.jpg',
    genre_ids: [878, 53],
    overview:
      'In the near future, The Tangle, an A.I. utilising airborne nanotech, connects the world. It is a benevolent guardian, returning law and order to society.  To ensure that The Tangle never turns rogue, a government agency watches over the tech from within safe rooms, locations impermeable to the nanobots that make up The Tangle. When field agent Margot Foster is found dead in one of these rooms, the agency needs to investigate the first murder in years.',
    release_date: '2021-03-29'
  },
  {
    id: 603340,
    title: 'Ishq',
    popularity: 1.864,
    vote_average: 5.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/A2JDIEZT3yfqn0Ju97WJQyL8yum.jpg',
    genre_ids: [53, 10749],
    overview:
      'Two youngsters who try to find joy after they lose out on love and their need for a mutual trust to sustain love and happiness.',
    release_date: '2019-05-17'
  },
  {
    id: 825797,
    title: 'How I Met Your Murderer',
    popularity: 1.584,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6O0YfIUUcoHGZts3ailLZNJpiyD.jpg',
    genre_ids: [],
    overview:
      'Mack Meyer has built a large fanbase discussing true crime on her wildly successful podcast "How I Met Your Murderer." However she finds herself the center of the story after learning her husband, Henry, was involved in the death of his high school sweetheart, Lily. With the help of her new neighbor, Oliver, Mack links Lily\'s death to other murders in the area and fears she may be living with a serial killer.',
    release_date: '2021-05-02'
  },
  {
    id: 637612,
    title: 'Chorão: Marginal Alado',
    popularity: 1.799,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gogfKsMhf4q8iOO8awqi9YWkt4g.jpg',
    genre_ids: [99],
    overview:
      'Documentary film about the life and career of Brazilian singer Chorão, leader of the "Charlie Brown Jr." band. From testimonies about his personal and professional life and archival footage, the film follows the story of one of the most important rock stars in Brazil. Beginning in the early 90\'s, when his band released their first album and hit the radio stations, Chorão lived two intense decades of national and international success, full of controversial moments, until his premature death, from drug overdose, in 2013. The film explores different facets over the years and tries to reflect: what is the price of fame?',
    release_date: '2021-04-08'
  },
  {
    id: 827832,
    title: 'Der wilde Wald',
    popularity: 1.86,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: '',
    release_date: '2021-05-05'
  },
  {
    id: 823277,
    title: '극장판 콩순이: 장난감나라 대모험',
    popularity: 1.859,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dF8h1gCz0nFEHXIeZM7y7n85dOH.jpg',
    genre_ids: [16],
    overview: '',
    release_date: '2021-05-05'
  },
  {
    id: 825446,
    title: 'Adolescents of Chymera',
    popularity: 1.718,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/s69OQgqekHt3zcR574VlrxFJV7p.jpg',
    genre_ids: [18],
    overview:
      "Based on actual events about the harsh realities of teenagers living life in a group home (where over 100,000 American juveniles live each year). The story: Roy (Josh Keaton), a new kid and artist from the suburbs is tested by Daryl (Carl Gilliard), the group home leader and his military style rules, a forbidden romance with Laura (Chloe Taylor), his streetwise and reactionary roommate (Danny Arroyo), and his own troubled past as he tries to survive until 'graduation day'. In the end, only his art can save his dreams of love, hope and freedom.",
    release_date: '2021-05-01'
  },
  {
    id: 825676,
    title: 'O Inocente Palácio',
    popularity: 1.884,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qNUY2HCneZX8TnV8r0fqGWhIzTf.jpg',
    genre_ids: [80],
    overview: '',
    release_date: '2021-05-03'
  },
  {
    id: 829754,
    title: 'Tala: The Film Concert',
    popularity: 2.744,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1gyVwivaguVvcrh0lRcTLKC2vvG.jpg',
    genre_ids: [10402],
    overview:
      "Join Asia's Popstar Royalty Sarah Geronimo in her first ever digital concert in celebration of her 18th year in the industry.",
    release_date: '2021-05-14'
  },
  {
    id: 829506,
    title: '虚拟世界',
    popularity: 2.744,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ezIJrZi4o0GJxqkLGXA13wcdnx2.jpg',
    genre_ids: [28],
    overview: '',
    release_date: '2021-05-10'
  },
  {
    id: 829472,
    title: 'Teenagers',
    popularity: 2.744,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/q3Rt5TQpKwL2yz84RrGuWaOew2o.jpg',
    genre_ids: [99, 35, 18],
    overview:
      'Unable to get over his ex-girlfriend, Johnny Camina sets off to complete the documentary he started but never completed about his life and the lives of his friends.',
    release_date: '2021-05-14'
  },
  {
    id: 814781,
    title: 'Once Upon a Time in Hong Kong',
    popularity: 1.86,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bDRZOlPuI2emFiLl95daeIy3qZG.jpg',
    genre_ids: [],
    overview:
      'The story tells the story of a collusion between Hong Kong police and criminals in 1973, under the instigation of the British, they embezzled huge profits and poisoned the citizens. The Governor of Hong Kong established the Independent Commission Against Corruption',
    release_date: '2021-04-29'
  },
  {
    id: 598439,
    title: 'Betrayed',
    popularity: 1.852,
    vote_average: 7.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fcaZf1f5PolwR6JX16yzeEsrbFF.jpg',
    genre_ids: [18, 36, 10752],
    overview:
      'During World War II, millions of Jews from all over Europe are deported and killed in German concentration camps. When the German troops invade Norway, the Norwegian Jews feel safe and protected. But anti-Semitism knows no borders and as the war escalates in Europe, the situation changes drastically. Suddenly, their radios are taken away; their passports are stamped with a big J and one day, all the men men over the age of 15 are arrested and taken to prisons camps. Many of the women left behind are too frightened to escape and are desperately waiting for their husbands and sons to come back home. On November 26, 1942, hundreds of Jews are picked up by the police in the middle of the night and are transported to the dock in Oslo. Unknowing and frightened men, women, children, sick and old are forced on board the awaiting German cargo ship "SS DONAU". The ship leaves with 532 Norwegian Jews onboard; 302 men, 188 women and 42 children. The end station is Auschwitz.',
    release_date: '2020-12-25'
  },
  {
    id: 671040,
    title: 'Young Adult Matters',
    popularity: 2.375,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tAR6pyep25DVV10R8ffjBFfpL5T.jpg',
    genre_ids: [18],
    overview:
      'Wandering around the streets, Sejin, a pregnant teen, gets to know Juyeong and reunites with Jaepil and Sinji. The four musketeers go through a series of misfortunes, bumping into masochistic/sadistic characters and experiencing the brutality and cruelty of the world. Nevertheless, their naivety and pureness to endure through the hardships of life will stir complex emotions that will question your judgment.',
    release_date: '2021-04-15'
  },
  {
    id: 710683,
    title: 'Non-Non Rétrécit',
    popularity: 1.388,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6s15HwJSLvZRI0WRkwKOTIz4ZpG.jpg',
    genre_ids: [16],
    overview:
      'Poor No-No! He thought today was going to be just like any other, with a good picnic and a long afternoon nap. But everything is turned upside down because of a sudden gust of wind and a packet of crisps stuck in a huge tree.',
    release_date: '2021-04-30'
  },
  {
    id: 826360,
    title: 'Nightingale: A Melody of Life',
    popularity: 2.222,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cAhPXNz8URt0mObFfQSV7kQYMEp.jpg',
    genre_ids: [10402],
    overview:
      'Arthur Holzenberg, a struggling singer/songwriter is close to obtaining the record deal of his lifetime, but to do so, he has to reproduce an unreleased album of his father Harold Holzenberg, a once successful artist, as his own.',
    release_date: '2021-05-04'
  },
  {
    id: 609096,
    title: 'Virata Parvam',
    popularity: 1.386,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mrAabZGMPNYP6l9mFSwqe94OElk.jpg',
    genre_ids: [18, 10749],
    overview:
      'Set in a vintage backdrop, this period drama takes place in the year 1992 and reflects the socio-political conditions of the society at that time.',
    release_date: '2021-04-30'
  },
  {
    id: 821975,
    title: 'Glacier',
    popularity: 2.633,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vxJrNkMZhfXdHQKEdoFq3tsGLhx.jpg',
    genre_ids: [18],
    overview:
      'Two people are stuck in a quarantine hotel during a deadly pandemic. Physical contact equals death, total isolation is required. Yet, it is human nature to seek togetherness. But what happens when you have to choose between love and life?',
    release_date: '2021-04-30'
  },
  {
    id: 824380,
    title: 'Blueberry',
    popularity: 1.72,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/b5Ja4VpUGSaCJZ40nOmQm86LH5X.jpg',
    genre_ids: [],
    overview:
      'A young woman (Maya Danzig) living in rural Iowa dreams of becoming a dancer. She meets a stranger named Elsa (Aminah Nieves) who challenges her to run away with her to Rapid City and enter a dance contest. The two escape to the Badlands where their journey is cut short by reality.',
    release_date: '2021-05-04'
  },
  {
    id: 819035,
    title: 'Self-Tape',
    popularity: 1.267,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zd66qtzznkNlCM0vTSiTVEEQ7pz.jpg',
    genre_ids: [18],
    overview:
      'The year is 2020 and the COVID-19 quarantine in New York has begun. Two friends, one an aspiring actor and the other a reclusive loner begin to chat via zoom. Soon a simple conversation regarding an audition turns into a series of audition tapes, that get provocatively wild.',
    release_date: '2021-04-28'
  },
  {
    id: 664236,
    title: 'Extinct',
    popularity: 2.622,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zLrTJh6XHhRhw8Dpd2vzlixMavp.jpg',
    genre_ids: [16],
    overview:
      "The original adventure-comedy follows Op and Ed, two adorable donut-shaped animals -- FLUMMELS -- who accidentally time-travel from 1835 to modern-day Shanghai.  There they discover traffic, trans fats, and worst of all, that flummels are now extinct. It's up to this bumbling pair to save themselves and their species... and, just maybe, change the course of history.",
    release_date: '2021-02-11'
  },
  {
    id: 801245,
    title: 'Mashin Sentai Kiramager vs. Ryusoulger',
    popularity: 1.566,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/F5U4dKznyTqsGkM3JD3Ec2dmDn.jpg',
    genre_ids: [28, 12, 878, 14],
    overview:
      "It's the power of Kiramentality and chivalry in the 27th entry of the Super Sentai VS film series! The Mashin Sentai Kiramager and the Kishiryu Sentai Ryusoulger team-up as they end up in a variety of movie worlds produced by Yodonna and filmmaking Jamenshi and Minosaur! Once this movie is complete and released in the world, the Earth will become the same environment as Yodonheim! Can the Kiramagers and Ryusoulgers stop this plan?!",
    release_date: '2021-04-29'
  },
  {
    id: 779611,
    title: 'Zog and the Flying Doctors',
    popularity: 1.881,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kixE7GE84C5duGKSMB0wIOaVrqd.jpg',
    genre_ids: [16, 10751],
    overview:
      'Pearl and Gadabout are now a flying doctor trio, caring for creatures including a mermaid, a unicorn and a sneezy lion. However when bad weather forces them to land at the palace, Pearl is locked up by her uncle, the king.',
    release_date: '2021-04-16'
  },
  {
    id: 575381,
    title: 'Changeland',
    popularity: 1.233,
    vote_average: 5.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/riGmn60GWpB5PYEZxEGF68dokdR.jpg',
    genre_ids: [35, 18],
    overview:
      "Follow two estranged best friends on an epic, life-changing adventure in Thailand as they're reminded that there's no problem that friendship and a few rounds in a Muay Thai boxing ring can't fix.",
    release_date: '2019-06-07'
  },
  {
    id: 824078,
    title: "Newton's Cradle",
    popularity: 1.38,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tcCuEqFccU3YQifzfS5O23p1iR8.jpg',
    genre_ids: [18],
    overview:
      'The two lovers, Hazem and Hana, decide to have their baby in America to get the nationality. However, they come across many obstacles that threaten their marriage, especially when Hana stays in America and does not come back.',
    release_date: '2021-04-16'
  },
  {
    id: 602661,
    title: 'Chasing the Dragon II: Wild Wild Bunch',
    popularity: 2.562,
    vote_average: 5.9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vqmz4ns20DWVtFbPzKSWyy9ukqa.jpg',
    genre_ids: [80, 28, 18, 36, 53],
    overview:
      "Based on real-life crimes that terrorized Hong Kong in the 1990s, Logan (Tony Leung Ka-Fai) is the head of leading a notorious human trafficking gang, abducting the children of Hong Kong's elite. Police forces decide to send in Sky (Louis Koo), a Hong Kong undercover agent whose mission is to infiltrate and save the hostages, all while bringing the gang and their leader to justice.",
    release_date: '2019-06-06'
  },
  {
    id: 502376,
    title: 'Tiger Robbers',
    popularity: 1.691,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ndCPKLs52CraXHsAH76LI6UOTW0.jpg',
    genre_ids: [35, 12],
    overview:
      'Based on Kotaro Isaka\'s novel"Sunshine Robber. Four robbers team up to pull off a "fun" heist involving a Bengal tiger.',
    release_date: '2021-05-01'
  },
  {
    id: 723640,
    title: 'My Love',
    popularity: 1.931,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lz5Vv6W2gI1lwGK8GhraHX5Saw.jpg',
    genre_ids: [10749, 18],
    overview:
      'Tells the 15-year love story between Zhou Xiao Qi, a long-time swimming student and You Yong Ci, a transfer student. In high school, Zhou Xiao Qi fell in love at first sight with You Yong Ci. A young and ignorant pure love, the boy silently guarded, but the girl left without saying goodbye. Life after that, 15 years of love long-distance race. Your wedding is also my coming-of-age gift.',
    release_date: '2021-04-30'
  },
  {
    id: 810406,
    title: '2gether: The Movie',
    popularity: 2.527,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gY9VuVtl9Eb2Twt29GBUMzT40oD.jpg',
    genre_ids: [18, 10749],
    overview:
      'Tine, a college student, wants to get rid of a gay admirer and his friends recommend that he find a fake boyfriend: Sarawat. But Sarawat is hard to come by. Until he finally accepts. The two become close and intense emotions soon erupt. As Tine and Sarawat enter the second year of their relationship, they also begin to take on greater responsibilities in college with the former as the new president of the cheerleading club and the other as the new president of the music club.',
    release_date: '2021-04-22'
  },
  {
    id: 721537,
    title: 'Counting Bullets',
    popularity: 1.937,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'One of 12 westerns in 12 months, Counting Bullets tells the story of a small group of cavalry soldiers who are pinned down in a canyon by the enemy. Over the course of a few days, they are forced to face their differences and rely on each of their instincts to survive.',
    release_date: '2021-05-01'
  },
  {
    id: 568381,
    title: "Marona's Fantastic Tale",
    popularity: 2.162,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4r3EKD3v2q9vx9nGj5ziq8oUtfp.jpg',
    genre_ids: [16, 18, 10751],
    overview:
      'Marona, an innocent and empathetic little female dog, remembers the life she has shared with different masters, whom she has loved unconditionally.',
    release_date: '2020-01-08'
  },
  {
    id: 823031,
    title: 'O Auto da Boa Mentira',
    popularity: 1.302,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uKBqIVEOQ5CdpEk7yseoos2soT7.jpg',
    genre_ids: [35],
    overview: '',
    release_date: '2021-04-29'
  },
  {
    id: 814062,
    title: 'Crayon Shin-chan Movie 29: Mystery Meki! Hana no Tenkasu Gakuen',
    popularity: 2.043,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2vVrBAg5KPiJi7XHuD5ZZCUZzmW.jpg',
    genre_ids: [],
    overview: 'No overview found.',
    release_date: '2021-04-23'
  },
  {
    id: 819299,
    title: 'Dark Red Forest',
    popularity: 1.597,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      '20.000 Buddhist nuns live in a monastery on a snowy plateau in Tibet, China. Surrounded by harsh nature and secluded from the outside world, these women offer us a glimpse into their religious exploration of life’s biggest questions.',
    release_date: '2021-05-03'
  },
  {
    id: 804584,
    title: 'Volcanic UFO Mysteries',
    popularity: 1.612,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fm6robAG0wxbgYUcfXX1wqPc0vd.jpg',
    genre_ids: [99],
    overview:
      'Volcanic UFO Mysteries (2021)  Darcy Weir  UFO sightings have been a regular world wide phenomenon for decades. Researchers of UFOs have noticed a connection with UFO sightings around Volcanic hot spots across Latin America. Join Stephen Bassett and Jaime Maussan as they discuss a history of sightings. Jaime has been a news journalist in Mexico for over 25 years and Stephen Bassett has been fighting for political disclosure UFOs',
    release_date: '2021-04-30'
  },
  {
    id: 809910,
    title: 'Triumph',
    popularity: 1.84,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1Y7R1mFvP1fLjlIZUA9W5z5Ekkr.jpg',
    genre_ids: [18],
    overview:
      "A bright and determined teen who has mild cerebral palsy strives to be a wrestler on his high school's team and to win over the heart of a classmate, the girl of his dreams.",
    release_date: '2021-04-30'
  },
  {
    id: 799258,
    title: 'The swarm',
    popularity: 1.86,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tfunb62vcMWcT9TenAvKo4ELlmo.jpg',
    genre_ids: [28, 10752, 53],
    overview:
      "A war film that deals with real facts and the work of the Egyptian security authorities against terrorist organizations and entities, including the killing of 21 Egyptians in Libya and the army's operations to confront those terrorist groups.",
    release_date: '2021-04-30'
  },
  {
    id: 744265,
    title: 'Good Light, Good Air',
    popularity: 1.744,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/u08tCnks2LjuMFrxE8HunChg3gE.jpg',
    genre_ids: [99],
    overview:
      'The title Good Light, Good Air is oddly paradoxical. Keenly working at the point where his artistic identity and persistent attention on modern Korean history meet, director Im in this film focused on where the history of oppression and struggle intersect between Gwangju and Buenos Aires. In both cities, a great number of people who fought against the dictatorship were slaughtered and disappeared. The people of both societies still live with that trauma. When the testimonies of the victims of the two cities cross over, the film gives us chills as the eerie history of the two is very similar. Through Good Light, Good Air, director Im asks us how we will remember the past from where we stand right now.',
    release_date: '2021-04-28'
  },
  {
    id: 762460,
    title: 'Duty Free',
    popularity: 1.609,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wMVjPF0zSbFJkPxBr7h1b9Hm7Ij.jpg',
    genre_ids: [99],
    overview:
      'After a 75 year-old mother gets fired from her job, her son takes her on a bucket-list adventure to reclaim her life. As she struggles to find work, he documents a journey that uncovers the betrayals plaguing her past and the economic insecurity soon to shape not only her future, but that of an entire generation.',
    release_date: '2021-04-30'
  },
  {
    id: 798659,
    title: 'Walking with Herb',
    popularity: 1.608,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6aFteQqIWKPeKSviECQbQrw9X6S.jpg',
    genre_ids: [35],
    overview:
      'Joe Amable-Amo is a bank executive and former amateur golfer struggling with his faith after an unexpected tragedy. Faced with growing doubts about himself, his purpose, and his belief in God, Joe is stunned when he receives a message from God on his computer screen telling him that he’s been chosen to inspire the world and play in a world championship golf tournament. Guided by God’s eccentric personal messenger, Herb, Joe learns that the seemingly impossible is possible…through faith, family, and second chances.',
    release_date: '2021-04-30'
  },
  {
    id: 825054,
    title: 'Chris Arreola vs Andy Ruiz Jr',
    popularity: 1.427,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'Chris Arreola vs Andy Ruiz Jr  May 1,  2021',
    release_date: '2021-05-01'
  },
  {
    id: 655082,
    title: 'Eiffel',
    popularity: 1.678,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zdG5ZSwC8TH7UCw1CIjs28sWDaF.jpg',
    genre_ids: [18],
    overview:
      'The government is asking Eiffel to design something spectacular for the 1889 Paris World Fair, but Eiffel simply wants to design the subway. Suddenly, everything changes when Eiffel crosses paths with a mysterious woman from his past.',
    release_date: '2021-04-03'
  },
  {
    id: 820099,
    title: 'Schemes In Antiques',
    popularity: 1.35,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vsgXpsKHxXaXN6iyldOYjveTr3M.jpg',
    genre_ids: [],
    overview: 'Coming Soon',
    release_date: '2021-04-30'
  },
  {
    id: 808890,
    title: 'The New Prince of Tennis: Hyoutei vs. Rikkai - Game of Future',
    popularity: 1.124,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/awzccxhW5ax6apSe1AOSuB9zA3d.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-17'
  },
  {
    id: 755594,
    title: 'Soul Snatcher',
    popularity: 1.954,
    vote_average: 6.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7OAK4XPY2Kf8MfGgYFfvmifGSht.jpg',
    genre_ids: [35, 14],
    overview:
      'The historical fantasy film basically revolves around the tale of an impoverished scholar and a fox demon in search of a magic pill. Chen Linong plays the guileless Wang Zijin, the scholar on the way to Beijing who inadvertently becomes fast friends with Li Xian’s fox demon Bai Shisan. Unbeknownst to him, the wily Bai Shisan actually has plans to use him to retrieve the magic pill that will turn him immortal.',
    release_date: '2020-12-04'
  },
  {
    id: 682875,
    title: 'Puaada',
    popularity: 2.324,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mdUSA0p58q1PapmSajXt1P0ZcBY.jpg',
    genre_ids: [18],
    overview: 'Amy Virk and Sonam Bajwa movie',
    release_date: '2021-04-02'
  },
  {
    id: 814609,
    title: 'Zombivli',
    popularity: 1.597,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cWWF9BKHQaYcKqFa2sYBjkwIjqQ.jpg',
    genre_ids: [18, 35, 27],
    overview:
      "In the suburban neighborhood of Mumbai, a wall separates the haves and the have-nots. Sudhir and Seema, a newly married middle class couple, live a life without hardship while Vishwas, a slum dweller, dreams of dignity for his people. Their lives collide as post nightfall the town fills up with ominous cries and moans that don't belong to people - they belong to zombies.",
    release_date: '2021-04-30'
  },
  {
    id: 812584,
    title: 'Sword of Destiny',
    popularity: 1.386,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gl5crpQyGF4cwW4cVmaua0aTR8.jpg',
    genre_ids: [28],
    overview:
      'The peerless swordsmith, Meng Yezi, suffered the calamity of family extermination from the traitor Zhao Han served in the court for casting the famous Hanguang Sword. He desperately saved his son Meng Yang and left him the unforged Chengying Sword. Twenty years later, Meng Yang grew up and tried to avenge his father. At that time, Chengying Sword had not been cast yet to compete with Hanguang Sword. Then, the emperor was dying, and by chance, Meng Yang was assigned to escort the prince Gong Zidu back to the palace to succeed to the throne. Meng Yang accepted the task to investigate the truth about his family extermination for avenge. However, he met a fatal disaster on the way...',
    release_date: '2021-03-30'
  },
  {
    id: 641336,
    title: 'The Last Right',
    popularity: 2.109,
    vote_average: 6.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fqF8pFU4BghrKJ69kVuI0T0vOqt.jpg',
    genre_ids: [35, 18],
    overview:
      'Daniel Murphy is lumbered with a corpse that has the same last name as his, who dies on his flight from Boston to County Cork. Travelling back to Ireland to attend his mother’s funeral, Daniel also checks on his autistic brother. What follows is an unconventional road trip with his brother and the mortuary assistant as they take the coffin from Clonakilty to Rathlin Island.',
    release_date: '2019-12-06'
  },
  {
    id: 809192,
    title: 'Tangra Blues',
    popularity: 1.079,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dbAHwJlnsEcPKGfEi83lW5OrtbQ.jpg',
    genre_ids: [18, 53],
    overview:
      'a jubilant musical journey set against the backdrop of gang wars. Tangra Blues follows two people who go through various highs and lows of life, wrestling with the memories of the past and struggles of the present to create a foundation for a hopeful future.',
    release_date: '2021-04-15'
  },
  {
    id: 812563,
    title: 'Reflejos del ayer',
    popularity: 1.411,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: '',
    release_date: '2021-05-01'
  },
  {
    id: 820875,
    title: 'Call Time The Finale',
    popularity: 1.965,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/otq3uvgnNsFXEiHIpbFnmNJsklu.jpg',
    genre_ids: [53],
    overview:
      'Call Time tells a story about an inexperienced film crew and has-been director Ethan Shaw who attempt to film the greatest scary movie of all time. Little do they know, they are the main stars of the show. Some of the characters’ greed for Hollywood fame turns into a series of twisted betrayal. The guilty rises from the ashes as the innocent fall under grotesque bloodshed.',
    release_date: '2021-04-20'
  },
  {
    id: 654588,
    title: 'Far Frontiers',
    popularity: 1.528,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uP7hl34cEsjmhTqMF7Y9cVB6RtT.jpg',
    genre_ids: [18],
    overview:
      "Maria, a wife of a deputy commander of a military base, begins a relationship with another officer, Their affair quickly spirals out of control, fatally and irreversibly changing the course of Maria's and her family's life.",
    release_date: '2021-04-29'
  },
  {
    id: 827952,
    title: 'DECISIONS',
    popularity: 1.483,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'We make decisions every day but not all decisions carry the same weight. The film Decisions captures three situations where a decision in unavoidable but painful, in a way. Sometimes, choosing a perfect pair of shoes seems nearly impossible but in other scenarios a relationship or even a life can be at stake. (Author of the annotation is Adéla Drdová via FAMUFEST.)',
    release_date: '2021-05-02'
  },
  {
    id: 793100,
    title: 'Remain In Twilight',
    popularity: 1.776,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oqBPg8oPJ5z2IgiX8fgByV0V3uG.jpg',
    genre_ids: [35, 18, 14],
    overview:
      "Six friends, who hanged out together during their high school days, gather again after 5 years for a friend's wedding. The six friends are: Kazuki Yoshio, Tetsuya Akashi, Taku Sogawa, Taisei Tajima, Yusaku Mizushima and Kinichi Fujita.  At the wedding, the friends perform an embarrassing dance routine for the bride and groom. The friends reminisce about their high school days and they believe their friendships will last forever, but...",
    release_date: '2021-04-29'
  },
  {
    id: 378868,
    title: "The Colonel's Stray Dogs",
    popularity: 1.276,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jL4k6OZMs3LJ51STQzUUkbvJEHd.jpg',
    genre_ids: [99],
    overview:
      'In 1981, seven Libyan exiles formed the core opposition group to Colonel Muammar Gaddafi. Thirty years later, they are back to their country only to inherit the mess he left. The film is an intricate blend of rare first-hand accounts, propaganda archival material turned on its head, evocative cinematography and an untold history of a country.',
    release_date: '2021-04-29'
  },
  {
    id: 743931,
    title: 'Say Your Prayers',
    popularity: 0.946,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mMdVuOKOEuhEwr9SdJ2BKMZHitU.jpg',
    genre_ids: [35, 80],
    overview:
      'Two orphaned brothers turned radical Christian hitmen venture to rural Ilkley under the instruction of Father Enoch. Their mission: assassinate the famed atheist writer Professor John Huxley.',
    release_date: '2021-04-02'
  },
  {
    id: 648574,
    title: 'Amadeo',
    popularity: 1.404,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lgiC9PE6W2FtqPoLsNrKXRtuH7z.jpg',
    genre_ids: [],
    overview: 'Biopic of the famous portuguese artist Amadeo de Souza Cardoso.',
    release_date: '2021-05-01'
  },
  {
    id: 678470,
    title: 'Kotigobba 3',
    popularity: 1.274,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oBm9OdvuaCWWz2sU7x5fDRw4Tke.jpg',
    genre_ids: [],
    overview:
      "Kotigobba 3 is an upcoming sudeep film and it's a third instalment in the Kotigobba series.",
    release_date: '2021-04-29'
  },
  {
    id: 799878,
    title: 'The Nameless Days',
    popularity: 1.49,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uibDHdURZQdUpDP8HHTVjspzkfD.jpg',
    genre_ids: [27, 53],
    overview:
      'On the border between the United States and Mexico, once every 20 years, there are days that locals call timelessness. It is said that at this time the gods, to whom the ancient Mayan tribes made sacrifices, descend to earth to take human souls. A group of young people find themselves in the very epicenter of a bloody hunt of mysterious creatures. Will they be able to survive the timelessness?',
    release_date: '2021-04-10'
  },
  {
    id: 823579,
    title: 'Cantata de la guerra civil',
    popularity: 1.272,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oM8H0LccPkIVgbjeRCqKHJUMvAl.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-29'
  },
  {
    id: 799197,
    title:
      "Police X Heroine Lovepatrina! Movie Version ~Challenge from a Phantom Thief! Let's Arrest with Love and a Pat!~",
    popularity: 1.271,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bZ9cMT4jRfRyOuJMiO6beq51BIn.jpg',
    genre_ids: [14, 878, 12],
    overview: 'Movie version of the series "Police x Heroine Lovepatrina!".',
    release_date: '2021-04-29'
  },
  {
    id: 763539,
    title: 'Gulliver returns',
    popularity: 1.272,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ckLMSPAJRAEXoiq4BACLGgNVvzo.jpg',
    genre_ids: [12, 16],
    overview:
      'World traveler and adventurer Gulliver is invited to return to Lilliput, the town he previously saved from the enemy fleet of the neighboring Blefuscu.',
    release_date: '2021-04-29'
  },
  {
    id: 723270,
    title: 'Useless Humans',
    popularity: 1.274,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/a8MMTMoZRakarCowUeVuWKo8jYy.jpg',
    genre_ids: [27, 12, 35],
    overview:
      'A thirtieth birthday -- and the survival of mankind -- are left hanging in the balance after a mysterious creature crashes the party, forcing four childhood friends to save the night.',
    release_date: '2021-02-25'
  },
  {
    id: 824512,
    title: 'Pato, Siriguela e o Pedaço de Pão',
    popularity: 1.711,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mW3ixVovachaqB3cdwHj1QtUmYz.jpg',
    genre_ids: [16],
    overview: '',
    release_date: '2021-05-01'
  },
  {
    id: 597840,
    title: 'Pinocchio: A True Story',
    popularity: 1.272,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9g6yLno4P14UWiURoL2H2NUp39h.jpg',
    genre_ids: [16],
    overview:
      'Young Pinocchio runs away from his genius creator Jepetto accompanied by the horse Tibalt to see the world and joins the traveling circus run by hustler Modjafocco. This is here where all the incredible adventure begins...',
    release_date: '2021-04-29'
  },
  {
    id: 822773,
    title: 'Between Heaven and Earth',
    popularity: 1.281,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/p2pvLgsOzJKKKHkH6mdHK01ayoX.jpg',
    genre_ids: [],
    overview:
      'In a Cairo building, the elevator breaks down with a number of strangers trapped inside, leading to first-time introductions under severe stress that causes many paradoxes, as the individual stories of each person are revealed.',
    release_date: '2021-04-13'
  },
  {
    id: 639239,
    title: 'Musoon, Across the Universe',
    popularity: 0.979,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1J05FF9xcIE0K7X2nHPLmbCTTo4.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-22'
  },
  {
    id: 824163,
    title: 'Take Care of Zizi',
    popularity: 1,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oqVJ13tPBwqvMikFFb4vHa2fmia.jpg',
    genre_ids: [35, 18, 10751],
    overview:
      'When her attempt to get pregnant fails again, tension rises between Zeinab and her husband, Hesham, as their conflict leads them to court, putting Zeinab in danger of losing everything she has, not just her dream of being a mother.',
    release_date: '2021-04-11'
  },
  {
    id: 806792,
    title: 'Before the Eruption',
    popularity: 1.213,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4g8z0MEuJrXNkeRHVJcPYmWVjSl.jpg',
    genre_ids: [],
    overview:
      'Although a volcanic eruption can occur without any prior signal, volcanoes will most likely issue different types of warnings before the eruption begins. We barely saw it coming.',
    release_date: '2021-04-28'
  },
  {
    id: 822023,
    title: 'Inefable',
    popularity: 1.396,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/znJsLngbL0QDryhojrKfsIcCvWc.jpg',
    genre_ids: [],
    overview:
      'Mateo is a teenage boy who lives his life glued to the screen. There he spends his hours in silence. Maria has recently moved in to face the burden of their complex family situation on her own.',
    release_date: '2021-05-01'
  },
  {
    id: 829017,
    title: 'Covid Messages',
    popularity: 1.396,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nnfkijAY6TUElaGKlE8CrfQE19Z.jpg',
    genre_ids: [],
    overview:
      '‘Covid Messages’ is a video in six parts, based around broadcasts of Prime Minister Boris Johnson’s COVID-19 press conferences. The work focusses on the British government’s attempts to eliminate the virus through the use of magic spells and rituals. While the pandemic spreads and the death toll rises, the Prime Minister makes repeated errors of judgement. Exasperated by his many mistakes, the spirits of the dead rise up and intervene.',
    release_date: '2021-05-01'
  },
  {
    id: 825077,
    title: 'Seth',
    popularity: 1.645,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4bhONxr4GLwTVC63cZW8H2A8YbQ.jpg',
    genre_ids: [10402],
    overview:
      "Come and discuss live with French black pioneers SETH about the release of 'La morsure du Christ', an album that rekindles the flame of the famous 'Les blessures de l'âme'!",
    release_date: '2021-05-01'
  },
  {
    id: 768723,
    title: 'Lovebug',
    popularity: 1.395,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zTEUwzDRkB95JrwHCg7CybY5P5S.jpg',
    genre_ids: [18, 10749],
    overview:
      'Two boys develop an affectionate friendship before discovering that the world is about to end.',
    release_date: '2021-05-01'
  },
  {
    id: 810419,
    title: 'Do I Love You, Robot, Do I',
    popularity: 1.561,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/r80sblPB7jLlZOsxJMh02kcX7nW.jpg',
    genre_ids: [99],
    overview:
      'Anthropomorphic robots are increasingly being introduced into our lives: they meet us at the reception, educate children and even live in families as partners. Scientists are trying to make robots as human-like as possible. In the late 80s, scientists studying the emotional reaction of people to robots discovered the "uncanny valley effect": the most humanoid robots caused dislike and even fear in people. But what will happen when they become indistinguishable from a person? And will they?',
    release_date: '2021-04-15'
  },
  {
    id: 817946,
    title: 'Zerø',
    popularity: 1.003,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rlGgMq2QLgT0hiZ0JTK2SNcLgfg.jpg',
    genre_ids: [18, 53],
    overview: '',
    release_date: '2021-04-23'
  },
  {
    id: 828650,
    title: '8\'28"',
    popularity: 1.641,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5H9Hwbrpb14t5ipEhpgT1v5yf3X.jpg',
    genre_ids: [],
    overview:
      'It’s a one-shot film about violence and blood in a turbulent world, named after the film’s duration. But 8\'28" is should hardly be interpreted as a mirror of the pandemic era, since the film’s sound creation and final edit all took place before the catastrophe arrived. As usual, I have done all the work on the film myself.',
    release_date: '2021-05-01'
  },
  {
    id: 819274,
    title: '18 Puasa Di Kampong Pisang',
    popularity: 1.308,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/SXGMs5ibsjZ7H5dvrX4RAt37ZR.jpg',
    genre_ids: [],
    overview:
      'Tells the story of a group of Kampong Pisang residents who are still committing misdeeds in the month of Ramadan. While Barkoba was enjoying a meal during the day in the bush, suddenly an incident occurred. He has been visited by the demon and brought Barkoba back to the past to recall every wrongdoing committed throughout his life. Barkoba ignores zakat, persecutes others, invites mischief and causes injury and death to Kiambang. Can Barkoba correct his past mistakes and return to the real world and succeed Barkoba in saving Kiambang.',
    release_date: '2021-04-15'
  },
  {
    id: 828412,
    title: 'Um Quadro do Pollock com Sangue',
    popularity: 1.207,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/Ag3XMTAZCmiJUwN215ZvkH0Qbdq.jpg',
    genre_ids: [18],
    overview: '',
    release_date: '2021-04-28'
  },
  {
    id: 767511,
    title: 'On the Fringe of Wild',
    popularity: 1.457,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uT0HoJ1F2QCMAdDRgS4HgBTHPjq.jpg',
    genre_ids: [],
    overview:
      "A 2000's Romeo and Juliet in small town Ontario, where love does not win, but surviving players grow up to accept themselves as members of the LGBTQ+ community.",
    release_date: '2021-04-28'
  },
  {
    id: 667938,
    title: 'Curveball',
    popularity: 2.086,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/b1gBEXtF5eBJtC7Ok02f1bhNLAX.jpg',
    genre_ids: [35, 80, 53],
    overview:
      'Although he already has searched Iraq unsuccessfully for weapons of mass destruction as a member of a UN mission, German bio-weapons expert Arndt Wolf is still obsessed with the idea that Saddam Hussein is hiding something. Nobody around him is interested in this topic any more. This changes abruptly when an Iraqi asylum seeker claims to have been involved in the manufacture of chemical weapons. The German Federal Intelligence Service summons Dr. Wolf to ascertain the legitimacy of the claims made by the informant, who has been given the code name “Curveball”.',
    release_date: '2020-02-27'
  },
  {
    id: 824784,
    title: 'Alone Sleeps the Water, Frozen She Awakes',
    popularity: 1.39,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zOG87Z0OaNplCBGyvOoSHzusiea.jpg',
    genre_ids: [99],
    overview:
      'What was once solid must now flow. In "Alone Sleeps the Water, Frozen She Awakes", crystalline patterns of ice melt in the sunshine. Playing with opacity and transparency, Sofia Petersen investigates, through analogue film stock, the surfaces above and below the ice cap of a river. Later, footprints on a snowy plain tell of a presence marking its trace.',
    release_date: '2021-05-01'
  },
  {
    id: 824776,
    title: 'Francine et Paul - le documentaire',
    popularity: 1.39,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: '',
    release_date: '2021-05-01'
  },
  {
    id: 818533,
    title: 'Bernarda Alba',
    popularity: 1.206,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iRxyVEH7mtftpTfOnRDzvEcgjby.jpg',
    genre_ids: [10402],
    overview: '',
    release_date: '2021-04-28'
  },
  {
    id: 825411,
    title: 'Tardor',
    popularity: 1.389,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5C9xKO8nR53pHdyMFiJLH8aAYPN.jpg',
    genre_ids: [],
    overview:
      'Lola is leaving her youth behind and lives her routine in a town of Costa Brava, taking care of a small business which depends on tourism. Summer season is ending and autumn is here. Meanwhile, Lola watches her younger sister getting ready to start a new life...',
    release_date: '2021-05-01'
  },
  {
    id: 825405,
    title: 'Todavía no conozco tu letra',
    popularity: 1.389,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      "The world is ending, or so it seems, and a girl decides to phone someone she once knew but didn't dare to tell him everything she felt at the time.",
    release_date: '2021-05-01'
  },
  {
    id: 654553,
    title: 'Yuvarathnaa',
    popularity: 0.959,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ZVrXoqSL8lwdN9ZQHUTf9KzGOw.jpg',
    genre_ids: [28, 18],
    overview:
      'A government aided college, RK University, is on the verge of completing its golden jubilee but a bizarre event shuts it down indefinitely. Will RK University restore its lost glory?',
    release_date: '2021-03-31'
  },
  {
    id: 801518,
    title: 'Lakshya',
    popularity: 1.319,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4noD9IB1lCfg9wd2GzRho4FhabL.jpg',
    genre_ids: [28, 18],
    overview:
      'Lakshya is an upcoming Indian Telugu-language sports drama film written and directed by Dheerendra Santhossh Jagarlapudi',
    release_date: '2021-04-30'
  },
  {
    id: 548756,
    title: 'We Are the Heat',
    popularity: 1.376,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oXSOfF7qmRyuEjGAalJLN8XmRWO.jpg',
    genre_ids: [18],
    overview:
      'In the crime filled city of Buenaventura, Colombia, a group of friends prepares for a dance competition that might change their lives forever. In this rough world, talent might be your only way out.',
    release_date: '2018-09-02'
  },
  {
    id: 536728,
    title: 'The Space Between',
    popularity: 1.245,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jWSsfwyZs1wAMzp8EPzJQZ440pQ.jpg',
    genre_ids: [18, 35],
    overview:
      'Micky Adams (Kelsey Grammer), an eccentric has-been rock musician, loses his grip on reality as his record label looks to drop him and his new "unique" albums. In hopes of breaking out of the mailroom, young Charlie Porter (Jackson White) is tasked with traveling to the musician\'s bizarre home and forcing Micky out of his contract. Micky realizes Charlie could be the key to an artistic breakthrough and the pair\'s unlikely friendship grows. The odd but powerful bond helps both gain perspective on the music industry, life, love... and the space between.',
    release_date: '2021-04-23'
  },
  {
    id: 803265,
    title: 'Her Story',
    popularity: 1.313,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ArsgSsBlDittV63IRttGhGonyJW.jpg',
    genre_ids: [10749, 18, 10751],
    overview:
      'The background of "Her Story" is set in 2020: a sudden disaster that disrupted everyone\'s lives. When society face unemployment when families fall apart, when lovers are separated, when death is approaching quietly, and when a peaceful life suddenly undergoes unexpected changes, how will women respond? What are the vital and irreplaceable roles that men play in women’s lives and growth? The three female directors Zhang Aijia, Li Shaohong and Chen Chong used their unique female perspectives to explore and show people\'s plights and struggles in family, career, and love in special times.',
    release_date: '2021-04-30'
  },
  {
    id: 823933,
    title: 'Nocturne',
    popularity: 1.241,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ekwLpBDQpPsyGNmZVQNTnPdgECc.jpg',
    genre_ids: [18],
    overview:
      'After ending a very close relationship, Manuel falls into melancholy and begins to rethink his way of loving. Within his thoughts are the social problems that surround him. He realizes that with these comes a rethinking of what love is. An idea that we have been carrying for a long time: the idea that to love is to possess.',
    release_date: '2021-04-23'
  },
  {
    id: 830109,
    title: 'Who the fuck is adam sandler',
    popularity: 1.96,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ijZRNuKDoUgmzKm2BjjfHdkT6Me.jpg',
    genre_ids: [18, 99],
    overview: '',
    release_date: '2021-05-15'
  },
  {
    id: 830073,
    title: 'Introspectum Motel',
    popularity: 1.96,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3Yi52QVB3GzHPL4bC16H3CXytpo.jpg',
    genre_ids: [],
    overview:
      'Two strangers, Philippe and Paul head down a dark and twisted path inside themselves, as they uncover the connection between them. Together, they are forced to confront their choices, their shared history, and ultimately their humanity.',
    release_date: '2021-05-15'
  },
  {
    id: 830040,
    title: 'Tour Movie',
    popularity: 1.96,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iOmkc7PzTIRjpMZmiJseaRkvMGC.jpg',
    genre_ids: [99],
    overview:
      'Experimental documentary chronicling the first tour of underground Louisville punk bands "Belushi Speed Ball" and "Dick Titty Blood Punch."',
    release_date: '2021-05-13'
  },
  {
    id: 830035,
    title: 'Kunhangue Arandu',
    popularity: 1.96,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hI1IgamPV1UjDWsHYxtfXcOSwRu.jpg',
    genre_ids: [],
    overview: 'No Synopsis',
    release_date: '2021-05-15'
  },
  {
    id: 829943,
    title: 'Langsam vergesse ich eure Gesichter',
    popularity: 1.96,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2vNyeGDBykctXiHxa5LqyC43NfR.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-05-05'
  },
  {
    id: 827359,
    title: 'Зоя Космодемьянская',
    popularity: 1.96,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/go6OzhAGVhWOXg6i4CL3yqTKikW.jpg',
    genre_ids: [10752, 18],
    overview: '',
    release_date: '2021-05-06'
  },
  {
    id: 811634,
    title: 'Monkey King Reborn',
    popularity: 0.84,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1nez4NCTzVEqT1UMioC0QuCQ8jy.jpg',
    genre_ids: [16, 28, 14],
    overview:
      'At the beginning of chaos, the first demon in the world was born, named Yuandi, and was worshipped as the ancestor of demons. Thousands of years later, the former demon king Sun Wukong is rescued from the Five Elements Mountain by Monk Tang, who promises to protect him and go to the West to get the scriptures.',
    release_date: '2021-04-02'
  },
  {
    id: 793145,
    title: 'Haunted Identity',
    popularity: 1.627,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xmqE5hlEyeZr5Pity3ut8yE7teo.jpg',
    genre_ids: [53, 27],
    overview: '',
    release_date: '2021-05-01'
  },
  {
    id: 749534,
    title: 'Dreaming Martin',
    popularity: 1.96,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oG503s8xinGVHMCHUFluKw17pk6.jpg',
    genre_ids: [99],
    overview:
      "A group of artists and friends of the late painter Martín Santiago meet to make his dream come true of his home becoming  in an art museum and cultural space for the town of Deán Funes, Córdoba.  The group is led by the artist's disciple, the painter Mario Sanzano, who heads the initiative. He is also accompanied by artists from the area and friends of Martín Santiago. Despite not having official resources, they carry out the feat of recovering the work and turning the space into a cultural center for the city.",
    release_date: '2021-05-15'
  },
  {
    id: 457215,
    title: 'Grandpa Walrus',
    popularity: 1.96,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/yZstMh13djFGsuIEuuKmTYCAMYm.jpg',
    genre_ids: [18, 16],
    overview:
      'On the windy and cloudy beach, Granny is praying, Mum is shouting, the sisters don’t care, Lucas is alone. Grandpa was a weird guy, now he’s dead.',
    release_date: '2021-04-08'
  },
  {
    id: 803858,
    title: 'El fulgor',
    popularity: 1.307,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/yUmPq5JWcUFG87de7AfEorEOWKI.jpg',
    genre_ids: [18],
    overview:
      'The carnival is coming soon. We witness the ritual of “cleaning the meat” performed by the “gauchos” who unfold their knives. The bucolic landscape mixes with the city streets. Slowly, everything fills with colour, feathers and semi-naked men. Face masks begin to cover the faces and alcohol disinhibit the bodies.',
    release_date: '2021-04-30'
  },
  {
    id: 824732,
    title: 'Lotto Share',
    popularity: 1.307,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mYXjQl1UKhjQanxiYPl9hyxcuxJ.jpg',
    genre_ids: [],
    overview: 'Korean movie.',
    release_date: '2021-04-30'
  },
  {
    id: 820425,
    title: 'Cineclub',
    popularity: 1.307,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xj87nRRnzAWaPoAqAPmOqoFygKI.jpg',
    genre_ids: [35, 18],
    overview: '',
    release_date: '2021-04-30'
  },
  {
    id: 820421,
    title: 'Barcos. Doce cartas náuticas',
    popularity: 1.807,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/67UCTKCByG1ZfD3gjBRa5e4ZyGX.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-30'
  },
  {
    id: 818958,
    title: 'Most Unwanted',
    popularity: 1.307,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/yQQJhH4Q9kJMYAIG9tsmhUeQVZF.jpg',
    genre_ids: [35],
    overview:
      'Two losers try to become criminals to solve their problems. One of them, MC Baboo, struggles to become a rapper but needs street-cred to compensate for his bad rap skills. The other, Sasan, has been dumped, fired and needs quick cash to give his dying dog an expensive surgical procedure. They decide to commit a series of robberies to solve their problems with fast cash and gaining respect on the streets. They soon have both the police and dangerous gangsters at their heels and after accidentally falling into debt to the underworld, they are forced to step up their game to pull off one final, daring heist. They intend to rob a famous comedian to avoid paying with their lives.',
    release_date: '2021-04-30'
  },
  {
    id: 824443,
    title: 'Otacustas',
    popularity: 1.307,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iknhf5A4P18Q9nxFWiWhJKMpb46.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-30'
  },
  {
    id: 821625,
    title: 'There in the Sky',
    popularity: 0.927,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sDmWnn6JU3OK1s1G3YUrQcE9sI9.jpg',
    genre_ids: [99],
    overview: 'Two farmers are stripped, without warning, of a large part of the land they work.',
    release_date: '2021-04-21'
  },
  {
    id: 824444,
    title: 'Childhood',
    popularity: 1.307,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bEHtEgtjb4af19YlYjrdJ6ZXPFH.jpg',
    genre_ids: [],
    overview: 'Memories are like demons. You are always possessed by many.',
    release_date: '2021-04-30'
  },
  {
    id: 824607,
    title: "I'm Wanita",
    popularity: 1.275,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bwjvdzHffbYMrgMirQtkt7fU87u.jpg',
    genre_ids: [],
    overview:
      "I'm Wanita is the story of a renegade country music singer from Tamworth, Australia, hell-bent on realizing her childhood dreams of stardom.",
    release_date: '2021-04-29'
  },
  {
    id: 572827,
    title: 'Lotte and the Lost Dragons',
    popularity: 0.876,
    vote_average: 6.6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/urqV9kHaIGkyYpgjhzqF6uUOKdQ.jpg',
    genre_ids: [16, 10751],
    overview:
      'In this third film of the series of Lotte films that children know and love, the spirited girl dog Lotte gets a little sister named Roosi. Karl the raccoon and Viktor the fish are scientists who come to Gadgetville. They are taking part in a big folk song collecting competition. Whoever succeeds in recording the folk song of the world’s oldest animal species, the mythical fire-breathing dragon, wins the competition’s grand prize. Lotte and Roosi decide to help the scientists. Exciting and unexpected adventures await the sisters.',
    release_date: '2019-01-04'
  },
  {
    id: 798581,
    title: 'Bang Dream! Episode of Roselia I: Promise',
    popularity: 1.013,
    vote_average: 1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rULGBNlBtKkVtTECmLK26gs6xxC.jpg',
    genre_ids: [16, 10402],
    overview:
      'To reach the stage of "FES.", Yukina Minato decides to form a band. Each holding their own convictions, the members of the band come together. The five girls now begin their journey to the top as Roselia... This is the story of their "promise" made to each other, from the start of the band to their challenge towards FUTURE WORLD FES!',
    release_date: '2021-04-23'
  },
  {
    id: 810024,
    title: 'Too Late',
    popularity: 0.821,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iKwRGVVjpHxf77xqSHkBMWvAftX.jpg',
    genre_ids: [35, 27],
    overview:
      'A lonely assistant finally finds love and must escape her monster of a boss before she and her new love become his next meal.',
    release_date: '2021-04-08'
  },
  {
    id: 806762,
    title: 'Impact Wrestling: Hardcore Justice',
    popularity: 0.814,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sjsKKqCVzrQcEoe2XNJ6XX5Fey6.jpg',
    genre_ids: [],
    overview: 'live Saturday April 10',
    release_date: '2021-04-10'
  },
  {
    id: 809616,
    title: 'A Marriage',
    popularity: 1.739,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rapVtmbuoojqZE3A3Cdju0vV14q.jpg',
    genre_ids: [99],
    overview:
      "When Zdenka, a single woman in Czech Republic, started playing online games with strangers, she didn't know it would change her life. Neither did Tabish, a computer scientist a world away in Pakistan.",
    release_date: '2021-04-29'
  },
  {
    id: 816819,
    title: 'Future People: The Family of Donor 5114',
    popularity: 0.942,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oQpDzQ7aAkDGh4oylH9oBschVDZ.jpg',
    genre_ids: [99],
    overview:
      'Filmed over eight years, Rothman follows a group of adolescents who discover that they were conceived from the same sperm donor, forming an unlikely family of familiar strangers. There are presently 37 half-siblings, and counting. This documentary explores the complexities of alternative conception while defining a new realm of modern family.',
    release_date: '2021-04-09'
  },
  {
    id: 728814,
    title: 'The Box',
    popularity: 1.546,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4fQy5OmhJjxWHvuWs731qyydOZ.jpg',
    genre_ids: [10402, 18],
    overview:
      'A drama about a young man aspiring to become a singer and a washed-up former hit producer. The two men head off on a road trip filled with music and jamming sessions.',
    release_date: '2021-03-24'
  },
  {
    id: 823354,
    title: 'The Cinema We Need (Reprise)',
    popularity: 1.182,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5TkMb0Xrj03KtKLAw0VT5U0wdoX.jpg',
    genre_ids: [],
    overview:
      'How to create a truly authentic cinema? Taking as a starting point the classic text The Cinema We Need by Canadian filmmaker and philosopher Bruce Elder, Riccardo Re creates a reprised version of it, fluidly reworking Elder’s complex critical thinking.',
    release_date: '2021-04-28'
  },
  {
    id: 611114,
    title: 'I Met a Girl',
    popularity: 0.987,
    vote_average: 5.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lsh9aUn4FSPl29moszp12LZ4wha.jpg',
    genre_ids: [35, 18, 10749],
    overview:
      'An impulsive musician struggling with schizophrenia falls for a mysterious woman who may be all in his head. When she suddenly vanishes, he takes off on a cross- country journey across Australia to find her, forcing his long-suffering brother to try to rescue him.',
    release_date: '2020-11-26'
  },
  {
    id: 824241,
    title: "River's Day Out!",
    popularity: 1.485,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bUfXWm4QcgxB2h7WqPBta3TtWJU.jpg',
    genre_ids: [35, 10751, 12],
    overview:
      'When a master leaves for work, a dog named River has to decide what to do with her time...',
    release_date: '2021-04-29'
  },
  {
    id: 825886,
    title: 'Los otros de Brunete (Los Otros)',
    popularity: 1.354,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/19fS91ha9cWQ0kZ8PJI4HjVd3uy.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-01'
  },
  {
    id: 813208,
    title: 'Ready O/R Knot',
    popularity: 1.848,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jDu9IA8jUwsrOQkrdVJ7dkrFe.jpg',
    genre_ids: [10749],
    overview: '',
    release_date: '2021-04-01'
  },
  {
    id: 817246,
    title: 'Uthuru Sulanga',
    popularity: 1.235,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9DojA93OVPZ1wVfa4FZLXdw7syR.jpg',
    genre_ids: [10749, 18],
    overview:
      "Uthuru Sulanga unfolds an unknown side of life of a person who seeks refuge in a then boarder village in the dry zone of Sri Lanka. The village has just buried all the memories of the staggering Northern war. He (Sunimal) finds shelter in the house of chieftain of the village 'Ralahami mama' who does not bother about his past but present. Sunimal whilst trying hard to get over his indelible memories of war, faces his second battle of life as he couldn't resist the charm of Yasho, Ralahami mama's daughter. When he loses his battle, the dark shadows of an unforeseen future surrounds him....again. Yet he has to discover himself, his real family and his future.",
    release_date: '2021-04-29'
  },
  {
    id: 824696,
    title: 'Encore No.1 Paradise Omeros',
    popularity: 1.235,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wmTIyt78DlFVBI8A6FFTXnknOlr.jpg',
    genre_ids: [],
    overview: "Isaac Julien's contribution to Documenta Platform6 in memory of Okwui Enwezor.",
    release_date: '2021-04-29'
  },
  {
    id: 824125,
    title: 'La nobleza del vidrio',
    popularity: 1.235,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/68xKOzGGMP8PAamcdM3aGCBhM2X.jpg',
    genre_ids: [],
    overview:
      "And what if I rejoice in my sadness?  I confirm that this darkness is my true light.  They don't let me take care of my loneliness.  I got used to not having shade.",
    release_date: '2021-04-29'
  },
  {
    id: 598225,
    title: 'Adventure Exhibit',
    popularity: 1.235,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/52lNKQFUrFDjWCkRq74rDplDkSz.jpg',
    genre_ids: [12, 10751],
    overview:
      "Pasha is an excellent student who lived to the end of the seventh grade, never having done anything forbidden by adults. But everything changes when his father, a quiet museum worker, suddenly disappears. Pasha goes in search of him in the company of the school's sworn enemy, handsome and sneaky Ilya. The guys are waiting for non-childish adventures, behind them there are two bandits. And in the smartphone - hints from the unknown Captain Geek.",
    release_date: '2021-04-29'
  },
  {
    id: 825225,
    title: "The Story Won't Die",
    popularity: 1.234,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/findpPG1120BE5KYOvdtRBIk8Ij.jpg',
    genre_ids: [99],
    overview:
      'Revolution in exile is an everyday practice for ten artists after fleeing their homeland due to the Syrian uprising. Surviving the largest displacement of refugees in modern history creates a difficult path for those rebuilding their lives, but a rapper, dancer, visual artist, post-rock musician and more choose to express their experiences through their art. Residing in different parts of Europe, these artists reflect on life before and after the war. Rather than staying quiet or trying to forget, they remain uncensored as they use their creativity to resist the Syrian government from abroad. These are their lives and their story will never die.',
    release_date: '2021-04-29'
  },
  {
    id: 827517,
    title: 'Monte Serrat',
    popularity: 1.234,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Monte Serrat is a short film filmed  from the tale Three Lost Treasures,  scored by Machado de Assis.',
    release_date: '2021-04-29'
  },
  {
    id: 823401,
    title: 'The Heart of a Soldier',
    popularity: 1.234,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qX2VefqQBlayE0JALVy8yb9TgQe.jpg',
    genre_ids: [18],
    overview:
      'He was a young writer whose unique gift was vividly revealed in three genres at once. The Yakutians loved him as a talented poet, playwright and prose writer, the author of many works. However, by the will of fate in the fateful year 1941, the poet, who praised a peaceful life, became a fearless soldier who sacrificed his life in battles with the enemy for our salvation. His life flashed like a comet. But, being a warrior of light, he managed to leave behind something important. Waiting for you and me in our days.',
    release_date: '2021-04-29'
  },
  {
    id: 809575,
    title: 'Gaucho Americano',
    popularity: 1.234,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'Known for their ranching abilities and their endurance under extreme weather conditions, both Joaquín and Victor leave their families behind to pursue their dreams of earning enough money to buy land of their own back in Chile.',
    release_date: '2021-04-29'
  },
  {
    id: 806089,
    title: 'The Ritual to Beauty',
    popularity: 1.234,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'The Ritual to Beauty is a mixed media piece integrating the stylization of documentary and spoken word. Inspired by Shenny’s one-woman show “What Happens to Brown Girls Who Never Learn How to Love Themselves Brown?”, this piece invites you to witness the meaning of beauty through three generations of Dominican women. The grandmother, the mother, and the daughter. In learning about the ritual to beauty that was passed down to each woman, there is a pain buried deep in the denial of their blackness. It is only through the secret voice in the water, that the daughter is able to release herself from a pain she’s been holding onto since she was born. By forgiving herself and the women before her, will she finally see just how beautiful she is when she’s free?',
    release_date: '2021-04-29'
  },
  {
    id: 645417,
    title: 'Live or Let Die',
    popularity: 1.679,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fffvRk8xPuLlGYQWCDSXpzDvqok.jpg',
    genre_ids: [],
    overview:
      'A man sets out to find his wife in an apocalyptic world overrun by the living dead, and where the living are just as dangerous and deadly as the relentless living dead.',
    release_date: '2021-04-28'
  },
  {
    id: 616221,
    title: 'Maternal',
    popularity: 0.877,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4go0AbNNOAcBhbdekhPyeWNe9ys.jpg',
    genre_ids: [18],
    overview:
      'Lu and Fati are teen mums living in a religious shelter in Buenos Aires. Sister Paola arrives there to take her final vows. But the girls’ impending motherhood faces her with a challenging situation.',
    release_date: '2019-12-12'
  },
  {
    id: 699136,
    title: 'The Enchanting Phantom',
    popularity: 1.551,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dm3YXPVEskUZHfZT5d3aSaYz0dN.jpg',
    genre_ids: [12, 14],
    overview:
      'A timeless love story of a scholar who falls in love with a female ghost and tries to free her from eternal servitude to a demon. Scholar Ning Cai Chen heads to the capital to take the state examinations. Along the way, he spends the night at Lan Ruo temple where he meets and falls in love with Nie Xiao Qian a ghost who seduces men to absorb their life essence as offering to Lao Lao. After much struggle, Ning Cai Chen and Nie Xiao Qian become a couple, however, Lao Lao plans to marry Nie Xiao Qian off to the Heishan Demon. In his desperation, Ning Cai Chen commissions the help of demon hunter Yan Chi Xia.',
    release_date: '2020-05-01'
  },
  {
    id: 791045,
    title: 'A Trip with Your Wife',
    popularity: 0.772,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bOXEjrG1GwMKMTSczurE58ciw4Y.jpg',
    genre_ids: [35, 10749],
    overview: '',
    release_date: '2021-02-10'
  },
  {
    id: 545071,
    title: '99 Songs',
    popularity: 1.046,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6Dc2zI1n6ppnhV3VfRMmIk5AHgf.jpg',
    genre_ids: [10402, 18, 10749],
    overview:
      "Oscar-winning composer A R Rahman's quest to understand his purpose and passion. To overcome the challenges that stand between him and everything he cares for; to prove himself and the love for his beloved. A journey of heartbreak and redemption, of loss and faith; an ode to the timeless power of love and music.",
    release_date: '2021-04-16'
  },
  {
    id: 432015,
    title: "Bamse and the Witch's Daughter",
    popularity: 1.792,
    vote_average: 7.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8Nxjp6UDqfen4LvbNEfWbXNuIyl.jpg',
    genre_ids: [12, 16, 35, 10751],
    overview:
      "In Bamse and the Witch’s daughter Croesus Vole finds gold in the beavers' dam. To demolish the dam and get the gold he tricks the witch's daughter Lova to enchant Bamse. With Bamse gone, it's up to the children to help each other to stop Croesus - but to do that they have to be friends.",
    release_date: '2016-12-25'
  },
  {
    id: 806643,
    title: 'This Little Love of Mine',
    popularity: 1.468,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gZaXFQkLsyty136SBJJ2PKuTKEb.jpg',
    genre_ids: [10749],
    overview:
      'Laura Price is a successful San Francisco lawyer on the cusp of promotion – a far cry from her childhood growing up on a tropical island with best friends Chip and Gem. When the firm’s biggest client – Chip’s grandfather – asks Laura to travel to the island and deliver a contract to make Chip his heir, she leaves behind her practice and fiancé Owen to convince her childhood friend to sign a contract that will make him a billionaire.',
    release_date: '2021-04-22'
  },
  {
    id: 824771,
    title: 'Nagib Zahi Zarkash',
    popularity: 1.238,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/n2MfxFTStC8RClmvk3pd0S4xFvs.jpg',
    genre_ids: [35, 18],
    overview:
      'The life of the wealthy man Naguib Zahi Zarkash, takes an unexpected turn after he discovers the shocking secret of having a son that he knows nothing about. With the help of his servant, he succeeds in reaching three young men, that his son might be one of them.',
    release_date: '2021-04-13'
  },
  {
    id: 807122,
    title: 'Menina Veneno',
    popularity: 1.086,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/n67EmW6hxjv70OBjJepjblbFjDA.jpg',
    genre_ids: [],
    overview: 'no synopsis',
    release_date: '2021-03-31'
  },
  {
    id: 797787,
    title: 'Man in Love',
    popularity: 1.75,
    vote_average: 7.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uGCv49xmS0AV2GehXkiTSAEg2QH.jpg',
    genre_ids: [10749],
    overview: '',
    release_date: '2021-04-01'
  },
  {
    id: 690576,
    title: 'Krishna Talkies',
    popularity: 0.79,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fCHmYcJZtAQ0gNicqOJGH9Dr1k9.jpg',
    genre_ids: [],
    overview: 'Upcoming Kannada movie starring Krishna Ajai Rao',
    release_date: '2021-04-16'
  },
  {
    id: 821366,
    title: 'Beyond Quiet',
    popularity: 1.17,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lxfxfwLIFZ4joylvygjjPAhLbkX.jpg',
    genre_ids: [99],
    overview:
      'Beyond Quiet is an autobiographical video essay on painting, photography and Super-8 film.',
    release_date: '2021-04-28'
  },
  {
    id: 826109,
    title: 'Tommy B.',
    popularity: 1.169,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-28'
  },
  {
    id: 822307,
    title: 'Awauta',
    popularity: 1.169,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lGIyaKJNmzOnLagyfLyM71ZM820.jpg',
    genre_ids: [18],
    overview:
      'Yumiko abandons her life as a geisha in Tokyo, returning to her provincial hometown. She embraces her freedom, but winds up collapsed on a riverbank. There, she is found by Koji, a bartender. They begin a simple life together, but one day Yumiko is seized by a wild impulse...',
    release_date: '2021-04-28'
  },
  {
    id: 812186,
    title: 'Memória Presença',
    popularity: 1.735,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sjjomCz5T77q2dirxGX2rDp86Kk.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-28'
  },
  {
    id: 824447,
    title: 'Catedral',
    popularity: 1.168,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2Ri8Kvh47OtIsXVLkW8jtngI5ge.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-28'
  },
  {
    id: 783572,
    title: 'The Lodger',
    popularity: 1.728,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [14],
    overview:
      'Julie just started university in Bordeaux. She moves into the house of Elizabeth, an old widow who lends her a room in exchange for her help with daily chores. There’s one condition : acting as if Victor, Elizabeth’s dead husband, was still alive. But soon, Julie starts feeling his presence…and an inescapable and dangerous love triangle begins.',
    release_date: '2021-04-28'
  },
  {
    id: 811549,
    title: 'Chathur Mukham',
    popularity: 1.163,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hLxmgkcJFMe3fAwYmMUtw5gVifx.jpg',
    genre_ids: [27, 53],
    overview:
      'An ambitious young woman faces a supernatural force through technology. Will she be able to survive the onslaught and solve this unheard phenomenon?',
    release_date: '2021-04-08'
  },
  {
    id: 608091,
    title: 'Moscow Does Not Happen',
    popularity: 0.961,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/x5VqRq9NozVRlFCSKQtVzFop0JG.jpg',
    genre_ids: [35, 53, 878],
    overview:
      'An unremarkable Russian town holds some terrible secrets. The simple working guy Lyokha gets acquainted with the beautiful Masha. She shows him photos that he cannot remember. Lyokha goes to see his father, but finds out that the latter died several days ago. The father left lots of mysterious notes, but a local gang and a mysterious visitor from Moscow are after them. You find out everything if you remember!',
    release_date: '2021-04-22'
  },
  {
    id: 823518,
    title: 'Whacked Out',
    popularity: 1.117,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/j71maFqGOGVVVyNX4uRQftrFZLJ.jpg',
    genre_ids: [],
    overview: 'Out of alignment.',
    release_date: '2021-04-27'
  },
  {
    id: 747984,
    title: 'Slate',
    popularity: 1.702,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qGLC6WfKpdxVKhcJrSLvXg3Ko92.jpg',
    genre_ids: [28],
    overview:
      'Since she was a child, Yeon-hee dreamt of becoming an action star. Even though she has an amazing swordsmanship, the reality of reaching her goal is just too hard for her to handle.  One day, she is hired as a stand-in for an action film and goes onto the set, only to be transported to a lawless parallel world where people carry swords and kill each other without any retribution. Almost immediately, she is welcomed to the village as their protector and is respected by the villagers. And to save the villagers as a heroine, she begins to fight the villains back.',
    release_date: '2020-11-01'
  },
  {
    id: 797258,
    title: 'Zerø',
    popularity: 0.96,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lysjmjMIV8qJMwTqGBFNXTOHk64.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-23'
  },
  {
    id: 713301,
    title: 'Life of Ivanna',
    popularity: 0.9,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/c7kMCuDO3cKgYdILqxnD0czzlMD.jpg',
    genre_ids: [99],
    overview:
      'A sensitive and intimate portrait of Ivanna, a nomadic reindeer herder in the Russian Arctic and mother of five small kids. Ivanna is forced to leave the traditional way of life and emigrate to the city, following her own dreams, due to the quickly deteriorating conditions of life in the tundra. We follow her life for several years.',
    release_date: '2021-04-21'
  },
  {
    id: 506593,
    title: 'Weekends',
    popularity: 1.69,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/i5c2QrMnyhIJjnXTNp7UZSia2TJ.jpg',
    genre_ids: [16, 18],
    overview:
      'Set in 1980s Toronto, a young boy shuffles between the homes of his recently divorced parents.',
    release_date: '2021-04-08'
  },
  {
    id: 826406,
    title: 'Son of Cornwall',
    popularity: 1.36,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-27'
  },
  {
    id: 823106,
    title: 'Reflejos',
    popularity: 1.61,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bDNFZ3etZ5X8cfmc8kItHjxe4L.jpg',
    genre_ids: [99],
    overview:
      'Two generations dialogue through the images they filmed of their children, a reflection of the emotional bond that arises from their involvement with what was shot.',
    release_date: '2021-04-27'
  },
  {
    id: 816582,
    title: 'FIDELIO - DIFERIDO SALZBURGO 2015',
    popularity: 1.11,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zwIJivJgbIXBBTDILEoss858vpB.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-27'
  },
  {
    id: 814834,
    title: 'Faith Heist',
    popularity: 0.86,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/v9qGtuLzzee0WC9HHORtFdWZ6R5.jpg',
    genre_ids: [35],
    overview:
      "When a charismatic preacher finds his church in financial ruin after being swindled by a shady financial advisor, he rallies members of his congregation to pull off a heist to get their money back and save the church before it's too late.",
    release_date: '2021-04-04'
  },
  {
    id: 621631,
    title: 'The Art of Incarceration',
    popularity: 1.11,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'A personal insight into three artists and the deeply ingrained incarceration epidemic of Australia’s first people  Debut feature documentary produced, written and directed by Alex Siddons',
    release_date: '2021-04-27'
  },
  {
    id: 584356,
    title: 'Yalda',
    popularity: 1.174,
    vote_average: 6.8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/icr4yFsFkaXNbTNLATAJf88ORAj.jpg',
    genre_ids: [18],
    overview:
      "Maryam accidentally killed her husband Nasser and is sentenced to death. The only person who can save her is Mona, Nasser's daughter. All Mona has to do is appear on a TV show and forgive Maryam. But forgiveness proves difficult when they are forced to relive the past.",
    release_date: '2020-08-27'
  },
  {
    id: 821468,
    title: 'Sete Gatos Para Calígula',
    popularity: 0.865,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'No synopsis',
    release_date: '2021-04-20'
  },
  {
    id: 798751,
    title: 'Sister',
    popularity: 0.69,
    vote_average: 4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tJTyclXSTTyng9WsxWodqK65NgG.jpg',
    genre_ids: [18],
    overview:
      'A girl who has lost her parents due to a tragic car crash is facing the issue of pursuing an independent life of raising her younger brother that she barely likes…',
    release_date: '2021-04-02'
  },
  {
    id: 745980,
    title: 'Louloute',
    popularity: 1.142,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9ULM540EUiBdHILbT4LR8OMv4M9.jpg',
    genre_ids: [18],
    overview:
      "Louise revisits her childhood when her family decides to sell their farm. 20 years ago, she was Louloute, a mischievous and exuberant little girl, helping her father with their farm, fighting with her siblings and worrying her mother… When the family's debts accumulate and overwhelm them, tender childhood moments become intertwined with the harsh adult reality of a disappearing rural world.",
    release_date: '2021-04-21'
  },
  {
    id: 739359,
    title: 'Chords',
    popularity: 0.891,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mghKRSWDX1UnHeOnYucsBJaFWps.jpg',
    genre_ids: [18],
    overview:
      'Bernardo is an old Art History teacher recently retired and widowed from his wife Cecilia. Without a clear path to go on with his life, one day he runs into Víctor, a piano player and long lost love from Bernardo’s past that he hasn’t seen in almost 40 years.',
    release_date: '2021-04-21'
  },
  {
    id: 812392,
    title: "I'm Not Him",
    popularity: 0.841,
    vote_average: 1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fRIlmrlJSKcw607OxekqaCmn4Sv.jpg',
    genre_ids: [],
    overview:
      "Jimmy Valentino has been saved by a miracle - or at least that's what he believes. Given his second chance, Jimmy conveys what he's discovered to other terminally ill patients who, to his astonishment, quickly recover. Jimmy tries to keep his profile and the results of his interventions under the radar but when word spreads, the world converges upon him. A few admire him. Some try to imitate him. Most denounce and disparage what he does as dangerous and sacrilegious. When a patient dies after following what he believes is Jimmy's advice, Jimmy is arrested and prosecuted. With his life in peril once again, Jimmy needs another miracle - one that can't be questioned.",
    release_date: '2021-03-30'
  },
  {
    id: 780736,
    title: 'Truth Comes Out of its Well to Shame Mankind',
    popularity: 0.888,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jEvJNAqgdTDBd2tddeIvfyOQLC1.jpg',
    genre_ids: [9648, 27, 14],
    overview:
      "Natália is a college student who still lives with her parents, in her childhood home. Her estranged older sister arrives for a visit, bringing along infancy memories Natália doesn't recall. Her sleepless nights digging through her archives seem to trigger strange phenomena that might threaten Natália's safety.",
    release_date: '2021-04-21'
  },
  {
    id: 824180,
    title: 'The Haka',
    popularity: 1.059,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: "Based on the classic 'Football at Christmas' with a kiwi spin.",
    release_date: '2021-04-26'
  },
  {
    id: 809872,
    title: 'Villa Angker Lembang',
    popularity: 0.675,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9z0B3dBQw7OFWeCbkVzITm4p0KA.jpg',
    genre_ids: [27],
    overview:
      'Kemal is a young, successful man, he is the owner of a large stock brokerage company and has a small, happy family. He and his wife, Citra planning to build a resort business on an empty land in the city of Lembang, Kemal went to the village around his land, and accidentally met Sujiwo, the villa keeper.  Sujiwo offered him an old resort with several villas and large land inside which the owner had abandoned abroad. The man gave Kemal a good price for the villas compared to if Kemal had to build a new resort on empty land which would have cost more.  Kemal finally decided to buy the villas and intended to renovate them. Kemal, Citra along with Satria (her child), and Nadine (her sister-in-law), they went to the resort for a weekend getaway. Not long after, Kemal and his little family realized that the villas were haunted. They are haunted by creepy figures who lead them to the darkest side of the resort.',
    release_date: '2021-04-08'
  },
  {
    id: 819498,
    title: 'Epílogo',
    popularity: 0.822,
    vote_average: 2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vbhxiVgsMQAQa1dPgruT01AZy2o.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-17'
  },
  {
    id: 819062,
    title: 'The Swim',
    popularity: 0.752,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'If the mind is strong it can take the body anywhere. – Ben Lecomte The Swim is about Ben Lecomte’s unprecedented attempt to survive the 5,500+ mile gauntlet from Japan to San Francisco. His mission – to be the first man to swim across the Pacific and show the world the affect humans are having on our oceans. Ben and his crew faced countless challenges including typhoons, sharks, equipment failure and far more plastic than they ever could have imagined.',
    release_date: '2021-04-15'
  },
  {
    id: 821134,
    title: 'Ласточки Христовы',
    popularity: 1.056,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-26'
  },
  {
    id: 817015,
    title: 'Notifications',
    popularity: 1.056,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hTi9wJpvos9c34ZC0HLnvAKI0Ju.jpg',
    genre_ids: [],
    overview: 'Notifications is Egyptian Short Film',
    release_date: '2021-04-26'
  },
  {
    id: 818664,
    title: 'Kuyang the Movie',
    popularity: 0.859,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/doh9h0XeurFRrwVqYltrtSsC8nJ.jpg',
    genre_ids: [27, 53],
    overview:
      'Kuyang is a nocturnal female spirit in the form of a human head with the contents of the body attached without skin and limbs that can fly looking for the blood of a baby or the blood of a woman who has given birth. This creature is known to the public in Kalimantan. In a village in Kalimantan, a husband and wife whose wife is 7 months pregnant has just moved to the area to start a new life. Everything went normal at first until they were haunted by Kuyang who wanted to take the baby. Will they be able to face the Kuyang or will they even lose the baby.',
    release_date: '2021-04-20'
  },
  {
    id: 575343,
    title: 'Masha',
    popularity: 1.133,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oLxTfDnDDFObCmUx2Ph9wU6r6fK.jpg',
    genre_ids: [18, 80],
    overview:
      'A 13-year-old girl grows up between a boxing ring and the street. Her friends are guys who kill and rob. In the 1990s the whole city hates them, but for Masha they are the best people in the world, who love and protect her. She sings them jazz and dreams of becoming a singer. But one day Masha learns who they actually are and what they have done to her life and family. She matures, leaves the small city for Moscow, trying to break with her past. But one day the past stands directly before her.',
    release_date: '2021-04-01'
  },
  {
    id: 814933,
    title: '1970',
    popularity: 0.858,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/eXLX5F7Jqrr5e8AFVQSJDtLioZs.jpg',
    genre_ids: [99, 16],
    overview:
      '1970. Striking workers demonstrate in communist Poland to oppose price increases. In the offices of the dignitaries, tension and violent repression grew as the revolt intensified. By using stop motion animation to give substance to the telephone recordings, Tomasz Wolski composes a precise and prodigious film.',
    release_date: '2021-04-20'
  },
  {
    id: 678373,
    title: 'The Desert Project',
    popularity: 0.749,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dWKzj2WHZQMUuE5mqWctXljBudA.jpg',
    genre_ids: [35, 53, 878],
    overview:
      "Ida and her friend Rebecca return to Ida's house after a harrowing day in the desert where their film-crew friends vanish. Through some quirk in technology it appears they went back in time where Ida's then 20-year-old father kills a crew member during a fight. Ida takes Rebecca to her father's workshop where they look at an old 16mm black-and-white film that captures the fragments of events from that day... a 35 years ago.",
    release_date: '2021-04-15'
  },
  {
    id: 818238,
    title: 'When Nudes Are Stolen',
    popularity: 0.714,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/q0Xep73JYBEEWFa7df2CzI7nMZu.jpg',
    genre_ids: [],
    overview: 'Former glamour model Jess Davies uncovers the hidden trade in nude photographs.',
    release_date: '2021-04-13'
  },
  {
    id: 816011,
    title: 'B. O. B.',
    popularity: 0.659,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/AmBRglYHvZzTyxeFST7N3D2zTaP.jpg',
    genre_ids: [53],
    overview:
      'Most people live a normal and routine day, repeating the same healthy personal tasks and goals each day, but what if part of your routine is sick of being used day by day by day by day B. O. B.',
    release_date: '2021-04-06'
  },
  {
    id: 803864,
    title: 'Everything at Once',
    popularity: 1.522,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zJBU86O3SedO28JIFdOEuX5eFsD.jpg',
    genre_ids: [99],
    overview:
      'A film essay about a singular couple, Paco and Manolo, two Catalan photographers from the outskirts of Barcelona, who have been together for thirty years. Both have managed to work as a single photographer and have captured their imagery in the Kink magazine, a very personal photography fanzine with an essentially Mediterranean homoerotic aesthetic.\u2028\u2028 Paco and Manolo’s style can be summarised in simplicity, the use of natural light, abandoned places and simple rooms, managing to record the Sex Appeal of the working class, an unprejudiced mix of aesthetics that goes from Caravaggio to Pasolini.',
    release_date: '2021-04-08'
  },
  {
    id: 795838,
    title: 'My Boss is a Serial Killer',
    popularity: 0.649,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/41YdGkVkaOshyIfIw8cOdgbovgx.jpg',
    genre_ids: [35, 9648],
    overview:
      'A group of office workers believe that their boss may have been an insane killer in the past.',
    release_date: '2021-04-01'
  },
  {
    id: 583497,
    title: 'Borderline',
    popularity: 0.745,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aJcZsQ4CDFZda1dnnlxb7QN1Idc.jpg',
    genre_ids: [18, 10749],
    overview:
      'Craving that girl she was never able to replace and seeking inspiration in her presence, or absence, or rather fantasy, a troubled writer embarks on a stormy journey of love, passion and potentially perdition.',
    release_date: '2021-04-15'
  },
  {
    id: 819413,
    title: 'August Never Ends',
    popularity: 1.498,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dyCLhu3eDxnwKFS8ByvTg4VHrBb.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-16'
  },
  {
    id: 814613,
    title: 'The Wrong Path',
    popularity: 1.488,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xy2rfCIbXmqCrQdE5Os0sDNK65g.jpg',
    genre_ids: [53],
    overview:
      "A small town electrician with anger issues gets extreme therapy from a noted Pyschiatrist, Dr. Eric Peselowe, but is soon framed for a robbery and then a murder. Even with the help of Dr. Peselowe's female assistant Bonnie, he soon learns to trust no one but himself and becomes entrapped in a web of deceit, greed and corruption.",
    release_date: '2021-04-06'
  },
  {
    id: 822586,
    title: 'Os Fotocines',
    popularity: 1.008,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cJErRsSsWYvig3IGiwWEtEaXjFq.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-25'
  },
  {
    id: 802194,
    title: 'Downeast',
    popularity: 0.635,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mkCIeyqegkzb5KaKOlokNaThoaA.jpg',
    genre_ids: [18],
    overview:
      'Dives into the often ignored seedy underbelly of Maine and it follows Emma Maddox as she returns to her hometown years following the mysterious death of her brother, Mikey. As she reconnects with his best friend Tommy, the two rekindle their flame and Emma begins to uncover the web of lies the town has been keeping.',
    release_date: '2021-03-31'
  },
  {
    id: 814608,
    title: 'The Belly of the Sea',
    popularity: 1.478,
    vote_average: 4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1cWTIKU8UGWdqprPaoHlCdF6U6l.jpg',
    genre_ids: [18],
    overview:
      'June, 1816. A French navy frigate ran aground on a sandbar off the coast of Senegal. Attempts to free the board were futile - the crew had no choice but to abandon ship. Since the available boats were not enough to accommodate the entire crew, the team built a raft. It accommodated 147 people: soldiers, sailors, several passengers and officers. The plan was for the boats to tow the raft. But the cable broke and the raft drifted into the open sea. For those who were on the raft, a harsh and cruel struggle for life began.',
    release_date: '2021-04-25'
  },
  {
    id: 826694,
    title: 'Shukra',
    popularity: 1.466,
    vote_average: 1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fkqwXMuIO7OEoYrZG0G9IydCb9.jpg',
    genre_ids: [],
    overview:
      'A couple enters a city ruled by cruel thugs but an unsettling affair reopens unexpected twists and creates new tensions for them. Will they stick together through it all?',
    release_date: '2021-04-23'
  },
  {
    id: 796034,
    title: 'Oklahoma Mon Amour',
    popularity: 0.999,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [18],
    overview:
      'Rural United States and modern urban Mexico meet in this tale of restlessness, secrets, and a very promising southward journey to reunite a family ruptured by a brutal tragedy.',
    release_date: '2021-04-24'
  },
  {
    id: 791107,
    title: 'The Adventures of Bandit and Wild Wes',
    popularity: 1.063,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tPzsnZeRt1KFnIbhV63PDMO767E.jpg',
    genre_ids: [37, 35],
    overview:
      'One of 12 Westerns made in 12 Months, this serialized silent western tale follows the crazy adventures of Wild Wes and his four-legged companion as they search for the outlaw Slippery Slim.',
    release_date: '2021-04-01'
  },
  {
    id: 817977,
    title: 'Kral Şakir Cumburlop',
    popularity: 1.434,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dQerGCQVcHsVu1c2VwizUo83UBe.jpg',
    genre_ids: [16],
    overview: '',
    release_date: '2021-04-23'
  },
  {
    id: 747004,
    title: 'Cosmo Life',
    popularity: 0.811,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nM2QFIJWFP9YWnUWVrdsuFEm9Rl.jpg',
    genre_ids: [99],
    overview:
      'A musical retrospective film about the work of Leonid Agutin with legendary musicians, which resulted in a big concert on the Cathedral Square of Havana.',
    release_date: '2021-04-01'
  },
  {
    id: 621746,
    title: 'Zana',
    popularity: 0.619,
    vote_average: 8.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/eQDrZiWXtL0EgBZqhV5XSFFMOZA.jpg',
    genre_ids: [18],
    overview:
      'Haunted by her long-suppressed past and pressured by family to seek treatment from mystical healers for her infertility, a Kosovar woman struggles to reconcile the expectations of motherhood with a legacy of wartime brutality.',
    release_date: '2019-09-21'
  },
  {
    id: 822870,
    title: 'Farewell, My Lad',
    popularity: 0.758,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2T7YZWXbRniDv8YadKv4oztfjRW.jpg',
    genre_ids: [],
    overview:
      'In a small Chinese town some years ago, two childhood friends contend with the harsh realities of a nation drastically transitioning from Socialism to Market Economy. A young boy looking for guidance accidentally gets entangled with local hoodlums. His neighbor and classmate, a decent young girl, tries her best to help him with his studies while staying afloat amid the chaos of modernization herself. They dream of a future where they can both leave the confines of their town, but an unexpected accident redirects their fates to something else entirely.',
    release_date: '2021-04-16'
  },
  {
    id: 571489,
    title: 'Houseguests',
    popularity: 1.442,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ir3tGqCURR51dTBzvZrSQ4NNCVM.jpg',
    genre_ids: [18, 9648],
    overview:
      'A sudden tragedy hits a wealthy middle-class family from North-East Italy. Tensions, hidden secrets and small hypocrisies emerge.',
    release_date: '2020-01-30'
  },
  {
    id: 803959,
    title: 'The Truth Has Changed',
    popularity: 0.801,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fwdEz2celYug7oUfVU8cGpqp74d.jpg',
    genre_ids: [99],
    overview:
      'The Truth Has Changed is a solo monologue which traces the arc of American propaganda and misinformation from 9/11 to Trump from the perspective of the front lines.',
    release_date: '2021-03-31'
  },
  {
    id: 661080,
    title: 'Anugraheethan Antony',
    popularity: 0.809,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8MNVm3Nitdqv4wCRdpBNehR1e2C.jpg',
    genre_ids: [10749],
    overview: '',
    release_date: '2021-04-01'
  },
  {
    id: 823803,
    title: "My Husband's Killer Girlfriend",
    popularity: 0.965,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ibwr9PYfWFYGw2yjE2WzHjM2YIN.jpg',
    genre_ids: [53, 10770],
    overview:
      "When a mother discovers that the nanny who framed her for child neglect is her ex-husband's new girlfriend, she goes on the run to prove her innocence and expose the real culprit.",
    release_date: '2021-04-24'
  },
  {
    id: 742737,
    title: 'Spring Song',
    popularity: 0.901,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kPU0MDnvVPPBvIa0GZnQHtoHLS5.jpg',
    genre_ids: [10402, 12, 18],
    overview:
      'One winter, Yu Jun-sang and Lee Jun-hwa, the two members of a band “J and Joy 20” get on a flight to Japan with an impulse to film a music video. They set off to Japan, without any actors or themes prepared and armed only with an ambitious plan to make a song for spring. As Japanese musical actor Nakagawa Akinori and two Korean actors Kim So-jin and Jung Soon-won gather together, a joyful production of the music video unfolds on a snowfield with Mount Fuji in the background.',
    release_date: '2021-04-21'
  },
  {
    id: 816522,
    title: 'So Foul a Sky',
    popularity: 1.214,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oO5VcfCoYx6WDUkBRRnrxie6Ep.jpg',
    genre_ids: [99],
    overview:
      'If there was an award for the most stylish opening scene, it would go to Álvaro Pulpeiro for ‘So Foul a Sky’. A road movie and a immersive report from a Venezuela on the verge of collapse. Inspired by Joseph Conrad’s classic novel ‘Nostromo’, we are led into a twilight world where allegiances change among the travellers under the enormous dome of the sky. Pirates and pilgrims cross tracks, and oil is traded on the black market in the middle of nowhere. Crackling car radios relay an ideological battle of words. Has the oil cast a curse on Venezuela? The country is in the midst of the worst political and humanitarian crisis that South America has experienced in the 21st century. Instead of trying to explain the chaotic situation, Pulpeiro places us in the middle of it. A sensory and cinematic film, where the oil runs like thick, black blood through the arteries of the road network and connects us with some of the people who are trying to make life work beyond law and order.',
    release_date: '2021-04-24'
  },
  {
    id: 768480,
    title: 'Signal: Long-Term Unsolved Case Investigation The Movie',
    popularity: 0.817,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/crLhxl5jpJIsJKAqyplWlw9pe1e.jpg',
    genre_ids: [9648],
    overview:
      'Story continues from the "Signal" drama series.  In 2021, a limousine taxi driver causes an accident on a highway and a high-level government official dies in the accident. Cold case investigation team, including Kento Saegusa (Kentaro Sakaguchi) and team leader Misaki Sakurai (Michiko Kichise), have doubts about the case.  Meanwhile, in 2009, administrative officers die consecutively in car accidents. The police announce these deaths as accidents. Takeshi Ooyama (Kazuki Kitamura) believes that these deaths were not the product of simple accidents. At 11:23 PM, a walkie-talkie turns on and makes a connection between the future and past. Kento Saegusa and Takeshi Ooyama face the threat of bioterrorism.',
    release_date: '2021-04-02'
  },
  {
    id: 759524,
    title: 'The Story of Southern Islet',
    popularity: 0.817,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lDBaG2swLMRI4WVZLq36VMavu8C.jpg',
    genre_ids: [14, 18, 27],
    overview:
      'Cheong, a Chinese man, falls sick after a row with his neighbour. His wife Yan is desperately looking for a remedy to cure her husband. Throughout the journey, Yan endures strange encounters and unearthly experiences. Finally, Yan is convinced that she should seek help from the village shaman. Mysteries, legends and shamanism surround Yan with unknowns yet to be solved.',
    release_date: '2021-04-02'
  },
  {
    id: 819486,
    title: 'The Shepherd',
    popularity: 0.775,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/c7XCFiKxbA8VLJqOWafKAfAyTO1.jpg',
    genre_ids: [],
    overview:
      'A typical office plankton Leonid living a boring life under a load of daily issues is struggling to finish the annual report for his obnoxious boss when he suddenly gets a chance of getting hold of mighty powers and show the world who the real boss in the town is with a little help from unearthly invaders!',
    release_date: '2021-04-17'
  },
  {
    id: 649794,
    title: '1982',
    popularity: 0.608,
    vote_average: 8.2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dCy5TFgcF2WtIYAv6jsVc0xbis1.jpg',
    genre_ids: [99],
    overview:
      'In 1982, the Argentine military dictatorship invaded the Falkland Islands, located 500 kilometers off the country’s coast. The government left no stone unturned in using propaganda to convince the people of the righteousness of their mission. Consisting almost entirely of excerpts from the TV program 60 minutos, 1982 summarizes the media campaign that took place over the 74 days of war, when Argentine troops tried to take the island back from the British. We watch TV anchormen ask viewers to donate money for weapons, inspire them to sing the national anthem at home, and welcome government leaders as heroes as they “spontaneously” show up at the studio to celebrate the importance of the mission for the fatherland.',
    release_date: '2019-11-12'
  },
  {
    id: 824188,
    title: 'Predestination',
    popularity: 1.417,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'In a post-pandemic world a lonely and introspective drifter searching for a human connection encounters an unloved woman who challenges his dreary perception of relationships.',
    release_date: '2021-04-23'
  },
  {
    id: 823563,
    title: 'Vals & Rumba',
    popularity: 0.93,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iQofL5fGS1VgjnzDWbNocLzEjLu.jpg',
    genre_ids: [16],
    overview: 'A statue that dreams and a very special robot cleaner that works in the museum.',
    release_date: '2021-04-23'
  },
  {
    id: 822084,
    title: '8 Billion Angels',
    popularity: 0.93,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qQFbxV8PXRssMplW1b0lDKHAqdm.jpg',
    genre_ids: [],
    overview:
      "Do we want a world of more people with less or less people with more? Today, humanity's demand for resources vastly exceeds nature's ability to supply them.",
    release_date: '2021-04-23'
  },
  {
    id: 804792,
    title: 'El universo de Clarita',
    popularity: 0.735,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zcarwtzjrLSPP1HrNQ3r1JN4JXG.jpg',
    genre_ids: [99],
    overview:
      'Clarita is 13 years old and lives in Rosario with her parents and sisters. She has an unusual curiosity and a defining passion: astronomy.',
    release_date: '2021-04-15'
  },
  {
    id: 822459,
    title: 'Helvete (Ícaro, Catafestas, Pineais, Sombras & Outras coisas...)',
    popularity: 1.213,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mAFZW7alouIxhU9WwV9ZuF13ji2.jpg',
    genre_ids: [27, 18],
    overview: '',
    release_date: '2021-04-24'
  },
  {
    id: 807095,
    title: 'Oxente, Bixiga!',
    popularity: 0.929,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/e8UPHQ1SBf1X2QFVDI1qvrF4KNw.jpg',
    genre_ids: [],
    overview: 'no synopsis.',
    release_date: '2021-04-23'
  },
  {
    id: 672592,
    title: 'Deceit',
    popularity: 0.93,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1th8OM217m3TFM273KHuWcxRiri.jpg',
    genre_ids: [18, 80],
    overview:
      'Nacho gets involved in organized crime, a war of drug cartels is looming. Nacho must decide if he goes ahead or looks for a way out.',
    release_date: '2021-04-23'
  },
  {
    id: 819926,
    title: 'Hellbox',
    popularity: 0.843,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2w0lNbSCORcd2UqxXDoOrFrxsZP.jpg',
    genre_ids: [27],
    overview:
      'HELLBOX is a paranoid supernatural thriller about a shadowy conspiracy against humanity that stretches across five centuries. It’s told through interweaving storylines in which assorted people (knights from a holy brotherhood, a group of college girls, a suicidal psychiatrist, and a haunted couple with their own dark secrets) see their lives horribly changed when they come into possession of an ancient, mysterious box… Some say it holds a piece of Hell.',
    release_date: '2021-04-20'
  },
  {
    id: 820940,
    title: 'Helldose',
    popularity: 0.897,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/21IxtKTgAjUvGUTlfZo4iuopzxj.jpg',
    genre_ids: [27],
    overview:
      'Helldose is an anthology where the hostess leads her guests to prove five different flavors from the depths of hell.',
    release_date: '2021-04-21'
  },
  {
    id: 820951,
    title: 'Red Hookers - Prologue',
    popularity: 0.897,
    vote_average: 4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hEH5QTS9VnmrTAQEkEWYtMr4tHy.jpg',
    genre_ids: [],
    overview: 'The first steps from Shub-Niggurath presented with text, dance and music.',
    release_date: '2021-04-21'
  },
  {
    id: 810945,
    title: 'Difficulties',
    popularity: 0.6,
    vote_average: 9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2R9IozqXOuZlSb2FReHcPCxsuK5.jpg',
    genre_ids: [16, 18, 35],
    overview: '',
    release_date: '2021-03-22'
  },
  {
    id: 663897,
    title: 'So We Live',
    popularity: 0.926,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/44iXLpvukXa0TQKfFQXs67ubTtd.jpg',
    genre_ids: [18],
    overview:
      'A family living in a country at war spends the night together. Their conversations revolve around the everyday and survival.',
    release_date: '2021-04-23'
  },
  {
    id: 630721,
    title: 'Radio Silence',
    popularity: 0.731,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jZ99b7E5uLlVoBNjSrDz5BshhYx.jpg',
    genre_ids: [99],
    overview:
      'Mexico, March 2015. Carmen Aristegui, incorruptible journalist, has been fired from the radio station where she has worked for years. Supported by more than 18 million listeners, Carmen continues her fight. Her goal: raising awareness and fighting against misinformation. The film tells the story of this quest: difficult and dangerous, but essential to the health of democracy. A story in which resistance becomes a form of survival.',
    release_date: '2021-04-15'
  },
  {
    id: 819356,
    title: 'Black Rose',
    popularity: 0.963,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ii7nSUU8wjac2WO72BrZhtKwJRJ.jpg',
    genre_ids: [53],
    overview:
      'Black Rose is a thriller movie writted by Samapth Nandi and directed by Mohan Bharadwaj. The movie casts Urvashi Rautela in the main lead role. The music scored by Mani Sharma while Srinivasaa Chhitturi produced this movie.',
    release_date: '2021-04-14'
  },
  {
    id: 819082,
    title:
      'Nicaragua, una patria libre para vivir (la insurrección de los nietos de la revolución sandinista)',
    popularity: 0.713,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5IEPf5w2Iw3InD6ntaYX96EQw8k.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-14'
  },
  {
    id: 822067,
    title: 'Pink',
    popularity: 0.925,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/deFOvBiWK4cRuMsCUkxiW4Ojunm.jpg',
    genre_ids: [18, 10749, 10751],
    overview:
      'Elody is realizing that finding love is a gift not to be ignored. Being happy and living without fear is what matters and will make you the person you are destined to be.',
    release_date: '2021-04-23'
  },
  {
    id: 822821,
    title: 'Naaye Paeye',
    popularity: 0.924,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/t4dRdRIOv5LKwJpyZZK7rNaUrvZ.jpg',
    genre_ids: [35, 27],
    overview:
      'Four friends, who kidnap a girl for ransom, get the shock of their life after realising that she is a ghost.',
    release_date: '2021-04-23'
  },
  {
    id: 803410,
    title: 'Agent Mambo: True Pac',
    popularity: 0.73,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iJw16HSczi4efxzAMCwtio59KJ2.jpg',
    genre_ids: [35, 80, 28],
    overview:
      'Dyulus and Afonya are ordinary country guys who love rap and cool cars. During the day they work in the boiler room, in the evenings they record their album and every day they dream of a better life. Especially Afonya, nicknamed Appos, who dreams of dumping into the city, believing that real life is passing by. His comrade Dyulus, nicknamed Trupak, on the contrary, is not eager to leave his native village. But one day, Dyulus receives a letter that radically changes his life and makes him leave for the city, towards fate...',
    release_date: '2021-04-15'
  },
  {
    id: 752622,
    title: 'Curral',
    popularity: 1.23,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fgyuXwaV6tcYhedzjhj1aGNyNFC.jpg',
    genre_ids: [],
    overview:
      "Curral is a political drama set in the rural Brazilian city of Gravatá. During the mayoral elections, the population is divided between the Blue and Red parties, two political oligarchies fighting each other for power. A recent severe drought means water is the main bargaining chip when it comes to securing a majority of people's votes. Chico Caixa is a former city employee. He lost his job trying to take water supplies to a poor neighborhood which had been abandoned for political reasons. Caixa is invited by a childhood partner, Joel, to work on his councilor campaign. Joel presents himself as a new alternative to the older candidates, who have been in power for decades. But as the campaign progresses, Chico Caixa soon realizes that breaking apart from the established political game is not always as easy as it may seem",
    release_date: '2021-04-15'
  },
  {
    id: 818072,
    title: 'The Impalers',
    popularity: 1.4,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sdSypyE0FvaJzFKjTKJe3JRfEsW.jpg',
    genre_ids: [27],
    overview:
      'Alan Kolovsky is pursued in a manhunt between bikers, hitmen and Russian spies that leads us into a bloodthirsty revenge where car chases meet endless shootings and torture. The man is desperate to save his own skin and no one can stop him.',
    release_date: '2021-04-23'
  },
  {
    id: 820378,
    title: 'The Race to Save the World',
    popularity: 0.893,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/j1KinXOiO2c0A9YBaMi8duRqQD5.jpg',
    genre_ids: [],
    overview:
      'The Race To Save The World is a climate change film like no other. Instead of focusing on paralyzing facts and numbers this inspiring feature takes a unique approach by following passionate activists, ages 15-72, who are in the trenches fighting for a livable future. These brave climate warriors put their lives on the line to push for change, regardless of the personal cost. Emmy award-winning filmmaker Joe Gantz brings an urgent and intimate portrait of the protests, arrests, courtroom drama and family turmoil these activists endure as they single mindedly focus their attention on the goal of creating a more sustainable world for future generations. The Race To Save The World is an inspiring and energizing call-to-action to quit waiting on the sidelines and make our voices heard.',
    release_date: '2021-04-22'
  },
  {
    id: 739361,
    title: 'Carrion',
    popularity: 0.924,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pspwwjYYjbU6fvJF7zzF3geSCnT.jpg',
    genre_ids: [],
    overview:
      "Julieta discovers that the reason for her routine is rotting away. The stench of her death drives her to fulfill her mother's last will.",
    release_date: '2021-04-23'
  },
  {
    id: 818237,
    title: 'Stacey Dooley: Back On the Psych Ward',
    popularity: 0.695,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cNjnMtq7s8v8DjOH9fupG5eXrgb.jpg',
    genre_ids: [],
    overview:
      'Stacey Dooley returns to Springfield Hospital to work with the team again, looking after patients over six months as they battle through the pandemic.',
    release_date: '2021-04-13'
  },
  {
    id: 823938,
    title: 'Inner Freedom',
    popularity: 0.924,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/npMjDmOM9hj9JeyHaV0vd3yZmsy.jpg',
    genre_ids: [99],
    overview: 'A man tries to get a group of young people trapped in drugs out through philosophy.',
    release_date: '2021-04-23'
  },
  {
    id: 823566,
    title: 'Out of Breath',
    popularity: 0.924,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/q768KgppU20xgKoMqDILkvccAOH.jpg',
    genre_ids: [18, 35],
    overview: 'Sometimes a friendship is all you need to get through the toughest moments.',
    release_date: '2021-04-23'
  },
  {
    id: 823568,
    title: 'Ignition',
    popularity: 0.923,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oCLHud63nerq5PA1Z9nL1lsjUnz.jpg',
    genre_ids: [18],
    overview:
      'In the midst of a climate of political repression, Ernesto is a student who believes that the "revolution" will only begin if there is a martyr for the cause; Isaac, his best friend and his student leader, seems like the ideal candidate.',
    release_date: '2021-04-23'
  },
  {
    id: 822030,
    title: '75 Degrees West',
    popularity: 0.923,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [18],
    overview:
      'An epic tale of survival as two brothers journey across the American countryside after the fall of civilization. The brothers survive on what they can find as they travel towards 75 Degrees West, avoiding dangers along the way.',
    release_date: '2021-04-23'
  },
  {
    id: 821346,
    title: 'Lagoon Puzzle',
    popularity: 0.892,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'No Synopsis',
    release_date: '2021-04-22'
  },
  {
    id: 815932,
    title: 'Pulau Plastik',
    popularity: 0.892,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fam6NTkK5UTDrwXxngCm47lNXpW.jpg',
    genre_ids: [99],
    overview:
      'Gede Robi, vocalist of Navicula, Tiza Mafira, lawyer from Jakarta & Prigi Arisandi, biologist & river guard from East Java in tracing plastic waste whose tracks have infiltrated the food chain & its impact on human health.',
    release_date: '2021-04-22'
  },
  {
    id: 823944,
    title: 'The Tree',
    popularity: 0.923,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gSA5IKqowJnzh4L69LCPNKvfU1F.jpg',
    genre_ids: [18],
    overview:
      'José, a homeless person who collects garbage, discovers the value of the family tradition of putting together the Christmas tree.',
    release_date: '2021-04-23'
  },
  {
    id: 823941,
    title: 'Recycling',
    popularity: 0.923,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7FUrD4gTx8ZS2ftQPQrhIL82sAT.jpg',
    genre_ids: [18],
    overview:
      'As the gravedigger prepares for the next funeral, each time he digs a hole he wonders about his own death.',
    release_date: '2021-04-23'
  },
  {
    id: 823936,
    title: 'Mezquite',
    popularity: 0.923,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jtlRpwDQMWP9QCs4ltbLvMNly37.jpg',
    genre_ids: [99],
    overview:
      'Mezquite is a large tree with many virtues and is in danger due to the neglect that has been had with its species in recent years.',
    release_date: '2021-04-23'
  },
  {
    id: 823930,
    title: 'Tremor',
    popularity: 0.923,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qoR8sQlFlO1u9ChnTRNu3Grbn6O.jpg',
    genre_ids: [99],
    overview:
      'The anguish a woman experienced on the night of September 7, 2017, caused by the 8.2 magnitude earthquake that struck southern Mexico and the danger of another impending disaster.',
    release_date: '2021-04-23'
  },
  {
    id: 821101,
    title: 'Entidade Persona',
    popularity: 0.863,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'No synopsis',
    release_date: '2021-04-21'
  },
  {
    id: 725133,
    title: 'Gump – pes, který naučil lidi žít',
    popularity: 0.889,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oWAGK5QpRmaHHMcZ1DNcNuD8ASD.jpg',
    genre_ids: [10751, 12],
    overview: '',
    release_date: '2021-04-22'
  },
  {
    id: 813757,
    title: 'Level 3',
    popularity: 0.608,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/l5BktPxOclS2DukTz5yLhAHor2D.jpg',
    genre_ids: [18, 53],
    overview:
      'An unconventional and provocative psychotherapist uses confrontational methods to guide his patients to see the truth about themselves. But things take a turn for the worse when he is unable to help his most troubled patient.',
    release_date: '2021-04-07'
  },
  {
    id: 812666,
    title: "This Game's Called Murder",
    popularity: 0.608,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3ctTZTiA1uy6ycEjAV3urjE3AYG.jpg',
    genre_ids: [53, 35],
    overview:
      'A modern, dark-humored tale of greed, romance, and lost innocence in consumer-crazed, alienated society that functions as a harsh critique of society today without taking itself too seriously.',
    release_date: '2021-04-07'
  },
  {
    id: 809168,
    title: 'Raising a School Shooter',
    popularity: 0.859,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rbDa53bzBjMpkDGc46tuNnRyQQV.jpg',
    genre_ids: [99],
    overview:
      'Three parents of American youngsters who committed school shootings speak their minds in a film that tries to put an unimaginable trauma into words.',
    release_date: '2021-04-21'
  },
  {
    id: 822367,
    title: 'Benamor',
    popularity: 1.136,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9JXtS7xbj89IpWjq8rInYhR4YPX.jpg',
    genre_ids: [10402],
    overview:
      "Considered the greatest musical success of Pablo Luna's career, this operetta was released at the end of 1923 in El Teatro de la Zarzuela. Many consider it the best of his compositions, bolstered by an inspired and amusing libretto. After its premiere, it went on to be produced in Cuba, Mexico and continued its life cycle on stage until the 1950s.",
    release_date: '2021-04-22'
  },
  {
    id: 821345,
    title: 'Reversão',
    popularity: 0.857,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'No synopsis',
    release_date: '2021-04-21'
  },
  {
    id: 812372,
    title: 'To Which We Belong',
    popularity: 1.358,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Years of industrialized agriculture have brought the world to the brink of climate disaster. To Which We Belong follows a new generation of farmers and ranchers who seek to rebuild their businesses and their planet by embracing the interconnectedness of living things.  To Which We Belong tells the stories of nine farms and ranches going against the grain to bravely leave behind practices that are no longer profitable or sustainable. These unsung heroes just might save their livelihoods – and our world itself. And in this time of turmoil, it might be the best news you receive all year.',
    release_date: '2021-04-21'
  },
  {
    id: 743400,
    title: 'Undone',
    popularity: 0.973,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/eZbxyyRtuorZ4LAOR7Eea5CzWDU.jpg',
    genre_ids: [99],
    overview:
      'It is a remarkable story of personal endeavour following professional surfer, Laura Enever who leaves a comfortable place on the WSL Championship Tour to explore the unpredictable world of big-wave surfing.',
    release_date: '2021-04-15'
  },
  {
    id: 814490,
    title: 'Within',
    popularity: 0.886,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'The film unfolds in Geneva, in the district around the Vernets barracks. It delves into the spaces of life and the encounters with its inhabitants. These domestic chronicles evolve between the military barracks at the edge of the blocks of flats and the insane asylum which had occupied the space in the past. Through these chronicles and the history of the place, the question arises for each spectator: what, then, is my place within?',
    release_date: '2021-04-22'
  },
  {
    id: 821098,
    title: 'Canonização',
    popularity: 0.885,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'No synopsis',
    release_date: '2021-04-22'
  },
  {
    id: 821096,
    title: 'Vaga',
    popularity: 0.885,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'No synopsis',
    release_date: '2021-04-22'
  },
  {
    id: 820961,
    title: 'Ao Toque do Telefone...',
    popularity: 0.886,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wQE7K7kJ1ik8Q3gCLjuedlpePiA.jpg',
    genre_ids: [80],
    overview: '',
    release_date: '2021-04-21'
  },
  {
    id: 819251,
    title: 'Trailer Trauma at the Drive-In',
    popularity: 0.829,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ihzfScFLr8PBKzKV88PJ74dPqOn.jpg',
    genre_ids: [],
    overview:
      '60 hours of incredible horror, sci-fi, action, exploitation, martial arts and blaxploitation feature films edited down to the craziest, most mind-blowing 150 minutes you will clap your eyes on at the drive-in. Screened exclusively at the Mahoning Drive-In Theater on 35mm and containing trailers never before seen on any previous Trailer Trauma installments!',
    release_date: '2021-04-20'
  },
  {
    id: 716395,
    title: 'Kakababur Protyaborton',
    popularity: 0.827,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ierK8fHDafmQsPOyHlrfYYL00l8.jpg',
    genre_ids: [12, 18],
    overview:
      "A famous hotel in Nairobi is about to close. People don't go to that hotel like before.Kakababu and Santu go to the hotel to find out the reason.",
    release_date: '2021-04-20'
  },
  {
    id: 761344,
    title: 'Over the Town',
    popularity: 1.127,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/x9cHIcGqUm2rpOGxOL5T0loAjEl.jpg',
    genre_ids: [],
    overview:
      'Arakawa Ao (Wakaba Ryuya) lives happily on his own and hardly ever leaves Shimokitazawa, where he works at a vintage clothing shop, goes to occasional concerts and hangs out at his favorite bar. Then, he gets an unusual request to appear in an independent film.',
    release_date: '2021-04-09'
  },
  {
    id: 821618,
    title: 'Heart of Maguey',
    popularity: 0.853,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/855jF3vRHoqpd73TdYKrFrLUevP.jpg',
    genre_ids: [99],
    overview:
      'Miguel has been dedicating himself to the pulque craft for more than 25 years, however an addiction to drinking almost ends his life.',
    release_date: '2021-04-21'
  },
  {
    id: 821357,
    title: 'Queens vs Zombies From Outer Space',
    popularity: 1.103,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4ucevZX0vt7eAvlUGoosU6FJ1u8.jpg',
    genre_ids: [],
    overview:
      'At a wedding party, while the queens get into a mess, a contagion comes from an alien from outer space. Queens need to unite against this new and real enemy, but never forgetting to touch up lipstick.',
    release_date: '2021-04-21'
  },
  {
    id: 819709,
    title: 'Screen Glare',
    popularity: 0.853,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iPU2WrAzRSBoLMH04GWncliRcmg.jpg',
    genre_ids: [],
    overview:
      'A text, some images, and an unstable arrangement of durations to which one can devote a fluctuating form of attention.',
    release_date: '2021-04-21'
  },
  {
    id: 821100,
    title: 'Beck 137',
    popularity: 0.856,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/59ukHH0lN9o6gZ81W65FhQLTOHk.jpg',
    genre_ids: [],
    overview: 'No synopsis',
    release_date: '2021-04-20'
  },
  {
    id: 821526,
    title: 'Quinto dos Infernos',
    popularity: 0.856,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vfCoR1vXtFHbbvSBeWAtFhY8by3.jpg',
    genre_ids: [35],
    overview:
      'In Brazil, even hell is a mess! Everything you ever wanted to know about hellish bureaucracy and corporate demonic meetings.',
    release_date: '2021-04-20'
  },
  {
    id: 821371,
    title: 'A (possible) trip around the world in Super 8',
    popularity: 0.852,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ud0pDHzltAAwGEkOSvvzFzJ17vf.jpg',
    genre_ids: [],
    overview: 'A video essay on Super 8 filmmaking.',
    release_date: '2021-04-21'
  },
  {
    id: 821211,
    title: 'A Constellation of 6 Super 8 Films',
    popularity: 0.852,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aK4KZVD8nxKBkLcUu4tCPdfG0Cp.jpg',
    genre_ids: [],
    overview:
      'A constellation of 6 super 8 films made by Helga Fanderl for "UNA (POSIBLE) VUELTA AL MUNDO EN SUPER 8" online program (2021).',
    release_date: '2021-04-21'
  },
  {
    id: 820828,
    title: 'Macchina Infinita',
    popularity: 0.851,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8LbjvtMHhaxkGPy3Z7OvTsj0jop.jpg',
    genre_ids: [99],
    overview:
      'During a workshop, the LABA students together with Giulia Mazzone and Giuseppe Spina discover the collection of cinema machines kept by the Museo dell’Industria del Lavoro in Brescia. This visit becomes the leitmotif of a series of thoughts on technological development and on the imaginary of the infinite machine.',
    release_date: '2021-04-21'
  },
  {
    id: 820390,
    title: 'The Urchin Diver',
    popularity: 0.852,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/yhGp9efA4j3TH6Jm3Lonjx4Dx3L.jpg',
    genre_ids: [99],
    overview:
      'Conner Rhoads and his family have made a living off of the sea for over 40 years, but with the collapse of the kelp forest in California, their living and way of life may never be the same again.',
    release_date: '2021-04-21'
  },
  {
    id: 808750,
    title: 'Raw! Uncut! Video!',
    popularity: 1.361,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/o7RoxGgyyeWh2n4VsPGM2OAuVNQ.jpg',
    genre_ids: [99],
    overview:
      'RAW! UNCUT! VIDEO! chronicles the rise and fall of homegrown gay porn studio Palm Drive Video, and explores how a devoted couple helped battle a devastating health crisis by promoting kinky sex.',
    release_date: '2021-04-08'
  },
  {
    id: 812064,
    title: "People Presents: Harry & Meghan's American Dream",
    popularity: 0.771,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/waWGnF32zAL5Ycq10M1Tgn4ul2r.jpg',
    genre_ids: [10770],
    overview:
      'The one-hour special will focus on "Prince Harry and Meghan Markle‘s" exit from royal life, a move that shocked the globe. Picking up a year after their decision, Harry & Meghan’s American Dream" examines the couple’s life in America. This will include everything from their multi-million-dollar streaming deals to the life they’re building with their son, Archie, in California.',
    release_date: '2021-03-30'
  },
  {
    id: 793823,
    title: 'Das Glaszimmer',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/llHpOF4LsBKCrTuIajzfyhr2jSU.jpg',
    genre_ids: [18, 10752],
    overview:
      'Shortly before the end of the Second World War, Anna and her eleven-year-old son Felix seek refuge in the countryside, where a strict Nazi regiment also prevails. In contrast to his mother, Felix slowly succumbs to right-wing propaganda.',
    release_date: '2020-01-01'
  },
  {
    id: 712121,
    title: 'Sweat',
    popularity: 0.86,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oeAGbCZ77zVfJAHhhsWfGewKle6.jpg',
    genre_ids: [18],
    overview:
      'Three days in the life of fitness motivator Sylwia Zając, whose presence on social media has made her a celebrity. Although she has hundreds of thousands of followers, is surrounded by loyal employees and admired by acquaintances, she is looking for true intimacy.',
    release_date: '2020-09-14'
  },
  {
    id: 816710,
    title: 'Joker Vs Droogs',
    popularity: 0.821,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jlQ9eLsm0rtKCmJzUpEmb7WbCvj.jpg',
    genre_ids: [28, 35, 37, 18, 10751],
    overview:
      'A deep and thought provoking film with deeply religious undertones where Joker fights the Droogs',
    release_date: '2021-04-20'
  },
  {
    id: 810109,
    title: 'American Wildlife',
    popularity: 0.62,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'At a wildlife rehabilitation center in the Pacific Northwest, the steady, practiced, and gentle hands of veterinarians nurse dozens of convalescing animals back to health.',
    release_date: '2021-04-09'
  },
  {
    id: 821472,
    title: 'Como Nenhuma Inteligência Já Amou',
    popularity: 0.821,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'No Synopsis',
    release_date: '2021-04-20'
  },
  {
    id: 785924,
    title: 'Walk the Tideline',
    popularity: 0.621,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/w2cjIDYoXtaLQ4MeKbufadJHJQW.jpg',
    genre_ids: [99],
    overview:
      'The movie follows today’s beachcombers in Great Britain, the Netherlands, and Japan. The same endless piles of trash left by humans cover all the shores. Our shared ocean is loaded with time travelers made of plastic, the fruit of our throwaway culture and our indifference. They are the seeds of destruction, as they end up in the entrails of creatures living in the sea. Most of the beachcombers share the same worries about the environment. Beside the plastic trash, many travelers drift between continents, such as various plants’ seeds. Like all species, they look for new living environments where they could survive on a warming planet.',
    release_date: '2021-04-09'
  },
  {
    id: 734624,
    title: 'Emily and the Magical Journey',
    popularity: 1.4,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wZNaFydEFmPs0vhRTveKz7AaY2r.jpg',
    genre_ids: [10751, 14],
    overview:
      'Emily and her mother live alone after losing her father. She wants to help her mother find happiness and to learn about the father she never knew. When Emily finds a mysterious chest that transports her to a magical world, she meets fantastic and mythical creatures that become her new friends. After discovering her new friends are in danger, Emily must face her worst fear to complete her journey.',
    release_date: '2021-03-18'
  },
  {
    id: 824440,
    title: 'Lombardo',
    popularity: 0.82,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rXiwTbALdxCefAi5xitMAsEgdmm.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-20'
  },
  {
    id: 816481,
    title: "A L'ombre D'un Homme",
    popularity: 0.618,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7oYTuF3FZTkxyZ8pHVoHGdeQbpP.jpg',
    genre_ids: [14],
    overview:
      "Eugène avoided life's surprises at all costs, preparing for any scenario. However, one day something unpredictable happened.",
    release_date: '2021-04-09'
  },
  {
    id: 705991,
    title: 'DUST-MAN',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1pZneMewBovUJoE6WLwk7Ije4rw.jpg',
    genre_ids: [18],
    overview:
      'Taysan, a young homeless man in dust-riddled Seoul, begins a series of illustrations over dusty surfaces. Through his Dust Art, Taysan starts the process of recovery from the pains of his past.',
    release_date: '2021-04-07'
  },
  {
    id: 822644,
    title: 'Los aislados',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zLcjiL4QTJ9UqjUw84bYily6lEo.jpg',
    genre_ids: [],
    overview:
      'He does not love her with the intensity that she desires, but he continues to occupy her heart, excluding and isolating any other love. While he is tricking people into loving him, and then he hates them for being fooled.',
    release_date: '2021-04-06'
  },
  {
    id: 812183,
    title: 'Freddie Mercury: A Life in Ten Pictures',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Freddie Mercury’s image is known around the world. He was one of the most photographed men in history. But could just a handful of photos uncover new truths about someone we think we all know? This documentary throws a unique lens onto an extraordinary life, focusing on ten defining pictures – from iconic shots to private snaps – with their secrets revealed by those who were there and those who knew Freddie Mercury best.',
    release_date: '2021-04-03'
  },
  {
    id: 679912,
    title: 'Implosión',
    popularity: 0.605,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/auBTpl0ffi4NvYR4QLYBQkqUeUw.jpg',
    genre_ids: [18],
    overview:
      'Two friends embark on a investigation to find the classmate who, fifteen years ago, unleashed a massacre at their institute.',
    release_date: '2021-04-08'
  },
  {
    id: 818739,
    title: 'The Revolution Generation',
    popularity: 0.855,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'This documentary is a manifesto for today’s youth, addressing the societal forces that have shaped and held back their generation. It shows how young people can deploy their strengths to revolutionize the system as they confront both the US political crisis and the global environmental crisis.',
    release_date: '2021-04-08'
  },
  {
    id: 718087,
    title: 'Last Days of Spring',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fHaLHYFd9DAIm57CNwktbr5iLCd.jpg',
    genre_ids: [18],
    overview:
      'The Spanish family Gabarre-Mendoza is celebrating a birthday, when it is interrupted by a police inspection. In ‘La Cañada Real’, a shanty town just outside Madrid, the inhabitants are forced to leave their illegal homes. Each member of the family struggles in their own way with their unstable position.',
    release_date: '2021-03-31'
  },
  {
    id: 803851,
    title: 'Leading Ladies',
    popularity: 0.854,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8XULKLPmQFHGTmJORwLXuBhdFLy.jpg',
    genre_ids: [35, 18],
    overview:
      'Leading Ladies reflects how guilt affects us in different ways based on our perspective or memories. A welcome dinner is the excuse to discover that we always keep a secret from who know us the best. Five points of view that show us that each of these five girls tries, as best they can, to lead their own lives. Some lies have been saved for years, other where hidden for months… But many of them will come to light during this special meeting.',
    release_date: '2021-04-08'
  },
  {
    id: 820430,
    title: 'Stokkeruten',
    popularity: 0.792,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sRwn0PniXxbST2LmGJcePeawZv.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-19'
  },
  {
    id: 819357,
    title: 'The Flapper',
    popularity: 0.604,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'The buoyant energy of a modern woman who bobs her hair and dances to jazz is too often objectified and repressed by a figure like that of Robert Mitchum from Night of the Hunter.',
    release_date: '2021-04-08'
  },
  {
    id: 816368,
    title: 'lov(N)er',
    popularity: 0.739,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xfdzA8WeK0VZR3hAjtasgK0JU4s.jpg',
    genre_ids: [18, 10749],
    overview:
      '"lov(N)er" is a short silent film written and directed by David Arevalo. this is a short piece about love and loneliness.',
    release_date: '2021-04-15'
  },
  {
    id: 820222,
    title: 'I Am Fine',
    popularity: 0.798,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2hA4xH0vBSmnvk5bIr81uvBfqON.jpg',
    genre_ids: [18],
    overview:
      'This film follows a young man named Henry after the death of his girlfriend. Henry struggles to suppress his emotions in a society that looks down upon emotional men. Desperate for the catharsis of releasing his emotions, he buys a magic mirror in the hopes to get in touch with his more emotional side.',
    release_date: '2021-04-18'
  },
  {
    id: 824977,
    title: 'The Hatters Jubilee Concert: Live at the Litsedei Theater, St. Petersburg',
    popularity: 0.791,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5a3AtvsjSW7NZnqcvkJ1TkammmC.jpg',
    genre_ids: [10402, 99],
    overview:
      'A big concert dedicated to the 5th anniversary of The Hatters at the Litsedei theater on February 10th, 2021.',
    release_date: '2021-04-19'
  },
  {
    id: 823084,
    title: 'the past',
    popularity: 0.79,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3UzG4s0scvV6M5uoPz0THTXhSMq.jpg',
    genre_ids: [],
    overview:
      'Two people mourn an unsaid tragedy in this silent play in cinematic narrativity and melodrama, telling an elegiac tale in portraiture.',
    release_date: '2021-04-19'
  },
  {
    id: 823083,
    title: 'Misery Next Time',
    popularity: 1.04,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/Ao0CZKdWLprTPsI4slSSaZ5SzeS.jpg',
    genre_ids: [],
    overview:
      'This associative stream of visuals, culled from the past, reflect on the roles of art, labor, and journalism in contemporary Sri Lanka, facing a dubious future ahead. Memory and ethnographic deconstruction cascade in an obliterated form, forging a dire and prescient assemblage.',
    release_date: '2021-04-19'
  },
  {
    id: 823080,
    title: 'Show Me Other Places',
    popularity: 0.79,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/eWKmrRlrzpzdByrfiVZFKsLOPAd.jpg',
    genre_ids: [],
    overview:
      'At the center of this film is a Sri Lankan woman accessing other places in digital form, while situated in her own physical reality. Navigating through a multitude of spaces from the natural world to man-made environments as well as virtual planes, traditional relationships between the creator, the tool, and the subject are questioned, shattered and reconstructed. Reflecting on my own practice as a filmmaker working in non-fiction, the film takes a collage-like approach to examining issues around representation, verisimilitude, the ethnographic image, and the limitations of the form itself. Shot on seven different cameras (and a video synthesizer) on both film and video over the course of a decade in Sri Lanka, China, and the United States, I delve into some of my fundamental curiosities as a filmmaker.',
    release_date: '2021-04-19'
  },
  {
    id: 728132,
    title: 'The Third War',
    popularity: 0.6,
    vote_average: 7.1,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6CRqAEPuuVYOS9GZD2cwoQlEbCv.jpg',
    genre_ids: [80, 10752],
    overview:
      'Fresh out of basic training, Leo lands his first assignment: a surveillance operation that sees him roaming the streets of Paris with nothing to do other than remain alert for potential threats. Given the task of securing the borders of a massive anti-government demonstration, Leo finds himself plunged into the heart of a raging crowd. All the pressure and impotent fury that has built up over weeks is about to explode...',
    release_date: '2020-09-06'
  },
  {
    id: 797261,
    title: 'Dawns in Calcutta',
    popularity: 1.225,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-16'
  },
  {
    id: 791570,
    title: 'Suicide Forest Village',
    popularity: 0.6,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lm6yBPIraQtBvvvaUcWFB2yFXWz.jpg',
    genre_ids: [27, 9648, 18],
    overview:
      "One day a mysterious box arrived and a curse began to spread all over. The source of the box is 'Jukai Village'. The village is hidden in Jukai Forest, a suicide spot that once you enter it, you can never come out.",
    release_date: '2021-02-05'
  },
  {
    id: 814952,
    title: 'Kuriyan Jawan Bapu Preshaan',
    popularity: 1.4,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/g682EwEzJbl1nF3Rj0TvksEGx4e.jpg',
    genre_ids: [35, 18],
    overview:
      'Fatherhood is a massive responsibility, however being a girl’s father is still worry able thing in society. People around that particular person always insecure him about his daughter’s marriage, security, so on. Our story is like same person, who is surrounded by such kind of character, who always divert our main character’s (father) thoughts, to doubt on his own daughter and reminds inequality factor of girls. But daughters prove everyone wrong and show that girls are not less than anyone. They are more capable than boys in society. The whole journey of father and daughter’s relationship shown in this movie, which will eventually show that, in present time women are not less than men.',
    release_date: '2021-04-16'
  },
  {
    id: 785314,
    title: 'Spinning Into The Void',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1cVzhPNGT5iEUdeGpP6HMWzXyuR.jpg',
    genre_ids: [],
    overview: 'A Man Spins And Spins And Spins, The Void Awaits Him',
    release_date: '2021-04-05'
  },
  {
    id: 588772,
    title: 'Ark at 8',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vL50VmnJS9PMeMWQqPVG6IbMWBM.jpg',
    genre_ids: [12, 16, 35, 10751],
    overview:
      'Inspired by Noah’s Ark, three penguins attempt to board the historical ship when they discover that only two creatures from each species are allowed.',
    release_date: '2021-04-02'
  },
  {
    id: 819485,
    title: 'The Creator',
    popularity: 0.743,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2cVRVFTLiZbGxjTcsxnjFoJkn0K.jpg',
    genre_ids: [],
    overview:
      'The scientist creating and training androids to be perfect in different skills: fighting, athletics, dancing, and. - painting. All droids improving themselves day by day, but an artistic one is standing where she was - Will Creator erase his work or leave her a chance?',
    release_date: '2021-04-17'
  },
  {
    id: 819727,
    title: 'Rifle Ganj',
    popularity: 0.734,
    vote_average: 3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iP1wDfUfcHX7b8de0kl8VP6SwKy.jpg',
    genre_ids: [80, 18],
    overview:
      "A young talented Engineer & Civil Services topper, Chandar turns into a naxal commander when the abuse of power and politics result in his sister's kidnapping and death of his much respected grandfather.",
    release_date: '2021-04-15'
  },
  {
    id: 823615,
    title: 'London Grammar: Californian Soil - The Live Show',
    popularity: 0.763,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'London Grammar: Californian Soil - The Live Show',
    release_date: '2021-04-18'
  },
  {
    id: 822571,
    title: 'Hannelore Elsner - More Than One Life',
    popularity: 0.763,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-18'
  },
  {
    id: 751519,
    title: 'God of the Cinema',
    popularity: 0.972,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gRNYoaqSzmaaGIBIYZ5XdBF8ETn.jpg',
    genre_ids: [],
    overview:
      'The story centers on a man (Suda Masaki) who loves movies, work at movie studio in pursuit of his dreams, surrounded by great directors and star actors. He and his friend fall in love with the daughter or cafeteria played by Nagano Mei.',
    release_date: '2021-04-16'
  },
  {
    id: 812326,
    title: 'Tomorrow Will Be Fine',
    popularity: 0.6,
    vote_average: 2,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jN0rfHQEbmzwTEc4hcrv2Wujksp.jpg',
    genre_ids: [10749, 35],
    overview: '',
    release_date: '2021-04-02'
  },
  {
    id: 820374,
    title: 'Pinbox',
    popularity: 0.763,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/icZI9CE23yh7korlME4004k6ld9.jpg',
    genre_ids: [18, 9648],
    overview:
      "Socially out of touch Eddie is obsessed with old school pinball. When he's not hammering away at the tables in his local dive bar, he's fantasizing about 1970s pinball champs and working as a repair man. After discovering a mysterious old pinball table, Eddie starts a quest to repair it and learn of the game's origins. But aside from Eddie, the only other person who seems to have any knowledge of the game is an old timer named Emmett. As his focus deepens and his desire to fix the machine turns into paranoid obsession, he seeks out the help of his sister Liv to uncover the game's secrets. Is this the greatest game ever made? Will Eddie's paranoia prevent him from fulfilling his destiny? If you're good enough, can you really play one game of pinball forever?",
    release_date: '2021-04-18'
  },
  {
    id: 818871,
    title: 'Kho Kho',
    popularity: 0.971,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zyr51Gnzf2gKD84Uan8Q8SfTsWx.jpg',
    genre_ids: [18],
    overview:
      'In a state where we grew up admiring how coach Nambiar and his protégé Usha brought back athletic glory in truckloads, Kho Kho is a highly relatable tale of a talented athlete transferring her spark of desire onto the next generation.',
    release_date: '2021-04-16'
  },
  {
    id: 764425,
    title: 'Whale Island',
    popularity: 0.6,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nZ3r2gP3sJvIultWA46RJ3FWqJ9.jpg',
    genre_ids: [99],
    overview:
      'Taiwan is an island country. Although it is surrounded by the sea, its people fear the sea since the politics, the history and the religious beliefs held on this island make people turn their backs to the sea. Oceanic literature author Liao Hung-chi and underwater photographer Ray Chin lead the audience out to the sea and into the water. They prompt us to understand the sea and to think about the possibility that the ocean might become our lives and the future of our country.',
    release_date: '2021-04-01'
  },
  {
    id: 808184,
    title: 'The Last Showing',
    popularity: 0.99,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4hs36gLGNKdoZyuCmHZWs72BLgH.jpg',
    genre_ids: [18],
    overview:
      "Near future. The popularity of streaming services is forcing cinemas to close one by one. Only Daria, an old-fashioned movie fa, is ready to save theaters and prove her dedication to cinema, even if the most precious thing is to be given in return. It doesn't matter who gets in her way - the ticket for The Last Showing has already been bought.",
    release_date: '2021-03-28'
  },
  {
    id: 814210,
    title: 'El abismo libio',
    popularity: 0.773,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hr27pOdO1Od47pNLelsl8Yhh0V.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-01'
  },
  {
    id: 817396,
    title: 'Today',
    popularity: 0.97,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ApQcTU8X0m2hQl3AHmNXf87JM9a.jpg',
    genre_ids: [],
    overview:
      'After three years abroad, Felix returns to his childhood village for Christmas, and memories come flooding back as he meets up with old friends.',
    release_date: '2021-04-16'
  },
  {
    id: 805045,
    title: 'NXT presents Stand and Deliver',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5LFyouCY4LnOIvzq0irR8JZcXeG.jpg',
    genre_ids: [],
    overview: 'Two night ppv',
    release_date: '2021-04-07'
  },
  {
    id: 819157,
    title: 'Onírico',
    popularity: 0.72,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1rHpLY3TO3VWbASrUgfmGqebcdH.jpg',
    genre_ids: [],
    overview:
      'The release of a new app that aims to make our memories and dreams go online will affect the way we relate to each other.',
    release_date: '2021-04-16'
  },
  {
    id: 329206,
    title: 'Lost and Love',
    popularity: 1.133,
    vote_average: 6.4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uhMtikotzx4pSPiQLltCUJDDd80.jpg',
    genre_ids: [18],
    overview:
      'After his young son goes missing, Lei (Andy Lau) begins a 14-year quest to find him.',
    release_date: '2015-03-20'
  },
  {
    id: 759836,
    title: 'Manmadhudi Mistake',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sV3b3WBOY0RN6MAaLMcMBhUaDiG.jpg',
    genre_ids: [],
    overview: 'Telugu Movie',
    release_date: '2021-03-31'
  },
  {
    id: 592789,
    title: 'Beyond the Horizon',
    popularity: 0.6,
    vote_average: 5.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zHP1wnX7XTXMus1LbXvLZRSLaz4.jpg',
    genre_ids: [18],
    overview:
      "Summer 76', there's a heatwave and the Swiss countryside is drying out at top speed. In this stifling environment, Gus who is thirteen years old and son of a farmer, sees both his family environment and his innocence relentlessly breaking. He's living the end of a world.",
    release_date: '2020-02-07'
  },
  {
    id: 573653,
    title: 'Sheena667',
    popularity: 0.7,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cUEjZ4RlYE3703HYn9itgRmY4bm.jpg',
    genre_ids: [18],
    overview:
      'The city of Vyshny Volochyok: broken roads, snow and fog. The car service station in the suburb of the town where Olya and Vadim live and work, and love each other. Both are well in their thirties, they are simple and serious people, they share the ups and downs in their lives, until a third, superfluous party intrudes: the Internet.',
    release_date: '2021-04-15'
  },
  {
    id: 826391,
    title: 'Together',
    popularity: 0.988,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lFUnSMcckH6pkzzzr9KpfHumsNr.jpg',
    genre_ids: [35],
    overview: 'Anna and Tom talk to a priest about sex.',
    release_date: '2021-04-17'
  },
  {
    id: 815047,
    title: 'Sadie',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1uAuFVwTbdWMLZ9eSXic2xafPM3.jpg',
    genre_ids: [],
    overview:
      "Filmed at the Lyric Theatre, Belfast for BBC's Lights Up season of theatrical films, David Ireland's play concerns Sadie, a sharp tongued Belfast cleaner, who must confront painful episodes from her turbulent life.",
    release_date: '2021-03-31'
  },
  {
    id: 735130,
    title: 'Narkali',
    popularity: 0.931,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/658SwvcyxOgjI90tKtDzILQQy6o.jpg',
    genre_ids: [18],
    overview:
      'Narkali is a upcoming Tamil drama movie, directed by VZ Dhorai which had Ameer Sultan in lead role.',
    release_date: '2021-04-14'
  },
  {
    id: 824393,
    title: 'Kinder der Klimakrise',
    popularity: 0.738,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-17'
  },
  {
    id: 819386,
    title: 'Jeijay',
    popularity: 0.738,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6JNHwHaT4nS9fZJ3yG6cHVJSThQ.jpg',
    genre_ids: [],
    overview:
      '“Jeijay” begins where most romantic movies end. The film is about two people who try to repress the slow but inevitable decay of their relationship. Feeling isolated in their own little home, more and more of the happy facade of their love life comes crumbling down. The profound melancholia of the subject is captured in little everyday moments that are intertwined with dreamlike sequences.',
    release_date: '2021-04-17'
  },
  {
    id: 813360,
    title: 'Flight',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5c8G0XcXv2LFdyLAevke5ovr7lW.jpg',
    genre_ids: [28, 53],
    overview:
      'The movie follows the journey of Ranveer Malhotra, who against all the odds, has to face deadly obstacles on a plane in order to survive.',
    release_date: '2021-04-02'
  },
  {
    id: 819484,
    title: 'IDI',
    popularity: 0.737,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4uTnLi7iV9Ea2ijig2DKOEZWdjF.jpg',
    genre_ids: [],
    overview:
      'Idi is an independent loner with a high tech remotely controlled home, who comes back after a long day to have some time to herself. Her otherwise normal evening takes a turn for the worst, when her decision to update the home system suddenly causes her trusty machines to operate autonomously, independent of her. The more Idi tries to regain control, the more she loses it.',
    release_date: '2021-04-17'
  },
  {
    id: 712178,
    title: 'Gagarine',
    popularity: 1.4,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5oNP4yNtlQajKQU0Vc7fB4bdPzN.jpg',
    genre_ids: [18, 35],
    overview:
      'Yuri, 16, has lived all his life in Gagarin Towers, a vast red-brick housing project on the outskirts of Paris. He dreams of becoming an astronaut. When plans to demolish Gagarin Towers leak out, Yuri joins the resistance.  With his friends Diana and Houssam, he embarks on a mission to save their home, which has become his “starship.”',
    release_date: '2021-04-16'
  },
  {
    id: 773660,
    title: 'Este amor es de otro planeta',
    popularity: 0.761,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1bdjpX9l2tueek5gUOm7LntLXMX.jpg',
    genre_ids: [35, 10749],
    overview: '',
    release_date: '2021-03-31'
  },
  {
    id: 825907,
    title: 'Whiplash of the Dead',
    popularity: 0.717,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2wqEaDI19CAEXWKIuZwXVD6pu30.jpg',
    genre_ids: [99],
    overview:
      'The documentary on Yamazaki Hiroaki, the student died in the First Haneda Incident of 8 October 1967.',
    release_date: '2021-04-16'
  },
  {
    id: 797307,
    title: 'The Pact',
    popularity: 0.698,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/grd8MC4QwRbUdrLcQIm0zhYpWJ7.jpg',
    genre_ids: [18],
    overview:
      'The intense friendship between Karen Blixen, the Danish author best known for her autobiographical novel "Out of Africa," and Thorkild Bjørnvig, a young and promising poet.',
    release_date: '2021-04-15'
  },
  {
    id: 802157,
    title: 'The Inverted Woman',
    popularity: 0.6,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oHI9Szb72XnNcOKv4opl2VRl5Qh.jpg',
    genre_ids: [14, 35, 27],
    overview:
      'Ana had the perfect husband, the perfect children, and the perfect friend, but she wanted to turn her life around and turned everything upside down.',
    release_date: '2020-09-14'
  },
  {
    id: 819583,
    title: 'Dreams of Gold',
    popularity: 0.698,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gWjRSN9SXnleB3CAI3jJZv4EC0G.jpg',
    genre_ids: [],
    overview:
      "“Out at Zeballos, on the wet west coast of Vancouver Island, it rains and rains and practically never stops, but the people there don't look for rainbows in the sky.” Based on text from a gold miner’s journal, Dreams of Gold reveals his dreams.",
    release_date: '2021-04-15'
  },
  {
    id: 812459,
    title: 'Nosotras también estuvimos',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pSoh8T5eEIh9BAp6gsTZjIAFpUA.jpg',
    genre_ids: [99],
    overview:
      'During the Malvinas war, more than a thousand Argentine soldiers were wounded. Many were cared for by 14 nurses in a mobile hospital located in Comodoro Rivadavia. After 37 years of silence, three of them return to the place to tell their stories.',
    release_date: '2021-04-01'
  },
  {
    id: 807858,
    title: 'Jangan Sendirian',
    popularity: 0.769,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kANJGmyQnvyDbwfck6imadWLdDK.jpg',
    genre_ids: [27, 53],
    overview:
      'Four people take turns experiencing scary events when they are alone. The terror of these spirits that spread fear, panic, and hysteria just came without them expecting.',
    release_date: '2021-04-01'
  },
  {
    id: 677054,
    title: 'Bad Roads',
    popularity: 0.769,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1hOP3LhjOteXiplHI9WrK9SJSZU.jpg',
    genre_ids: [18],
    overview:
      'Four short stories are set along the roads of Donbass during the war. There are no safe spaces and no one can make sense of just what is going on.  Even as they are trapped in the chaos, some manage to wield authority over others. But in this world, where tomorrow may never come, not everyone is defenseless and miserable. Even the most innocent victims may have their turn at taking charge.',
    release_date: '2021-04-01'
  },
  {
    id: 793392,
    title: 'Listen before you sing',
    popularity: 0.966,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/m81OtVXlSjHTTMd0S4OtTCwMChF.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-16'
  },
  {
    id: 636358,
    title: 'We Gon′ Be Alright',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4AqV41myhq8rcH5T2TvedsLaI5M.jpg',
    genre_ids: [18],
    overview:
      "One woman and six men work for 'Nogari Films', a self-sufficient company. In addition to their respective positions, they play every role needed to make movies. One day, they get a phone call, and a miraculous opportunity to get an investment comes to them.",
    release_date: '2021-03-31'
  },
  {
    id: 786687,
    title: 'Natura Bizia',
    popularity: 0.715,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/yfAi4NcMx9xMI39hz1giiWZrO5J.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-16'
  },
  {
    id: 801447,
    title: 'Future From Inside',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/afWR10pepYtVf8vC7wLPcEotWvZ.jpg',
    genre_ids: [99],
    overview:
      'The third part of a trilogy regarding "feral domesticity," following "Strangely Ordinary This Devotion" (2017) and "Come Coyote" (2019). "Future from Inside" is a meditation on the environment, domestic space, queer desire, and magic.',
    release_date: '2021-03-31'
  },
  {
    id: 759834,
    title: 'First Look',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ad4o9tNb9fEvEY7ZZk7apYbFc2s.jpg',
    genre_ids: [],
    overview: 'Telugu Movie',
    release_date: '2021-03-31'
  },
  {
    id: 812547,
    title: 'Bansuri',
    popularity: 1.215,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [18],
    overview: 'Upcoming Anurag Kashyap movie.',
    release_date: '2021-04-16'
  },
  {
    id: 764731,
    title: 'Love in Dehradun',
    popularity: 0.965,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fJuaTPEv7wrPFtPnKufCE70uSZt.jpg',
    genre_ids: [10749],
    overview:
      'Love in Dehradun is an upcoming Bollywood film produced by Shafeeq Rahman while Sagar Joshi is Director of this film. Love in Dehradun will be released on 16 April 2021. The film will feature actors like Laxman Singh Rajput, Shivam Roy Prabhakar, Bhavesh Kantaria, Sohail Khan, Zareena Khan.',
    release_date: '2021-04-16'
  },
  {
    id: 817880,
    title: 'The Naked Truth About Zhiguli Band',
    popularity: 1.4,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/htreozBvM7R2xSLetDNK2Auevq4.jpg',
    genre_ids: [35, 18, 10402],
    overview: 'The members of a music band that separated 30 years ago are forced to reunite.',
    release_date: '2021-04-16'
  },
  {
    id: 819377,
    title: 'Ernesto',
    popularity: 0.714,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ntPEXEOo8qheMl0v5sEzcj3Czh7.jpg',
    genre_ids: [],
    overview:
      "Ernesto, a bitter man in a wheelchair, meets Lili on the rooftop of the building where they are neighbors. She tries to hide the pain from the violence she has to deal with every day. He confesses he's a retired superhero. They will find in each other the strength to fight their fears.",
    release_date: '2021-04-16'
  },
  {
    id: 819127,
    title: 'O Quebra-Cabeças da Lagoa',
    popularity: 0.714,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/uYkosAU19LRNtYreAGTts7Fr6PM.jpg',
    genre_ids: [],
    overview: 'No synopsis',
    release_date: '2021-04-16'
  },
  {
    id: 798709,
    title: 'Proste rzeczy',
    popularity: 0.714,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zDEHvAz8UWEFSLXlrXyJNMraKTL.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-16'
  },
  {
    id: 787477,
    title: 'And We Collide',
    popularity: 0.714,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1SRNqLmGGdnk44ZHoPh15K5jO4m.jpg',
    genre_ids: [18],
    overview:
      'An unexpected tropical encounter sparks a fragile romance between a wanna-be astronaut and a village farm boy.',
    release_date: '2021-04-16'
  },
  {
    id: 819294,
    title: 'The Misfit',
    popularity: 0.675,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-14'
  },
  {
    id: 813461,
    title: 'I Still Remember',
    popularity: 0.693,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aiNvBpoM308LAo9GHhohHvmAdpT.jpg',
    genre_ids: [18],
    overview:
      'Chi is a lousy real estate agent who muddles through life. Growing up, his mother has always told him to lead a simple life, until he reunites with his primary school P.E. teacher, Mr Wong.  Mr Wong, who’s been increasingly ill, wants to keep his promise to his late wife to finish a 10k race; At the same time, his student, an overweight student called Tin Sum aims to finish her first ever 5k race just so she can run with her idol. As Mr Wong and Tin Sum fight for their goals, Chi, discouraged, stands at a crossroad and roams aimlessly in life.  Until one day, memories from 20 years ago light up Chi’s world. For once in his life, Chi swears to cheer himself on.',
    release_date: '2021-04-15'
  },
  {
    id: 812846,
    title: 'The Bird',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cD62bL2vRj3bXWo45Va7IJwBzwl.jpg',
    genre_ids: [99, 18, 14],
    overview:
      'An artist is in the middle of painting one of her best pieces yet when she realizes that she is at this very moment, free as a bird.',
    release_date: '2021-03-29'
  },
  {
    id: 809057,
    title: 'Kurt',
    popularity: 0.925,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ceTE0tkNjulXPNNdC2CQDGAUeCF.jpg',
    genre_ids: [35, 10749, 16],
    overview:
      'A cuckoo falls in love with a beautiful robin. The only thing that’s holding him back is... his cuckoo clock.',
    release_date: '2021-04-14'
  },
  {
    id: 819605,
    title: 'suppose a beam of light',
    popularity: 0.693,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pPpsHilgZsn9w76eAortqH7BI4A.jpg',
    genre_ids: [],
    overview:
      'suppose a beam of light is an audiovisual correspondence between kellen r jackson and jeffrey ellom. Woven into the shared letter are wonderings about deep time, queer kinmaking, the portal-nature of microscopes, quantum optics, tunnelling, entanglement, and the experience of oscillating between weave and grain. This piece treats kente cloth as text, its threads fiber-optic cables, transmitting messages whose legibility and substance can change with scale. Time is also scaled within the audio composition, with the prominent theme being a two-note dyad which teeters more and more slowly as the tempo steadily decreases. The tension within this dyad rhymes with the tension between warp and weft, as well as that of the multiple meanings which are relayed through the spacetime of ancestry. Shot on Super8, hand-processed in Caffenol. Text remixed from Introduction To Modern Optics (Fowles, 1975).',
    release_date: '2021-04-15'
  },
  {
    id: 816263,
    title: 'Lillian Finds the Zombies',
    popularity: 0.692,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tDnS8okWa8hWiyDyq5vYLyH9VBn.jpg',
    genre_ids: [99],
    overview:
      'Zombies return due to pending matters yet to be settled: in this case, issues related to land exploitation and family relationships through time. Set in Negaunee, Michigan, filmed outdoors with a great sense of playfulness, the movie is narrated in the present while questioning the past and thinking about the potential for a different future.',
    release_date: '2021-04-15'
  },
  {
    id: 712345,
    title: 'Skies of Lebanon',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/huM6gHZm31BOiN9PJWHGD7XLVGt.jpg',
    genre_ids: [18],
    overview:
      'In the fifties, young Alice leaves her natal Swiss mountains for the sunny and vibrant shores of Beirut. She falls madly in love with Joseph, a quirky astrophysicist intent on sending the first Lebanese national into space. Alice quickly fits in among his relatives, but after years of bliss, the civil war threatens their Garden of Eden.',
    release_date: '2020-08-30'
  },
  {
    id: 679659,
    title: 'Salaga',
    popularity: 0.691,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/c9wX2wGrmMigiNlSw2624jtB3pN.jpg',
    genre_ids: [80, 28],
    overview:
      'Vijaykumar, alias Salaga, is unknowingly pulled into the realm of the underworld. Samrat, an honest and upright cop, sees through him and decides to bring about justice.',
    release_date: '2021-04-15'
  },
  {
    id: 803250,
    title: 'Oh, Brother!',
    popularity: 0.691,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ylRYaoYECm77lu7SDnthWBK3Qpk.jpg',
    genre_ids: [10749, 35],
    overview: 'A man finds love in an unlikely place.',
    release_date: '2021-04-15'
  },
  {
    id: 791991,
    title: 'Ojos de arena',
    popularity: 0.691,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/j3DufvsAiCKRZRAdaRe5ewNmfDO.jpg',
    genre_ids: [18],
    overview: '',
    release_date: '2021-04-15'
  },
  {
    id: 815102,
    title: 'La calor',
    popularity: 1.4,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/k5TSmUr8jGTvNSlZ2ILlGXyoPGq.jpg',
    genre_ids: [35, 18],
    overview:
      'Lola, a young playwright and drama director, goes into a crisis before her new play is released. Her leading actress raises time and again that she has problems with the text. A friend of her, a visual artist, moves to her home after discovering an affair and her ex-boyfriend claims copyright. Lola doubts about her own play and struggles between moving forward in the chaos or give it up. She needs to find the true meaning of what she is doing to justify herself.',
    release_date: '2021-04-14'
  },
  {
    id: 726413,
    title: 'Ghosts',
    popularity: 0.6,
    vote_average: 4.7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sTkcarOFGLzVhEz8ZDoVB4XpTuT.jpg',
    genre_ids: [],
    overview:
      'In Istanbul, on the verge of a country-wide power surge, four characters come across in a neighborhood undergoing the process of gentrification for the “New Turkey”: a mother whose son is in prison, a young female dancer, a feminist artist, and a cunning middle man. Their stories intertwine during a drug deal, offering a roaring tale of the contemporary generation.',
    release_date: '2020-10-07'
  },
  {
    id: 816641,
    title: 'The Rise and Fall of Richie Myles',
    popularity: 1.171,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xD48RbHhaRVi4tFzvIlaeYqhyR1.jpg',
    genre_ids: [35, 18, 10402],
    overview:
      'The triangle has always been a fairly underrated instrument. It never reached higher than second fiddle or more precise: It just reached triangle. Then came a hero we didn’t know we deserve. A hero that single-handedly revolutionised the whole music industry – nay the world! A man responsible for what the triangled metal stick is today: rock’n’roll. But rock’n’roll changes you. The rise and fall of a triangle soloist. The Rise and Fall of Richie Myles.',
    release_date: '2021-04-14'
  },
  {
    id: 813467,
    title: 'Pequeñas historias animadas',
    popularity: 0.941,
    vote_average: 5.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ySIFXu6iun8RoImczaGZKcQ2IEb.jpg',
    genre_ids: [16],
    overview: '',
    release_date: '2021-04-01'
  },
  {
    id: 811196,
    title: 'Alaskan Nets',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/guX4Ah1AzdSsn6XOxoMC7BWKBso.jpg',
    genre_ids: [99],
    overview:
      "In Alaska's last native reserve, two cousins lead their local basketball team to its first state championship in more than thirty years. That quest is the only thing that will bring life back to a remote island that has been rocked by tragedy.",
    release_date: '2021-04-03'
  },
  {
    id: 680954,
    title: 'Red Static',
    popularity: 0.846,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1wcsilHtrtwgiEIU23LYpVHh275.jpg',
    genre_ids: [18, 53],
    overview:
      'Timo has lived the last ten years alone on a dilapidated farm. He gets a visit from his childhood friends Jussi and Maiju, who have moved to the city without ever looking back. Gradually they realize how the years have changed their old friend... and how his presence seems to change everything around them.',
    release_date: '2021-04-09'
  },
  {
    id: 819990,
    title: 'Letters',
    popularity: 1.169,
    vote_average: 9,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5gpsN3pv0lF1LsEvR2uJn8c1HLM.jpg',
    genre_ids: [18, 10752, 36],
    overview:
      'LETTERS, a dramatic historical fiction written by Mrs. Evelyn Merritt in 2010, tells the story of U.S. soldiers and their loved ones through their correspondence beginning with the Civil War and ending with the War in Iraq. Sahuarita High School students adapted the Readers’ Theatre play into a movie, reasoning the student actors would be kept safe from Covid-19 by filming them individually, and afterward the footage could be reassembled into a screenplay following the original dialogue.',
    release_date: '2021-04-10'
  },
  {
    id: 817592,
    title: 'Uskyldig dømt',
    popularity: 0.638,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bUD7ibKeZdR40q7LkyL562P7B3A.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-12'
  },
  {
    id: 802813,
    title: 'The Search for the Meaning',
    popularity: 0.6,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/meVdwCcTmTqzYSXDiZGtyCRVdjR.jpg',
    genre_ids: [99],
    overview:
      '"The Search for the Meaning" is a collective experience, carried out with the audiovisual contribution of countless people who record their testimonies and spiritual experiences in 19 countries, to show a new spirituality that is being born...',
    release_date: '2020-06-26'
  },
  {
    id: 807113,
    title: 'Aquela Noite',
    popularity: 0.901,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wZ78ll7rytGhwh0u7jZJJ7UvOeZ.jpg',
    genre_ids: [],
    overview: 'No synopsis',
    release_date: '2021-04-13'
  },
  {
    id: 821103,
    title: 'By Players - If 100 famous side roles make a movie',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/liGZVXyuCfkS24d9AFiKyf3DYWR.jpg',
    genre_ids: [35],
    overview: '',
    release_date: '2021-04-09'
  },
  {
    id: 727037,
    title: 'Salvation',
    popularity: 0.86,
    vote_average: 4,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rwUGJ2W5qY5gAgCXuVFyfmMd2kr.jpg',
    genre_ids: [27, 53],
    overview:
      'A prostitute steals a billion won from her pimp and is found dead in the river. While his pimp seeks to recover the money, he enlists the help of a policeman. After suffering a car accident, this policeman stops at a mysterious retreat, which worships an incarnate goddess in the body of a child.',
    release_date: '2021-04-08'
  },
  {
    id: 829524,
    title: 'Gioli & Assia -DiesisLive at Milazzo, Sicily',
    popularity: 0.635,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'Gioli & Assia - DiesisLive  at Milazzo, Sicily',
    release_date: '2021-04-12'
  },
  {
    id: 819372,
    title: 'Triptych',
    popularity: 0.65,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Triptych (2020) is a homage to the the radical, political album, ‘We Insist!’ (1960) by the jazz musician Max Roach – the ideas of which prefigured the themes that became the Civil Rights and anti-apartheid movements. The catalyst for this film was the broadcasted portraits of figures such as Breonna Taylor and George Floyd, and the evident incongruity between the beguiling ordinariness of the images that represented them with the violent end we know they endured. Through a rare focus on portraiture, Akomfrah seeks to express the diversity of Black characters, characteristics and characterisations that should form the bedrock of any de-colonial or anti-racist future.',
    release_date: '2021-04-13'
  },
  {
    id: 818234,
    title: 'Lights Up Harm',
    popularity: 0.65,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gUy8PK3EcKL0u6k18ZyB4oeZjEQ.jpg',
    genre_ids: [],
    overview:
      'When a lonely estate agent becomes obsessed with the perfect life of a charismatic social media influencer, the lines between the online world and reality become dangerously blurred.',
    release_date: '2021-04-13'
  },
  {
    id: 816535,
    title: 'The Last Marriage',
    popularity: 0.622,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5IMlsjOJgKkqs06B9rDYufj4aVs.jpg',
    genre_ids: [35],
    overview: 'The hollow everyday life of a couple keeps going - even in a zombie apocalypse',
    release_date: '2021-04-09'
  },
  {
    id: 810106,
    title: 'Tales of the Accidental City',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iBpuVVB8iB8ywVsD6d1t3m05N7A.jpg',
    genre_ids: [],
    overview:
      'In this humorous and biting film, an eclectic group of people living in Nairobi gathers over Zoom for a court-ordered anger management class. As they swap stories and trade barbs, deeper issues with their lives and local government come to light.',
    release_date: '2021-04-09'
  },
  {
    id: 524997,
    title: 'Kieu',
    popularity: 0.871,
    vote_average: 3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/11XOE0YThTP4r5815Z8iw6VuUZN.jpg',
    genre_ids: [14],
    overview:
      "In every person's life, there are eight doors. You never know which door will open and what day it will be. There are even some days when all the doors open.",
    release_date: '2021-04-09'
  },
  {
    id: 817216,
    title: 'Birth Time: The Documentary',
    popularity: 0.603,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iswnsZm2RtZdIC82VtuHIUnxxcg.jpg',
    genre_ids: [99],
    overview:
      'Three women embark on a mission to find out why an increasing number of women are emerging from their births physically and emotionally traumatised. Their discoveries expose the truth and lead them to join the birth revolution and forge a movement that hopes to change the face of maternity care in Australia and across the developed world.',
    release_date: '2021-04-10'
  },
  {
    id: 817786,
    title: 'Underdogs – Sølvet i Egypten',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3ZNJBDS0RF3GjXpHuZg9W2JBE9Y.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-07'
  },
  {
    id: 824396,
    title: 'Meanwhile',
    popularity: 0.632,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kGLJAWwDGkpssOV24JYozY8sEtk.jpg',
    genre_ids: [18],
    overview:
      'A single-shot piece starring Oriol Pla and Eneko Sagardoy that celebrates everything there is between two normalities: the one that was and the one that will be.',
    release_date: '2021-04-12'
  },
  {
    id: 820183,
    title: 'Reenactment',
    popularity: 0.632,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [10770, 18],
    overview:
      'Drama about youth violence, society impact on an individual and exploring sexuality.',
    release_date: '2021-04-12'
  },
  {
    id: 819558,
    title: 'Qui est Monsieur Schmitt ?',
    popularity: 0.754,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/m4Tp9svztWbkomblpFVmOWh2EIZ.jpg',
    genre_ids: [35],
    overview:
      'We take him for someone else, a Mr. Schmitt. And one evening, at dinner, he and his wife, played by Valérie Bonneton, realize that their apartment has changed, that their business is not theirs. The play is about the perception of oneself. I love the absurd universe of its author, Sébastien Thiéry.',
    release_date: '2021-04-01'
  },
  {
    id: 809391,
    title: 'Para Verónica',
    popularity: 0.632,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [18],
    overview: '',
    release_date: '2021-04-12'
  },
  {
    id: 661930,
    title: 'The Swarm',
    popularity: 1.4,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/n3yVHGtvnGTPMdGLrcOhFxXPRD7.jpg',
    genre_ids: [18, 53],
    overview:
      'To save her farm from bankruptcy, a single mother begins a business of breeding edible grasshoppers. Soon she develops a strange, obsessive relationship with them.',
    release_date: '2020-08-29'
  },
  {
    id: 814335,
    title: 'Boys Beware',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rlmm8MKpT37MZOwoh8DcLKz86jY.jpg',
    genre_ids: [],
    overview:
      'An experimental documentary using old educational films and news broadcasts to tell a story',
    release_date: '2021-04-04'
  },
  {
    id: 821222,
    title: "Natalie's Abortion",
    popularity: 0.615,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [53],
    overview:
      "A married woman, Natalie, becomes pregnant after she is violently raped by a masked man. Uncertain of the paternity, Natalie's husband, Pat, urges her to have an abortion. Afterwards the couple is left to deal with the emotional aftermath as they try to rebuild their lives.",
    release_date: '2021-04-11'
  },
  {
    id: 635124,
    title: 'Way Back Home',
    popularity: 0.825,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xV1ywwwaGnTDHBF5bKBozqCyJpM.jpg',
    genre_ids: [18],
    overview:
      'Jeong-won, who forgot the past and lives a peaceful marriage, receives a phone call from the police one day. The man who sexually assaulted her has been caught and the news shakes up the couple’s life and breaks down their daily lives.',
    release_date: '2021-04-08'
  },
  {
    id: 816547,
    title: 'O Retrato do Mal',
    popularity: 0.616,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lmz8ZB3hRUvM1M0oAku6mQjsEkY.jpg',
    genre_ids: [16, 9648, 14],
    overview:
      'Many artists has been pretentious, but not like Gascon, who dedicates all his existence in search for the masterpiece of horror.',
    release_date: '2021-04-09'
  },
  {
    id: 817713,
    title: 'Orale',
    popularity: 0.614,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/nPpAZfyXtTzvlZTrbZfERMvD5Ex.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-11'
  },
  {
    id: 810105,
    title: 'Cloudscape',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Combining home movies, 16mm footage, audiotape, and an original score, Gallisá Muriente’s poetic excavation oscillates between chronicle, dream, and document. Where people and nature meet, she uncovers environmental and colonial memories from her grandmother’s past and in the landscape of Puerto Rico.',
    release_date: '2021-04-09'
  },
  {
    id: 810129,
    title: 'Since you arrived, my heart stopped belonging to me',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Each year, thousands of Central American migrants journeying north to the US go missing. Kökdil captures moments of tender care, hope, and sadness as a group of mothers travel through Mexico in search of their lost children.',
    release_date: '2021-04-09'
  },
  {
    id: 440206,
    title: '24 Snow',
    popularity: 1.073,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/dULfu04ZGGiWFlEv3wdvQhPFwG9.jpg',
    genre_ids: [99],
    overview:
      'Like a lone cowboy, Sergei passionately devotes his life to traditional horse breeding in the impenetrable Arctic Sakha; permafrost and the absence of roads, electricity and channels of communication mean that there is nobody else to rely on but oneself. Sergei is sensitive and introspective; he truly cares about his family, community and treats nature with the utmost respect. He loves the independence and freedom this life brings, despite the immense sacrifices that it necessitates, such as total isolation and being a stranger to his own children. Spectacular camerawork characterizes the Sakha horses in all their magnificence, and juxtaposes the post-soviet towns and the boundless taiga landscapes, where the cold bites through the screen.',
    release_date: '2021-04-08'
  },
  {
    id: 817206,
    title: 'Pavones',
    popularity: 0.822,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/30wxxrNPv9yKCnnRCYeG0AYQCqK.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-08'
  },
  {
    id: 810144,
    title: 'Tiny T. Rex And The Impossible Hug',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Tiny. T. Rex is concerned his tiny tyrannosaurus arms won’t be enough to comfort a good friend who is feeling down. After some deep thinking paired with rigorous physical training, he realizes big hugs come from big hearts.',
    release_date: '2021-04-09'
  },
  {
    id: 810134,
    title: 'Wavelengths',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'Across the Bay Area, illuminated windows reveal volunteers for Exhale, a hotline for women seeking help in processing their abortion experiences. In the still of night, these volunteers lend an ear to those who need it.',
    release_date: '2021-04-09'
  },
  {
    id: 810126,
    title: 'If You Hum at the Right Frequency',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/25Lj5vsSJt5rhRkIihqtl3TOaPD.jpg',
    genre_ids: [],
    overview:
      'Artists who have recently lost loves find a warm embrace at the Echo River Art and Memory Center in Northern California. Invited to take part in an experimental summer residency, three such artists process their grief against a lush, forested backdrop.',
    release_date: '2021-04-09'
  },
  {
    id: 810116,
    title: 'Tehachapi',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'Currently and formerly incarcerated men at California’s supermax penitentiary in Tehachapi collaborate with renowned photographer and artist JR on a project to transform the prison yard into a powerful – but temporary – work of art.',
    release_date: '2021-04-09'
  },
  {
    id: 816566,
    title: 'New Not Normal Trilogy Supercut',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/aazxD4MyA4JbHuHeELw49cpVeDw.jpg',
    genre_ids: [35, 27],
    overview: 'Super-cut of three shorts I made by myself in quarantine.',
    release_date: '2021-04-08'
  },
  {
    id: 816399,
    title: 'Eric Hobsbawm: The Consolations of History',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tT7cBjM80jU47zpKjtISqwVhlh4.jpg',
    genre_ids: [99],
    overview:
      'In this feature-length documentary, Anthony Wilks traces the connections between the events of Hobsbawm’s life and the history he told, from his teenage years in Germany as Hitler came to power and his communist membership, to the jazz clubs of 1950s Soho and the makings of New Labour, taking in Italian bandits, Peruvian peasant movements and the development of nationalism in the modern world, with help from the assiduous observations of MI5.',
    release_date: '2021-04-08'
  },
  {
    id: 819360,
    title: 'Film Tattoo',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Narrative breaks down into a searching and tentative score, while optically printed flowers pass greens and reds and dirt against a scratchy white sky, then sometimes purples and blues and pink.',
    release_date: '2021-04-08'
  },
  {
    id: 810124,
    title: 'Dial Home',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Within the walls of a call center, a feeling of being in limbo pervades. Homesickness floods the phone receiver as deported call center agents make calls across the US-Mexico border.',
    release_date: '2021-04-09'
  },
  {
    id: 817812,
    title: 'Eu Não Sou um Robô',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wfAdvOJM3VC2QviYOF6Ex83eEmz.jpg',
    genre_ids: [35, 14],
    overview: '',
    release_date: '2021-04-10'
  },
  {
    id: 468085,
    title: 'Awaken',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hMyvE9YRNytafdMPbRc48LR6PUq.jpg',
    genre_ids: [99],
    overview:
      "A documentary film exploring humanity's relationship with technology and with the natural world. Shot over a 5-year period in more than 30 countries, the film pioneers new timelapse, time-dilation, underwater, and aerial cinematography techniques to give audiences new eyes with which to see our world.",
    release_date: '2018-07-26'
  },
  {
    id: 826704,
    title: 'BLUE/ブルー',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7LlIUjkWukIbMA1NVsUNtUJxMCF.jpg',
    genre_ids: [],
    overview:
      'Nobuto Urita is a boxer, who loves his sport more than anything. No matter how hard he tries, Nobuto Urita keeps losing his matches. Meanwhile, Kazuki Ogawa spars with Nobuto Urita at the same gym. He is a boxer with elite talent and skills. Unlike Nobuto Urita, Kazuki Ogawa will likely win a championship. Kazuki Ogawa is also engaged to Chika Amano. She is a childhood friend of Nobuto Urita and also his first love.',
    release_date: '2021-04-09'
  },
  {
    id: 810445,
    title: 'Bruised Fruit Tastes Sweeter',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wKhgcK58WO8TBS2ebjyTtjeRE9P.jpg',
    genre_ids: [18],
    overview: "A couple's fragile relationship is put to the test after a sudden car accident.",
    release_date: '2021-04-09'
  },
  {
    id: 810142,
    title: 'Intermission',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Trapped in the clutches of lockdown, a quiet and empty London awakens to a beautiful spring day. Nature opens the door, providing soft, dappled sunlight and sweet birdsong that inspires a moment of collective human solidarity.',
    release_date: '2021-04-09'
  },
  {
    id: 816173,
    title: 'Secret Chord',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2qJedlSqMIFI4zmi6zCr3dWqvnM.jpg',
    genre_ids: [],
    overview:
      'No one asked for anything, no one requested any explanation, but Luigi (writing this, referring to himself in the third person) provides a +1 hour “documentary” on how he made his first two “short films”.',
    release_date: '2021-04-06'
  },
  {
    id: 553019,
    title: 'The Book of the Sea',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vdfw9gHEcZPME3ByQWpVmZDR0z6.jpg',
    genre_ids: [99],
    overview:
      'The story of everyday survival of the traditional sea hunters of the Bering Strait in the Far East of Russia is enriched with animated Inuit myths that at times prevail reality. This is a visually impressive cinematic parable about the vitality of the ancient Arctic culture.',
    release_date: '2021-04-08'
  },
  {
    id: 827924,
    title: 'High Rivals',
    popularity: 1.319,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jRxGExaw5TqGX7j1n4vTmgvLTQw.jpg',
    genre_ids: [10402],
    overview: 'In a small corner of the world a pointless opera occurs.',
    release_date: '2021-04-08'
  },
  {
    id: 827203,
    title: 'Notes before the Wind',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'A loose collection of scenes in Hong Kong shot over a five-year period, this film begins with the Umbrella Movement in 2014 and ends right before the summer of 2019, when large-scale social unrest and violent resistance erupted. The everyday scenes capture the ambience and the landscape of change in the city, standing as a quiet prelude to the ensuing conflicts.',
    release_date: '2020-01-01'
  },
  {
    id: 827006,
    title: 'Unknownature',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      "A wildlife enthusiast, Jean-Pierre Bosquet brings us on a journey to Singapore's Sungei Buloh Wetland Reserve to uncover some of the unknown nature in the midst of our metropolis city. Subaraj Rajathurai, a veteran wildlife consultant speaks on behalf of these animals and the threats they face.",
    release_date: '2019-11-29'
  },
  {
    id: 826795,
    title: 'You Are Never Alone',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lkP4FWtQK8NLfwb5YMRifUaUVui.jpg',
    genre_ids: [99],
    overview:
      'LGBTIQ+ individuals from across Melbourne engage in intimate conversation and share their lockdown experiences – despite having never met before.',
    release_date: '2021-03-28'
  },
  {
    id: 826792,
    title: 'Intimate Partner',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/zHUQxNieG6QjnTA69JfFv4J5CJc.jpg',
    genre_ids: [35, 10749],
    overview:
      "Met with the solution to Ari's couchless living situation during their state-sanctioned one-hour walk, Ari awkwardly enlists the help of their (recently declared) intimate partner, Chris, in carrying their newfound couch back home.",
    release_date: '2021-03-28'
  },
  {
    id: 826755,
    title: 'I Fell in Love in the Plane',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/eq1wDytFwPqkrSFmOFvnrCo8TcI.jpg',
    genre_ids: [16, 35, 10749, 10770],
    overview:
      'Kevin, a French internet personality, falls in love with the person sitting next to him when flying back home.',
    release_date: '2021-03-28'
  },
  {
    id: 826364,
    title: 'It Is What It Is',
    popularity: 1.4,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/v2tlB9pew6o31FIvw8rAuTjX8GS.jpg',
    genre_ids: [35],
    overview: 'Chronicles the interconnecting lives of various students in Winthrop High School.',
    release_date: '2021-05-07'
  },
  {
    id: 826188,
    title: 'The Gathering',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2yGFjR9OOQ16YEpGjX1QOnr4Aoc.jpg',
    genre_ids: [53, 27],
    overview:
      'Three individuals co-exist in a house wherein every minute they spent, determines their own destiny. This film is shot on a single-take with a smartphone camera.',
    release_date: '2018-01-01'
  },
  {
    id: 824426,
    title: 'The Diggers',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'The Diggers is an observation journey into various artisanal mining sites in the east of the Democratic Republic of Congo. The film shows the arduous and surreal labor of adults and teenagers extracting coltan, tungsten and black tourmaline. Our camera captures their repeated movements, their picks, their sweat, fatigue, their faces tense by the effort, their breathing. Their tirelessly repeated gestures compose a kind of bitter-sweet symphony. We enter makeshift tunnels and follow the men who have to arch their backs to advance to the deposits. Our camera is in no hurry to allow the spectators to live and feel this difficult work. The light falls and the workers leave the mining site little by little towards the evening refreshments, before returning to the same routine at dawn.',
    release_date: '2021-04-01'
  },
  {
    id: 824160,
    title: 'Mon père de la révolution tranquille',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-03'
  },
  {
    id: 821839,
    title: 'Manja Satta Pachcha Satta',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6ptDjRJ2iYbZfN6QolbrmXJJgpi.jpg',
    genre_ids: [35],
    overview:
      'A politician and a corporate broker lock horns. As a result, the politician faces an Income Tax raid. On the same day, a couple of youngsters plan to rob an ATM to get attention. As the IT raid and the ATM robbery has some connection, the youngsters get caught. Everyone starts searching for a jackpot and what the jackpot is and what happens to it forms the rest of the story.',
    release_date: '2021-04-02'
  },
  {
    id: 821621,
    title: 'Where the Land Sounds',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2PTpWsjDWc3tlFJzeIdXO6Iyrc6.jpg',
    genre_ids: [99],
    overview:
      'Motivated by family memories, a filmmaker returns to the land of his mother to reflect on his identity and deep cultural heritage.',
    release_date: '2020-01-01'
  },
  {
    id: 821614,
    title: 'From Within',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tFRfjGtiAkmAkYNJTKDa5DxttkT.jpg',
    genre_ids: [18],
    overview:
      'Roberto escapes from his pursuers and reaches a beautiful lake, which is his safe place. There a lonely man stalks him.',
    release_date: '2019-01-01'
  },
  {
    id: 821589,
    title: 'The Poet of the Ring',
    popularity: 0.61,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2Ln3XRIudfVNEskCoFGau4GEkHd.jpg',
    genre_ids: [18, 28],
    overview:
      "Laura will make her boxing debut in Las Vegas, but she doesn't know what kind of opponent she will have to fight against.",
    release_date: '2019-01-01'
  },
  {
    id: 821577,
    title: 'Reminder',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mvi8bUCyVS4epYjJjWPfFCcuMsS.jpg',
    genre_ids: [18],
    overview:
      'The phenomenon that occurs in a room full of objects from the past allows Ulises to temporarily recover his memory.',
    release_date: '2018-01-01'
  },
  {
    id: 821575,
    title: 'The Allusion of my Oblivion',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hanFePPW0YMLgawjKLH45XbzG5V.jpg',
    genre_ids: [18],
    overview:
      "Leonor desperately search for her son Perico, without realizing that she is wrapped in her Alzheimer's disease.",
    release_date: '2019-01-01'
  },
  {
    id: 821568,
    title: 'Another Luna',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rhfuekyKna1loVAjQ5khZSuDdQL.jpg',
    genre_ids: [18, 9648],
    overview:
      'A gap in the relationship with her mother causes Luna to seek affection from a mysterious doll.',
    release_date: '2020-01-01'
  },
  {
    id: 821557,
    title: 'Out of the Reach of Light',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2VyAZ119T0sQ8AE5S1BE6Z4B8Id.jpg',
    genre_ids: [27],
    overview:
      'Lima, 1988. Two brothers are left alone at home while there is a blackout. One is asthmatic, and the other is afraid of what is hiding in the dark.',
    release_date: '2020-01-01'
  },
  {
    id: 821361,
    title: 'Secrets on Sorority Row',
    popularity: 1.4,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cetz3x64Z0mHIOCnDkf257AZqem.jpg',
    genre_ids: [53],
    overview:
      "When her daughter joins the same college sorority she was in, Michelle's dark secrets come to light with deadly consequences.",
    release_date: '2021-05-15'
  },
  {
    id: 820812,
    title: 'CareBonara - The Origins of Carbonara',
    popularity: 0.6,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/exy07DxPf9PDYwVzEwOeQOD3qss.jpg',
    genre_ids: [36],
    overview:
      'Rome, 1944. An Italian cook meets a young American soldier with a mission: to set up a special meal for the Allied forces stationed in the city.',
    release_date: '2021-04-01'
  },
  {
    id: 820651,
    title: 'Luginsky',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/maP8v5hSG9dsj7d80uXTl7o1KtR.jpg',
    genre_ids: [16],
    overview:
      'A kaleidoscopic animation about Deerman, whose reality starts to unravel when he becomes addicted to a pink bootleg liquor designed by ex-boxer "Luginsky".',
    release_date: '2020-09-25'
  },
  {
    id: 820369,
    title: 'Empty Nest',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: "When Allison's son leaves for college, the possibilities are - endless?",
    release_date: '2021-04-08'
  },
  {
    id: 819533,
    title: 'Pompeii: Eros and Myth',
    popularity: 0.6,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: '',
    release_date: '2020-11-09'
  },
  {
    id: 819476,
    title: 'A Bronx Story',
    popularity: 0.746,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9ZIa4MPyPlJYwLwQJw8815hYrQH.jpg',
    genre_ids: [10749],
    overview:
      "Two queer Dominican men living in Bronx, New York, navigate modern-day relationship's trails and tribulations while trying to keep their love afloat.",
    release_date: '2021-04-01'
  },
  {
    id: 819370,
    title: 'Four Nocturnes',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Commissioned for the inaugural Ghana pavilion at the Venice Biennale, Four Nocturnes (2019) forms the third part of a trilogy of films including the renowned Vertigo Sea (2015) and Purple (2017) that explore the complex intertwined relationship between humanity’s destruction of the natural world and our destruction of ourselves. Using Africa’s declining elephant populations as its narrative spine, Four Nocturnes questions mortality, loss, fragmented identity, mythology and memory through poetic visuals that survey the landscape of African cultural heritage.',
    release_date: '2019-05-11'
  },
  {
    id: 819359,
    title: 'Solo',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'Over a warbling electric soundtrack are dancing paper dolls, branches and trees, women made of clay - there once was a girl who lived in the woods, she climbed a tree and then she became.',
    release_date: '2021-04-08'
  },
  {
    id: 819320,
    title: 'Better Left Unsaid',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/bKOsooeonQ2bxzbJaOMmMZTDFUf.jpg',
    genre_ids: [],
    overview:
      "The premise behind Better Left Unsaid, lies in the unconfined analysis of the often violent extremism of today's Western political landscape. As liberal democracy becomes increasingly challenged in the West, we expose the dangerous tactics employed by the radical-left and far-right, alike. In a world where political polarization frames the way in which we live, a new path forward of unity is needed more than ever before. The value of the film lies in its impact, brevity and digestibility - as we confront the philosophical underpinnings of the radical left and their extreme right counterpart.",
    release_date: '2021-04-02'
  },
  {
    id: 819148,
    title: 'Getting Closer',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pg2nBgMtV5hXTsXek3s4RC6Wlw2.jpg',
    genre_ids: [35],
    overview:
      'Two stoned boyfriends navigate unexpected vulnerability (as well as the giggles) while attempting to get off.',
    release_date: '2021-04-01'
  },
  {
    id: 818600,
    title: 'Monsters In Luoyang',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/eH7bhwYBwLU072flsaXvKJWLomj.jpg',
    genre_ids: [10749, 14],
    overview:
      "In the thirteenth year of Tianhe, the An family of Luoyang has been growing in power, and has collaborated with the demon master Ling Xuan to rebel. A scholar with a heart for the world, Du Ziteng, introduces Ling Xuan's disciple, Yue Hanjiao, to the righteous path, and together with Li Bai, a swordsman with a vengeance for the murder of his wife, they set out to save the people of Luoyang. ...... The battle of Luoyang is about to begin!",
    release_date: '2021-03-30'
  },
  {
    id: 818188,
    title: '나의 먼 가족',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hMJTwpaBZTY2jp25JCXzDixvCOr.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-01'
  },
  {
    id: 817905,
    title: 'Dos Gringos',
    popularity: 0.746,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/Av6MkLb0j0ZDWIocQvtKj6X0fjl.jpg',
    genre_ids: [99],
    overview:
      'The photographer and filmmaker Guillermo Cantón premiered “Dos Gringos”, a one-hour documentary on the history of the last 100% Argentine automaker: Industrias Eduardo Sal-Lari (IES). Based on Citroën products, IES manufactured low-cost vehicles in the Buenos Aires town of Mercedes, between 1983 and 1990.',
    release_date: '2021-04-01'
  },
  {
    id: 817177,
    title: 'Lamentation',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/AortsRr4qqGfAU0Vs7o3RumSVpp.jpg',
    genre_ids: [27],
    overview:
      'Samuel, a young Filipino expatriate in Dubai, submerged between his financial obligations and bizarre roommate that turned his life into a sinister revelation.',
    release_date: '2021-04-08'
  },
  {
    id: 816711,
    title: 'Lust for Gold: A Race Against Time',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wqrKavooKU8atYzlsgfozdaQrDR.jpg',
    genre_ids: [99],
    overview:
      'A team of modern adventurers is on a quest for gold in the mountains of eastern Arizona.',
    release_date: '2021-04-01'
  },
  {
    id: 816701,
    title: 'Lilac Lips, Dutchess County',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/whqQTNBfsqlkNDmE5GIosuOMW9M.jpg',
    genre_ids: [35, 14],
    overview: 'A glorious fantastical modern retelling of Narcissus.',
    release_date: '2021-04-01'
  },
  {
    id: 816546,
    title: 'MOV_20202809',
    popularity: 0.6,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jCkbCnRoI0jwaWVRV0Ycq6AmLHi.jpg',
    genre_ids: [9648, 27, 53],
    overview:
      'Pilar and Martin are finishing a day on the shore of a lake. While Pilar is filiming the quite night on her phone, some strange noises coming from the water start haunting them and showing them that they may not be alone.',
    release_date: '2020-10-06'
  },
  {
    id: 816282,
    title: 'Tearing',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2N6wVd7EMSsk5Iw598pNXQ0PEw8.jpg',
    genre_ids: [10770, 18],
    overview:
      "In this TV drama, seventeen-year-old Maja helps her older brother Bokan to solve a debt that he cannot pay because he is in prison. Wanting to prove herself, Maja insists on doing the job on her own without nobody's help. This decision will take her into a world of violence for which she is not ready.",
    release_date: '2021-04-05'
  },
  {
    id: 815066,
    title: "karen don't be sad",
    popularity: 0.6,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cemOV7lo93Xb4CLt1JNUz9iFoDn.jpg',
    genre_ids: [10402, 10751, 18],
    overview:
      'Noki, a 17-year-old girl, spends her days in isolation due to Covid-19. Staying at home forces her to deal with tensions between her family members and especially between her father who rarely devotes much time to her.',
    release_date: '2021-04-05'
  },
  {
    id: 815053,
    title: 'Half Breed',
    popularity: 0.6,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5cZ2CPNhDrgUmMdNRlrUAsIXtO5.jpg',
    genre_ids: [],
    overview:
      'A new drama written by Natasha Marshall adapted from the play of the same name. It is a semi-autobiographical, coming-of-age drama about finding your voice.',
    release_date: '2021-04-06'
  },
  {
    id: 814857,
    title: 'Promise',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Major Connell, a WWII Allied fighter pilot, is flying 10,000 feet over the South Pacific when the unthinkable happens - Enemy artillery rattles his plane forcing the F4F Wildcat to crash land into Japanese occupied territory. Fighting for his life, Connell is forced to confront his humanity, forging an unlikely friendship with a young Japanese soldier to uphold a promise he made to the love of his life.',
    release_date: '2021-03-28'
  },
  {
    id: 814761,
    title: 'How do Water do',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/yzp5blhnxHDhlmuHAz6mTMZvjyU.jpg',
    genre_ids: [18],
    overview:
      'Nivi, a teenage girl, tries to re-navigate her life after casual meetings with acquaintances.',
    release_date: '2021-04-05'
  },
  {
    id: 814751,
    title: 'Kaatinarike',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/kyhy46ckU2sU3KTgLOXoAh97N7j.jpg',
    genre_ids: [],
    overview:
      'The story of a poor family, a father, mother and two children live happily in a beautiful valley. Adversities affect them. But they overcome them with their true faith and fine deeds.',
    release_date: '2021-04-04'
  },
  {
    id: 814648,
    title: 'Leaving Track\u202as\u202c',
    popularity: 0.767,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'The rock stars of motorcycle design and the founder of a famous museum find recovery and kinship on an improbable journey together. Beneath his success as a financier and Nat Geo photographer, Bobby Haas grapples with a lifetime of trauma in his quest to create a museum like no other. The lives of the custom builders and the founder himself are changed forever by this shared chase for perfection.',
    release_date: '2021-03-31'
  },
  {
    id: 814487,
    title: 'Gemini',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lC4cM8OXa3yKfJ42VAG5fS5F94A.jpg',
    genre_ids: [12, 18, 14],
    overview: 'Gemini season begins on a day that ushers in the heat and electricity of summer.',
    release_date: '2021-03-31'
  },
  {
    id: 814012,
    title: 'Ramsés II / Ouvir Angela Maria',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/m6i05C4okS1zfXjnl7LZCDQwvwK.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-04'
  },
  {
    id: 813658,
    title: 'Buzz Cut',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lKUjMY5coIS22DtkC7wG3shmJ2.jpg',
    genre_ids: [35, 27],
    overview:
      'New Zealand\'s first slasher movie! The Hash House Harriers ("a drinking club with a running problem") encounter a killer Bee Keeper in a crazy Kiwi horror-comedy that is part Animal House and part 80\'s slasher movie.',
    release_date: '2021-03-31'
  },
  {
    id: 813650,
    title: 'Heavens Hands',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/h7evrjDoH1JzSg0dhHXQcTxHs2t.jpg',
    genre_ids: [18, 14],
    overview: 'A strange new child causes conflict for the cast and crew of a reality TV show.',
    release_date: '2021-04-04'
  },
  {
    id: 812961,
    title: 'Golper Mayajal',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ip1jDGYttuR3e22IHvESj2EMdS6.jpg',
    genre_ids: [10749],
    overview:
      '"Golper Mayajal” is an anthology of 4 love stories, based on the theme of “Does love really exist – can it really lead to fruition?',
    release_date: '2021-04-02'
  },
  {
    id: 812928,
    title: 'Wings are not for sale',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'An unprecedented journey into the world of fast fashion in which the personal reflections of a group of fashion students intersect with the political one, addressing the impacts of the fast fashion industry on human rights and the environment through direct testimonies and exclusive interviews with experts and activists.',
    release_date: '2021-03-29'
  },
  {
    id: 812860,
    title: 'Skepticism',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/tG7EIhUrDEVCqDnk0i6Sua7QE3z.jpg',
    genre_ids: [28, 18, 14, 9648, 53],
    overview: 'A ballerina is skeptical of her surroundings, so she escapes into her own world.',
    release_date: '2021-03-31'
  },
  {
    id: 812841,
    title: "Bouchra's Day On The Town",
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/njsuia5qIdUSqOsNphcw5WNoQBb.jpg',
    genre_ids: [18, 9648, 53],
    overview:
      'A cinephile is out for a day on the town, suddenly feeling like they are in a movie themselves.',
    release_date: '2021-03-31'
  },
  {
    id: 812729,
    title: 'Lake on Fire',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/sLqos3Jtwy7iNUZDz0IPpDcpzXI.jpg',
    genre_ids: [18, 878],
    overview:
      "Lake on Fire is a short sci fi film telling the story from a distant future of how two former lovers are reunited in a virtual forest created by an artificial intelligence. Flowers are talking, the forest is shifting colors while fighting virtual wars and the former couple realise they can't change the past.",
    release_date: '2020-01-01'
  },
  {
    id: 812566,
    title: 'MARRIAGE',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xnYjRTyD9ndzTqUGBab6FWOmGl0.jpg',
    genre_ids: [],
    overview: 'I. Noise  II. Marriage',
    release_date: '2021-03-31'
  },
  {
    id: 812419,
    title: 'Noga Can Fly',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/wHlOu5c15U6tsSt3aCjosfmyYbt.jpg',
    genre_ids: [14, 35],
    overview: 'Noga is doing yoga... Until she finds out she can fly',
    release_date: '2021-04-05'
  },
  {
    id: 812300,
    title: 'Ladies of the Wood',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/lgnIh4P514sDMBBQLR80gPqSS2D.jpg',
    genre_ids: [99],
    overview:
      'Sexual subcultures and the outsiders of society welcome us in the Boulogne forest west of Paris, where anyone can live out their inner fantasies.',
    release_date: '2021-01-24'
  },
  {
    id: 812248,
    title: 'A Laboral Day',
    popularity: 0.6,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/y9I4iagxbjZQJvVpWKl2NCQtycc.jpg',
    genre_ids: [53, 80, 18, 9648],
    overview: '',
    release_date: '2021-03-29'
  },
  {
    id: 811981,
    title: '킬러파티 (양수리 살인사건)',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jmH832fPVVWTwCf4c3qozv0Drpm.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-03-31'
  },
  {
    id: 811980,
    title: 'Fruits of the Heart',
    popularity: 0.759,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cTj3hNtnbdcO5xe2RP0caZ7iBPu.jpg',
    genre_ids: [35],
    overview: 'The epic tale of a mother and her daughter.',
    release_date: '2021-03-30'
  },
  {
    id: 811956,
    title: 'Challenge Cup: Third Round Draw',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'Watch live coverage of the third round draw for the Challenge Cup.',
    release_date: '2021-03-29'
  },
  {
    id: 811859,
    title: 'Mercúrio',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qFYQJAKM56On8cMOrIJ8GoWjoEl.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-03-29'
  },
  {
    id: 811762,
    title: 'Nota de Corte',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jjvkxbdg1Cl9vwIqEdPEYakQFmB.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-03-29'
  },
  {
    id: 811554,
    title: 'Aarkkariyam',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gAahiexItRHi8LtC160snoBMoG2.jpg',
    genre_ids: [18],
    overview:
      "Shirley and Roy in the middle of an impending Covid lock-down and a personal financial crisis, leave their Mumbai home for Shirley's home in Pala where her father Ittyavira stays. Roy soon finds that her home is not what he thought it is.",
    release_date: '2021-04-01'
  },
  {
    id: 811405,
    title: 'Wij, Roger Raveel',
    popularity: 0.713,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'Documentary about the belgian painter Roger Raveel (1921-2013) as part of his centennial celebration.',
    release_date: '2021-03-28'
  },
  {
    id: 810534,
    title: 'Sing Along If You Know The Words',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview:
      'Determined to conquer his social anxiety, Ben throws a dinner party that challenges his harmonious limitations.',
    release_date: '2021-04-09'
  },
  {
    id: 810409,
    title: 'West Estate',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'West Estate spotlights the severe housing problems in Hong Kong, taking the spirit of resistance outside of the protest. The damaged walls in the cage-like tenements reflect the many forms of social injustice as well as Hongkongers’ widespread sense of rootlessness. Connecting three stories from different households like puzzle pieces, the film depicts people’s despair over issues of family, sexuality, love, and freedom.',
    release_date: '2020-01-10'
  },
  {
    id: 810290,
    title: "I Don't Want To Cry Later",
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/ra1fXMNxj70MKAG1uWTonuAFySV.jpg',
    genre_ids: [10749],
    overview: 'Mika and Ori are spending the day together (again).',
    release_date: '2021-04-05'
  },
  {
    id: 810114,
    title: "Shepherd's Song",
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      'Growing up, Jenya longed for a place where she belonged. She found it in the nomadic life of sheep herding. Now, she traverses California with her flock, helping to manage grassland and restore ecosystems.',
    release_date: '2021-04-01'
  },
  {
    id: 809564,
    title: 'Creative Vision',
    popularity: 0.729,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/39srG54beCBnkE2guA7HLEB6TzC.jpg',
    genre_ids: [],
    overview:
      'Mae Studios sits down with Luigi Penate, the filmmaker behind "Awareness", to speak about the making of the film.',
    release_date: '2021-03-30'
  },
  {
    id: 809267,
    title: 'Speed Rescue',
    popularity: 0.721,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rF5BdEX4yWic6JbeUAlgPCC17Gs.jpg',
    genre_ids: [28],
    overview: '',
    release_date: '2021-03-29'
  },
  {
    id: 808206,
    title: 'Una casa lejos',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4SbBmC2ZaQrakd9BuFjnt09LlLg.jpg',
    genre_ids: [18],
    overview: '',
    release_date: '2021-04-08'
  },
  {
    id: 806855,
    title: 'Ei Ami Renu',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/w25IUZXgWKz2a2h6fK61DkYZr6o.jpg',
    genre_ids: [],
    overview:
      "The movie Ei Ami Renu is mainly a story of the '80s, made in the context of the '80s. The story of the movie is reminiscent of the '80s. All the cultures of the '80s have been reflected in the movies. Ei Ami Renu's movie is based on the use of the old days the telephone, music, manners. Ei Ami Renu's story is based on the same novel, written by Samaresh Majumder.",
    release_date: '2021-04-09'
  },
  {
    id: 806850,
    title: 'Flyover',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3TX3Z2yezxQ5O2tukRqXETC5Kqd.jpg',
    genre_ids: [53],
    overview:
      'A gripping thriller, Flyover is the story of Bidisha, a journalist who is working around a report on traffic rule violations. One night, she gets arrested for murder which leads to a gripping saga of investigation.',
    release_date: '2021-04-02'
  },
  {
    id: 806627,
    title: 'Handbook for a Privileged European Woman',
    popularity: 0.779,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/xDXs3fH0HVNUjeU4S1GQKUKLDjT.jpg',
    genre_ids: [35],
    overview: 'How to ride a mechanical bull and not care that everyone is picturing you naked.',
    release_date: '2021-01-20'
  },
  {
    id: 806344,
    title: 'Para Colorir',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gOMvOTZru7ThTyEYlwb7SJWdZ3s.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-03-20'
  },
  {
    id: 806227,
    title: 'Turn: The Street',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8FLaGGHgrvT8tdm1w0aDFh86ijk.jpg',
    genre_ids: [18, 10749],
    overview: '',
    release_date: '2021-03-31'
  },
  {
    id: 801595,
    title: 'Tempo de Pipa',
    popularity: 0.713,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: '',
    release_date: '2021-03-28'
  },
  {
    id: 796302,
    title: 'Long Road Home',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/vLiIqiDKljpn6wXYyBTc0Qf99NW.jpg',
    genre_ids: [18, 53],
    overview:
      'The film tells about a young man named Sergei, who lives an ordinary measured life. Suddenly, strange visions begin to visit him, the meaning of which he cannot understand. To his surprise, some of these visions soon begin to come true. Neither the young man, nor his relatives and friends are ready to accept what is beginning to happen around him. Soon Sergei will have to find out the essence of these phenomena, reconsider his views on the world around him and realize what is the true meaning of our unpredictable, mysterious, and sometimes frightening life ...',
    release_date: '2017-12-11'
  },
  {
    id: 794713,
    title: 'FOMO',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/r6za96o2G3bZQ0ZaAxumCh4C42s.jpg',
    genre_ids: [],
    overview: '',
    release_date: '2021-04-01'
  },
  {
    id: 794008,
    title: 'Koi Jaane Na',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/g5a58rPtVzy8Ygt4w0vPn6Mrxfx.jpg',
    genre_ids: [53, 9648],
    overview:
      'A heartbroken writer struggling with writer`s block goes to a quiet hill station where he finds love again but uncovers a copycat serial killer who has mysteriously come alive and is killing everyone around him.',
    release_date: '2021-04-02'
  },
  {
    id: 776697,
    title: 'Bruiser',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/rmhc59Px5SU98DjZLt22ZKJ5dkk.jpg',
    genre_ids: [],
    overview:
      'After his father gets into a fight at a bowling alley, Darious begins to investigate the limitations of his own manhood.',
    release_date: '2021-03-16'
  },
  {
    id: 776490,
    title: 'The Pink Cloud',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5bLB5RnwXNxrXji49jcoxWopFnk.jpg',
    genre_ids: [18, 878],
    overview:
      'Giovana and Yago are strangers who share a spark after meeting at a party. When a deadly cloud mysteriously takes over their city, they are forced to seek shelter with only each other for company. As months pass and the planet settles into an extended quarantine, their world shrinks, and they are forced to come to terms with an accelerated timeline for their relationship. With all their other interactions governed by screens, and with the strain of isolation setting in, Giovana and Yago struggle to reinvent themselves and reconcile the differences that threaten to tear them apart.',
    release_date: '2021-04-01'
  },
  {
    id: 759845,
    title: 'Crazy Uncles',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'Telugu Movie',
    release_date: '2021-03-31'
  },
  {
    id: 759843,
    title: 'Goldman',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'Telugu Movie',
    release_date: '2021-03-31'
  },
  {
    id: 759841,
    title: 'Godhari Kathalu',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'Telugu Movie',
    release_date: '2021-03-31'
  },
  {
    id: 759838,
    title: 'Naluguritho Narayana',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [],
    overview: 'Telugu Movie',
    release_date: '2021-03-31'
  },
  {
    id: 747387,
    title: 'The Fever',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pdFdc0S8ftQAXVhFlSAFV2RTHsN.jpg',
    genre_ids: [99],
    overview:
      'Malaria has killed more people than all other diseases and wars on Earth combined. In Subsaharan Africa, one child still dies every 60 seconds. Nobody, including Big Pharma, the Gates Foundation, or the WHO, seems to believe that Africans have their own solutions.  Director Katharina Weingartner takes us to an area that she calls the “ground zero” of malaria: the countries around the Lake Victoria basin in East Africa. In Uganda and Kenya, she found people who have taken action against malaria using local strategies. The Fever portrays the fight against malaria in East Africa as a case study in greed and courage.',
    release_date: '2020-09-25'
  },
  {
    id: 743479,
    title: 'Karalahti',
    popularity: 0.864,
    vote_average: 6.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/172kkW2BqXtvi2pxiPmiTlADxZR.jpg',
    genre_ids: [99],
    overview:
      "Documentary movie about a Finnish professional ice hockey player, Jere Karalahti. More than 50 people have been interviewed for the documentary film, such as Jere's family, coaches, journalists, fellow players and childhood friends. A profound documentary consists of archive material and dramatized scenes in addition to interviews.",
    release_date: '2021-02-05'
  },
  {
    id: 743417,
    title: 'Breakout Brothers',
    popularity: 1.208,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/y9nTbgBf9qwEHBE3TxIEfon5hZu.jpg',
    genre_ids: [28, 53],
    overview: '',
    release_date: '2020-12-11'
  },
  {
    id: 743408,
    title: 'Coffee or Tea?',
    popularity: 0.729,
    vote_average: 6.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gDzNg9oNJoX7P4i5GjgLIOrrwzw.jpg',
    genre_ids: [18, 35],
    overview:
      'Three young men with very different personalities. When they leave the big city to return to the thousand-year-old village of Yunnan, they each begin a crazy and dream journey.',
    release_date: '2020-09-26'
  },
  {
    id: 737595,
    title: '616',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1KhE2RaGp1Wp7F6JyG8a3uQuGrv.jpg',
    genre_ids: [16, 27],
    overview:
      'A boy keeps a zombie tied up in the basement as he searches for a cure to bring him back to life. How long will it take to find the cure?',
    release_date: '2019-10-03'
  },
  {
    id: 726220,
    title: 'Beans',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1V4euSWWsGRbtlXP4U3hXYTwoZK.jpg',
    genre_ids: [18],
    overview:
      'Twelve-year-old Beans is on the edge: torn between innocent childhood and reckless adolescence; forced to grow up fast and become the tough Mohawk warrior she needs to be during the Oka Crisis, the turbulent Indigenous uprising that tore Quebec and Canada apart for 78 tense days in the summer of 1990.',
    release_date: '2021-03-30'
  },
  {
    id: 719914,
    title: 'Waking Up',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/mgHZMIzGMC93DJ4D5wuYM6rbv68.jpg',
    genre_ids: [],
    overview:
      'A young gay man visits his uncle in the hospital, to discuss all the hilarity and the challenges of LGBT experiences across the generations.',
    release_date: '2021-03-31'
  },
  {
    id: 714017,
    title: 'Beasts',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/qGpzL3kW09SO7WsEQjMjHhJzpAQ.jpg',
    genre_ids: [18],
    overview:
      "Constance and her fiancé hope to one day take over, modernize and expand her father’s farm, on the verge of bankruptcy, to the large-scale farms that share the land and power. She gains the support of the influential and charismatic Sylvain, their fate quickly lying in his hands... When Sylvain's desire for her steps in the negotiations, Constance must face yet another kind of violence.",
    release_date: '2020-08-30'
  },
  {
    id: 711353,
    title: 'The Passerby',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [16],
    overview: 'On a summer day, the paths of two boys unexpectedly cross.',
    release_date: '2021-04-08'
  },
  {
    id: 705862,
    title: 'Shape of Red',
    popularity: 0.94,
    vote_average: 7,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4KykwGCfN45vPhuNUlpey3H1ev5.jpg',
    genre_ids: [10749],
    overview:
      "Toko Suguri is married and they have a lovely daughter. She doesn't have any major problems in her life. One day, Toko Suguri meets her former lover, Akihiko Kurata, at a friend's wedding. They haven't seen each other in ten years. Toko Suguri indulges in a sexual relationship with Akihiko Kurata.",
    release_date: '2020-02-21'
  },
  {
    id: 704285,
    title: 'Queen of Dots',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/l99ghQX7c3HmEixsyhyRu8YFRHd.jpg',
    genre_ids: [16],
    overview:
      'The Queen of Dots is also a queen of Instagram and Tumblr. Completed 20200202. Two minutes and two seconds. Love forever.',
    release_date: '2020-05-27'
  },
  {
    id: 699341,
    title: 'The Kite',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/fFIEerxgMWcxGDGjycROXCSEceC.jpg',
    genre_ids: [18],
    overview:
      'Days before her wedding, Mary learns the news of her fathers sudden passing. With their relationship so complex, she finds it hard to mourn.',
    release_date: '2019-08-15'
  },
  {
    id: 696363,
    title: 'The Wanderlust of Apu',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/oQq8ing3d0uHi550DmQcUuKmzcz.jpg',
    genre_ids: [],
    overview:
      'Avijatrik is a bengali movie directed by Subhrajit Mitra and based on a novel by Bibhutibhushan Bandyopadhyay',
    release_date: '2021-01-12'
  },
  {
    id: 682716,
    title: 'The Impossibility of Knowing',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview:
      "The Impossibility of Knowing documents Tan Pin Pin's attempt to capture the aura of spaces in Singapore that have experienced trauma.",
    release_date: '2010-09-11'
  },
  {
    id: 673157,
    title: 'Mermaid Season',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/h332L2pwq24aw0a9EwXjyr0Cyws.jpg',
    genre_ids: [14],
    overview:
      'Julian is a child who fantasizes about seeing a mermaid. He treasures a collection of clues that he finds after each day of fishing with Chava, his father.',
    release_date: '2019-03-13'
  },
  {
    id: 669228,
    title: 'The Ferry',
    popularity: 0.938,
    vote_average: 10,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6ZtctuBfW2FlfOgfzr20w6RPdq.jpg',
    genre_ids: [9648],
    overview:
      'On Christmas Eve, two women engage in a conversation in a boat, as it glides over the waters of a dark, cold pond. An unexpected event will leave its mark at the end of this crossing. Based on a short story by Lygia Fagundes Telles.',
    release_date: '2020-01-29'
  },
  {
    id: 649090,
    title: 'Dogs',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/jn7BVCyMOwfDh0JOfWMvOflX6E0.jpg',
    genre_ids: [16],
    overview:
      'A young Polish partisan flees from the Warsaw Uprising. Whilst hiding in the yard of a countryside manor, he is chased up a tree by a large wolfhound. With his rifle out of reach, there seems to be no way to escape his predicament.',
    release_date: '2021-04-08'
  },
  {
    id: 641700,
    title: 'Sweet Night',
    popularity: 0.6,
    vote_average: 7.3,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1RCXDZ5shdXZaOa8a6DNKH2tSXA.jpg',
    genre_ids: [16],
    overview:
      'During the Himalayan winter, a bear cannot fall asleep. He thinks too much and is in the doldrums. When a white monkey suggests him going to eat some honey at his aunt to change his ideas, a beautiful winter night opens upon them.',
    release_date: '2018-11-18'
  },
  {
    id: 637412,
    title: 'Behave, Kid',
    popularity: 0.6,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/pzNCqvJalcbamVzeZTJIp8SsprF.jpg',
    genre_ids: [18, 10749],
    overview:
      'In a rural town, the relationship between teacher and student goes beyond the classroom and transforms their lives.',
    release_date: '2019-01-01'
  },
  {
    id: 637291,
    title: 'Looking for A Lady with Fangs and A Moustache',
    popularity: 0.681,
    vote_average: 7.5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/hoLWkM0cs7W7bng0bG5aASk5BJP.jpg',
    genre_ids: [9648],
    overview:
      'When an ambitious, skeptical young entrepreneur faces strange portents of impending death, he is thrust into a mystical world of ancient wisdom and traditional beliefs that points to a special woman as his only hope for life.',
    release_date: '2019-10-23'
  },
  {
    id: 637233,
    title: 'Yellow Ribbon',
    popularity: 0.746,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/yTIo0f4XayvXBkUZQIu5HZ4qZBF.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-04-01'
  },
  {
    id: 615198,
    title: 'Big Wolf & Little Wolf',
    popularity: 0.6,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/A6RPAqJ5WwiD1szU3lNLjULo4Bq.jpg',
    genre_ids: [10751, 16],
    overview:
      'Big Wolf lives quite contentedly alone under his tree. One day he sees a Little Wolf approaching him who seems determined to keep him company. But Big Wolf has no need for his company. He likes the quiet life and his routine. At least, that’s what he thought…  Loosely based on the kid’s book by Nadine Brun-Cosme & Olivier Tallec, published by Flammarion jeunesse',
    release_date: '2019-10-16'
  },
  {
    id: 591648,
    title: "Rock'n'Roll Eddie",
    popularity: 0.6,
    vote_average: 5,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/iCRKLZyn6WF03R6U3zJnzwD421Z.jpg',
    genre_ids: [12, 10751, 35],
    overview:
      'Two kids bring in a rock-and-roll fugitive from another world pursued by merciless bounty hunters, and in order to save his life they have to find a way to send him back to where he came from.',
    release_date: '2019-03-21'
  },
  {
    id: 579731,
    title: 'Liver, or Story of a Startup',
    popularity: 1.267,
    vote_average: 6,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/p815MwKOo1SFz2QISAcYyo28Fb8.jpg',
    genre_ids: [35, 80],
    overview:
      "1990s. Three friends Vova, Mamed and Lyokha go to school and dream, like everyone else in Russia at this time, to open their own business. But first you need money. Everything seemed to be going well, but they were not allowed to the final exams. His Majesty the case in the image of the regional semi-criminal authority Kostik comes to the aid of aspiring entrepreneurs. Kostya's liver has rotted - he needs a new one. Young businessmen get the coveted organ, but only with it, with this organ, it is not so simple.",
    release_date: '2021-03-31'
  },
  {
    id: 564058,
    title: 'Yo niña',
    popularity: 0.609,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6g1j5kyAsWjnLKv4xt5cehJ3hsV.jpg',
    genre_ids: [18],
    overview:
      'A couple moves to Patagonia escaping from the impositions of modern capitalist society. At first, the place, the people, the life seems to be what they are looking for. A new world away from everything. But soon they will discover that not everything is so magical or so simple, nor are they prepared to deal with that life. They will think about giving up. They will return to the city, but they do not fit there either: the place they left behind has already changed them. They will make a new attempt, a revealed truth, it will make everything stumble stronger than ever. But as they go through this, they will grow stronger to continue trying a new life.',
    release_date: '2018-11-15'
  },
  {
    id: 457689,
    title: 'She Is the Ocean',
    popularity: 0.707,
    vote_average: 8,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/gAlVtlXKlUPW0itwx18SOJ4Ar2K.jpg',
    genre_ids: [99],
    overview:
      'Examine the lives of eight extraordinary women who define the courage and spirituality it takes to lead a life of the sea. A Big Wave Surfer, a Freediver, a Midwife, a scientist, a fourteen years old surfing prodigy, even a Cliff Diver.',
    release_date: '2020-10-16'
  },
  {
    id: 830598,
    title: 'The Truth About Hastings',
    popularity: 0,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: "Marjorie's 93rd birthday descends into darkness.",
    release_date: '2021-05-01'
  },
  {
    id: 830583,
    title: 'Soldaten',
    popularity: 0,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/A6MUA6AZsIridYxeHgRgcU8iVXM.jpg',
    genre_ids: [99],
    overview: '',
    release_date: '2021-05-05'
  },
  {
    id: 830582,
    title: '一百零八',
    popularity: 0,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/cqPqXhdEq07kck99UA012qf1hZJ.jpg',
    genre_ids: [18],
    overview: '',
    release_date: '2021-05-15'
  },
  {
    id: 830580,
    title: 'Monobloc',
    popularity: 0,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92null',
    genre_ids: [99],
    overview: '',
    release_date: '2021-05-05'
  },
  {
    id: 830312,
    title: 'The Place',
    popularity: 1.4,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/a1nK2uPysP2GwzURFyjczmwpSc2.jpg',
    genre_ids: [18],
    overview: 'The Place is Short Film About Palestine',
    release_date: '2021-05-15'
  },
  {
    id: 830295,
    title: "La Traviata - Teatro dell'Opera di Roma",
    popularity: 0.741,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/m25yOfjidn2EbYc07NR9kNYt1RQ.jpg',
    genre_ids: [10770],
    overview: '',
    release_date: '2021-04-09'
  },
  {
    id: 830178,
    title: 'Swing Country',
    popularity: 1.4,
    vote_average: 0,
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/e50dUwSY4PmzLKHOzhjNGSAQEt5.jpg',
    genre_ids: [],
    overview:
      'In this endearingly homespun documentary focusing on the run-up to the 2020 National Election, filmmakers follow Wisconsinites from the Fox Valley area who work to swing Wisconsin back to blue.',
    release_date: '2021-05-13'
  }
];

export default mockMoviesShowing;
