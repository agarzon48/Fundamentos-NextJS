import type {
  PricingTableProps,
  PricingTablesProps,
} from "./PricingTables.types";

export const PricingTables: React.FC<PricingTablesProps> = ({ plans }) => {
  return (
    <section className="bg-slate-900 py-8">
      <div className="max-w-screen-md m-auto p-8 flex flex-col items-center gap-8">
        <h2 className="text-4xl text-center text-white">Elie tu plan</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 py-8">
          {plans.map((plan) => (
            <PricingTable key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingTable: React.FC<PricingTableProps> = ({
  title,
  description,
  price,
  features,
  action,
}) => {
  return (
    <div className="bg-slate-700 rounded-lg p-8 text-white">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-4 mb-6">{description}</p>
      <div className="text-3xl font-bold">{price}</div>
      <ul className="mt-6">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">{action}</div>
    </div>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
