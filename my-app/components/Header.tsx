import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          WiT Awards
        </Link>
      </div>
    </header>
  )
}

