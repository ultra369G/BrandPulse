import { useEffect, useState } from 'react';
import { Terminal, Github, User, Cpu, Activity, ExternalLink } from 'lucide-react';

interface Profile {
  fullName: string;
  title: string;
  bio: string;
  githubUrl: string;
}

export default function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch profile:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Branding */}
        <header className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2.5 rounded-lg text-white">
              <Terminal size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">BrandPulse</h1>
              <p className="text-sm text-slate-400">Software Engineering Portfolio & Hub</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>API Online</span>
          </div>
        </header>

        {/* Main Hero Card */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Profile Bio Section */}
          <div className="md:col-span-2 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm space-y-4">
            <div className="flex items-center space-x-2 text-blue-400 text-sm font-medium">
              <User size={16} />
              <span>Developer Identity</span>
            </div>
            
            {loading ? (
              <p className="text-slate-400 animate-pulse">Connecting to backend database...</p>
            ) : profile ? (
              <>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">{profile.fullName}</h2>
                <p className="text-blue-400 font-semibold">{profile.title}</p>
                <p className="text-slate-300 leading-relaxed">{profile.bio}</p>
                
                <div className="pt-4 flex gap-4">
                  <a 
                    href={profile.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    <Github size={16} />
                    <span>GitHub Profile</span>
                    <ExternalLink size={14} className="text-slate-400" />
                  </a>
                </div>
              </>
            ) : (
              <p className="text-red-400">No profile found. Make sure you seeded the database!</p>
            )}
          </div>

          {/* Quick Stats / Tech Stack Column */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center space-x-2 text-purple-400 text-sm font-medium">
                <Cpu size={16} />
                <span>Tech Stack</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center justify-between bg-slate-800/50 px-3 py-2 rounded-lg">
                  <span>TypeScript</span>
                  <span className="text-xs text-slate-500">Strict</span>
                </li>
                <li className="flex items-center justify-between bg-slate-800/50 px-3 py-2 rounded-lg">
                  <span>React</span>
                  <span className="text-xs text-slate-500">Vite</span>
                </li>
                <li className="flex items-center justify-between bg-slate-800/50 px-3 py-2 rounded-lg">
                  <span>Node.js & Express</span>
                  <span className="text-xs text-slate-500">REST API</span>
                </li>
                <li className="flex items-center justify-between bg-slate-800/50 px-3 py-2 rounded-lg">
                  <span>PostgreSQL & Drizzle</span>
                  <span className="text-xs text-slate-500">ORM</span>
                </li>
              </ul>
            </div>
          </div>

        </main>

        {/* Footer info */}
        <footer className="text-center text-xs text-slate-500 pt-8 border-t border-slate-900">
          Designed for professional engineering CV review • Powered by PostgreSQL & Drizzle
        </footer>

      </div>
    </div>
  );
}