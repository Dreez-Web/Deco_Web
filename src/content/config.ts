import { defineCollection, z } from "astro:content";

const decoracionesCollection = defineCollection({
  type: "data", // O 'content' si usas archivos .mdx o .md
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(), // Ruta a la imagen
    category: z.enum(["Living Room", "Bedroom", "Office workspace", "Exterior", "Dining Room", "Kids Room"]), // Define tus categorías
  }),
});

export const collections = {
  decoraciones: decoracionesCollection,
};
