

export default function ServiceCard({ icon, title, description, bgColor }) {
  return (
    <div className={`${bgColor} px-5 py-3 rounded-2xl flex flex-col w-full`}>
      <h3 className="flex font-semibold text-xl gap-3 items-center mb-2 flex-none">
        <img src={icon} alt="" className="w-5" />
        {title}
      </h3>
      <p className="text-sm text-black font-[Raleway] flex-1 overflow-hidden text-ellipsis">
        {description}
      </p>
    </div>
  );
}
