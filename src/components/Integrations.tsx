import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Integration {
  name: string;
  logo: string;
  description: string;
  link: string;
}

const integrations: Integration[] = [
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    description: 'Modern UI development with React for a seamless user experience',
    link: 'https://reactjs.org'
  },
  {
    name: 'Ethereum',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg',
    description: 'Secure and transparent transactions on the Ethereum blockchain',
    link: 'https://ethereum.org'
  },
  {
    name: 'Vite',
    logo: 'https://vitejs.dev/logo.svg',
    description: 'Next generation frontend tooling for lightning-fast development',
    link: 'https://vitejs.dev'
  },
  {
    name: 'ThirdWeb',
    logo: 'https://raw.githubusercontent.com/thirdweb-dev/typescript-sdk/main/logo.svg',
    description: 'Web3 development framework for decentralized applications',
    link: 'https://thirdweb.com'
  }
];

export const Integrations = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        Powered by Industry-Leading Technology
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {integrations.map((integration, index) => (
          <div
            key={integration.name}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={integration.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gray-700/50 rounded-lg p-4 h-32 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-gray-700/80">
                <img
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  className="h-12 w-auto object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm text-gray-300 text-center font-medium">
                  {integration.name}
                </span>
              </div>

              {/* Hover Description */}
              <div
                className={`absolute -top-2 left-1/2 -translate-x-1/2 transform -translate-y-full bg-gray-900 text-white p-3 rounded-lg shadow-lg w-48 transition-opacity duration-200 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="text-sm">{integration.description}</div>
                <div className="flex items-center gap-1 text-blue-400 text-xs mt-2">
                  Learn more
                  <ExternalLink className="w-3 h-3" />
                </div>
                {/* Arrow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};