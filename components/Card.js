const Card = ({ children, setWidth }) => {
  return (
    <div
      className={`p-2 m-2 rounded-md h-auto ${setWidth} cursor-pointer`}
      style={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, .2)" }}
    >
      {children}
    </div>
  );
};

export default Card;
