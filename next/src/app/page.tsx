import { redirect } from "next/navigation"

export const runtime = "edge"
export const dynamic = "force-dynamic"

export default function Home() {
  redirect("/login")
} 