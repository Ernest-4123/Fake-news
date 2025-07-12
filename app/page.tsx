import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="font-semibold text-lg">Fake News Detector</div>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-900 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-gray-900">
            About
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Detect Fake News with AI</h1>
          <p className="text-gray-600 text-lg mb-8">
            Our advanced AI analyzes news articles to help you identify potentially misleading information.
          </p>
          <Link href="/analyze">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-md">
              Start Analyzing
            </Button>
          </Link>
        </div>

        {/* How It Works Section */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-sm text-gray-500 mb-2">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced AI Analysis</h3>
              <p className="text-gray-600">
                Our system uses natural language processing and machine learning to analyze news content for signs of
                misinformation.
              </p>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Content Analysis</h4>
                <p className="text-gray-600 text-sm">We analyze the language, tone, and claims made in the article.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Source Verification</h4>
                <p className="text-gray-600 text-sm">We check the credibility of the source and author.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Fact Checking</h4>
                <p className="text-gray-600 text-sm">We compare claims against verified facts and trusted sources.</p>
              </div>
            </div>
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
