import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeather } from "../../redux/controller/app/appSlice";
import "./style.scss"
import {AiOutlineSetting, AiFillHome, AiOutlineHeart, AiOutlineHeatMap} from "react-icons/ai"
import { IoIosNotificationsOutline} from "react-icons/io"
const itemLink = [
  {
    id: 1,
    title: "Home",
    icon: <AiFillHome/>
  },
  {
    id: 2,
    title: "Like",
    icon: <AiOutlineHeart/>
  },
  {
    id: 3,
    title: "Map",
    icon: <AiOutlineHeatMap/>
  },
  {
    id: 4,
    title: "Notification",
    icon: <IoIosNotificationsOutline/>
  },
  {
    id: 5,
    title: "Setting",
    icon: <AiOutlineSetting/>
  },
]

function Header() {
//   const dispatch = useDispatch();
//   const { text } = useSelector((state: any) => state.app);


  return (
    <div className="header_wapper">
      <ul>
        {
          itemLink.map((item)=>{
            return (
              <li className="active_item_header" data-tooltip={item.title} key={item.id}>{item.icon}</li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Header;
