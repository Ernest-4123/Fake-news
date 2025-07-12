import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="font-semibold text-lg">FakeNewsGuard</div>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 font-medium">
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

        {/* About Section */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Fake News Detector</h1>
          <p className="text-gray-600 leading-relaxed">
            Fake News Detector is a tool designed to help people identify potential misinformation and fake news online.
            In today's digital landscape, misleading information can spread rapidly, making it increasingly important to
            have tools that can help verify the credibility of news content.
          </p>
        </section>

        {/* Our Technology Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Technology</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our system uses a combination of natural language processing (NLP) and machine learning algorithms to
            analyze news content for various indicators of potential misinformation:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Linguistic Analysis</h3>
              <p className="text-gray-600 text-sm">
                We analyze the language patterns, emotional tone, and rhetorical devices used in the content that might
                indicate manipulation or bias.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Source Credibility</h3>
              <p className="text-gray-600 text-sm">
                We evaluate the trustworthiness and reliability of the source, author, and publisher based on historical
                accuracy and journalistic standards.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Fact Verification</h3>
              <p className="text-gray-600 text-sm">
                We cross-reference claims with established facts from trusted databases and sources to identify
                inconsistencies or falsehoods.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Contextual Analysis</h3>
              <p className="text-gray-600 text-sm">
                We examine how information is presented in context, looking for cherry-picking of data, missing context,
                or misleading framing.
              </p>
            </div>
          </div>
        </section>

        {/* Limitations Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
          <p className="text-gray-600 mb-4">
            While our tool provides valuable insights, it's important to understand its limitations:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• No automated system can replace critical thinking and human judgment</li>
            <li>• Our analysis provides probabilities, not definitive verdicts on truth</li>
            <li>• The tool works best with English-language content from mainstream sources</li>
            <li>• Some nuanced forms of misinformation may not be detected</li>
          </ul>
        </section>

        {/* Our Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We believe that access to reliable information is essential for a healthy democracy and society. Our mission
            is to empower individuals with tools to make more informed decisions about the content they consume and
            share online.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By providing an accessible way to evaluate news content, we hope to contribute to a more
            information-literate public and reduce the spread of harmful misinformation.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have questions, feedback, or suggestions about Fake News Detector, please contact us at{" "}
            <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
              info@example.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t">
        © 2025 Fake News Detector. All rights reserved.
      </footer>
    </div>
  )
}
