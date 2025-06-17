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

const Sidebar = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        width: "60px",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2.5rem",
        paddingBlock: "4rem 2.5rem ",
      })}
    >
      <nav className={css({ display: "flex", flexDirection: "column", gap: "2.5rem" })}>
        <NotFoundLink>
          <IconButton visual="solid" icon={<SearchIcon />} />
        </NotFoundLink>

        {/* ✅ Only valid route */}
        <IconButton visual="solid" icon={<CollectionIcon />} />

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

      <div className={css({ display: "flex", flexDirection: "column", gap: "1.875rem" })}>
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
