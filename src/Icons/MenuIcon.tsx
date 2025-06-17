import { IconProps } from "@/types/IconProps";

const MenuIcon: React.FC<IconProps> = ({ size = 16, color = "#A9A9A9", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={4} cy={4} r={2} fill={color} />
    <circle cx={4} cy={12} r={2} fill={color} />
    <circle cx={12} cy={4} r={2} fill={color} />
    <circle cx={12} cy={12} r={2} fill={color} />
  </svg>
);
export default MenuIcon;
