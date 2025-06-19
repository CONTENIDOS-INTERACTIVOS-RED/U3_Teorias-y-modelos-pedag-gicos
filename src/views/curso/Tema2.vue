<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Modelo constructivista – Pedagogía dialogante'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-30.png', alt='Texto descriptivo de la imagen')
        .col-12.col-xl-8
          p.mb-4 Para comprender la pedagogía dialogante, es esencial partir del concepto de constructivismo. Según Farias (2023), el constructivismo es una corriente educativa sustentada en diversas teorías psicológicas, particularmente las de Piaget, Vygotsky, Ausubel y Bruner. Aunque ninguno de estos autores se autodefinió como “constructivista”, sus postulados comparten principios centrales de esta perspectiva. En esencia, el constructivismo busca explicar cómo se construye el conocimiento humano y cómo se adquiere a través de la experiencia.
          .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-31.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Una característica fundamental de esta corriente es que el aprendizaje es un <b>proceso activo</b>: al enfrentarse a información nueva, cada persona la relaciona con sus experiencias previas, generando una reorganización en su estructura mental. Este proceso, explicado por Piaget a través de los mecanismos de <i>asimilación</i> y <i>acomodación</i>, es subjetivo y varía de acuerdo con la historia individual de cada aprendiz. Así, el conocimiento se va formando como una red interconectada que se enriquece con el tiempo (Farias, 2023)

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Constructivismo cognitivo (Piaget, teoría del desarrollo intelectual)
                p Según Serrano y Pons (2011), el conocimiento se construye individualmente. El análisis del aprendizaje se aborda desde tres niveles: <b>macrogenético, microgénesis y una aproximación integradora</b>. Se destaca la función de las representaciones mentales y la reorganización de esquemas a partir de nuevas experiencias. Aunque se trata de un proceso interno, las interacciones sociales actúan como catalizadores al generar contradicciones que el individuo debe resolver.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Procesamiento de la información(influencias piagetianas en EE. UU.)
                p La mente humana se interpreta como un <i>procesador simbólico de información</i>. Esta perspectiva, opuesta al conductismo, enfatiza el papel de la <b>memoria activa, la organización</b> del conocimiento y la <b>significatividad</b> de los contenidos, integrando principios constructivistas como la <i>subjetividad y la reflexión</i>.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Constructivismo sociocultural(Vygotsky)
                p El conocimiento se construye primero a nivel social (interpsicológico) y luego se internaliza (intrapsicológico). El desarrollo cultural y el aprendizaje están profundamente condicionados por el entorno sociocultural. La <i>Zona de Desarrollo Próximo</i> (ZDP) es central en este modelo. Docente y estudiantes colaboran para negociar y adaptar el conocimiento a partir de sus experiencias compartidas. (Serrano y Pons, 2011)
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')

      h2 Principios del aprendizaje en la pedagogía dialogante
      p.mb-4 Dentro del enfoque sociocultural, el aprendizaje se configura como un <b>proceso dialógico</b>, donde el conocimiento no es transmitido de forma unidireccional, sino construido colectivamente a través de la interacción y el diálogo. En este marco, el significado de lo aprendido se construye en un ambiente organizado, en el que la participación activa de los sujetos permite compartir distintas perspectivas. Este proceso se basa en tres aspectos clave:

      .row.bg-azul.p-4.py-xl-0.mb-4(data-aos='fade-up')
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-35.png', alt='Texto descriptivo de la imagen') 
        .col-12.col-xl-8.d-flex
          .my-auto
            div.d-flex.mb-2
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <b>Relación entre pensamiento individual y colectivo:</b> lo que se aprende en interacción con los demás termina formando parte del pensamiento personal.
            div.d-flex.mb-2
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <b>Uso de símbolos y lenguaje:</b> el lenguaje, junto con gestos y otros símbolos, se convierte en herramienta fundamental para construir y transmitir el conocimiento.
            div.d-flex.mb-2
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <b>Construcción conjunta en un entorno con diferentes niveles de conocimiento:</b> las diferencias cognitivas entre los participantes no son obstáculos, sino elementos que enriquecen el aprendizaje compartido.

      h2 Ambientes de aprendizaje constructivistas

      .row.mb-4
        .col-12.col-xl-8
          .d-flex.bg-morado.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-36.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Los ambientes de aprendizaje bajo el paradigma constructivista juegan un papel decisivo en el proceso educativo. Según Farias (2023), estos espacios deben ofrecer <b>múltiples representaciones de la realidad</b>, evitando simplificaciones y permitiendo la comprensión de la complejidad del mundo real. A diferencia de métodos instruccionales rígidos, se proponen <b>situaciones auténticas y significativas</b>, que conecten lo aprendido con la vida cotidiana.
          span Este tipo de entorno fomenta la <b>reflexión sobre la experiencia</b>, permitiendo que tanto el <b>contexto</b> como el <b>contenido</b> se adapten a la construcción activa del conocimiento. Asimismo, se impulsa la <b>negociación social</b> y la <b>colaboración</b> como medios para enriquecer el aprendizaje, donde los estudiantes trabajan juntos para construir un entendimiento más profundo y significativo.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-37.png', alt='Texto descriptivo de la imagen')

      .row.mb-4.mx-0
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-verde.p-4(data-aos="fade-up")
          p.mb-0.text-white El modelo constructivista, y en particular la <i>pedagogía dialogante</i>, propone una visión del aprendizaje como un proceso participativo, contextualizado y profundamente humano. La construcción del conocimiento no se da de forma aislada ni pasiva, sino mediante la interacción con el entorno, con los otros y consigo mismo. Este enfoque transforma el aula en un espacio de diálogo, colaboración y construcción conjunta del saber, donde tanto estudiantes como docentes se reconocen como agentes activos del proceso educativo.

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Concepto pedagogía dialogante

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5
          p.mb-4 La <b>pedagogía dialogante</b> surge como una evolución del constructivismo y propone el <i>diálogo</i> como herramienta fundamental para la construcción del conocimiento. Este modelo reconoce la importancia de la interacción entre estudiantes y docentes, y plantea que el aprendizaje ocurre a través del intercambio de ideas. (De Zubiría Samper, 2010). A continuación, se expone la evolución de los modelos pedagógicos, desde la escuela tradicional hasta el modelo dialogante, destacando cómo cada enfoque ha contribuido a la comprensión del aprendizaje y al rol del maestro en la formación integral del estudiante.

          p.mb-4 Ahora, lo invitamos a escuchar el siguiente podcast.

          .row
            .col-10.col-xl-6.mx-auto
              TarjetaAudio.color-secundario.bg-white.mb-3(
                texto='Modelos de enseñanza'
                tiempo
                :audio="require('../../assets/componentes/audios/Modelos_de_enseñanza_mezcla.mp3')"
                @audio-hover='mostrarIndicadorTarjetaAudio = false'
              ) 
            .col-6.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

      h2 Dimensiones del desarrollo humano en la educación
      p.mb-4 El modelo dialogante promueve una formación integral del ser humano. La enseñanza ya no se limita a lo cognitivo, sino que incluye dimensiones éticas, afectivas y sociales. (De Zubiría Samper, 2010)
      p.mb-4 Inspirado en Wallon, se destacan cinco tipos de competencias fundamentales para el desarrollo completo del estudiante:

      ImagenInfografica.color-secundario.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-40.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='74.5%' y='19%' numero='+')
          .h5.mb-2 Analítica
          p Capacidad de pensar, razonar y resolver problemas.
        .tarjeta.bg-white.p-4(x='19.4%' y='61.6%' numero='+')
          .h5.mb-2 Afectiva
          p Habilidad para manejar emociones y establecer relaciones empáticas.
        .tarjeta.bg-white.p-4(x='79.4%' y='50%' numero='+')
          .h5.mb-2 Práxica
          p Aplicación del conocimiento en acciones concretas y efectivas.
        .tarjeta.bg-white.p-4(x='24.3%' y='39.6%' numero='+')
          .h5.mb-2 Comunicativa
          p Capacidad de expresarse y comprender a otros en distintos contextos.
        .tarjeta.bg-white.p-4(x='22.2%' y='21.4%' numero='+')
          .h5.mb-2 Social
          p Aptitud para participar activamente en la vida social y asumir responsabilidades.

      .d-flex.bg-morado-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-41.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0.text-white Estas dimensiones son <b>interdependientes</b> pero <b>autónomas</b>, lo que implica que el desarrollo de una no garantiza el de las demás. Por ejemplo, una persona puede ser brillante cognitivamente, pero tener carencias emocionales. Esta complejidad exige una educación que atienda la totalidad del ser humano.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-42.png', alt='Texto descriptivo de la imagen')
        .col-12.col-xl-8
          h2 Cultura, mediación y humanización
          p.mb-4 La pedagogía dialogante también subraya el carácter <b>social y cultural del aprendizaje</b>. La interacción con mediadores culturales es crucial en el proceso de humanización. Casos como el de "niños criados por lobos" muestran que, sin mediación cultural, los seres humanos carecen de lenguaje, afecto y valores fundamentales para su desarrollo. (De Zubiría Samper, 2010) Así, el aprendizaje es una <b>apropiación mutua</b> entre el sujeto y la cultura:
          .bg-azul-claro.p-4(data-aos='fade-up')
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 La cultura proporciona herramientas simbólicas y cognitivas.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 El sujeto las interioriza, resignificándolas y transformando a su vez la cultura.
          .bg-azul.p-4(data-aos='fade-up')
            span Esta relación demuestra que el conocimiento, los valores y las prácticas humanas tienen un carácter <b>histórico y relativo</b>.

      h2 Finalidad de la educación en el modelo dialogante
      p.mb-4 Este enfoque propone una educación que no solo transmite información, sino que <b>forma seres humanos plenos</b>. La escuela debe ser un espacio donde se aprenda a:

      .row.mb-4
        .col-10.col.md-6.col-lg-4.mx-auto
          .d-flex.bg-amarillo-oscuro.p-3.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-43.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0 
              p.pe-xl-3.mb-0 <b>Pensar mejor</b>, desarrollando el juicio crítico.
        .col-10.col.md-6.col-lg-4.mx-auto
          .d-flex.bg-amarillo-oscuro.p-3.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-43.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 <b>Amar mejor</b>, fortaleciendo la inteligencia emocional.
        .col-10.col.md-6.col-lg-4.mx-auto
          .d-flex.bg-amarillo-oscuro.p-3.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-43.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 <b>Actuar mejor</b>, orientando la vida hacia proyectos significativos.

      .row.mb-4
        .col-11.col-lg-10.col-xl-8.mx-auto

          .bg-azul-oscuro.p-4.pt-xl-5.d-flex(data-aos='fade-up')
            .m-auto
              p.mb-4.text-center.text-bold.font-23-px “Un ser humano piensa, ama y actúa; y la escuela debe enseñarnos a pensar, amar y actuar mejor.” 
              .px-5
                p.mx-auto.text-center.font-13-px.pt-2.border-gris-top De Zubiría Samper, 2010    
      
      .row.bg-azul.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Componentes
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Componentes, donde se aborda detalladamente la estructura del modelo pedagógico de la pedagogía dialogante. Este material ofrece explicaciones claras y argumentadas sobre sus propósitos, contenidos, estrategias metodológicas, evaluación y beneficios.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Componentes.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Componentes
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
      
      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>
      
      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="http://www.revistainvecom.org/index.php/invecom/article/download/3007/926") Poma, A. D. L., Chiriboga, P. A. G., Romero, E. M. M., Guaicha, N. C. V., Castillo, L. M. P., Poma, S. G. L., & Peralta, S. R. T. (2024). Construyendo puentes virtuales: la sinfonía de la pedagogía dialogante y la tecnología educativa.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=dLzO8Tos57o") CEC - IAEN. (2016). Constructivismo [Vídeo]
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
  
  </template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    cuestionario: {
      tema: 'Unidad 3',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal diferencia entre el Modelo Tradicional y la Escuela Nueva?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La Escuela Nueva fomenta la memorización como eje central del aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La Escuela Nueva prioriza la autonomía del estudiante, mientras que el Modelo Tradicional centra el aprendizaje en la figura del docente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El Modelo Tradicional no permite la enseñanza en grupo, a diferencia de la Escuela Nueva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ambos modelos tienen exactamente la misma metodología educativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué plantean el Constructivismo y la Pedagogía Dialogante sobre la construcción del conocimiento?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El conocimiento debe ser transmitido de manera rígida y sin interacción social.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se aprende únicamente a través de la repetición y la práctica mecánica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El aprendizaje se construye activamente mediante la interacción con el entorno y el diálogo entre docentes y estudiantes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No consideran la experiencia previa del estudiante como un factor relevante en la educación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes principios es clave en la Pedagogía Dialogante?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diálogo como herramienta central para el aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La evaluación estandarizada como único método de medición del aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La enseñanza basada exclusivamente en libros de texto sin actividades participativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La instrucción unidireccional del docente sin intervención del estudiante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Por qué el Constructivismo enfatiza el aprendizaje significativo?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque se basa en la memorización de contenidos sin aplicación práctica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque ignora la relación entre el aprendizaje y el contexto del estudiante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque los conocimientos adquiridos deben tener conexión con experiencias previas y aplicarse a situaciones reales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque no considera importante el desarrollo del pensamiento crítico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cómo contribuye la Escuela Nueva a la inclusión educativa?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'A través de un currículo rígido que excluye la diversidad de estudiantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Al priorizar únicamente a los estudiantes con habilidades avanzadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Adaptando metodologías flexibles que permiten atender diversas necesidades y contextos educativos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminando la interacción social en el aula.',
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

<style lang="sass"></style>
