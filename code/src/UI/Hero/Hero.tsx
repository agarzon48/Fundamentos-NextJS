import type { HeroProps } from "./Hero.types";

export const Hero: React.FC<HeroProps> = ({ title, cta, actions = [] }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-slate-600">
      <div className="min-h-screen max-w-screen-md m-auto flex flex-col items-center justify-center text-center gap-8">
        <h1 className="text-9xl">{title}</h1>
        <div>{cta}</div>
        <div className="flex gap-4">{actions.map((action) => action)}</div>
      </div>
    </section>
  );
};
