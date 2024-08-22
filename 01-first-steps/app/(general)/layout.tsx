import { Navbar } from "./components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-14">
        <h1 className="text-xl">Hello Root Layout General</h1>
        {children}
      </div>
    </>
  );
}
