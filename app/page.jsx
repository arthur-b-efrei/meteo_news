'use client'
import Header from '@/components/header.jsx';
import Act from '@/components/Act.jsx';
import Direct from '@/components/Direct.jsx';
import Previsions from '@/components/Prev.jsx';
import Prev from '@/components/Prev.jsx';
import Script from 'next/script';
export default function Home() {
  return (
    <body>
    <Header />
    <Act />
    <Direct />
    <Prev/>
     <Script src="index.js"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></Script>
</body>
  )
}