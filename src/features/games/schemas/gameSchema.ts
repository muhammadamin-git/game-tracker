import { z } from "zod";

const GenresSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const PlatformSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const PlatformsSchema = z.object({
  platform: PlatformSchema,
});

export const ResultsSchema = z.object({
  id: z.number(),
  name: z.string(),
  background_image: z.string().nullable(),
  rating: z.number(),
  released: z.string(),
  genres: z.array(GenresSchema),
  platforms: z.array(PlatformsSchema),
});

export const GameResponseSchema = z.object({
  count: z.number(),
  results: z.array(ResultsSchema),
});

export type Game = z.infer<typeof ResultsSchema>;
export type GameResponse = z.infer<typeof GameResponseSchema>;

const DeveloperSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const PublisherSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const EsrbRatingSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const GameDetailSchema = z.object({
  id: z.number(),
  name: z.string(),
  description_raw: z.string(),
  background_image: z.string().nullable(),
  rating: z.number(),
  metacritic: z.number().nullable(),
  released: z.string(),
  genres: z.array(GenresSchema),
  platforms: z.array(PlatformsSchema),
  developers: z.array(DeveloperSchema),
  publishers: z.array(PublisherSchema),
  esrb_rating: EsrbRatingSchema.nullable(),
  website: z.string(),
});

export type GameDetails = z.infer<typeof GameDetailSchema>;
