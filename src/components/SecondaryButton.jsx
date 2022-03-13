function SecondaryButton({ content, link, isExternal }) {
  return (
    <a
      className="group block relative text-gray-700 "
      href={link}
      target={isExternal ? "_blank" : null}
      rel={isExternal ? "noreferrer" : null}
    >
      <span className="absolute inset-0 bg-gray-700 rounded-xl translate-x-1 translate-y-1"></span>
      <div className="flex relative  py-2 px-5 space-x-2 h-full bg-white hover:bg-rose-50 rounded-xl border-2 border-gray-700 transition ease-in-out hover:translate-x-1 hover:translate-y-1	">
        <span className="font-semibold">{content}</span>
      </div>
    </a>
  );
}

export default SecondaryButton;
