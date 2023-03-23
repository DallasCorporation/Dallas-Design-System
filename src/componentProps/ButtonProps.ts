import { ComponentSize, Kind } from "../componentTypes/types";

export interface ButtonProps {
  kind?: Kind;
  backgroundColor?: string;
  size?: ComponentSize;
  label: string;
  onClick?: () => void;
}