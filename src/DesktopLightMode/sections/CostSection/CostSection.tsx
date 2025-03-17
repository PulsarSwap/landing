import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const CostSection = (): JSX.Element => {
  // Data for benefit statements
  const benefits = [
    {
      id: 1,
      text: (
        <>
          <span className="font-extrabold text-[#293147]">Up to </span>
          <span className="font-bold text-[#293147]">50x</span>
          <span className="font-extrabold text-[#293147]"> slippage reduction with</span>
          <div className="font-extrabold text-[#293147] text-xl leading-6">TWAMM</div>
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          <span className="font-bold text-[#293147]">No</span>
          <span className="font-extrabold text-[#293147]"> extra cost compare to existing</span>
          <div className="font-extrabold text-[#293147] text-xl leading-6">DEX&apos;s</div>
        </>
      ),
    },
  ];

  return (
    <section className="flex w-full gap-5 py-2.5 pl-2.5">
      <Card className="flex-1 bg-white rounded shadow-none border-none">
        <CardContent className="p-[25px] space-y-[30px]">
          <div className="space-y-4">
            <h2 className="font-extrabold text-xl text-[#293147] leading-6">
              A Solution to Slippage of Large Orders
            </h2>
            <p className="font-normal text-base text-[#293147] leading-[25.6px]">
              Smashing the high slippage costs with TWAMM
            </p>
          </div>

          <div className="w-full h-[372px] border border-solid border-[#dddddd] shadow-[0px_22px_35px_-16px_#0000001a] bg-white" />
        </CardContent>
      </Card>

      <div className="w-[356px] space-y-[117px] pt-[238px]">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="flex flex-col w-full h-12 items-start">
            <div className="text-xl leading-6 [font-family:'Poppins',Helvetica]">
              {benefit.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
