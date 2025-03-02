export interface Ventas {
  id: number;
  año: number;
  resumen_general: {
    total_sales: number;
    clientes_activos: number;
    clientes_inactivos: number;
    venta_promedio: number;
    ventas_por_cliente: number;
    tasa_satisfaccion: number;
    tendencia_ventas_mensuales: {
      enero: number;
      febrero: number;
      marzo: number;
      abril: number;
      mayo: number;
      junio: number;
      julio: number;
      agosto: number;
      septiembre: number;
      octubre: number;
      noviembre: number;
      diciembre: number;
    };
  };
  clientes_destacados: ClienteDestacado[];
}

export interface ClienteDestacado {
  id: number;
  nombre: string;
  estado?: string;
  email?: string;
  telefono?: string;
  ultimo_contacto?: string;
  total_gastado: number;
  tasa_satisfaccion?: number;
  ultima_compra?: string;
  vendedor_asignado?: string;
}

export const ventas: Ventas[] = [
  {
    id: 1,
    año: 2020,
    resumen_general: {
      total_sales: 2500000,
      clientes_activos: 150,
      clientes_inactivos: 30,
      venta_promedio: 1150,
      ventas_por_cliente: 16666.67,
      tasa_satisfaccion: 85,
      tendencia_ventas_mensuales: {
        enero: 180000,
        febrero: 160000,
        marzo: 190000,
        abril: 175000,
        mayo: 210000,
        junio: 230000,
        julio: 220000,
        agosto: 240000,
        septiembre: 250000,
        octubre: 260000,
        noviembre: 280000,
        diciembre: 305000,
      },
    },
    clientes_destacados: [
      {
        id: 1,
        nombre: "TechCorp Solutions",
        total_gastado: 150000,
        tasa_satisfaccion: 94,
        ultima_compra: "2020-12-15",
        vendedor_asignado: "Carlos Martínez",
      },
    ],
  },
  {
    id: 2,
    año: 2021,
    resumen_general: {
      total_sales: 4000000,
      clientes_activos: 220,
      clientes_inactivos: 45,
      venta_promedio: 1100,
      ventas_por_cliente: 18181.82,
      tasa_satisfaccion: 88,
      tendencia_ventas_mensuales: {
        enero: 300000,
        febrero: 290000,
        marzo: 320000,
        abril: 310000,
        mayo: 340000,
        junio: 360000,
        julio: 350000,
        agosto: 380000,
        septiembre: 400000,
        octubre: 420000,
        noviembre: 450000,
        diciembre: 480000,
      },
    },
    clientes_destacados: [
      {
        id: 1,
        nombre: "Stellar Innovations",
        estado: "Activo",
        email: "compras@stellar.tech",
        telefono: "+1 555 112 2334",
        ultimo_contacto: "2023-11-25",
        total_gastado: 200000,
      },
      {
        id: 2,
        nombre: "AI Dynamics Corp",
        estado: "Activo",
        email: "soporte@aidynamics.com",
        telefono: "+1 555 223 3445",
        ultimo_contacto: "2023-09-15",
        total_gastado: 170000,
      },
      {
        id: 3,
        nombre: "CyberNet Solutions",
        estado: "Activo",
        email: "ventas@cybernet.sol",
        telefono: "+1 555 334 4556",
        ultimo_contacto: "2023-12-10",
        total_gastado: 220000,
      },
      {
        id: 4,
        nombre: "NanoTech Industries",
        estado: "Activo",
        email: "info@nanotech.ind",
        telefono: "+1 555 445 5667",
        ultimo_contacto: "2023-10-05",
        total_gastado: 150000,
      },
      {
        id: 5,
        nombre: "BioDigital Systems",
        estado: "Activo",
        email: "contacto@biodigital.sys",
        telefono: "+1 555 556 6778",
        ultimo_contacto: "2023-08-20",
        total_gastado: 180000,
      },
      {
        id: 6,
        nombre: "Innovatech Global",
        estado: "Inactivo",
        email: "innovatech@gmail.com",
        telefono: "+1 555 556 6778",
        total_gastado: 300000,
        ultimo_contacto: "2021-11-22",
      },
    ],
  },
  {
    id: 3,
    año: 2022,
    resumen_general: {
      total_sales: 6200000,
      clientes_activos: 300,
      clientes_inactivos: 60,
      venta_promedio: 1050,
      ventas_por_cliente: 20666.67,
      tasa_satisfaccion: 89,
      tendencia_ventas_mensuales: {
        enero: 480000,
        febrero: 460000,
        marzo: 500000,
        abril: 510000,
        mayo: 540000,
        junio: 580000,
        julio: 600000,
        agosto: 620000,
        septiembre: 650000,
        octubre: 680000,
        noviembre: 700000,
        diciembre: 750000,
      },
    },
    clientes_destacados: [
      {
        id: 1,
        nombre: "TechCorp Solutions",
        estado: "Activo",
        email: "compras@techcorp.com",
        telefono: "+1 555 123 4567",
        ultimo_contacto: "2022-11-15",
        total_gastado: 120000,
      },
      {
        id: 2,
        nombre: "Digital Wave Inc",
        estado: "Activo",
        email: "ventas@digitalwave.com",
        telefono: "+1 555 234 5678",
        ultimo_contacto: "2022-09-20",
        total_gastado: 95000,
      },
      {
        id: 3,
        nombre: "Future Systems Co",
        estado: "Activo",
        email: "soporte@futuresystems.co",
        telefono: "+1 555 345 6789",
        ultimo_contacto: "2022-12-01",
        total_gastado: 150000,
      },
      {
        id: 4,
        nombre: "Cloud Nexus Ltd",
        estado: "Activo",
        email: "info@cloudnexus.com",
        telefono: "+1 555 456 7890",
        ultimo_contacto: "2022-10-05",
        total_gastado: 80000,
      },
    ],
  },
];
