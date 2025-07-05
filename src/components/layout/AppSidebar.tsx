import { useState } from "react";
import { Home, Book, Calendar, Users, Folder, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Início",
    url: "#inicio",
    icon: Home,
    items: [
      { title: "Boas-vindas", url: "#boas-vindas" },
      { title: "Nosso currículo", url: "#nosso-curriculo" }
    ]
  },
  {
    title: "Modelo Acadêmico",
    url: "#modelo",
    icon: Book,
    items: [
      { title: "Visão geral do modelo E2A", url: "#visao-geral" },
      { title: "Projeto de Vida e Carreira", url: "#vida-carreira" },
      { title: "Aprendizagem Dual", url: "#aprendizagem-dual" },
      { title: "Currículos Integrados", url: "#curriculos-integrados" }
    ]
  },
  {
    title: "Currículo e Planejamento",
    url: "#curriculo",
    icon: Calendar,
    items: [
      { title: "Currículo por Competências", url: "#curriculo-competencias" },
      { title: "Roteirização de Aulas", url: "#roteirizacao" },
      { title: "Planos de Ensino", url: "#planos-ensino" },
      { title: "Template de Aula", url: "#template-aula" }
    ]
  },
  {
    title: "Formação",
    url: "#formacao",
    icon: Users,
    items: [
      { title: "Programação", url: "#programacao" },
      { title: "Formações Realizadas", url: "#formacoes-realizadas" },
      { title: "Trilhas de Aprendizagem", url: "#trilhas" },
      { title: "Pós-graduação", url: "#pos-graduacao" }
    ]
  },
  {
    title: "Materiais de Apoio",
    url: "#materiais",
    icon: Folder,
    items: [
      { title: "Repositório de documentos", url: "#repositorio" },
      { title: "Memórias", url: "#memorias" }
    ]
  },
  {
    title: "Suporte",
    url: "#suporte",
    icon: Menu,
    items: [
      { title: "Contatos", url: "#contatos" },
      { title: "FAQ", url: "#faq" },
      { title: "Fale conosco", url: "#fale-conosco" }
    ]
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const location = useLocation();
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupTitle) 
        ? prev.filter(title => title !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  const isGroupExpanded = (groupTitle: string) => expandedGroups.includes(groupTitle);

  return (
    <Sidebar
      className={isCollapsed ? "w-16" : "w-72"}
      collapsible="icon"
    >
      <SidebarContent className="bg-gradient-card">
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">E2A</span>
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-sidebar-foreground">Hub Acadêmico</h2>
                <p className="text-xs text-sidebar-foreground/70">Marcas Licenciadas</p>
              </div>
            )}
          </div>
        </div>

        {menuItems.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel 
              className="cursor-pointer hover:text-sidebar-primary transition-colors"
              onClick={() => toggleGroup(item.title)}
            >
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                {!isCollapsed && <span>{item.title}</span>}
              </div>
            </SidebarGroupLabel>

            {(!isCollapsed && isGroupExpanded(item.title)) && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((subItem) => (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton asChild>
                        <a 
                          href={subItem.url}
                          className="text-sm text-sidebar-foreground/80 hover:text-sidebar-primary hover:bg-sidebar-accent/50 transition-colors"
                        >
                          {subItem.title}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}