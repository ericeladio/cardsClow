import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    hero: collection({
      label: "Hero Section",
      slugField: "title",
      path: "src/content/landing/hero",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Título ID" },
        }),
        subtitle: fields.text({
          label: "Subtítulo",
        }),
        content: fields.markdoc({
          label: "Contenido",
        }),
      },
    }),
    cardOfTheDay: collection({
      label: "Card of the Day",
      slugField: "cardName",
      path: "src/content/landing/card-of-the-day",
      format: { contentField: "content" },
      schema: {
        cardName: fields.slug({
          name: { label: "Nombre de la Carta" },
        }),
        day: fields.text({
          label: "Día",
        }),
        month: fields.text({
          label: "Mes",
        }),
        description: fields.text({
          label: "Descripción",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "Contenido",
        }),
      },
    }),
    readings: collection({
      label: "Readings Columns",
      slugField: "readingTitle",
      path: "src/content/landing/readings",
      format: { contentField: "content" },
      schema: {
        readingTitle: fields.slug({
          name: { label: "Título Lectura" },
        }),
        readingButtonText: fields.text({
          label: "Texto Botón Lectura",
        }),
        crystalTitle: fields.text({
          label: "Título Crystal Readings",
        }),
        crystalDate: fields.text({
          label: "Fecha Crystal",
        }),
        crystalCardName: fields.text({
          label: "Nombre Carta Crystal",
        }),
        crystalButtonText: fields.text({
          label: "Texto Botón Crystal",
        }),
        meaningsTitle: fields.text({
          label: "Título Card Meanings",
        }),
        wheelCardName: fields.text({
          label: "Nombre Carta Wheel",
        }),
        wheelDescription: fields.text({
          label: "Descripción Wheel of Fortune",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "Contenido",
        }),
      },
    }),
    siteConfig: collection({
      label: "Configuración del Sitio",
      slugField: "siteTitle",
      path: "src/content/landing/config",
      format: { contentField: "content" },
      schema: {
        siteTitle: fields.slug({
          name: { label: "Título del Sitio" },
        }),
        navInfo: fields.text({
          label: "Texto Nav Info",
        }),
        navHoroscope: fields.text({
          label: "Texto Nav Horoscope",
        }),
        navContact: fields.text({
          label: "Texto Nav Contact",
        }),
        footerText: fields.text({
          label: "Texto Footer",
        }),
        content: fields.markdoc({
          label: "Contenido",
        }),
      },
    }),
  },
});
