import React, { useState } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Datos simulados basados en tu prototipo
  const silabos = [
    { id: 1, nombre: 'Ing de Software', estado: 'Aprobado', color: 'bg-green-600' },
    { id: 2, nombre: 'Taller de Proyectos', estado: 'Pendiente', color: 'bg-yellow-400' },
    { id: 3, nombre: 'Ing de Software II', estado: 'Pendiente', color: 'bg-yellow-400' },
    { id: 4, nombre: 'Pruebas de Software', estado: 'Rechazado', color: 'bg-red-600' },
  ];

  // Filtro de búsqueda
  const filtrados = silabos.filter(s => 
    s.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      
      {/* Sidebar Lateral */}
      <aside className="w-64 bg-white border-r flex flex-col shadow-sm">
        <div className="p-4 border-b">
          <div className="bg-gray-200 text-gray-500 font-bold text-center py-2 rounded-lg">
            Logo USMP
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg text-gray-600 font-medium">
            🏠 Inicio
          </a>
          <a href="#" className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg text-gray-900 font-bold border-l-4 border-gray-800">
            📋 Asignaciones
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg text-gray-600 font-medium">
            💬 Mensajeria
          </a>
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col">
        {/* Header Superior */}
        <header className="h-16 bg-white border-b flex items-center justify-end px-8 shadow-sm">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm">P</div>
            <span className="font-semibold text-gray-700">Palacios ⬇️</span>
          </div>
        </header>

        {/* Panel Central */}
        <div className="p-10 max-w-5xl">
          
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Mis Silabos</h1>
            
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                title="Crear nuevo sílabo"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-700 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Lista de Tarjetas */}
          <div className="space-y-4">
            {filtrados.map(silabo => (
              <div key={silabo.id} className="flex justify-between items-center p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-gray-400"></div>
                  <span className="font-bold text-gray-700 text-lg">{silabo.nombre}</span>
                </div>
                
                <div className="flex items-center gap-6">
                  {/* Cuadro de Color de Estado */}
                  <div className={`w-8 h-8 rounded-md ${silabo.color}`} title={`Estado: ${silabo.estado}`}></div>
                  
                  {/* Icono de Ojito */}
                  <button className="text-gray-400 hover:text-gray-800 transition text-xl">
                    👁️
                  </button>
                </div>
              </div>
            ))}
            
            {filtrados.length === 0 && (
              <p className="text-gray-500 text-center py-8">No se encontraron sílabos con ese nombre.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}