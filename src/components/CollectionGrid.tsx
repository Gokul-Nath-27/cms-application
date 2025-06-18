
"use client"
import { motion, AnimatePresence } from "motion/react";
import { useActiveTab } from "@/store/tabNavigation";
import { css } from "../../styled-system/css"
import Card from "./Card"
import { useCollections } from "@/store/collectionStore";
import { useMemo } from "react";
import { useSearch } from "@/store/search";

const CollectionGrid = () => {
  const collections = useCollections()
  const activeTab = useActiveTab()
  const searchTerm = useSearch()

  const filteredCollections = useMemo(() => {
    return collections
      .filter((item) => activeTab.type === 'all' || item.type === activeTab.type)
      .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [collections, activeTab, searchTerm])

  return (
    <motion.div className={css({
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(284px, 1fr))',
      gap: '1.6875rem',
      overflow: 'auto',
      scrollbarWidth: '0',
      height: '100%',
      paddingBlockEnd: '10'
    })}>
      <AnimatePresence>
        {filteredCollections.length > 0 ? (
          filteredCollections.map((item) => (
            <motion.div
              key={item.id}
              layout
            >
              <Card item={item} />
            </motion.div>
          ))
        ) : (
          <NoCollectionFound />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default CollectionGrid

const NoCollectionFound = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gridColumn: '1 / -1',
      })}
    >
      <p className={css({ fontSize: 'lg', fontWeight: 'medium' })}>
        No collections found
      </p>
      <p className={css({ fontSize: 'sm', color: 'gray.500' })}>
        Try adjusting your filters or search term.
      </p>
    </div>
  )
}