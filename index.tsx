import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, MessageSquare, Search, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">クリニファー</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
              メリット
            </Link>
            <Link href="#products" className="text-sm font-medium hover:underline underline-offset-4">
              製品
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              ご利用の流れ
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              お問い合わせ
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">お問い合わせ</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    医療DXを、もっとシンプルに
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    最適な医療DXソリューションを手間なく見つけるお手伝いをします。導入までの相談は無料です。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">
                      無料相談を始める
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#products">ソリューションを見る</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="デジタルツールを使用する医療専門家"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  メリット
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  医療機関がクリニファーを選ぶ理由
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  複雑な医療DXの世界を、簡単かつ安心して進むお手伝いをします。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 mt-16">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">時間と労力の節約</h3>
                  <p className="text-muted-foreground">
                    膨大な調査は不要です。お客様のニーズに合わせた最適なソリューションをご提案します。
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">簡単な比較検討</h3>
                  <p className="text-muted-foreground">
                    複数のベンダーやソリューションを並べて比較し、適切な判断ができます。
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">完全無料</h3>
                  <p className="text-muted-foreground">
                    製品導入までのコンサルティングサービスは完全無料でご利用いただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  ソリューション
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  現代の医療に必要なデジタルソリューション
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  市場で最高の医療DX製品をご紹介します。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-16 mt-16">
              <div className="flex flex-col space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="電子カルテシステム"
                    className="aspect-video object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">電子カルテ</h3>
                  <p className="text-muted-foreground">
                    医療専門家のために設計された直感的な電子カルテシステムで患者データ管理を効率化します。
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="レセプトコンピュータ"
                    className="aspect-video object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">レセプトコンピュータ</h3>
                  <p className="text-muted-foreground">
                    エラーを減らし効率を高める先進的な請求システムで収益サイクルを最適化します。
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="レセプトチェックシステム"
                    className="aspect-video object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">レセプトチェックツール</h3>
                  <p className="text-muted-foreground">
                    提出前にエラーを検出する高度なレセプト検証システムで正確性とコンプライアンスを確保します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  プロセス
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">コンシェルジュサービスの流れ</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  最適なDXソリューションを見つけるためのシンプルなプロセス。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-4 lg:gap-16 mt-16">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">ご相談</h3>
                  <p className="text-muted-foreground">専門コンサルタントに施設のニーズや課題をお聞かせください。</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">ソリューション提案</h3>
                  <p className="text-muted-foreground">お客様の具体的な要件に合った最適なDX製品を特定します。</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">比較検討</h3>
                  <p className="text-muted-foreground">
                    当社のガイダンスのもと、推奨ソリューションの詳細な比較を確認します。
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">導入支援</h3>
                  <p className="text-muted-foreground">選択したプロバイダーとの導入プロセスをサポートします。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  お客様の声
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">医療専門家に信頼されています</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  クリニファーでの経験についてお客様の声をご紹介します。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-16">
              <div className="flex flex-col space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <p className="text-lg italic">
                    「クリニファーのおかげで、調査やベンダーとの打ち合わせにかかる時間を大幅に削減できました。当院のニーズを完璧に理解し、診療を変革するソリューションを推薦してくれました。」
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">田中 博士</p>
                    <p className="text-sm text-muted-foreground">東京セントラルクリニック</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <p className="text-lg italic">
                    「忙しい薬局として、利用可能なすべてのDXオプションを評価する時間がありませんでした。クリニファーは効率を40％向上させた完璧なソリューションへと導いてくれました。」
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">山田 恵子</p>
                    <p className="text-sm text-muted-foreground">さくら薬局</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    お問い合わせ
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    医療現場の変革を始めませんか？
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    医療DXの専門家チームにお問い合わせください。施設に最適なソリューションを見つけるお手伝いをします。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span className="text-sm">無料相談</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">義務なし</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm">専門家のガイダンス</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">クリニファー株式会社</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} クリニファー株式会社 All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              プライバシーポリシー
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              利用規約
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

