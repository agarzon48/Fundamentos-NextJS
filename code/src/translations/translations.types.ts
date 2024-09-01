type HeroTranslations = {
  title: string;
  subtitle: string;
  text: string;
  button: string;
  secondary_button?: string;
};

type ContentSectionTranslations = {
  title: string;
  columns: {
    title: string;
    text: string;
  }[];
};

type TestimonialsTranslations = {
  name: string;
  text: string;
}[];

type HomeTranslations = {
  header: HeroTranslations;
  first_content_section: ContentSectionTranslations;
  testimonials: TestimonialsTranslations;
  second_content_section: ContentSectionTranslations;
};

type PricingBox = {
  title: string;
  price: string;
  features: string[];
  description: string;
};

type PricingBoxesTranslations = {
  title: string;
  basic: PricingBox;
  premium: PricingBox;
};

type PricingTranslations = {
  header: HeroTranslations;
  pricing_boxes: PricingBoxesTranslations;
  content_section: ContentSectionTranslations;
};

type SalesTranslations = {
  title: string;
  form: {
    name: string;
    name_placeholder: string;
    name_error_message: string;
    email: string;
    email_placeholder: string;
    email_error_message: string;
    message: string;
    message_placeholder: string;
    privacy: string;
    privacy_error_message: string;
    submit: string;
  };
};

type LoginTranslations = {
  title: string;
  form: {
    email: string;
    email_error_message: string;
    password: string;
    password_error_message: string;
    login: string;
  };
};

type DashboardTranslations = {
  title: string;
};

type UsersTranslations = {
  title: string;
};

type TicketsTranslations = {
  title: string;
  table: {
    name: string;
    email: string;
    body: string;
  };
};

type FooterTranslations = {
  text: string;
};

type GlobalTranslations = {
  pricing: string;
  sales: string;
  login: string;
  logout: string;
  dashboard: string;
  users: string;
  tickets: string;
};

export type Translations = {
  home: HomeTranslations;
  pricing: PricingTranslations;
  sales: SalesTranslations;
  login: LoginTranslations;
  dashboard: DashboardTranslations;
  users: UsersTranslations;
  tickets: TicketsTranslations;
  footer: FooterTranslations;
  global: GlobalTranslations;
};
