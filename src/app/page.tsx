import './globals.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 12H4v-6h2v2h2v-2h8v2h2v-2h2v6z"/>
              </svg>
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-800">리프트업</span>
              <span className="block text-xs text-slate-500">FORKLIFT RENTAL</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-orange-500 transition-colors font-medium">서비스</a>
            <a href="#fleet" className="text-slate-600 hover:text-orange-500 transition-colors font-medium">보유장비</a>
            <a href="#about" className="text-slate-600 hover:text-orange-500 transition-colors font-medium">회사소개</a>
            <a href="#contact" className="text-slate-600 hover:text-orange-500 transition-colors font-medium">문의하기</a>
            <a href="tel:1588-0000" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all">
              📞 1588-0000
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                전국 당일 배송 가능
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                믿을 수 있는<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  지게차 임대 전문
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                20년 경력의 전문가가 현장에 맞는 최적의 장비를 추천해드립니다.<br/>
                단기/장기 임대, 운전원 포함 서비스까지 원스톱으로 제공합니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1588-0000" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all text-center">
                  무료 상담 신청
                </a>
                <a href="#fleet" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center border border-white/20">
                  보유장비 보기
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl flex items-center justify-center border border-orange-500/30">
                <div className="text-center">
                  <div className="text-8xl mb-4">🚜</div>
                  <p className="text-slate-400">지게차 이미지</p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-slate-600 text-sm">보유 장비 대수</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold text-orange-500">20년</div>
                <div className="text-slate-600 text-sm">업계 경력</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: '보유 장비', icon: '🚜' },
              { number: '3,000+', label: '누적 고객사', icon: '🏢' },
              { number: '24시간', label: '긴급 출동', icon: '⚡' },
              { number: '전국', label: '서비스 지역', icon: '🗺️' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
                <div className="text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">임대 서비스</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              현장 상황과 예산에 맞는 최적의 임대 방식을 선택하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📅',
                title: '단기 임대',
                period: '1일 ~ 1개월',
                price: '일 50,000원~',
                features: ['당일 배송 가능', '최신 장비 보유', '보험 포함'],
                popular: false
              },
              {
                icon: '📆',
                title: '장기 임대',
                period: '1개월 이상',
                price: '월 800,000원~',
                features: ['할인 요금 적용', '정기 점검 무료', '교체 서비스'],
                popular: true
              },
              {
                icon: '👷',
                title: '운전원 포함',
                period: '시간/일 단위',
                price: '시간 30,000원~',
                features: ['숙련된 운전원', '안전 교육 이수', '보험 완비'],
                popular: false
              },
            ].map((service, index) => (
              <div key={index} className={`relative p-8 rounded-3xl transition-all hover:-translate-y-2 ${
                service.popular 
                  ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-2xl shadow-orange-500/30' 
                  : 'bg-white border border-slate-200 hover:shadow-xl'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-900 text-white text-sm font-medium rounded-full">
                    가장 인기
                  </div>
                )}
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className={service.popular ? 'text-orange-100 mb-4' : 'text-slate-500 mb-4'}>{service.period}</p>
                <div className="text-3xl font-bold mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                        service.popular ? 'bg-white/20' : 'bg-orange-100 text-orange-500'
                      }`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  service.popular 
                    ? 'bg-white text-orange-500 hover:bg-orange-50' 
                    : 'bg-slate-100 text-slate-700 hover:bg-orange-500 hover:text-white'
                }`}>
                  견적 문의
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">보유 장비</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              다양한 톤수와 종류의 지게차를 보유하고 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { type: '전동 지게차', tons: '1.5톤 ~ 3톤', image: '🔋', count: '120대' },
              { type: '디젤 지게차', tons: '2톤 ~ 7톤', image: '⛽', count: '200대' },
              { type: 'LPG 지게차', tons: '2톤 ~ 5톤', image: '🔥', count: '150대' },
              { type: '리치 트럭', tons: '1톤 ~ 2.5톤', image: '📦', count: '80대' },
            ].map((equipment, index) => (
              <div key={index} className="group p-6 bg-slate-50 rounded-2xl hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 transition-all cursor-pointer">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{equipment.image}</div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-2">{equipment.type}</h3>
                <p className="text-slate-500 group-hover:text-orange-100 mb-4">{equipment.tons}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 group-hover:bg-white/20 rounded-full text-orange-600 group-hover:text-white text-sm font-medium">
                  {equipment.count} 보유
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">리프트업을 선택하는 이유</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              20년간 쌓아온 신뢰와 전문성으로 최상의 서비스를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: '신속한 배송', desc: '주문 후 24시간 이내 전국 어디든 배송' },
              { icon: '🔧', title: '철저한 정비', desc: '출고 전 50개 항목 안전 점검 실시' },
              { icon: '💰', title: '합리적 가격', desc: '중간 마진 없는 직접 임대 시스템' },
              { icon: '🛡️', title: '안심 보험', desc: '종합보험 가입으로 사고 걱정 無' },
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-colors">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">지금 바로 상담받으세요</h2>
          <p className="text-xl text-orange-100 mb-8">
            전문 상담원이 현장에 맞는 최적의 장비와 견적을 안내해드립니다
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="tel:1588-0000" className="px-10 py-5 bg-white text-orange-500 rounded-xl font-bold text-xl hover:shadow-2xl transition-all flex items-center gap-3">
              <span className="text-2xl">📞</span>
              1588-0000
            </a>
            <a href="mailto:contact@liftup.kr" className="px-10 py-5 bg-white/20 text-white rounded-xl font-bold text-xl hover:bg-white/30 transition-all border-2 border-white/30">
              이메일 문의
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-orange-100">
            <div className="flex items-center gap-2">
              <span>🕐</span> 평일 08:00 ~ 18:00
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span> 전국 출장 서비스
            </div>
            <div className="flex items-center gap-2">
              <span>💬</span> 카카오톡 상담
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">리프트업</span>
              </div>
              <p className="text-sm leading-relaxed">
                20년 전통의 지게차 임대 전문 기업<br/>
                신뢰와 안전을 최우선으로 합니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">단기 임대</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">장기 임대</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">운전원 파견</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">장비 매매</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">임대 절차 안내</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">안전 교육 자료</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">A/S 신청</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">연락처</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 대표번호: 1588-0000</li>
                <li>📠 팩스: 02-1234-5678</li>
                <li>📧 이메일: contact@liftup.kr</li>
                <li>📍 서울시 강남구 테헤란로 123</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© 2026 리프트업. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">이용약관</a>
              <a href="#" className="hover:text-orange-400 transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-orange-400 transition-colors">사업자정보확인</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
