export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://i.imgur.com/pivcSmI.png",
      name: "vCodes",
      description:
        "Do you want to expand and improve your Discord bot? Here vCodes are here for you!",
      link: "https://vcodes.xyz",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 2,
      image: "https://i.imgur.com/6lVoGT4.png",
      name: "Desion",
      description: "Discover the community that suits you best with Desion.",
      link: "https://desion.me",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 3,
      image: "https://i.ibb.co/1RkZ9rV/resim.png",
      name: "Giftix",
      description: "The most advanced Discord giveaway bot. Giveaway requirements, boost system and more!",
      link: "https://giftix.xyz",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 4,
      image: "https://i.imgur.com/91MZziJ.png",
      name: "Allegro",
      description:
        "Cheer up your server with Allegro, keep members on the server. The power is in your hands :)",
      link: "https://allegrobot.xyz",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 5,
      image: "https://i.imgur.com/oDLp2nF.png",
      name: "DevsForum",
      description:
        "DevsForum was opened to provide a benefit for developers and coders, friends.",
      link: "https://devsforum.net",
      language: "PHP",
      languageIcon: "./assets/techs/php.svg",
    },
    {
      id: 6,
      image: "https://i.imgur.com/oDLp2nF.png",
      name: "Temps City",
      description: "Website theme sharing platform.",
      link: "https://temps.city",
      language: "PHP",
      languageIcon: "./assets/techs/php.svg",
    },
  ];
  res.status(200).json(data);
};
