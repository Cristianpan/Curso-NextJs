import { Navbar, Sidebar } from "../../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
}
