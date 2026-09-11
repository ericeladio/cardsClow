export interface ClowCard {
  id: number;
  image: string;
  name: { es: string; en: string };
  meaning: { es: string; en: string };
}

export type Locale = 'es' | 'en';

export const clowCards: ClowCard[] = [
  {
    id: 1,
    image: "/assets/cards/Viento.webp",
    name: { es: "Viento", en: "The Windy" },
    meaning: {
      es: "Comunicación y expresión. Un mensaje que necesita ser dicho con claridad.",
      en: "Communication and expression. A message that needs to be spoken clearly."
    }
  },
  {
    id: 2,
    image: "/assets/cards/Vuelo.webp",
    name: { es: "Vuelo", en: "The Fly" },
    meaning: {
      es: "Libertad y perspectiva. Elevarse sobre los problemas para ver el panorama completo.",
      en: "Freedom and perspective. Rising above problems to see the full picture."
    }
  },
  {
    id: 3,
    image: "/assets/cards/Sombra.webp",
    name: { es: "Sombra", en: "The Shadow" },
    meaning: {
      es: "Lo oculto y el inconsciente. Secretos que están a punto de ser revelados.",
      en: "The hidden and the unconscious. Secrets about to be revealed."
    }
  },
  {
    id: 4,
    image: "/assets/cards/Agua.webp",
    name: { es: "Agua", en: "The Watery" },
    meaning: {
      es: "Emociones y flujo. Los sentimientos fluyen como el agua, adaptables y profundos.",
      en: "Emotions and flow. Feelings flow like water, adaptable and deep."
    }
  },
  {
    id: 5,
    image: "/assets/cards/Lluvia.webp",
    name: { es: "Lluvia", en: "The Rain" },
    meaning: {
      es: "Limpieza y renovación. La lluvia purifica y trae nuevos comienzos.",
      en: "Cleansing and renewal. Rain purifies and brings new beginnings."
    }
  },
  {
    id: 6,
    image: "/assets/cards/Bosque.webp",
    name: { es: "Bosque", en: "The Wood" },
    meaning: {
      es: "Crecimiento y naturaleza. Conexión con lo orgánico y lo que florece con el tiempo.",
      en: "Growth and nature. Connection with the organic and what flourishes over time."
    }
  },
  {
    id: 7,
    image: "/assets/cards/Salto.webp",
    name: { es: "Salto", en: "The Jump" },
    meaning: {
      es: "Acción y determinación. El momento de dar un paso firme hacia adelante.",
      en: "Action and determination. The moment to take a firm step forward."
    }
  },
  {
    id: 8,
    image: "/assets/cards/Ilusion.webp",
    name: { es: "Ilusión", en: "The Illusion" },
    meaning: {
      es: "Apariencias engañosas. No todo es lo que parece, busca la verdad oculta.",
      en: "Deceptive appearances. Not everything is what it seems, seek the hidden truth."
    }
  },
  {
    id: 9,
    image: "/assets/cards/Silencio.webp",
    name: { es: "Silencio", en: "The Silent" },
    meaning: {
      es: "Paz y meditación. El silencio trae claridad y respuestasinternas.",
      en: "Peace and meditation. Silence brings clarity and inner answers."
    }
  },
  {
    id: 10,
    image: "/assets/cards/Trueno.webp",
    name: { es: "Trueno", en: "The Thunder" },
    meaning: {
      es: "Poder ytransformación. Un cambio repentino que altera todo.",
      en: "Power and transformation. A sudden change that alters everything."
    }
  },
  {
    id: 11,
    image: "/assets/cards/Espada.webp",
    name: { es: "Espada", en: "The Sword" },
    meaning: {
      es: "Verdad y justicia. Corta con precisión lo que ya no sirve.",
      en: "Truth and justice. Cuts with precision what no longer serves."
    }
  },
  {
    id: 12,
    image: "/assets/cards/Flor.webp",
    name: { es: "Flor", en: "The Flower" },
    meaning: {
      es: "Belleza y dulzura. Los momentos más hermosos de la vida están floreciendo.",
      en: "Beauty and sweetness. The most beautiful moments in life are blossoming."
    }
  },
  {
    id: 13,
    image: "/assets/cards/Escudo.webp",
    name: { es: "Escudo", en: "The Shield" },
    meaning: {
      es: "Protección y defensa. Estás resguardado ante las adversidades.",
      en: "Protection and defense. You are shielded against adversity."
    }
  },
  {
    id: 14,
    image: "/assets/cards/Tiempo.webp",
    name: { es: "Tiempo", en: "The Time" },
    meaning: {
      es: "Paciencia y ciclos. Todo llega en el momento adecuado, confía en el proceso.",
      en: "Patience and cycles. Everything comes at the right time, trust the process."
    }
  },
  {
    id: 15,
    image: "/assets/cards/Poder.webp",
    name: { es: "Poder", en: "The Power" },
    meaning: {
      es: "Fuerza interior y voluntad. Tienes el poder de lograr lo que te propones.",
      en: "Inner strength and willpower. You have the power to achieve what you set out to do."
    }
  },
  {
    id: 16,
    image: "/assets/cards/Niebla.webp",
    name: { es: "Niebla", en: "The Mist" },
    meaning: {
      es: "Confusión temporal. La claridad vendrá, pero ahora necesitas paciencia.",
      en: "Temporary confusion. Clarity will come, but now you need patience."
    }
  },
  {
    id: 17,
    image: "/assets/cards/Tormenta.webp",
    name: { es: "Tormenta", en: "The Storm" },
    meaning: {
      es: "Cambio intenso. Las tormentas limpian el camino para algo nuevo.",
      en: "Intense change. Storms clear the path for something new."
    }
  },
  {
    id: 18,
    image: "/assets/cards/Flote.webp",
    name: { es: "Flote", en: "The Float" },
    meaning: {
      es: "Soltar y fluir. Deja ir el control y permite que la vida te lleve.",
      en: "Let go and flow. Release control and let life carry you."
    }
  },
  {
    id: 19,
    image: "/assets/cards/Borrar.webp",
    name: { es: "Borrar", en: "The Erase" },
    meaning: {
      es: "Liberación del pasado. Es momento de eliminar lo que ya no necesitas.",
      en: "Release from the past. It's time to eliminate what you no longer need."
    }
  },
  {
    id: 20,
    image: "/assets/cards/Brillo.webp",
    name: { es: "Brillo", en: "The Glow" },
    meaning: {
      es: "Iluminación y esperanza. La luz al final del camino se hace visible.",
      en: "Illumination and hope. The light at the end of the path becomes visible."
    }
  },
  {
    id: 21,
    image: "/assets/cards/Movimiento.webp",
    name: { es: "Movimiento", en: "The Move" },
    meaning: {
      es: "Progreso y acción. Las cosas están avanzando, mantén el impulso.",
      en: "Progress and action. Things are moving forward, keep the momentum."
    }
  },
  {
    id: 22,
    image: "/assets/cards/Pelea.webp",
    name: { es: "Pelea", en: "The Fight" },
    meaning: {
      es: "Conflicto y superación. Los desafíos fortalecen el carácter.",
      en: "Conflict and overcoming. Challenges strengthen character."
    }
  },
  {
    id: 23,
    image: "/assets/cards/Aro.webp",
    name: { es: "Aro", en: "The Loop" },
    meaning: {
      es: "Ciclos y repetición. Aprende de la lección antes de que se repita.",
      en: "Cycles and repetition. Learn the lesson before it repeats."
    }
  },
  {
    id: 24,
    image: "/assets/cards/Dormir.webp",
    name: { es: "Dormir", en: "The Sleep" },
    meaning: {
      es: "Descanso y renovación. Tu cuerpo y mente necesitan pausa.",
      en: "Rest and renewal. Your body and mind need a break."
    }
  },
  {
    id: 25,
    image: "/assets/cards/Cancion.webp",
    name: { es: "Canción", en: "The Song" },
    meaning: {
      es: "Armonía y alegría. La música de tu vida está en sintonía correcta.",
      en: "Harmony and joy. The music of your life is in tune."
    }
  },
  {
    id: 26,
    image: "/assets/cards/Pequeno.webp",
    name: { es: "Pequeño", en: "The Little" },
    meaning: {
      es: "Detalles importantes. Lo pequeño tiene un gran significado.",
      en: "Important details. The small things have great meaning."
    }
  },
  {
    id: 27,
    image: "/assets/cards/Espejo.webp",
    name: { es: "Espejo", en: "The Mirror" },
    meaning: {
      es: "Reflexión y verdad. Mírate con honestidad para conocerte mejor.",
      en: "Reflection and truth. Look at yourself honestly to know yourself better."
    }
  },
  {
    id: 28,
    image: "/assets/cards/Laberinto.webp",
    name: { es: "Laberinto", en: "The Maze" },
    meaning: {
      es: "Confusión y búsqueda. La salida está más cerca de lo que crees.",
      en: "Confusion and search. The way out is closer than you think."
    }
  },
  {
    id: 29,
    image: "/assets/cards/Regreso.webp",
    name: { es: "Regreso", en: "The Return" },
    meaning: {
      es: "Volver a empezar. El pasado ofrece lecciones para el futuro.",
      en: "Starting over. The past offers lessons for the future."
    }
  },
  {
    id: 30,
    image: "/assets/cards/Disparo.webp",
    name: { es: "Disparo", en: "The Shot" },
    meaning: {
      es: "Decisión firme. Apunta directo a tu objetivo sin dudar.",
      en: "Firm decision. Aim straight at your goal without hesitation."
    }
  },
  {
    id: 31,
    image: "/assets/cards/Dulce.webp",
    name: { es: "Dulce", en: "The Sweet" },
    meaning: {
      es: "Placer y gratificación. Disfruta los momentos dulces de la vida.",
      en: "Pleasure and gratification. Enjoy the sweet moments of life."
    }
  },
  {
    id: 32,
    image: "/assets/cards/Carrera.webp",
    name: { es: "Carrera", en: "The Dash" },
    meaning: {
      es: "Velocidad y urgencia. Las cosas se mueven rápido, mantén el ritmo.",
      en: "Speed and urgency. Things are moving fast, keep pace."
    }
  },
  {
    id: 33,
    image: "/assets/cards/Grande.webp",
    name: { es: "Grande", en: "The Big" },
    meaning: {
      es: "Expansión y abundancia. Piensa en grande, los resultados serán grandes.",
      en: "Expansion and abundance. Think big, the results will be big."
    }
  },
  {
    id: 34,
    image: "/assets/cards/Creacion.webp",
    name: { es: "Creación", en: "The Create" },
    meaning: {
      es: "Creatividad y nuevo comienzo. Estás creando algo hermoso.",
      en: "Creativity and new beginning. You are creating something beautiful."
    }
  },
  {
    id: 35,
    image: "/assets/cards/Cambio.webp",
    name: { es: "Cambio", en: "The Change" },
    meaning: {
      es: "Transformación positiva. El cambio es necesario para crecer.",
      en: "Positive transformation. Change is necessary to grow."
    }
  },
  {
    id: 36,
    image: "/assets/cards/Hielo.webp",
    name: { es: "Hielo", en: "The Freeze" },
    meaning: {
      es: "Pausa y contemplación. Detente un momento para reflexionar.",
      en: "Pause and contemplation. Stop for a moment to reflect."
    }
  },
  {
    id: 37,
    image: "/assets/cards/Fuego.webp",
    name: { es: "Fuego", en: "The Firey" },
    meaning: {
      es: "Pasión y energía. La llama interior te impulsa hacia adelante.",
      en: "Passion and energy. The inner flame drives you forward."
    }
  },
  {
    id: 38,
    image: "/assets/cards/Flecha.webp",
    name: { es: "Flecha", en: "The Arrow" },
    meaning: {
      es: "Dirección y propósito. Sabe exactamente a dónde vas.",
      en: "Direction and purpose. Know exactly where you're going."
    }
  },
  {
    id: 39,
    image: "/assets/cards/Burbujas.webp",
    name: { es: "Burbujas", en: "The Bubbles" },
    meaning: {
      es: "Alegría y ligereza. Los problemas se disuelven como burbujas.",
      en: "Joy and lightness. Problems dissolve like bubbles."
    }
  },
  {
    id: 40,
    image: "/assets/cards/Ola.webp",
    name: { es: "Ola", en: "The Wave" },
    meaning: {
      es: "Energía ascendente. Una ola de buenos cambios se aproxima.",
      en: "Rising energy. A wave of good changes is approaching."
    }
  },
  {
    id: 41,
    image: "/assets/cards/Equilibrio.webp",
    name: { es: "Equilibrio", en: "The Libra" },
    meaning: {
      es: "Balance y armonía. Encuentra el punto medio en todo.",
      en: "Balance and harmony. Find the middle ground in everything."
    }
  },
  {
    id: 42,
    image: "/assets/cards/Atravesar.webp",
    name: { es: "Atravesar", en: "The Through" },
    meaning: {
      es: "Perseverancia. Sigue adelante pase lo que pase.",
      en: "Perseverance. Keep going no matter what happens."
    }
  },
  {
    id: 43,
    image: "/assets/cards/Nieve.webp",
    name: { es: "Nieve", en: "The Snow" },
    meaning: {
      es: "Pureza y calma. Un momento de paz y serenidad.",
      en: "Purity and calm. A moment of peace and serenity."
    }
  },
  {
    id: 44,
    image: "/assets/cards/Voz.webp",
    name: { es: "Voz", en: "The Voice" },
    meaning: {
      es: "Expresión y verdad. Habla tu verdad con confianza.",
      en: "Expression and truth. Speak your truth with confidence."
    }
  },
  {
    id: 45,
    image: "/assets/cards/Candado.webp",
    name: { es: "Candado", en: "The Lock" },
    meaning: {
      es: "Seguridad y protección. Algo está guardado para tu bien.",
      en: "Security and protection. Something is kept safe for your good."
    }
  },
  {
    id: 46,
    image: "/assets/cards/Nube.webp",
    name: { es: "Nube", en: "The Cloud" },
    meaning: {
      es: "Sueños y fantasía. Los sueños se hacen realidad con acción.",
      en: "Dreams and fantasy. Dreams come true with action."
    }
  },
  {
    id: 47,
    image: "/assets/cards/Sueno.webp",
    name: { es: "Sueño", en: "The Dream" },
    meaning: {
      es: "Intuición y visiones. Los sueños revelan mensajes importantes.",
      en: "Intuition and visions. Dreams reveal important messages."
    }
  },
  {
    id: 48,
    image: "/assets/cards/Arena.webp",
    name: { es: "Arena", en: "The Sand" },
    meaning: {
      es: "Tiempo y paciencia. Los granos de arena cuentan el tiempo.",
      en: "Time and patience. Grains of sand count the time."
    }
  },
  {
    id: 49,
    image: "/assets/cards/Oscuridad.webp",
    name: { es: "Oscuridad", en: "The Dark" },
    meaning: {
      es: "Misterio y profundidad. Algo se oculta en la sombra.",
      en: "Mystery and depth. Something hides in the shadow."
    }
  },
  {
    id: 50,
    image: "/assets/cards/Luz.webp",
    name: { es: "Luz", en: "The Light" },
    meaning: {
      es: "Claridad y verdad. La luz ilumina el camino correcto.",
      en: "Clarity and truth. The light illuminates the right path."
    }
  },
  {
    id: 51,
    image: "/assets/cards/Gemelos.webp",
    name: { es: "Gemelos", en: "The Twin" },
    meaning: {
      es: "Dualidad y complemento. Dos fuerzas trabajan juntas.",
      en: "Duality and complement. Two forces work together."
    }
  },
  {
    id: 52,
    image: "/assets/cards/Tierra.webp",
    name: { es: "Tierra", en: "The Earthy" },
    meaning: {
      es: "Estabilidad y fundamentos. Construye sobre bases sólidas.",
      en: "Stability and foundations. Build on solid ground."
    }
  },
  {
    id: 53,
    image: "/assets/cards/Amor.webp",
    name: { es: "Amor", en: "The Love" },
    meaning: {
      es: "Amor propio y conexión. El amor verdadero comienza desde adentro.",
      en: "Self-love and connection. True love begins from within."
    }
  }
];
