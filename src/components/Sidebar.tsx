import Link from "next/link";
import { css } from "../../styled-system/css";
import IconButton from "./ui/IconButton";
import {
  SearchIcon,
  StackIcon,
  MessageIcon,
  AnalyticsIcon,
  PaperRocketIcon,
  AgentIcon,
  MenuIcon,
  CollectionIcon,
} from "@/Icons";
import { NotFoundLink } from "@/components/NotFoundLink";
import { MOBILE_NAV_HEIGHT } from "@/app/layout";
import TooltipWrapper from "./ui/Tooltip";
const navLinks = [
  { name: "Search", icon: <SearchIcon /> },
  { name: "Collection", icon: <CollectionIcon /> },
  { name: "Stack", icon: <StackIcon /> },
  { name: "Messages", icon: <MessageIcon /> },
  { name: "Analytics", href: "/coming", icon: <AnalyticsIcon /> },
  { name: "Send", icon: <PaperRocketIcon /> },
]

const bottomNavLinks = [
  { name: "Agent", icon: <AgentIcon /> },
  { name: "Menu", icon: <MenuIcon /> },
]

const Sidebar = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: { base: "row", md: "column" },
        minWidth: "60px",
        justifyContent: { base: 'center', md: 'space-between' },
        alignItems: "center",
        gap: "2.5rem",
        paddingBlock: { base: 0, md: "4rem 2.5rem" },
        position: { base: "absolute", md: "static" },
        bottom: 3,
        width: { base: "100%", md: "auto" },
        background: { base: 'var(--background)', md: 'transparent' },
        height: { base: MOBILE_NAV_HEIGHT, md: "auto" }
      })}
    >
      <nav className={css({ display: "flex", flexDirection: { base: "row", md: "column" }, gap: "1.6rem", height: { base: '100%', md: "auto" } })}>
        {navLinks.map((link) => {
          const isCollection = link.name === "Collection";
          const LinkComponent = isCollection ? Link : NotFoundLink;
          const href = isCollection ? "/" : "/coming-soon";

          return (
            <TooltipWrapper content={link.name} side="top" key={link.name}>
              <LinkComponent href={href} tabIndex={-1}>
                <IconButton visual="solid" icon={link.icon} />
              </LinkComponent>
            </TooltipWrapper>
          );
        })}
      </nav>
      <div className={css({ display: { base: 'none', md: 'flex' }, flexDirection: "column", gap: "4" })}>
        {bottomNavLinks.map((link) => {
          return (
            <TooltipWrapper content={link.name} side="top" key={link.name}>
              <NotFoundLink>
                <IconButton visual="solid" icon={link.icon} />
              </NotFoundLink>
            </TooltipWrapper>
          )
        })}
      </div>
    </div>
  );
};

export default Sidebar;