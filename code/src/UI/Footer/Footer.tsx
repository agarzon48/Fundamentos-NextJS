export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" text-white text-center py-4 bg-white/10">
      <p>&copy; {year} My Company</p>
    </footer>
  );
};
