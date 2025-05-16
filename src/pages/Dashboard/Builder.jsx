import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Trash2, Save, Download, AlertTriangle } from 'lucide-react';

// Complete component library with all components
const componentLibrary = [
  // Basic Elements
  { 
    id: 'text-1', 
    type: 'Text', 
    content: 'Sample Text', 
    styles: { 
      fontSize: '16px', 
      color: '#000000',
      margin: '8px 0'
    } 
  },
  { 
    id: 'button-1', 
    type: 'Button', 
    content: 'Click Me', 
    styles: { 
      backgroundColor: '#2563eb', 
      color: '#ffffff', 
      padding: '8px 16px', 
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px'
    } 
  },
  { 
    id: 'image-1', 
    type: 'Image', 
    content: 'https://via.placeholder.com/150', 
    styles: { 
      width: '150px',
      height: '150px',
      margin: '8px 0'
    } 
  },
  { 
    id: 'header-1', 
    type: 'Header', 
    content: 'Header Section', 
    styles: { 
      fontSize: '24px',
      fontWeight: 'bold',
      padding: '16px',
      backgroundColor: '#f3f4f6',
      margin: '8px 0'
    } 
  },
  { 
    id: 'footer-1', 
    type: 'Footer', 
    content: 'Footer Section', 
    styles: { 
      fontSize: '14px',
      padding: '16px',
      backgroundColor: '#f3f4f6',
      margin: '8px 0'
    } 
  },
  { 
    id: 'navbar-1', 
    type: 'Navbar', 
    links: ['Home', 'About', 'Contact'],
    styles: { 
      padding: '12px',
      backgroundColor: '#2563eb',
      color: 'white',
      margin: '8px 0'
    } 
  },
  { 
    id: 'card-1', 
    type: 'Card', 
    title: 'Card Title',
    content: 'This is a sample card with some content.',
    styles: { 
      padding: '16px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      margin: '8px 0'
    } 
  },
  { 
    id: 'input-1', 
    type: 'Input', 
    placeholder: 'Enter text here...',
    styles: { 
      padding: '8px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      width: '100%',
      margin: '8px 0'
    } 
  }
];

const Builder = () => {
  const [canvasComponents, setCanvasComponents] = useState([]);
  const [selectedComponentId, setSelectedComponentId] = useState(null);
  const [previewMode, setPreviewMode] = useState('desktop');
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

  // Load from local storage on component mount
  useEffect(() => {
    const savedLayout = localStorage.getItem('savedWebsiteLayout');
    if (savedLayout) {
      try {
        setCanvasComponents(JSON.parse(savedLayout));
        showNotification('Layout loaded from local storage', 'success');
      } catch (error) {
        console.error('Failed to load layout from local storage:', error);
      }
    }
  }, []);

  // Get the currently selected component details
  const selectedComponent = canvasComponents.find(comp => comp.id === selectedComponentId) || null;

  // Show notification helper
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 3000);
  };

  // Handle drag end
  const onDragEnd = (result) => {
    if (!result.destination) return;
    
    if (result.source.droppableId === 'library' && result.destination.droppableId === 'canvas') {
      const sourceComponent = componentLibrary.find(comp => comp.id === result.draggableId);
      if (sourceComponent) {
        const component = { 
          ...sourceComponent, 
          id: `${sourceComponent.type}-${Date.now()}`,
          content: sourceComponent.type === 'Navbar' ? [...sourceComponent.links] : sourceComponent.content
        };
        setCanvasComponents([...canvasComponents, component]);
      }
    } else if (result.source.droppableId === 'canvas' && result.destination.droppableId === 'canvas') {
      const reorderedComponents = Array.from(canvasComponents);
      const [moved] = reorderedComponents.splice(result.source.index, 1);
      reorderedComponents.splice(result.destination.index, 0, moved);
      setCanvasComponents(reorderedComponents);
    }
  };

  // Remove component from canvas
  const removeComponent = (id) => {
    setCanvasComponents(canvasComponents.filter(comp => comp.id !== id));
    if (selectedComponentId === id) {
      setSelectedComponentId(null);
    }
    showNotification('Component removed', 'info');
  };

  // Handle property changes
  const updateComponentProperty = (id, property, value) => {
    setCanvasComponents(prevComponents => 
      prevComponents.map(comp => {
        if (comp.id !== id) return comp;
        
        // Handle different property types
        if (property === 'links') {
          return { ...comp, links: value.split(',').map(item => item.trim()) };
        } 
        if (property === 'content' || property === 'title' || property === 'placeholder') {
          return { ...comp, [property]: value };
        }
        if (property.startsWith('style.')) {
          const styleProperty = property.replace('style.', '');
          return { 
            ...comp, 
            styles: { ...comp.styles, [styleProperty]: value } 
          };
        }
        return comp;
      })
    );
  };

  // Save to local storage
  const saveToLocalStorage = () => {
    try {
      localStorage.setItem('savedWebsiteLayout', JSON.stringify(canvasComponents));
      showNotification('Layout saved to local storage', 'success');
    } catch (error) {
      console.error('Failed to save layout:', error);
      showNotification('Failed to save layout', 'error');
    }
  };

  // Generate HTML for download
  const generateHTML = () => {
    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; padding: 0; }
    .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
    .navbar-links { display: flex; list-style: none; gap: 16px; margin: 0; padding: 0; }
    .navbar-links li { cursor: pointer; }
  </style>
</head>
<body>
  <div class="container">
`;

    // Add components
    canvasComponents.forEach(component => {
      const styles = Object.entries(component.styles || {})
        .map(([key, value]) => `${key}: ${value};`)
        .join(' ');
      
      switch (component.type) {
        case 'Text':
          html += `    <div style="${styles}">${component.content}</div>\n`;
          break;
        case 'Button':
          html += `    <button style="${styles}">${component.content}</button>\n`;
          break;
        case 'Image':
          html += `    <img src="${component.content}" alt="Image" style="${styles}" />\n`;
          break;
        case 'Header':
          html += `    <header style="${styles}">${component.content}</header>\n`;
          break;
        case 'Footer':
          html += `    <footer style="${styles}">${component.content}</footer>\n`;
          break;
        case 'Navbar':
          html += `    <nav style="${styles}">
      <ul class="navbar-links">
        ${component.links?.map(link => `<li>${link}</li>`).join('\n        ')}
      </ul>
    </nav>\n`;
          break;
        case 'Card':
          html += `    <div style="${styles}">
      <h3 style="font-weight: bold; font-size: 1.125rem; margin-bottom: 8px;">${component.title}</h3>
      <p>${component.content}</p>
    </div>\n`;
          break;
        case 'Input':
          html += `    <input type="text" placeholder="${component.placeholder}" style="${styles}" />\n`;
          break;
        default:
          break;
      }
    });

    html += `  </div>
</body>
</html>`;

    return html;
  };

  // Download HTML file
  const downloadHTML = () => {
    const html = generateHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-website.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('HTML file downloaded', 'success');
  };

  // Render component based on type
  const renderComponent = (component, index) => {
    const isSelected = selectedComponentId === component.id;
    const commonProps = {
      key: component.id,
      onClick: (e) => {
        e.stopPropagation();
        setSelectedComponentId(component.id);
      },
      style: component.styles,
      className: `mb-2 ${isSelected ? 'ring-2 ring-blue-500' : ''}`
    };

    switch (component.type) {
      case 'Text':
        return <div {...commonProps}>{component.content}</div>;
      case 'Button':
        return <button {...commonProps}>{component.content}</button>;
      case 'Image':
        return <img {...commonProps} src={component.content} alt="Uploaded" />;
      case 'Header':
        return <header {...commonProps}>{component.content}</header>;
      case 'Footer':
        return <footer {...commonProps}>{component.content}</footer>;
      case 'Navbar':
        return (
          <nav {...commonProps}>
            <ul className="flex space-x-4">
              {component.links?.map((link, i) => (
                <li key={i} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </nav>
        );
      case 'Card':
        return (
          <div {...commonProps}>
            <h3 className="font-bold text-lg mb-2">{component.title}</h3>
            <p>{component.content}</p>
          </div>
        );
      case 'Input':
        return <input {...commonProps} type="text" placeholder={component.placeholder} readOnly />;
      default:
        return null;
    }
  };

  // Responsive preview widths
  const previewWidths = {
    desktop: 'w-full',
    tablet: 'w-[768px]',
    mobile: 'w-[375px]',
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row p-4 sm:p-6 gap-4">
        {/* Component Library (Sidebar) */}
        <Droppable droppableId="library" isDropDisabled={true}>
          {(provided) => (
            <div
              className="w-full lg:w-64 bg-white p-4 rounded-lg shadow-md"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Component Library</h2>
              {componentLibrary.map((component, index) => (
                <Draggable key={component.id} draggableId={component.id} index={index}>
                  {(provided) => (
                    <div
                      className="p-2 mb-2 bg-gray-100 rounded cursor-move hover:bg-gray-200 transition"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {component.type}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}

              {/* Save Actions */}
              <div className="mt-6 space-y-2">
                <button 
                  onClick={saveToLocalStorage}
                  className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm transition"
                >
                  <Save size={16} className="mr-2" />
                  Save Layout
                </button>
                <button 
                  onClick={downloadHTML}
                  className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm transition"
                >
                  <Download size={16} className="mr-2" />
                  Download HTML
                </button>
              </div>
            </div>
          )}
        </Droppable>

        {/* Canvas */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full mb-4 flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Canvas</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`px-3 py-1 rounded text-sm ${
                  previewMode === 'desktop' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
              >
                Desktop
              </button>
              <button
                onClick={() => setPreviewMode('tablet')}
                className={`px-3 py-1 rounded text-sm ${
                  previewMode === 'tablet' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
              >
                Tablet
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`px-3 py-1 rounded text-sm ${
                  previewMode === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
              >
                Mobile
              </button>
            </div>
          </div>
          
          {/* Notification Toast */}
          {notification.show && (
            <div className={`w-full mb-4 p-3 rounded-md ${
              notification.type === 'success' ? 'bg-green-100 text-green-800' :
              notification.type === 'error' ? 'bg-red-100 text-red-800' : 
              'bg-blue-100 text-blue-800'
            } flex items-center`}>
              {notification.type === 'error' ? (
                <AlertTriangle size={16} className="mr-2" />
              ) : (
                notification.type === 'success' ? (
                  <Save size={16} className="mr-2" />
                ) : (
                  <div className="w-4 h-4 mr-2" />
                )
              )}
              {notification.message}
            </div>
          )}
          
          <Droppable droppableId="canvas">
            {(provided) => (
              <div
                className={`bg-white p-4 sm:p-6 rounded-lg shadow-md ${previewWidths[previewMode]} min-h-[500px] w-full relative`}
                {...provided.droppableProps}
                ref={provided.innerRef}
                onClick={() => setSelectedComponentId(null)}
              >
                {canvasComponents.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Drag components here to start building</p>
                ) : (
                  canvasComponents.map((component, index) => (
                    <Draggable key={component.id} draggableId={component.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="relative group"
                        >
                          {renderComponent(component, index)}
                          
                          {/* Remove button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeComponent(component.id);
                            }}
                            className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Remove component"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        {/* Properties Panel */}
        <div className="w-full lg:w-64 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Properties</h2>
          {selectedComponent ? (
            <div className="space-y-4">
              <p className="text-sm font-medium">Editing: {selectedComponent.type}</p>
              
              {/* Text properties */}
              {selectedComponent.type === 'Text' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Content</label>
                    <input
                      type="text"
                      value={selectedComponent.content || ''}
                      onChange={(e) => updateComponentProperty(selectedComponent.id, 'content', e.target.value)}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Font Size</label>
                      <input
                        type="text"
                        value={selectedComponent.styles?.fontSize || ''}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.fontSize', e.target.value)}
                        className="w-full p-2 border rounded-md text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Text Color</label>
                      <input
                        type="color"
                        value={selectedComponent.styles?.color || '#000000'}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.color', e.target.value)}
                        className="w-full h-10 border rounded-md mt-1"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Button properties */}
              {selectedComponent.type === 'Button' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Button Text</label>
                    <input
                      type="text"
                      value={selectedComponent.content || ''}
                      onChange={(e) => updateComponentProperty(selectedComponent.id, 'content', e.target.value)}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Background</label>
                      <input
                        type="color"
                        value={selectedComponent.styles?.backgroundColor || '#2563eb'}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.backgroundColor', e.target.value)}
                        className="w-full h-10 border rounded-md mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Text Color</label>
                      <input
                        type="color"
                        value={selectedComponent.styles?.color || '#ffffff'}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.color', e.target.value)}
                        className="w-full h-10 border rounded-md mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Border Radius</label>
                    <input
                      type="text"
                      value={selectedComponent.styles?.borderRadius || ''}
                      onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.borderRadius', e.target.value)}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                </>
              )}

              {/* Image properties */}
              {selectedComponent.type === 'Image' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                      type="text"
                      value={selectedComponent.content || ''}
                      onChange={(e) => updateComponentProperty(selectedComponent.id, 'content', e.target.value)}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Width</label>
                      <input
                        type="text"
                        value={selectedComponent.styles?.width || ''}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.width', e.target.value)}
                        className="w-full p-2 border rounded-md text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Height</label>
                      <input
                        type="text"
                        value={selectedComponent.styles?.height || ''}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.height', e.target.value)}
                        className="w-full p-2 border rounded-md text-sm mt-1"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Header/Footer properties */}
              {['Header', 'Footer'].includes(selectedComponent.type) && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Content</label>
                    <input
                      type="text"
                      value={selectedComponent.content || ''}
                      onChange={(e) => updateComponentProperty(selectedComponent.id, 'content', e.target.value)}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Background</label>
                      <input
                        type="color"
                        value={selectedComponent.styles?.backgroundColor || '#f3f4f6'}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.backgroundColor', e.target.value)}
                        className="w-full h-10 border rounded-md mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Font Size</label>
                      <input
                        type="text"
                        value={selectedComponent.styles?.fontSize || ''}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.fontSize', e.target.value)}
                        className="w-full p-2 border rounded-md text-sm mt-1"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Navbar properties */}
              {selectedComponent.type === 'Navbar' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Links (comma separated)</label>
                    <input
                      type="text"
                      value={selectedComponent.links?.join(', ') || ''}
                      onChange={(e) => updateComponentProperty(selectedComponent.id, 'links', e.target.value)}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Background</label>
                      <input
                        type="color"
                        value={selectedComponent.styles?.backgroundColor || '#2563eb'}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.backgroundColor', e.target.value)}
                        className="w-full h-10 border rounded-md mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Text Color</label>
                      <input
                        type="color"
                        value={selectedComponent.styles?.color || '#ffffff'}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.color', e.target.value)}
                        className="w-full h-10 border rounded-md mt-1"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Card properties */}
              {selectedComponent.type === 'Card' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      value={selectedComponent.title || ''}
                      onChange={(e) => updateComponentProperty(selectedComponent.id, 'title', e.target.value)}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                      value={selectedComponent.content || ''}
                      onChange={(e) => updateComponentProperty(selectedComponent.id, 'content', e.target.value)}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                      rows="3"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Border Color</label>
                      <input
                        type="color"
                        value={selectedComponent.styles?.borderColor || '#e5e7eb'}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.borderColor', e.target.value)}
                        className="w-full h-10 border rounded-md mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Border Radius</label>
                      <input
                        type="text"
                        value={selectedComponent.styles?.borderRadius || ''}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.borderRadius', e.target.value)}
                        className="w-full p-2 border rounded-md text-sm mt-1"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Input properties */}
              {selectedComponent.type === 'Input' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Placeholder</label>
                    <input
                      type="text"
                      value={selectedComponent.placeholder || ''}
                      onChange={(e) => updateComponentProperty(selectedComponent.id, 'placeholder', e.target.value)}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Border Color</label>
                      <input
                        type="color"
                        value={selectedComponent.styles?.borderColor || '#d1d5db'}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.borderColor', e.target.value)}
                        className="w-full h-10 border rounded-md mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Border Radius</label>
                      <input
                        type="text"
                        value={selectedComponent.styles?.borderRadius || ''}
                        onChange={(e) => updateComponentProperty(selectedComponent.id, 'style.borderRadius', e.target.value)}
                        className="w-full p-2 border rounded-md text-sm mt-1"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedComponentId(null)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded text-sm mt-4"
                >
                  Deselect
                </button>
                <button
                  onClick={() => removeComponent(selectedComponent.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-sm mt-4 flex items-center justify-center"
                >
                  <Trash2 size={16} className="mr-1" />
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Select a component to edit its properties</p>
          )}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Builder;

