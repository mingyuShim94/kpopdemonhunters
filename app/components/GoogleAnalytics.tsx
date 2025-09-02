'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-RCV8M9GTNN'

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialize gtag if it doesn't exist
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.gtag = window.gtag || function(...args: any[]) {
        (window.gtag.q = window.gtag.q || []).push(args)
      }
      window.gtag.l = new Date().getTime()
    }
  }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Type declaration for gtag
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: ((...args: any[]) => void) & {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      q?: any[]
      l?: number
    }
  }
}