import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Home from './src/Pages/Home'
import ApartementsPage from './src/Pages/ApartementsPage'
import About from './src/Pages/About'
import PageNotFound from './src/Pages/PageNotFound'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/kasa/",
  plugins: [react()],
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/:id',
      component: ApartementsPage,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
})
