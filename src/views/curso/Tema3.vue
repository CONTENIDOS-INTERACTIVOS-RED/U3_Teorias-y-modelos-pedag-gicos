<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Componentes'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      
      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-up")
          p.mb-0 Según Aparisi (2023), los modelos pedagógicos son fundamentales para orientar los procesos de enseñanza y aprendizaje, ya que constituyen enfoques estructurados que buscan alcanzar objetivos formativos específicos. Estos modelos se basan en teorías y metodologías pedagógicas ajustadas a las necesidades de los estudiantes y los contextos educativos, contribuyendo a su formación integral. Uno de sus componentes clave es la <b>concepción del aprendizaje</b>, entendida como la manera en que se interpreta el proceso de adquisición de conocimientos, habilidades, actitudes y valores.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4 De acuerdo con Ocaña (2013), este componente define cómo se aprende, qué papel asume el estudiante y cuáles son los factores que influyen en dicho proceso. La concepción del aprendizaje varía dependiendo del modelo pedagógico adoptado. En algunos casos se concibe como una actividad pasiva, donde el estudiante actúa como receptor de información; en otros, como una experiencia activa y constructiva mediada por la interacción con el entorno.

          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Pasiva / receptiva
                  p.text-small.px-4.text-center.pb-2 El aprendizaje se entiende como la acumulación de respuestas ante estímulos. El estudiante repite contenidos. Modelos asociados: conductismo, pedagogía tradicional.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Activa / constructiva
                  p.text-small.px-4.text-center.pb-2 El estudiante construye significados explorando y reflexionando sobre su experiencia. Modelo asociado: constructivismo.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Interaccionista / sociocultural
                  p.text-small.px-4.text-center.pb-2 El aprendizaje ocurre en la interacción con otros y el contexto. Se construye socialmente. Modelos asociados: socioconstructivismo, Vygotsky.

      p.mb-4 Este componente también implica definir el <b>rol del estudiante</b> dentro del proceso educativo, el cual puede variar notablemente:

      .row.mb-4
        .col-10.col-md-6.mx-auto
          .d-flex.bg-amarillo-oscuro.p-3.flex-column.flex-md-row.mb-4.h-100(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-36.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0.text-bold Activo
              span Participa activamente, investiga, resuelve problemas, reflexiona.
        .col-10.col-md-6.mx-auto
          .d-flex.bg-amarillo-oscuro.p-3.flex-column.flex-md-row.mb-4.h-100(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-37.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0.text-bold Pasivo
              span Recibe la información transmitida por el docente y la reproduce.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Asimismo, Ocaña (2013) resalta que el aprendizaje está condicionado por una serie de <b>factores</b> que deben considerarse en la formulación de cualquier modelo pedagógico:
          .bg-azul-claro.p-4(data-aos='fade-up')
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Cognitivos:</b> procesos como la atención, la memoria, el razonamiento y la percepción.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Emocionales:</b> factores como la motivación, el interés, la ansiedad o la autoestima.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Sociales:</b> la interacción con docentes, compañeros y el entorno sociocultural.
          .bg-azul.p-4(data-aos='fade-up')
            span En conjunto, estos factores influyen de manera directa en la capacidad del estudiante para construir conocimiento, lo cual reafirma que la concepción del aprendizaje no puede aislarse del contexto donde ocurre. Así, este componente no solo describe cómo se aprende, sino que condiciona toda la estructura y el enfoque del modelo pedagógico al que pertenece.

      h2 A.	Concepción de la enseñanza

      p.mb-4 La <b>concepción de la enseñanza</b> constituye un componente esencial en los modelos pedagógicos, ya que determina cómo se entiende el rol del docente, el proceso de enseñanza, la organización de la instrucción y la relación que se establece con los estudiantes. Para <i>Tekman Education</i> (2021), esta concepción define las decisiones pedagógicas que dan forma a la práctica docente, mientras que para <i>Ocaña</i> (2013), es un aspecto estructural que varía en función de la teoría que sustenta cada modelo. Uno de los aspectos centrales es el <b>rol del docente</b>, que puede adoptar diferentes formas dependiendo del enfoque pedagógico adoptado:

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Transmisor de conocimiento', :icon="require('@/assets/curso/unidad/img-39.svg')")
          .row
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Transmisor de conocimiento
              p(data-aos='fade-up') El profesor es la fuente principal de información. Enseña de manera directa y estructurada. Modelo asociado: tradicional.
            .d-none.d-lg-block.col-md-12.col-lg-4(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-40.png', alt='Descripción de la imagen')
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Facilitador del aprendizaje', :icon="require('@/assets/curso/unidad/img-39.svg')")
          .row
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Facilitador del aprendizaje
              p(data-aos='fade-up') Crea condiciones para que el estudiante construya su propio conocimiento. Modelo asociado: constructivista.
            .d-none.d-lg-block.col-md-12.col-lg-4(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-41.png', alt='Descripción de la imagen')
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Guía del desarrollo personal', :icon="require('@/assets/curso/unidad/img-39.svg')")
          .row
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Guía del desarrollo personal
              p(data-aos='fade-up') Acompaña al estudiante, considerando sus intereses y necesidades individuales. Modelo asociado: humanista.
            .d-none.d-lg-block.col-md-12.col-lg-4(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Descripción de la imagen')
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Mediador sociocultural', :icon="require('@/assets/curso/unidad/img-39.svg')")
          .row
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Mediador sociocultural
              p(data-aos='fade-up') Actúa como puente entre el alumno y su entorno, promoviendo el aprendizaje colaborativo. Modelo asociado: sociocultural.
            .d-none.d-lg-block.col-md-12.col-lg-4(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-43.png', alt='Descripción de la imagen')

      p.mb-4 Otro aspecto clave es la <b>organización de la instrucción</b>, que se refiere a la planificación y estructuración de las actividades de enseñanza. Esta puede asumir diversas formas:

      .row.mb-4.bg-azul-oscuro.bg-full-width.p-4.pb-xl-0
        .col-5.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex
          .my-auto.p-4.p-xl-0
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Clases magistrales:</b> Comunes en modelos tradicionales, se centran en la exposición directa de contenidos por parte del docente.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Aprendizaje basado en proyectos:</b> Típico de enfoques activos, promueve la resolución de problemas y la participación activa.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Uso de tecnología educativa:</b> En modelos contemporáneos, se incorporan herramientas digitales para enriquecer el entorno de aprendizaje.

      p.mb-4 En cuanto a las <b>estrategias de enseñanza</b>, estas dependen de los objetivos y de la visión pedagógica que orienta el modelo:

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Tradicionales
                  p.text-small.px-4.text-center.pb-2 Memorización, repetición, ejercicios individuales dirigidos.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Activas
                  p.text-small.px-4.text-center.pb-2 Participación del estudiante, experimentación, indagación. 
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Colaborativas
                  p.text-small.px-4.text-center.pb-2 Trabajo en equipo, diálogo entre pares, resolución conjunta de tareas.
          
          p.mb-4 Finalmente, la <b>relación entre docente y estudiante</b> es un elemento determinante para el éxito del proceso educativo. Esta relación puede adoptar diversas formas, también determinadas por la concepción pedagógica:

          .row
            .col-10.col-md-6.col-xl-4.mx-auto.mb-4
              .d-flex.bg-amarillo-oscuro.p-3.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-48.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-xl-3.mb-3.text-bold Jerárquica
                  span El docente ejerce autoridad directa. Se observa en modelos tradicionales.
            .col-10.col-md-6.col-xl-4.mx-auto.mb-4
              .d-flex.bg-amarillo-oscuro.p-3.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-49.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-xl-3.mb-3.text-bold Colaborativa
                  span Se promueve el diálogo y la toma de decisiones compartida.
            .col-10.col-md-6.col-xl-4.mx-auto.mb-4
              .d-flex.bg-amarillo-oscuro.p-3.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-50.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-xl-3.mb-3.text-bold Empática
                  span Basada en el respeto, la escucha y la comprensión mutua. Propia del enfoque humanista.

      p.mb-4 Así, la concepción de la enseñanza no se limita a técnicas o metodologías, sino que constituye una dimensión profunda que articula el <b>rol del docente</b>, la <b>estructura de la enseñanza</b>, las <b>estrategias empleadas</b> y la <b>relación educativa</b>. Cada uno de estos aspectos define el sentido pedagógico del modelo y su coherencia interna en la práctica escolar.

      h2 B. Objetivos de aprendizaje 
      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Los <b>objetivos de aprendizaje</b> son un componente esencial del proceso educativo, ya que establecen con claridad qué se espera que los estudiantes logren al finalizar una actividad, clase, unidad o programa formativo. Según Ocaña (2013), estos objetivos orientan la planificación, implementación y evaluación de la enseñanza, garantizando que el aprendizaje sea coherente, significativo y alineado con los fines educativos generales.
          .bg-morado-claro.p-4(data-aos='fade-up')
            span Desde esta perspectiva, los objetivos no solo definen resultados, sino que expresan también una determinada <b>concepción de la educación</b>, reflejando el modelo pedagógico que los sustenta. Así, los objetivos se convierten en una manifestación concreta de los valores, prioridades y enfoques de cada propuesta educativa.
        .col-12.col-xl-4
          img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')

      p.mb-4 Según <i>Tekman Education</i> (2021), los objetivos de aprendizaje se clasifican en tres grandes tipos:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Cognitivos
                p Desarrollo de habilidades intelectuales como la comprensión, el análisis, la síntesis y la evaluación. Ejemplo: "El estudiante será capaz de identificar las principales teorías del aprendizaje."
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Procedimentales
                p Aplicación de conocimientos en situaciones prácticas. Ejemplo: "El estudiante será capaz de realizar un experimento siguiendo el método científico."
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Actitudinales
                p Formación de valores, actitudes y comportamientos como el respeto, la empatía y la responsabilidad. Ejemplo: "El estudiante demostrará respeto por las opiniones de sus compañeros durante discusiones grupales."

      p.mb-4 Para que estos objetivos sean realmente útiles en el contexto pedagógico, deben formularse de manera clara, precisa y evaluable. Una herramienta útil para su redacción es el modelo <b>SMART</b>, ampliamente utilizado en educación:

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-55.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='24.4%' y='81%' numero='+')
          .h5.mb-2 S – Specific
          p Específicos: indican claramente lo que se espera.
        .tarjeta.bg-white.p-4(x='36%' y='81%' numero='+')
          .h5.mb-2 M – Measurable
          p Medibles: permiten evaluar el logro del objetivo.
        .tarjeta.bg-white.p-4(x='47.4%' y='81%' numero='+')
          .h5.mb-2 A – Achievable
          p Alcanzables: deben ser realistas para los estudiantes.
        .tarjeta.bg-white.p-4(x='58.8%' y='81%' numero='+')
          .h5.mb-2 R – Relevant
          p Relevantes: conectados con los fines educativos y el contexto.
        .tarjeta.bg-white.p-4(x='70.4%' y='81%' numero='+')
          .h5.mb-2 T – Time-bound
          p Limitados en el tiempo: con plazos definidos para su cumplimiento.

      p.mb-4 Los objetivos de aprendizaje están directamente vinculados al <b>modelo pedagógico adoptado</b>, ya que su formulación depende del enfoque epistemológico y del tipo de formación que se desea promover. Como señala Ocaña (2013), cada modelo prioriza un tipo de objetivo distinto:

      .row.mb-4
        .col-12.col-xl-8
          .bg-amarillo-claro.p-4(data-aos='fade-up')
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Modelo tradicional:</b> se enfoca en la <b>memorización y reproducción</b> de contenidos. El aprendizaje es cuantificable y centrado en el docente.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Modelo constructivista:</b> promueve el <b>aprendizaje significativo</b>, la resolución de problemas y la construcción activa del conocimiento.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Modelo humanista:</b> prioriza el <b>desarrollo integral del estudiante</b>, considerando aspectos emocionales, sociales y éticos.
          .bg-amarillo.p-4(data-aos='fade-up')
            span Así, los objetivos no son neutrales: expresan las intenciones formativas de fondo y definen los criterios para valorar la eficacia del proceso educativo.
        .col-12.col-xl-4
          img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')

      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          h2 C. Contenidos
          p.mb-4 El <b>componente de contenidos</b> es esencial en cualquier modelo pedagógico, ya que define <b>qué se enseña</b> y <b>cómo se organiza</b> el conocimiento para facilitar el desarrollo integral de los estudiantes. Según Ocaña (2013), los contenidos no se limitan a conocimientos teóricos, sino que abarcan también habilidades, valores y actitudes que se consideran significativos para los fines educativos. En esta línea, <i>Tekman Education</i> (2021) clasifica los contenidos en cuatro tipos fundamentales:
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-57.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Conocimientos
                p.px-1.text-small.mb-0.text-center Incluyen hechos, conceptos, teorías y principios que forman parte del saber disciplinar. Ejemplo: aprender sobre la estructura del átomo o las leyes de Newton en ciencias.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-58.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Habilidades
                p.px-1.text-small.mb-0.text-center Se refieren a capacidades prácticas, técnicas o intelectuales que los estudiantes desarrollan. Ejemplo: resolver ecuaciones matemáticas, redactar ensayos o realizar experimentos.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-59.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Valores
                p.px-1.text-small.mb-0.text-center Principios éticos que orientan la convivencia y la toma de decisiones responsables. Ejemplo: fomentar la honestidad, la empatía y el respeto por la diversidad.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-60.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Actitudes
                p.px-1.text-small.mb-0.text-center Disposiciones emocionales y comportamientos frente al aprendizaje, las personas o la realidad. Ejemplo: desarrollar una actitud crítica, curiosa y proactiva hacia el conocimiento.

      p.mb-4 La <b>selección de contenidos</b> está profundamente influenciada por distintos factores pedagógicos:

      .row.mb-4.bg-azul-oscuro.bg-full-width.p-4.pb-xl-0
        .col-5.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex
          .my-auto.p-4.p-xl-0
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Concepción del aprendizaje:</b> En modelos como el constructivismo, se eligen contenidos que faciliten la construcción activa del conocimiento.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Concepción de la enseñanza:</b> En enfoques tradicionales, los contenidos suelen ser predefinidos y centrados en la transmisión de información; en cambio, en modelos activos se priorizan contenidos que promuevan la participación, la exploración y la resolución de problemas.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Objetivos de aprendizaje:</b> Los contenidos deben estar alineados con los objetivos planteados, ya sean de naturaleza cognitiva, procedimental o actitudinal (Tekman, 2021).
      p.mb-4 Además de su selección, la <b>organización de los contenidos</b> también varía según el modelo pedagógico adoptado. Ocaña (2013) señala al menos tres formas principales de estructurarlos:

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Secuencial
                  p.text-small.px-4.text-center.pb-2 Presenta los contenidos en un orden progresivo, desde lo simple hacia lo complejo.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Temática
                  p.text-small.px-4.text-center.pb-2 Agrupa contenidos en torno a temas relevantes o problemas significativos.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Interdisciplinaria
                  p.text-small.px-4.text-center.pb-2 Integra contenidos de diferentes áreas para abordar fenómenos desde múltiples perspectivas.

          .row
            .col-12.col-xl-8
              .bg-morado-oscuro.p-4(data-aos='fade-up').text-white
                p.mb-4 El <b>contexto social, cultural y económico</b> también influye directamente en la selección y organización de los contenidos. Por ejemplo, en comunidades rurales, es pertinente incluir contenidos vinculados a saberes locales como prácticas agrícolas o el cuidado del medio ambiente, integrando el conocimiento escolar con las realidades del entorno (Ocaña, 2013).
                span En conclusión, los contenidos educativos son un eje estructurante del modelo pedagógico. Reflejan no solo qué se enseña, sino también <b>para qué se enseña y desde qué perspectiva teórica se concibe el aprendizaje</b>, lo que los convierte en una pieza clave para la coherencia y relevancia del proceso educativo.
            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-65.png', alt='Texto que describa la imagen')
          
      h2 D. Metodología 
      p.mb-4 La <b>metodología</b> es el componente que articula el conjunto de <b>estrategias, técnicas, actividades, recursos y formas de organización</b> utilizados para llevar a cabo el proceso de enseñanza-aprendizaje. Su finalidad es asegurar que los <b>objetivos educativos se alcancen de forma efectiva</b>, permitiendo a los estudiantes desarrollar conocimientos, habilidades, valores y actitudes de manera integral (Ocaña, 2013). En este marco, <i>Tekman Education</i> (2021) distingue entre estrategias, técnicas, actividades y recursos como elementos interrelacionados que estructuran el trabajo pedagógico:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Estrategias
                p Enfoques generales que guían la acción docente y organizan el proceso de enseñanza. Ejemplos: expositivas (clases magistrales), interactivas (debates, preguntas), experienciales (experimentos, proyectos).
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-67.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Técnicas
                p Procedimientos concretos dentro de una estrategia para facilitar el aprendizaje. Ejemplos: mapas conceptuales, estudio de casos, <i>role-playing</i>.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-68.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Actividades
                p Acciones específicas que realizan los estudiantes durante el aprendizaje. Ejemplos: individuales (lectura, ejercicios), grupales (proyectos, trabajos en equipo), lúdicas (juegos didácticos).
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-69.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Recursos
                p Herramientas y materiales que apoyan la enseñanza. Ejemplos: tradicionales (libros, cuadernos), tecnológicos (plataformas, <i>apps</i>), audiovisuales (videos, imágenes).

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Además, la metodología contempla aspectos organizativos del aula, los cuales influyen directamente en el ambiente de aprendizaje:
          .bg-morado.p-4(data-aos='fade-up')
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Distribución del espacio:</b> desde el aula tradicional hasta configuraciones flexibles (en círculo, en estaciones, en espacios abiertos).
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Dinámica de interacción:</b> define las formas de relación entre el docente y los estudiantes, y entre los propios estudiantes.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Gestión del tiempo:</b> implica la planificación de las actividades, la secuenciación y el ritmo del trabajo en clase (Tekman, 2021).
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-70.png', alt='Texto que describa la imagen')

      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          p.mb-4 Para Ocaña (2013), la <b>coherencia metodológica</b> es fundamental y debe estar en sintonía con los siguientes elementos:
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-71.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Objetivos de aprendizaje
                p.px-1.text-small.mb-0.text-center La metodología debe contribuir de manera directa a su logro.
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-72.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Contenidos
                p.px-1.text-small.mb-0.text-center Las estrategias y recursos deben adaptarse al tipo de saber que se enseña (conceptual, procedimental o actitudinal).
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-73.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Concepción de la enseñanza y del aprendizaje
                p.px-1.text-small.mb-0.text-center El enfoque metodológico debe reflejar el rol que se atribuye tanto al docente como al estudiante dentro del modelo pedagógico.

      .row.bg-verde.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          span.text-white En consecuencia, la metodología no es solo un conjunto de medios o procedimientos, sino un <b>sistema articulado y reflexivo</b> que garantiza la efectividad y la pertinencia del acto educativo, adaptándose al contexto, a las características del grupo y al propósito formativo que se busca alcanzar.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-74.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          h2 E. Evaluación
          .bg-amarillo.p-4.mb-4(data-aos='fade-up')
            span La <b>evaluación</b> es un proceso fundamental en el ámbito educativo, ya que permite valorar no solo el nivel de aprendizaje alcanzado por los estudiantes, sino también la <b>efectividad de las estrategias de enseñanza</b> implementadas. Lejos de limitarse a medir resultados, la evaluación cumple una función formativa, orientadora y reflexiva, ayudando a mejorar continuamente las prácticas pedagógicas (Tekman, 2021). Este componente responde a tres interrogantes clave: <b>¿qué se evalúa?, ¿cómo se evalúa? Y ¿para qué se evalúa?</b>
          .d-flex.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-75.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-3.text-bold ¿Qué se evalúa? 
              span Según <i>Tekman Education</i> (2021), la evaluación abarca diferentes dimensiones del aprendizaje:

      .row.mb-4
        .col-12.col-xl-8
          .d-flex.bg-amarillo-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-76.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-3.text-bold Conocimientos
              span Evalúa la comprensión, memorización y aplicación de conceptos, hechos y teorías. Ejemplo: exámenes escritos, cuestionarios.
          .d-flex.bg-amarillo-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-77.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-3.text-bold Habilidades
              span Mide capacidades prácticas, técnicas o cognitivas en tareas complejas. Ejemplo: resolución de problemas, proyectos, presentaciones.
          .d-flex.bg-amarillo-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-78.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-3.text-bold Actitudes
              span Valora disposiciones, comportamientos y actitudes hacia el aprendizaje y la convivencia. Ejemplo: observación de la participación y la colaboración en actividades.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-79.png', alt='Texto que describa la imagen')

      .d-flex.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-80.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.pe-xl-3.mb-4.text-bold ¿Cómo se evalúa? 
          span Las técnicas y herramientas de evaluación deben seleccionarse de acuerdo con el tipo de aprendizaje que se desea valorar. <i>Tekman Education</i> (2021) destaca las siguientes:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-81.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Pruebas")
              p Pueden ser objetivas (opción múltiple) o subjetivas (ensayos); eficaces para evaluar conocimientos específicos.
            .div(titulo="Proyectos")
              p Permiten valorar la integración de saberes y la aplicación de aprendizajes en contextos reales.
            .div(titulo="Observación")
              p Útil para evaluar habilidades interpersonales y actitudes en situaciones reales.
            .div(titulo="Portafolios")
              p Reúnen evidencias del aprendizaje a lo largo del tiempo (trabajos, reflexiones, actividades).
      
      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
      
          .d-flex.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-82.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-4.text-bold ¿Cuál es su propósito?
              span La evaluación tiene múltiples propósitos, que varían según el momento y la finalidad dentro del proceso educativo:

          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-83.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Calificar
                  p.text-small.px-4.text-center.pb-2 Asigna una puntuación que representa el nivel de logro alcanzado por el estudiante.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-84.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Diagnosticar
                  p.text-small.px-4.text-center.pb-2 Detecta fortalezas y debilidades al inicio o durante el proceso.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-85.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Retroalimentar
                  p.text-small.px-4.text-center.pb-2 Ofrece información para mejorar la enseñanza y el aprendizaje en tiempo real.

      h2 Tipos de evaluación
      p.mb-4 Además de las dimensiones y propósitos, la evaluación se clasifica en distintos tipos, según su momento de aplicación y la participación del estudiante en el proceso:

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Formativa', :icon="require('@/assets/curso/unidad/img-86.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-87.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Formativa
              p(data-aos='fade-up') Se realiza durante el proceso de aprendizaje para monitorear avances y ajustar las estrategias. Favorece la retroalimentación continua.<br><i>Ejemplo: Comentarios del docente en actividades, seguimiento del progreso.</i>

        .tabs-content.border.px-4.p-md-5.py-3(titulo='Sumativa', :icon="require('@/assets/curso/unidad/img-86.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-88.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Sumativa
              p(data-aos='fade-up')  Se aplica al final de una unidad o ciclo para medir los resultados obtenidos.<br><i>Ejemplo: Exámenes finales, proyectos integradores.</i>

        .tabs-content.border.px-4.p-md-5.py-3(titulo='Autoevaluación y coevaluación', :icon="require('@/assets/curso/unidad/img-86.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-89.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Autoevaluación y coevaluación
              p(data-aos='fade-up')  Los estudiantes participan activamente en el proceso evaluativo, reflexionando sobre su propio aprendizaje o el de sus compañeros.<br><i>Fomenta la autonomía, la metacognición y el pensamiento crítico.</i>

      p.mb-4 En síntesis, la evaluación, entendida desde una perspectiva integral, <b>trasciende la simple medición de resultados</b> para convertirse en una herramienta pedagógica que orienta la toma de decisiones, fortalece la práctica docente y promueve el desarrollo personal y académico de los estudiantes.

      .row.bg-azul.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Relación Maestro-Estudiante
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Relación Maestro-Estudiante, donde se aborda la importancia del vínculo entre docentes y estudiantes en el contexto de los modelos pedagógicos. Este material ofrece explicaciones detalladas, reflexiones teóricas y ejemplos comparativos, con el fin de clarificar los elementos que inciden en una relación educativa efectiva y su influencia en el proceso de enseñanza-aprendizaje.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Relacion_Maestro-Estudiante.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Relación Maestro-Estudiante
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-90.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/221583?page=1") López Díaz, R. A. (2019). Modelos pedagógicos y formación docente: apuntes de clase para su comprensión y resignificaciones en el aula y en las instituciones educativas
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=483k2DohXyw") [Vídeo] Modelos pedagógicos
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Pedagogía y Modelos Pedagógicos',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la pedagogía?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ciencia que estudia las matemáticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La ciencia que estudia la educación y los procesos de enseñanza-aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La disciplina que estudia el cuerpo humano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La técnica que analiza la literatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un componente de los modelos pedagógicos?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Metabolismo.', esCorrecta: false },
            { id: 'b', texto: 'Propósitos Educativos.', esCorrecta: true },
            { id: 'c', texto: 'Fotosíntesis.', esCorrecta: false },
            { id: 'd', texto: 'Geografía.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'La pedagogía puede ser entendida como:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo una ciencia.', esCorrecta: false },
            { id: 'b', texto: 'Ciencia, arte o disciplina.', esCorrecta: true },
            { id: 'c', texto: 'Solo una disciplina.', esCorrecta: false },
            { id: 'd', texto: 'Solo una técnica.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué caracteriza al modelo constructivista?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El aprendizaje pasivo del estudiante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La repetición y memorización de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El protagonismo activo del estudiante en la construcción de conocimientos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La supervisión estricta del docente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué diferencia al método de la metodología?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La metodología organiza los métodos, estrategias y recursos, mientras que el método es un conjunto específico de pasos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No hay diferencia, son conceptos sinónimos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El método es más abstracto que la metodología.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La metodología está limitada a las prácticas del docente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
