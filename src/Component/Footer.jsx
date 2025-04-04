import React from 'react'

export default function tooter() {
  return (
    <div>
    <footer className="bg-gray-800 p-4 text-center text-white mt-8 w-full fixed bottom-0 h-20"> {/* Removed container mx-auto, added w-full */}
      <div className="w-full"> {/* added w-full to the inner div to ensure it also takes the width */}
        <p>&copy; {new Date().getFullYear()} Movie Website. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="text-gray-300 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-300 hover:text-white mx-2">Terms of Service</a>
          <a href="/contact" className="text-gray-300 hover:text-white mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
    </div>
  )
}
