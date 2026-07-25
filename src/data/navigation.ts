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
            label: "Regent Collection",
            href: "/collections/watches/regent-watches",
          },
          {
            label: "Classic Collection",
            href: "/collections/watches/classic-watches",
          },
        ],
      },
      {
        title: "Sunglasses",
        items: [
          {
            label: "Regent Collection",
            href: "/collections/sunglasses/regent-sunglasses",
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