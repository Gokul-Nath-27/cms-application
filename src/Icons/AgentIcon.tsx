import { IconProps } from "@/types/IconProps";

const AgentIcon: React.FC<IconProps> = ({ size = 20, color = "#717274", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.58691 10.0003V0C11.7076 0 13.1195 2.2003 12.2418 4.13813L9.58691 10.0003Z"
      fill={color}
    />
    <path
      d="M9.58623 9.99997L18.2374 5.03967C19.2892 6.88823 18.0861 9.20988 15.9739 9.40606L9.58569 9.99997H9.58623Z"
      fill={color}
    />
    <path
      d="M9.58691 10L18.1688 15.08C17.0914 16.9136 14.4861 17.0163 13.2691 15.273L9.58691 10Z"
      fill={color}
    />
    <path
      d="M9.58631 10L9.44784 19.9997C7.32713 19.9703 5.94616 17.7502 6.85047 15.8247L9.58578 10H9.58631Z"
      fill={color}
    />
    <path
      d="M9.58612 10L0.867348 14.8395C-0.158922 12.9765 1.07665 10.672 3.19097 10.5052L9.58665 10.0005L9.58612 10Z"
      fill={color}
    />
    <path
      d="M9.5861 10.0006L1.07556 4.80134C2.17799 2.98272 4.78441 2.91644 5.97737 4.67678L9.5861 10.0006Z"
      fill={color}
    />
  </svg>
);
export default AgentIcon;
