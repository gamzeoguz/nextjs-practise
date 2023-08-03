import React from 'react'
import Link from 'next/link'
import Logo from './logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <>
    <header className='header'>
        <div className="container">
            <div className="logo">
            <Link href="/">
            <Image src={Logo} alt='logo' width={100} height={100} />
            </Link>
            </div>
            <div className="links">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/products">Products</Link>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header