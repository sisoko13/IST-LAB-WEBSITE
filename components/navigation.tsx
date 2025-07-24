import dynamic from 'next/dynamic'

const NavigationClient = dynamic(() => import('./navigation-client'), {
  ssr: false
})

export default function Navigation() {
  return <NavigationClient />
}