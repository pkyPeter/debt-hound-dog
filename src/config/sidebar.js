import { ReactComponent as Hangouts } from "../imgs/hangouts.svg";
import { ReactComponent as Debtor } from "../imgs/debtor.svg";
import { ReactComponent as Creditor } from "../imgs/creditor.svg";

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
    ],
  },
  {
    key: "human",
    title: "人員資料管理",
    group: [
      {
        key: "creditor",
        title: "債權人",
        icon: Creditor,
        href: "/creditor",
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
