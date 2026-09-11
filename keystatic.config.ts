import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
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
        }),
        crystalButtonText: fields.text({
          label: "Botón Reserva Ahora",
        }),
        bookImage: fields.image({
          label: "Imagen del Libro",
          directory: "public/assets",
          publicPath: "/assets/",
        }),
        crystalTitle: fields.text({
          label: "Título Columna Cristal",
        }),
        crystalSubtitle: fields.text({
          label: "Subtítulo Columna Cristal",
        }),
        crystalDesc: fields.text({
          label: "Descripción Columna Cristal",
          multiline: true,
        }),
        experience: fields.text({
          label: "Texto Experiencia",
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
        }),
        crystalButtonText: fields.text({
          label: "Book Now Button",
        }),
        bookImage: fields.image({
          label: "Book Image",
          directory: "public/assets",
          publicPath: "/assets/",
        }),
        crystalTitle: fields.text({
          label: "Crystal Column Title",
        }),
        crystalSubtitle: fields.text({
          label: "Crystal Column Subtitle",
        }),
        crystalDesc: fields.text({
          label: "Crystal Column Description",
          multiline: true,
        }),
        experience: fields.text({
          label: "Experience Text",
        }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
  },
});
