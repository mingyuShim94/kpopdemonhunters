import Link from "next/link";
import Footer from "../components/Footer";

const koreanFoods = [
  {
    name: "Kimchi",
    description: "A fermented cabbage dish that appears frequently in the anime as the hunters' comfort food. Rich in probiotics and considered essential for Korean meals.",
    animeConnection: "Lumi often shares kimchi with the team after difficult battles, representing home and healing."
  },
  {
    name: "Bulgogi",
    description: "Marinated grilled beef that the characters enjoy during team gatherings. The sweet and savory flavors represent harmony and celebration.",
    animeConnection: "Featured in episode celebrations when the team successfully protects the city from major threats."
  },
  {
    name: "Tteokbokki",
    description: "Spicy rice cakes that Nova loves to eat from street vendors. A popular Korean street food that brings joy and energy.",
    animeConnection: "Nova's favorite snack, often seen eating it while patrolling Seoul's busy districts."
  },
  {
    name: "Hotteok",
    description: "Sweet pancakes filled with brown sugar, cinnamon, and nuts. Represents warmth and comfort during cold Seoul winters.",
    animeConnection: "Kai buys these for the team during winter patrol missions, showing his caring nature."
  }
];

const koreanPlaces = [
  {
    name: "Gyeongbokgung Palace",
    description: "The largest of the Five Grand Palaces built during the Joseon Dynasty. In the anime, it serves as a sacred battleground where ancient and modern powers clash.",
    animeConnection: "Major battle scene location where the team discovers ancient demon-sealing techniques used by royal guards."
  },
  {
    name: "Namsan Tower",
    description: "Seoul's iconic communication tower offering panoramic city views. The tower serves as a beacon of hope and a strategic observation point.",
    animeConnection: "Zara uses the tower's communication systems to coordinate city-wide demon detection networks."
  },
  {
    name: "Han River",
    description: "The river flowing through Seoul, representing the flow of life and the connection between all citizens. A place of reflection and renewal.",
    animeConnection: "Quiet moments of character development often occur along the Han River, especially in Lumi's theme song sequences."
  },
  {
    name: "Myeongdong",
    description: "One of Seoul's primary shopping districts, bustling with people and energy. Represents the vibrant daily life the hunters protect.",
    animeConnection: "Chase scenes and civilian rescue operations frequently take place in this crowded area."
  }
];

const koreanTraditions = [
  {
    name: "Hanbok",
    description: "Traditional Korean clothing characterized by vibrant colors and elegant lines. In the anime, ceremonial hanbok are worn during important demon-sealing rituals.",
    animeConnection: "Each character has a special hanbok that enhances their abilities during formal ceremonies and major battles."
  },
  {
    name: "Chuseok",
    description: "Korean harvest festival honoring ancestors. The anime shows how this tradition connects the living and spiritual worlds.",
    animeConnection: "A special episode features the team participating in Chuseok, where they commune with ancient hunter spirits."
  },
  {
    name: "Tea Ceremony",
    description: "Traditional Korean tea service emphasizing mindfulness and respect. Used in the anime to show character growth and peaceful moments.",
    animeConnection: "Kai often performs tea ceremonies to help the team center themselves before difficult missions."
  },
  {
    name: "Taekwondo",
    description: "Korean martial art emphasizing high kicks and fast techniques. Forms the foundation of the hunters' combat training.",
    animeConnection: "All characters incorporate taekwondo principles into their fighting styles, especially Zara's combat techniques."
  }
];

const modernCulture = [
  {
    name: "K-pop Music",
    description: "Global phenomenon of Korean popular music. In the anime universe, K-pop serves as a cultural bridge and source of positive energy.",
    animeConnection: "The hunters' theme songs blend K-pop elements with traditional Korean music, creating unique battle anthems."
  },
  {
    name: "Korean Language Respect Levels",
    description: "Complex system of honorifics and formal speech showing respect for age and status. Demonstrates Korean values of hierarchy and respect.",
    animeConnection: "Character interactions showcase proper Korean speech patterns, especially when meeting elders or authorities."
  },
  {
    name: "PC Bang Culture",
    description: "Internet cafes that are central to Korean gaming and digital culture. Represents modern Korea's tech-savvy nature.",
    animeConnection: "Zara often uses PC bangs to access advanced computing resources for demon research and tracking."
  },
  {
    name: "Convenience Store Culture",
    description: "24/7 convenience stores are integral to Korean urban life, serving as social hubs and quick meal sources.",
    animeConnection: "Team members frequently meet at convenience stores for late-night strategy sessions and quick meals."
  }
];

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-white hover:text-purple-300 transition-colors">
                KDH Wiki
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/characters" className="text-white hover:text-purple-300 transition-colors">
                Characters
              </Link>
              <Link href="/ost" className="text-white hover:text-purple-300 transition-colors">
                OST
              </Link>
              <Link href="/culture" className="text-purple-300 font-semibold">
                Korean Culture
              </Link>
            </div>
            <div className="md:hidden flex space-x-4">
              <Link href="/characters" className="text-white hover:text-purple-300 transition-colors text-sm">
                Chars
              </Link>
              <Link href="/ost" className="text-white hover:text-purple-300 transition-colors text-sm">
                OST
              </Link>
              <Link href="/culture" className="text-purple-300 font-semibold text-sm">
                Culture
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Korean Culture
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Discover the rich Korean traditions, foods, places, and modern culture featured throughout the K-pop Demon Hunters anime.
          </p>
        </div>
      </section>

      {/* Korean Food Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🍱 Korean Food</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {koreanFoods.map((food, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{food.name}</h3>
                <p className="text-purple-200 mb-4 leading-relaxed">
                  {food.description}
                </p>
                <div className="bg-purple-600/20 rounded-lg p-4">
                  <p className="text-purple-100 text-sm">
                    <span className="font-semibold">In the Anime:</span> {food.animeConnection}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Korean Places Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🏯 Korean Places</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {koreanPlaces.map((place, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{place.name}</h3>
                <p className="text-purple-200 mb-4 leading-relaxed">
                  {place.description}
                </p>
                <div className="bg-blue-600/20 rounded-lg p-4">
                  <p className="text-blue-100 text-sm">
                    <span className="font-semibold">In the Anime:</span> {place.animeConnection}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Korean Traditions Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🏮 Korean Traditions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {koreanTraditions.map((tradition, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{tradition.name}</h3>
                <p className="text-purple-200 mb-4 leading-relaxed">
                  {tradition.description}
                </p>
                <div className="bg-orange-600/20 rounded-lg p-4">
                  <p className="text-orange-100 text-sm">
                    <span className="font-semibold">In the Anime:</span> {tradition.animeConnection}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Korean Culture Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🎵 Modern Korean Culture</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modernCulture.map((culture, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{culture.name}</h3>
                <p className="text-purple-200 mb-4 leading-relaxed">
                  {culture.description}
                </p>
                <div className="bg-green-600/20 rounded-lg p-4">
                  <p className="text-green-100 text-sm">
                    <span className="font-semibold">In the Anime:</span> {culture.animeConnection}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Impact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Cultural Impact</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <p className="text-purple-200 leading-relaxed text-lg mb-6">
              K-pop Demon Hunters serves as a cultural bridge, introducing international audiences to Korean traditions, 
              values, and modern lifestyle through engaging storytelling and authentic representation.
            </p>
            <p className="text-purple-200 leading-relaxed">
              Each cultural element is woven naturally into the narrative, helping viewers understand and appreciate 
              Korean culture while enjoying the supernatural action and character development.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}