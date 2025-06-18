import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Dr. Sharad Chaturvedi. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-700">
              Contact
            </Link>
            {/* Add other footer links if needed, e.g., Privacy Policy */}
          </div>
        </div>
      </div>
    </footer>
  );
}
