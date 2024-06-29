const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";

    return validRoute;
  }

  // /about
  return `/${route}`;
};

export { resolveRoutes };
