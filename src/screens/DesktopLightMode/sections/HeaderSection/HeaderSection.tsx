import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { id: 1, label: "Developers" },
    { id: 2, label: "Forum" },
    { id: 3, label: "Blog" },
    { id: 4, label: "Community" },
  ];

  return (
    <header className="w-full py-6">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-[46px] h-[46px] bg-[url(public/image--attachment-full-.png)] bg-cover bg-center" />

        {/* Navigation */}
        <NavigationMenu className="flex-1 flex justify-end mr-4">
          <NavigationMenuList className="flex space-x-4">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id} className="px-5 py-3">
                <span className="font-['Roboto',Helvetica] font-semibold text-[#293147] text-base">
                  {item.label}
                </span>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Launch App Button */}
        <Button className="bg-[#0261f5] text-white font-['Roboto',Helvetica] font-semibold px-4 py-2.5 rounded-[5px] shadow-[0px_0px_10px_#00000080]">
          Launch App
        </Button>
      </div>
    </header>
  );
};
