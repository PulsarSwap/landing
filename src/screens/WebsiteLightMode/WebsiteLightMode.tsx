import React from "react";
import { BenefitsSection } from "./sections/BenefitsSection/BenefitsSection";
import { CostSection } from "./sections/CostSection/CostSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { PartnersSection } from "./sections/PartnersSection";
import { SaveCostSection } from "./sections/SaveCostSection";
import { SecurityAuditsSection } from "./sections/SecurityAuditsSection";

export const WebsiteLightMode = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full">
        <div className="bg-white">
          <div className="flex flex-col w-full items-start">
            <HeaderSection />

            <div className="w-full bg-white h-[60px]" />

            <MainContentSection />

            <div className="w-full bg-white h-[150px]" />

            <SaveCostSection />

            <div className="w-full bg-white h-[150px]" />

            {/* <div className="w-full [background:linear-gradient(180deg,rgb(245,245,245)_0%,rgb(255,255,255)_100%)] py-[110px]">
              <div className="max-w-[1345px] mx-auto text-center">
                <h2 className="font-['Poppins',Helvetica] font-extrabold text-[#293147] text-[80px] leading-[80px]">
                  What is TWAMM
                </h2>
              </div>
            </div>

            <div className="w-full px-[172px]">
              <h2 className="font-['Poppins',Helvetica] font-extrabold text-[#293147] text-[59px] leading-[59px]">
                Save The Cost
              </h2>
            </div>

            <CostSection />

            <div className="w-full bg-[#0261f5] h-[100px] relative">
              <div className="h-[101px] w-full bg-[url(public/icon-6.svg)] bg-[100%_100%]" />
            </div> */}

            <BenefitsSection />

            {/* <div className="w-full bg-[#0261f5] h-[100px] relative">
              <div className="relative h-[300px] mt-[101px] ml-auto">
                <img
                  className="w-px h-[150px]"
                  alt="Icon"
                  src="public/icon.svg"
                />
              </div>
            </div> */}

            <SecurityAuditsSection />

            <div className="w-full bg-white py-[100px]">
              <div className="w-full px-4">
                <div className="text-center mb-[65px]">
                  <h2 className="font-['Poppins',Helvetica] font-semibold text-[#293147] text-[55px] leading-[55px]">
                    Security Audits
                  </h2>
                </div>

                <div className="flex justify-center">
                  <div className="w-[250px] h-[270px] mr-[19px]">
                    <div className="h-60">
                      <div className="relative w-[170px] h-40 mt-10 ml-10 bg-[url(public/div--elementor-carousel-image--1.png)] bg-cover bg-[50%_50%]" />
                    </div>
                  </div>

                  <div className="w-[212px] h-60">
                    <div className="h-[210px]">
                      <div className="relative w-[132px] h-[130px] mt-10 ml-10 bg-[url(public/div--elementor-carousel-image-.png)] bg-cover bg-[50%_50%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PartnersSection />
          </div>
        </div>
      </div>
    </div>
  );
};
