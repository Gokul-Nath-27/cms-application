const mediaTypes = {
  video: 'Video',
  photo: 'Photo',
  doc: 'Document',
};

export interface CollectionItem {
  title: string;
  type: keyof typeof mediaTypes;
  numberOfItems: number;
  thumbnailUrl: string;
}

export const generateMockCollections = (count: number): CollectionItem[] => {
  const types = Object.keys(mediaTypes) as Array<keyof typeof mediaTypes>;
  const thumbnailUrlPrefix = 'https://picsum.photos/seed/';

  return Array.from({ length: count }, (_, i) => {
    const randomTypeKey = types[Math.floor(Math.random() * types.length)];
    const randomItems = Math.floor(Math.random() * 20) + 5;
    const thumbnailSeed = Math.random().toString(36).substring(7);

    let title: string;
    switch (randomTypeKey) {
      case 'video':
        title = `Event Video ${i + 1}`;
        break;
      case 'photo':
        title = `Album ${i + 1}`;
        break;
      case 'doc':
        title = `Project Docs ${i + 1}`;
        break;
      default:
        throw new Error('Invalid collection type generated');
    }

    return {
      title,
      type: randomTypeKey,
      numberOfItems: randomItems,
      thumbnailUrl: `${thumbnailUrlPrefix}${thumbnailSeed}/300/200`,
    };
  });
};

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

export const mockCollections: CollectionItem[] = generateMockCollections(10);
export const groupedMockCollections: GroupedCollections = groupCollectionsByType(mockCollections);