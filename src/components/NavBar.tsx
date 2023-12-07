import {
  PersonOutlineOutlined,
  SearchOutlined,
  // Settings,
  // Chat,
  // NotificationsNone,
  Add,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

const NavBar = () => {
  return (
    <>
      <nav></nav>
    </>
  );
};

interface Icon {
  icon: ReactNode;
  path: string;
}

function LinkIcon({ icon, path }: Icon) {
  return (
    <Link to={path}>
      {icon}
      {path}
    </Link>
  );
}

export default NavBar;
