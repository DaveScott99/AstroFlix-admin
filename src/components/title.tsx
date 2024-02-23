interface TitleProps {
  text: string | undefined;
}

export function Title({ text }: TitleProps) {
  return (
    <div className="max-w-2xl">
      <h1 className="font-semibold md:text-4xl text-xl">{text}</h1>
    </div>
  );
}
