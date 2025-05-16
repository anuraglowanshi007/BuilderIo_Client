import React, { useState } from "react";

const  Sites = () => {
  const [sites, setSites] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", id: null });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) {
      // Update existing site
      setSites((prev) =>
        prev.map((site) =>
          site.id === form.id ? { ...site, name: form.name, description: form.description } : site
        )
      );
    } else {
      // Create new site
      const newSite = {
        id: Date.now().toString(),
        name: form.name,
        description: form.description,
        slug: form.name.toLowerCase().replace(/\s+/g, "-"),
      };
      setSites([...sites, newSite]);
    }

    setForm({ name: "", description: "", id: null });
  };

  const handleEdit = (site) => {
    setForm({ name: site.name, description: site.description, id: site.id });
  };

  const handleDelete = (id) => {
    setSites(sites.filter((site) => site.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Sites</h1>

      {/* Site Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-6"
      >
        <div className="mb-4">
          <label className="block font-medium mb-1">Site Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Description</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {form.id ? "Update Site" : "Create Site"}
        </button>
      </form>

      {/* Site List */}
      <div className="grid gap-4">
        {sites.length === 0 && <p className="text-gray-500">No sites found.</p>}
        {sites.map((site) => (
          <div
            key={site.id}
            className="bg-gray-100 p-4 rounded shadow flex justify-between items-start"
          >
            <div>
              <h2 className="text-xl font-semibold">{site.name}</h2>
              <p className="text-gray-600">{site.description}</p>
              <p className="text-sm text-gray-500 mt-1">Slug: {site.slug}</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => handleEdit(site)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(site.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sites;


// import { useState } from 'react';

// const initialSites = [
//   { id: 1, name: 'Portfolio', lastUpdated: '2025-05-10', status: 'Published' },
//   { id: 2, name: 'Blog', lastUpdated: '2025-05-08', status: 'Draft' },
//   { id: 3, name: 'E-commerce', lastUpdated: '2025-05-05', status: 'Published' },
// ];

// const Sites = () => {
//   const [sites, setSites] = useState(initialSites);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newSiteName, setNewSiteName] = useState('');

//   // Create new site
//   const handleCreateSite = () => {
//     if (newSiteName.trim()) {
//       const newSite = {
//         id: Date.now(),
//         name: newSiteName,
//         lastUpdated: new Date().toISOString().split('T')[0],
//         status: 'Draft',
//       };
//       setSites([...sites, newSite]);
//       setNewSiteName('');
//       setIsModalOpen(false);
//     }
//   };

//   // Delete site
//   const handleDeleteSite = (id) => {
//     if (window.confirm('Are you sure you want to delete this site?')) {
//       setSites(sites.filter((site) => site.id !== id));
//     }
//   };

//   // Edit site (placeholder for now)
//   const handleEditSite = (id) => {
//     alert(`Edit site with ID: ${id}`);
//     // Navigate to /builder or implement in future
//   };

//   // Status Badge with Icon
//   const renderStatus = (status) => {
//     switch (status) {
//       case 'Published':
//         return <span className="text-green-600">🟢 Published</span>;
//       case 'Draft':
//         return <span className="text-yellow-600">🟡 Draft</span>;
//       case 'Unpublished':
//         return <span className="text-red-600">🔴 Unpublished</span>;
//       default:
//         return <span className="text-gray-600">{status}</span>;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">My Sites</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm sm:text-base w-full sm:w-auto"
//         >
//           + Create New Site
//         </button>
//       </div>

//       {/* Sites Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//         {sites.map((site) => (
//           <div
//             key={site.id}
//             className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between"
//           >
//             <div>
//               <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">{site.name}</h2>
//               <p className="text-gray-600 text-sm sm:text-base mt-2">
//                 Last Updated: {site.lastUpdated}
//               </p>
//               <p className="text-gray-600 text-sm sm:text-base mt-1 flex items-center gap-1">
//                 Status: {renderStatus(site.status)}
//               </p>
//             </div>

//             {/* Actions */}
//             <div className="mt-4 flex space-x-2 sm:space-x-3">
//               <button
//                 onClick={() => handleEditSite(site.id)}
//                 className="flex-1 bg-gray-200 text-gray-800 px-3 py-2 rounded-md hover:bg-gray-300 transition text-sm sm:text-base"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDeleteSite(site.id)}
//                 className="flex-1 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition text-sm sm:text-base"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Empty State */}
//       {sites.length === 0 && (
//         <p className="text-center text-gray-500 mt-10">No sites found.</p>
//       )}

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:max-w-md max-h-[90vh] overflow-y-auto">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">Create New Site</h2>
//             <input
//               type="text"
//               autoFocus
//               value={newSiteName}
//               onChange={(e) => setNewSiteName(e.target.value)}
//               placeholder="Enter site name"
//               className="w-full p-2 border rounded-md mb-4 text-sm sm:text-base"
//             />
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition text-sm sm:text-base"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleCreateSite}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
//               >
//                 Create
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sites;
