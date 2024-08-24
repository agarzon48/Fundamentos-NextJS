import type { SocialProofProps, ReviewProps } from "./SocialProof.types";

export const SocialProof: React.FC<SocialProofProps> = ({ reviews }) => {
  return (
    <section className="bg-slate-900 py-8">
      <div className="max-w-screen-md m-auto p-8 flex flex-col items-center gap-8">
        <h2 className="text-4xl text-center text-white">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 py-8">
          {reviews.map((review) => (
            <Review key={review.author} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Review: React.FC<ReviewProps> = ({ author, content }) => {
  return (
    <div className="bg-slate-700 rounded-lg p-8 text-white">
      <p className="mt-4 mb-6">{content}</p>
      <div className="text-lg font-semibold">{author}</div>
    </div>
  );
};
