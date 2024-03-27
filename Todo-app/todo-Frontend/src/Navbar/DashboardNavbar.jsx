import avatar_icon from "../assets/images/sani.jpg";
import notification from "../assets/images/notifecation.svg";
import satting from "../assets/images/satting.svg";
import SearchInput from "../component/SearchInput";

const DashboardNavbar = ({ user }) => {
  const { name } = user;
  console.log(user);
  return (
    <div className="bg-white rounded-md p-[15px] flex justify-between items-center">
      <h2 className="text-[30px] font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <SearchInput placeholder={"Search user"} name={name} />
        <img src={notification} alt="" />
        <img src={satting} alt="" />
        <div className="border-2 rounded-full p-[2px] cursor-pointer relative z-[2]">
          <img
            className="rounded-full"
            width={60}
            height={60}
            src={avatar_icon}
            alt="avatar img"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
