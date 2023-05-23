import React from "react";
import { Description } from "./style";

interface AuthDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * `auth/*` path 에서 사용되는 타이틀
 *
 * @prop children: React.ReactNode
 */
const AuthDescription: React.FC<AuthDescriptionProps> = ({
  children,
  className,
}) => {
  return <Description className={className}>{children}</Description>;
};

export default AuthDescription;
