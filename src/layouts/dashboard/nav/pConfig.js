// component
import SvgColor from '../../../components/svg-color';

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const pConfig = [
  {
    title: 'dashboard',
    path: '/patientdashboard/app',
    icon: icon('ic_analytics'),
  },
//   {
//     title: 'patients',
//     path: '/dashboard/user',
//     icon: icon('ic_user'),
//   },
  {
    title: 'profile',
    path: '/patientdashboard/profile',
    icon: icon('ic_cart'),
  },
  {
    title: 'logout',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default pConfig;
