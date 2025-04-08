enum PrizeCategory {
    Default = 'default',
    Scholar = 'scholar'
  }
  
  interface Prize {
    name: string;
    image: string;
    chance: number;
    value: number;
  }
  
  const prizes: Record<PrizeCategory, Prize[]> = {
    [PrizeCategory.Default]: [
      { name: 'Famas | Bad Trip', image: '/images/famas.webp', chance: 3, value: 3000 },
      { name: 'AWP | Printstream', image: '/images/awp.webp', chance: 3, value: 3000 },
      { name: 'UMP | K.O. Factory', image: '/images/ump.webp', chance: 6, value: 1500 },
      { name: 'Glock-18 | Shinobu', image: '/images/glock.webp', chance: 6, value: 1500 },
      { name: 'AK-47 | Searing Rage', image: '/images/ak.webp', chance: 6, value: 1500 },
      { name: 'Zeus x27 | Tosai', image: '/images/zeus.webp', chance: 15, value: 800 },
      { name: 'P90 | Wave Breaker', image: '/images/p90.webp', chance: 15, value: 800 },
      { name: 'Nova | Rising Sun', image: '/images/nova.webp', chance: 15, value: 800 },
      { name: 'Galil AR | Control', image: '/images/galil.webp', chance: 15, value: 800 },
      { name: 'Desert Eagle | Serpent Strike', image: '/images/deagle.webp', chance: 15, value: 800 },
      { name: 'XM1014 | Mockingbird', image: '/images/xm.webp', chance: 75, value: 200 },
      { name: 'USP-S | PC-GRN', image: '/images/usp.webp', chance: 75, value: 200 },
      { name: 'SSG 08 | Memorial', image: '/images/scout.webp', chance: 75, value: 200 },
      { name: 'P2000 | Sure Grip', image: '/images/p2000.webp', chance: 75, value: 200 },
      { name: 'MP9 | Nexus', image: '/images/mp9.webp', chance: 75, value: 200 },
      { name: 'MAG-7 | Resupply', image: '/images/mag-7.webp', chance: 75, value: 200 },
      { name: 'M4A4 | Choppa', image: '/images/m4.webp', chance: 75, value: 200 },
      { name: 'Survival Knife | Tiger Tooth', image: '/images/skeleton-tiger-tooth.webp', chance: 1, value: 5000 },
      { name: 'Skeleton Knife | Doppler', image: '/images/skeleton-doppler.webp', chance: 1, value: 5000 },
      { name: 'Survival Knife | Doppler', image: '/images/survival-doppler.webp', chance: 1, value: 5000 }
    ],
    [PrizeCategory.Scholar]: [
        { name: 'Lets go, blin!', image: '/images/memes/krid.webp', chance: 3, value: 3000 },
        { name: 'Come here, blin!', image: '/images/memes/krid.webp', chance: 3, value: 3000 },
        { name: 'I am TOP 100 adequate', image: '/images/memes/papinjo.webp', chance: 6, value: 1500 },
        { name: 'Easy for the greatest', image: '/images/memes/papinjo.webp', chance: 6, value: 1500 },
        { name: 'Uncle, please do not do it', image: '/images/memes/papinjo.webp', chance: 6, value: 1500 },
        { name: 'How to play this game?', image: '/images/memes/zolo.webp', chance: 15, value: 800 },
        { name: 'I am smart, trust me', image: '/images/memes/zolo.webp', chance: 15, value: 800 },
        { name: 'I am coocklooovod', image: '/images/memes/zolo.webp', chance: 15, value: 800 },
        { name: 'I am waiting for my big prize', image: '/images/memes/zhdun.webp', chance: 15, value: 800 },
        { name: 'Ok, just spin and wait a bit more', image: '/images/memes/zhdun.webp', chance: 15, value: 800 },
        { name: 'You have sad face, no money for you', image: '/images/memes/misha.webp', chance: 75, value: 200 },
        { name: 'Start over, Misha', image: '/images/memes/misha.webp', chance: 75, value: 200 },
        { name: 'Bad mouth of this casino', image: '/images/memes/kazino.webp', chance: 75, value: 200 },
        { name: 'Where did my money go?', image: '/images/memes/kazino.webp', chance: 75, value: 200 },
        { name: 'Give me my money back', image: '/images/memes/kazino.webp', chance: 75, value: 200 },
        { name: 'SAY "NJAM NJAM"', image: '/images/memes/snikers.webp', chance: 1, value: 5000 },
    ]
  };
  
  export default prizes;