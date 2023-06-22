
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Trams = () => {
  useTitle("Trams")
    return (
    <div className="container px-10 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-8">Welcome to our food blog website! These terms and conditions outline the rules and regulations for the use of our website.</p>

      <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing and using our website, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you must not use our website.</p>

      <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
      <p className="mb-4">All content on our website, including but not limited to text, images, videos, and audio, is the property of our website and its respective owners. You may not copy, reproduce, distribute, or modify any content without our written consent.</p>

      <h2 className="text-2xl font-bold mb-4">3. User Content</h2>
      <p className="mb-4">Our website allows users to post comments and other content. By posting content on our website, you grant us a non-exclusive, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display your content worldwide in any media.</p>

      <h2 className="text-2xl font-bold mb-4">4. Disclaimer</h2>
      <p className="mb-4">We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of our website or the information, products, services, or related graphics contained on our website. Any reliance you place on such information is strictly at your own risk.</p>

      <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
      <p className="mb-4">In no event shall our website or its owners be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website or the information, products, services, or related graphics contained on our website.</p>

      <h2 className="text-2xl font-bold mb-4">6. Indemnification</h2>
      <p className="mb-4">You agree to indemnify, defend, and hold harmless our website and its owners from any and all claims, damages, liabilities, costs, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our website or your breach of these terms and conditions.</p>

      <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
      <p className="mb-4">We may revise these terms and conditions at any time without notice. By using our website, you agree to be bound by the then-current version of these terms and conditions.</p>
      <Link to="/register" className='p-2 bg-orange-600 text-white rounded-xl'>Go Back to Register</Link>
        </div>
    );
};

export default Trams;