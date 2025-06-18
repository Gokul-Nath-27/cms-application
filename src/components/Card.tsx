"use client"
import Image from "next/image";
import { css } from "../../styled-system/css";
import { CollectionItem } from "@/data/mockData";
import { useCollectionsActions, useIsEditing } from "@/store/collectionStore";
import { toBase64, shimmer } from "@/lib/utils";

const Card = ({ item }: { item: CollectionItem }) => {
  const { setEditing, renameCollection, saveRenameCollection } = useCollectionsActions()
  const isEditing = useIsEditing()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      saveRenameCollection();
    }
  }

  return (
    <div className={css({ display: "flex", flexDirection: "column", gap: 3, maxHeight: '18.75rem' })}>
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
      {isEditing
        ? <input
          className={css({
            border: 'none',
            borderBottom: '1px solid #ccc',
            outline: 'none',
            marginInline: '1.5',
            _focus: {
              borderBottomColor: 'hsla(340, 87%, 58%, 0.4)'
            }
          })}
          value={item.title}
          onChange={(e) => renameCollection(item.id, e.target.value)}
          onKeyDown={handleKeyDown}
        />
        : <div className={css({ display: "flex", flexDirection: "column", gap: "2px", paddingInlineStart: '1.5' })}>
          <div
            className={css({
              fontSize: "14px",
              fontWeight: "bold",
              cursor: 'pointer',
              _hover: { textDecoration: 'underline' }
            })}
            onClick={() => setEditing(true)}
          >
            {item.title}
          </div>
          <div className={css({ fontSize: "12px", color: 'var(--text-forground)' })}>{`${item.numberOfItems} items`}</div>
        </div>
      }
    </div>
  );
};

export default Card