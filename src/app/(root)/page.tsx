import {
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    icon: ComputerDesktopIcon,
    title: '新規システム・アプリ開発',
    description:
      '「こんなシステムがほしい」をカタチにします。業務管理、予約システム、社内ツール、Webサイトなど、ゼロからの開発をお任せください。',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: '既存システムの保守・改善',
    description:
      '今使っているシステムの不具合対応や機能追加、リニューアルに対応します。「前の担当者がいなくなって困っている」といったケースもご相談ください。',
  },
  {
    icon: BoltIcon,
    title: '業務効率化・DX推進',
    description:
      'Excel手作業の自動化、ペーパーレス化、クラウド移行など、日々の業務を楽にする仕組みづくり。PC・IT環境の整備もお手伝いします。',
  },
  {
    icon: SparklesIcon,
    title: 'AI導入支援',
    description:
      'ChatGPTなどのAIツール活用から、業務に合わせたAI機能の組み込みまで。「AIで何かできないか？」という段階からご相談いただけます。',
  },
  {
    icon: CpuChipIcon,
    title: 'AI開発支援',
    description:
      '社内でAIを活用した開発を始めたい方をサポートします。AI駆動の開発環境構築、プロンプト設計、社内エンジニアへの技術指導まで対応します。',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'IT顧問・なんでも相談',
    description:
      '「ITのことは全部お願いしたい」に応えます。システム選定、セキュリティ、ベンダーとのやりとり代行など、御社のIT担当としてサポートします。',
  },
]

const plans = [
  {
    name: 'IT顧問ライト',
    price: '15万円〜',
    description: 'ITの相談相手がいない。何かあったとき聞ける人がほしい。',
    features: [
      'ITに関する相談（チャット・メールで随時）',
      '月1〜2回のオンライン定例',
      'システム・ツール選定のアドバイス',
      'ベンダーとのやりとり代行',
      'トラブル時の対応・調査',
      'セキュリティの簡易チェック',
    ],
    recommended: false,
  },
  {
    name: 'IT顧問スタンダード',
    price: '25万円〜',
    description: '相談だけでなく、実際に手を動かして改善してほしい。',
    features: [
      'ライトプランの内容すべて',
      '業務効率化の提案と実装',
      '既存システムの保守・軽微な改修',
      'AI導入支援（ChatGPT活用、業務AI化）',
      'PC・IT環境の管理サポート',
    ],
    recommended: true,
  },
  {
    name: 'IT顧問プレミアム',
    price: '40万円〜',
    description: '新しいシステムをつくりたい。ITで事業を変えたい。',
    features: [
      'スタンダードプランの内容すべて',
      '新規システム・アプリの設計・開発',
      '大規模な改修・リニューアル',
      'DX戦略の策定と推進',
    ],
    recommended: false,
  },
]

const spotServices = [
  { name: 'Webサイト制作', price: '30万円〜' },
  { name: 'Webアプリ開発', price: '50万円〜' },
  { name: '既存システム改修', price: '20万円〜' },
]

const strengths = [
  {
    title: '外注なし。全工程を一人で完結',
    description:
      '企画・設計・開発・運用のすべてを私一人で担当します。間に別の会社や下請けが入らないので、伝言ゲームになりません。要望がダイレクトに反映されるため、スピードも品質も高く保てます。',
  },
  {
    title: 'なぜ一人でできるのか？',
    description:
      'ソフトウェア開発は、建設や製造業と違い、設備も人手も最小限で成り立つ仕事です。さらに今はAIの進化により、一人のエンジニアが対応できる範囲が飛躍的に広がっています。少人数だからこそ、低コスト・高品質・素早い対応が可能です。',
  },
  {
    title: '相談しやすい窓口',
    description:
      '専門用語を使わず、わかりやすくご説明します。「何を頼めばいいかわからない」「ITに詳しい人が社内にいない」——そんな状態でもお気軽にご連絡ください。',
  },
  {
    title: '柔軟な契約形態',
    description:
      'プロジェクト単位の請負、月額の顧問契約、チームに入って一緒に進めるスタイルなど、ご状況に合わせた形でお受けします。',
  },
]

const projects = [
  {
    title: 'Tablia',
    description: '個人飲食店向けの予約管理サービス。予約・顧客管理をシンプルに。',
    url: 'https://www.tablia.app',
    image: '/2026/projects/tablia.webp',
  },
  {
    title: '酒学道場',
    description: 'SAKE DIPLOMA試験対策の学習サービス。問題集と学習管理機能を提供。',
    url: 'https://www.sakegaku-dojo.com',
    image: '/2026/projects/sakegaku-dojo.webp',
  },
  {
    title: 'こよいのワイン',
    description: '全国のワインバーを探せる口コミプラットフォーム。12,000件以上の店舗情報を掲載。',
    url: 'https://www.koyoino-wine.com',
    image: '/2026/projects/koyoino-wine.webp',
  },
  {
    title: 'Pitat-AR',
    description: '3DモデルをARで現実空間に配置・共有できるサービス。建築・インテリア業界向け。',
    url: 'https://www.pitat-ar.com',
    image: '/2026/projects/pitat-ar.webp',
  },
]

const careers = [
  {
    period: '2026.1 -',
    company: '株式会社Airion',
    role: '代表取締役',
    description: 'ITコンサルティング・受託開発を手がける自社を設立。中小企業向けにシステム開発からIT顧問まで幅広く支援。',
  },
  {
    period: '2025.1 - 2025.12',
    company: '株式会社Arent',
    role: 'PM / PL',
    description: '大手建設会社向けBIM連携Webシステムの開発プロジェクトを推進。15名規模のチーム（ベトナムオフショア含む）をマネジメント。建築ドメイン知識とIT知識を活かし、顧客と開発チームの橋渡し役として貢献。',
  },
  {
    period: '2023.1 - 2024.12',
    company: '株式会社企ての樹',
    role: 'フルスタックエンジニア / PM',
    description: 'Webアプリの受託開発で、要件定義から設計・開発・運用まで一貫して担当。終活支援サービス、建設会社の基幹システム、モバイルオーダーアプリなど多数のプロジェクトをリード。',
  },
  {
    period: '2020.4 - 2022.12',
    company: '積水ハウス株式会社',
    role: 'IT企画 / PM',
    description: 'ITデザイン部にて基幹システムの企画・PM・設計を担当。300名規模のベンダーコントロール、事業部門との要件調整、DX戦略の立案・推進を経験。',
  },
  {
    period: '2019.4 -',
    company: '個人事業',
    role: 'エンジニア / 技術顧問',
    description: 'Web制作、ECサイト構築、Webアプリ開発、技術顧問など幅広く対応。自社サービスも複数企画・開発・運営中。',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
          ITのこと、
          <br className="md:hidden" />
          まるごとお任せください。
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
          システム開発から保守運用、業務効率化、AI導入まで。
          <br className="hidden md:block" />
          御社の「IT担当」として、なんでもお手伝いします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-block bg-navy-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-600 transition-colors"
          >
            まずは相談してみる
          </Link>
          <a
            href="#services"
            className="inline-block text-navy-500 font-semibold hover:text-navy-600 transition-colors"
          >
            できることを見る &darr;
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 scroll-mt-16">
        <div className="mb-10">
          <p className="text-sm text-navy-500 font-medium tracking-widest mb-2">ABOUT</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">はじめまして</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="shrink-0 mx-auto md:mx-0">
            <Image
              src="/2026/my_face_v2.webp"
              alt="平沼 柊哉"
              width={200}
              height={273}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
          <div className="grid gap-5 text-slate-600 leading-relaxed">
            <p>
              平沼 柊哉（ひらぬま しゅうや）と申します。ソフトウェアエンジニア・プロジェクトマネージャーとして、6年以上の実務経験があります。
            </p>
            <p>
              大手企業のIT部門で数百名規模のプロジェクト推進を経験した後、スタートアップで開発の現場に入り、企画から設計・開発・運用まですべての工程を一人で回せるようになりました。2019年からは個人事業主としても多くの企業様をサポートしています。
            </p>
            <p>
              新しいシステムをつくりたい、今あるシステムを直したい、ITまわりを誰かに任せたい——そんなお悩みがあれば、まずはお気軽にご連絡ください。技術的な専門用語は使わず、わかりやすくご対応いたします。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Services */}
      <section id="services" className="py-16 md:py-24 scroll-mt-16">
        <div className="mb-10">
          <p className="text-sm text-navy-500 font-medium tracking-widest mb-2">SERVICES</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">できること</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <service.icon className="w-8 h-8 text-navy-500 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Plans */}
      <section id="plans" className="py-16 md:py-24 scroll-mt-16">
        <div className="mb-10">
          <p className="text-sm text-navy-500 font-medium tracking-widest mb-2">PLANS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">料金プラン</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-6 flex flex-col ${
                plan.recommended
                  ? 'border-2 border-navy-500 shadow-md'
                  : 'border border-slate-200'
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  おすすめ
                </span>
              )}
              <h3 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h3>
              <p className="text-2xl font-bold text-navy-500 mb-3">
                月額{plan.price}
                <span className="text-xs font-normal text-slate-400 ml-1">（税別）</span>
              </p>
              <p className="text-sm text-slate-500 mb-5">{plan.description}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckIcon className="w-4 h-4 text-navy-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center py-2.5 rounded-lg font-semibold transition-colors ${
                  plan.recommended
                    ? 'bg-navy-500 text-white hover:bg-navy-600'
                    : 'bg-navy-50 text-navy-500 hover:bg-navy-100'
                }`}
              >
                無料で相談する
              </Link>
            </div>
          ))}
        </div>

        {/* Spot */}
        <div className="bg-slate-50 rounded-xl p-6 md:p-8 mb-8">
          <h3 className="text-lg font-bold text-slate-900 mb-1">スポット開発</h3>
          <p className="text-sm text-slate-500 mb-5">特定のプロジェクトだけ依頼したい方向け。単発・見積もりベースで承ります。</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {spotServices.map((item) => (
              <div key={item.name} className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-slate-900 mb-1">{item.name}</p>
                <p className="text-lg font-bold text-navy-500">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-slate-500 space-y-1">
          <p>契約期間の縛りなし。1ヶ月から始められます。</p>
          <p>すべての料金は目安です。ご要望に応じてお見積りいたします。</p>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Strengths */}
      <section className="py-16 md:py-24 scroll-mt-16">
        <div className="mb-10">
          <p className="text-sm text-navy-500 font-medium tracking-widest mb-2">STRENGTHS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">選ばれる理由</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((item) => (
            <div key={item.title} className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24 scroll-mt-16">
        <div className="mb-10">
          <p className="text-sm text-navy-500 font-medium tracking-widest mb-2">PROJECTS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">自社サービス</h2>
        </div>
        <p className="text-slate-600 mb-8 leading-relaxed">
          受託開発だけでなく、自分自身でもサービスを企画・開発・運営しています。
          <br />
          「つくって終わり」ではなく、事業として成長させる視点を持っています。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group block"
            >
              {project.image && (
                <div className="aspect-[1200/630] relative bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-navy-500 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-slate-400 group-hover:text-navy-400 transition-colors">&#8599;</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Career */}
      <section id="career" className="py-16 md:py-24 scroll-mt-16">
        <div className="mb-10">
          <p className="text-sm text-navy-500 font-medium tracking-widest mb-2">CAREER</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">経歴</h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 md:left-[160px]" />
          <div className="grid gap-8">
            {careers.map((career) => (
              <div
                key={career.company}
                className="relative pl-10 md:pl-0 md:grid md:grid-cols-[160px_1fr] md:gap-8"
              >
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-navy-500 border-2 border-white md:left-[157px]" />
                <p className="text-sm text-slate-400 font-medium md:text-right">{career.period}</p>
                <div>
                  <h3 className="font-bold text-slate-900">{career.company}</h3>
                  <p className="text-sm font-medium text-navy-500 mt-0.5">{career.role}</p>
                  <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{career.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Contact CTA */}
      <section className="py-16 md:py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">まずはお気軽にご相談ください</h2>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
          「何を頼めばいいかわからない」でも大丈夫です。
          <br />
          現状をお聞かせいただければ、最適なご提案をいたします。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-navy-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-600 transition-colors"
        >
          お問い合わせはこちら
        </Link>
      </section>
    </div>
  )
}
