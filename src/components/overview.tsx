interface OverviewProps {
    text: string
}

export function Overview({ text } : OverviewProps) {

    return(
        <div className="mt-3 border-dashed border-2 rounded-lg p-1">
            <h3 className="font-semibold text-lg mb-1">Overview</h3>
            <span className="text-sm">
                {text}
            </span>
        </div>
    )

}