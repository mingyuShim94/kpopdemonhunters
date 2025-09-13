export interface CharacterSummary {
  id: string;
  name: string;
  description: string;
  image: string;
  role: string;
}

export interface PerformanceOutfit {
  name: string;
  description: string;
  occasion: string;
  imagePath: string;
}

export interface TriviaItem {
  category: string;
  title: string;
  description: string;
}

export interface CharacterDetails {
  name: string;
  koreanName?: string;
  fullName?: string;
  gender?: string;
  nationality?: string;
  species?: string;
  affiliatedGroup?: string;
  position?: string;
  role: string;
  age?: string;
  height?: string;
  weapon?: string;
  weaponEvolution?: string;
  voiceActor?: string;
  voiceActors?: {
    en?: string;
    kr?: string;
    jp?: string;
  };
  singingVoice?: {
    en?: string;
    kr?: string;
    jp?: string;
  };
  family?: Array<{
    relation: string;
    name: string;
  }>;
  overview?: string;
  appearance?: string;
  performanceOutfits?: PerformanceOutfit[];
  personality: string;
  quotes: string[];
  abilities: string[];
  background: string;
  storyArc?: string;
  relationships?: Array<{
    name: string;
    relation: string;
    description: string;
  }>;
  combatStyle?: string;
  favoriteFood?: string;
  hobbies?: string[];
  fears?: string[];
  trivia?: TriviaItem[];
  relatedOST: string[];
}

export const characterSummaries: CharacterSummary[] = [
  {
    id: "rumi",
    name: "Rumi",
    description:
      "The driven leader of HUNTR/X, haunted by a demonic secret. She channels her immense magical power through a sacred saingeom sword and her powerful voice. Voiced by Arden Cho (speaking) and EJAE (singing).",
    image: "/images/characters/rumi.webp",
    role: "HUNTR/X Leader",
  },
  {
    id: "mira",
    name: "Mira",
    description:
      "The fashion-forward main dancer of HUNTR/X. Mira's elegance translates to the battlefield where she wields a deadly woldo. Voiced by May Hong (speaking) and Audrey Nuna (singing).",
    image: "/images/characters/mira.webp",
    role: "HUNTR/X Main Dancer",
  },
  {
    id: "zoey",
    name: "Zoey",
    description:
      "The rebellious rapper, lyricist, and maknae of HUNTR/X. Zoey's sharp wit is as deadly as the throwing knives she uses in combat. Voiced by Ji-young Yoo (speaking) and Rei Ami (singing).",
    image: "/images/characters/zoey.webp",
    role: "HUNTR/X Main Rapper",
  },
  {
    id: "jinu",
    name: "Jinu",
    description:
      "The charismatic and conflicted leader of the rival group, Saja Boys. A former human who traded his soul for fame, he now serves the demon king. Voiced by Ahn Hyo-seop (speaking) and Andrew Choi (singing).",
    image: "/images/characters/jinu.webp",
    role: "Saja Boys Leader",
  },
  {
    id: "abby",
    name: "Abby 'Abs' Saja",
    description:
      "The muscular and intimidating member of the Saja Boys, providing brute force for the demonic group. Voiced by SungWon Cho (speaking) and Neckwav (singing).",
    image: "/images/characters/abby.webp",
    role: "Saja Boys Member",
  },
  {
    id: "romance",
    name: "Romance Saja",
    description:
      "The smooth-talking, romantic member of the Saja Boys, who uses his charm as a weapon. Voiced by Joel Kim Booster (speaking) and samUIL Lee (singing).",
    image: "/images/characters/romance.webp",
    role: "Saja Boys Member",
  },
  {
    id: "baby",
    name: "Baby Saja",
    description:
      "The deceptive maknae of the Saja Boys, whose youthful appearance hides a sinister nature. Vocals by Danny Chung.",
    image: "/images/characters/baby.webp",
    role: "Saja Boys Member",
  },
  {
    id: "gwi-ma",
    name: "Gwi-Ma",
    description:
      "The ultimate evil, a powerful and manipulative demon king seeking to merge the human and demon realms. Voiced by the legendary Lee Byung-hun.",
    image: "/images/characters/gwi-ma.webp",
    role: "Demon King",
  },
  {
    id: "celine",
    name: "Celine",
    description:
      "Rumi's adoptive mother and the wise mentor to HUNTR/X. A former K-pop star and demon hunter herself. Voiced by Yunjin Kim (speaking) and Lea Salonga (singing).",
    image: "/images/characters/celine.webp",
    role: "Mentor",
  },
  {
    id: "bobby",
    name: "Bobby",
    description:
      "The ever-enthusiastic and slightly clueless manager of HUNTR/X, trying to keep the group's demon-hunting life a secret. Voiced by Ken Jeong.",
    image: "/images/characters/bobby.webp",
    role: "Manager",
  },
  {
    id: "mystery",
    name: "Mystery",
    description:
      "A mysterious member of the Saja Boys with unknown motives and a quiet demeanor.",
    image: "/images/characters/mystery.webp",
    role: "Saja Boys Member",
  },
  {
    id: "derpy",
    name: "Derpy",
    description:
      "A supernatural blue tiger and former pet of Jinu, known as the ultimate 'scene-stealer' mascot character. Based on Korean folk art tigers with his signature derpy expression and obsession with fixing fallen objects.",
    image: "/images/characters/derpy.webp",
    role: "Mascot Character",
  },
  {
    id: "sussie",
    name: "Sussie",
    description:
      "A supernatural six-eyed magpie and Derpy's companion. Intelligent, sassy, and mischievous with kleptomaniacal tendencies, she wears a stolen black Korean gat hat and is nicknamed the 'Galaxy Magpie' by fans.",
    image: "/images/characters/sussie.webp",
    role: "Mascot Character",
  },
];

export const characterDetails: Record<string, CharacterDetails> = {
  rumi: {
    name: "Rumi",
    koreanName: "강루미",
    fullName: "Kang Rumi",
    gender: "Female",
    nationality: "Republic of Korea",
    species: "Half-Human, Half-Demon (Cambion)",
    affiliatedGroup: "HUNTR/X",
    position: "Leader, Main Vocalist",
    role: "HUNTR/X Leader & Main Vocalist",
    age: "23-24 years old (Born in 2001-2002)",
    weapon: "Saingeom (Four Tigers Sword)",
    weaponEvolution:
      "Later enhanced into a Chilseongkal (Seven Star Sword) with a dokkaebi motif",
    voiceActors: {
      en: "Arden Cho, Rumi Oak (child)",
      kr: "Shin Na-ri",
      jp: "Minako Kotobuki",
    },
    singingVoice: {
      en: "EJAE",
      kr: "EJAE",
      jp: "Tsutsumi Ikuko",
    },
    family: [
      {
        relation: "Biological Mother",
        name: "Ryu Mi-yeong",
      },
      {
        relation: "Adoptive Mother",
        name: "Celine",
      },
      {
        relation: "Biological Father",
        name: "Unnamed Demon",
      },
    ],
    overview:
      "Rumi Kang is the main protagonist of the 2025 animated musical fantasy, K-Pop Demon Hunters, produced by Sony Pictures Animation for Netflix. She is the charismatic leader and main vocalist of the world-renowned K-pop girl group, HUNTR/X. While captivating audiences on stage, Rumi and her bandmates, Mira and Zoey, lead a secret life as demon hunters. However, Rumi harbors a deeper secret she conceals even from her closest friends: she is a cambion, born to a human mother and a demon father.",
    appearance:
      "Rumi is depicted as a tall, athletic young woman with classic Korean beauty. Her most defining feature is her long, brilliant purple hair, which she almost always wears in a thick dragon tail braid—a style she inherited from her mother, Ryu Mi-yeong. As an idol, she sports bold stage makeup with intense eyeliner and heavy mascara to accentuate a fierce persona. Her outfits blend modern K-pop glamour with traditional Korean aesthetics, often featuring a modernized norigae (a decorative tassel pendant).",
    performanceOutfits: [
      {
        name: "How It's Done",
        description:
          "An edgy, streetwear-inspired outfit consisting of a puffy bomber jacket over a white mock-neck crop top (to hide her demon markings), high-waisted denim shorts, and platform combat boots.",
        occasion: "Opening number performance",
        imagePath: "/images/characters/rumi/outfits/01-how-its-done.webp",
      },
      {
        name: "Golden (Idol Awards)",
        description:
          "A polished black, white, and gold ensemble, featuring a white sleeveless top and shorts, a cropped black jacket detailed with gold chains, and knee-high white lace-up boots.",
        occasion: "Awards ceremony performance",
        imagePath: "/images/characters/rumi/outfits/02-golden-idol-awards.webp",
      },
      {
        name: "Kill Saja",
        description:
          "A stealthy, all-black leather combat outfit that balances style with functionality, allowing her to wield her glowing purple sword during the ambush on the Saja Boyz.",
        occasion: "Infiltration and ambush at a variety show taping",
        imagePath: "/images/characters/rumi/outfits/03-kill-saja.webp",
      },
      {
        name: "Takedown (Train Battle)",
        description:
          "A stealthy, all-black leather combat outfit that balances style with functionality, allowing her to wield her glowing purple sword during the performance.",
        occasion: "Action sequence performance",
        imagePath:
          "/images/characters/rumi/outfits/04-takedown-train-battle.webp",
      },
      {
        name: "Free",
        description:
          "A softened look with a simple cropped hoodie, high-waisted rolled-up jeans, and sneakers. This outfit is worn during a pivotal, intimate duet with Jinu, where Rumi begins to confront and embrace her secret identity.",
        occasion: "Intimate duet with Jinu",
        imagePath: "/images/characters/rumi/outfits/05-free.webp",
      },
      {
        name: "What It Sounds Like (Finale)",
        description:
          "A disheveled version of her 'Golden' outfit, with the jacket removed to fully reveal the glowing purple and iridescent demon markings swirling across her arms, neck, and face.",
        occasion: "Climax finale performance",
        imagePath:
          "/images/characters/rumi/outfits/06-what-it-sounds-like-finale.webp",
      },
      {
        name: "Music Show Stage",
        description:
          "A vibrant stage outfit featuring a striking magenta cropped jacket, an ornate gold-patterned mock-neck crop top, paired with dark blue skinny jeans and black boots. It's a flashy performance costume designed for both style and mobility during a dynamic K-pop performance.",
        occasion: "Weekly music show performance",
        imagePath: "/images/characters/rumi/outfits/07-music-show-stage.webp",
      },
      {
        name: "Comfort Meal",
        description:
          "A cozy and casual outfit featuring a beige hoodie over a turtleneck. This is worn during a heartfelt scene where Rumi is comforted by her members over a meal of Seolleongtang after experiencing issues with her voice, highlighting the group's supportive bond offstage.",
        occasion: "Dinner and comfort with the group",
        imagePath: "/images/characters/rumi/outfits/08-comfort-meal.webp",
      },
      {
        name: "Bukchon Date",
        description:
          "A comfortable outfit worn when rushing to meet Jinu at Bukchon Hanok Village. It features a beige hoodie paired with cute pajama pants patterned with teddy bears and choo-choo trains, which Jinu later playfully teases her about.",
        occasion: "Meeting Jinu at Bukchon Hanok Village",
        imagePath: "/images/characters/rumi/outfits/09-bukchon-date.webp",
      },
      {
        name: "A Night of Doubt",
        description:
          "A beige hoodie paired with plaid pajama pants featuring cat and star patterns. Rumi wears this during a moment of deep introspection while practicing 'Takedown,' questioning the morality of killing all demons and the message of their song. This outfit appears in a key scene where Mira visits her room for a heart-to-heart talk, symbolizing her inner conflict and vulnerability.",
        occasion: "Heart-to-heart with Mira during 'Takedown' practice",
        imagePath: "/images/characters/rumi/outfits/10-night-of-doubt.webp",
      },
      {
        name: "Street Hunt",
        description:
          "A casual yet functional outfit consisting of a teal oversized hoodie, dark leggings, and sneakers. This is what Rumi is wearing while hunting demons on the bustling city streets at night, at the pivotal moment she sees the city's large digital billboards switch from her group, Huntrix, to their rivals, the Saja Boyz, symbolizing her growing anxiety and the escalating rivalry.",
        occasion: "Confronting the Saja Boyz's popularity during a street hunt",
        imagePath: "/images/characters/rumi/outfits/11-street-hunt.webp",
      },
      {
        name: "Moral Dilemma",
        description:
          "A simple and chic black turtleneck sweater. This is the outfit Rumi is wearing as her conviction about demon hunting is shaken after learning that Jinu is a slave to Gwima. When she confronts a demon, she feels empathy and asks, 'Are you a slave, too?', revealing her inner conflict.",
        occasion: "Questioning a demon out of empathy",
        imagePath: "/images/characters/rumi/outfits/12-moral-dilemma.webp",
      },
      {
        name: "Passing the Torch",
        description:
          "A comfortable matching sweatsuit set, featuring a beige off-the-shoulder crop top and wide-leg pants. This is worn during a crucial scene where Celine explains the significance of the Golden Soul Gate and passes the responsibility of their demon-hunting legacy to the next generation. This moment serves as a turning point for Rumi and her members as they embrace their destiny.",
        occasion: "Learning the meaning of the Golden Soul Gate from Celine",
        imagePath: "/images/characters/rumi/outfits/13-passing-the-torch.webp",
      },
      {
        name: "Happy Ending",
        description:
          "A bright and casual outfit worn after defeating Gwima, creating a new Golden Soul Gate, and relaxing at a sauna with her members. It consists of a pastel-colored crop top and high-waisted jeans. This is the final outfit of the movie, seen as she joyfully greets their fans on the street, smiling happily now that the battle is over.",
        occasion: "Meeting fans after the final battle",
        imagePath: "/images/characters/rumi/outfits/14-happy-ending.webp",
      },
      {
        name: "Rejected Confession",
        description:
          "A dark teal, off-the-shoulder crop top layered over a white tank top. Rumi wears this during a vulnerable moment when she asks Celine for permission to reveal her half-demon identity to her members, believing they would understand. This outfit is seen as she turns away, hurt and disappointed by the rejection, highlighting her sense of isolation and the burden of her secret.",
        occasion: "Being denied permission to confide in her members",
        imagePath:
          "/images/characters/rumi/outfits/15-rejected-confession.webp",
      },
    ],
    personality:
      "On the surface, Rumi is the confident, ambitious, and responsible leader of HUNTR/X. She is hardworking and relentlessly pushes herself and her group toward their goal of completing the 'Golden Honmoon'—a mission to permanently seal the demon world which she believes will also purify her of her demonic heritage. This drive can make her stubborn and prone to neglecting her own well-being. Beneath this driven exterior, Rumi is deeply compassionate and protective of her friends and fans. Her greatest struggle is the internal shame and fear she feels about her half-demon nature. Terrified of being seen as a 'monster' and rejected by her friends, she keeps her struggles hidden, which can make her seem emotionally distant. This insecurity leads to moments of intense self-doubt and a tendency toward reckless self-sacrifice, often choosing to face danger alone rather than burden her team.",
    quotes: [
      "If this is the Honmoon I'm supposed to protect, I'm glad to see it destroyed.",
      "Then, we'll just make a new one.",
    ],
    abilities: [
      "Expert Combat Skills: Thanks to years of rigorous training, Rumi is a formidable fighter, skilled in hand-to-hand combat and swordplay, seamlessly blending dance-like movements with her attacks. She is capable of parkour-level feats and has a combat sense so sharp she can predict and counter a demon's teleportation attacks.",
      "Powerful Singing Voice: Her voice possesses magical properties, channeling spiritual energy from her fans' emotions to power the Honmoon, a protective barrier against demonic forces. As the main vocalist, her power is depicted as the strongest in the group, and she can also use her voice to unleash sonic attacks.",
      "Weapon Conjuring & Soul Energy Projection: Rumi can summon her signature weapon, the Saingeom Sword, from pure energy. This magical blade is spiritually linked to her. She can also channel soul energy into it to release crescent-shaped energy slashes for ranged attacks.",
      "Idol Abilities: While officially the main vocalist, she is a 'hexagonal center'—an all-rounder who perfectly covers all areas, including dance, rap, and visuals. She performs incredibly difficult songs live while executing intense choreography and is implied to also act as a producer for the group.",
    ],
    background:
      "Her primary weapon is the Saingeom (Four Tigers Sword), a legendary Korean blade believed to repel evil. It is a spiritual heirloom passed down from her mother's generation of hunters. Later in the story, after absorbing Jinu's soul, it transforms into a massive Chilseongkal (Seven Star Sword) engraved with a dokkaebi (Korean goblin/demon) motif.",
    storyArc:
      "Raised as an idol and a hunter by her adoptive mother Celine, Rumi discovers that the demonic markings on her body are spreading, causing her to lose her voice. Believing that completing the Golden Honmoon will cure her, she rushes the release of their new song, 'Golden.' During this time, she encounters the rival boy band 'Saja Boys' and discovers they are demons. In a confrontation, their leader, Jinu, sees her secret markings but chooses to cover for her. This act, combined with learning of Jinu's own tragic past as a human, forms a complicated bond between them. Rumi makes a deal with him to win at the Idol Awards, but he betrays her at the last moment, exposing her half-demon nature to the world. Abandoned by her horrified friends, who point their weapons at her, and crushed by Jinu's betrayal, Rumi breaks down and begins to transform into a more demonic form. She begs Celine to kill her, but when Celine also fails to accept her as she is, Rumi despairs, declaring, 'If this is the Honmoon I'm supposed to protect, I'm glad to see it destroyed.' However, just as the Honmoon is about to shatter, Rumi finds the strength to accept her entire identity. She reappears and proclaims, 'Then, we'll just make a new one,' and begins to sing. Her song breaks the spell over Mira and Zoey, and the reunited HUNTR/X enters the final battle. Jinu sacrifices himself to save Rumi, and using his soul's power, she finally defeats the demon king Gwi-ma and creates a new, rainbow-colored Honmoon to protect the world. In the end, Rumi's markings remain, but she no longer hides them. Her relationship with her bandmates is healed, and HUNTR/X continues their career, stronger and more united than ever.",
    relationships: [
      {
        name: "Jinu",
        relation: "Love Interest / Rival",
        description:
          "Their relationship evolves from enemies to a complex bond built on understanding their shared supernatural burdens. Jinu ultimately sacrifices himself to save Rumi.",
      },
      {
        name: "Mira",
        relation: "Bandmate",
        description:
          "Fellow member of HUNTR/X who initially rejects Rumi when her demon nature is revealed, but later reconciles.",
      },
      {
        name: "Zoey",
        relation: "Bandmate",
        description:
          "Fellow member of HUNTR/X who initially rejects Rumi when her demon nature is revealed, but later reconciles.",
      },
      {
        name: "Celine",
        relation: "Adoptive Mother & Mentor",
        description:
          "Raised Rumi after her biological mother's death, but struggles to accept Rumi's demonic heritage.",
      },
      {
        name: "Gwi-ma",
        relation: "Arch-Nemesis",
        description:
          "The demon king whom Rumi ultimately defeats, creating a new Honmoon to protect the world.",
      },
    ],
    trivia: [
      {
        category: "Character Origin",
        title: "Design Creation",
        description:
          "Rumi's initial design was created in 2016 by director Maggie Kang's husband, artist Rad Sechrist, for a personal project. Director Kang loved the design and adapted it for the film.",
      },
      {
        category: "Name",
        title: "Real-Life Connection",
        description:
          "The character's name, Rumi, was given to Director Kang's real-life daughter, not the other way around. The film was in development for nine years, long enough for her daughter to voice the younger version of the character.",
      },
      {
        category: "Backstory",
        title: "Ancestral Home",
        description:
          "Her family's ancestral home is likely on Jeju Island, as suggested by traditional funeral markers (sandam) and statues (dol hareubang) shown in flashbacks. The story of how her human mother and demon father fell in love remains an unresolved mystery.",
      },
      {
        category: "Immunity",
        title: "Demon King Resistance",
        description:
          "Rumi is the only character with demonic blood who is immune to the demon king Gwi-ma's mental control.",
      },
      {
        category: "Fan Culture",
        title: "Viral Memes & Ships",
        description:
          "A brief, comical scene of Rumi sniffing kimbap became a viral meme among fans. In fan fiction, she is most often shipped with Jinu ('Rujinu') or Mira.",
      },
      {
        category: "Voice & Vocals",
        title: "Performance Inspiration",
        description:
          "English voice actress Arden Cho wanted Rumi to be as cool as real-life K-pop groups like BLACKPINK and aespa. Her singing vocalist, EJAE, is a renowned composer who has worked on hits like Red Velvet's 'Psycho' and aespa's 'Armageddon.'",
      },
      {
        category: "Sequel Hooks",
        title: "Future Possibilities",
        description:
          "The story leaves open possibilities for a sequel: Gwi-ma was only temporarily banished, the Honmoon was not the pure 'Golden' version, and Rumi's markings (which Gwi-ma called 'my markings') did not disappear.",
      },
    ],
    relatedOST: [
      "Golden",
      "TAKEDOWN",
      "What It Sounds Like",
      "How It's Done",
      "Free",
    ],
  },
  mira: {
    name: "Mira",
    koreanName: "미라",
    fullName: "Mira",
    gender: "Female",
    nationality: "Republic of Korea",
    species: "Human",
    affiliatedGroup: "HUNTR/X",
    position: "Visual, Main Dancer, Choreographer",
    role: "HUNTR/X Main Dancer & Visual",
    age: "23-24 years old (Estimated born c. 2001-2002)",
    weapon: "Gok-do (Curved Sword)",
    voiceActors: {
      en: "May Hong",
      kr: "Kim Do-young",
      jp: "Mutsumi Tamura",
    },
    singingVoice: {
      en: "Audrey Nuna",
      kr: "Audrey Nuna",
      jp: "MARU",
    },
    family: [
      {
        relation: "Father",
        name: "Unnamed Father",
      },
      {
        relation: "Mother",
        name: "Unnamed Mother",
      },
      {
        relation: "Older Brother",
        name: "Unnamed Older Brother",
      },
    ],
    overview:
      "Mira is the deuteragonist of K-Pop Demon Hunters. She is the main dancer, visual, and choreographer of the world-renowned K-pop girl group HUNTR/X. As the tallest member, she is known for her striking looks and exceptional dancing skills. Growing up as a 'problem child,' she secretly believes she is unworthy of having a family or friends. Alongside her groupmates Rumi and Zoey, she leads a double life as a demon hunter, wielding a Gok-do—a curved sword inspired by ancient Korean blades—in combat.",
    appearance:
      "Mira is the tallest member of HUNTR/X, known for her striking visual appearance that embodies the 'girl crush' concept. Her look was inspired by Korean model Ahn So-yeon. In early concept art, her hairstyle was different, and storyboards suggest she was once conceived as a character who always wore glasses, a popular look she sports with her casual outfits. She treasures HUNTR/X as her found family, symbolized by her norigae (tassel pendant) which features charms representing Rumi and Zoey.",
    performanceOutfits: [
      {
        name: "How It's Done Opening",
        description:
          "Her striking outfit for the opening performance, embodying the 'girl crush' aesthetic with tough, fashion-forward styling.",
        occasion: "Opening number performance",
        imagePath:
          "/images/characters/mira/outfits/01-how-its-done-opening.webp",
      },
    ],
    personality:
      "Mira embodies the 'girl crush' archetype with a tough exterior, characterized by her blunt, sarcastic, and brutally honest nature. She has no problem calling out her friends with deadpan remarks but is fiercely protective of Rumi and Zoey, whom she considers her true family. This bond is especially important to her, as it contrasts sharply with the relationship she has with her biological family, who treated her as an outcast. She has a quick temper, which flares up when provoked by demons or uncomfortable fan 'ships.' Functioning as the group's anchor, she balances Rumi's insecurities and Zoey's naivety. Though she often appears stoic, she is not afraid to be goofy and energetic with her friends. Calling herself an 'expert at reading people,' Mira is highly observant and is the first to notice Rumi's strange behavior. When Rumi's actions become incomprehensible, Mira's frustration stems from a deep-seated fear of losing her friend. At the core of her tough personality is low self-esteem. A family photo reveals her as a rebellious figure in what appears to be a conservative family, and her central conflict revolves around this strained relationship. Her deepest insecurities are targeted by the demon king Gwi-ma, who taunts her with the words, 'Thought you finally had a family? You're not worthy.'",
    quotes: [
      "Fit check for my napalm era.",
      "Thought you finally had a family? You're not worthy.",
    ],
    abilities: [
      "Demon Hunter: Mira is a skilled demon hunter alongside her bandmates.",
      "Combat Style: She specializes in mid-range combat, using her height and the long reach of her Gok-do to fight multiple enemies. As the group's vanguard, she charges into battle with Zoey and can unleash an area-of-effect attack, leading some to believe she has the highest raw physical power in the group.",
      "Spirit Magic: As a Hunter, she can use spirit magic to conjure her weapon and create energy barriers, empowered by her own soul and the souls of their fans.",
      "Mediumship: She can see spirits, demons, and the spiritual energy of the Honmoon, allowing her to detect demonic presences or weaknesses in the barrier.",
      "Choreography: While all members are skilled dancers, Mira is the group's lead dancer and official choreographer.",
      "Dart Throwing: She demonstrates exceptional accuracy by casually hitting a poster of Jinu with three darts thrown over her head.",
    ],
    background:
      "Growing up as a 'problem child' in what appears to be a conservative family, Mira was treated as an outcast by her biological family. She secretly believes she is unworthy of having a family or friends, which makes her bond with HUNTR/X especially precious to her. She is six months younger than Rumi and handles choreography while Zoey is the primary lyricist.",
    storyArc:
      "Initially, Mira shows no mercy to demons, having been taught they are all evil. However, her entire belief system is challenged when she discovers Rumi is part-demon. This forces her to grow, ultimately choosing to accept the friend she knows rather than cling to the dogma she was taught. When Rumi's secret is revealed, Mira is initially shocked and hurt, but her deep love for her found family ultimately overcomes her prejudices.",
    relationships: [
      {
        name: "Rumi",
        relation: "Best Friend & Leader",
        description:
          "Her closest friend. Mira is often the one to ground Rumi and offer a different perspective. She is the first to notice Rumi's strange behavior due to her observant nature.",
      },
      {
        name: "Zoey",
        relation: "Teammate & Found Family",
        description:
          "Shares a sisterly bond with Zoey, often teasing her but always supporting her. Zoey is represented by one of the charms on her norigae pendant.",
      },
      {
        name: "Biological Family",
        relation: "Estranged Family",
        description:
          "Has a strained relationship with her conservative family who treated her as a 'problem child' and outcast.",
      },
    ],
    combatStyle:
      "She specializes in mid-range combat, using her height and the long reach of her Gok-do to fight multiple enemies. As the group's vanguard, she charges into battle and can unleash area-of-effect attacks.",
    favoriteFood: "Unknown",
    hobbies: ["Choreography", "Dart throwing"],
    fears: ["Being unworthy of family or friends", "Losing her found family"],
    trivia: [
      {
        category: "Inspiration",
        title: "Model Inspiration",
        description:
          "Director Maggie Kang revealed that Mira's look was inspired by Korean model Ahn So-yeon.",
      },
      {
        category: "Design History",
        title: "Concept Evolution",
        description:
          "In early concept art, Mira's hairstyle was different, and her weapon was originally intended to be a fan. Storyboards also suggest she was once conceived as a character who always wore glasses, a popular look she sports with her casual outfits.",
      },
      {
        category: "Age",
        title: "Relative Age",
        description: "She is six months younger than Rumi.",
      },
      {
        category: "Role in Group",
        title: "Creative Responsibilities",
        description:
          "It is implied that Mira handles choreography while Zoey is the primary lyricist.",
      },
      {
        category: "Devotion",
        title: "Found Family Symbol",
        description:
          "Having been alienated from her biological family, Mira treasures HUNTR/X as her found family. This is symbolized by her norigae (tassel pendant), which features charms representing Rumi and Zoey.",
      },
      {
        category: "Fan Culture",
        title: "Shipping Controversy",
        description:
          "In the film, fans 'ship' her with Saja Boys members Romance and Abby. She particularly despises the polyamorous ship 'Miromabby.'",
      },
      {
        category: "Voice Actor's Insight",
        title: "Hidden Softness",
        description:
          "Her Korean voice actress, Kim Do-young, felt a personal connection to a scene where Mira wears cute pajamas, interpreting it as Mira hiding a softer side beneath her tough image.",
      },
      {
        category: "Fan Appeal",
        title: "Reversal Charm",
        description:
          "Her 'reversal charm'—a tough exterior hiding a deeply devoted and caring heart (a tsundere-like quality)—has made her a fan favorite.",
      },
      {
        category: "Idol Reference",
        title: "Hwasa Inspiration",
        description:
          "A lead designer mentioned that Hwasa of Mamamoo was an inspiration for HUNTR/X, and fans believe Mira's fierce and confident image reflects Hwasa's the most.",
      },
    ],
    relatedOST: ["How It's Done", "TAKEDOWN", "Golden"],
  },
  zoey: {
    name: "Zoey",
    koreanName: "조이",
    fullName: "Zoey",
    gender: "Female",
    nationality: "USA (Korean-American)",
    species: "Human",
    affiliatedGroup: "HUNTR/X",
    position: "Main Rapper, Sub-Vocalist, Lyricist",
    role: "HUNTR/X Main Rapper & Maknae",
    age: "22-23 years old (Estimated born c. 2002-2003)",
    weapon: "Shin-kal (Shamanic Throwing Knives)",
    voiceActors: {
      en: "Ji-young Yoo",
      kr: "Kim Yea-lim",
      jp: "Miho Wataya",
    },
    singingVoice: {
      en: "Rei Ami",
      kr: "Rei Ami",
      jp: "Manami Yokoyama",
    },
    family: [
      {
        relation: "Family",
        name: "Unspecified (Theorized to have divorced parents)",
      },
    ],
    overview:
      "Zoey is a deuteragonist of K-Pop Demon Hunters. She is the main rapper and lyricist of the world-renowned K-pop group HUNTR/X and serves as the group's maknae (youngest member). A Korean-American who grew up in Burbank, California, her bubbly and fun-loving personality makes her the mood-maker of the group. While she has an adorable image, she transforms into a charismatic powerhouse when she raps. In combat, she wields Shin-kal, a set of throwing knives inspired by the tools of Korean shamans.",
    appearance:
      "Zoey has black hair styled in twin braided buns (often called 'Pucca hair') with micro-bangs and fringe locks. She has a rounder face, light brown eyes, freckles, and a heart-shaped mouth. Though the shortest member, she has a slender build with long limbs. She wears sparkly makeup and has numerous ear piercings. Her stage outfits often feature a streetwear aesthetic, like a teal halter top and parachute pants, accessorized with a yellow norigae (a traditional Korean charm) decorated with cute ornaments that reflect her personality.",
    performanceOutfits: [
      {
        name: "Streetwear Stage Outfit",
        description:
          "A teal halter top and parachute pants, accessorized with a yellow norigae (traditional Korean charm) decorated with cute ornaments that reflect her personality.",
        occasion: "Stage performances",
        imagePath:
          "/images/characters/zoey/outfits/1-streetwear-stage-outfit.webp",
      },
    ],
    personality:
      "Zoey is perky, bubbly, and energetic, openly showing affection for her friends and fans. However, unlike the observant Mira, she can be quite naive, failing to notice Rumi's increasingly strange behavior. She is easily distracted and prone to being tricked, as seen when she can't resist dancing to the Saja Boys' infectious song. Beneath her bright exterior lies a deep-seated insecurity about her identity. Having grown up between Korean and American cultures, she often felt like an outsider in both, a conflict explored in her lyrics for the song 'Golden.' Before joining HUNTR/X, she believed her own thoughts and lyrics were 'weird and useless.' She harbors a fear of being 'too much, yet not enough,' an eagerness to please that becomes a vulnerability the demon king Gwi-Ma later exploits. Though gentle-natured, she is fiercely protective of her creative work. She shows genuine anger for the first time when Rumi dismisses her lyrics, nearly tearing up her notebook. When Rumi's secret is revealed, she is deeply hurt and confused, and her hesitation to draw all her weapons shows her reluctance to harm her friend.",
    quotes: [
      "Before I joined HUNTR/X, I felt like my thoughts and my lyrics and all my notebooks were just useless and weird. But with the two of you, they mean something. I mean something.",
      "Okay, like I know I ramble / But when shootin' my words I go Rambo.",
      "How are we supposed to be with you when we don't know what's a lie and what's the truth?",
      "Why did I cover up the colors stuck inside my head?",
    ],
    abilities: [
      "Rapping Skills: As the main rapper, Zoey is known for her lightning-fast delivery, which contrasts with the slower, rhythmic style of her rival, Baby of the Saja Boys.",
      "Lyricism: She is implied to be the group's primary lyricist.",
      "Sub-Vocalist: She also provides high-pitched chorus and background vocals.",
      "Weaponry (Shin-kal): Zoey wields a set of six throwing knives called Shin-kal. According to the art director, the animation team developed a fighting style for her that resembles professional knife or card throwing.",
      "Combat Style: Unlike Rumi (a duelist) and Mira (a crowd-control specialist), Zoey is a versatile fighter who mixes ranged attacks with close-quarters combat. When unable to resummon her knives, she seamlessly transitions to kicks and acrobatic martial arts.",
    ],
    background:
      "Recruited by Celine from her home in Burbank, Zoey becomes a member of HUNTR/X. Her Korean-American background is central to her character, reflected in details like her hamburger-flavored ramyeon.",
    storyArc:
      "After an intense world tour, Zoey is eager to relax, but her plans are cut short by Rumi's push for their new single, 'Golden.' She is supportive of Rumi's vocal struggles, suggesting a healer she found among 57 researched methods. She is the first to naively suggest the Saja Boys might be 'nice demons' and develops an immediate crush on their member, Mystery. Despite this, she joins the fight against them. As Rumi grows distant, Zoey becomes hurt and confused, especially when Rumi criticizes her lyrical contributions. At the Idol Awards, Rumi's half-demon secret is revealed, leaving Zoey feeling betrayed and asking, 'How are we supposed to be with you when we don't know what's a lie and what's the truth?' She reluctantly draws her weapons after Mira. Broken and vulnerable, she is brainwashed by Gwi-ma's whispers targeting her insecurities: 'You're too much, but you're not enough. There's no place for you.' She is saved by Rumi's song of self-acceptance, responding with her own lyric: 'Why did I cover up the colors stuck inside my head?' Reunited, HUNTR/X defeats their enemies. In the final battle, Zoey punches Mystery, exclaims 'He's totally my type!' and then promptly destroys him. The story concludes with the three members healing their bonds and growing together.",
    relationships: [
      {
        name: "Rumi",
        relation: "Leader & Bandmate",
        description:
          "Initially supportive of Rumi's struggles but becomes hurt and confused when Rumi's secret is revealed. Their relationship heals by the end.",
      },
      {
        name: "Mira",
        relation: "Bandmate",
        description:
          "Fellow member of HUNTR/X who shares in the initial rejection and later reconciliation with Rumi.",
      },
      {
        name: "Mystery",
        relation: "Crush/Enemy",
        description:
          "Develops an immediate crush on Mystery from the Saja Boys, but ultimately destroys him in the final battle after declaring 'He's totally my type!'",
      },
    ],
    combatStyle:
      "She often maintains a playful, smiling expression in battle, treating demons like toys. This has earned her the fan nicknames 'Zoey-chopath' and 'clear-eyed maniac,' as she can admire a handsome demon's face one moment and ruthlessly annihilate him the next, showing a stark separation between her personal feelings and her duty.",
    favoriteFood: "Hamburger-flavored ramyeon",
    hobbies: ["Writing lyrics", "Collecting turtle-themed items"],
    fears: ["Being 'too much, yet not enough'", "Having no place to belong"],
    trivia: [
      {
        category: "Identity",
        title: "Korean-American Background",
        description:
          "Her Korean-American background is central to her character, reflected in details like her hamburger-flavored ramyeon. A popular fan theory suggests her parents are divorced, based on the 'Golden' music video visuals.",
      },
      {
        category: "Love for Turtles",
        title: "Turtle Symbolism",
        description:
          "She is an avid turtle lover, owning turtle-themed pajamas and charms. Fans theorize this is because she, feeling displaced, envies turtles for always carrying their homes with them.",
      },
      {
        category: "Deleted Backstory",
        title: "School Bullying",
        description:
          "A scrapped storyboard revealed a backstory where Zoey was a victim of school bullying.",
      },
      {
        category: "Fan Connections",
        title: "Sunlight Sisters Fan",
        description:
          "She was a fan of the previous hunter group, the Sunlight Sisters, before her debut. In the fandom, her ship with Mystery is canonically named 'Zoeystery.'",
      },
      {
        category: "Gateway Character",
        title: "Fan Appeal",
        description:
          "With her cute design, bright personality, and surprising depth, Zoey is often considered the 'gateway character' who attracts new fans to the series.",
      },
      {
        category: "Neurodivergent Fan Theory",
        title: "Fan Interpretation",
        description:
          "A popular fan theory posits that Zoey is neurodivergent (e.g., having autism or ADHD).",
      },
    ],
    relatedOST: ["How It's Done", "Golden"],
  },
  jinu: {
    name: "Jinu",
    koreanName: "진우",
    fullName: "Jinu",
    gender: "Male",
    nationality: "Joseon (as a human)",
    species: "Human → Demon",
    affiliatedGroup: "Saja Boys",
    position: "Leader, Center, Main Vocalist",
    role: "Saja Boys Leader",
    age: "Approx. 400+ years (as a demon), 23-24 (physical appearance)",
    voiceActors: {
      en: "Ahn Hyo Seop (Dialogue), Andrew Choi (Singing)",
      kr: "Min Seung-woo (Dialogue)",
      jp: "Kaito Ishikawa (Dialogue), Yuta Fujimasa (Singing)",
    },
    family: [
      {
        relation: "Mother",
        name: "Unnamed Mother (deceased)",
      },
      {
        relation: "Younger Sister",
        name: "Unnamed Sister (deceased)",
      },
    ],
    overview:
      "Jinu is the male protagonist and main villain of K-Pop Demon Hunters. He is the leader of the demon idol group, Saja Boys, and serves as the right-hand man to the demon king, Gwi-ma. However, unlike other demons, Jinu does not follow Gwi-ma blindly and is the only demon who retains a significant degree of his humanity. He harbors a deep resentment for Gwi-ma, who orchestrated the circumstances that forced him to abandon his family. He cooperates with the demon king purely out of a transactional necessity: to have his painful memories erased.",
    appearance:
      "Jinu is a tall, slender man who appears to be in his early twenties. In his human form, he has pale skin, black hair styled with curtain bangs, and brown eyes. In his true demon form, his skin turns purple with glowing patterns, and he has claws, sharp teeth, and golden eyes with slit pupils. As an idol, he wears stylish, modern clothing. In private, he opts for a more casual look. As a demon, he wears a tattered black hanbok and a gat (traditional hat).",
    performanceOutfits: [
      {
        name: "Idol Stage Outfit",
        description:
          "Stylish, modern clothing that showcases his charismatic idol persona.",
        occasion: "Stage performances",
        imagePath: "/images/characters/jinu/outfits/1-idol-stage-outfit.webp",
      },
      {
        name: "Demon Form",
        description:
          "A tattered black hanbok and gat (traditional hat) worn in his true demonic form.",
        occasion: "Demonic transformations",
        imagePath: "/images/characters/jinu/outfits/2-demon-form.webp",
      },
    ],
    personality:
      "Jinu is intelligent and charismatic, but also duplicitous and primarily driven by self-interest. His entire plan to destroy the Honmoon is a means to an end: erasing the memories that cause him immense guilt and shame over abandoning his family. While he despises Gwi-ma, he believes this is the only way to free himself from his torment. Initially, he appears to enjoy teasing and outsmarting HUNTR/X. However, subtle signs of his humanity persist: he helps Rumi after discovering her demonic markings, treats a fan's gift with care, and shows kindness to his animal companions. Despite his polished idol image, he can also be awkward and clumsy.",
    quotes: [
      "That's right, I lied to you. I only made a deal with Gwi-Ma to get myself out of that miserable life. I left my sister, my mother, alone while I slept on silk sheets in the palace with my belly full every night! I left them! I left them...",
      "It's time for a new strategy.",
    ],
    abilities: [
      "Master of teleportation, shapeshifting, and illusion magic",
      "Cunning intellect for manipulation",
      "Singing and dancing to control human emotions",
      "Demonic combat abilities equal or superior to Rumi",
      "Strategic planning and leadership",
    ],
    background:
      "Approximately 400 years ago in the Joseon Dynasty, Jinu lived in extreme poverty. Desperate, he accepted a deal from the demon king Gwi-ma for a powerful singing voice. His talent earned him a place in the royal palace, but he chose a life of luxury over staying with his family. Gwi-ma later transformed him into a demon, and the guilt of his decision haunted him for the next four centuries.",
    storyArc:
      "Jinu proposes infiltrating the human world as K-pop idols to destroy the Honmoon barrier. During a battle, he discovers Rumi's demonic markings and helps her hide them, forming a deep bond. However, Gwi-ma forces him to betray her at the Idol Awards. In the final battle, when Gwi-ma attacks Rumi, Jinu intercepts the blow, sacrificing himself. In his final moments, he gives his soul to Rumi, empowering her to defeat Gwi-ma, finally free from his guilt.",
    relationships: [
      {
        name: "Rumi",
        relation: "Love Interest / Rival",
        description:
          "He sees a kindred spirit in Rumi, another artist burdened by a supernatural secret. He is drawn to her light and ultimately sacrifices himself for her.",
      },
      {
        name: "Gwi-ma",
        relation: "Master / Enemy",
        description:
          "The demon king he serves out of a binding contract, but whom he grows to despise.",
      },
      {
        name: "Saja Boys",
        relation: "Leader / Teammates",
        description:
          "He leads the Saja Boys, but his connection to them is based on their shared demonic nature rather than true camaraderie.",
      },
    ],
    combatStyle:
      "Jinu is the demon faction's second-in-command and chief strategist. His combat abilities are formidable, making him an equal or superior to Rumi. His most powerful weapon is not his physical strength but his cunning intellect.",
    favoriteFood: "Unknown",
    hobbies: ["Strategic planning", "Caring for animal companions"],
    fears: [
      "Eternal guilt over abandoning his family",
      "Never finding redemption",
    ],
    trivia: [
      {
        category: "Name Origin",
        title: "Jinusean Reference",
        description:
          "The name 'Jinu' was inspired by the Korean hip-hop duo Jinusean.",
      },
      {
        category: "Historical Context",
        title: "Joseon Period Accuracy",
        description:
          "His age was set to align with the mid-Joseon period (c. 1625) to ensure the historical accuracy of his flat-topped gat.",
      },
      {
        category: "Design",
        title: "Celebrity Inspiration",
        description:
          "His appearance was inspired by Korean celebrities such as Cha Eun Woo, Nam Joo-hyuk, and Jungkook.",
      },
      {
        category: "Voice Actor",
        title: "Animation Reference",
        description:
          "Actor Ahn Hyo Seop's facial expressions during his recording sessions were used as a reference for Jinu's animation.",
      },
      {
        category: "Symbolism",
        title: "Ship Name & Death",
        description:
          "His in-universe ship name with Rumi is Rujinu. When he dies, his eyes briefly revert to their human brown color.",
      },
      {
        category: "Fan Culture",
        title: "Memorial Shrine",
        description:
          "Fans created a memorial shrine for him at Anime Expo 2025.",
      },
    ],
    relatedOST: ["Soda Pop", "Your Idol", "Free"],
  },
  celine: {
    name: "Celine",
    koreanName: "셀린 (Sellin)",
    fullName: "Celine",
    age: "Late 40s to early 50s",
    species: "Human",
    role: "Overarching Protagonist and Mentor Figure",
    overview:
      "Celine is an overarching protagonist and mentor figure in K-Pop Demon Hunters. She is a retired member of the Sunlight Sisters, a legendary 1st-generation K-pop group that secretly operated as demon hunters. After the death of her bandmate and best friend, Mi-yeong Ryu, Celine adopted her daughter, Rumi, raising her to become the next generation's leader. She lives on Jeju Island, guarding a sacred shrine.",
    voiceActors: {
      en: "Yunjin Kim (Dialogue), Lea Salonga (Singing)",
      kr: "Jeon Sook-kyung (Dialogue)",
      jp: "Akari Higuchi (Dialogue)",
    },
    appearance:
      "Celine is a tall, elegant middle-aged woman with sharp facial features and long, black hair streaked with gray. As a mentor, she is sharp but fair. However, she is a perfectionist, deeply bound by the traditional Hunter ideology that all demons are evil and that personal flaws must be hidden at all costs to protect the Honmoon barrier.",
    personality:
      "This rigid belief system puts her in direct conflict with her love for Rumi. While her intentions are protective—fearing Rumi would be persecuted for her half-demon heritage—her insistence that Rumi suppress her true self causes her adoptive daughter immense pain and self-rejection. Her stubbornness ultimately makes her less understanding than Rumi's own friends, leading to a painful and unresolved rift between them.",
    quotes: [
      "Our faults and fears must never be seen. That's the only way to protect the Honmoon!",
      "The fight is not just yours, it is a legacy.",
      "A true hunter fights with heart, not just with steel.",
      "Protect the balance, and protect each other.",
    ],
    abilities: [
      "Demon Hunter - As a former hunter, she was a skilled fighter, likely wielding dual swords as suggested by an end-credits illustration",
      "Mediumship - Even in retirement, she can still perceive the spiritual energy of the Honmoon",
      "Idol Talents - As a 1st-generation idol, she was a proficient singer and dancer",
    ],
    background:
      "In the 1990s, Celine was the leader of the popular demon-hunting idol group, the Sunlight Sisters. After her friend Mi-yeong died, she retired from public life to raise Mi-yeong's daughter, Rumi. Upon discovering Rumi's demonic markings, she taught her to conceal them, believing the prophesied 'Golden Honmoon' would eventually 'purify' her. Years later, she formed and trained the next generation of hunters, HUNTR/X.",
    storyArc:
      "When a desperate Rumi, her demonic features revealed, comes to her on Jeju Island and begs to be killed, Celine refuses. She confesses that she vowed to protect Rumi as the last remnant of her mother, even though Rumi's existence defied everything she was taught as a hunter. However, she cannot overcome her prejudice, insisting they can still hide the truth. Rumi rejects this life of lies, and their confrontation culminates in Rumi questioning if Celine ever truly loved all of her. Heartbroken, Rumi teleports away, leaving their relationship shattered. The conflict remains unresolved at the film's end, positioning Celine as a key figure for a potential sequel.",
    relationships: [
      {
        name: "Rumi",
        relation: "Adoptive Daughter",
        description:
          "Raised Rumi as her own after Mi-yeong's death, but their relationship becomes strained due to Celine's rigid beliefs about hiding Rumi's demon nature.",
      },
      {
        name: "Mi-yeong Ryu",
        relation: "Former Bandmate & Best Friend",
        description:
          "Her deceased best friend from the Sunlight Sisters whose daughter she adopted and raised.",
      },
      {
        name: "HUNTR/X",
        relation: "Mentor",
        description:
          "Formed and trained the next generation of hunters, serving as their mentor and guide.",
      },
    ],
    performanceOutfits: [
      {
        name: "Sunlight Sisters Era",
        description:
          "1990s idol outfit as leader of the legendary demon-hunting K-pop group",
        occasion: "Flashback performances",
        imagePath:
          "/images/characters/celine/outfits/1-sunlight-sisters-era.webp",
      },
      {
        name: "Jeju Island Guardian",
        description:
          "Contemporary casual attire worn while guarding the sacred shrine on Jeju Island",
        occasion: "Present day scenes",
        imagePath:
          "/images/characters/celine/outfits/2-jeju-island-guardian.webp",
      },
    ],
    trivia: [
      {
        category: "Real-Life Inspirations",
        title: "Lee Hyori & Bada (S.E.S.)",
        description:
          "Her 'retired idol living on Jeju Island' status draws comparisons to Lee Hyori, though their personalities are opposites. A more likely inspiration is Bada of S.E.S. The Sunlight Sisters (SLS) debuted in 1997, the same year as S.E.S.; both Celine and Bada were their groups' leaders and share a similar cautious personality.",
      },
      {
        category: "Scrapped Backstory",
        title: "Dark Secret",
        description:
          "An early concept for the film revealed that Celine was accidentally responsible for Mi-yeong's death, a secret that would have cast her prejudice in a much darker light. The creators left this idea open for a potential sequel.",
      },
      {
        category: "Voice Acting",
        title: "Lea Salonga's Cameo",
        description:
          "The legendary singer Lea Salonga is credited as Celine's singing voice but only performs a single line in a flashback.",
      },
      {
        category: "Fan Reception",
        title: "Divided Audience",
        description:
          "Audience reaction to Celine is split. Many adults sympathize with her difficult position, while younger audiences and LGBTQ+ viewers often see her as an oppressive parental figure who refuses to accept her child's true identity, interpreting Rumi's story as a coming-out allegory.",
      },
    ],
    relatedOST: ["Free"],
  },
  "gwi-ma": {
    name: "Gwi-Ma",
    koreanName: "귀마 (鬼魔)",
    fullName: "Gwi-Ma, The Demon King",
    age: "Centuries",
    species: "Demon",
    role: "The Demon King",
    overview:
      "Gwi-Ma is the true main villain, mastermind, and final boss of K-Pop Demon Hunters. He is the king of demons, the ruler of the Demon Realm, and the producer of the demon idol group, Saja Boys. His motif is the Demon King Gwi-ma from the classic Korean novel Samhanseupyu. Once a terrifying entity who feasted on human souls, his power dwindled over the centuries after being sealed away by demon hunters. In his prime, he was a colossal being of fire, but by the film's present day, he is a mere shadow of his former self. Despite this weakened state, he remains an overwhelmingly powerful foe and the series' strongest character.",
    voiceActors: {
      en: "Lee Byung Hun",
      kr: "Lee Byung Hun",
      jp: "Hiroshi Tsuchida",
    },
    appearance:
      "Gwi-Ma appears as a giant, sentient flame of magenta-colored fire, known in Korean folklore as a honbul (soul-fire). He primarily consists of a menacing, toothy mouth that expands when he is angry or amused. In the film's climax, after absorbing countless souls, he grows to a colossal size, developing nostrils and a pair of glowing eyes, and his voice deepens.",
    personality:
      "He is portrayed as a manipulative, cruel, sadistic, and power-hungry being. He has no affection for his underlings, punishing any failure with merciless rage, as seen when he incinerates a demon for failing to kill HUNTR/X. His greatest pleasure comes from exploiting the deepest insecurities and traumas of both humans and demons, twisting their relationships and using their shame to control them.",
    quotes: [
      "The world will burn, and from the ashes, my kingdom will rise.",
      "Their little songs are no match for my eternal power.",
      "All souls are mine to command.",
    ],
    background:
      "Gwi-Ma is based on the classic Korean novel Samhanseupyu. Once a terrifying entity in his prime as a colossal being of fire, his power has dwindled over centuries after being sealed away by demon hunters. By the present day, he is a shadow of his former self but still remains the most powerful being in the series' universe.",
    storyArc:
      "Trapped in the Demon Realm by the Honmoon barrier, Gwi-ma continuously sends minions to attack the human world. When his right-hand man, Jinu, suggests a new strategy—creating a rival K-pop idol group—Gwi-ma, despite his initial mockery, shows surprising flexibility and agrees. He acts as the producer for Saja Boys, providing them with the magical support needed to become top-tier idols, including flawless disguises and spectacular stage effects. This has led to the fan meme of him being a 'small agency CEO who even handles stage direction.' As Jinu begins to waver due to his growing connection with Rumi, Gwi-ma torments him with his most painful memories to ensure his compliance. He successfully orchestrates HUNTR/X's breakup and weakens the Honmoon, allowing him to hypnotize thousands of people and draw them to the Saja Boys' final concert. Just as he is about to absorb their souls, he is thwarted by the sacrifice of Jinu and the power of the reunited HUNTR/X. Overwhelmed by their song, his fiery form is extinguished. His defeat is somewhat anticlimactic, and its ambiguous nature—whether he was truly destroyed or merely resealed—leaves the door open for his return in a potential sequel. This theory is supported by the fact that Rumi's demonic markings did not disappear.",
    abilities: [
      "Mental Domination (Telepathy & Hypnosis) - His most terrifying ability to telepathically whisper into victims' minds, exploiting their trauma to control them",
      "Soul Absorption - Can consume souls of humans and demons to increase his size and power",
      "Fire Breath - In enlarged form, can unleash torrents of demonic fire powerful enough to fatally wound even Jinu",
      "Immortality - Nearly immortal being that cannot be destroyed, only sealed away",
      "Demon Summoning - Can monitor and forcibly summon any demon at will",
      "Reality Manipulation - Overwhelming power that transcends normal demonic abilities",
    ],
    relationships: [
      {
        relation: "Right-hand man",
        name: "Jinu",
        description:
          "Jinu serves as Gwi-Ma's right-hand man and chief strategist, though he harbors deep resentment for the demon king.",
      },
      {
        relation: "Producer",
        name: "Saja Boys",
        description:
          "Acts as the producer for the demon idol group, providing magical support for their performances.",
      },
      {
        relation: "Enemy",
        name: "HUNTR/X",
        description:
          "The hunter group that maintains the Honmoon barrier preventing his escape from the Demon Realm.",
      },
    ],
    performanceOutfits: [
      {
        name: "Soul-Fire Form",
        description:
          "Giant sentient flame of magenta-colored fire with a menacing, toothy mouth",
        occasion: "Standard manifestation form",
        imagePath: "/images/characters/gwi-ma/outfits/1-soul-fire-form.webp",
      },
      {
        name: "Colossal Form",
        description:
          "Enlarged form with nostrils, glowing eyes, and deeper voice after absorbing countless souls",
        occasion: "Final battle climax",
        imagePath: "/images/characters/gwi-ma/outfits/2-colossal-form.webp",
      },
    ],
    trivia: [
      {
        category: "Name Origin",
        title: "Hanja Characters",
        description:
          "His name comes from the Hanja characters 鬼 (gwi, 'ghost/demon') and 魔 (ma, 'evil spirit/magic'). An earlier name for the character was 'Dueoksini.'",
      },
      {
        category: "Occult Motif",
        title: "Korean Dokkaebi",
        description:
          "His fiery, formless nature and appreciation for music are reminiscent of some depictions of the Korean dokkaebi (goblin).",
      },
      {
        category: "Initial Concept",
        title: "K-pop Idol Wannabe",
        description:
          "Originally, Gwi-ma was conceived as a K-pop idol wannabe, and the director considered casting J.Y. Park, founder of JYP Entertainment, for the role. This is subtly referenced when Gwi-ma hums along to 'Soda Pop.'",
      },
      {
        category: "Voice Actor",
        title: "Lee Byung-hun's Dual Role",
        description:
          "Lee Byung-hun (The Frontman in Squid Game) is the only actor to voice his character in both English and Korean. Fan reception has been mixed, with some finding his voice not 'demonic' enough, though his English performance was more widely praised for its deeper tone.",
      },
      {
        category: "Fan Theory",
        title: "Rumi's Father Theory Debunked",
        description:
          "The popular fan theory that Gwi-ma was Rumi's biological father has been officially debunked by the director.",
      },
      {
        category: "Easter Egg",
        title: "Mascot Merchandise",
        description:
          "At the final concert, a fan can be seen wearing a T-shirt with Gwi-ma's logo, suggesting the Saja Boys marketed him as a mascot.",
      },
      {
        category: "Design History",
        title: "Traditional Mask Inspiration",
        description:
          "Early designs were inspired by monstrous traditional Korean masks called Gwimyeon and Tal.",
      },
      {
        category: "Fan Culture",
        title: "Small Agency CEO Meme",
        description:
          "His role as producer for Saja Boys has led to the fan meme of him being a 'small agency CEO who even handles stage direction.'",
      },
    ],
    relatedOST: ["Your Idol"],
  },
  abby: {
    name: "Abby Saja",
    koreanName: "애비 사자",
    fullName: "Abby 'Abs' Saja",
    gender: "Male",
    nationality: "Unspecified",
    species: "Demon",
    affiliatedGroup: "Saja Boys",
    position: "Main Dancer, Lead Rapper, Sub-Vocalist",
    role: "Saja Boys Member",
    age: "Appears 22",
    height: "185 cm (approx. 6'1\")",
    voiceActors: {
      en: "Sungwon Cho (Dialogue), Neckwav (Singing)",
      kr: "Lee Hyun (Dialogue)",
    },
    overview:
      "Abby Saja is a supporting antagonist in K-Pop Demon Hunters. He is the main dancer, lead rapper, and sub-vocalist of the demon idol group, Saja Boys. As a demon disguised as a K-pop idol, his mission is to help steal fans from the hunter group HUNTR/X to weaken the protective Honmoon barrier. His stage name, 'Abby,' is derived from the English word 'abs,' and true to his name, he is the group's designated muscular member, renowned for his well-defined physique.",
    appearance:
      "Abby is a tall (185 cm) man with an athletic, muscular build, famous for his six-pack abs. In his human disguise, he has lightly tanned skin, short raspberry-pink hair, and brown eyes. In his true demon form, his skin turns purple with glowing patterns, and he has claws, sharp teeth, and golden eyes. As an idol, he favors outfits that show off his midsection, often wearing cropped shirts, beanies, and ripped skinny jeans.",
    performanceOutfits: [
      {
        name: "Your Idol Performance",
        description:
          "A fishnet crop top and leather pants under a traditional Korean overcoat (sochangui) and gat, combining modern and traditional styles.",
        occasion: "'Your Idol' stage performance",
        imagePath:
          "/images/characters/abby/outfits/1-your-idol-performance.webp",
      },
    ],
    personality:
      "Abby is portrayed as the group's 'eye candy,' exuding confidence with a teasing and occasionally vain demeanor. He frequently flaunts his physique to provoke reactions from others, such as proudly distributing pencil rubbings of his own abs at a fan signing event. He is also self-aware, correctly guessing that Mira and Zoey's attraction to him was the reason HUNTR/X followed them into a bathhouse. Like the other Saja Boys, he can be aggressive, but his actual combat effectiveness is questionable.",
    quotes: [
      "Anytime it hurts, play another verse; I can be your sanctuary.",
      "I knew they would. That one's always looking at me.",
    ],
    abilities: [
      "Demonic Powers: He possesses standard demon abilities, including soul stealing, teleportation, levitation, and shapeshifting.",
      "Immortality: He is effectively immortal unless killed by a hunter or Gwi-ma.",
      "Idol Talents: As the main dancer, he is an exceptional performer with proficient singing and rapping skills.",
      "Unique Ability: He has the bizarre power to turn a person's eyes into corn (which then becomes popcorn), as demonstrated on Zoey.",
    ],
    background:
      "While his past is largely unknown, it is assumed that he was once human and became a demon through a deal with Gwi-ma.",
    storyArc:
      "Abby is introduced when Jinu proposes the plan to form a demon K-pop group. During their debut in the human world, his shirt dramatically bursts open, revealing his abs and leaving a strong impression on Mira and Zoey. Throughout the film, he participates in various idol activities, including competing on a variety show and hijacking a HUNTR/X fan event. His final appearance is at the Saja Boys' Namsan Tower concert. After Jinu's sacrifice, Abby attempts to attack HUNTR/X but is swiftly killed by Mira, who slashes him across the stomach while declaring, 'No more abs!'",
    relationships: [
      {
        name: "Jinu",
        relation: "Leader",
        description:
          "Follows Jinu's lead, respecting his power and connection to Gwi-Ma.",
      },
      {
        name: "Mira",
        relation: "Fan Interest",
        description:
          "Part of the fan-created 'Miromabby' love triangle ship with Mira and Romance. Eventually killed by Mira.",
      },
    ],
    combatStyle:
      "In his final confrontation with Mira, he opts to pose and flash his abs rather than attack, a fatal miscalculation that leads to his demise.",
    favoriteFood: "Unknown",
    hobbies: ["Flaunting his physique", "Fan interactions"],
    fears: ["Unknown"],
    trivia: [
      {
        category: "3D Model",
        title: "Muscle Enhancement",
        description:
          "All Saja Boys members share a base 3D model, but Abby's was exclusively modified to have 20% more muscle mass.",
      },
      {
        category: "Name Puns",
        title: "Korean Wordplay",
        description:
          "His name 'Abby' (애비) is a homophone for an old, informal Korean word for 'father,' leading to many jokes among viewers, especially in relation to his bandmate, Baby.",
      },
      {
        category: "Symbolism",
        title: "Industry Commentary",
        description:
          "His character can be seen as a commentary on the sexualization and objectification of K-pop idols.",
      },
      {
        category: "Occult Motif",
        title: "Dokkaebi Connection",
        description:
          "His motif is believed to be the dokkaebi (Korean goblin), a mythological figure known for its strength and masculine energy.",
      },
      {
        category: "Real-Life Parallel",
        title: "Wonho Comparison",
        description:
          "His muscular idol image drew comparisons to former Monsta X member Wonho, who later cosplayed as Abby.",
      },
      {
        category: "On-Screen Death",
        title: "Confirmed Demise",
        description:
          "He is the only member of the Saja Boys, besides Jinu, to have a confirmed, on-screen death.",
      },
    ],
    relatedOST: ["Soda Pop", "Your Idol"],
  },
  romance: {
    name: "Romance Saja",
    koreanName: "로맨스 사자",
    fullName: "Romance Saja",
    gender: "Male",
    nationality: "Unspecified (as a human)",
    species: "Demon",
    affiliatedGroup: "Saja Boys",
    position: "Lead Vocalist (Presumed)",
    role: "Saja Boys Member",
    age: "Appears young",
    voiceActors: {
      en: "Joel Kim Booster (Dialogue), samUIL Lee (Singing)",
      kr: "Choi Hyun-sik (Dialogue)",
    },
    overview:
      "Romance Saja is a supporting antagonist in K-Pop Demon Hunters. He is a member of the demon idol group, Saja Boys, and is presumed to be the group's lead vocalist. While his official position is unconfirmed, fans have given him this title based on his significant vocal contributions to their songs, where he handles the second-most lines after Jinu, as well as high notes, harmonies, and choruses. He is a demon disguised as a K-pop idol, tasked with luring fans away from the hunter group HUNTR/X to help weaken the protective Honmoon barrier.",
    appearance:
      "Romance is a handsome young man with an androgynous appearance. His most defining feature is his voluminous, pink, heart-shaped, 50/50 parted hairstyle. In his human form, he has pale skin and hazel eyes, and he meticulously styles himself, down to his sky-blue painted nails. In his true demon form, his skin turns purple, and his eyes glow gold.",
    performanceOutfits: [
      {
        name: "Romantic Stage Persona",
        description:
          "Meticulously styled outfits that showcase his romantic concept, complete with sky-blue painted nails and passionate poses.",
        occasion: "Stage performances",
        imagePath:
          "/images/characters/romance/outfits/1-romantic-stage-persona.webp",
      },
    ],
    personality:
      "On stage, he fully commits to his 'romantic' concept, frequently striking passionate poses and conjuring floating hearts as fanservice. He is openly flirtatious, as seen when he immediately tries to charm Mira at a fan signing event. However, this persona is a facade. Off-stage, he is aloof, easily irritated, and finds the demands of being an idol exhausting. He has a habit of invading others' personal space, particularly Mira's, staring at her intently throughout their joint event, revealing a more sinister, demonic nature beneath the charm.",
    quotes: ["Hmm, we keep meeting like this."],
    abilities: [
      "Demonic Powers: He possesses standard demon abilities, including soul stealing, teleportation, levitation, and shapeshifting.",
      "Immortality: He is effectively immortal unless killed by a hunter or Gwi-ma.",
      "Heart Conjuration: As a form of fanservice, he can conjure floating hearts out of thin air.",
      "Idol Talents: He is an exceptional dancer and a highly proficient singer.",
    ],
    background:
      "While little is known about his past, it is assumed that Romance was once human and became a demon through a pact with Gwi-ma.",
    storyArc:
      "Among the Saja Boys (excluding Jinu), Romance has one of the smallest narrative roles. Unlike his bandmates who have clear character hooks, he lacks a distinct story purpose. He is involved in the fan-created 'Miromabby' love triangle ship with Mira and Abby, but his actual interaction with Mira is minimal. Despite this, he appears to be genuinely intrigued by her. On stage, however, Romance has a significant presence. He has the longest verse in 'Soda Pop' and delivers a memorable performance in 'Your Idol' with his iconic 'gat-brim sweep' dance move. In the final battle, he attacks HUNTR/X and is countered by Mira. His ultimate fate is not explicitly shown and is left ambiguous.",
    relationships: [
      {
        name: "Jinu",
        relation: "Leader",
        description:
          "Respects Jinu's cunning but also sees him as a rival for Gwi-Ma's favor.",
      },
      {
        name: "Mira",
        relation: "Interest",
        description:
          "Part of the fan-created 'Miromabby' love triangle ship with Mira and Abby. Appears genuinely intrigued by her.",
      },
    ],
    combatStyle:
      "In the final battle, he attacks HUNTR/X and is countered by Mira, but his ultimate fate is left ambiguous.",
    favoriteFood: "Unknown",
    hobbies: ["Fanservice performances", "Charming fans"],
    fears: ["Unknown"],
    trivia: [
      {
        category: "Occult Motif",
        title: "Bachelor Ghost Theory",
        description:
          "Fans speculate his demonic motif is the mongdal gwisin (bachelor ghost), the spirit of a man who died unmarried.",
      },
      {
        category: "Design History",
        title: "Longest Development",
        description:
          "His character design took the longest to finalize. His look is said to be inspired by Yeonjun of TOMORROW X TOGETHER and Felix of Stray Kids, and also bears a resemblance to the hairstyle of Moon Hee-jun of the 1st-generation K-pop group H.O.T.",
      },
      {
        category: "Group Dynamics",
        title: "Motherly Image",
        description:
          "Official fanart suggests the age hierarchy is Jinu > Romance > Abby. The art director also jokingly mentioned that he is bad at learning choreography. Because he is often seen looking after the younger members, Mystery and Baby, fans have given him a 'motherly' image.",
      },
      {
        category: "Symbolism",
        title: "Fanservice Commentary",
        description:
          "His character can be interpreted as a symbol of the fanservice culture prevalent in the K-pop industry.",
      },
      {
        category: "Korean Meme",
        title: "Karami Resemblance",
        description:
          "In Korea, he became a popular meme for his resemblance to the streamer Karami.",
      },
      {
        category: "Japanese Dub",
        title: "Personal Pronoun",
        description:
          "In the Japanese dub, he uses the personal pronoun 'boku.'",
      },
    ],
    relatedOST: ["Soda Pop", "Your Idol"],
  },
  baby: {
    name: "Baby Saja",
    koreanName: "베이비 사자",
    fullName: "Baby Saja",
    gender: "Male",
    nationality: "Unspecified",
    species: "Demon",
    affiliatedGroup: "Saja Boys",
    position: "Main Rapper, Sub-Vocalist",
    role: "Saja Boys Maknae",
    age: "Appears young",
    voiceActors: {
      en: "Danny Chung",
    },
    overview:
      "Baby Saja is a supporting antagonist in K-Pop Demon Hunters. He is the main rapper and maknae (youngest member) of the demon idol group, Saja Boys. His mission, along with his bandmates, is to steal fans from the hunter group HUNTR/X to weaken the protective Honmoon barrier. He is well-loved by fans for his 'gap moe'—the charming contrast between his cute, boyish appearance and his deep, baritone rapping voice.",
    appearance:
      "Baby has a youthful, boyish face with fluffy, mint-green hair and matching turquoise eyes. On stage, he leans into his maknae concept, wearing oversized sweaters and newsboy caps and using childish props like lollipops to project an innocent image. However, this is a carefully crafted persona. When he raps, his presence becomes powerful and commanding.",
    performanceOutfits: [
      {
        name: "Maknae Concept Stage",
        description:
          "Oversized sweaters and newsboy caps with childish props like lollipops to project an innocent image.",
        occasion: "Stage performances",
        imagePath:
          "/images/characters/baby/outfits/1-maknae-concept-stage.webp",
      },
    ],
    personality:
      "Off-stage, he drops the act and appears bored, indifferent, and weary of his idol duties. Like his fellow demons, he is aggressive when provoked and is genuinely shocked by Jinu's sacrifice.",
    quotes: [
      "Thank you for the pain, 'cause it got me going viral.",
      "Googoo gaga.",
    ],
    abilities: [
      "Demonic Powers: He possesses standard demon abilities, including soul stealing, teleportation, levitation, and shapeshifting.",
      "Immortality: He is effectively immortal unless killed by a hunter or Gwi-ma.",
      "Rapping: As the main rapper, he is exceptionally skilled.",
      "High Spice Tolerance: He has a superhuman ability to handle extremely spicy food.",
    ],
    background:
      "While his past is largely unknown, it is assumed that he was once human and became a demon through a pact with Gwi-ma.",
    storyArc:
      "Baby is introduced as a member of the newly formed Saja Boys. He makes a strong impression on a variety show by effortlessly winning a spicy food challenge, finishing with a deadpan 'Googoo gaga.' At a joint fan signing event, he maintains his professional idol persona, giving a fan a 'cheek heart' when receiving a bouquet. His most significant on-stage moment is during the performance of 'Your Idol,' where his solo rap verse is timed with the dramatic descent of the demon king, Gwi-ma. In the final battle, he briefly fights Zoey and is visibly stunned by Jinu's betrayal. His ultimate fate is not shown on screen, leaving his status ambiguous.",
    relationships: [
      {
        name: "Jinu",
        relation: "Leader",
        description:
          "Views Jinu as the leader but is shocked by his ultimate sacrifice and betrayal.",
      },
      {
        name: "Zoey",
        relation: "Battle Opponent",
        description: "Briefly fights against Zoey in the final battle.",
      },
    ],
    combatStyle: "Unknown - his fate in battle is left ambiguous.",
    favoriteFood: "Spicy food",
    hobbies: ["Variety show challenges", "Maintaining idol persona"],
    fears: ["Unknown"],
    trivia: [
      {
        category: "Occult Motif",
        title: "Yeommae Spirit",
        description:
          "His demonic motif is believed to be the Yeommae, a spirit from Korean folklore created through a dark ritual involving the starvation and death of a child. This theory is supported by his 'baby' concept and his frequent on-screen eating.",
      },
      {
        category: "Design Inspiration",
        title: "BTS Jimin Reference",
        description:
          "His character design was inspired by Jimin of BTS. Fans have also noted a resemblance to Hyunjin of Stray Kids.",
      },
      {
        category: "Voice Actor",
        title: "Unique Performance",
        description:
          "Danny Chung is the only Saja Boys member whose voice actor performs both the speaking and singing parts. His only line of dialogue is 'Googoo gaga.'",
      },
      {
        category: "Popularity",
        title: "Breakout Character",
        description:
          "Despite his minimal screen time, his unique 'gap moe' charm has made him a breakout star, with his popularity growing to rival even Jinu's. Because his fate is unknown, many fans hope he will return in a sequel.",
      },
      {
        category: "Symbolism",
        title: "Infantilization Commentary",
        description:
          "His character can be interpreted as a symbol of the infantilization of K-pop idols.",
      },
      {
        category: "Fan Culture",
        title: "Shipping & Jokes",
        description:
          "While not part of a canonical ship, he is sometimes depicted in fan works with Zoey or as the child of Zoey and Mystery. His name is also used in playful 'Abby x Baby' (father/baby) jokes.",
      },
      {
        category: "Physicality",
        title: "Height Comparison",
        description:
          "Although he is the maknae, official model sheets show that he is slightly taller than his bandmate Mystery.",
      },
      {
        category: "Anagram",
        title: "Name Connection",
        description:
          "His name, Baby, is an anagram of his teammate's name, Abby.",
      },
    ],
    relatedOST: ["Soda Pop", "Your Idol"],
  },
  bobby: {
    name: "Bobby",
    koreanName: "바비 (Babi)",
    fullName: "Bobby",
    height: "145 cm (approx. 4'9\")",
    species: "Human",
    role: "The Tritagonist",
    overview:
      "Bobby is the tritagonist of K-Pop Demon Hunters and the dedicated manager of the girl group HUNTR/X. He is completely unaware of their secret identities as demon hunters, a truth the members likely conceal to protect him from becoming a target. In a refreshing departure from the incompetent or antagonistic manager trope often seen in idol media, Bobby is portrayed as exceptionally competent, loyal, and a pillar of stability for the group. He is seen as the 'ideal manager.'",
    voiceActors: {
      en: "Ken Jeong",
      kr: "Lee Sang-ho",
      jp: "Takaaki Torashima",
    },
    appearance:
      "Bobby is a short, pudgy man with a medium-light skin tone. He has wavy, dark brown hair combed back, a small mustache, and a faint patch of facial hair. His typical attire consists of a gray jacket and pants worn over a white HUNTR/X merchandise T-shirt, complete with a purple VIP lanyard and white high-top sneakers. He also has a matching stage outfit, signifying his status as an honorary fourth member of the group.",
    personality:
      "Bobby is a cheerful, dependable, and fiercely loyal manager. He handles the group's schedules, social media, and frequent crises with a calm, solution-oriented approach and a touch of dry humor. His dedication goes beyond professional duty; he genuinely loves HUNTR/X and cares for the members as if they were his own family. When a major on-stage incident occurs, his immediate reaction is to blame himself for not noticing their struggles sooner. This deep emotional investment is also his greatest vulnerability. The demon king Gwi-ma exploits Bobby's fear of the group disbanding and being left alone, suggesting his work is his primary source of belonging. His passion for his job is so immense that he forgoes a much-needed vacation to oversee the surprise launch of a new single, a testament to his workaholic nature driven by pure affection for his artists.",
    quotes: [
      "Okay, I can handle this. I'm not having a nervous breakdown.",
      "I love my girls.",
      "Your success is my success!",
      "We'll face whatever comes together... as long as it doesn't violate paragraph 4 of your contract!",
    ],
    abilities: [
      "Exceptional Management - Highly skilled manager able to handle crises and logistics of a world-famous group with remarkable competence. Earns 3% of all HUNTR/X revenue",
      "Dancing - Has some dance skills and is often seen happily dancing along to HUNTR/X's choreography during rehearsals",
    ],
    background:
      "Bobby is a highly competent manager who handles HUNTR/X's schedules, social media, and crises with remarkable skill. His dedication goes beyond professional duty as he genuinely loves the group and cares for the members like family. He is completely unaware of their secret demon hunting activities, which the members likely conceal to protect him from becoming a target.",
    storyArc:
      "Bobby is introduced in a state of panic, trying to manage a concert backstage while the group is still on a plane. Throughout the film, he navigates the chaos of their lives, from surprise single releases to Rumi's vocal issues and the sudden rivalry with the Saja Boys. Despite the stress, he remains a supportive presence. After HUNTR/X's public breakup, a devastated Bobby is targeted by Gwi-ma's telepathic whispers. Preying on his feelings of failure and loneliness, Gwi-ma puts him in a trance, and he is seen numbly attending the Saja Boys' concert. However, he is among the first to be freed from the hypnosis by Rumi's song. As HUNTR/X reunites to defeat the demons, a proud and emotional Bobby watches them, declaring, 'I love my girls.'",
    relationships: [
      {
        name: "HUNTR/X",
        relation: "Manager",
        description:
          "His importance to the group is profound. The members trust him completely, comfortable with him visiting their apartment late at night. They care for him so much that they offer him their own luxury vacation and are easily lured into a trap when demons use a fake Bobby as bait.",
      },
    ],
    performanceOutfits: [
      {
        name: "Manager Outfit",
        description:
          "Gray jacket and pants over white HUNTR/X merchandise T-shirt with purple VIP lanyard and white high-top sneakers",
        occasion: "Daily management duties",
        imagePath: "/images/characters/bobby/outfits/1-manager-outfit.webp",
      },
      {
        name: "Stage Outfit",
        description:
          "Matching stage outfit signifying his status as honorary fourth member of the group",
        occasion: "Special performances and events",
        imagePath: "/images/characters/bobby/outfits/2-stage-outfit.webp",
      },
    ],
    trivia: [
      {
        category: "Background",
        title: "Korean-American Heritage",
        description:
          "His English name suggests he might be Korean-American, similar to Zoey. Assuming 'Bobby' is a nickname, his real name could be 'Robert.'",
      },
      {
        category: "Personal Details",
        title: "Traditional Taste",
        description:
          "His ringtone is a remake of the classic Korean song 'The Moony Night of Shilla,' hinting at a slightly older or more traditional taste.",
      },
      {
        category: "Fan Reception",
        title: "Beloved Character",
        description:
          "With his kind-hearted nature and competence, he has become a fan-favorite 'sweet guy' among international audiences and is admired by Korean fans as an ideal, passionate professional.",
      },
    ],
    relatedOST: ["Golden"],
  },
  derpy: {
    name: "Derpy",
    fullName: "Derpy",
    species: "Supernatural Creature (Good Spirit/Yokai)",
    role: "Mascot Character",
    overview:
      "Derpy is a mascot character and the ultimate 'scene-stealer' in K-Pop Demon Hunters. He is a supernatural creature, a former pet of Jinu, who resembles a large, comical tiger from traditional Korean folk paintings (minhwa). Unlike the reddish demons, Derpy has a blue color scheme, associating him more with the hunters. His official name was confirmed by designer Radford Sechrist to be Derpy, a name derived from the internet meme 'Derp,' which refers to a silly, cross-eyed expression. This is a nod to the fact that tigers in Kkachi Horangi paintings are often depicted with crossed eyes.",
    appearance:
      "Derpy is a large, supernatural feline with cerulean blue fur. His upper body is covered in black and white stripes, while his chest features rosette patterns. His eyes have a yellow cornea and red irises and are perpetually unfocused, giving him his signature 'derpy' look. He sports a constant grin with sharp white teeth and has tusk-like fangs poking out from the corners of his mouth.",
    personality:
      "Derpy is a friendly, loyal, and affectionate creature, though he is also quite dim-witted. He behaves much like a common housecat, enjoying being petted. His most defining trait is a unique obsession: he feels an overwhelming compulsion to set any knocked-over object upright. This is his top priority, and he will ignore all else to try and fix a fallen flowerpot or trash can, though his chubby paws always cause him to fail.",
    quotes: [
      "*Happy purring sounds*",
      "*Distressed sounds when objects are knocked over*",
      "*Creaking bamboo sounds when moving*",
    ],
    abilities: [
      "Interdimensional Travel - Can travel between realms by phasing through the ground or using the Honmoon as a medium",
      "Supernatural Detection - Can sense and scare away lesser demons with a growl",
      "Object Fixation - Compulsive need to set any knocked-over object upright",
      "Stealth Appearance - Can appear and disappear at will like the Cheshire Cat",
    ],
    background:
      "According to the art director, Derpy is a 'good spirit or yokai that can exist in any space.' He is not a demon and is one of the only non-demon supernatural creatures in the film. This allows him to remain in the human world even after the Honmoon barrier is restored. A setting detail reveals that Jinu summons him by striking a haetae (a mythical guardian lion) statue. When he moves, a distinct creaking bamboo sound can be heard.",
    storyArc:
      "He is introduced in a menacing way, but his comical obsession with a flowerpot he knocks over immediately reveals his harmless nature. Initially, he serves as a messenger between Jinu and Rumi. He quickly grows comfortable with Rumi, sleeping in her room and even acting as her mount. He is a neutral being who does not interfere in the conflict between hunters and demons. However, he shows deep affection for those he cares about. In a moment of heartbreak, he tries to stop Jinu from betraying Rumi by presenting him with the bracelet she had given him, his usually blank face filled with sadness.",
    relationships: [
      {
        name: "Jinu",
        relation: "Former Owner",
        description:
          "Derpy was Jinu's pet who shows loyalty and tries to prevent Jinu from betraying Rumi, demonstrating his deep affection.",
      },
      {
        name: "Rumi",
        relation: "New Caretaker",
        description:
          "Quickly grows comfortable with Rumi, sleeping in her room and serving as her mount. After Jinu's demise, he is adopted by Rumi.",
      },
      {
        name: "Sussie",
        relation: "Companion",
        description:
          "Always seen alongside his companion Sussie the magpie, who often gives him exasperated looks due to his clumsy antics.",
      },
    ],
    performanceOutfits: [
      {
        name: "Natural Form",
        description:
          "Cerulean blue fur with black and white stripes on upper body and rosette patterns on chest",
        occasion: "Default appearance",
        imagePath: "/images/characters/derpy/outfits/1-natural-form.webp",
      },
    ],
    trivia: [
      {
        category: "Motif",
        title: "Kkachi Horangi Tiger",
        description:
          "His primary motif is the tiger from the Korean folk art style known as Kkachi Horangi (or Hojakdo), which depicts magpies and tigers. True to the protective symbolism of these paintings, he is shown scaring away lesser demons with a growl.",
      },
      {
        category: "Design Inspiration",
        title: "Cheshire Cat",
        description:
          "His ability to appear and disappear at will, combined with his grin, also draws inspiration from the Cheshire Cat in Alice in Wonderland.",
      },
      {
        category: "Fan Reception",
        title: "Immense Popularity",
        description:
          "His cute, dog-like behavior and goofy appearance made him an instant fan favorite, leading to a flood of fanart and high demand for merchandise. Similar tiger-themed goods from the National Museum of Korea sold out quickly after the film's release.",
      },
      {
        category: "Fan Theory",
        title: "Spy Theory (Debunked)",
        description:
          "A fan theory suggested Derpy might have been a spy for Jinu, looking at discarded lyrics in Rumi's trash can. However, the production team has consistently described him as a 'good spirit,' making it more likely that Jinu exploited his innocent nature.",
      },
    ],
    relatedOST: ["Free"],
  },
  mystery: {
    name: "Mystery Saja",
    koreanName: "미스터리 사자",
    fullName: "Mystery Saja",
    gender: "Male",
    nationality: "Unspecified",
    species: "Demon",
    affiliatedGroup: "Saja Boys",
    position: "Lead Vocalist / Sub-Vocalist (Presumed)",
    role: "Saja Boys Member",
    age: "Unknown",
    voiceActors: {
      en: "Alan Lee (Dialogue), Kevin Woo (Singing)",
      kr: "Im Chae-bin (Dialogue)",
    },
    overview:
      "Mystery Saja is a supporting antagonist in K-Pop Demon Hunters. He is the lead/sub-vocalist of the demon idol group, Saja Boys. True to his stage name, he is the group's most enigmatic member, whose face is almost entirely hidden by his long, periwinkle-colored bangs. He is a demon disguised as a K-pop idol to help steal fans from HUNTR/X and serves as the primary love interest for the group's rapper, Zoey.",
    appearance:
      "Mystery is a slim man of average height, whose most defining feature is his long hair that completely covers his eyes. In his human form, he has a soft jawline and wears stylish outfits like sweater vests and arm warmers. When he first transforms, his sharp demonic fangs are shown magically turning into his earrings. In his demon form, he has purple skin, claws, and hidden tusks.",
    performanceOutfits: [
      {
        name: "Enigmatic Stage Look",
        description:
          "Stylish outfits like sweater vests and arm warmers, with his signature long bangs covering his eyes.",
        occasion: "Stage performances",
        imagePath:
          "/images/characters/mystery/outfits/1-enigmatic-stage-look.webp",
      },
    ],
    personality:
      "He maintains a reserved and stoic persona, striking bashful poses and remaining mostly silent. Because his eyes are covered, he often uses his mouth—a faint smile or a grimace—to convey emotion. However, he struggles to mimic human behavior convincingly, with his movements sometimes appearing rigid. He also displays sudden, animalistic traits, such as barking at a fan during a signing event. Beneath this quiet exterior, he is an immoral demon, apathetic and exhausted by his idol duties off-stage.",
    quotes: ["And to our fans, thank you. We really feed off your energy."],
    abilities: [
      "Demonic Powers: He can steal souls, teleport, levitate, and shapeshift.",
      "Immortality: He is effectively immortal unless killed by a hunter or Gwi-ma.",
      "Singing: As the lead vocalist, he has an exceptionally angelic, high-pitched falsetto voice.",
      "Dancing: He is a proficient dancer.",
    ],
    background:
      "Little is known about Mystery's past, but it is assumed he was once human and became a demon through a pact with Gwi-ma.",
    storyArc:
      "Mystery has very little individual plot significance, but he serves as the main love interest for Zoey. She is immediately smitten with him, and their canonical ship name is 'Zoeystery.' During a joint fan event, Zoey flirts with him, and he later barks at a fan before Zoey reprimands him. In the final battle, he attacks HUNTR/X and engages in a brief fight with Zoey. After Jinu's sacrifice, he is the first to charge the hunters again. Just as Zoey is about to land a final blow, his bangs are swept aside, revealing his full face to her for a brief moment. Her reaction is, 'He's totally my type!' before she attacks. However, a puff of pink smoke implies he teleported away at the last second, leaving his ultimate fate ambiguous.",
    relationships: [
      {
        name: "Zoey",
        relation: "Love Interest",
        description:
          "Serves as the primary love interest for Zoey, with their canonical ship name being 'Zoeystery.'",
      },
      {
        name: "Gwi-ma",
        relation: "Master",
        description: "Serves under Gwi-ma like the other Saja Boys members.",
      },
    ],
    combatStyle:
      "Engages in brief combat with Zoey but appears to escape at the last moment through teleportation.",
    favoriteFood: "Unknown",
    hobbies: ["Maintaining mysterious persona", "Fan interactions"],
    fears: ["Unknown"],
    trivia: [
      {
        category: "Occult Motif",
        title: "Beast-Type Demon Theories",
        description:
          "Fans speculate his true form is a beast-type demon. The two main theories are: Sapsali Dog (a native Korean dog breed with long fur covering its eyes) or Jangsanbeom (a fearsome, white-furred Korean cryptid known for its beautiful, luring voice).",
      },
      {
        category: "Design Details",
        title: "Animation Practicality",
        description:
          "His face-covering hairstyle was a practical choice to simplify the animation process. Official character model sheets reveal that despite Baby being the maknae, Mystery is the shortest member of the Saja Boys.",
      },
      {
        category: "Fan Reception",
        title: "Popular Despite Limited Screen Time",
        description:
          "Despite his minimal screen time, he is extremely popular with fans due to his mysterious aura and his romantic connection with Zoey. His singing voice actor, Kevin Woo (a former K-pop idol himself), has stated he personally believes Mystery had a crush on Zoey.",
      },
      {
        category: "Symbolism",
        title: "Idealization Commentary",
        description:
          "His blank-slate character, onto whom Zoey and the fans project their ideals, can be interpreted as a symbol of the fan practice of creating idealized narratives for K-pop idols.",
      },
      {
        category: "Japanese Dub",
        title: "Personal Pronoun",
        description:
          "In the Japanese dub, he uses the personal pronoun 'boku.'",
      },
    ],
    relatedOST: ["Soda Pop", "Your Idol"],
  },
  sussie: {
    name: "Sussie",
    fullName: "Sussie",
    species: "Supernatural Creature (Good Spirit/Yokai)",
    role: "Mascot Character",
    overview:
      "Sussie is a mascot character from K-Pop Demon Hunters and one of Jinu's former pets, always seen alongside her companion, Derpy. She is a supernatural magpie with six eyes. Her official name, Sussie, was confirmed by the director and is a pun based on her constantly 'suspicious eye' (Sussie) expression.",
    appearance:
      "Sussie resembles a real-life magpie with a slender build and black-and-white plumage, but with a few key supernatural features: she has three eyes arranged vertically on each side of her face (for a total of six) and sharp teeth in her beak. Her most distinctive feature is the small, black Korean gat (hat) she wears, which she reportedly stole from Derpy. This unique six-eyed design is an original concept for the film, with no clear precedent in East Asian mythology.",
    personality:
      "In sharp contrast to the dim-witted Derpy, Sussie is intelligent, sassy, and competent. She often gives her exasperated companion exasperated looks, annoyed by his clumsy antics. She also has kleptomaniacal tendencies, as evidenced by her stolen hat. Despite her mischievous and sarcastic nature, she is fiercely loyal to both Derpy and their owner, Jinu. Like Derpy, she is a 'good spirit or yokai' and is not a demon, allowing her to remain in the human world after the Honmoon is restored.",
    quotes: [
      "*Sassy magpie sounds*",
      "*Exasperated chirping at Derpy*",
      "*Suspicious eye expressions*",
    ],
    abilities: [
      "Flight - Natural magpie flying abilities",
      "Kleptomania - Tendency to steal small objects, particularly headwear",
      "Intelligence - Sharp contrast to Derpy's dim-witted nature",
      "Supernatural Vision - Six eyes provide enhanced perception",
    ],
    background:
      "Sussie is based on the magpie from the Korean folk art style known as Kkachi Horangi (Magpie and Tiger). Her act of stealing Derpy's hat can be interpreted as a satirical nod to the folk painting's original meaning, where the commoner magpie often outwits the foolish aristocratic tiger. Her vertically arranged, three-eyed appearance on each side of her head led fans to nickname her the 'Galaxy Magpie,' due to the resemblance to the camera lenses on Samsung Galaxy smartphones.",
    storyArc:
      "Like Derpy, she serves as one of Jinu's companions and is a neutral being who does not interfere in the conflict between hunters and demons. Despite her mischievous and sarcastic nature, she is fiercely loyal to both Derpy and their owner, Jinu. After Jinu's demise, she and Derpy are adopted by Rumi and now live peacefully with the members of HUNTR/X.",
    relationships: [
      {
        name: "Derpy",
        relation: "Companion",
        description:
          "Always seen alongside Derpy, often giving him exasperated looks due to his clumsy antics. Despite her annoyance, she is loyal to her dim-witted companion.",
      },
      {
        name: "Jinu",
        relation: "Former Owner",
        description:
          "One of Jinu's former pets, fiercely loyal despite her mischievous nature.",
      },
      {
        name: "Rumi",
        relation: "New Caretaker",
        description:
          "After Jinu's demise, she is adopted by Rumi and now lives peacefully with the members of HUNTR/X.",
      },
    ],
    performanceOutfits: [
      {
        name: "Natural Form with Stolen Hat",
        description:
          "Black-and-white magpie plumage with six eyes (three on each side arranged vertically) and a small black Korean gat hat",
        occasion: "Default appearance",
        imagePath:
          "/images/characters/sussie/outfits/1-natural-form-with-stolen-hat.webp",
      },
    ],
    trivia: [
      {
        category: "Motif",
        title: "Kkachi Horangi Magpie",
        description:
          "She is based on the magpie from the Korean folk art style known as Kkachi Horangi (Magpie and Tiger). Her act of stealing Derpy's hat can be interpreted as a satirical nod to the folk painting's original meaning, where the commoner magpie often outwits the foolish aristocratic tiger.",
      },
      {
        category: "Fan Nickname",
        title: "Galaxy Magpie",
        description:
          "Her vertically arranged, three-eyed appearance on each side of her head led fans to nickname her the 'Galaxy Magpie,' due to the resemblance to the camera lenses on Samsung Galaxy smartphones. This became so popular that Samsung officially collaborated with the film for a Galaxy Unpacked 2025 promotional video featuring Sussie.",
      },
      {
        category: "Name Pronunciation",
        title: "Dual Pronunciation",
        description:
          "Her name can be pronounced as 'Sussie' or 'Soo-ji,' with the creators confirming that both are correct.",
      },
      {
        category: "Design Origin",
        title: "Original Concept",
        description:
          "This unique six-eyed design is an original concept for the film, with no clear precedent in East Asian mythology.",
      },
    ],
    relatedOST: ["Free"],
  },
};
