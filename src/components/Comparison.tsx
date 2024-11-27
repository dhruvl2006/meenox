import { Check, X } from "lucide-react";

const comparisonPoints = [
  "Point no one",
  "Point no two this",
  "Point no two this",
  "Point no two this",
  "Point no two this",
];

export function Comparison() {
  return (
    <section className="py-20 px-4" id="comparison">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Why <span className="text-yellow-400">MoonEX</span> ?
        </h2>
        <div className="rounded-lg bg-secondary/50 overflow-auto shadow-xl p-10">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-yellow-400">
                <th className="px-6 py-4 text-left border-r border-gray-700 border-b">
                  Comparison
                </th>
                <th className="px-6 py-4 text-center border-r border-gray-700 border-b">
                  Moonex
                </th>
                <th className="px-6 py-4 text-center text-pink-500 border-b border-gray-700">
                  Uniswap
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonPoints.map((point, index) => (
                <tr
                  key={index}
                  className={`  hover:bg-secondary hover:cursor-pointer transition-colors duration-150`}
                >
                  <td className="px-6 py-4 text-white border-r border-b border-gray-700">
                    {index + 1}. {point}
                  </td>
                  <td className="px-6 py-4 text-center border-r border-b border-gray-700">
                    <Check className="text-green-500 h-6 w-6 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center border-b border-gray-700">
                    <X className="text-red-500 h-6 w-6 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
