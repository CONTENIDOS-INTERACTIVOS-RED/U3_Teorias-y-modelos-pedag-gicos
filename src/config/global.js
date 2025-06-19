export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Modelo tradicional Escuela Nueva Modelo constructivista – Pedagogía dialogante',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Modelo tradicional Escuela Nueva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto escuela nueva',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Componentes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Bondades',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelo constructivista – Pedagogía dialogante',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto pedagogía dialogante',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Zaragoza, B. M. V. (2014). Escuela Tradicional y Escuela Nueva. Academia.edu.',
      link:
        'https://www.academia.edu/15110311/ESCUELA_TRADICIONAL_Y_ESCUELA_NUEVA',
    },
    {
      referencia:
        'Díaz Pedrozo, A. N., & Gutiérrez Guerra, N. E. (2019). Historia y evolución de la Escuela Nueva como modelo educativo en Colombia. Universidad Católica de Oriente.',
      link:
        'https://repositorio.uco.edu.co/server/api/core/bitstreams/4761f709-30b0-4d01-8b9a-b9c80901108a/content',
    },
    {
      referencia:
        'SEMANA. (s/f). La escuela nueva, una revolución pedagógica. La Escuela Nueva, una Revolución Pedagógica. Revista SEMANA.',
      link:
        'https://especiales.semana.com/transformadores-de-la-educacion/escuela-nueva.html',
    },
    {
      referencia:
        'Farias, I. (2023, 18 mayo). ¿Qué es el Constructivismo en educación? Psicoactiva.',
      link: 'https://www.psicoactiva.com/blog/que-es-el-constructivismo/',
    },
    {
      referencia:
        'Serrano, J. M. y Pons, R. M. (2011). El constructivismo hoy: enfoques constructivistas en educación. Revista Electrónica de Investigación Educativa.',
      link: 'https://www.scielo.org.mx/pdf/redie/v13n1/v13n1a1.pdf',
    },
    {
      referencia:
        'De Zubiría Samper, J. (2010). Hacia una pedagogía dialogante. Asociación de Educadores de Latinoamérica y el Caribe',
      link:
        'https://pedagogiadialogante.edu.co/assets/pdf/hacia-una-pedagogia-dialogante.pdf',
    },
    {
      referencia:
        'Flórez Pérez, N. E., & Forero Estrada, A. E. (2018). Transformación de las prácticas de aula a partir de la implementación del modelo la pedagogía dialogante en la institución agrícola educativa rural no 12 del corregimiento de Carraipía la Guajira. Universidad de la Sabana.',
      link:
        'https://1library.co/article/la-pedagog%C3%ADa-dialogante-referentes-te%C3%B3ricos.yd704wjy',
    },
  ],
  glosario: [
    {
      termino: 'Autonomía',
      significado:
        'capacidad del estudiante para gestionar su aprendizaje de manera independiente, tomando decisiones sobre su proceso educativo.',
    },
    {
      termino: 'Constructivismo',
      significado:
        'modelo pedagógico que sostiene que el conocimiento se construye a través de la interacción con el entorno y la experiencia previa.',
    },
    {
      termino: 'Cooperación',
      significado:
        'trabajo conjunto entre estudiantes y docentes para fortalecer el aprendizaje y la resolución de problemas.',
    },
    {
      termino: 'Diálogo',
      significado:
        'interacción verbal que permite la construcción de conocimientos a través del intercambio de ideas y reflexiones.',
    },
    {
      termino: 'Empatía',
      significado:
        'habilidad para comprender y compartir las emociones y perspectivas de los demás, fundamental en la educación inclusiva.',
    },
    {
      termino: 'Evaluación',
      significado:
        'proceso de análisis del aprendizaje que abarca dimensiones cognitivas, valorativas y praxiológicas.',
    },
    {
      termino: 'Inclusión',
      significado:
        'principio educativo que garantiza el acceso a la educación a todos los estudiantes, sin importar sus condiciones sociales o cognitivas.',
    },
    {
      termino: 'Pensamiento crítico',
      significado:
        'capacidad de analizar, cuestionar y evaluar información para generar conclusiones fundamentadas.',
    },
    {
      termino: 'Praxiología',
      significado:
        'aplicación práctica del conocimiento, permitiendo que los estudiantes transfieran lo aprendido a situaciones reales.',
    },
    {
      termino: 'Solidaridad',
      significado:
        'valor esencial en la pedagogía dialogante, que fomenta la colaboración y el compromiso social en el aprendizaje.',
    },
  ],
}
