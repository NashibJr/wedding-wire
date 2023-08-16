import Link from "@/components/Links/Link";
import HiddenLinks from "./HiddenLinks";

const GroomHiddenLinks = () => {
  return (
    <HiddenLinks>
      <div style={{ padding: 30, display: "flex", flexDirection: "column" }}>
        <Link
          label="Couples"
          route="#couples"
          _class="hover:text-red-800 font-bold"
        />
        <Link
          label="Sherwan"
          route="#couples"
          _class="hover:text-red-800"
          style={{ marginTop: 15, marginBottom: 15 }}
        />
        <Link
          label="Promotions"
          route="#Promotions"
          _class="hover:text-red-800 font-bold"
        />
      </div>
    </HiddenLinks>
  );
};

export default GroomHiddenLinks;
