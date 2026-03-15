'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '~/app/_component/ui'
import { sendEmail } from '~/app/contact/_comoponent/send-email/actions'
import { initialState } from '~/app/contact/_comoponent/send-email/state'

const labelStyle = 'text-sm font-bold text-slate-500'

const inputStyle = `
  flex h-10 w-full rounded-md px-3 py-2 text-foreground
  border border-slate-400 bg-background ring-offset-background
  placeholder:text-slate-500 file:text-sm file:font-medium
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500
  file:border-0 file:bg-transparent
  disabled:cursor-not-allowed disabled:opacity-50
`
const textareaStyle = `
  ${inputStyle}
  h-[160px] md:h-[200px] resize-y
`

const FormButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" isLoading={pending}>
      {pending ? '送信中...' : '送信'}
    </Button>
  )
}

export const ContactForm = () => {
  const [formState, formDispatch] = useActionState(sendEmail, initialState)

  return (
    <form action={formDispatch}>
      <div className="grid gap-4 md:gap-8">
        <div className="grid gap-1">
          <label className={labelStyle} htmlFor="name">
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            maxLength={256}
            required={true}
            className={inputStyle}
            placeholder="例：山田 太郎"
          />
        </div>
        <div className="grid gap-1">
          <label className={labelStyle} htmlFor="company">
            会社名（任意）
          </label>
          <input
            type="text"
            id="company"
            name="company"
            maxLength={256}
            className={inputStyle}
            placeholder="例：株式会社○○"
          />
        </div>
        <div className="grid gap-1">
          <label className={labelStyle} htmlFor="email">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={256}
            required={true}
            className={inputStyle}
            placeholder="例：taro@example.com"
          />
        </div>
        <div className="grid gap-1">
          <label className={labelStyle} htmlFor="inquiry-type">
            ご相談内容の種類（任意）
          </label>
          <select
            id="inquiry-type"
            name="inquiryType"
            className={inputStyle}
          >
            <option value="">選択してください</option>
            <option value="monthly">IT顧問（月額プラン）について</option>
            <option value="spot">スポット開発について</option>
            <option value="consulting">ITに関する相談</option>
            <option value="other">その他</option>
          </select>
        </div>
        <div className="grid gap-1">
          <label className={labelStyle} htmlFor="message">
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            maxLength={1024}
            required={true}
            className={textareaStyle}
            placeholder={'例：社内のIT環境を整備したいのですが、何から手をつければいいかわかりません。一度相談に乗っていただけますか？'}
          />
        </div>
        <div className="flex justify-between">
          <FormButton />
          <button type="reset" className="text-navy-500 hover:text-navy-600">
            フォームをクリア
          </button>
        </div>
        {formState.message && <p className="text-sm text-red-500">{formState.message}</p>}
      </div>
    </form>
  )
}
