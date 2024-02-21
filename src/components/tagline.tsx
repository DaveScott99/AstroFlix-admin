interface TaglineProps {
    text: string;
}

export function Tagline({ text }: TaglineProps) {
    return(
        <div className="mt-6 opacity-95 border-dashed border-2 rounded-lg p-1">
            <em>{text}</em>
        </div>
    )
}