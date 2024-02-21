
interface TitleProps {
    title: string
}

export function Title({ title }: TitleProps) {
    return (
        <div className="flex justify-between">
            <h1 className="font-semibold text-3xl">
            {title} <span className="font-light">(2023)</span>
            </h1>
        </div>
    )
}