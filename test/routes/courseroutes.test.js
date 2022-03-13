import router from "../../routes/courseroutes";

test('Router Setup', () => {

    const routes = router.stack
      .filter(layer => layer.route)
      .map(layer => layer.route.path)
  
    expect(routes.includes('/')).toBe(true)
    expect(routes.includes('/create')).toBe(true)
    
  })