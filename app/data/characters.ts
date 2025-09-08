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
    weaponEvolution: "Later enhanced into a Chilseongkal (Seven Star Sword) with a dokkaebi motif",
    voiceActors: {
      en: "Arden Cho, Rumi Oak (child)",
      kr: "Shin Na-ri",
      jp: "Minako Kotobuki"
    },
    singingVoice: {
      en: "EJAE",
      kr: "EJAE",
      jp: "Tsutsumi Ikuko"
    },
    family: [
      {
        relation: "Biological Mother",
        name: "Ryu Mi-yeong"
      },
      {
        relation: "Adoptive Mother",
        name: "Celine"
      },
      {
        relation: "Biological Father",
        name: "Unnamed Demon"
      }
    ],
    overview: "Rumi Kang is the main protagonist of the 2025 animated musical fantasy, K-Pop Demon Hunters, produced by Sony Pictures Animation for Netflix. She is the charismatic leader and main vocalist of the world-renowned K-pop girl group, HUNTR/X. While captivating audiences on stage, Rumi and her bandmates, Mira and Zoey, lead a secret life as demon hunters. However, Rumi harbors a deeper secret she conceals even from her closest friends: she is a cambion, born to a human mother and a demon father.",
    appearance: "Rumi is depicted as a tall, athletic young woman with classic Korean beauty. Her most defining feature is her long, brilliant purple hair, which she almost always wears in a thick dragon tail braid—a style she inherited from her mother, Ryu Mi-yeong. As an idol, she sports bold stage makeup with intense eyeliner and heavy mascara to accentuate a fierce persona. Her outfits blend modern K-pop glamour with traditional Korean aesthetics, often featuring a modernized norigae (a decorative tassel pendant).",
    performanceOutfits: [
      {
        name: "How It's Done",
        description: "An edgy, streetwear-inspired outfit consisting of a puffy bomber jacket over a white mock-neck crop top (to hide her demon markings), high-waisted denim shorts, and platform combat boots.",
        occasion: "Opening number performance"
      },
      {
        name: "Golden (Idol Awards)",
        description: "A polished black, white, and gold ensemble, featuring a white sleeveless top and shorts, a cropped black jacket detailed with gold chains, and knee-high white lace-up boots.",
        occasion: "Awards ceremony performance"
      },
      {
        name: "Takedown (Train Battle)",
        description: "A stealthy, all-black leather combat outfit that balances style with functionality, allowing her to wield her glowing purple sword during the performance.",
        occasion: "Action sequence performance"
      },
      {
        name: "Free",
        description: "A softened look with a simple cropped hoodie, skinny jeans, and sneakers. Her magenta demon markings begin to glow faintly through her clothes as she starts to embrace her identity.",
        occasion: "Intimate duet with Jinu"
      },
      {
        name: "What It Sounds Like (Finale)",
        description: "A disheveled version of her 'Golden' outfit, with the jacket removed to fully reveal the glowing purple and iridescent demon markings swirling across her arms, neck, and face.",
        occasion: "Climax finale performance"
      }
    ],
    personality: "On the surface, Rumi is the confident, ambitious, and responsible leader of HUNTR/X. She is hardworking and relentlessly pushes herself and her group toward their goal of completing the 'Golden Honmoon'—a mission to permanently seal the demon world which she believes will also purify her of her demonic heritage. This drive can make her stubborn and prone to neglecting her own well-being. Beneath this driven exterior, Rumi is deeply compassionate and protective of her friends and fans. Her greatest struggle is the internal shame and fear she feels about her half-demon nature. Terrified of being seen as a 'monster' and rejected by her friends, she keeps her struggles hidden, which can make her seem emotionally distant. This insecurity leads to moments of intense self-doubt and a tendency toward reckless self-sacrifice, often choosing to face danger alone rather than burden her team.",
    quotes: [
      "If this is the Honmoon I'm supposed to protect, I'm glad to see it destroyed.",
      "Then, we'll just make a new one."
    ],
    abilities: [
      "Expert Combat Skills: Thanks to years of rigorous training, Rumi is a formidable fighter, skilled in hand-to-hand combat and swordplay, seamlessly blending dance-like movements with her attacks. She is capable of parkour-level feats and has a combat sense so sharp she can predict and counter a demon's teleportation attacks.",
      "Powerful Singing Voice: Her voice possesses magical properties, channeling spiritual energy from her fans' emotions to power the Honmoon, a protective barrier against demonic forces. As the main vocalist, her power is depicted as the strongest in the group, and she can also use her voice to unleash sonic attacks.",
      "Weapon Conjuring & Soul Energy Projection: Rumi can summon her signature weapon, the Saingeom Sword, from pure energy. This magical blade is spiritually linked to her. She can also channel soul energy into it to release crescent-shaped energy slashes for ranged attacks.",
      "Idol Abilities: While officially the main vocalist, she is a 'hexagonal center'—an all-rounder who perfectly covers all areas, including dance, rap, and visuals. She performs incredibly difficult songs live while executing intense choreography and is implied to also act as a producer for the group."
    ],
    background: "Her primary weapon is the Saingeom (Four Tigers Sword), a legendary Korean blade believed to repel evil. It is a spiritual heirloom passed down from her mother's generation of hunters. Later in the story, after absorbing Jinu's soul, it transforms into a massive Chilseongkal (Seven Star Sword) engraved with a dokkaebi (Korean goblin/demon) motif.",
    storyArc: "Raised as an idol and a hunter by her adoptive mother Celine, Rumi discovers that the demonic markings on her body are spreading, causing her to lose her voice. Believing that completing the Golden Honmoon will cure her, she rushes the release of their new song, 'Golden.' During this time, she encounters the rival boy band 'Saja Boys' and discovers they are demons. In a confrontation, their leader, Jinu, sees her secret markings but chooses to cover for her. This act, combined with learning of Jinu's own tragic past as a human, forms a complicated bond between them. Rumi makes a deal with him to win at the Idol Awards, but he betrays her at the last moment, exposing her half-demon nature to the world. Abandoned by her horrified friends, who point their weapons at her, and crushed by Jinu's betrayal, Rumi breaks down and begins to transform into a more demonic form. She begs Celine to kill her, but when Celine also fails to accept her as she is, Rumi despairs, declaring, 'If this is the Honmoon I'm supposed to protect, I'm glad to see it destroyed.' However, just as the Honmoon is about to shatter, Rumi finds the strength to accept her entire identity. She reappears and proclaims, 'Then, we'll just make a new one,' and begins to sing. Her song breaks the spell over Mira and Zoey, and the reunited HUNTR/X enters the final battle. Jinu sacrifices himself to save Rumi, and using his soul's power, she finally defeats the demon king Gwi-ma and creates a new, rainbow-colored Honmoon to protect the world. In the end, Rumi's markings remain, but she no longer hides them. Her relationship with her bandmates is healed, and HUNTR/X continues their career, stronger and more united than ever.",
    relationships: [
      {
        name: "Jinu",
        relation: "Love Interest / Rival",
        description: "Their relationship evolves from enemies to a complex bond built on understanding their shared supernatural burdens. Jinu ultimately sacrifices himself to save Rumi."
      },
      {
        name: "Mira",
        relation: "Bandmate",
        description: "Fellow member of HUNTR/X who initially rejects Rumi when her demon nature is revealed, but later reconciles."
      },
      {
        name: "Zoey",
        relation: "Bandmate",
        description: "Fellow member of HUNTR/X who initially rejects Rumi when her demon nature is revealed, but later reconciles."
      },
      {
        name: "Celine",
        relation: "Adoptive Mother & Mentor",
        description: "Raised Rumi after her biological mother's death, but struggles to accept Rumi's demonic heritage."
      },
      {
        name: "Gwi-ma",
        relation: "Arch-Nemesis",
        description: "The demon king whom Rumi ultimately defeats, creating a new Honmoon to protect the world."
      }
    ],
    trivia: [
      {
        category: "Character Origin",
        title: "Design Creation",
        description: "Rumi's initial design was created in 2016 by director Maggie Kang's husband, artist Rad Sechrist, for a personal project. Director Kang loved the design and adapted it for the film."
      },
      {
        category: "Name",
        title: "Real-Life Connection",
        description: "The character's name, Rumi, was given to Director Kang's real-life daughter, not the other way around. The film was in development for nine years, long enough for her daughter to voice the younger version of the character."
      },
      {
        category: "Backstory",
        title: "Ancestral Home",
        description: "Her family's ancestral home is likely on Jeju Island, as suggested by traditional funeral markers (sandam) and statues (dol hareubang) shown in flashbacks. The story of how her human mother and demon father fell in love remains an unresolved mystery."
      },
      {
        category: "Immunity",
        title: "Demon King Resistance",
        description: "Rumi is the only character with demonic blood who is immune to the demon king Gwi-ma's mental control."
      },
      {
        category: "Fan Culture",
        title: "Viral Memes & Ships",
        description: "A brief, comical scene of Rumi sniffing kimbap became a viral meme among fans. In fan fiction, she is most often shipped with Jinu ('Rujinu') or Mira."
      },
      {
        category: "Voice & Vocals",
        title: "Performance Inspiration",
        description: "English voice actress Arden Cho wanted Rumi to be as cool as real-life K-pop groups like BLACKPINK and aespa. Her singing vocalist, EJAE, is a renowned composer who has worked on hits like Red Velvet's 'Psycho' and aespa's 'Armageddon.'"
      },
      {
        category: "Sequel Hooks",
        title: "Future Possibilities",
        description: "The story leaves open possibilities for a sequel: Gwi-ma was only temporarily banished, the Honmoon was not the pure 'Golden' version, and Rumi's markings (which Gwi-ma called 'my markings') did not disappear."
      }
    ],
    relatedOST: ["Golden", "TAKEDOWN", "What It Sounds Like", "How It's Done", "Free"],
  },
  mira: {
    name: "Mira",
    koreanName: "미라",
    role: "HUNTR/X Main Dancer & Visual",
    age: "21",
    height: "170cm",
    weapon: "Woldo (Moon Blade)",
    voiceActor: "May Hong (Speaking) / Audrey Nuna (Singing)",
    personality:
      "The visual and main dancer of the group. Mira is fierce, graceful, and fashion-forward. She expresses her power through movement, wielding her deadly woldo with artistic precision. She is loyal and protective of her friends.",
    quotes: [
      "Actions speak louder than words. My dance speaks loudest.",
      "Find your rhythm, find your strength.",
      "We move as one, a storm of light against the darkness.",
    ],
    abilities: [
      "Woldo Mastery",
      "Dance-Based Combat",
      "Superhuman Agility",
      "Protective Aura Generation",
      "Enhanced Reflexes",
    ],
    background:
      "A prodigy in both traditional Korean and modern dance, Mira discovered her demon-hunting abilities when her movements began to generate protective energy. She co-founded HUNTR/X with Rumi, bringing a unique, fluid fighting style to the team.",
    relationships: [
       {
        name: "Rumi",
        relation: "Best Friend & Leader",
        description:
          "Her closest friend. Mira is often the one to ground Rumi and offer a different perspective.",
      },
      {
        name: "Zoey",
        relation: "Teammate",
        description:
          "Shares a sisterly bond with Zoey, often teasing her but always supporting her.",
      },
    ],
    combatStyle: "A fluid and acrobatic style that combines dance with martial arts. She uses her woldo in wide, sweeping attacks and can generate energy waves from her movements.",
    favoriteFood: "Naengmyeon (Cold Noodles)",
    hobbies: ["Choreography", "Fashion design", "Visiting art galleries"],
    fears: ["Being unable to protect her loved ones", "Confined spaces"],
    relatedOST: ["How It's Done", "TAKEDOWN", "Golden"],
  },
  zoey: {
    name: "Zoey",
    koreanName: "조이",
    role: "HUNTR/X Main Rapper & Maknae",
    age: "19",
    height: "162cm",
    weapon: "Throwing Knives (Balisong style)",
    voiceActor: "Ji-young Yoo (Speaking) / Rei Ami (Singing)",
    personality:
      "The main rapper, lyricist, and youngest member (maknae) of HUNTR/X. Zoey is sharp, witty, and rebellious, with a street-smart attitude. She channels her energy into her powerful lyrics and uses throwing knives with deadly accuracy.",
    quotes: [
      "My rhymes hit as hard as my blades.",
      "They call me the maknae, but I'm the one you should fear.",
      "Never underestimate the power of a sharp tongue and a sharper knife.",
    ],
    abilities: [
      "Expert Marksmanship (Throwing Knives)",
      "Lyrical Incantations",
      "Stealth and Infiltration",
      "Rapid Attacks",
      "Enhanced Speed",
    ],
    background:
      "Zoey grew up on the streets, honing her survival instincts and her skills as a rapper. After discovering her latent demon-hunting lineage, she was recruited by Celine and joined HUNTR/X, bringing a raw, untamed energy to the group's dynamic.",
     relationships: [
       {
        name: "Rumi",
        relation: "Leader / Older Sister Figure",
        description:
          "Looks up to Rumi as a leader and role model, though she often challenges her authority.",
      },
      {
        name: "Mira",
        relation: "Teammate",
        description:
          "Enjoys a playful, teasing relationship with Mira, seeing her as a cool older sister.",
      },
    ],
    combatStyle: "A fast-paced, aggressive style focusing on ranged attacks and exploiting enemy weaknesses. She uses her agility to outmaneuver opponents and her lyrical incantations to stun or distract them.",
    favoriteFood: "Spicy Ramyeon",
    hobbies: ["Writing lyrics", "Skateboarding", "Playing video games"],
    fears: ["Being alone", "Losing her newfound family"],
    relatedOST: ["How It's Done", "TAKEDOWN", "Golden"],
  },
  jinu: {
    name: "Jinu",
    koreanName: "진우",
    role: "Saja Boys Leader",
    age: "Appears 21 (Chronologically over 100)",
    height: "185cm",
    weapon: "Demonic Microphone / Shadow Manipulation",
    voiceActor: "Ahn Hyo-seop (Speaking) / Andrew Choi (Singing)",
    personality:
      "The charismatic and conflicted leader of the Saja Boys. Once a human who sold his soul for fame, he is a direct foil to Rumi, torn between his demonic duty and his lingering humanity. He often appears arrogant and cynical but hides a deep well of regret.",
    quotes: [
      "The world only understands power.",
      "My music is a curse, a beautiful, irresistible curse.",
      "We offer obsession, and they give us their souls.",
    ],
    abilities: [
      "Demonic Charm",
      "Soul Absorption (via music)",
      "Shadow Manipulation",
      "Haunting Vocals",
      "Superhuman Strength",
    ],
    background:
      "Once a gifted but unrecognized musician, Jinu made a pact with the demon king Gwi-Ma to achieve eternal fame. Now, he leads the Saja Boys, using their demonic music to drain life energy from fans to weaken the barrier protecting the human world. His encounter with Rumi reawakens his dormant conscience.",
    relationships: [
      {
        name: "Rumi",
        relation: "Love Interest / Rival",
        description:
          "He sees a kindred spirit in Rumi, another artist burdened by a supernatural secret. He is drawn to her light and ultimately sacrifices himself for her.",
      },
      {
        name: "Gwi-Ma",
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
    combatStyle: "Relies on his overwhelming demonic power, using shadows to attack and restrain foes. His most dangerous weapon is his voice, which can charm, weaken, and drain the souls of his victims.",
    favoriteFood: "Cold Brew Coffee",
    hobbies: ["Composing melancholic melodies", "Reading classic literature", "Rooftop stargazing"],
    fears: ["Eternal servitude to Gwi-Ma", "Forgetting his human self completely"],
    relatedOST: ["Soda Pop", "Your Idol", "Free"],
  },
  celine: {
    name: "Celine",
    koreanName: "셀린",
    role: "Mentor to HUNTR/X",
    age: "40s",
    height: "168cm",
    weapon: "Geom (Korean Sword) / Protective Talismans",
    voiceActor: "Yunjin Kim (Speaking) / Lea Salonga (Singing)",
    personality:
      "A former demon hunter and member of the legendary K-pop group Sunlight Sisters. Celine is a wise, powerful, and sometimes stern mentor to HUNTR/X. She carries the grief of losing her best friend, Rumi's mother, and is fiercely protective of the new generation.",
    quotes: [
      "The fight is not just yours, it is a legacy.",
      "A true hunter fights with heart, not just with steel.",
      "Protect the balance, and protect each other.",
    ],
    abilities: [
      "Veteran Demon Hunter Tactics",
      "Protective Magic & Talismans",
      "Vast Knowledge of Demon Lore",
      "Spiritual Energy Healing",
    ],
    background:
      "As a member of the Sunlight Sisters, Celine fought alongside Rumi's mother. After her friend's fall, she retired from the front lines and dedicated her life to raising Rumi and preparing the next generation of hunters. She runs a hidden dojo and information hub for the team.",
    relationships: [
       {
        name: "Rumi",
        relation: "Adoptive Daughter & Protégé",
        description:
          "Loves Rumi as her own but their relationship is strained by Celine's insistence on secrecy and control.",
      },
       {
        name: "Rumi's Mother",
        relation: "Former Teammate & Best Friend",
        description:
          "Her memory is Celine's driving force to protect Rumi and the world.",
      },
    ],
    combatStyle: "A defensive and strategic style, relying on her vast experience. She uses talismans to create barriers, disrupt demonic energy, and support her allies from the back lines.",
    favoriteFood: "Ginseng Tea",
    hobbies: ["Meditation", "Calligraphy", "Maintaining her weapon collection"],
    fears: ["History repeating itself", "Rumi suffering the same fate as her mother"],
    relatedOST: ["Free"],
  },
  "gwi-ma": {
    name: "Gwi-Ma",
    koreanName: "귀마",
    role: "The Demon King",
    age: "Ancient",
    height: "Variable",
    weapon: "His own demonic power",
    voiceActor: "Lee Byung-hun",
    personality:
      "The ruthless, ancient, and manipulative demon king. Gwi-Ma is the ultimate villain, a being of immense power who seeks to shatter the barrier between the demon and human worlds to reign over both. He is arrogant, cruel, and sees humans as nothing more than a source of energy.",
    quotes: [
      "The world will burn, and from the ashes, my kingdom will rise.",
      "Their little songs are no match for my eternal power.",
      "All souls are mine to command.",
    ],
    abilities: [
      "Overwhelming Demonic Power",
      "Manipulation and Corruption",
      "Reality Warping",
      "Command of Demon Armies",
      "Soul Contracts",
    ],
    background:
      "An ancient and powerful demon, Gwi-Ma has been plotting his return for centuries. He was previously defeated by the Sunlight Sisters but survived. He manipulates the Saja Boys as his pawns to break the magical barrier maintained by HUNTR/X's music so he can consume the Earth.",
    relationships: [
       {
        name: "Jinu",
        relation: "Pawn / Servant",
        description:
          "He holds Jinu's soul via a contract, using him as the leader of his demonic boy band.",
      },
       {
        name: "HUNTR/X",
        relation: "Primary Obstacle",
        description:
          "The descendants of his old enemies and the only thing standing in his way.",
      },
    ],
    combatStyle: "Relies on pure, overwhelming force and reality-bending powers. He rarely engages in direct combat himself, preferring to corrupt and manipulate others to do his bidding.",
    favoriteFood: "Human Souls",
    hobbies: ["Monologuing", "World domination planning"],
    fears: ["The combined power of Spirit and Demon magic", "The Golden Honmoon"],
    relatedOST: ["Your Idol"],
  },
  abby: {
    name: "Abby 'Abs' Saja",
    koreanName: "애비",
    role: "Saja Boys Member",
    age: "Appears 22",
    height: "188cm",
    weapon: "Brute Strength",
    voiceActor: "SungWon Cho (Speaking) / Neckwav (Singing)",
    personality:
      "The muscular and intimidating member of the Saja Boys. He is a demon of pure physical power who enjoys the adoration of fans and the chaos the group causes. Less cunning than his bandmates, he prefers direct confrontation.",
    quotes: [
      "Feel the beat? That's your heart pounding in fear.",
      "We are what you desire most.",
      "Your soul sings the sweetest melody.",
    ],
    abilities: [
      "Superhuman Strength & Durability",
      "Hypnotic Performance",
      "Demonic Roar",
      "Earth-shattering Stomps",
    ],
    background:
      "A powerful demon recruited by Gwi-Ma for his raw strength. Abby fully embraces his role in the Saja Boys, enjoying the fame and the chance to unleash his destructive power on the human world.",
    relationships: [
       {
        name: "Jinu",
        relation: "Leader",
        description:
          "Follows Jinu's lead, respecting his power and connection to Gwi-Ma.",
      },
    ],
    combatStyle: "A straightforward brawler. He uses his immense strength to overpower opponents, create shockwaves, and destroy his surroundings.",
    favoriteFood: "Steak (extra rare)",
    hobbies: ["Working out", "Intimidating people", "Crowd surfing"],
    fears: ["Magic seals", "Being outsmarted"],
    relatedOST: ["Soda Pop", "Your Idol"],
  },
  romance: {
    name: "Romance Saja",
    koreanName: "로맨스",
    role: "Saja Boys Member",
    age: "Appears 20",
    height: "180cm",
    weapon: "Charm / Emotional Manipulation",
    voiceActor: "Joel Kim Booster (Speaking) / samUIL Lee (Singing)",
    personality:
      "The smooth-talking, romantic member of the Saja Boys, who uses his charm as a weapon. He is an incubus-like demon who preys on the emotional vulnerabilities of fans, seeing love as a form of possession.",
    quotes: [
      "Love is just another form of possession.",
      "Your heart belongs to us now.",
      "Romance is eternal, just like your servitude.",
    ],
    abilities: [
      "Emotional Manipulation",
      "Seductive Aura",
      "Heart-Corruption (feeds on affection)",
      "Illusion Creation",
    ],
    background:
      "A demon who specializes in emotional manipulation. He was drawn to Gwi-Ma's plan for the opportunity to feast on the powerful emotions of millions of K-pop fans. He is the most cunning of the Saja Boys next to Jinu.",
    relationships: [
       {
        name: "Jinu",
        relation: "Leader",
        description:
          "Respects Jinu's cunning but also sees him as a rival for Gwi-Ma's favor.",
      },
    ],
    combatStyle: "Avoids direct physical conflict, preferring to turn his victims' emotions against them. He creates illusions and uses his seductive charm to incapacitate or control his opponents.",
    favoriteFood: "Chocolates and broken hearts",
    hobbies: ["Reading romance novels", "People watching", "Breaking hearts"],
    fears: ["True, selfless love", "Emotional rejection"],
    relatedOST: ["Soda Pop", "Your Idol"],
  },
  baby: {
    name: "Baby Saja",
    koreanName: "베이비",
    role: "Saja Boys Maknae",
    age: "Appears 18",
    height: "175cm",
    weapon: "Deception / Speed",
    voiceActor: "Danny Chung (Singing)",
    personality:
      "The youngest-appearing member of the Saja Boys, whose innocent and playful facade masks a sinister and chaotic nature. He delights in the mayhem the group causes and is more unpredictable than his teammates.",
    quotes: [
      "Don't let my age fool you.",
      "The youngest flame burns the brightest.",
      "Innocence is just another mask to wear.",
    ],
    abilities: [
      "Deceptive Innocence",
      "Superhuman Speed & Agility",
      "Energy Absorption",
      "Trickster Tactics",
    ],
    background:
      "A chaotic demon who enjoys toying with humans. Baby uses his youthful appearance to lower the guard of victims, making him particularly effective at targeting younger fans and stealing their energy. He joined Gwi-Ma for the sheer fun of it.",
    relationships: [
       {
        name: "Jinu",
        relation: "Leader",
        description:
          "Views Jinu as the 'boring' leader but follows his orders as long as they lead to chaos.",
      },
    ],
    combatStyle: "A chaotic and unpredictable fighting style based on speed and trickery. He darts around the battlefield, creating diversions and striking when his opponents are distracted.",
    favoriteFood: "Candy and popcorn",
    hobbies: ["Playing pranks", "Video games", "Annoying his bandmates"],
    fears: ["Boredom", "Rules"],
    relatedOST: ["Soda Pop", "Your Idol"],
  },
  bobby: {
    name: "Bobby",
    koreanName: "바비",
    role: "Manager of HUNTR/X",
    age: "30s",
    height: "178cm",
    weapon: "Cellphone / Contracts",
    voiceActor: "Ken Jeong",
    personality:
      "The ever-enthusiastic, slightly clueless, but fiercely loyal manager of HUNTR/X. He is completely unaware of the group's demon-hunting activities, attributing their battles to rival fan groups or elaborate PR stunts. His priority is the group's success and well-being.",
    quotes: [
      "Your success is my success!",
      "Whoa, those Saja Boys fans are really something else!",
      "We'll face whatever comes together... as long as it doesn't violate paragraph 4 of your contract!",
    ],
    abilities: [
      "Strategic Scheduling",
      "Industry Connections",
      "Crisis Management (of the mundane variety)",
      "Unwavering Optimism",
    ],
    background:
      "A veteran K-pop manager, Bobby discovered HUNTR/X's potential early on and has been instrumental in their public careers. He works tirelessly to book shows, manage their image, and protect them from the perils of the entertainment industry, all while remaining oblivious to the supernatural dangers they face.",
    relationships: [
       {
        name: "HUNTR/X",
        relation: "Manager / Father Figure",
        description:
          "He adores the girls and treats them like his own daughters, albeit daughters with a very intense and destructive 'hobby'.",
      },
    ],
    combatStyle: "Fights his battles in boardrooms and on phone calls. His primary weapons are negotiation, scheduling, and a well-worded press release.",
    favoriteFood: "Instant Coffee and Gimbap",
    hobbies: ["Tracking album sales", "Organizing fan meets", "Stress-eating"],
    fears: ["Scandals", "Disbandment", "The Saja Boys' manager"],
    relatedOST: ["Golden"],
  },
  mystery: {
    name: "Mystery",
    koreanName: "미스터리",
    role: "Saja Boys Member",
    age: "Unknown",
    height: "182cm",
    weapon: "Unknown",
    voiceActor: "N/A",
    personality: "The enigmatic and silent member of the Saja Boys. He is always present but never speaks, his motives and abilities shrouded in secrecy. His presence is unsettling even to his own bandmates.",
    quotes: ["..."],
    abilities: ["Shadow Walking", "Stealth", "Fear Induction", "Psychic Interference"],
    background: "Virtually nothing is known about Mystery. He appeared with Gwi-Ma and was assigned to the Saja Boys. Some whisper he is not a demon, but something else entirely, serving as Gwi-Ma's personal shadow and spy.",
    relationships: [
       {
        name: "Gwi-Ma",
        relation: "Direct Subordinate",
        description:
          "Seems to report directly to Gwi-Ma, bypassing Jinu's authority.",
      },
    ],
    combatStyle: "Avoids direct combat, using stealth and psychological warfare to disable his opponents. He moves unseen and strikes from the shadows, often without his victims even realizing he was there.",
    favoriteFood: "Unknown",
    hobbies: ["Observing", "Lurking", "Being mysterious"],
    fears: ["Unknown"],
    relatedOST: ["Soda Pop", "Your Idol"],
  }
}