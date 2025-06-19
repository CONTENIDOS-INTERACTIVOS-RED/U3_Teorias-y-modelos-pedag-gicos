<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Definición de Pedagogía'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-morado.p-4(data-aos="fade-up")
        p.mb-0 La pedagogía, entendida como disciplina fundamental de la educación, ha sido conceptualizada desde distintas perspectivas. Para Brailovsky (2018), así como la filosofía es la raíz de todas las ciencias, la pedagogía puede considerarse el fundamento de todas las ciencias y disciplinas relacionadas con la educación. Incluso podría entenderse como una forma de <i>filosofía política aplicada</i>, ya que implica una reflexión sistemática sobre la educación, especialmente en el contexto escolar. Esta disciplina se ocupa de identificar, en los aspectos cotidianos, problemas profundos y complejos, lo cual exige abordar el tipo de reflexión que propone y su manifestación en las instituciones educativas.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Complementando esta visión, la Universidad de los Andes (2023) plantea que la pedagogía es una disciplina esencial en el campo educativo, dedicada al estudio sistemático de los procesos de enseñanza y aprendizaje. Su objetivo principal es comprender cómo se genera el aprendizaje, desarrollando estrategias pedagógicas que impulsen el desarrollo integral de los estudiantes. Este análisis incluye enfoques desde diversas perspectivas —psicológica, sociológica y cultural—, y abarca la transmisión de conocimientos, la construcción de significados y el desarrollo de habilidades y competencias.
        .d-flex.bg-amarillo.p-4(data-aos='fade-up').flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-5.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 La pedagogía cobra relevancia por su capacidad de <b>mejorar los procesos educativos</b> mediante teorías y métodos que fortalecen el desarrollo <b>cognitivo, socioemocional y ético.</b> Además, permite construir entornos de aprendizaje motivadores, inclusivos y participativos, donde el estudiante es protagonista de su propio conocimiento y desarrollo (Universidad de los Andes, 2023).

    .row.mb-4
      .col-12.col-xl-9
        p.mb-4 En cuanto a su origen etimológico, Veschi (2019) explica que el término <i>pedagogía</i> proviene del griego <i>paidagōgía</i>, relacionado con la idea de acompañamiento. Está compuesto por <i>paidos</i> (hijo o niño) y el verbo <i>agein</i>, que proviene de la raíz griega <i>ag-</i>, asociada con guiar u orientar. El término pasó al latín como <i>paedagōgus</i> y luego al español como “pedagogo”. En la antigua Grecia, el <i>paidagōgós</i> era un esclavo encargado de llevar a los niños a la escuela. Con el tiempo, esta figura evolucionó hacia el concepto actual de pedagogía como arte y ciencia de enseñar.
        .bg-azul-oscuro.p-4(data-aos='fade-up')
          span La Universidad Internacional de La Rioja (2025) define la pedagogía como una ciencia orientada a la <b>investigación y reflexión sobre los procesos educativos</b>, con el fin de <b>sistematizarlos y optimizarlos</b>. Esta disciplina se encarga de recopilar, clasificar y analizar información educativa para establecer principios normativos que contribuyan a mejorar dichos procesos. Además, su papel es reconocido en el marco del <b>Objetivo de Desarrollo Sostenible (ODS) 4</b> de la UNESCO, que busca garantizar una educación inclusiva, equitativa y de calidad para todos, entendida como base del desarrollo sostenible y de la mejora de la calidad de vida.
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        .bg-morado-oscuro.p-4(data-aos='fade-up')
          span.text-white A lo largo del tiempo, la pedagogía ha superado el enfoque centrado en la infancia, abarcando <b>todas las etapas del ciclo vital</b> y contextos diversos como el familiar, social, cultural, educativo y laboral. Su objetivo último es facilitar una <b>formación integral</b> del individuo, no solo en el plano formal, sino también en su dimensión emocional, intelectual y social. Por ello, los ambientes pedagógicos deben estar adaptados a las características y necesidades de los estudiantes, promoviendo así su máximo desarrollo (Universidad Internacional de la Rioja, 2025).

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Precursores y aportes a la definición de la pedagogía

    p.mb-4 La pedagogía ha sido construida a lo largo del tiempo por las ideas de diversos pensadores. A continuación, se presenta una síntesis de sus contribuciones más relevantes, destacadas por el portal LaHistoria, (2024):

    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Sócrates (470–399 a.C.)")
            p Introdujo la <i>mayéutica</i>, un método basado en el diálogo reflexivo que guía al estudiante a descubrir el conocimiento por sí mismo.
          .div(titulo="Platón (427–347 a.C.)")
            p En La <i>República</i>, propuso un sistema educativo estructurado por etapas. Enfatizó la formación de ciudadanos virtuosos y la educación como medio para la justicia.
          .div(titulo="Aristóteles (384–322 a.C.)")
            p Valoró la experiencia y la observación. Defendió una educación orientada a la vida práctica, el desarrollo de virtudes éticas e intelectuales y la búsqueda de la felicidad.
          .div(titulo="Quintiliano (35–100 d.C.)")
            p En <i>Institutio Oratoria</i>, planteó la educación como un proceso integral que considera la personalidad, la disciplina y la motivación del estudiante.
          .div(titulo="Comenio (1592–1670)")
            p En <i>Didáctica Magna</i>, propuso una enseñanza gradual, sensorial y universal. Considerado el padre de la pedagogía moderna por su enfoque sistemático y accesible.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="J. J. Rousseau (s. XVIII)")
            p Defendió una educación naturalista centrada en el desarrollo espontáneo del niño, privilegiando la experiencia y la libertad.
          .div(titulo="Immanuel Kant (s. XVIII–XIX)")
            p Consideró la pedagogía como guía hacia la razón y la autonomía moral mediante instrucción y disciplina.
          .div(titulo="Joseph Lancaster (s. XVIII–XIX)")
            p Propuso la enseñanza mutua: los estudiantes más avanzados enseñan a los más jóvenes, favoreciendo la educación masiva.
          .div(titulo="María Montessori (s. XX)")
            p Enfatizó la autonomía infantil, la libertad con límites y el <i>ambiente preparado</i>; el niño como protagonista activo del aprendizaje. 
          .div(titulo="John Dewey (s. XIX–XX)")
            p Defensor del aprendizaje experiencial. Propuso una pedagogía pragmática basada en la acción, la resolución de problemas y la conexión escuela–vida.

    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Lev Vygotsky (s. XX)")
            p Introdujo la <i>Zona de Desarrollo Próximo</i> y resaltó la influencia del entorno sociocultural y la interacción social en el aprendizaje.
          .div(titulo="Paulo Freire (s. XX)")
            p Desarrolló la <i>pedagogía del oprimido</i>: la educación como práctica de libertad, basada en el diálogo y la reflexión crítica para transformar la realidad.
          .div(titulo="Kieran Egan (s. XX–XXI)")
            p Propuso una pedagogía basada en la imaginación y las herramientas narrativas para hacer el aprendizaje más significativo.
          .div(titulo="David Ausubel (s. XX)")
            p Creador del <i>aprendizaje significativo</i>, que destaca la importancia de los conocimientos previos en la incorporación de nueva información.
          .div(titulo="J. H. Pestalozzi (s. XVIII–XIX)")
            p Abogó por una educación sensorial, intuitiva y emocional que fomente el desarrollo integral del niño.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    .d-flex.bg-verde.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-11.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.pe-xl-3.mb-0.text-white Los aportes de estos pensadores, provenientes de diferentes épocas y contextos, coinciden en <b>colocar al aprendiz en el centro del proceso educativo, valorar la experiencia, considerar el entorno sociocultural y reflexionar sobre los fines y métodos de la educación</b>. Esta diversidad de perspectivas ha consolidado la pedagogía como un campo en permanente evolución.

    .row.bg-azul-claro.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto La pedagogía como arte, ciencia o disciplina
          p.mb-5(data-aos="fade-up") Se invita a leer el documento La pedagogía como arte, ciencia o disciplina, donde se aborda el debate contemporáneo sobre la naturaleza de la pedagogía como ciencia, arte o disciplina, examinando su estatus epistemológico y objeto de estudio desde distintas perspectivas internacionales.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_La pedagogia_como_arte.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> La pedagogía como arte, ciencia o disciplina
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/275513?page=15") Martínez-Otero Pèrez, V. (2024). Pedagogía de la infancia y la adolescencia
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=ooLWFJLC-70") [Vídeo] Los 4 principios de la educación progresiva de John Dewey
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/120857?page=13") Gil Álvarez, J. L. & Morales Cruz, M. (2018). Evaluación y calidad de la educación
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=TAy6fyMdMok") [Vídeo] Evaluación diagnóstica, formativa y sumativa
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
