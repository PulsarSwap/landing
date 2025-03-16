import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Define the footer link data for reusability
const footerLinks = [
  {
    title: "Get Started",
    links: ["Docs", "Guides", "FAQs"],
  },
  {
    title: "About",
    links: ["Blog", "Careers", "Brand Assets"],
  },
  {
    title: "For Developers",
    links: ["Code base", "SDK", "Bug Bounty"],
  },
];

// Define social media icons data
const socialIcons = [
  { src: "public/icon-5.svg", alt: "Icon" },
  { src: "public/icon-3.svg", alt: "Icon" },
  { src: "public/icon-2.svg", alt: "Icon" },
  { src: "public/icon-10.svg", alt: "Icon" },
  { src: "public/icon-4.svg", alt: "Icon" },
];

export const PartnersSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#293147]">
      <div className="mx-auto max-w-[1140px] py-[70px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter and Social Media Section */}
          <div className="flex flex-col gap-5">
            {/* Social Media Icons */}
            <div className="flex gap-2">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-[33px] h-[33px] bg-[#ffffff36] rounded-[10px] flex items-center justify-center"
                >
                  <img
                    className="w-[15px] h-[15px]"
                    alt={icon.alt}
                    src={icon.src}
                  />
                </div>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="font-extrabold text-white text-base">
              Subscribe to Newsletter
            </div>

            <div className="flex">
              <Input
                className="h-[38px] bg-[#293147] border-2 border-[#565d6e] text-[13px] text-[#ffffff80] rounded-none"
                placeholder="Your Email:"
              />
              <Button className="h-[37px] w-[99px] bg-[#0261f5] hover:bg-[#0255d8] text-[13px] font-bold rounded-none">
                Submit
              </Button>
            </div>
          </div>

          {/* Footer Links Columns */}
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h3 className="font-medium text-white text-lg">
                {section.title}
              </h3>
              <div className="flex flex-col gap-[2.5px]">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="font-light text-[#ffffff61] text-sm leading-[25.6px]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <Separator className="border-t border-[#ffffff30]" />
      <div className="mx-auto max-w-[1140px] py-[19px] px-4">
        <div className="flex flex-wrap gap-5">
          <div className="font-light text-neutral-100 text-xs">
            Copyright © 2022 Pulsar. All Rights Reserved.
          </div>
          <div className="font-light text-neutral-100 text-xs">
            bd@pulsarswap.com
          </div>
          <div className="font-light text-neutral-100 text-xs">
            ENS: pulsarswap.eth
          </div>
        </div>
      </div>
    </footer>
  );
};
