import { ReactComponent as Hangouts } from "../imgs/hangouts.svg";
import { ReactComponent as Debtor } from "../imgs/debtor.svg";

const sidebar = [
  {
    key: "management",
    title: "管理",
    group: [
      {
        key: "hangouts",
        title: "聚餐",
        icon: Hangouts,
        href: "/hangouts",
      },
      {
        key: "debtors",
        title: "債務人",
        icon: Debtor,
        href: "/debtor",
      },
    ],
  },
];

export default sidebar;
