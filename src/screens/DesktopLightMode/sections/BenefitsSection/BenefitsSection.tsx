import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const BenefitsSection = (): JSX.Element => {
  // Data for benefit cards
  const benefitCards = [
    {
      id: 1,
      title: "Institutional RWA",
      icon: (
        <div className="h-10 w-10 flex items-center justify-center text-[#293147] text-[40px]"></div>
      ),
      description: [
        "CPAMM-based TWAMM",
        "strategy helps institutional",
        "RWA traders invest in",
        "cryptocurrencies for the",
        "long-term",
      ],
    },
    {
      id: 2,
      title: "Stable Swap",
      icon: <img className="w-10 h-10" alt="Icon" src="public/icon-1.svg" />,
      description: [
        "Due to its unprecedented",
        "advantages in facilitating",
        "large-order stable swaps,",
        "TWAMM stands out from",
        "platforms such as Curve.fi",
      ],
    },
    {
      id: 3,
      title: "DAO Treasury",
      icon: <img className="w-10 h-10" alt="Icon" src="public/icon-9.svg" />,
      description: [
        "DAOs would diversify their",
        "treasury in order to fund",
        "operations with lower price",
        "impact, trustless and non-",
        "custodial",
      ],
    },
    {
      id: 4,
      title: "MEV Resistant",
      icon: (
        <div className="h-10 w-10 flex items-center justify-center text-[#293147] text-[40px]"></div>
      ),
      description: [
        "Swaps occur between",
        "blocks and are only realized",
        "when the contract has",
        "interacted making MEV",
        "resistance achieved",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-neutral-100 py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - Heading */}
          <div className="md:w-1/3">
            <div className="flex flex-col">
              <h2 className="font-extrabold text-[#293147] text-6xl md:text-8xl lg:text-[100px] leading-tight">
                <span className="block">Who</span>
                <span className="block">Will</span>
                <span className="block">Benefit</span>
              </h2>
              <Separator className="w-32 h-0.5 mt-7 bg-[#565d6e] border-0" />
            </div>
          </div>

          {/* Right side - Cards Grid */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {benefitCards.map((card) => (
                <Card
                  key={card.id}
                  className="rounded-[15px] shadow-[0px_0px_30px_#0000000d] overflow-hidden bg-white"
                >
                  <CardContent className="p-0">
                    <div className="relative p-12 pt-14">
                      <div className="flex flex-col items-center mb-6">
                        <div className="mb-14">{card.icon}</div>
                        <h3 className="font-extrabold text-[#293147] text-xl leading-6 mb-9">
                          {card.title}
                        </h3>
                      </div>
                      <div className="text-center">
                        {card.description.map((line, index) => (
                          <p
                            key={index}
                            className="font-normal text-[#565d6e] text-base leading-[25.6px] mb-0"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
