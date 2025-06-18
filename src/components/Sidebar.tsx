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
        <TooltipWrapper content="Search">
          <NotFoundLink className={css({ display: { base: 'none', md: 'inline' } })}>
            <IconButton visual="solid" icon={<SearchIcon />} />
          </NotFoundLink>
        </TooltipWrapper>

        <TooltipWrapper content="Collection">
          <Link href="/" tabIndex={-1}>
            <IconButton visual="solid" icon={<CollectionIcon />} />
          </Link>
        </TooltipWrapper>

        <TooltipWrapper content="Stack">
          <NotFoundLink>
            <IconButton visual="solid" icon={<StackIcon />} />
          </NotFoundLink>
        </TooltipWrapper>

        <TooltipWrapper content="Messages">
          <NotFoundLink>
            <IconButton visual="solid" icon={<MessageIcon />} />
          </NotFoundLink>
        </TooltipWrapper>

        <TooltipWrapper content="Analytics">
          <NotFoundLink>
            <IconButton visual="solid" icon={<AnalyticsIcon />} />
          </NotFoundLink>
        </TooltipWrapper>

        <TooltipWrapper content="Send">
          <NotFoundLink>
            <IconButton visual="solid" icon={<PaperRocketIcon />} />
          </NotFoundLink>
        </TooltipWrapper>
      </nav>
      <div className={css({ display: { base: 'none', md: 'flex' }, flexDirection: "column", gap: "4" })}>
        <TooltipWrapper content="Agent">
          <NotFoundLink>
            <IconButton visual="solid" icon={<AgentIcon />} />
          </NotFoundLink>
        </TooltipWrapper>

        <TooltipWrapper content="Menu">
          <NotFoundLink>
            <IconButton visual="solid" icon={<MenuIcon />} />
          </NotFoundLink>
        </TooltipWrapper>
      </div>
    </div>
  );
};

export default Sidebar;