import search_icon from "../assets/images/search_icon.svg";

const SearchInput = ({ placeholder }) => {
  return (
    <div className="bg-[#dcdcdc9b] w-full flex  rounded-[20px] pr-[20px]">
      <input
        className="outline-none w-full rounded-l-[20px] bg-[#dcdcdc9b] px-[20px] py-[7px]"
        type="search"
        placeholder={placeholder}
      />
      <img height={20} width={20} src={search_icon} alt="" />
    </div>
  );
};

export default SearchInput;
