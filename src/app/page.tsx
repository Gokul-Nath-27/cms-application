import { Metadata } from "next"
import Header from "@/components/Header"
import CollectionMenu from "@/components/CollectionMenu"

export const metadata: Metadata = {
  title: 'Collections',
  description: 'All Media Content Collections',
}


export default function Collections() {
  return (
    <>
      <Header />
      <CollectionMenu />
    </>
  )
}
