import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <table className="border-collapse border border-gray-400 w-3/4 bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">NIM</th>
            <th className="border border-gray-400 px-4 py-2">Nama</th>
            <th className="border border-gray-400 px-4 py-2">Jurusan</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Hobby</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">2281066</td>
            <td className="border border-gray-400 px-4 py-2">irajoasa paranginangin</td>
            <td className="border border-gray-400 px-4 py-2">Teknik Informatika</td>
            <td className="border border-gray-400 px-4 py-2">2281066@unai.edu</td>
            <td className="border border-gray-400 px-4 py-2">Ngoding</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;