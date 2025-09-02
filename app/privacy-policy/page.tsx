import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | KDH Wiki",
  description: "Privacy Policy for KDH Ranking Filter app - how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/background.webp')",
            filter: "brightness(0.3) saturate(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-900/50 to-cyan-900/70" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-white hover:text-purple-300 transition-colors">
                KDH Wiki
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              KDH Ranking Filter Privacy Policy
            </h1>
            
            <div className="prose prose-invert prose-purple max-w-none">
              <p className="text-purple-300 font-semibold mb-8">
                <strong>Effective Date: September 2, 2025</strong>
              </p>

              <p className="text-gray-200 mb-6">
                KDH Ranking Filter (the &quot;App&quot;) takes your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our face detection mini-game application.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  1. Information We Collect
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">A. Camera and Audio Data</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-white mb-2">Real-time Face Detection</h4>
                    <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                      <li>Live camera feed for face detection and AR filter overlay</li>
                      <li>Facial landmark coordinates (eyes, nose, mouth positions)</li>
                      <li>Processing: Real-time processing only, not stored or transmitted</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-white mb-2">Screen Recording</h4>
                    <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                      <li>Microphone audio during screen recording</li>
                      <li>Processing: Included in recorded videos only, stored locally on your device</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">B. Device Information</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-white mb-2">Automatically Collected</h4>
                    <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                      <li>Device identifiers (Advertising ID)</li>
                      <li>App version and OS version</li>
                      <li>Device model and screen resolution</li>
                      <li>Network connection status</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">C. Usage Analytics</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-white mb-2">Firebase Analytics Data</h4>
                    <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                      <li>Screen visit patterns</li>
                      <li>Feature usage frequency</li>
                      <li>Session duration and patterns</li>
                      <li>Game performance statistics</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-white mb-2">Error Information (Firebase Crashlytics)</h4>
                    <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                      <li>App crash logs and error reports</li>
                      <li>Environment information when errors occur</li>
                      <li>Stack trace data for debugging</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  2. How We Use Your Information
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">A. Core Game Features</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                    <li><strong>Face Detection</strong>: Real-time facial recognition for game mechanics</li>
                    <li><strong>AR Filters</strong>: Overlay character images on detected face regions</li>
                    <li><strong>Screen Recording</strong>: Create gameplay videos for user enjoyment</li>
                    <li><strong>Performance Optimization</strong>: Monitor and improve app performance</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">B. Service Improvement</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                    <li><strong>Analytics</strong>: Understand user behavior to enhance features</li>
                    <li><strong>Error Analysis</strong>: Identify and fix bugs for better stability</li>
                    <li><strong>Performance Monitoring</strong>: Optimize app speed and responsiveness</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">C. Advertising</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                    <li><strong>Personalized Ads</strong>: Show relevant advertisements via Google AdMob</li>
                    <li><strong>Ad Performance</strong>: Measure advertising effectiveness</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  3. Data Retention and Processing
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">A. Real-time Processing Data</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                    <li><strong>Camera Feed</strong>: Processed in real-time, immediately deleted</li>
                    <li><strong>Face Detection Data</strong>: Processed in device memory only, never stored</li>
                    <li><strong>Retention Period</strong>: Deleted immediately after processing</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">B. User-Generated Content</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                    <li><strong>Recorded Videos</strong>: Stored locally on your device only</li>
                    <li><strong>Retention Period</strong>: Until manually deleted by user</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">C. Analytics and Log Data</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                    <li><strong>Firebase Analytics</strong>: Up to 26 months</li>
                    <li><strong>Crashlytics Logs</strong>: Up to 90 days</li>
                    <li><strong>Advertising Data</strong>: According to Google AdMob policies</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  4. Information Sharing and Disclosure
                </h2>
                
                <p className="text-gray-200 mb-4">We only share your information with the following third parties:</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">A. Service Providers</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-white mb-2">Google Firebase/AdMob</h4>
                    <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                      <li>Purpose: App analytics, advertising services, error analysis</li>
                      <li>Data Shared: Device identifiers, usage patterns, error logs</li>
                      <li>Retention: According to respective service policies</li>
                      <li>Opt-out: Available through app settings</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-white mb-2">Google ML Kit</h4>
                    <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                      <li>Purpose: Face detection functionality</li>
                      <li>Data Shared: Camera images (real-time processing only, not stored)</li>
                      <li>Processing: Local on-device processing, no server transmission</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  5. Your Rights and Choices
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">A. Your Rights</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                    <li><strong>Access</strong>: Request information about how your data is processed</li>
                    <li><strong>Correction</strong>: Request correction or deletion of inaccurate information</li>
                    <li><strong>Deletion</strong>: Request deletion of your personal information</li>
                    <li><strong>Processing Restriction</strong>: Request limitation of data processing</li>
                    <li><strong>Compensation</strong>: Seek damages for privacy violations</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">B. How to Exercise Your Rights</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                    <li><strong>App Settings</strong>: Disable data collection, revoke permissions</li>
                    <li><strong>Device Settings</strong>: Manage app permissions, reset advertising ID</li>
                    <li><strong>Contact</strong>: Email us at gguggulab@gmail.com</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  6. Security Measures
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">A. Technical Safeguards</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                    <li><strong>Local Processing</strong>: Sensitive data processed on your device</li>
                    <li><strong>Data Minimization</strong>: Collect only necessary information</li>
                    <li><strong>Encrypted Transmission</strong>: HTTPS for all network communications</li>
                    <li><strong>Limited Access</strong>: Minimal app permissions requested</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">B. Administrative Safeguards</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                    <li><strong>Automatic Deletion</strong>: Data deleted after retention period</li>
                    <li><strong>Regular Monitoring</strong>: Ongoing privacy compliance reviews</li>
                    <li><strong>Security Updates</strong>: Regular security patches and updates</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  7. Children&apos;s Privacy
                </h2>
                <p className="text-gray-200">
                  KDH Ranking Filter does not knowingly collect personal information from children under 13 years of age. If we become aware that a child under 13 has provided us with personal information, we will immediately delete such information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  8. International Data Transfers
                </h2>
                <p className="text-gray-200 mb-4">
                  Some personal information may be transferred to the following countries for service provision:
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                  <li><strong>Google Services</strong>: United States (Firebase, AdMob, ML Kit)</li>
                  <li><strong>Safeguards</strong>: Protected under Google&apos;s privacy policies and security measures</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  9. Contact and Complaints
                </h2>
                <p className="text-gray-200 mb-4">
                  For privacy-related inquiries or complaints, please contact:
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                  <li><strong>App Developer</strong>: gguggulab@gmail.com</li>
                  <li><strong>Data Protection Authorities</strong>: Contact your local data protection authority</li>
                  <li><strong>Google Privacy</strong>: <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  10. Legal Basis for Processing
                </h2>
                <p className="text-gray-200 mb-4">
                  We process your personal information based on:
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                  <li><strong>Legitimate Interest</strong>: For app functionality and improvement</li>
                  <li><strong>Consent</strong>: For analytics and advertising (can be withdrawn)</li>
                  <li><strong>Performance of Service</strong>: For core game features</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-200 mb-4">
                  This Privacy Policy is effective from the date stated above. We will notify users of any material changes to this policy at least 7 days before the changes take effect through app notifications or updates.
                </p>
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">Revision History</h3>
                  <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                    <li><strong>September 2, 2025</strong>: Initial version</li>
                  </ul>
                </div>
              </section>

              <div className="border-t border-white/10 pt-8">
                <p className="text-center text-purple-300 font-medium">
                  This Privacy Policy is designed to protect the privacy of KDH Ranking Filter app users and may be updated in accordance with legal requirements or policy changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}