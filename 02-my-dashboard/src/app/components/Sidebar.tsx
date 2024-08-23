import { TbAbacus, TbLayoutDashboard, TbPokeball } from "react-icons/tb";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard",
    icon: <TbLayoutDashboard size={25} color="#2c3e50"/>,
    title: "Dashboard",
    subtitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <TbAbacus size={25} color="#2c3e50"/>,
    title: "Counter",
    subtitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemon",
    icon: <TbPokeball size={25} color="#2c3e50"/>,
    title: "Poke API",
    subtitle: "Pokemons - static generation",
  },
];

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
        <div className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))}
        </div>
      </div>
    </aside>
  );
};
