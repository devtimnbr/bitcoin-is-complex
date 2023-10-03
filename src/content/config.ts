import { defineCollection, z } from 'astro:content'

const infoPages = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string(),
			description: z.string(),
			order: z.number().optional(),
			heroImg: image(),
			heroImgSrc: z.string(),
		}),
})

export const collections = { infoPages }
