import { Footer, type FooterVariant } from "./Footer";
import { Header, type NavKey } from "./Header";
import { Topbar, type TopbarVariant } from "./Topbar";

type ShellProps = {
  active?: NavKey;
  topbar?: TopbarVariant;
  footer?: FooterVariant;
  children: React.ReactNode;
};

export function Shell({ active, topbar = "main", footer = "plain", children }: ShellProps) {
  return (
    <>
      <Topbar variant={topbar} />
      <Header active={active} />
      {children}
      <Footer variant={footer} />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}
