import { ReactComponent as Hangouts } from '../imgs/hangouts.svg';
import { ReactComponent as Debtor } from '../imgs/debtor.svg';

const sidebar = [
  {
    key: 'hangouts',
    title: '聚餐',
    icon: Hangouts,
    href: '/hangouts',
  },
  {
    key: 'debtors',
    title: '債務人',
    icon: Debtor,
    href: '/debtor',
  },
];

export default sidebar;
