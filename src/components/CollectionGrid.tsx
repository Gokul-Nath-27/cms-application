
"use client"
import { useActiveTab } from "@/store/tabNavigation";
import { css } from "../../styled-system/css"
import Card from "./Card"
import { useCollections } from "@/store/collections";
import { useMemo } from "react";
import { useSearch } from "@/store/search";

const CollectionGrid = () => {
  const collections = useCollections()
  const activeTab = useActiveTab()
  const searchTerm = useSearch()

  const filteredCollections = useMemo(() => {
    return collections
      .filter((item) => activeTab.type === 'all' || item.type === activeTab.type)
      .filter((item) => {
        console.log(item.title.toLowerCase())
        return item.title.toLowerCase().includes(searchTerm.toLowerCase())
      })
  }, [collections, activeTab, searchTerm])

  return (
    <div className={css({
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(284px, 1fr))',
      gap: '27px',
      overflow: 'auto',
      scrollbarWidth: '0'
    })}>
      {filteredCollections.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  )
}

export default CollectionGrid