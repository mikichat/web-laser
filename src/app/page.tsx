'use client'

import './globals.css'
import { EditableText, EditModePanel, ContentProvider } from '@/components/EditableText'

export default function Home() {
  return (
    <ContentProvider>
    <main className="min-h-screen bg-slate-950">
      <EditModePanel />
      
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
              <EditableText id="brand-name" defaultText="레오 레이저" className="text-2xl font-bold text-white" as="span" />
              <span className="block text-xs text-slate-500">LASER CUTTING SERVICE</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-400 hover:text-red-400 transition-colors font-medium">서비스</a>
            <a href="#materials" className="text-slate-400 hover:text-red-400 transition-colors font-medium">가공소재</a>
            <a href="#equipment" className="text-slate-400 hover:text-red-400 transition-colors font-medium">보유장비</a>
            <a href="#contact" className="text-slate-400 hover:text-red-400 transition-colors font-medium">견적문의</a>
            <a href="tel:010-5005-0860" className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-red-500/30 transition-all">
              <EditableText id="phone-nav" defaultText="📞 010-5005-0860" as="span" />
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
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-red-500/50 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <EditableText id="hero-badge" defaultText="ISO 9001 인증 기업" as="span" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <EditableText id="hero-title-1" defaultText="정밀한 절단," as="span" /><br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  <EditableText id="hero-title-2" defaultText="완벽한 품질" as="span" />
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                <EditableText id="hero-desc" defaultText="최신 레이저 장비로 금속, 스테인리스, 알루미늄 등 다양한 소재를 0.01mm 정밀도로 절단합니다." as="span" />
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-red-500/30 transition-all text-center">
                  <EditableText id="hero-cta-1" defaultText="무료 견적 받기" as="span" />
                </a>
                <a href="#services" className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-700 transition-all text-center border border-slate-700">
                  <EditableText id="hero-cta-2" defaultText="서비스 안내" as="span" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center">
                      <div className="text-6xl">⚡</div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full">
                      <div className="w-full h-8 bg-gradient-to-b from-red-500 to-transparent animate-bounce"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-slate-800 rounded-2xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-red-400"><EditableText id="stat-1-num" defaultText="±0.01mm" as="span" /></div>
                <div className="text-slate-500 text-sm"><EditableText id="stat-1-label" defaultText="절단 정밀도" as="span" /></div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-slate-800 rounded-2xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-red-400"><EditableText id="stat-2-num" defaultText="30mm" as="span" /></div>
                <div className="text-slate-500 text-sm"><EditableText id="stat-2-label" defaultText="최대 두께" as="span" /></div>
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
              { id: 'trust-1', number: '15년+', label: '업계 경력', icon: '🏆' },
              { id: 'trust-2', number: '50,000+', label: '누적 작업', icon: '📋' },
              { id: 'trust-3', number: '24시간', label: '가동 체제', icon: '⏰' },
              { id: 'trust-4', number: '99.9%', label: '품질 합격률', icon: '✅' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">
                  <EditableText id={`${stat.id}-num`} defaultText={stat.number} as="span" />
                </div>
                <div className="text-slate-500">
                  <EditableText id={`${stat.id}-label`} defaultText={stat.label} as="span" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <EditableText id="services-title" defaultText="레이저 가공 서비스" as="span" />
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              <EditableText id="services-desc" defaultText="다양한 레이저 가공 서비스로 고객의 요구에 맞는 최적의 솔루션을 제공합니다" as="span" />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'svc-1',
                icon: '🔥',
                title: '레이저 절단',
                desc: '파이버 레이저로 복잡한 형상도 정밀하게 절단',
                features: ['금속판 절단', '복잡 형상 가공', '대량 생산 가능']
              },
              {
                id: 'svc-2',
                icon: '✏️',
                title: '레이저 마킹',
                desc: '영구적인 마킹으로 로고, 시리얼 번호 각인',
                features: ['로고 각인', '바코드/QR', '내구성 우수']
              },
              {
                id: 'svc-3',
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
                <h3 className="text-2xl font-bold text-white mb-3">
                  <EditableText id={`${service.id}-title`} defaultText={service.title} as="span" />
                </h3>
                <p className="text-slate-400 mb-6">
                  <EditableText id={`${service.id}-desc`} defaultText={service.desc} as="span" />
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-500">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <EditableText id={`${service.id}-feat-${idx}`} defaultText={feature} as="span" />
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
            <h2 className="text-4xl font-bold text-white mb-4">
              <EditableText id="materials-title" defaultText="가공 가능 소재" as="span" />
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              <EditableText id="materials-desc" defaultText="다양한 금속 및 비금속 소재의 레이저 가공이 가능합니다" as="span" />
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { id: 'mat-1', name: '철판 (SS400)', thickness: '~25mm', color: 'from-gray-600 to-gray-700' },
              { id: 'mat-2', name: '스테인리스', thickness: '~20mm', color: 'from-slate-400 to-slate-500' },
              { id: 'mat-3', name: '알루미늄', thickness: '~15mm', color: 'from-blue-400 to-blue-500' },
              { id: 'mat-4', name: '동판', thickness: '~10mm', color: 'from-orange-400 to-orange-500' },
              { id: 'mat-5', name: '황동', thickness: '~8mm', color: 'from-yellow-500 to-yellow-600' },
              { id: 'mat-6', name: '아연판', thickness: '~5mm', color: 'from-zinc-400 to-zinc-500' },
            ].map((material, index) => (
              <div key={index} className="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-red-500/30 transition-all text-center group cursor-pointer">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${material.color} group-hover:scale-110 transition-transform`}></div>
                <h4 className="font-bold text-white mb-1">
                  <EditableText id={`${material.id}-name`} defaultText={material.name} as="span" />
                </h4>
                <p className="text-sm text-slate-500">
                  <EditableText id={`${material.id}-thick`} defaultText={material.thickness} as="span" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <EditableText id="equip-title" defaultText="최신 보유 장비" as="span" />
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              <EditableText id="equip-desc" defaultText="세계적인 레이저 장비 제조사의 최신 기종을 보유하고 있습니다" as="span" />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'eq-1', name: 'TRUMPF TruLaser 5030', type: '파이버 레이저', power: '12kW', size: '3000 x 1500mm', feature: '고출력 파이버' },
              { id: 'eq-2', name: 'AMADA ENSIS-3015AJ', type: '파이버 레이저', power: '9kW', size: '3000 x 1500mm', feature: '고속 절단' },
              { id: 'eq-3', name: 'BYSTRONIC ByStar Fiber', type: '파이버 레이저', power: '6kW', size: '4000 x 2000mm', feature: '대형 판재' },
            ].map((equip, index) => (
              <div key={index} className="relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 overflow-hidden group">
                <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">
                  <EditableText id={`${equip.id}-power`} defaultText={equip.power} as="span" />
                </div>
                
                <div className="aspect-video bg-slate-700/50 rounded-2xl mb-6 flex items-center justify-center border border-slate-600">
                  <div className="text-5xl">🏭</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  <EditableText id={`${equip.id}-name`} defaultText={equip.name} as="span" />
                </h3>
                <p className="text-red-400 text-sm font-medium mb-4">
                  <EditableText id={`${equip.id}-type`} defaultText={equip.type} as="span" />
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>가공 크기</span>
                    <span className="text-white"><EditableText id={`${equip.id}-size`} defaultText={equip.size} as="span" /></span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>특징</span>
                    <span className="text-white"><EditableText id={`${equip.id}-feat`} defaultText={equip.feature} as="span" /></span>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              <EditableText id="process-title" defaultText="작업 프로세스" as="span" />
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              <EditableText id="process-desc" defaultText="체계적인 프로세스로 빠르고 정확한 납품을 약속드립니다" as="span" />
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { id: 'proc-1', step: '01', title: '문의', desc: '도면/수량 전달', icon: '📝' },
              { id: 'proc-2', step: '02', title: '견적', desc: '당일 견적 발송', icon: '💰' },
              { id: 'proc-3', step: '03', title: '확정', desc: '주문 및 결제', icon: '✅' },
              { id: 'proc-4', step: '04', title: '가공', desc: '정밀 레이저 가공', icon: '⚡' },
              { id: 'proc-5', step: '05', title: '납품', desc: '검수 후 출하', icon: '🚚' },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center hover:border-red-500/50 transition-all">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="text-red-400 text-sm font-bold mb-2">{process.step}</div>
                  <h4 className="text-white font-bold mb-1">
                    <EditableText id={`${process.id}-title`} defaultText={process.title} as="span" />
                  </h4>
                  <p className="text-slate-500 text-sm">
                    <EditableText id={`${process.id}-desc`} defaultText={process.desc} as="span" />
                  </p>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              <EditableText id="cta-title" defaultText="견적 문의" as="span" />
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              <EditableText id="cta-desc" defaultText="도면을 보내주시면 당일 내 정확한 견적을 보내드립니다" as="span" />
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="tel:02-1234-5678" className="px-10 py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <EditableText id="cta-phone" defaultText="010-5005-0860" as="span" />
              </a>
              <a href="mailto:quote@lasertech.kr" className="px-10 py-5 bg-slate-800 text-white rounded-xl font-bold text-xl hover:bg-slate-700 transition-all border border-slate-700">
                <EditableText id="cta-email-btn" defaultText="📧 이메일 견적" as="span" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span> <EditableText id="cta-f1" defaultText="CAD 도면 접수" as="span" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span> <EditableText id="cta-f2" defaultText="당일 견적" as="span" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span> <EditableText id="cta-f3" defaultText="소량 주문 가능" as="span" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span> <EditableText id="cta-f4" defaultText="전국 배송" as="span" />
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
                <span className="text-xl font-bold text-white">
                  <EditableText id="footer-brand" defaultText="레오 레이저" as="span" />
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                <EditableText id="footer-desc" defaultText="15년 경력의 레이저 가공 전문 기업. 정밀함과 신뢰를 최우선으로 합니다." as="span" />
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
                <li>📞 대표번호: <EditableText id="footer-phone" defaultText="010-5005-0860" as="span" /></li>
                <li>📠 팩스: <EditableText id="footer-fax" defaultText="" as="span" /></li>
                <li>📧 <EditableText id="footer-email" defaultText="" as="span" /></li>
                <li>📍 <EditableText id="footer-address" defaultText="경기도 파주시 광탄면 장지산로 368번길 69-69" as="span" /></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">© 2026 Leo Laser. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-red-400 transition-colors">이용약관</a>
              <a href="#" className="hover:text-red-400 transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-red-400 transition-colors">사업자정보확인</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </ContentProvider>
  )
}
