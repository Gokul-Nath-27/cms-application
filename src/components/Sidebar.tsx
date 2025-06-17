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
      })}>
      <nav className={css({ display: "flex", flexDirection: "column", gap: "2.5rem" })}>
        <IconButton visual="solid" icon={<SearchIcon />} />
        <IconButton visual="solid" icon={<CollectionIcon />} />
        <IconButton visual="solid" icon={<StackIcon />} />
        <IconButton visual="solid" icon={<MessageIcon />} />
        <IconButton visual="solid" icon={<AnalyticsIcon />} />
        <IconButton visual="solid" icon={<PaperRocketIcon />} />
      </nav >
      <div className={css({ display: "flex", flexDirection: "column", gap: "1.875rem" })}>
        <IconButton visual="solid" icon={<AgentIcon />} />
        <IconButton visual="solid" icon={<MenuIcon />} />
      </div>
    </div>
  );
};

export default Sidebar