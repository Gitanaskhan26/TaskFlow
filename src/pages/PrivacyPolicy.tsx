
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16 flex-1">
        <div className="container px-4 py-12 mx-auto max-w-4xl">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="pl-0 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-sm sm:prose max-w-none text-foreground">
            <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                TaskFlow ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
              <p>
                This Privacy Policy applies to information we collect when you use our website, mobile application, and other online products and services (collectively, the "Services"), or when you otherwise interact with us.
              </p>
              <p>
                By accessing or using our Services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p>
                We may collect personal information that you provide to us such as name, email address, postal address, phone number, and other information you choose to provide.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Usage Information</h3>
              <p>
                We automatically collect certain information about how you interact with our Services. This information may include:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>IP address</li>
                <li>Device information (including device identifiers)</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Pages viewed and time spent</li>
                <li>Links clicked</li>
                <li>Referring website</li>
                <li>Language preferences</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 mt-4">2.3 Cookies and Similar Technologies</h3>
              <p>
                We use cookies, web beacons, pixel tags, and similar technologies to collect information and personalize your experience. You can control cookies through your browser settings and other tools.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p>We may use information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, such as updates, security alerts, and support messages</li>
                <li>Respond to comments, questions, and requests</li>
                <li>Understand how users interact with our Services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Protect our rights and the rights of others</li>
                <li>Personalize your experience</li>
                <li>Measure the effectiveness of our advertising campaigns</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Sharing of Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li><strong>Service providers:</strong> Third parties that perform services on our behalf</li>
                <li><strong>Business partners:</strong> With your consent or as necessary to provide services you've requested</li>
                <li><strong>Legal requirements:</strong> When required by law or to protect rights, privacy, safety, or property</li>
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Storage and Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p className="mt-3">
                The information we collect may be stored and processed in the United States or any other country where we or our service providers maintain facilities.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1 Account Information</h3>
              <p>
                You can review and update your account information by logging into your account. If you need to access, correct, or delete your personal information, please contact us.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-4">6.2 Regional Privacy Rights</h3>
              
              <h4 className="text-lg font-medium mt-3 mb-2">EU/EEA Residents (GDPR)</h4>
              <p>
                If you are a resident of the European Union or European Economic Area, you have certain rights under the General Data Protection Regulation (GDPR), including:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate personal data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restriction of processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right not to be subject to automated decision-making</li>
              </ul>
              
              <h4 className="text-lg font-medium mt-3 mb-2">California Residents (CCPA/CPRA)</h4>
              <p>
                If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Right to know about personal information collected, disclosed, or sold</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination</li>
                <li>Right to correct inaccurate personal information</li>
                <li>Right to limit use and disclosure of sensitive personal information</li>
              </ul>
              
              <h4 className="text-lg font-medium mt-3 mb-2">Canada (PIPEDA)</h4>
              <p>
                Under the Personal Information Protection and Electronic Documents Act (PIPEDA) and similar provincial laws, Canadian residents have the right to access their personal information, correct inaccuracies, and withdraw consent for certain uses and disclosures.
              </p>
              
              <h4 className="text-lg font-medium mt-3 mb-2">India (PDPB)</h4>
              <p>
                Under India's Personal Data Protection Bill (PDPB), you have rights regarding your personal data, including the right to confirmation and access, correction, data portability, and the right to be forgotten.
              </p>
              
              <h4 className="text-lg font-medium mt-3 mb-2">Australia (Privacy Act)</h4>
              <p>
                Under the Australian Privacy Act, you have the right to access your personal information, correct inaccurate information, and complain about privacy breaches.
              </p>
              
              <h4 className="text-lg font-medium mt-3 mb-2">Japan (APPI)</h4>
              <p>
                Under Japan's Act on the Protection of Personal Information (APPI), you have rights to request disclosure of, correction of, addition to, or deletion of your personal information.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
              <p>
                Our Services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If we learn we have collected personal information from a child under 16, we will delete such information.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. If we make material changes, we may provide notice or obtain consent as required by law.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> privacy@taskflow.com<br />
                <strong>Postal Address:</strong> 123 Productivity Ave, Suite 456, San Francisco, CA 94107<br />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law and Dispute Resolution</h2>
              <p>
                This Privacy Policy shall be governed by and construed in accordance with the laws of [Country/State]. Any dispute arising out of or relating to this Privacy Policy shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <footer className="bg-card text-foreground py-8 border-t border-border">
        <div className="container px-4 mx-auto">
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-brand-600 transition-colors mr-4">Privacy Policy</Link>
              <Link to="#" className="hover:text-brand-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
