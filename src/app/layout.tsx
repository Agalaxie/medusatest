import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={inter.className}>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
