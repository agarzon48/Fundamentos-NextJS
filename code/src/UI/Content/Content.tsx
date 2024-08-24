import Image from "next/image";
import { Container } from "../Container";
import type { ContentProps } from "./Content.types";
import { Fragment } from "react";

export const Content: React.FC<ContentProps> = ({
  texts = [],
  image = null,
  title = "",
}) => {
  return (
    <Container>
      <section className="my-8 flex justify-between items-start gap-x-4">
        {image && (
          <Image
            src={image}
            alt={title}
            className="float-left"
            width={200}
            height={600}
          />
        )}
        <div className="flex gap-y-4 flex-col">
          {title && <h2 className="text-6xl font-bold">{title}</h2>}
          <div className="flex gap-x-4">
            {texts.map((t, i) => (
              <Fragment key={i}>{t}</Fragment>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
