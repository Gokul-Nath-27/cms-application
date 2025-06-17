import { Metadata } from "next"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: 'Collections',
  description: 'All Media Content Collections',
}


export default function Collections() {
  return (
    <Header />
  )
}
