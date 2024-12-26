import type { RouterConfig } from '@nuxt/schema'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) =>{
    return _routes.map(route=> {
      if(route.name === "callAPI"){
        route.path = "/call-api"
      }
      return route
    })
  },
} satisfies RouterConfig