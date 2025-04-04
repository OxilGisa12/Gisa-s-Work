import React from "react";

function Location() {
  return (
    <div className="bg-indigo-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Location</h1>
      <p className="text-lg mb-4">Visit us at our office.</p>
      <p>Address: 123 Main Street, City, Country</p>
      {/* You can add a map embed here if needed */}
    </div>
  );
}

export default Location;