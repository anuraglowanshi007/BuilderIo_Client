import React, { useState } from 'react';
import { FiUpload, FiTrash2, FiImage, FiVideo, FiFile, FiFolder, FiTag, FiSearch } from 'react-icons/fi';

const Media = () => {
  // Mock data - replace with real API calls later
  const [media, setMedia] = useState([
    {
      id: 1,
      filename: 'nature.jpg',
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      type: 'image',
      size: 2048,
      folder: 'wallpapers',
      tags: ['nature', 'landscape'],
      createdAt: '2023-05-15T10:30:00Z'
    },
    {
      id: 2,
      filename: 'product-demo.mp4',
      url: '',
      type: 'video',
      size: 10240,
      folder: 'demos',
      tags: ['product', 'tutorial'],
      createdAt: '2023-05-10T14:45:00Z'
    },
    {
      id: 3,
      filename: 'document.pdf',
      url: '',
      type: 'application',
      size: 512,
      folder: 'documents',
      tags: ['report', 'finance'],
      createdAt: '2023-05-05T09:15:00Z'
    },
    {
      id: 4,
      filename: 'profile.png',
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      type: 'image',
      size: 1536,
      folder: 'users',
      tags: ['profile', 'avatar'],
      createdAt: '2023-04-28T16:20:00Z'
    },
    {
      id: 5,
      filename: 'presentation.pdf',
      url: '',
      type: 'application',
      size: 3072,
      folder: 'business',
      tags: ['meeting', 'slides'],
      createdAt: '2023-04-25T11:10:00Z'
    }
  ]);

  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [folderName, setFolderName] = useState('');
  const [tags, setTags] = useState('');

  const filteredMedia = media.filter(item => {
  // Filter by active tab
  if (activeTab !== 'all' && item.type !== activeTab)
    return false;

  // Filter by search query
  if (
    searchQuery &&
    !item.filename.toLowerCase().includes(searchQuery.toLowerCase())
  ) {
    return false;
  }

  return true;
});


  const getMediaIcon = (type) => {
    switch (type) {
      case 'image': return <FiImage className="text-blue-500" />;
      case 'video': return <FiVideo className="text-red-500" />;
      default: return <FiFile className="text-gray-500" />;
    }
  };

  // Mock upload function - replace with real API call later
  const handleUpload = (files) => {
    const newMedia = Array.from(files).map((file, index) => ({
      id: media.length + index + 1,
      filename: file.name,
      url: file.type.startsWith('image') ? URL.createObjectURL(file) : '',
      type: file.type.split('/')[0],
      size: file.size,
      folder: folderName || 'default',
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      createdAt: new Date().toISOString()
    }));

    setMedia([...newMedia, ...media]);
    setFolderName('');
    setTags('');
  };

  // Mock delete function - replace with real API call later
  const handleDelete = (mediaId) => {
    if (window.confirm('Are you sure you want to delete this media?')) {
      setMedia(media.filter(item => item.id !== mediaId));
      if (selectedMedia && selectedMedia.id === mediaId) {
        setSelectedMedia(null);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Media Library</h1>
      
      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition"
          onClick={() => document.getElementById('file-upload').click()}>
          <input 
            id="file-upload"
            type="file" 
            multiple 
            className="hidden"
            onChange={(e) => handleUpload(e.target.files)}
            accept="image/*,video/*,application/pdf,.doc,.docx,.xls,.xlsx"
          />
          <FiUpload className="mx-auto text-4xl text-gray-400 mb-4" />
          <p className="text-lg">Click to select files</p>
          <p className="text-sm text-gray-500 mt-2">Supports images, videos, and documents</p>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Folder</label>
            <div className="flex">
              <FiFolder className="text-gray-400 mt-2 mr-2" />
              <input
                type="text"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                placeholder="Enter folder name (optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
              <div className="flex">
                <FiTag className="text-gray-400 mt-2 mr-2" />
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Comma separated tags (optional)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
          </div>
        </div>
      </div>
      
      {/* Media Gallery */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('image')}
              className={`px-4 py-2 rounded-md ${activeTab === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Images
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-md ${activeTab === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Videos
            </button>
            <button
              onClick={() => setActiveTab('application')}
              className={`px-4 py-2 rounded-md ${activeTab === 'application' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Documents
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search media..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        {/* Filter of the Images , Vido and PDF */}
        {filteredMedia.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No media found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredMedia.map((item) => (
              <div 
                key={item.id} 
                className={`relative group border rounded-lg overflow-hidden ${selectedMedia?.id === item.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedMedia(item)}
              >
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  {item.type === 'image' && item.url ? (
                    <img 
                      src={item.url} 
                      alt={item.filename} 
                      className="object-cover w-full h-full"
                    />
                  ) : item.type === 'video' ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <FiVideo className="text-4xl text-gray-400" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FiFile className="text-4xl text-gray-400" />
                    </div>
                  )}
                </div>
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(item.id);
                    }}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                  >
                    <FiTrash2 />
                  </button>
                </div>
                
                <div className="p-2 bg-white">
                  <div className="flex items-center">
                    {getMediaIcon(item.type)}
                    <p className="ml-2 text-sm font-medium truncate">{item.filename}</p>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                    <span>{(item.size / 1024).toFixed(1)} KB</span>
                  </div>
                  {item.folder && (
                    <div className="flex items-center mt-1">
                      <FiFolder className="text-xs text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">{item.folder}</span>
                    </div>
                  )}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap mt-1">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded mr-1 mb-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Media Details Sidebar */}
      {selectedMedia && (
        <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Media Details</h2>
              <button 
                onClick={() => setSelectedMedia(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="mb-6">
              {selectedMedia.type === 'image' && selectedMedia.url ? (
                <img 
                  src={selectedMedia.url} 
                  alt={selectedMedia.filename} 
                  className="w-full rounded-lg"
                />
              ) : selectedMedia.type === 'video' ? (
                <div className="bg-gray-100 rounded-lg flex items-center justify-center aspect-video">
                  <FiVideo className="text-4xl text-gray-400" />
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg flex items-center justify-center aspect-square">
                  <FiFile className="text-4xl text-gray-400" />
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Filename</h3>
                <p className="mt-1">{selectedMedia.filename}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Type</h3>
                <p className="mt-1 capitalize">{selectedMedia.type}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Size</h3>
                <p className="mt-1">{(selectedMedia.size / 1024).toFixed(1)} KB</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Uploaded</h3>
                <p className="mt-1">{new Date(selectedMedia.createdAt).toLocaleString()}</p>
              </div>
              
              {selectedMedia.folder && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Folder</h3>
                  <p className="mt-1">{selectedMedia.folder}</p>
                </div>
              )}
              
              {selectedMedia.tags && selectedMedia.tags.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Tags</h3>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {selectedMedia.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="pt-4">
                <button
                  onClick={() => handleDelete(selectedMedia.id)}
                  className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex items-center justify-center"
                >
                  <FiTrash2 className="mr-2" />
                  Delete Media
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;