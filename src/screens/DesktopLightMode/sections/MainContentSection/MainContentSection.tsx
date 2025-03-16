import React from "react";
import { Button } from "../../../../components/ui/button";

export const MainContentSection = (): JSX.Element => {
  // Feature points data for mapping
  const featurePoints = [
    {
      id: 1,
      lines: ["Truly CPAMM-based", "TWAMM algorithm"],
      width: "w-[253px]",
    },
    {
      id: 2,
      lines: [
        "Lowering down slippage loss by",
        "enabling term swap for large orders",
      ],
      width: "w-[429px]",
    },
    {
      id: 3,
      lines: [
        "Arbitrary trading time configuration at",
        "the user's free will",
      ],
      width: "w-[414px]",
    },
  ];

  return (
    <div className="relative w-full bg-[#0261f5]">
      <div className="relative w-full">
        <div className="w-full [background:linear-gradient(180deg,rgb(2,97,245)_44%,rgb(2,97,245)_75%)] opacity-[0.82]" />
        <div className="w-full h-20 bg-[url(public/icon-6.svg)] bg-[100%_100%]" />

        <div className="flex flex-col items-center py-36 px-4">
          <div className="max-w-[1100px] w-full">
            {/* Heading and subtitle */}
            <div className="mb-32">
              <h1 className="font-['Poppins',Helvetica] font-extrabold text-white text-[94.4px] leading-[94.4px] whitespace-nowrap">
                Pulsar Protocol
              </h1>
              <p className="mt-8 [text-shadow:0px_0px_23px_#0000004c] font-['Poppins',Helvetica] font-light text-white text-[32px] leading-[35.2px] whitespace-nowrap">
                Swap and long-term invest crypto on TWAMM protocol
              </p>
            </div>

            {/* Feature points */}
            <div className="flex flex-wrap gap-x-4 mb-12">
              {featurePoints.map((feature) => (
                <div
                  key={feature.id}
                  className={`${feature.width} opacity-95 mb-6`}
                >
                  <div className="relative pl-6 border-l-[5px] border-white">
                    <div className="flex flex-col pl-4">
                      {feature.lines.map((line, index) => (
                        <p
                          key={index}
                          className="font-['Poppins',Helvetica] font-medium text-white text-[19.2px] leading-[28.8px] whitespace-nowrap"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-5 mt-8">
              <Button
                variant="outline"
                className="w-[172px] h-[51px] rounded-[5px] border-[3px] border-solid border-white bg-transparent [text-shadow:0px_0px_10px_#0000004c] font-['Poppins',Helvetica] font-semibold text-white text-[15px]"
              >
                SWAP NOW
              </Button>
              <Button
                variant="outline"
                className="w-[168px] h-[51px] rounded-[5px] border-[3px] border-solid border-white bg-transparent [text-shadow:0px_0px_10px_#0000004c] font-['Poppins',Helvetica] font-semibold text-white text-[15px]"
              >
                DOCUMENTATION
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
