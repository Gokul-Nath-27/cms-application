export const mediaTypes = {
  video: 'Video',
  photo: 'Photo',
  doc: 'Document',
};

export type MediaType = keyof typeof mediaTypes;

export interface CollectionItem {
  id: number;
  title: string;
  type: keyof typeof mediaTypes;
  numberOfItems: number;
  thumbnailUrl: string;
}

export const mockCollections: CollectionItem[] = [
  {
    id: 1,
    title: "Event Video 1",
    type: "video",
    numberOfItems: 12,
    thumbnailUrl: "https://picsum.photos/seed/staticvideo1/300/200",
  },
  {
    id: 2,
    title: "Album 1",
    type: "photo",
    numberOfItems: 25,
    thumbnailUrl: "https://picsum.photos/seed/staticphoto1/300/200",
  },
  {
    id: 3,
    title: "Project Docs 1",
    type: "doc",
    numberOfItems: 8,
    thumbnailUrl: "https://picsum.photos/seed/staticdoc1/300/200",
  },
  {
    id: 4,
    title: "Event Video 2",
    type: "video",
    numberOfItems: 18,
    thumbnailUrl: "https://picsum.photos/seed/staticvideo2/300/200",
  },
  {
    id: 5,
    title: "Album 2",
    type: "photo",
    numberOfItems: 30,
    thumbnailUrl: "https://picsum.photos/seed/staticphoto2/300/200",
  },
  {
    id: 6,
    title: "Project Docs 2",
    type: "doc",
    numberOfItems: 15,
    thumbnailUrl: "https://picsum.photos/seed/staticdoc2/300/200",
  },
  {
    id: 7,
    title: "Event Video 3",
    type: "video",
    numberOfItems: 9,
    thumbnailUrl: "https://picsum.photos/seed/staticvideo3/300/200",
  },
  {
    id: 8,
    title: "Album 3",
    type: "photo",
    numberOfItems: 20,
    thumbnailUrl: "https://picsum.photos/seed/staticphoto3/300/200",
  },
  {
    id: 9,
    title: "Project Docs 3",
    type: "doc",
    numberOfItems: 10,
    thumbnailUrl: "https://picsum.photos/seed/staticdoc3/300/200",
  },
  {
    id: 10,
    title: "Event Video 4",
    type: "video",
    numberOfItems: 14,
    thumbnailUrl: "https://picsum.photos/seed/staticvideo4/300/200",
  },
];

export type GroupedCollections = {
  [key in keyof typeof mediaTypes]?: CollectionItem[];
};

export const groupCollectionsByType = (collections: CollectionItem[]): GroupedCollections => {
  return collections.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    (acc[item.type] as CollectionItem[]).push(item);
    return acc;
  }, {} as GroupedCollections);
};

export const groupedMockCollections: GroupedCollections = groupCollectionsByType(mockCollections);