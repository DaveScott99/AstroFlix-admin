interface BackdropProps {
  children: React.ReactNode;
  url: string | undefined;
  action?: any;
  aspect_ratio: number | undefined;
}

export function Backdrop({ children, url, action, aspect_ratio }: BackdropProps) {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${url})`,
        aspectRatio: aspect_ratio
      }}
      onClick={action}
    >
      {children}
    </section>
  );
}
