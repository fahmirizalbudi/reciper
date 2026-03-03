import { PiQuestion, PiEnvelope, PiBookOpen, PiChatCircleDots } from "react-icons/pi"

export default function HelpPage() {
  const faqs = [
    { question: "How do I create a new recipe?", answer: "Navigate to the Recipes tab and click the 'New Recipe' button. You can draft, preview, and publish from the editor." },
    { question: "How do I approve or flag a comment?", answer: "Go to the Comments tab. Each comment has approve and delete action buttons. Flagged comments are highlighted in red for quick identification." },
    { question: "How do I manage public user profiles?", answer: "Visit the Users tab to view, edit roles, suspend, or remove registered user accounts. Search by name or @username." },
    { question: "What happens when I publish a recipe?", answer: "Published recipes become visible on the public /recipes explore page and can be discovered by all visitors." }
  ]

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6 max-w-4xl">

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-1">Help & Support</h2>
            <p className="text-muted-foreground">How can we assist you with Reciper today?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-border/40 bg-card p-6 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PiBookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-1">Documentation</h3>
              <p className="text-sm text-muted-foreground">Read our comprehensive guide to managing your recipes.</p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-card p-6 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PiChatCircleDots className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-1">Community Forum</h3>
              <p className="text-sm text-muted-foreground">Ask questions and share tips with other chefs.</p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-card p-6 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PiEnvelope className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-1">Contact Support</h3>
              <p className="text-sm text-muted-foreground">Reach out directly to our customer success team.</p>
            </div>
          </div>

          <div className="mt-2">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <PiQuestion className="w-6 h-6 text-primary" />
              Frequently Asked Questions
            </h3>
            <div className="rounded-2xl border border-border/40 bg-card shadow-sm divide-y divide-border/40">
              {faqs.map((faq, i) => (
                <details key={i} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-base outline-none">
                    {faq.question}
                    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                      <span className="absolute h-0.5 w-4 bg-muted-foreground group-open:bg-primary transition-colors"></span>
                      <span className="absolute h-4 w-0.5 bg-muted-foreground group-open:bg-transparent transition-colors"></span>
                    </span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
