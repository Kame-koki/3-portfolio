import { CollapsibleSidebar } from "@/components/CollapsibleSidebar"
import Header from "@/components/ui/Header"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <CollapsibleSidebar />
      <main className="flex-1 p-8 ml-16">
        <Header></Header>
        <h1 className="text-3xl font-bold text-gray-800">ようこそ</h1>
        <p className="mt-4 text-gray-600">
          左側のサイドバーにカーソルを合わせると、メニューが展開されます。
        </p>
      </main>
    </div>
  )
}

