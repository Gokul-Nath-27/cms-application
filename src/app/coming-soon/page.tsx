import type { Metadata } from 'next'
import Link from 'next/link'
import { css } from '../../../styled-system/css'

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: 'New features and sections coming soon!',
}

export default function ComingSoon() {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '4',
        paddingRight: '4',
        height: '100%'
      })}
    >
      <div className={css({ textAlign: 'center', maxWidth: 'lg' })}>
        <h1 className={css({ fontSize: '4xl', lineHeight: '4xl', fontWeight: 'bold', marginBottom: '4' })}>
          🚧 Coming Soon
        </h1>
        <p className={css({ fontSize: 'lg', lineHeight: 'lg', marginBottom: '6' })}>
          {"We're working on this section. Stay tuned for something awesome!"}
        </p>
        <Link
          href="/"
          className={css({
            display: 'inline-block',
            backgroundColor: 'white',
            color: 'black',
            paddingLeft: '6',
            paddingRight: '6',
            paddingTop: '2',
            paddingBottom: '2',
            borderRadius: 'lg',
            fontWeight: 'semibold',
            _hover: { backgroundColor: 'gray.200' },
            transitionProperty:
              'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
            transitionTimingFunction: 'transition',
            transitionDuration: 'transition',
          })}
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
