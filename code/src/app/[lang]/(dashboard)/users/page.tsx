import { AvailableLocales, getTranslations } from "@/translations/translations";

export default async function UsersPage({
  params: { lang },
}: {
  params: { lang: AvailableLocales };
}) {
  const translations = await getTranslations(lang);
  return <h1 className="text-2xl font-bold">{translations.users.title}</h1>;
}
