import Link from "./Links/Link";

const WeddingVendComponent = ({
  labelOne,
  labelTwo,
  labelThree,
  routeOne,
  routeTwo,
  routeThree,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link
        label={labelOne}
        route={routeOne}
        style={{ marginTop: 15 }}
        _class="hover:text-red-800"
      />
      <Link
        label={labelTwo}
        route={routeTwo}
        style={{ marginTop: 15 }}
        _class="hover:text-red-800"
      />
      <Link
        label={labelThree}
        route={routeThree}
        style={{ marginTop: 15 }}
        _class="hover:text-red-800"
      />
    </div>
  );
};

export default WeddingVendComponent;
