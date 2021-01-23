/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/layout'

const customerRoutes = {
  path: '/customer_relations',
  component: Layout,
  redirect: '/customer/customers',
  name: 'Customer Relations',
  alwaysShow: true,
  meta: {
    title: 'Customer Relations',
    icon: 'user',
    permissions: ['view menu customer relation']
  },
  children: [
    {
      path: 'customers',
      component: () => import('@/views/customer/archive'),
      name: 'CustomerList',
      meta: { title: 'Customers', icon: 'user', permissions: ['manage customer'] }
    }
    // {
    //   path: 'contact_persons',
    //   component: () => import('@/views/contact-person/archive'),
    //   name: 'ContactPersonList',
    //   meta: { title: 'Person', icon: 'user', permissions: ['manage customer'] }
    // }
  ]
}

export default customerRoutes
