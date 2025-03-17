import React from "react";

export const SecurityAuditsSection = (): JSX.Element => {
  // Partner data for mapping
  const partners = [
    {
      name: "Apex Protocol",
      image: "public/image--attachment-large--7.png",
      link: "https://apex.exchange",
    },
    {
      name: "Arbitrum",
      image: "public/image--attachment-large--8.png",
      link: "https://arbitrum.foundation",
    },
    {
      name: "Bitlayer",
      image: "public/image--attachment-large--9.png",
      link: "https://www.bitlayer.org",
    },
    {
      name: "Davion Labs",
      image: "public/image--attachment-large--10.png",
      link: "https://davionlabs.com",
    },
    {
      name: "Dapp Learning",
      image: "public/image--attachment-large--6.png",
      link: "https://linktr.ee/dapplearning",
    },
    {
      name: "dForce Network",
      image: "public/image--attachment-large--5.png",
      link: "https://dforce.network",
    },
    {
      name: "Gitcoin",
      image: "public/image--attachment-large--4.png",
      link: "https://www.gitcoin.co",
    },
    {
      name: "Increment Finance",
      image: "public/image--attachment-large--3.png",
      link: "https://increment.fi",
    },
    {
      name: "Mantle Network",
      image: "public/image--attachment-large--2.png",
      link: "https://www.mantle.xyz",
    },
    {
      name: "MerlinChain",
      image: "public/image--attachment-2048x2048-.png",
      link: "https://www.merlinchain.io",
    },
    {
      name: "Mint Blockchain",
      image: "public/image--attachment-large--1.png",
      link: "https://www.mintchain.io",
    },
    {
      name: "Nervos",
      image: "public/image--attachment-large-.png",
      link: "https://www.nervos.org",
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
              <button
                type="button"
                title={`Visit ${partner.name}`}
                aria-label={`Visit ${partner.name}'s website`}
                onClick={() => window.open(partner.link, "_blank")}
                className="w-32 h-32 bg-cover bg-center mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundImage: `url(/${partner.image})` }}
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
