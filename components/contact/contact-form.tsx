"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In a real app, this would submit to an API
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-sm"
    >
      <p className="text-sm text-muted-foreground">
        如有任何问题或建议，欢迎通过以下表单联系我们，我们将尽快回复。
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-medium text-card-foreground">
            姓名 <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="请输入您的姓名"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-xs font-medium text-card-foreground">
            电话
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="请输入您的联系电话"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-xs font-medium text-card-foreground">
          邮箱 <span className="text-destructive">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="请输入您的邮箱地址"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-xs font-medium text-card-foreground">
          主题 <span className="text-destructive">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">请选择留言主题</option>
          <option value="general">一般咨询</option>
          <option value="activity">活动咨询</option>
          <option value="culture">文化交流</option>
          <option value="visit">参观预约</option>
          <option value="suggestion">意见建议</option>
          <option value="other">其他</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-xs font-medium text-card-foreground">
          留言内容 <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="请输入您的留言内容"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Send size={16} />
        提交留言
      </button>

      {submitted && (
        <p className="text-sm text-primary">您的留言已提交成功，我们将尽快回复！</p>
      )}
    </form>
  )
}
