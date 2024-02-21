interface BackdropProps {
    children: React.ReactNode;
    url: string
}

export function Backdrop({ children, url }: BackdropProps) {

    return (
        <section
            className="w-full"
            style={{
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundImage: `url(${url})`,
            }}
        >
            <div className="w-full pt-24 dark:bg-slate-950 dark:bg-opacity-30">
                <div className="w-full bg-gradient-to-t from-zinc-50 to-transparent dark:bg-gradient-to-t dark:from-slate-950 dark:to-transparent ">
                    {children}     
                </div>
            </div>
        </section>
    )

}