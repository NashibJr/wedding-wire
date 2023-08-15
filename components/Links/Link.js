const Link = ({ route, label, _class }) => {
  return (
    <a href={route} className={_class}>
      {label}
    </a>
  );
};

export default Link;
