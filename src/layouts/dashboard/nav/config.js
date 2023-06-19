// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'patients',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'profile',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'logout',
    path: '/login',
    icon: icon('ic_lock'),
  },

];

export default navConfig;
