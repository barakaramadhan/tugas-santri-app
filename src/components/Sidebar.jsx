
  import { NavLink } from "react-router";

  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "./ui/sidebar";

  import {
    GraduationCap,
    Home,
    Info,
    Users,
  } from "lucide-react";

  const navItems = [
    {
      to: "/admin",
      label: "Home",
      icon: Home,
      end: true,
    },
    {
      to: "/santri",
      label: "Santri",
      icon: Users,
    },
    {
      to: "/about",
      label: "About",
      icon: Info,
    },
  ];

  function AppSidebar() {
    return (
      <Sidebar>

        {/* ================= HEADER ================= */}
        <SidebarHeader>
          <div className="flex items-center gap-2.5 px-2 py-2">

            {/* Logo */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary shadow-sm">
              <GraduationCap
                size={18}
                className="text-sidebar-primary-foreground"
              />
            </div>

            {/* Brand */}
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-bold leading-tight text-sidebar-foreground">
                SantriApp
              </span>

              <span className="truncate text-xs leading-tight text-sidebar-foreground/60">
                Manajemen Santri
              </span>
            </div>

          </div>
        </SidebarHeader>

        {/* ================= CONTENT ================= */}
        <SidebarContent>

          <SidebarMenu>

            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <SidebarMenuItem key={item.to}>

                  <NavLink
                    to={item.to}
                    end={item.end}
                    className="w-full"
                  >
                    {({ isActive }) => (
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.label}
                      >
                        <span className="flex w-full items-center gap-2.5">
                          <Icon size={17} />

                          <span className="text-sm">
                            {item.label}
                          </span>
                        </span>
                      </SidebarMenuButton>
                    )}
                  </NavLink>

                </SidebarMenuItem>
              );
            })}

          </SidebarMenu>

        </SidebarContent>

        {/* ================= FOOTER ================= */}
        <SidebarFooter>

          <div className="px-2 py-3 text-center">

            <div className="mb-2 h-px w-full bg-sidebar-border" />

            <p className="text-[11px] text-sidebar-foreground/50">
              © {new Date().getFullYear()} SantriApp
            </p>

            <p className="mt-0.5 text-[10px] text-sidebar-foreground/40">
              Manajemen Santri
            </p>

          </div>

        </SidebarFooter>

      </Sidebar>
    );
  }

  export default AppSidebar;

