import { FC } from 'react';

const Services: FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <p className="mb-6 text-lg text-gray-700">This is the Services page.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="py-3 px-4 text-left text-gray-600 font-semibold">Song</th>
              <th className="py-3 px-4 text-left text-gray-600 font-semibold">Artist</th>
              <th className="py-3 px-4 text-left text-gray-600 font-semibold">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 border-b border-gray-300">
              <td className="py-3 px-4">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="py-3 px-4">Malcolm Lockyer</td>
              <td className="py-3 px-4">1961</td>
            </tr>
            <tr className="hover:bg-gray-50 border-b border-gray-300">
              <td className="py-3 px-4">Witchy Woman</td>
              <td className="py-3 px-4">The Eagles</td>
              <td className="py-3 px-4">1972</td>
            </tr>
            <tr className="hover:bg-gray-50 border-b border-gray-300">
              <td className="py-3 px-4">Shining Star</td>
              <td className="py-3 px-4">Earth, Wind, and Fire</td>
              <td className="py-3 px-4">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
