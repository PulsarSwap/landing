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
    {
      id: 1,
      label: "Developers",
      links: [
        { url: "https://github.com/pulsarswap", text: "GitHub" },
        { url: "https://docs.pulsarswap.com", text: "Docs" },
        { url: "https://www.paradigm.xyz/2021/07/twamm", text: "WhitePaper" },
        { url: "https://hackmd.io/@luffy/SJxSsOH1Y", text: "Math" }
      ]
    },
    {
      id: 2,
      label: "Forum",
      links: [
        { url: "https://metaforo.io/g/pulsar", text: "MetaForo" },
      ]
    },
    {
      id: 3,
      label: "Blog",
      links: [
        { url: "https://mirror.xyz/pulsarswap.eth", text: "Mirror" },
      ]
    },
    {
      id: 4,
      label: "Community",
      links: [
        { url: "https://twitter.com/pulsarswap", text: "Twitter" },
        { url: "https://discord.gg/c7D5Su82f9", text: "Discord" },
        { url: "https://t.me/PulsarSwap", text: "Telegram" }
      ]
    },
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
                <div className="relative">
                  {/* 导航标签按钮 */}
                  <button
                    className="font-['Roboto',Helvetica] font-semibold text-[#293147] text-base focus:outline-none"
                    onMouseEnter={(e) => {
                      // 关闭其他打开的菜单
                      const otherMenus = document.querySelectorAll('.dropdown-menu');
                      otherMenus.forEach(menu => {
                        if (menu !== e.currentTarget.nextElementSibling) {
                          menu.classList.remove('show');
                        }
                      });
                      // 显示当前菜单
                      const dropdownMenu = e.currentTarget.nextElementSibling;
                      dropdownMenu?.classList.add('show');
                    }}
                    onMouseLeave={(e) => {
                      // 延迟3秒后隐藏菜单
                      setTimeout(() => {
                        const dropdownMenu = e.currentTarget.nextElementSibling;
                        if (dropdownMenu) {
                          dropdownMenu.classList.remove('show');
                        }
                      }, 3000);
                    }}
                    // onMouseOut={(e) => {
                    //   const dropdownMenu = e.currentTarget.nextElementSibling;
                    //   if (dropdownMenu) {
                    //     dropdownMenu.classList.remove('show');
                    //   }
                    // }}
                  >
                    {item.label}
                  </button>

                  {/* 下拉菜单 */}
                  <div className="dropdown-menu absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible transition-all duration-200">
                    <div className="py-1">
                      {item.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 添加全局样式 */}
                  <style>{`
                    .dropdown-menu.show {
                      opacity: 1;
                      visibility: visible;
                    }
                  `}</style>
                </div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Launch App Button */}
        <Button
          className="bg-[#0261f5] text-white font-['Roboto',Helvetica] font-semibold px-4 py-2.5 rounded-[5px] shadow-[0px_0px_10px_#00000080] hover:bg-white hover:text-[#0261f5] transition-colors duration-200"
          onClick={() => window.open('https://app.pulsarswap.com', '_blank')}
        >
          Launch App
        </Button>
      </div>
    </header>
  );
};
