export const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    megaMenu: true,
    sections: [
      {
        title: "Watches",
        items: [
          {
            label: "Regent",
            href: "/collections/watches/regent-watches",
          },
          {
            label: "Classic",
            href: "/collections/watches/classic-watches",
          },
        ],
      },
      {
        title: "Sunglasses",
        items: [
          {
            label: "Regent",
            href: "/collections/sunglasses/regent-sunglasses",
          },
        ],
      },
      {
        title: "Leather Belts",
        items: [
          {
            label: "Statesman",
            href: "/collections/belts/statesman-belts",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Support",
    dropdown: [
      {
        label: "Shipping",
        href: "/shipping",
      },
      {
        label: "Returns & Exchanges",
        href: "/returns",
      },
      {
        label: "Warranty",
        href: "/warranty",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
];