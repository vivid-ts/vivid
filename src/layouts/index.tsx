import { useCurrentPage } from "@/hooks/useCurrentPage";
import { BlankLayout } from "./blank";

export const layouts = {
  blank: BlankLayout
}

export const Layout = () => {
  const current = useCurrentPage();
  const layout = current.handle?.layout ?? 'blank';

  const Component = layouts[layout];

  return <Component />
}