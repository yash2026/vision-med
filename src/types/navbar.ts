export type NavbarLinkType = {
  name: string;
  path: string | null;
  subPaths: NavbarLinkType[] | null;
};
