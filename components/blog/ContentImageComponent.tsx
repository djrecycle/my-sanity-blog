import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { getImageDimensions } from "@sanity/asset-utils";

const ContentImageComponent: React.FC<{ value: any }> = ({ value }) => {
  // Check if value is an object and has asset property
  if (typeof value === "object" && value.hasOwnProperty("asset")) {
    const { width, height } = getImageDimensions(value);
    return (
      <Image
        src={urlBuilder(client)
          .image(value)
          .width(800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        width={width}
        height={height}
      />
    );
  } else {
    // Return null or fallback component if value is not valid
    return null;
  }
};

export default ContentImageComponent;
