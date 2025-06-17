import { Metadata } from "next"
import Header from "@/components/Header"
import CollectionFilterBar from "@/components/CollectionFilterBar"
import { css } from "../../styled-system/css"
import CollectionGrid from "@/components/CollectionGrid"

export const metadata: Metadata = {
  title: 'Collections',
  description: 'All Media Content Collections',
}

export default function Collections() {
  return (
    <div className={css({ height: '100%', display: 'flex', flexDirection: 'column' })}>
      <Header />
      <CollectionFilterBar />
      <CollectionGrid />
    </div>
  )
}
