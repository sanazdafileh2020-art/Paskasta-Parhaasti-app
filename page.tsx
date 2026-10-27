import Link from "next/link";
import { topics } from "@/lib/words";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10">
      <header className="mb-10 text-center">
        <p className="mb-3 inline-block rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white">
          18+ · Educational humour
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Paska, Paskempi, Paskin
        </h1>
        <p className="mt-1 text-lg font-medium text-blue-800 dark:text-blue-300">
          suomen kielen opiskelusovellus
        </p>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          Learn Finnish through swear words, slang and culture notes. Understand how Finns
          really talk and when to keep it to yourself.
        </p>
        <p
          dir="rtl"
          lang="fa"
          className="mx-auto mt-2 max-w-xl text-zinc-600 dark:text-zinc-400"
        >
          فنلاندی را از راه فحش‌ها و اصطلاحات روزمره یاد بگیر و بفهم فنلاندی‌ها واقعاً چطور حرف
          می‌زنند.
        </p>
      </header>

      <section aria-labelledby="topics-heading">
        <h2 id="topics-heading" className="mb-4 text-xl font-bold">
          Choose a topic
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {topics.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/lessons/${t.slug}`}
                className="flex h-full flex-col rounded-2xl border border-blue-200 bg-blue-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-700 dark:border-blue-900 dark:bg-blue-950/40"
              >
                <span className="text-3xl" aria-hidden="true">
                  {t.emoji}
                </span>
                <span className="mt-2 text-lg font-bold">{t.title.fi}</span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {t.title.en} ·{" "}
                  <span dir="rtl" lang="fa">
                    {t.title.fa}
                  </span>
                </span>
                <span className="mt-3 text-xs font-medium text-blue-800 dark:text-blue-300">
                  {t.words.length} words
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 text-center">
        <Link
          href="/quiz"
          className="inline-block rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Start the quiz →
        </Link>
      </div>

      <footer className="mt-14 border-t border-zinc-200 pt-4 text-center text-xs text-zinc-500 dark:border-zinc-800">
        Every word has a safe-to-use tag and a polite alternative. Use your judgement. Finns
        appreciate honesty, but not at the job interview.
      </footer>
    </main>
  );
}
