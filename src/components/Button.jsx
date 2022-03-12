function Button() {
  return (
    <a
      className="group inline-block relative text-sm font-medium text-green-600 active:text-green-500 focus:outline-none focus:ring"
      href="/download"
    >
      <span className="absolute inset-0 bg-green-600 transition-transform translate-x-0.5 group-hover:translate-x-0 translate-y-0.5 group-hover:translate-y-0"></span>

      <span className="block relative py-3 px-8 bg-white border-2 border-current">
        Main cta
      </span>
    </a>
  );
}

export default Button;
