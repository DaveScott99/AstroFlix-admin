import { z } from "zod";

export const schemaMediaForm = z.object({
    media: z.object({
        title: z.coerce.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string"
        }).min(2, {message: 'Must be 2 or more characters long'}),
        
        runtime: z.coerce.number({
            required_error: "Runtime is required",
            invalid_type_error: "Runtime must be a number"
        }).int().min(1, {message: "Please enter a value greater than 0"}),

        overview: z.coerce.string({
            required_error: "Long descripiton is required",
            invalid_type_error: "Long description must be a string"
        }).min(12, {message: 'Must be 12 or more characters long'}),

        tagline: z.coerce.string({
            required_error: "Short description is required",
            invalid_type_error: "Short description must be a string"
        }).min(8, {message: 'Must be 8 or more characters long'}),

        idTmdb: z.coerce.number({
            required_error: "idTmbd is required",
            invalid_type_error: "idTmbd must be a number"
        }).int().min(1, {message: "Please enter a value greater than 0"})
    }),

    querySearch: z.object({
        title: z.coerce.string(),
    })
})

export type MediaPropsByApi = {
    title: string,
    runtime: number,
    overview: string,
    tagline: string,
    id: number
}

export type FormProps = z.infer<typeof schemaMediaForm>;
