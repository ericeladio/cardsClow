import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: import.meta.env.DEV === true
    ? { kind: "local" }
    : { kind: "cloud" },
  cloud: { project: "cards-clow/cardsclow" },
  collections: {
    pageContentEs: collection({
      label: "Contenido Grid 1 (ES)",
      slugField: "slug",
      path: "src/content/page-content/es/*",
      format: { contentField: "content" },
      schema: {
        slug: fields.slug({
          name: { label: "Slug" },
        }),
        pageTitle: fields.text({
          label: "Título de Página",
        }),
        readingButtonText: fields.text({
          label: "Botón Obtener Lectura",
          validation: { isRequired: true },
        }),
        crystalButtonText: fields.text({
          label: "Botón Reserva Ahora",
          validation: { isRequired: true },
        }),
        bookImage: fields.image({
          label: "Imagen del Libro",
          directory: "public/assets",
          publicPath: "/assets/",
        }),
        crystalTitle: fields.text({
          label: "Título Columna Cristal",
          validation: { isRequired: true },
        }),
        crystalSubtitle: fields.text({
          label: "Subtítulo Columna Cristal",
          validation: { isRequired: true },
        }),
        crystalDesc: fields.text({
          label: "Descripción Columna Cristal",
          multiline: true,
          validation: { isRequired: true },
        }),
        experience: fields.text({
          label: "Texto Experiencia",
          validation: { isRequired: true },
        }),
        content: fields.markdoc({
          label: "Contenido",
        }),
      },
    }),
    pageContentEn: collection({
      label: "Contenido Grid 1 (EN)",
      slugField: "slug",
      path: "src/content/page-content/en/*",
      format: { contentField: "content" },
      schema: {
        slug: fields.slug({
          name: { label: "Slug" },
        }),
        pageTitle: fields.text({
          label: "Page Title",
        }),
        readingButtonText: fields.text({
          label: "Get a Reading Button",
          validation: { isRequired: true },
        }),
        crystalButtonText: fields.text({
          label: "Book Now Button",
          validation: { isRequired: true },
        }),
        bookImage: fields.image({
          label: "Book Image",
          directory: "public/assets",
          publicPath: "/assets/",
        }),
        crystalTitle: fields.text({
          label: "Crystal Column Title",
          validation: { isRequired: true },
        }),
        crystalSubtitle: fields.text({
          label: "Crystal Column Subtitle",
          validation: { isRequired: true },
        }),
        crystalDesc: fields.text({
          label: "Crystal Column Description",
          multiline: true,
          validation: { isRequired: true },
        }),
        experience: fields.text({
          label: "Experience Text",
          validation: { isRequired: true },
        }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
  },
});
