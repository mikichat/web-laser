export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <title>리프트업 - 지게차 임대 전문 | 전국 당일배송</title>
        <meta name="description" content="20년 전통의 지게차 임대 전문 기업. 전동, 디젤, LPG 지게차 500대 이상 보유. 단기/장기 임대, 운전원 파견 서비스. 전국 당일 배송 가능." />
        <meta name="keywords" content="지게차 임대, 지게차 렌탈, 포크리프트 임대, 전동지게차, 디젤지게차, 지게차 대여" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="리프트업 - 지게차 임대 전문" />
        <meta property="og:description" content="20년 전통의 지게차 임대 전문 기업. 전국 당일 배송 가능." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
