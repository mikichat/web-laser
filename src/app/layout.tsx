export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <title>레이저테크 - 레이저 절단 가공 전문 | 정밀 금속 가공</title>
        <meta name="description" content="15년 경력의 레이저 절단 전문 기업. 철판, 스테인리스, 알루미늄 등 정밀 레이저 가공. TRUMPF, AMADA 최신 장비 보유. 당일 견적, 전국 배송." />
        <meta name="keywords" content="레이저 절단, 레이저 가공, 금속 가공, 철판 절단, 스테인리스 절단, 알루미늄 가공, 레이저 커팅" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="레이저테크 - 레이저 절단 가공 전문" />
        <meta property="og:description" content="15년 경력의 레이저 절단 전문 기업. 당일 견적, 전국 배송." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-slate-950">{children}</body>
    </html>
  )
}
