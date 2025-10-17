"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboardIcon } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import SitePublish from "./site-publish";

const truncateGeneralText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

export function SiteHeader() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const getHref = (index: number) => {
    return "/" + segments.slice(0, index + 1).join("/");
  };

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb className="flex-grow min-w-0">
          <BreadcrumbList className="flex-nowrap overflow-hidden">
            <BreadcrumbItem className="hidden md:block flex-shrink-0">
              <BreadcrumbLink href="/documents">
                <LayoutDashboardIcon className="size-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>

            {segments.map((segment, index) => {
              const href = getHref(index);
              const isLast = index === segments.length - 1;
              const label = decodeURIComponent(segment).replace(/-/g, " ");

              const isLikelyId =
                label.length > 15 && /^[a-zA-Z0-9]+$/.test(label);

              const idVisibilityClass = isLikelyId
                ? "hidden sm:hidden md:block"
                : "";

              const shouldHideOnSmall =
                (index < segments.length - 1 && !isLikelyId) || isLikelyId;
              const itemVisibilityClass = shouldHideOnSmall
                ? "hidden md:block"
                : "";

              let displayedLabel = label;
              if (!isLikelyId) {
                displayedLabel = truncateGeneralText(label, 15);
              }

              return (
                <React.Fragment key={href}>
                  {index === 0 && (
                    <BreadcrumbSeparator className="hidden md:block mx-4" />
                  )}

                  {index > 0 && (
                    <BreadcrumbSeparator
                      className={`mx-2 lg:mx-4 ${isLikelyId ? idVisibilityClass : "hidden md:block"}`}
                    />
                  )}

                  <BreadcrumbItem
                    className={`${isLikelyId ? idVisibilityClass : itemVisibilityClass} flex-shrink-0`}
                  >
                    {isLast ? (
                      <BreadcrumbPage className="truncate max-w-[180px] sm:max-w-[250px]">
                        {displayedLabel}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link
                          href={href}
                          className="truncate max-w-[120px] sm:max-w-[180px]"
                        >
                          {displayedLabel}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <div className="ml-auto">
          <SitePublish />
        </div>
      </div>
    </header>
  );
}
