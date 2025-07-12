"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AnalyzePage() {
  const [activeTab, setActiveTab] = useState("paste")
  const [content, setContent] = useState("")
  const router = useRouter()

  const handleAnalyze = () => {
    if (content.trim()) {
      router.push("/results")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="font-semibold text-lg">Fake News Detector</div>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-gray-900">
            About
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Analyze Content</h1>

        {/* Analysis Form */}
        <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit Content for Analysis</h2>
            <p className="text-gray-600">
              Paste an article, news snippet, or URL to analyze for potential misinformation
            </p>
          </div>

          {/* Tabs */}
          <div className="flex mb-6">
            <button
              onClick={() => setActiveTab("paste")}
              className={`flex-1 py-3 px-4 text-center border-b-2 font-medium ${
                activeTab === "paste"
                  ? "border-orange-500 text-orange-600 bg-white"
                  : "border-gray-200 text-gray-500 bg-gray-100"
              }`}
            >
              Paste Text
            </button>
            <button
              onClick={() => setActiveTab("upload")}
              className={`flex-1 py-3 px-4 text-center border-b-2 font-medium ${
                activeTab === "upload"
                  ? "border-orange-500 text-orange-600 bg-white"
                  : "border-gray-200 text-gray-500 bg-gray-100"
              }`}
            >
              Upload File
            </button>
          </div>

          {/* Content Input */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              News Content
            </label>
            <Textarea
              id="content"
              placeholder="Paste the news article or content here..."
              className="min-h-[200px] resize-none border-gray-300"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              onClick={handleAnalyze}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md"
              disabled={!content.trim()}
            >
              Start Analyzing
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t mt-16">
        © 2025 FakeNewsGuard. All rights reserved.
      </footer>
    </div>
  )
}
