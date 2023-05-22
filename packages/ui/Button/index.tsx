import { css } from "@emotion/react";
import { CustomButton } from "./style";
import LoadingCircle from "../LoadingCircle";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  isLoading?: boolean;
  widthREM?: number;
  bgColor?: string;
  fontColor?: string;
  hoverBgColor?: string;
  position?: "absolute" | "relative" | "fixed" | "static" | "sticky";
  bottomREM?: number;
}

const Button: React.FC<ButtonProps> = ({
  children = "",
  isLoading = false,
  widthREM,
  bgColor,
  fontColor,
  hoverBgColor,
  position,
  bottomREM,
  ...attributes
}) => {
  return (
    <CustomButton
      css={css`
        width: ${widthREM && `${widthREM}rem`};
        background: ${bgColor && bgColor};
        color: ${fontColor && fontColor};
        position: ${position && position};
        bottom: ${bottomREM && `${bottomREM}rem`};
        :hover {
          background: ${hoverBgColor && hoverBgColor};
        }
        :disabled {
          background: ${isLoading && (bgColor || "#050505")};
        }
      `}
      disabled={isLoading}
      {...attributes}
    >
      {isLoading ? <LoadingCircle /> : children}
    </CustomButton>
  );
};

export default Button;
