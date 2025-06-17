// src/components/Icons/IconProps.ts
import { SVGProps } from "react";
export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}
