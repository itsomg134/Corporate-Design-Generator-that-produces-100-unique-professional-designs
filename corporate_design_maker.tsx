import React, { useState, useEffect } from 'react';
import { Download, RefreshCw, Palette, Grid3x3 } from 'lucide-react';

const CorporateDesignMaker = () => {
  const [designs, setDesigns] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [filter, setFilter] = useState('all');

  const colorSchemes = [
    { name: 'Professional Blue', colors: ['#1e3a8a', '#3b82f6', '#60a5fa', '#dbeafe'] },
    { name: 'Corporate Green', colors: ['#14532d', '#22c55e', '#86efac', '#dcfce7'] },
    { name: 'Executive Purple', colors: ['#581c87', '#a855f7', '#c084fc', '#f3e8ff'] },
    { name: 'Modern Orange', colors: ['#9a3412', '#f97316', '#fb923c', '#fed7aa'] },
    { name: 'Tech Cyan', colors: ['#164e63', '#06b6d4', '#67e8f9', '#cffafe'] },
    { name: 'Elegant Indigo', colors: ['#312e81', '#6366f1', '#a5b4fc', '#e0e7ff'] },
    { name: 'Bold Red', colors: ['#7f1d1d', '#ef4444', '#f87171', '#fecaca'] },
    { name: 'Sophisticated Teal', colors: ['#134e4a', '#14b8a6', '#5eead4', '#ccfbf1'] },
  ];

  const patterns = [
    'solid', 'gradient', 'diagonal', 'dots', 'waves', 'geometric', 'stripes', 'circles'
  ];

  const layouts = [
    'card', 'banner', 'poster', 'badge', 'letterhead', 'business-card', 'presentation', 'social'
  ];

  const generateDesigns = () => {
    const newDesigns = [];
    for (let i = 1; i <= 100; i++) {
      const scheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
      const pattern = patterns[Math.floor(Math.random() * patterns.length)];
      const layout = layouts[Math.floor(Math.random() * layouts.length)];
      
      newDesigns.push({
        id: i,
        number: String(i).padStart(3, '0'),
        scheme,
        pattern,
        layout,
        intensity: Math.random() > 0.5 ? 'bold' : 'subtle'
      });
    }
    setDesigns(newDesigns);
  };

  useEffect(() => {
    generateDesigns();
  }, []);

  const renderPattern = (design) => {
    const { scheme, pattern, intensity } = design;
    const [c1, c2, c3, c4] = scheme.colors;
    
    switch (pattern) {
      case 'gradient':
        return `linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)`;
      case 'diagonal':
        return `repeating-linear-gradient(45deg, ${c1}, ${c1} 10px, ${c2} 10px, ${c2} 20px)`;
      case 'dots':
        return `radial-gradient(circle, ${c2} 2px, ${c4} 2px)`;
      case 'waves':
        return `linear-gradient(135deg, ${c1} 25%, transparent 25%), linear-gradient(225deg, ${c2} 25%, transparent 25%), linear-gradient(315deg, ${c3} 25%, transparent 25%), linear-gradient(45deg, ${c4} 25%, ${c1} 25%)`;
      case 'geometric':
        return `linear-gradient(45deg, ${c1} 25%, ${c2} 25%, ${c2} 50%, ${c3} 50%, ${c3} 75%, ${c4} 75%)`;
      case 'stripes':
        return `linear-gradient(90deg, ${c1} 25%, ${c2} 25%, ${c2} 50%, ${c1} 50%, ${c1} 75%, ${c2} 75%)`;
      case 'circles':
        return `radial-gradient(circle at 25% 25%, ${c2}, transparent 50%), radial-gradient(circle at 75% 75%, ${c3}, ${c1})`;
      default:
        return c2;
    }
  };

  const filteredDesigns = designs.filter(d => 
    filter === 'all' || d.layout === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Corporate Design Generator
          </h1>
          <p className="text-slate-400">100 Professional Design Variations</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={generateDesigns}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            <RefreshCw size={20} />
            Regenerate All
          </button>
          
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-slate-700 px-6 py-3 rounded-lg border border-slate-600"
          >
            <option value="all">All Layouts</option>
            {layouts.map(l => (
              <option key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</option>
            ))}
          </select>

          <div className="flex items-center gap-2 bg-slate-700 px-6 py-3 rounded-lg">
            <Grid3x3 size={20} />
            <span>{filteredDesigns.length} Designs</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              onClick={() => setSelectedDesign(design)}
              className="cursor-pointer group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: renderPattern(design),
                backgroundSize: design.pattern === 'dots' ? '20px 20px' : 
                               design.pattern === 'waves' ? '40px 40px' :
                               design.pattern === 'geometric' ? '40px 40px' :
                               design.pattern === 'stripes' ? '40px 40px' : 'cover'
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  <div className="text-3xl font-bold mb-1">#{design.number}</div>
                  <div className="text-xs uppercase tracking-wider">{design.layout}</div>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs font-mono">
                #{design.number}
              </div>
            </div>
          ))}
        </div>

        {selectedDesign && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedDesign(null)}
          >
            <div 
              className="bg-slate-800 rounded-2xl p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Design #{selectedDesign.number}</h2>
                  <p className="text-slate-400">Click outside to close</p>
                </div>
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div 
                className="aspect-video rounded-xl mb-6"
                style={{
                  background: renderPattern(selectedDesign),
                  backgroundSize: selectedDesign.pattern === 'dots' ? '20px 20px' : 
                                 selectedDesign.pattern === 'waves' ? '40px 40px' :
                                 selectedDesign.pattern === 'geometric' ? '40px 40px' :
                                 selectedDesign.pattern === 'stripes' ? '40px 40px' : 'cover'
                }}
              />

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-slate-400 text-sm mb-1">Color Scheme</div>
                  <div className="font-semibold">{selectedDesign.scheme.name}</div>
                  <div className="flex gap-2 mt-2">
                    {selectedDesign.scheme.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Pattern</div>
                  <div className="font-semibold capitalize">{selectedDesign.pattern}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Layout Type</div>
                  <div className="font-semibold capitalize">{selectedDesign.layout}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-1">Intensity</div>
                  <div className="font-semibold capitalize">{selectedDesign.intensity}</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                  <Download size={20} />
                  Export Design
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
                  <Palette size={20} />
                  Customize
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CorporateDesignMaker;