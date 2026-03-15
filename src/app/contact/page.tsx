import { Text, Title } from '~/app/_component/ui'
import { ContactForm } from '~/app/contact/_comoponent/contact-form'

export default function Page() {
  return (
    <div className="grid gap-8 md:gap-12 mt-16">
      <div className="grid gap-1 md:gap-2">
        <Title as="h1" className="">
          Contact
        </Title>
        <Text>お問い合わせはこちらからお願いいたします。</Text>
        <div className="mt-4 bg-navy-50 rounded-lg p-4">
          <p className="text-sm text-navy-700 leading-relaxed">
            通常<strong>24時間以内</strong>にご返信いたします。
            お急ぎの方は、フォーム送信後にオンライン相談の日程調整もご案内いたします。
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}
