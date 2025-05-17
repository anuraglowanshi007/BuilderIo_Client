import React, { useEffect, useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import api from "../../api/api";

const Sites = () => {
  const [sites, setSites] = useState([]);
  const [newSite, setNewSite] = useState({ name: "", description: "" });
  const [editingSite, setEditingSite] = useState(null);
  const [pagesModalOpen, setPagesModalOpen] = useState(false);
  const [selectedSiteId, setSelectedSiteId] = useState(null);
  const [pageForm, setPageForm] = useState({ name: "", layout: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchSites();
  }, []);
  useEffect(() => {
  if (selectedSiteId) {
    fetchPages(selectedSiteId);
  }
}, [selectedSiteId]);

console.log("pages",pages)
  const fetchSites = async () => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('accessToken');
    console.log('Token for fetchSites:', token); // Debug
    try {
      const response = await api.get("/api/sites");
      console.log('Sites response:', response.data); // Debug
      const sitesData = response.data.data || response.data;
      console.log('Parsed sites:', sitesData); // Debug
      setSites(Array.isArray(sitesData) ? sitesData : []);
    } catch (error) {
      if (error.response?.status === 401) {
        setError("Unauthorized: Please log in again.");
        
      } else {
        setError(error.response?.data?.message || "Failed to fetch sites. Please try again.");
      }
      console.error("Error fetching sites:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSite = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('accessToken');
    console.log('Token for createSite:', token); // Debug
    try {
      const response = await api.post("/api/sites", newSite);
      console.log('Create site response:', response.data); // Debug
      await fetchSites();
      setNewSite({ name: "", description: "" });
      alert("Site created successfully!");
    } catch (error) {
      if (error.response?.status === 401) {
        setError("Unauthorized: Please log in again.");
        
      } else {
        setError(error.response?.data?.message || "Failed to create site. Please try again.");
      }
      console.error("Error creating site:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSite = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('accessToken');
    console.log('Token for updateSite:', token); // Debug
    try {
      // Only send required fields to avoid sending unexpected data
      const payload = {
        name: editingSite.name,
        description: editingSite.description,
      };
      console.log('Update site payload:', payload); // Debug
      const response = await api.put(`/api/sites/${editingSite._id}`, payload);
      console.log('Update site response:', response.data); // Debug
      await fetchSites();
      setEditingSite(null);
      alert("Site updated successfully!");
    } catch (error) {
      if (error.response?.status === 401) {
        setError("Unauthorized: Please log in again.");
        
      } else {
        setError(error.response?.data?.message || "Failed to update site. Please try again.");
      }
      console.error("Error updating site:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSite = async (id) => {
    console.log("Deleting site with id:", id); // Debug
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('accessToken');
    console.log('Token for deleteSite:', token); // Debug
    try {
      const response = await api.delete(`/api/sites/${id}`);
      console.log('Delete site response:', response.data); // Debug
      await fetchSites();
      alert("Site deleted successfully!");
    } catch (error) {
      if (error.response?.status === 401) {
        setError("Unauthorized: Please log in again.");
      } else {
        setError(error.response?.data?.message || "Failed to delete site. Please try again.");
      }
      console.error("Error deleting site:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

const handlePageCreate = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  const token = localStorage.getItem('accessToken');
  console.log('Token for pageCreate:', token); // Debug

  // Validate selectedSiteId
  if (!selectedSiteId) {
    setError("No site selected. Please select a site and try again.");
    setLoading(false);
    alert("Error: No site selected.");
    return;
  }

  // Define layout based on selection
  let layout;
  switch (pageForm.layout) {
    case "blog":
      layout = {
        type: "section",
        children: [
          { type: "heading", props: { text: "Blog Title" } },
          { type: "text", props: { text: "This is a blog page content." } },
        ],
      };
      break;
    case "landing":
      layout = {
        type: "section",
        children: [
          { type: "heading", props: { text: "Welcome to Landing Page" } },
          { type: "button", props: { text: "Get Started", link: "/start" } },
        ],
      };
      break;
    case "portfolio":
      layout = {
        type: "section",
        children: [
          { type: "heading", props: { text: "My Portfolio" } },
          { type: "text", props: { text: "Showcasing my work." } },
        ],
      };
      break;
    default:
      layout = { type: "section", children: [] };
  }

  // Generate path from name (e.g., "demo" -> "/demo")
  const path = `/${pageForm.name.toLowerCase().replace(/\s+/g, '-')}`; // Convert to URL-friendly path

  // Prepare payload
  const payload = {
    siteId: selectedSiteId,
    name: pageForm.name,
    path,
    layout,
  };
  console.log('Create page payload:', payload); // Debug

  try {
    const response = await api.post("/api/pages", payload);
    console.log('Create page response:', response.data); // Debug
    alert("Page created successfully!");
    setPagesModalOpen(false);
    setPageForm({ name: "", layout: "" });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.response?.data?.error || "Failed to create page. Please try again.";
    if (error.response?.status === 401) {
      setError("Unauthorized: Please log in again.");
    } else if (error.response?.status === 400) {
      setError(errorMessage); // Likely payload validation issue
    } else if (error.response?.status === 404) {
      setError("Site not found. Please select a valid site.");
    } else {
      setError(errorMessage);
    }
    console.error("Error creating page:", {
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
      error: error.message,
    }); // Detailed debug
    alert(`Error creating page: ${errorMessage}`);
  } finally {
    setLoading(false);
  }
};
  

const fetchPages = async (siteId) => {
  setLoading(true);
  setError(null);
  const token = localStorage.getItem('accessToken');
  console.log('Token for fetchPages:', token); // Debug
  try {
    const response = await api.get(`/api/pages?siteId=${siteId}`);
    console.log('Pages response:', response.data); // Log raw response
    const pagesData = response.data.data || response.data;
    console.log('Parsed pages:', pagesData); // Log parsed pages
    setPages(Array.isArray(pagesData) ? pagesData : []);
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.response?.data?.error || "Failed to fetch pages. Please try again.";
    if (error.response?.status === 401) {
      setError("Unauthorized: Please log in again.");
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    } else {
      setError(errorMessage);
    }
    console.error("Error fetching pages:", {
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
      error: error.message,
    });
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Site Management</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading && <p className="text-blue-600 mb-4">Loading...</p>}

      <form
        onSubmit={editingSite ? handleUpdateSite : handleCreateSite}
        className="space-y-4 mb-6"
      >
        <input
          type="text"
          placeholder="Site Name"
          value={editingSite ? editingSite.name : newSite.name}
          onChange={(e) =>
            editingSite
              ? setEditingSite({ ...editingSite, name: e.target.value })
              : setNewSite({ ...newSite, name: e.target.value })
          }
          className="w-full border px-4 py-2 rounded"
          required
          disabled={loading}
        />
        <textarea
          placeholder="Site Description"
          value={editingSite ? editingSite.description : newSite.description}
          onChange={(e) =>
            editingSite
              ? setEditingSite({ ...editingSite, description: e.target.value })
              : setNewSite({ ...newSite, description: e.target.value })
          }
          className="w-full border px-4 py-2 rounded"
          rows={3}
          required
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          disabled={loading}
        >
          {editingSite ? "Update Site" : "Create Site"}
        </button>
      </form>

      <div className="space-y-4">
        {sites.length === 0 && !loading && (
          <p className="text-gray-600">No sites found. Create a new site above.</p>
        )}
        {sites.map((site) => (
          <div
            key={site._id}
            className="border p-4 rounded shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{site.name}</h2>
              <p className="text-gray-600">{site.description}</p>
            </div>
            <div className="mt-2 sm:mt-0 flex gap-2">
              <button
                onClick={() => setEditingSite(site)}
                className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 disabled:bg-yellow-300"
                disabled={loading}
                title="Edit Site"
              >
                <MdModeEditOutline />
              </button>
              <button
                onClick={() => handleDeleteSite(site._id)}
                className="bg-red-600 text-white p-2 rounded hover:bg-red-700 disabled:bg-red-300"
                disabled={loading}
                title="Delete Site"
              >
                <AiFillDelete />
              </button>
              <button
                onClick={() => {
                  setSelectedSiteId(site._id);
                  setPagesModalOpen(true);
                }}
                className="bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-green-300"
                disabled={loading}
                title="Add Page"
              >
                <IoMdAdd /> Pages
              </button>
            </div>
          </div>
        ))}
      </div>

      {pagesModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md">
            <h2 className="text-xl font-bold mb-4">Create Page for Site</h2>
            <form onSubmit={handlePageCreate}>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Page Name</label>
                <input
                  type="text"
                  value={pageForm.name}
                  onChange={(e) =>
                    setPageForm({ ...pageForm, name: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                  disabled={loading}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Layout</label>
                <select
                  value={pageForm.layout}
                  onChange={(e) =>
                    setPageForm({ ...pageForm, layout: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                  disabled={loading}
                >
                  <option value="">Select layout</option>
                  <option value="blog">Blog</option>
                  <option value="landing">Landing</option>
                  <option value="portfolio">Portfolio</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setPagesModalOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100 disabled:bg-gray-300"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-300"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Page"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sites;