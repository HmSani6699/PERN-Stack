import avatar_icon from "../assets/images/avatar.svg";
import SearchInput from "../component/SearchInput";

const DashboardNavbar = ({ user }) => {
  const { name } = user;
  console.log(user);
  return (
    <div className="bg-white rounded-md p-[15px] flex justify-between items-center">
      <h2 className="text-[30px] font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <SearchInput placeholder={"Search user"} name={name} />
        <div className="border-2 rounded-full p-[5px] cursor-pointer relative z-[2]">
          <img width={40} height={40} src={avatar_icon} alt="avatar img" />
        </div>
        <h2 className="whitespace-nowrap text-[25px] font-semibold">{name}</h2>
      </div>
    </div>
  );
};

export default DashboardNavbar;
