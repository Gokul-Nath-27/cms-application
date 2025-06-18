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
        bottom: 0,
        width: { base: "100%", md: "auto" },
        background: { base: 'var(--background)', md: 'transparent' },

      })}
    >
      <nav className={css({ display: "flex", flexDirection: { base: "row", md: "column" }, gap: "1.6rem", height: { base: MOBILE_NAV_HEIGHT, md: "auto" } })}>
        <NotFoundLink className={css({ display: { base: 'none', md: 'inline' } })}>
          <IconButton visual="solid" icon={<SearchIcon />} />
        </NotFoundLink>

        <Link href="/" tabIndex={-1}>
          <IconButton visual="solid" icon={<CollectionIcon />} />
        </Link>

        <NotFoundLink>
          <IconButton visual="solid" icon={<StackIcon />} />
        </NotFoundLink>
        <NotFoundLink>
          <IconButton visual="solid" icon={<MessageIcon />} />
        </NotFoundLink>
        <NotFoundLink>
          <IconButton visual="solid" icon={<AnalyticsIcon />} />
        </NotFoundLink>
        <NotFoundLink>
          <IconButton visual="solid" icon={<PaperRocketIcon />} />
        </NotFoundLink>
      </nav>
      <div className={css({ display: { base: 'none', md: 'flex' }, flexDirection: "column", gap: "4" })}>
        <NotFoundLink>
          <IconButton visual="solid" icon={<AgentIcon />} />
        </NotFoundLink>
        <NotFoundLink>
          <IconButton visual="solid" icon={<MenuIcon />} />
        </NotFoundLink>
      </div>
    </div>
  );
};

export default Sidebar;
