import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "StudyGuard – AI Coach That Prevents Student Procrastination",
  description: "Monitors study patterns and sends personalized interventions before procrastination spirals begin. For college students and parents."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="43797441-9fd9-4390-97e5-80280c004509"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
