export default {
  global: {
    Name: 'Fundamentos del mercadeo',
    Description:
      'El propósito de este componente de formación es ayudar a los aprendices a desarrollar su comprensión de los conceptos básicos del mercadeo y a entender la importancia de llevar a cabo un plan de mercadeo como estrategia clave a la hora de iniciar cualquier tipo de negocio, asegurando el crecimiento en el mercado de consumidores de su producto o servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción al mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Importancia del mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Variables del mercado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan estratégico de mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Análisis de competencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Dimensiones en el análisis de la competencia',
            hash: 't_6_1',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Marco legal vigente, <em>e-commerce</em> y redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Generalidades del comercio electrónico',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Características del comercio electrónico',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Regulación del comercio electrónico',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Normatividad del comercio electrónico',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/135329_CF01_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'AMA (American Marketing Association)',
      significado:
        'organización de origen estadounidense que agrupa a los profesionales y educadores del <em>marketing</em> (Olamendi, 2021).',
    },
    {
      termino: 'Negocio',
      significado:
        'un negocio debe definirse de acuerdo con tres dimensiones: los grupos de clientes a los que se sirve, las necesidades de los clientes que se satisfacen y la tecnología que permite producir los bienes o servicios ofrecidos (Olamendi, 2021).',
    },
    {
      termino: 'Planificación',
      significado:
        'es el proceso de reflexión, análisis y decisión, cuyo fin básico es la aproximación de la empresa hacia el futuro deseado, en un entorno incierto y habitualmente hostil (Olamendi, 2021).',
    },
    {
      termino: 'Plan de acción',
      significado:
        'es un conjunto de tareas organizadas que deben ser ejecutadas con los recursos disponibles y potenciales, para la consecución de los objetivos fijados (Olamendi, 2021).',
    },
    {
      termino: 'Valor agregado',
      significado:
        'Valor que el fabricante agrega a los materiales que prepara como productos para el consumo del mercado (Olamendi, 2021).',
    },
  ],
  referencias: [
    {
      referencia:
        'American Marketing Association. (2017). <em>Definitions of marketing</em>. Recuperado de:',
      link:
        'https://www.ama.org/the-definition-of-marketing-what-is-marketing/',
    },
    {
      referencia:
        'Baena, V., y Moreno, F. (2010). Instrumentos de <em>marketing</em>: Decisiones sobre producto, precio, distribución, comunicación y <em>marketing</em> directo. Editorial UOC.',
    },
    {
      referencia:
        'Congreso de Colombia. (1999, 18 de agosto). Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones. Diario Oficial No. 43.673. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4276',
    },
    {
      referencia:
        'Congreso de Colombia. (2011, 12 de octubre). Ley 1480 de 2011. Por medio de la cual se expide el Estatuto del Consumidor y se dictan otras disposiciones. Diario Oficial No. 48.220. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306',
    },
    {
      referencia:
        'Congreso de Colombia. (2012, 17 de octubre). Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial No. 48.587. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social. (2009, 9 de noviembre). Documento CONPES 3620: Lineamientos de política para el desarrollo e impulso del comercio electrónico en Colombia. Departamento Nacional de Planeación. Recuperado de:',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3620.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2023, 1 de noviembre). Resolución 000165 de 2023. Por la cual se desarrolla el sistema de facturación, los proveedores tecnológicos, se adopta la versión 1.9 del anexo técnico de factura electrónica de venta, se expide el anexo técnico 1.0 del documento equivalente electrónico y se dictan otras disposiciones en materia del sistema de facturación. Recuperado de:',
      link:
        'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0165_2023.htm',
    },
    {
      referencia:
        'Iniestra, L. (2015). Implementación de mercadotecnia digital a una empresa de chocolate <em>gourmet</em> [Tesis de maestría, Instituto Politécnico Nacional]. Repositorio Nacional.',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2013). Fundamentos de <em>marketing</em> (11.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Kotler, P., y Keller, K. L. (2013). Dirección de <em>marketing</em>. Pearson Educación.',
    },
    {
      referencia:
        'Lamb, C. W., Hair, J. F., y McDaniel, C. (2011). <em>Marketing</em>. Cengage Learning.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2015, 26 de mayo). Decreto 1074 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. Diario Oficial No. 49.523. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608',
    },
    {
      referencia:
        'Olamendi, G. (2021). Diccionario de <em>marketing</em>. EIG Business School.',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2012, 22 de noviembre). Decreto 2364 de 2012. Por medio del cual se reglamenta el artículo 7 de la Ley 527 de 1999 sobre la firma electrónica y se dictan otras disposiciones. Diario Oficial No. 48.622. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=50583',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2014, 19 de febrero). Decreto 333 de 2014. Por el cual se reglamenta el artículo 160 del Decreto-ley 19 de 2012. Diario Oficial No. 49.069. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56767',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2020, 5 de marzo). Decreto 358 de 2020. Por el cual se reglamentan disposiciones en materia tributaria relacionadas con los sistemas de facturación. Diario Oficial No. 51.247. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=110414',
    },
    {
      referencia:
        'Rincón, E. (2017). Derecho del comercio electrónico y de internet. Legis.',
    },
    {
      referencia:
        'Rosenstiehl, J. L. (2016). Tópicos generales de <em>marketing</em> estratégico. Notas de Clase No. 39.',
    },
    {
      referencia:
        'Sainz, J. M. (2015). El plan de <em>marketing</em> en la práctica. ESIC Editorial.',
    },
    {
      referencia:
        'Silva, R. (2009). Beneficios del comercio electrónico. Perspectivas, (24), 151–164. Recuperado de:',
      link: 'https://www.redalyc.org/articulo.oa?id=425942160008',
    },
    {
      referencia:
        'Stanton, W. J., Etzel, M. J., y Walker, B. J. (2007). Fundamentos de <em>marketing</em> (13.ª ed.). McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Xie, Y. M. S. (2021). <em>Marketing</em> digital: Navegando en aguas digitales, sumérgete conmigo. Ediciones de la U.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Camila Álvarez',
          cargo: 'Contratista diseño curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Uriel Darío González Montoya',
          cargo: 'Acompañamiento pedagógico',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Liliana Ceballos',
          cargo: 'Contratista diseño curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Cristian Metaute Medina',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Víctor Cardenas',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Villamizar',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ludwyng Corzo',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.magnific.com/es" target="_blank">www.magnific.com/es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
