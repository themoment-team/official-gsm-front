import React from "react";
import { Video } from "./style";

interface AuthModelProps {
  modelUrl: string;
}

const AuthModel: React.FC<AuthModelProps> = ({ modelUrl }) => {
  return <Video src={modelUrl} autoPlay={true} muted={true} loop />;
};

export default AuthModel;
