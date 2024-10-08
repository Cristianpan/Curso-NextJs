import { WidgetsGrid } from "../../components";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-xl">Dashboard</h1>
      <p className="text-base mb-5">Información general</p>

      <WidgetsGrid />
    </>
  );
}
