export type PricingTablesProps = {
  plans: Plan[];
};

export type Plan = {
  title: string;
  description: string;
  price: string;
  features: string[];
  action: React.ReactNode;
};

export type PricingTableProps = Plan;
