function Bumper(props) {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className={"h-24 bg-bottom  bg-repeat-x " + props.url} />
  );
}

export default Bumper;
