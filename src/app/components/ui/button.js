"use client"; // Marca este componente como un Client Component

export default function Button({ className, onClick, children }) {
  return (
    <button
      className={`rounded-full bg-gray-800 border-4 border-gray-600 shadow-lg hover:border-blue-500 hover:shadow-blue-500/50 transition-all duration-200 ease-in-out flex items-center justify-center ${className}`}
      onClick={onClick}
      style={{
        width: "50px",
        height: "50px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-500 shadow-inner"
        style={{
          boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        {children}
      </div>
    </button>
  );
}