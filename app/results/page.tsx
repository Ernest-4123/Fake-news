import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResultsPage() {
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
        <Link href="/analyze" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Analyze Content</h1>

        {/* Analysis Results */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Analysis Results</h2>
          <p className="text-gray-600 mb-6">Our AI has analyzed the content for signs of misinformation</p>

          {/* Reliability Assessment */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Reliability Assessment</h3>
                <p className="text-gray-600 text-sm">Based on fact-checking and source analysis</p>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-semibold text-lg">Likely True</div>
                <div className="text-green-600 text-sm">12% confidence</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Summary</h4>
              <p className="text-gray-600 text-sm">
                This article contains several claims that contradict verified information from reliable sources.
              </p>
            </div>
          </div>

          {/* Source Verification */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Source Verification</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div>
                  <h4 className="font-semibold text-gray-900">FactCheck.org</h4>
                  <Link href="#" className="text-blue-600 text-sm hover:underline">
                    View source
                  </Link>
                </div>
                <span className="text-red-600 font-medium">False</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div>
                  <h4 className="font-semibold text-gray-900">Reuters Fact Check</h4>
                  <Link href="#" className="text-blue-600 text-sm hover:underline">
                    View source
                  </Link>
                </div>
                <span className="text-yellow-600 font-medium">Misleading</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div>
                  <h4 className="font-semibold text-gray-900">Associated Press</h4>
                  <Link href="#" className="text-blue-600 text-sm hover:underline">
                    View source
                  </Link>
                </div>
                <span className="text-gray-600 font-medium">Unverified</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link href="/analyze">
              <Button variant="outline" className="border-gray-300 bg-transparent">
                Analyze Another
              </Button>
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Download Report</Button>
          </div>
        </div>

        {/* What to do next */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to do next</h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Verify with multiple sources</h3>
                <p className="text-gray-600 text-sm">
                  Check if other reputable news outlets are reporting the same information
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Check the date</h3>
                <p className="text-gray-600 text-sm">
                  Ensure the content is current and not outdated information being presented as new
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Research the author and source</h3>
                <p className="text-gray-600 text-sm">
                  Look into the credibility of who wrote the article and where it was published
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t">
        © 2025 FakeNewsGuard. All rights reserved.
      </footer>
    </div>
  )
}
