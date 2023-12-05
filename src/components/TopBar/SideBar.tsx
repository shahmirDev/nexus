import "./SideBar.scss";
import {
  PersonOutlineOutlined,
  SearchOutlined,
  Settings,
  Chat,
  NotificationsNone,
  Add,
} from "@mui/icons-material";
const SideBar = () => {
  return (
    <div className="sideBar center">
      {/* insert profile picture and logo */}
      <div className="sideBar__icons--top flex-center">
        <PersonOutlineOutlined />
      </div>
      <div className="sideBar__icons--center flex-center">
        <SearchOutlined />
        <NotificationsNone />
        <Chat />
        <Add />
      </div>
      <div className="sideBar__icons--bottom flex-center">
        <Settings />
      </div>
    </div>
  );
};

export default SideBar;
