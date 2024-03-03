import { z } from "zod";

export const schemaTaglineForm = z.object({
    tagline: z
        .string({
            required_error: "Tagline is required",
            invalid_type_error: "Tagline must be a string",
        })
        .min(6, { message: "Must be 6 or more characters long" }),
});

export type TaglineFormProps = z.infer<typeof schemaTaglineForm>;

export const schemaOverviewForm = z.object({
    overview: z
        .string({
            required_error: "Overview is required",
            invalid_type_error: "Overview must be a string",
        })
        .min(12, { message: "Must be 12 or more characters long" }),
});

export type OverviewFormProps = z.infer<typeof schemaOverviewForm>;
