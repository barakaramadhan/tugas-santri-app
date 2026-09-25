import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { TooltipProvider } from "../components/ui/tooltip";

function AppLayouts() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar />
        <SidebarInset>
          <Navbar />
          <main className="p-6 flex-1">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default AppLayouts;