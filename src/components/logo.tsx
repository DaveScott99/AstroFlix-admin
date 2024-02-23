interface LogoProps {
  link: string | undefined;
}

export function Logo({ link }: LogoProps) {
  return (
    <div className="max-w-[350px] w-full  p-1 rounded-lg">
      <img
        src={link}
        alt="Media Logo"
        className="aspect-4/3 h-auto max-w-full bg-cover rounded-lg"
      />
    </div>
  );
}
