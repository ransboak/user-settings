import { BiPencil } from "react-icons/bi"
import { AiFillBell } from "react-icons/ai"
import {IoShieldCheckmarkSharp} from 'react-icons/io5'
import { FaSuitcase } from "react-icons/fa"
const profileItems = [
    {
        Icon: <BiPencil />,
        action: "Edit Profile"
    },
    {
        Icon: <AiFillBell />,
        action: "Notifications"
    },
    {
        Icon: <FaSuitcase />,
        action: "Choose Plan"
    },
    {
        Icon: <IoShieldCheckmarkSharp />,
        action: "Password & Security"
    }
]
export default profileItems