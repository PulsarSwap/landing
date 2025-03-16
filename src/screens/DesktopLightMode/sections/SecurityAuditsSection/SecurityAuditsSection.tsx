import React from "react";

export const SecurityAuditsSection = (): JSX.Element => {
  // Partner data for mapping
  const partners = [
    {
      name: "Apex Protocol",
      image: "public/image--attachment-large--7.png",
    },
    {
      name: "Arbitrum",
      image: "public/image--attachment-large--8.png",
    },
    {
      name: "Bitlayer",
      image: "public/image--attachment-large--9.png",
    },
    {
      name: "Davion Labs",
      image: "public/image--attachment-large--10.png",
    },
    {
      name: "Dapp Learning",
      image: "public/image--attachment-large--6.png",
    },
    {
      name: "dForce Network",
      image: "public/image--attachment-large--5.png",
    },
    {
      name: "Gitcoin",
      image: "public/image--attachment-large--4.png",
    },
    {
      name: "Increment Finance",
      image: "public/image--attachment-large--3.png",
    },
    {
      name: "Mantle Network",
      image: "public/image--attachment-large--2.png",
    },
    {
      name: "MerlinChain",
      image: "public/image--attachment-2048x2048-.png",
    },
    {
      name: "Mint Blockchain",
      image: "public/image--attachment-large--1.png",
    },
    {
      name: "Nervos",
      image: "public/image--attachment-large-.png",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-[55px] font-semibold text-[#293147] text-center mb-16 font-['Poppins',Helvetica]">
          Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-32 h-32 bg-cover bg-center mb-4"
                style={{ backgroundImage: `url(${partner.image})` }}
              />
              <div className="text-center opacity-75">
                <p className="font-['Roboto',Helvetica] font-semibold text-[#293147] text-[12.8px] leading-[25.6px]">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
