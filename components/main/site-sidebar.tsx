"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboardIcon,
  PlusCircleIcon,
  SearchIcon,
  SettingsIcon,
  Trash2Icon,
} from "lucide-react";
import { useSearch } from "@/hooks/use-search";
import { useSettings } from "@/hooks/use-settings";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

import Link from "next/link";
import { SiteUser } from "./site-user";
import SidebarItem from "@/components/admin/sidebar-item";
import DocumentList from "@/components/admin/document-list";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Trash from "@/components/admin/trash";
import EtherealNotesLogo from "../ui/ethereal-notes-logo";



export default function SiteSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const search = useSearch();
  const settings = useSettings();
  const router = useRouter();
  const create = useMutation(api.documents.create);

  // creating a new document
  const handleCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Please wait...",
      success: "New note created successfully!",
      error: "Failed to create a new note.",
    });
  };
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/documents">
                <div className=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <EtherealNotesLogo className="size-4"  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Ethereal Notes</span>
                  <span className=""> Production v1.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            {/* links */}
            <SidebarMenu>
              {/* dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarItem label="Dashboard" icon={LayoutDashboardIcon} />
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* search */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarItem
                    label="Search"
                    icon={SearchIcon}
                    isSearch
                    onClick={search.onOpen}
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* settings */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarItem
                    label="Settings"
                    icon={SettingsIcon}
                    onClick={settings.onOpen}
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* new note page */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarItem
                    onClick={handleCreate}
                    label="New Page"
                    icon={PlusCircleIcon}
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* notes document list */}
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full h-full">
                  <DocumentList />
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* trash notes */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Popover>
                    <PopoverTrigger className="w-full" asChild>
                      <SidebarItem label="Trash Notes" icon={Trash2Icon} />
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-72">
                      <Trash />
                    </PopoverContent>
                  </Popover>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SiteUser />
      </SidebarFooter>
    </Sidebar>
  );
}
