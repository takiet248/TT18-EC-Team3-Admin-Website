interface IPrivateRouter {
  component: any;
  layout: any;
  exact?: boolean;
  path?: string;
  sidebar?: any;
}

interface IPublicRouter {
  component: any;
  layout: any;
  exact?: boolean;
  path?: string;
  sidebar?: any;
}

interface ILayout {
  sidebar?: any;
}
