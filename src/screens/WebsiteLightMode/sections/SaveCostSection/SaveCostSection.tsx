import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SaveCostSection = (): JSX.Element => {
  // Data for metrics to enable mapping
  const metrics = [
    {
      value: "$700K",
      label: "Total Liquidity",
    },
    {
      value: "$10M",
      label: "Trading Volume",
    },
    {
      value: "20K",
      label: "Total Transactions",
    },
  ];

  return (
    <Card className="w-full max-w-[1000px] mx-auto rounded-[20px]">
      <CardContent className="flex justify-between items-center py-5">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-1/3 py-2"
          >
            <h2 className="font-['Poppins',Helvetica] font-extrabold text-[#293147] text-6xl leading-[72px]">
              {metric.value}
            </h2>
            <p className="font-['Poppins',Helvetica] font-normal text-[#293147] text-base leading-[25.6px] mt-2">
              {metric.label}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
