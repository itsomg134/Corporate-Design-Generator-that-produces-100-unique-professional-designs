# 🎨 Corporate Design Generator

> Generate 100+ unique professional design variations instantly with customizable color schemes, patterns, and layouts.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- **100 Unique Designs** - Automatically generates 100 distinct corporate design variations
- **8 Professional Color Schemes** - From Professional Blue to Sophisticated Teal
- **8 Dynamic Patterns** - Solid, gradient, diagonal, dots, waves, geometric, stripes, and circles
- **8 Layout Categories** - Card, banner, poster, badge, letterhead, business card, presentation, and social
- **Interactive Preview** - Click any design to view full details
- **Smart Filtering** - Filter designs by layout type
- **One-Click Regeneration** - Generate entirely new design sets instantly
- **Responsive Grid** - Adapts to any screen size
- **Modern UI** - Built with Tailwind CSS and Lucide React icons

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/corporate-design-generator.git

# Navigate to project directory
cd corporate-design-generator

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

## 📖 Usage

### Basic Usage

```jsx
import CorporateDesignMaker from './CorporateDesignMaker';

function App() {
  return <CorporateDesignMaker />;
}
```

### Browsing Designs

1. The grid displays all 100 designs automatically
2. Hover over any design to see its number and layout type
3. Click a design to open the detail modal

### Filtering Designs

Use the layout dropdown to filter designs by category:
- All Layouts (default)
- Card
- Banner
- Poster
- Badge
- Letterhead
- Business Card
- Presentation
- Social

### Regenerating Designs

Click the "Regenerate All" button to create 100 completely new design variations with different combinations of colors, patterns, and layouts.

## 🎨 Design Components

### Color Schemes

The generator includes 8 professional color palettes:

| Scheme | Primary | Description |
|--------|---------|-------------|
| Professional Blue | #1e3a8a | Classic corporate blue tones |
| Corporate Green | #14532d | Fresh, growth-oriented greens |
| Executive Purple | #581c87 | Sophisticated purple shades |
| Modern Orange | #9a3412 | Bold, energetic oranges |
| Tech Cyan | #164e63 | Modern, tech-focused cyans |
| Elegant Indigo | #312e81 | Deep, elegant indigos |
| Bold Red | #7f1d1d | Powerful, attention-grabbing reds |
| Sophisticated Teal | #134e4a | Balanced, professional teals |

### Pattern Types

- **Solid** - Clean, single-color backgrounds
- **Gradient** - Smooth color transitions
- **Diagonal** - Repeating diagonal stripes
- **Dots** - Circular dot patterns
- **Waves** - Flowing wave patterns
- **Geometric** - Angular geometric shapes
- **Stripes** - Horizontal or vertical lines
- **Circles** - Radial circular patterns

### Layout Categories

- **Card** - Business card designs
- **Banner** - Web banner formats
- **Poster** - Marketing poster layouts
- **Badge** - ID badge designs
- **Letterhead** - Document header designs
- **Business Card** - Professional card layouts
- **Presentation** - Slide deck backgrounds
- **Social** - Social media graphics

## 🛠️ Technology Stack

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

```
corporate-design-generator/
├── src/
│   ├── components/
│   │   └── CorporateDesignMaker.jsx
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md
```

## 🎯 Use Cases

- **Brand Identity Exploration** - Quickly explore different design directions
- **Presentation Backgrounds** - Generate unique slide backgrounds
- **Marketing Materials** - Create consistent design systems
- **Design Inspiration** - Discover new color and pattern combinations
- **Client Pitches** - Show multiple design options instantly
- **Web Design** - Generate hero sections and banner designs

## 🔧 Customization

### Adding New Color Schemes

```javascript
const colorSchemes = [
  { 
    name: 'Your Custom Scheme', 
    colors: ['#color1', '#color2', '#color3', '#color4'] 
  },
  // ... existing schemes
];
```

### Adding New Patterns

Extend the `renderPattern` function with your custom pattern logic:

```javascript
case 'your-pattern':
  return `your-css-background-pattern`;
```

### Adding New Layouts

Simply add to the layouts array:

```javascript
const layouts = [
  'card', 'banner', 'poster', 
  'your-custom-layout'
];
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Om Gedam

GitHub: @itsomg134

Email: omgedam123098@gmail.com

Twitter (X): @omgedam

LinkedIn: Om Gedam

Portfolio: https://ogworks.lovable.app

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Built with [React](https://reactjs.org)
