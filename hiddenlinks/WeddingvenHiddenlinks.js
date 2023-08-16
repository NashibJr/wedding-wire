import Link from "@/components/Links/Link";
import HiddenLinks from "./HiddenLinks";
import HiddenLinkCard from "@/components/HiddenLinkCard";
import plane from "@/public/plane.jpg";

const WeddingvenHiddenlinks = () => {
  return (
    <HiddenLinks>
      <div style={{ padding: 35 }}>
        <Link
          route="#Weddingvenues"
          label="Wedding venues"
          _class="font-bold hover:text-red-900"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
          >
            <Link
              label="Banquet halls"
              route="#banquethalls"
              _class="mt-4 hover:text-red-900"
              style={{ marginTop: 12 }}
            />
            <Link
              label="Marriage garden"
              route="#marriagegarden"
              _class="mt-4 hover:text-red-900"
              style={{ marginTop: 12 }}
            />
            <Link
              label="Wedding Resorts"
              route="#wedding resorts"
              _class="mt-4 hover:text-red-900"
              style={{ marginTop: 12 }}
            />
            <Link
              label="Promotions"
              route="#promotions"
              _class="font-bold hover:text-red-900"
              style={{ marginTop: 12 }}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
          >
            <Link
              label="Hotels"
              route="#hotels"
              _class="hover:text-red-900"
              style={{ marginTop: 12 }}
            />
            <Link
              label="Kalyana Mandapas"
              route="#kalyan"
              _class="hover:text-red-900"
              style={{ marginTop: 12 }}
            />
            <Link
              label="Wedding Lawns Farmhouses"
              route="#farmhouses"
              _class="hover:text-red-900"
              style={{ marginTop: 12 }}
            />
          </div>
          <div>
            <HiddenLinkCard
              head="Destination weddings"
              text="Easily plan your international wedding"
              image={plane}
            />
          </div>
        </div>
      </div>
    </HiddenLinks>
  );
};

export default WeddingvenHiddenlinks;
