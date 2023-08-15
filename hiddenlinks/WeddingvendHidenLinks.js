import Link from "@/components/Links/Link";
import HiddenLinks from "./HiddenLinks";
import WeddingVendComponent from "@/components/WeddingVendComponent";
import HiddenLinkCard from "@/components/HiddenLinkCard";
import plane from "@/public/plane.jpg";
import { links } from "@/components/constants";

const WeddingvendHidenLinks = () => {
  return (
    <HiddenLinks>
      <div style={{ padding: 35 }}>
        <Link
          label="Start hiring vendors"
          route="#hiringvendors"
          _class="font-bold hover:text-red-800"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <WeddingVendComponent
            labelOne="Wedding Photographers"
            labelTwo="Caterers"
            labelThree="Wedding Gifts"
            routeOne="#photographers"
            routeTwo="#Caterers"
            routeThree="#WeddingGifts"
          />
          <WeddingVendComponent
            labelOne="Wedding Videography"
            labelTwo="Wedding  Transportation"
            labelThree="Florists"
            routeOne="#Videography"
            routeTwo="#Transportation"
            routeThree="#Florists"
          />
          <WeddingVendComponent
            labelOne="Wedding Music"
            labelTwo="Wedding Invitations"
            labelThree="Wedding Planners"
            routeOne="#Music"
            routeTwo="#Invitations"
            routeThree="#Planners"
          />
          <div>
            <HiddenLinkCard
              head="Destination weddings"
              text="Easily plan your international wedding"
              image={plane}
            />
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <h1 className="uppercase font-bold mb-4">
            complete your wedding team
          </h1>
          <span>
            {links.map((link, index) => (
              <Link
                label={link.label}
                route={link.route}
                key={index}
                _class="hover:text-red-800"
                style={{ marginRight: 20 }}
              />
            ))}
          </span>
        </div>
      </div>
    </HiddenLinks>
  );
};

export default WeddingvendHidenLinks;
