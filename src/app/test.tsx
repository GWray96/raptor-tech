export default function Test() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind Test</h1>
        <p className="text-gray-700">If you can see this with styling, Tailwind is working correctly!</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200">
          Test Button
        </button>
      </div>
    </div>
  );
} 