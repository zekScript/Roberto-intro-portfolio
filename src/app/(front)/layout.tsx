// Have top bar footer and children

import { TopBar } from "@/components/layout/nav/top-bar";

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* Topbar */}
      <TopBar />
      {children}
      {/* Footer */}
    </>
  );
};

export default Layout;
