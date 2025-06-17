import Image from "next/image";
import { css } from "../../styled-system/css";
import { CollectionItem } from "@/data/mockData";

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite" />
</svg>`;

const Card = ({ item }: { item: CollectionItem }) => {
  return (
    <div className={css({ display: "flex", flexDirection: "column", gap: 3 })}>
      <div className={css({
        borderRadius: "10px",
        overflow: "hidden",
      })}>
        <Image
          className={css({
            objectFit: "cover",
            width: "100%",
            height: "100%",
            _hover: {
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out",
            }
          })}
          src={item.thumbnailUrl}
          alt={item.title}
          width={300}
          height={200}
          loading="lazy"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 200))}`}
        />
      </div>
      <div className={css({ display: "flex", flexDirection: "column", gap: "2px", paddingInlineStart: '1.5' })}>
        <div className={css({ fontSize: "14px", fontWeight: "bold", cursor: 'pointer', _hover: { textDecoration: 'underline' } })}>{item.title}</div>
        <div className={css({ fontSize: "12px", color: 'var(--text-forground)' })}>{`${item.numberOfItems} items`}</div>
      </div>
    </div>
  );
};

export default Card