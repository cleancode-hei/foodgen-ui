import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type LinkProps = {
  path: string;
  text: string;
  className: string;
};

export const Link = ({ path, text, className }: LinkProps) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="link"
      className={className}
      onClick={() => {
        navigate(`/${path}`);
      }}
    >
      {text}{" "}
    </Button>
  );
};
