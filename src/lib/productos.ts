export interface ProductoDestacado {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock_status: string; // Corregido el nombre
  proveedor: string;
  unidades_vendidas: number;
  total_revenue: number;
}

export interface Productos {
  id: number; // Se agrega la propiedad faltante
  año: number;
  productos_destacados: ProductoDestacado[];
}

export const productos: Productos[] = [
  {
    id: 1, // Se agregó el ID único para cada objeto
    año: 2022,
    productos_destacados: [
      {
        id: 1,
        nombre: "Quantum Laptop X2",
        categoria: "Computación",
        precio: 1200,
        stock_status: "Agotado",
        proveedor: "TechHardware Corp",
        unidades_vendidas: 320,
        total_revenue: 384000,
      },
      {
        id: 2,
        nombre: "Photon Drone X200",
        categoria: "Drones",
        precio: 850,
        stock_status: "Disponible",
        proveedor: "SkyTech Innovations",
        unidades_vendidas: 150,
        total_revenue: 127500,
      },
      {
        id: 3,
        nombre: "Nebula Tablet 4K",
        categoria: "Tabletas",
        precio: 700,
        stock_status: "Bajo stock",
        proveedor: "DisplayMasters",
        unidades_vendidas: 280,
        total_revenue: 196000,
      },
      {
        id: 4,
        nombre: "Stellar Smartwatch V2",
        categoria: "Wearables",
        precio: 300,
        stock_status: "Disponible",
        proveedor: "WearableTech",
        unidades_vendidas: 450,
        total_revenue: 135000,
      },
      {
        id: 5,
        nombre: "Neural Headphones Pro",
        categoria: "Audio",
        precio: 250,
        stock_status: "Agotado",
        proveedor: "SoundSystems Ltd",
        unidades_vendidas: 600,
        total_revenue: 150000,
      },
    ],
  },
  {
    id: 2, // Se agregó el ID
    año: 2023,
    productos_destacados: [
      {
        id: 6,
        nombre: "Quantum Laptop X3",
        categoria: "Computación",
        precio: 1300,
        stock_status: "Disponible",
        proveedor: "TechHardware Corp",
        unidades_vendidas: 350,
        total_revenue: 455000,
      },
      {
        id: 7,
        nombre: "Photon Drone X300",
        categoria: "Drones",
        precio: 950,
        stock_status: "Disponible",
        proveedor: "SkyTech Innovations",
        unidades_vendidas: 160,
        total_revenue: 152000,
      },
      {
        id: 8,
        nombre: "Nebula Tablet 5G",
        categoria: "Tabletas",
        precio: 750,
        stock_status: "Bajo stock",
        proveedor: "DisplayMasters",
        unidades_vendidas: 300,
        total_revenue: 225000,
      },
      {
        id: 9,
        nombre: "Stellar Smartwatch V3",
        categoria: "Wearables",
        precio: 350,
        stock_status: "Disponible",
        proveedor: "WearableTech",
        unidades_vendidas: 500,
        total_revenue: 175000,
      },
      {
        id: 10,
        nombre: "Neural Headphones X",
        categoria: "Audio",
        precio: 280,
        stock_status: "Disponible",
        proveedor: "SoundSystems Ltd",
        unidades_vendidas: 650,
        total_revenue: 182000,
      },
    ],
  },
];
