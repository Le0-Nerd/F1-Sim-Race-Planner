
import React, { useState, useEffect } from 'react';
import { Step, Driver, Track, PlayerSession } from './types';
import { DRIVERS, TRACKS, WILDCARDS, F1_LOGO_URL } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('WELCOME');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [players, setPlayers] = useState<PlayerSession[]>([]);
  const [selectedTracks, setSelectedTracks] = useState<Track[]>([]);
  const [activeWildcards, setActiveWildcards] = useState<string[]>([]);

  // Initialize players when count changes
  useEffect(() => {
    const newPlayers: PlayerSession[] = Array.from({ length: playerCount }, (_, i) => ({
      id: i + 1,
      name: `Player ${i + 1}`,
      points: 0,
    }));
    setPlayers(newPlayers);
  }, [playerCount]);

  const goToHome = () => setStep('WELCOME');
  const goBack = () => {
    switch (step) {
      case 'DATE_PLAYERS': setStep('WELCOME'); break;
      case 'DRIVERS': setStep('DATE_PLAYERS'); break;
      case 'TRACKS': setStep('DRIVERS'); break;
      case 'WILDCARDS': setStep('TRACKS'); break;
      case 'POINTS': setStep('WILDCARDS'); break;
      case 'SUMMARY': setStep('POINTS'); break;
      default: break;
    }
  };

  const nextStep = () => {
    switch (step) {
      case 'WELCOME': setStep('DATE_PLAYERS'); break;
      case 'DATE_PLAYERS': setStep('DRIVERS'); break;
      case 'DRIVERS': setStep('TRACKS'); break;
      case 'TRACKS': setStep('WILDCARDS'); break;
      case 'WILDCARDS': setStep('POINTS'); break;
      case 'POINTS': setStep('SUMMARY'); break;
      default: break;
    }
  };

  const randomizeDrivers = () => {
    const shuffled = [...DRIVERS].sort(() => 0.5 - Math.random());
    setPlayers(prev => prev.map((p, idx) => ({ ...p, driver: shuffled[idx % shuffled.length] })));
  };

  const selectDriver = (playerId: number, driver: Driver) => {
    setPlayers(prev => prev.map(p => p.id === playerId ? { ...p, driver } : p));
  };

  const randomizeTracks = (count: number) => {
    const shuffled = [...TRACKS].sort(() => 0.5 - Math.random());
    setSelectedTracks(shuffled.slice(0, count));
  };

  const toggleTrack = (track: Track) => {
    setSelectedTracks(prev => {
      const exists = prev.find(t => t.id === track.id);
      if (exists) return prev.filter(t => t.id !== track.id);
      return [...prev, track];
    });
  };

  const toggleWildcard = (wc: string) => {
    setActiveWildcards(prev => {
      if (prev.includes(wc)) return prev.filter(item => item !== wc);
      return [...prev, wc];
    });
  };

  const randomizeWildcards = () => {
    const count = 3;
    const shuffled = [...WILDCARDS].sort(() => 0.5 - Math.random());
    setActiveWildcards(shuffled.slice(0, count));
  };

  const updatePoints = (playerId: number, points: number) => {
    setPlayers(prev => prev.map(p => p.id === playerId ? { ...p, points } : p));
  };

  // Reusable Header
  const Header = ({ small = true }: { small?: boolean }) => (
    <div className={`flex flex-col items-center mb-8 ${small ? 'mt-4' : 'mt-12'}`}>
      <img 
        src={F1_LOGO_URL} 
        alt="F1 Logo" 
        className={`${small ? 'h-8' : 'h-16 md:h-20'} transition-all duration-300`} 
      />
      {!small && <h1 className="text-3xl md:text-5xl font-bold mt-6 tracking-wide italic uppercase">Sim Race Planner</h1>}
      
      {small && (
        <div className="w-full flex justify-between items-center mt-6 px-4">
          <button onClick={goToHome} className="text-gray-400 hover:text-white flex items-center gap-2 font-semibold uppercase text-xs border border-gray-800 px-3 py-1.5 rounded tracking-widest transition-colors">
            <span>🏠 Home</span>
          </button>
          <h2 className="text-base font-bold italic uppercase tracking-[0.2em] text-white">
            {step.replace('_', ' ')}
          </h2>
          <button onClick={goBack} className="text-gray-400 hover:text-white flex items-center gap-2 font-semibold uppercase text-xs border border-gray-800 px-3 py-1.5 rounded tracking-widest transition-colors">
            <span>⬅ Back</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 pb-32">
      {step === 'WELCOME' && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <Header small={false} />
          <p className="text-gray-400 mt-4 max-w-md tracking-wider font-normal">Optimize your racing night. Pick your squad, your rides, and your tracks in seconds.</p>
          <button 
            onClick={nextStep}
            className="mt-12 bg-f1-red text-white px-12 py-4 rounded-none font-bold text-xl italic skew-x-[-12deg] hover:bg-red-700 transition-colors uppercase tracking-widest"
          >
            Start Planning
          </button>
        </div>
      )}

      {step === 'DATE_PLAYERS' && (
        <div className="animate-in fade-in duration-500">
          <Header />
          <div className="grid grid-cols-1 gap-8 mt-12">
            <div className="f1-card p-8 rounded-lg">
              <label className="block text-f1-red font-bold uppercase mb-4 tracking-[0.2em] text-sm">Select Date</label>
              <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-black border-2 border-gray-800 p-4 rounded text-white text-xl focus:border-f1-red outline-none tracking-wider font-semibold"
              />
            </div>

            <div className="f1-card p-8 rounded-lg">
              <label className="block text-f1-red font-bold uppercase mb-4 tracking-[0.2em] text-sm">Number of Players</label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <button
                    key={num}
                    onClick={() => setPlayerCount(num)}
                    className={`py-4 rounded font-bold text-2xl transition-all tracking-wider ${playerCount === num ? 'bg-f1-red text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'}`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button onClick={nextStep} className="fixed bottom-8 right-8 bg-f1-red px-12 py-4 font-bold italic uppercase skew-x-[-12deg] tracking-widest shadow-xl hover:bg-red-700 transition-colors">Continue ➡</button>
        </div>
      )}

      {step === 'DRIVERS' && (
        <div className="pb-32 animate-in fade-in duration-500">
          <Header />
          <div className="flex justify-between items-center mb-8 px-2">
            <h3 className="text-lg font-bold tracking-wider uppercase">Assign Drivers</h3>
            <button 
              onClick={randomizeDrivers}
              className="bg-white text-black px-6 py-2 font-bold uppercase text-xs skew-x-[-10deg] hover:bg-gray-200 tracking-widest transition-colors"
            >
              🎲 Randomize All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {players.map((player) => (
              <div key={player.id} className="f1-card p-6 rounded relative overflow-hidden transition-all hover:scale-[1.01]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="bg-f1-red text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest italic">Player {player.id}</span>
                    <h4 className="text-xl font-bold italic uppercase mt-2 tracking-wide">
                      {player.driver ? `${player.driver.firstName} ${player.driver.lastName}` : 'Unassigned'}
                    </h4>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-widest">{player.driver?.team || 'Select a driver'}</p>
                  </div>
                  {player.driver && <span className="text-3xl font-bold text-gray-800 opacity-50 italic">#{player.driver.number}</span>}
                </div>

                <div className="flex gap-4">
                  <div className="w-24 h-32 bg-gray-900 rounded overflow-hidden flex-shrink-0 border border-gray-800">
                    {player.driver ? (
                      <img src={player.driver.image} className="w-full h-full object-cover transition-all duration-500" alt={player.driver.lastName} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-700">?</div>
                    )}
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <select 
                      className="w-full bg-black border border-gray-700 p-2 text-xs rounded mb-3 tracking-wider font-semibold focus:border-f1-red outline-none"
                      value={player.driver?.id || ''}
                      onChange={(e) => {
                        const d = DRIVERS.find(x => x.id === e.target.value);
                        if (d) selectDriver(player.id, d);
                      }}
                    >
                      <option value="">Select Manually...</option>
                      {DRIVERS.map(d => (
                        <option key={d.id} value={d.id}>{d.firstName} {d.lastName} ({d.team})</option>
                      ))}
                    </select>
                    <button 
                      onClick={() => {
                        const rand = DRIVERS[Math.floor(Math.random() * DRIVERS.length)];
                        selectDriver(player.id, rand);
                      }}
                      className="w-full bg-gray-800 hover:bg-gray-700 py-2.5 text-[10px] font-bold uppercase rounded tracking-[0.15em] transition-colors"
                    >
                      🎲 Random Individual
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={nextStep} className="fixed bottom-8 right-8 bg-f1-red px-12 py-4 font-bold italic uppercase skew-x-[-12deg] tracking-widest shadow-xl">Continue ➡</button>
        </div>
      )}

      {step === 'TRACKS' && (
        <div className="pb-32 animate-in fade-in duration-500">
          <Header />
          <div className="mb-10 text-center">
            <label className="block text-f1-red font-bold uppercase mb-5 tracking-[0.25em] text-xs">Batch Randomize Tracks</label>
            <div className="flex flex-wrap justify-center gap-3">
              {[3, 5, 10, 15, 24].map(num => (
                <button
                  key={num}
                  onClick={() => randomizeTracks(num)}
                  className="px-6 py-3 bg-gray-900 hover:bg-f1-red transition-all font-bold italic rounded border border-gray-800 tracking-wider hover:border-white"
                >
                  {num} Tracks
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRACKS.map(track => {
              const isSelected = selectedTracks.some(t => t.id === track.id);
              return (
                <button
                  key={track.id}
                  onClick={() => toggleTrack(track)}
                  className={`p-4 rounded text-left transition-all border-l-4 group ${isSelected ? 'bg-f1-red border-white' : 'bg-gray-900 border-gray-800 hover:border-f1-red'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest">R{track.round}</span>
                    <span className="text-lg">{track.flag}</span>
                  </div>
                  <h5 className="font-bold italic uppercase leading-tight text-sm tracking-wide">{track.name}</h5>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase mt-1 tracking-widest">{track.country}</p>
                </button>
              );
            })}
          </div>
          <button onClick={nextStep} className="fixed bottom-8 right-8 bg-f1-red px-12 py-4 font-bold italic uppercase skew-x-[-12deg] tracking-widest shadow-xl">Continue ➡</button>
        </div>
      )}

      {step === 'WILDCARDS' && (
        <div className="pb-32 animate-in fade-in duration-500">
          <Header />
          <div className="mb-10 text-center">
            <label className="block text-f1-red font-bold uppercase mb-5 tracking-[0.25em] text-xs">Session Challenges</label>
            <button
              onClick={randomizeWildcards}
              className="px-10 py-4 bg-white text-black hover:bg-gray-200 transition-all font-bold italic rounded skew-x-[-12deg] tracking-widest uppercase text-sm mb-8"
            >
              🎲 Randomize 3 Challenges
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WILDCARDS.map(wc => {
              const isSelected = activeWildcards.includes(wc);
              return (
                <button
                  key={wc}
                  onClick={() => toggleWildcard(wc)}
                  className={`p-5 rounded-lg text-left transition-all border-l-4 font-bold italic uppercase text-xs tracking-[0.15em] ${isSelected ? 'bg-f1-red border-white text-white' : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-f1-red hover:text-white'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">{isSelected ? '🔥' : '⚙️'}</span>
                    {wc}
                  </div>
                </button>
              );
            })}
          </div>
          <button onClick={nextStep} className="fixed bottom-8 right-8 bg-f1-red px-12 py-4 font-bold italic uppercase skew-x-[-12deg] tracking-widest shadow-xl">Continue ➡</button>
        </div>
      )}

      {step === 'POINTS' && (
        <div className="pb-32 animate-in fade-in duration-500">
          <Header />
          <div className="grid grid-cols-1 gap-4 mt-8">
            {players.map(player => (
              <div key={player.id} className="f1-card p-6 rounded flex items-center justify-between transition-all hover:border-f1-red">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-gray-700 font-bold italic text-f1-red">
                    {player.id}
                  </div>
                  <div>
                    <h4 className="font-bold italic uppercase text-lg tracking-wide">{player.driver?.lastName || `Player ${player.id}`}</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{player.driver?.team || 'Unassigned'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Points</label>
                  <select
                    className="bg-black border-2 border-gray-800 p-3 rounded text-xl font-bold italic w-32 outline-none focus:border-f1-red tracking-wider"
                    value={player.points}
                    onChange={(e) => updatePoints(player.id, parseInt(e.target.value))}
                  >
                    {Array.from({ length: 577 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
          <button onClick={nextStep} className="fixed bottom-8 right-8 bg-f1-red px-12 py-4 font-bold italic uppercase skew-x-[-12deg] tracking-widest shadow-xl">Finish 🏁</button>
        </div>
      )}

      {step === 'SUMMARY' && (
        <div className="pb-32 animate-in slide-in-from-bottom duration-700" id="summary-view">
          <div className="bg-black p-8 md:p-12 border-4 border-f1-red rounded-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <img src={F1_LOGO_URL} className="h-32" alt="" />
            </div>

            <div className="text-center mb-12">
               <img src={F1_LOGO_URL} alt="F1 Logo" className="h-10 mx-auto mb-6" />
               <h1 className="text-4xl md:text-5xl font-bold italic uppercase tracking-wider mb-3">Session Recap</h1>
               <div className="flex justify-center gap-6 text-f1-red font-bold uppercase tracking-[0.2em] text-xs">
                 <span>📅 {date}</span>
                 <span>🏎️ {selectedTracks.length} Rounds</span>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-12">
              {players.sort((a,b) => b.points - a.points).map((player, idx) => (
                <div key={player.id} className="bg-gray-900/50 p-5 rounded-lg flex items-center justify-between border border-gray-800 backdrop-blur-sm">
                  <div className="flex items-center gap-5">
                    <span className={`text-2xl font-bold italic w-10 ${idx === 0 ? 'text-yellow-500' : 'text-gray-600'}`}>P{idx + 1}</span>
                    <div className="w-14 h-14 rounded overflow-hidden bg-black border-2 border-gray-800">
                      <img src={player.driver?.image} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase italic leading-none text-lg tracking-wide">{player.driver?.lastName}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">{player.driver?.team}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold italic text-f1-red tracking-tighter">{player.points}</span>
                    <p className="text-[9px] font-bold uppercase text-gray-600 tracking-widest mt-1">PTS</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              <div>
                <h3 className="text-f1-red font-bold uppercase text-[10px] tracking-[0.3em] mb-5 flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-f1-red"></span> Track List
                </h3>
                <div className="grid grid-cols-2 gap-3">
                   {selectedTracks.map(t => (
                     <div key={t.id} className="text-[10px] bg-gray-900/80 p-3 rounded flex justify-between border border-gray-800/50">
                       <span className="font-bold italic text-white uppercase truncate mr-2 tracking-wider">{t.name}</span>
                       <span className="opacity-70">{t.flag}</span>
                     </div>
                   ))}
                </div>
              </div>
              <div>
                <h3 className="text-f1-red font-bold uppercase text-[10px] tracking-[0.3em] mb-5 flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-f1-red"></span> Challenges
                </h3>
                <div className="grid grid-cols-1 gap-2">
                   {activeWildcards.length > 0 ? activeWildcards.map((w, idx) => (
                     <div key={idx} className="bg-f1-red/5 border border-f1-red/20 p-3 rounded text-[10px] font-bold uppercase italic text-f1-red tracking-wider">
                       ⚙️ {w}
                     </div>
                   )) : <p className="text-gray-700 italic text-[10px] uppercase tracking-widest">Standard Race Session</p>}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16 pt-8 border-t border-gray-800 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-700 italic">
              Official Sim Planner Recap • Keep Racing
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <button 
              onClick={() => window.print()} 
              className="bg-white text-black py-5 font-bold uppercase italic skew-x-[-12deg] hover:bg-gray-200 tracking-[0.2em] transition-all text-sm"
            >
              Print / Save PDF
            </button>
             <button 
              onClick={goToHome} 
              className="bg-gray-800 text-white py-5 font-bold uppercase italic skew-x-[-12deg] hover:bg-gray-700 tracking-[0.2em] transition-all text-sm"
            >
              Reset Session
            </button>
          </div>
          <p className="text-center mt-8 text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em] italic">Screenshot this page to share on WhatsApp!</p>
        </div>
      )}
    </div>
  );
};

export default App;
