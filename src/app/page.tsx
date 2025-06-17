import { Metadata } from "next"
import Header from "@/components/Header"
import CollectionMenu from "@/components/CollectionMenu"
import { css } from "../../styled-system/css"
import { mockCollections } from "@/data/mockData"
import Card from "@/components/Card"

export const metadata: Metadata = {
  title: 'Collections',
  description: 'All Media Content Collections',
}

export default function Collections() {
  return (
    <div className={css({ height: '100%', display: 'flex', flexDirection: 'column' })}>
      <Header />
      <CollectionMenu />
      <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(284px, 1fr))', gap: '20px', overflow: 'auto' })}>
        {mockCollections.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </div>
  )
}
