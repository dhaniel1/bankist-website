import React /*  { ReactNode }  */ from "react";
import { Link } from "react-router-dom";
import { scrollintoView } from "../../utils";

interface Iprop
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  // children: ReactNode;
  aClassName: string;
  href: string;
  liClassName: string;
  // onClick: (ev: React.MouseEventHandler<HTMLAnchorElement> | undefined) => {};
}

const ListItem = (prop: Iprop) => {
  const { liClassName, aClassName, href, ...rest } = prop;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    scrollintoView(href);
  };

  return (
    <li className={liClassName} {...rest}>
      <Link className={aClassName} to={href} onClick={handleClick}>
        {prop.children}
      </Link>
    </li>
  );
};

export default ListItem;
