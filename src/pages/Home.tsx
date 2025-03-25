import React from 'react';
import { CountdownTimer } from '../components/CountdownTimer';
import { TokenDetails } from '../components/TokenDetails';
import { FAQ } from '../components/FAQ';
import { Header } from '../components/Header';
import { Integrations } from '../components/Integrations';
import { FileText, TrendingUp, Gift, Users, ChevronDown, DollarSign, BarChart3 } from 'lucide-react';

export const Home = () => {
  const handleCopyGigCoinAddress = () => {
    navigator.clipboard.writeText('0x26987D06C856F5689334375Fe58f4BD2e2888cb8');
  };

  const handleCopyShareAddress = () => {
    navigator.clipboard.writeText('0x0551B45932B03E35E0FD2CF474216D87fD80c519');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            Ditch the Gig Struggle—Earn Crypto Now!
          </h2>
          <p className="text-xl text-gray-300">
            From coffee runs to cash—GigFi transforms your hustle!
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <div className="max-w-sm mx-auto aspect-[9/16] relative">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dReVvaeu1e4"
              title="GigFi Introduction"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          {/* Fallback content */}
          <noscript>
            <div className="text-center text-gray-400 mt-4">
              Please enable JavaScript to watch the video introduction to GigFi
            </div>
          </noscript>
        </div>

        {/* Integrations Section */}
        <Integrations />

        {/* White Paper Section */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">GigFi White Paper</h2>
            <p className="text-gray-400">Comprehensive guide to our platform and vision</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <FileText className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Executive Overview</h3>
              <p className="text-gray-300">Transforming gig economy earnings into crypto wealth</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                <li>• Guaranteed 4% APY</li>
                <li>• Zero-risk earnings</li>
                <li>• Protected by Blockchain</li>
                <li>• Decentralized ownership</li>
              </ul>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-4">
              <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Core Features</h3>
              <p className="text-gray-300">Complete financial toolkit</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                <li>• Buy/Sell GigCoin</li>
                <li>• Buy GigFi Share NFTs</li>
                <li>• Marketplace</li>
              </ul>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-4">
              <Gift className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Key Differentiators</h3>
              <p className="text-gray-300">Why GigFi stands out</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                <li>• Higher APY than banks</li>
                <li>• No minimum balance</li>
                <li>• Instant withdrawals</li>
                <li>• Community ownership</li>
              </ul>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-4">
              <Users className="w-8 h-8 text-orange-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">User Benefits</h3>
              <p className="text-gray-300">Built for gig workers</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                <li>• Simple interface</li>
                <li>• Multiple earning options</li>
                <li>• Secure storage</li>
                <li>• 24/7 support</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <ChevronDown className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Development Timeline</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <div className="text-blue-400 font-medium mb-2">Phase 1</div>
                <div className="text-white font-medium">Current Release</div>
                <p className="text-sm text-gray-400 mt-1">Buy/Sell GigCoin, Buy GigFi Share NFTs, Marketplace</p>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <div className="text-blue-400 font-medium mb-2">Phase 2</div>
                <div className="text-white font-medium">Coming Soon</div>
                <p className="text-sm text-gray-400 mt-1">Staking, Messages, Rewards, Enhanced Marketplace with Escrow & Dropship, Gig Pension, Trade Share NFTs, Internal Wallet</p>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <div className="text-blue-400 font-medium mb-2">Phase 3</div>
                <div className="text-white font-medium">Q3 2024</div>
                <p className="text-sm text-gray-400 mt-1">Mobile App & Additional Integrations</p>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <div className="text-blue-400 font-medium mb-2">Phase 4</div>
                <div className="text-white font-medium">Q4 2024</div>
                <p className="text-sm text-gray-400 mt-1">International Expansion & New Features</p>
              </div>
            </div>
          </div>
        </div>

        {/* Presale Section */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            GigCoin Presale Live—$0.01/Token!
          </h2>
          <div className="bg-gray-700/50 p-4 rounded-lg mb-6">
            <p className="text-gray-300 text-sm mb-2">Contract Address (CA):</p>
            <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
              <code className="text-green-400 font-mono">0x26987D06C856F5689334375Fe58f4BD2e2888cb8</code>
              <button
                onClick={handleCopyGigCoinAddress}
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                Copy
              </button>
            </div>
          </div>
          <CountdownTimer />
          <p className="text-green-400 text-center text-lg">Zero risk, 4% APY!</p>
        </div>

        {/* Share NFTs Section */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">
              Own a Piece of GigFi
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">GigFi Share NFTs</h3>
              <p className="text-gray-300 mb-4">
                Each Share NFT represents actual ownership in the GigFi platform. Get early access to our revolutionary ownership model before advanced features launch in Phase 2.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
                <h4 className="text-blue-400 font-medium mb-2">Coming in Phase 2:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    Quarterly dividend payments
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    Voting rights on platform decisions
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    Trade shares on our marketplace
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <p className="text-gray-300 text-sm mb-2">Share NFT Contract Address (CA):</p>
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                  <code className="text-green-400 font-mono">0x0551B45932B03E35E0FD2CF474216D87fD80c519</code>
                  <button
                    onClick={handleCopyShareAddress}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Copy
                  </button>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Initial Share Price:</span>
                  <span className="font-semibold">$1.25</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Total Supply:</span>
                  <span className="font-semibold">1.6M Shares</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TokenDetails />
        <FAQ />
      </div>
    </div>
  );
};