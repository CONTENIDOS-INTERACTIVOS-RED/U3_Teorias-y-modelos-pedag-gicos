<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Definición modelos pedagógicos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Según Blanco y Quitora (2000), retomando a Flórez Ochoa, un modelo se define como una imagen o representación estructurada de las interconexiones que definen un fenómeno específico, cuyo propósito es facilitar su comprensión profunda. Aplicado al campo educativo, un <b>modelo pedagógico</b> constituye una herramienta teórica que describe y explica las múltiples relaciones entre los elementos del proceso educativo: estudiante, docente, contenido, método y contexto. No se trata de una estructura rígida, sino de un esquema dinámico que orienta la reflexión y acción educativa.
          .bg-azul-oscuro.p-4(data-aos='fade-up')
            span Esta visión implica no descomponer el fenómeno educativo en partes aisladas, sino comprender cómo estas interactúan e influyen mutuamente. Es un enfoque integrador que busca entender el funcionamiento del proceso educativo en su totalidad.<br>De Zubiría, citado por las mismas autoras, complementa esta idea señalando que un modelo pedagógico debe permitir la reconstrucción de aspectos significativos de la experiencia educativa a través de las huellas que deja en las prácticas de aula, en los productos de los estudiantes, en las relaciones sociales del entorno escolar y en los resultados de investigaciones previas.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

      p.mb-4 En este sentido, un modelo no es solo conceptual, sino también empírico y contextual, ofreciendo una visión holística que incorpora múltiples dimensiones del hecho educativo.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Estudiante
                p.text-small.px-4.text-center.pb-2 Sujeto activo del aprendizaje, con ritmos, contextos y necesidades particulares. 
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Docente
                p.text-small.px-4.text-center.pb-2 Agente orientador del proceso, cuya acción refleja una concepción pedagógica explícita o implícita. 
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Contenido
                p.text-small.px-4.text-center.pb-2 Saber culturalmente seleccionado que responde a objetivos educativos y sociales.
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Método
                p.text-small.px-4.text-center.pb-2 Estrategias y técnicas utilizadas para facilitar el aprendizaje. 
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Contexto
                p.text-small.px-4.text-center.pb-2 Entorno sociocultural, institucional y material en el que se desarrolla el proceso educativo. 

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-up")
          p.mb-0 Desde una perspectiva teórico-práctica, el modelo pedagógico cumple una función central: ofrecer un <b>marco de referencia sólido</b> para interpretar las implicaciones, alcances, limitaciones y debilidades de las prácticas educativas. En las ciencias sociales, y específicamente en pedagogía, los modelos se abordan tanto en un nivel <b>macro</b> (sistemas educativos, enfoques pedagógicos amplios) como <b>micro</b> (interacciones cotidianas en el aula, procesos individuales de aprendizaje).
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

      p.mb-4 Flórez (citado por Blanco y Quitora, 2000) sostiene que los modelos pedagógicos permiten establecer relaciones entre parámetros pedagógicos que reflejan concepciones específicas del ser humano y de la sociedad. Subraya que el análisis de estos modelos exige responder a cinco preguntas fundamentales:

      .row.mb-4
        .col-10.col-md-6.col-xl-4.mx-auto.mb-4
          .d-flex.bg-amarillo-oscuro.p-3.flex-column.flex-md-row.mb-4.h-100(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-3.p-xl-0
              p.pe-xl-3.mb-3.text-bold ¿Cuál es el ideal de persona educada?
              span Dimensión axiológica / formativa.
        .col-10.col-md-6.col-xl-4.mx-auto.mb-4
          .d-flex.bg-amarillo-oscuro.p-3.flex-column.flex-md-row.mb-4.h-100(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-3.p-xl-0
              p.pe-xl-3.mb-3.text-bold ¿Qué estrategias metodológicas se utilizan?
              span Dimensión procedimental.
        .col-10.col-md-6.col-xl-4.mx-auto.mb-4
          .d-flex.bg-amarillo-oscuro.p-3.flex-column.flex-md-row.mb-4.h-100(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-3.p-xl-0
              p.pe-xl-3.mb-3.text-bold ¿Qué contenidos y experiencias se enseñan?
              span Dimensión epistemológica.
        .col-10.col-md-6.col-xl-4.mx-auto.mb-4
          .d-flex.bg-amarillo-oscuro.p-3.flex-column.flex-md-row.mb-4.h-100(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-3.p-xl-0
              p.pe-xl-3.mb-3.text-bold ¿Qué ritmos tiene el proceso formativo?
              span Dimensión temporal y evolutiva del aprendizaje.
        .col-10.col-md-6.col-xl-8.mx-auto.mb-4
          .d-flex.bg-amarillo-oscuro.p-3.flex-column.flex-md-row.mb-4.h-100(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-3.p-xl-0
              p.pe-xl-3.mb-3.text-bold ¿Quién dirige el proceso educativo?
              span Dimensión organizativa y del rol docente.

      p.mb-4 Estas cinco preguntas funcionan como <b>invariantes analíticas</b> que permiten identificar las bases filosóficas, metodológicas y sociales de cualquier modelo pedagógico. Aunque las variantes de aplicación puedan diferir entre modelos, estas preguntas son comunes a su estructura teórica.

      .row.mb-4
        .col-5.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7
          .bg-verde.p-4.mb-4(data-aos='fade-up')
            span.text-white Blanco y Quitora (2000) también enfatizan que la pedagogía, entendida como saber crítico y revisable, se expresa en modelos que se manifiestan tanto en el discurso como en las prácticas. Elementos como los textos escolares, la disposición del aula o los recursos didácticos reflejan concepciones pedagógicas implícitas, conformando lo que puede denominarse un <i>modelo pedagógico</i> en acción.
          span En este marco, autores como Batista y Flórez —citados por las autoras— insisten en que un modelo pedagógico debe analizarse a través de una interrelación de múltiples parámetros:
      
      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Metas educativas")
              p Determinan los fines formativos de acuerdo con los valores sociales.
            .div(titulo="Contenidos de enseñanza")
              p Establecen el saber relevante que debe ser transmitido.
            .div(titulo="Relación profesor–alumno")
              p Define el tipo de interacción pedagógica y de autoridad en el aula.
            .div(titulo="Métodos de enseñanza")
              p Procedimientos empleados para mediar el aprendizaje.
            .div(titulo="Concepción del desarrollo del estudiante")
              p Base para establecer ritmos y trayectorias del aprendizaje.
            .div(titulo="Tipo de institución educativa")
              p Influye en los marcos normativos, recursos y entorno social del proceso.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

      .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-24.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.pe-xl-3.mb-0.text-white Canfux, también citado por Blanco y Quitora (2000), ofrece una definición complementaria: un modelo pedagógico es un conjunto sistematizado de concepciones y acciones que estructuran el proceso educativo, ofreciendo <b>alternativas organizativas</b> que responden a fines sociales, culturales e históricos concretos. Esta visión introduce el criterio de <i>efectividad</i>, vinculado al logro de los objetivos educativos definidos por una sociedad determinada.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Desde esta perspectiva, Zuluaga propone que el modelo pedagógico se puede entender a partir del <i>tipo de sujeto que se desea formar</i>. Analizar el modelo implica preguntarse qué imagen de ser humano subyace en él, cuál es el papel de la escuela, y cómo se relacionan el individuo, el trabajo, la cultura y el conocimiento. Esta orientación vincula directamente el modelo pedagógico con el proyecto social e ideológico de una comunidad.
          .bg-amarillo.p-4(data-aos='fade-up')
            span Finalmente, Ocaña (2013) define el modelo pedagógico como una construcción teórica que <b>interpreta, diseña y ajusta la realidad educativa</b> según necesidades históricas específicas. Es un instrumento que orienta la acción docente y permite lograr aprendizajes efectivos. Además, actúa como una herramienta de investigación que reproduce idealmente el proceso de enseñanza-aprendizaje. Los modelos, para este autor, son representaciones teóricas que ayudan a analizar, transformar y dirigir la práctica educativa, y se construyen a partir de un ideal de ser humano propuesto por la sociedad.

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Tipología de los modelos

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-up")
          p.mb-0 Según Ocaña (2013), los modelos pedagógicos se caracterizan por tres propiedades fundamentales: <b>objetividad, anticipación y corroboración.</b> Estas cualidades les permiten adaptarse a distintos niveles y procesos educativos. Cada modelo funciona como un <b>paradigma estructurador</b> que, más allá de ser una herramienta técnica, refleja una determinada concepción del proceso educativo.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.bg-azul-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-28.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Desde una perspectiva sociocrítica, Ocaña subraya que la educación tiene una función social concreta: reproduce modelos de ser humano definidos históricamente por la clase dominante. Esto implica que la institución educativa no es neutral; responde a intereses sociales, económicos y políticos específicos. Aunque la pedagogía tradicional ha sostenido la idea de una escuela como espacio imparcial, la realidad revela que la educación ha estado condicionada por las exigencias del sistema capitalista —por ejemplo, mediante la formación de mano de obra calificada para el mercado laboral—.

      p.mb-4 En esta línea, la <b>Teoría de la Educación</b> ha puesto en evidencia la confrontación permanente entre diferentes promotores de modelos pedagógicos, quienes buscan imponer su visión de cómo debe funcionar la educación en función de intereses sociales. Por ello, analizar los modelos implica también comprender los <i>conflictos ideológicos</i> que los sustentan. A partir de esta reflexión, Ocaña (2013) propone una <b>tipología de modelos</b> que constituyen la base de los enfoques pedagógicos actuales. Estos modelos permiten comprender y evaluar el proceso educativo desde distintas perspectivas:

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Modelo centrado en la actuación del profesor")
              p Evalúa la eficacia docente observando el comportamiento del profesor en el aula. Se considera eficaz si logra generar bienestar y disposición al aprendizaje en sus alumnos.
            .div(titulo="Modelo basado en el “profesor ideal”")
              p Parte de un perfil ideal del docente. Evalúa a los profesores reales comparando sus cualidades con ese perfil teórico.
            .div(titulo="Modelo centrado en el aprendizaje del alumno")
              p Se enfoca en los resultados del aprendizaje. Si los alumnos aprenden, se considera que la enseñanza fue efectiva.
            .div(titulo="Modelo sistémico del proceso educativo")
              p Analiza el sistema educativo completo en cuatro componentes: el contexto, los insumos (recursos), el proceso (estrategias de enseñanza) y los productos (logros de aprendizaje).
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Modelo de calidad compartida")
              p La calidad educativa es una responsabilidad colectiva. Todos los miembros de la comunidad educativa (docentes, directivos, administrativos) deben velar por ella.
            .div(titulo="Modelo reflexivo")
              p Promueve la reflexión permanente sobre la práctica docente. Impulsa el análisis de lo que se hace, por qué se hace y cuáles son sus efectos.
            .div(titulo="Modelo didáctico")
              p Presenta una estructura teórica formal sobre cómo debe desarrollarse la enseñanza para alcanzar determinados objetivos. Incluye preguntas como: ¿qué?, ¿cómo?, ¿cuándo?, ¿a quién? y ¿con qué? enseñar.
            .div(titulo="Modelo de diseño didáctico")
              p Extensión práctica del modelo didáctico. Establece las condiciones para crear ambientes de aprendizaje significativos a través de tareas específicas.
            .div(titulo="Modelo educativo general")
              p Es el marco más amplio. Incluye normas, teorías, finalidades y representaciones compartidas sobre lo que significa la educación en un contexto social determinado.

      .d-flex.bg-verde.bg-full-width.p-4.flex-column.flex-md-row.mb-5(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-31.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.pe-xl-3.mb-0.text-white Estos modelos ofrecen distintas formas de <b>interpretar, organizar y evaluar</b> la enseñanza. Cada uno de ellos parte de una concepción particular de la educación y del término <i>pedagógico</i>, lo que revela su función estructurante en el quehacer educativo. Tal como señala Ocaña (2013), <b>comprender un modelo pedagógico implica adoptar una postura teórica</b>, es decir, asumir un marco interpretativo que dé sentido a la práctica docente y al acto de educar en su conjunto.

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://revista.redipe.org/index.php/1/article/view/952") Vera-Rojas, M. D. P., Vera, L. F. C., & Rojas, L. A. V. (2020). La necesidad de promover el debate epistemológico de la pedagogía en las facultades de ciencias de la educación, desde la perspectiva latinoamericana
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=ui3nXgrbJK0") [Vídeo] La Pedagogía como Ciencia
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://dialnet.unirioja.es/descarga/articulo/8583043.pdf") Miranda, M. F., Castillo, C. A. D., Córdova, D. M. S., & Cépeda, A. C. (2022). Método invertido y modelo didáctico: una perspectiva motivadora del aprendizaje virtual en contextos de pandemia
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=3AJerLgRCWk") [Vídeo] ESTRATEGIA y METODOLOGÍA
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
