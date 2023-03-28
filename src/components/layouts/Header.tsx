import React, { MetaHTMLAttributes } from 'react'
import Head from 'next/head'

export type HeaderProps = {
  title: string
  description: MetaHTMLAttributes<HTMLMetaElement>['content']
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <Head>
      {!!title && <title>{title}</title>}
      {!!description && <meta name="description" content={description} />}
    </Head>
  )
}

export default Header
