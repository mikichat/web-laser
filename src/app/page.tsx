import './globals.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">레이저테크</span>
              <span className="block text-xs text-slate-500">LASER CUTTING SERVICE</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-400 hover:text-red-400 transition-colors font-medium">서비스</a>
            <a href="#materials" className="text-slate-400 hover:text-red-400 transition-colors font-medium">가공소재</a>
            <a href="#equipment" className="text-slate-400 hover:text-red-400 transition-colors font-medium">보유장비</a>
            <a href="#contact" className="text-slate-400 hover:text-red-400 transition-colors font-medium">견적문의</a>
            <a href="tel:02-1234-5678" className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-red-500/30 transition-all">
              📞 02-1234-5678
            </a>
          </div>

          <button className="md:hidden p-2 text-slate-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          {/* Laser beam effect */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-red-500/50 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                ISO 9001 인증 기업
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                정밀한 절단,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  완벽한 품질
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                최신 파이버 레이저 장비로 금속, 스테인리스, 알루미늄 등<br/>
                다양한 소재를 0.01mm 정밀도로 절단합니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-red-500/30 transition-all text-center">
                  무료 견적 받기
                </a>
                <a href="#services" className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-700 transition-all text-center border border-slate-700">
                  서비스 안내
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Laser cutting visualization */}
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center">
                      <div className="text-6xl">⚡</div>
                    </div>
                    {/* Laser beam animation */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full">
                      <div className="w-full h-8 bg-gradient-to-b from-red-500 to-transparent animate-bounce"></div>
                    </div>
                  </div>
                </div>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 bg-slate-800 rounded-2xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-red-400">±0.01mm</div>
                <div className="text-slate-500 text-sm">절단 정밀도</div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-slate-800 rounded-2xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-red-400">30mm</div>
                <div className="text-slate-500 text-sm">최대 두께</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15년+', label: '업계 경력', icon: '🏆' },
              { number: '50,000+', label: '누적 작업', icon: '📋' },
              { number: '24시간', label: '가동 체제', icon: '⏰' },
              { number: '99.9%', label: '품질 합격률', icon: '✅' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">레이저 가공 서비스</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              다양한 레이저 가공 서비스로 고객의 요구에 맞는 최적의 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔥',
                title: '레이저 절단',
                desc: '파이버 레이저로 복잡한 형상도 정밀하게 절단',
                features: ['금속판 절단', '복잡 형상 가공', '대량 생산 가능']
              },
              {
                icon: '✏️',
                title: '레이저 마킹',
                desc: '영구적인 마킹으로 로고, 시리얼 번호 각인',
                features: ['로고 각인', '바코드/QR', '내구성 우수']
              },
              {
                icon: '🔧',
                title: '레이저 용접',
                desc: '미세 정밀 용접으로 깔끔한 마감 처리',
                features: ['정밀 용접', '최소 열변형', '후가공 불필요']
              },
            ].map((service, index) => (
              <div key={index} className="group p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-red-500/50 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-500">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">가공 가능 소재</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              다양한 금속 및 비금속 소재의 레이저 가공이 가능합니다
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: '철판 (SS400)', thickness: '~25mm', color: 'from-gray-600 to-gray-700' },
              { name: '스테인리스', thickness: '~20mm', color: 'from-slate-400 to-slate-500' },
              { name: '알루미늄', thickness: '~15mm', color: 'from-blue-400 to-blue-500' },
              { name: '동판', thickness: '~10mm', color: 'from-orange-400 to-orange-500' },
              { name: '황동', thickness: '~8mm', color: 'from-yellow-500 to-yellow-600' },
              { name: '아연판', thickness: '~5mm', color: 'from-zinc-400 to-zinc-500' },
            ].map((material, index) => (
              <div key={index} className="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-red-500/30 transition-all text-center group cursor-pointer">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${material.color} group-hover:scale-110 transition-transform`}></div>
                <h4 className="font-bold text-white mb-1">{material.name}</h4>
                <p className="text-sm text-slate-500">{material.thickness}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">최신 보유 장비</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              세계적인 레이저 장비 제조사의 최신 기종을 보유하고 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'TRUMPF TruLaser 5030',
                type: '파이버 레이저',
                power: '12kW',
                size: '3000 x 1500mm',
                feature: '고출력 파이버'
              },
              {
                name: 'AMADA ENSIS-3015AJ',
                type: '파이버 레이저',
                power: '9kW',
                size: '3000 x 1500mm',
                feature: '고속 절단'
              },
              {
                name: 'BYSTRONIC ByStar Fiber',
                type: '파이버 레이저',
                power: '6kW',
                size: '4000 x 2000mm',
                feature: '대형 판재'
              },
            ].map((equip, index) => (
              <div key={index} className="relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 overflow-hidden group">
                {/* Power indicator */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">
                  {equip.power}
                </div>
                
                <div className="aspect-video bg-slate-700/50 rounded-2xl mb-6 flex items-center justify-center border border-slate-600">
                  <div className="text-5xl">🏭</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{equip.name}</h3>
                <p className="text-red-400 text-sm font-medium mb-4">{equip.type}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>가공 크기</span>
                    <span className="text-white">{equip.size}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>특징</span>
                    <span className="text-white">{equip.feature}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">작업 프로세스</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              체계적인 프로세스로 빠르고 정확한 납품을 약속드립니다
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '01', title: '문의', desc: '도면/수량 전달', icon: '📝' },
              { step: '02', title: '견적', desc: '당일 견적 발송', icon: '💰' },
              { step: '03', title: '확정', desc: '주문 및 결제', icon: '✅' },
              { step: '04', title: '가공', desc: '정밀 레이저 가공', icon: '⚡' },
              { step: '05', title: '납품', desc: '검수 후 출하', icon: '🚚' },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center hover:border-red-500/50 transition-all">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="text-red-400 text-sm font-bold mb-2">{process.step}</div>
                  <h4 className="text-white font-bold mb-1">{process.title}</h4>
                  <p className="text-slate-500 text-sm">{process.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 text-slate-600">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl border border-red-500/20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">견적 문의</h2>
            <p className="text-slate-400 mb-8 text-lg">
              도면을 보내주시면 당일 내 정확한 견적을 보내드립니다
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="tel:02-1234-5678" className="px-10 py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all flex items-center gap-3">
                <span className="text-2xl">📞</span>
                02-1234-5678
              </a>
              <a href="mailto:quote@lasertech.kr" className="px-10 py-5 bg-slate-800 text-white rounded-xl font-bold text-xl hover:bg-slate-700 transition-all border border-slate-700">
                📧 이메일 견적
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span> CAD 도면 접수
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span> 당일 견적
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span> 소량 주문 가능
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span> 전국 배송
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">레이저테크</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                15년 경력의 레이저 가공 전문 기업<br/>
                정밀함과 신뢰를 최우선으로 합니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-red-400 transition-colors">레이저 절단</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">레이저 마킹</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">레이저 용접</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">판금 가공</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-red-400 transition-colors">견적 문의</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">도면 가이드</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">오시는 길</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">연락처</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>📞 대표번호: 02-1234-5678</li>
                <li>📠 팩스: 02-1234-5679</li>
                <li>📧 quote@lasertech.kr</li>
                <li>📍 경기도 시흥시 정왕동 공단로 123</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">© 2026 레이저테크. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-red-400 transition-colors">이용약관</a>
              <a href="#" className="hover:text-red-400 transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-red-400 transition-colors">사업자정보확인</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
