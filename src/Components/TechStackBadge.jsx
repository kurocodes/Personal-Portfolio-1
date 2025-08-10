const TechStackBadge = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-[#F2F7FC] rounded-full text-sm font-medium whitespace-nowrap">
      <img src={icon} alt="" className="w-5" />
      <span>{name}</span>
    </div>
  );
};

export default TechStackBadge;
