import useQueryContext from '@hooks/useQueryContext'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ThemeSwitch from './ThemeSwitch'
import DialectNotifications from './Dialect'
import { useState } from 'react'
import Image from 'next/image'

const ConnectWalletButtonDynamic = dynamic(
  async () => await import('./ConnectWalletButton'),
  { ssr: false },
)

const navigation = [
  { name: 'Governance', href: 'https://governance.xnetfoundation.org/', external: true },
  { name: 'Staking', href: '/staking', external: false },
  { name: 'Dash', href: 'https://dashboard.xnetfoundation.org/', external: true },
  { name: 'Grants', href: '/grants', external: true },
  { name: 'Merch', href: 'https://fostermarketplace.app/XNET%20Foundation/merch', external: true },
]

const NavBar = () => {
  const { fmtUrlWithCluster } = useQueryContext()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-20 bg-black/70 backdrop-blur-md border-b border-white/[0.1]">
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center">
            <Link href={fmtUrlWithCluster('https://governance.xnetfoundation.org/')}>
              <a className="flex items-center">
                <span className="sr-only">XNET Foundation</span>
                {/* Fixed logo dimensions to maintain aspect ratio */}
                <Image
                  src="/img/XNET-Logo-2x1-1.png"
                  alt="XNET"
                  width={120}
                  height={60}
                  objectFit="contain"
                  priority
                />
              </a>
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold leading-6 text-gray-300 transition hover:text-white"
                >
                  {item.name}
                </a>
              ) : (
                <Link key={item.name} href={item.href}>
                  <a className="text-sm font-semibold leading-6 text-gray-300 transition hover:text-white">
                    {item.name}
                  </a>
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-2 md:space-x-4">
            <a
              className="text-sm font-semibold leading-6 text-gray-300 transition hover:text-white flex items-center"
              href="https://xnet-mobile.gitbook.io/xnet-mobile-docs"
              target="_blank"
              rel="noreferrer"
            >
              <div>Read the Docs</div>
              <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <ThemeSwitch />
            <DialectNotifications />
            <ConnectWalletButtonDynamic />
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Add padding to push content below the navbar */}
      <div className="pt-20"></div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-black/95 backdrop-blur-md px-4 py-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href={fmtUrlWithCluster('/realms')}>
                <a onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">XNET Foundation</span>
                  <Image
                    src="/img/XNET-Logo-2x1-1.png"
                    alt="XNET"
                    width={120}
                    height={60}
                    objectFit="contain"
                  />
                </a>
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 transition hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/5">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    item.external ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 transition hover:bg-white/5 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link key={item.name} href={item.href}>
                        <a 
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 transition hover:bg-white/5 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </Link>
                    )
                  ))}
                  <a
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 transition hover:bg-white/5 hover:text-white"
                    href="https://xnet-mobile.gitbook.io/xnet-mobile-docs"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Read the Docs
                  </a>
                </div>
                <div className="py-6 flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <ThemeSwitch />
                    <DialectNotifications />
                  </div>
                  <ConnectWalletButtonDynamic />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar