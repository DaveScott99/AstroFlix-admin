interface BackdropProps {
  children: React.ReactNode;
  url: string | undefined;
}

export function Backdrop({ children, url }: BackdropProps) {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      {children}
    </section>
  );
}
