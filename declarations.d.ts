// declaration.d.ts
declare module "*.scss";

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "react-facebook-login/dist/facebook-login-render-props" {
  const value: any;
  export default value;
}

declare module "react-image-zoom" {
  const value: any;
  export default value;
}
