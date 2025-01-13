import { useMediaQuery } from "@mui/material";

type childProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
};

export default function MenuItem({
  children,
  onClick,
  id,
  ...rest
}: childProps) {
  const matches = useMediaQuery("(max-width:758px)");

  return (
    <a
      {...rest}
      onClick={(event) => {
        onClick(event);
      }}
      className="menu-item"
      href="#"
      style={{
        fontSize: `${matches ? "1.3rem" : "1.5rem"}`,
      }}
    >
      <p id="menu-item-text">{children}</p>
    </a>
  );
}
