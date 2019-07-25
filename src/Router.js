import VueRouter from "vue-router";
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue"
import Profile from "@/pages/Profile.vue"

// configure router
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: DashboardLayout,
      redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "update",
          name: "update",
          component: Profile
        }
      ]
    }
  ], // short for routes: routes
  linkExactActiveClass: "active"
});

export default router;