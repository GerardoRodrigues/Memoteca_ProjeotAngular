import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig ? false : true;  
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void { }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { return null; }

  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }

  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
}