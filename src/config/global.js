export default {
  global: {
    componenteFormativo: 'Comercio exterior para logística',
    descripcionCurso:
      'A través de este componente formativo se busca que el aprendiz adquiera competencias para operar de manera exitosa procesos de comercio internacional, por medio del conocimiento y práctica en la clasificación de la mercancía, en la subpartida arancelaria y nacionalización de mercancías, de acuerdo con el régimen aduanero y de exportación vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-4.svg'),
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
        titulo: 'Globalización de la economía - comercio exterior',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Proceso de importación y exportación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Requisitos y documentos legales para exportar desde Colombia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Requisitos y documentos legales para importar a Colombia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estructura arancelaria - DIAN',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Agentes de carga',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Agentes de aduana',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Zonas francas',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo:
              'Entidades que promueven y participan del comercio exterior colombiano',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Términos de negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tratados de libre comercio - acuerdos comerciales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Legislación aduanera',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Transporte internacional',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Incoterms',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Proceso logístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Caracterización de modos y medios de transporte',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Costos de exportación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Clasificación de mercancías',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Políticas de negociación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Presupuesto y operaciones',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Indicadores de gestión de la negociación internacional',
            hash: 't_3_6',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/121523_CF11_DU.pdf',
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
  complementario: [
    {
      tema:
        'Entidades que promueven y participan el comercio exterior colombiano',
      referencia:
        'Clúster textil/confección Diseño y Moda Medellín (2014). <em>Guía de entidades que promueven y apoyan las exportaciones colombianas.</em>',
      tipo: 'Guía PDF',
      link:
        'https://www.camaramedellin.com.co/Portals/0/Biblioteca/Publicaciones-cluster/Guia-entidades-exportaciones.pdf ',
    },
    {
      tema: 'Incoterms',
      referencia:
        'Comercio y aduanas. (2019). INCOTERMS 2020: explicación fácil [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=DN4syzxRt_U&t=17s&ab_channel=ComercioyAduanas',
    },
    {
      tema: 'Legislación aduanera',
      referencia:
        'Sánchez, J. I. (2021). <em>Nueva regulación aduanera en Colombia, Decreto 390 marzo 7 de 2016.</em> DIAN.',
      tipo: 'Libro',
      link:
        'https://www.dian.gov.co/aduanas/Documents/Nueva%20Regulaci%C3%B3n%20Aduanera%20en%20Colombia.pdf',
    },
    {
      tema: 'Requisitos y documentos legales para exportar desde Colombia',
      referencia:
        'ProColombia. (2018). <em>¿Cómo exportar servicios desde Colombia?</em> ColombiaTrade.',
      tipo: 'Artículo',
      link:
        'https://www.colombiatrade.com.co/noticias/como-exportar-servicios-desde-colombia',
    },
  ],
  glosario: [
    {
      termino: 'Agencia',
      significado:
        'empresa dedicada a gestionar asuntos o a prestar determinados servicios (Secretaría de Desarrollo Económico, 2021).',
    },
    {
      termino: 'Agencias de aduanas',
      significado:
        'son las personas jurídicas cuyo objeto social principal es el ejercicio del agenciamiento aduanero, para lo cual deben obtener autorización por parte de la Dirección de Impuestos y Aduanas Nacionales (DIAN, 2021).',
    },
    {
      termino: 'Autorización de embarque',
      significado:
        'es el acto mediante el cual la autoridad aduanera permite la salida de las mercancías que han sido sometidas al régimen de exportación (DIAN, 2021).',
    },
    {
      termino: 'Declaración de mercancías',
      significado:
        'es el acto efectuado en la forma prevista por la legislación aduanera, mediante el cual el declarante indica el régimen aduanero que ha de aplicarse a las mercancías y consigna los elementos e informaciones exigidos por las normas pertinentes (DIAN, 2021).',
    },
    {
      termino: 'Derechos <em>antidumping</em>',
      significado:
        'derecho aplicado a las importaciones de bienes particulares provenientes de un país específico, para eliminar el perjuicio causado por el <em>dumping</em> a la industria nacional del país importador (EAFIT, 2021).',
    },
    {
      termino: 'Industria nacional',
      significado:
        'los productores nacionales de productos similares en su totalidad o aquellos cuyos resultados colectivos de los productos constituyen una gran proporción del producto nacional de esos productos (EAFIT, 2021).',
    },
    {
      termino: 'Mecanismo de estabilización de precios',
      significado:
        'es el sistema andino de precios, creado con el objeto principal de estabilizar el costo de importación de un grupo especial de productos agropecuarios caracterizados por una marcada inestabilidad de sus precios internacionales o por graves distorsiones de estos (MinTIC, 2021).',
    },
    {
      termino: 'Partes interesadas',
      significado:
        'son los productores colombianos del producto objeto de modificación arancelaria, asociaciones mercantiles, gremiales o empresariales productores del bien objeto de una solicitud, productores extranjeros, exportadores, importadores, consumidores o asociaciones que los representen, entidades gubernamentales y todo aquel que responda al aviso publicado en la página de internet del Ministerio de Comercio, Industria y Turismo, que manifieste y demuestre tener interés legítimo en la solicitud (MinTIC, 2021).',
    },
  ],
  referencias: [
    {
      referencia:
        'Baena, J. y Cano, J. (2014). Uso de Tecnologías de Información y Comunicación para la negociación internacional. ¿Ventaja para las empresas colombianas?, Ciencias Estratégicas, 22 (32) (2014), pp. 1-29.',
      link: '',
    },
    {
      referencia:
        'Daniels, L., Radebaug, D. y Sullivan, D. (2004). <em>Negocios internacionales: ambientes y operaciones</em> (1.a ed). Pearson.',
      link: '',
    },
    {
      referencia: 'DIAN. (2021). Glosario de términos. DIAN.',
      link: 'https://www.dian.gov.co/atencionciudadano/Paginas/glosario.aspx',
    },
    {
      referencia: 'EAFIT. (2003). Diccionario de términos de comercio. EAFIT.',
      link:
        'https://www.eafit.edu.co/programas-academicos/pregrados/negocios-internacionales/acerca-programa/Documents/glosario-de-comercio-exterior.pdf',
    },
    {
      referencia:
        'Legiscomex. (2021). Entidades que promueven el comercio exterior en Colombia. Legiscomex.',
      link:
        'https://www.legiscomex.com/Documentos/normatividad-zonas-francas-colombia-rci278',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2021). Glosario. MinTic.',
      link:
        'https://www.mincit.gov.co/mincomercioexterior/defensa-comercial/comite-de-asuntos-aduaneros-arancelarios-y-de-come/glosario/glosario',
    },
    {
      referencia:
        'Mora, L. (s.f.). Indicadores de gestión logística. KPI. DIAN.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (2021). ¿Cómo exportar servicios desde Colombia? ColombiaTrade.',
      link:
        'https://www.colombiatrade.com.co/noticias/como-exportar-servicios-desde-colombia',
    },
    {
      referencia:
        'Sánchez, J. I. (2021). Nueva regulación aduanera en Colombia, Decreto 390 marzo 7 de 2016. DIAN.',
      link:
        'https://www.dian.gov.co/aduanas/Documents/Nueva%20Regulaci%C3%B3n%20Aduanera%20en%20Colombia.pdf',
    },
    {
      referencia:
        'Secretaría de Desarrollo Económico. (2021). Glosario. Alcaldía Mayor de Bogotá.',
      link: '',
    },
    {
      referencia:
        'SIC. (1999). Decreto 2685 de 1999. Superintendencia de Industria y Comercio.',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Dec2685_1999.pdf',
    },
    {
      referencia:
        'TLC. (2021). Tratados de libre comercio vigentes en Colombia. TLC.',
      link: 'http://www.tlc.gov.co/acuerdos/vigente',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Giovanna Escobar',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseño web',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
