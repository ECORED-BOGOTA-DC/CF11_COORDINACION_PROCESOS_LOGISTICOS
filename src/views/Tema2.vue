<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Términos de negociación
    
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La función de la negociación es proporcionar un canal de resolución pacífica entre las partes, como proceso de negociación implica los intereses comunes y el reconocimiento del interés mutuo o un problema que produce un diálogo; sin embargo, los procesos de negociación pueden ser conflictivos, para negociar efectivamente en el ámbito internacional se puede comenzar con una descripción general del tema, debido a la relevancia en tantos campos que incluyen los negocios y la comunicación.

    p(data-aos="fade-right") Con el propósito de ampliar las fronteras las empresas requieren herramientas para fortalecer actividades comerciales, se presentan diferencias enfocadas en el idioma, distancias, cultura, moneda y geografía. Por esto, las tecnologías de la información en la negociación son base fundamental; ofrecen ahorros en tiempo y gastos de traslado para consolidar un efectivo acuerdo económico. 

    p.mb-5(data-aos="fade-right") Se manejan diferentes niveles de formalidad y contacto entre las partes; las comunicaciones en una negociación son fundamentales en la construcción de relaciones, manejo al instante de la documentación y el planeamiento de diferentes alternativas para sus planteamientos.

    Separador 

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_1 2.1 Tratados de libre comercio - acuerdos comerciales
    
    .d-flex.flex-wrap.mb-5
      .col-lg-6.col-xl-7.pe-lg-4
        .cajon.color-secundario.p-4.mb-5(style="background-color: #E9F0FE" data-aos="fade-right")
          p.mb-0 Los tratados de libre comercio de Colombia facilitan al país realizar importantes avances en su economía, ya que han ampliado el mercado de bienes y servicios para los colombianos. Además, se establecen vínculos más cercanos con los países socios, permitiendo el fortalecimiento de las relaciones bilaterales y/o regionales. Por otro lado, este tipo de acuerdos comerciales permiten a los exportadores proyectar sus negocios, comparar sus productos con la oferta mundial y generar más empleo.
      .col-lg-6.col-xl-5(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema2/img-2.svg" alt="Imagen decorativa")

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto(style="background: linear-gradient(-90deg, rgba(58,180,177,1) 0%, rgba(26,15,145,1) 100%);")
      .row.justify-content-around.align-items-center(data-aos="flip-up")
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/img-10.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 Tratados de libre comercio vigentes en Colombia
              p.text-small Se invita a consultar los tratados de libre comercio vigentes en Colombia, explore en cada una de las banderas los acuerdos por país o unión de países relacionados con Colombia. 
            .col-sm-auto
              a.boton.color-acento-botones(href="http://www.tlc.gov.co/acuerdos/vigente" target="_blank")
                span Ir al enlace
                i.fas.fa-link

    Separador 

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_2 2.2 Legislación aduanera
    
    p.mb-5(data-aos="fade-right") Demarcación en la que se aplica la legislación aduanera, que abarca todo el territorio nacional, incluido el subsuelo, el mar territorial, la zona contigua al territorio nacional, la plataforma continental, la zona económica exclusiva, el espacio aéreo continental, la zona económica exclusiva, el espacio aéreo, el segmento de la órbita geoestacionaria, el espectro electromagnético y el espacio en el que el Estado colombiano actúa, de acuerdo con el derecho internacional o con las leyes colombianas en ausencia de normas internacionales. En el siguiente recurso se explica un poco más en detalle este proceso:

    .container-100.row.justify-content-center.mb-4(style="background-color: #E6FAF9" data-aos="zoom-in")
      .col-xl-10.mx-auto
        SlyderB(:datos="datosSlyder")
    
    Separador 

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_3 2.3 Transporte internacional
    
    .d-flex.flex-wrap.mb-5
      .col-lg-6.col-xl-7.pe-lg-4
        p(data-aos="fade-right") En la actualidad, la mayoría de los envíos internacionales necesitan utilizar más de un tipo de transporte desde su punto de origen hasta el destino final. Cada uno de los tipos de transporte global ha jugado un papel esencial para facilitar la diversificación geográfica. 
        .cajon.color-secundario.p-4.mb-5(style="background-color: #E9F0FE" data-aos="fade-right")
          p.mb-0 La competitividad del transporte internacional afecta el desempeño económico de estas variables sobre el transporte, se destacan los siguientes países como los más competitivos: Estados Unidos, Hong Kong, Singapur, China, Suecia, España, Japón, Bélgica, Dinamarca y Canadá, destacando que los países de América Latina con mayor puntuación en esta categoría son Brasil, seguido de Panamá, Chile y Costa Rica.
      .col-lg-6.col-xl-5(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema2/img-7.png" alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Cabe señalar que los retos del sistema de transporte han aumentado debido a una mayor demanda de unidades especializadas, una tendencia acelerada hacia el apoyo de redes logísticas más flexibles, la minimización de los inventarios en el canal, el aumento de los requisitos para aumentar la rentabilidad del servicio de transporte en largas distancias, junto con el aumento de los precios del combustible y los costes de transporte.

    p.mb-4.text-center.fw-bold(data-aos="fade-right") A continuación, se presentan los pasos para el proceso de contratación de transporte:

    .row
      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="fade-right")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 1
          p.text-small.mb-0 Selección del modo de transporte.

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-acento-contenido.p-5.py-2.d-flex.align-items-center(data-aos="flip-up")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 2
          p.text-small.mb-0 Elección de la empresa transportadora.

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="fade-left")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 3
          p.text-small.mb-0 Negociación de las condiciones del servicio ofrecido con el agente, fecha, ruta, costos, frecuencia y tiempo de transito.
      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="fade-right")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 4
          p.text-small.mb-0 Diligenciamiento del documento de transporte en forma preliminar.

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-acento-contenido.p-5.py-2.d-flex.align-items-center(data-aos="flip-up")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 5
          p.text-small.mb-0 Liquidación de los fletes por parte  del transportador y/o agente, las tarifas se cotizan en USD.

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="fade-left")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 6
          p.text-small.mb-0 Preparación de la carga para el transporte, embalaje, marcado, etiquetado, unitarizado y seguro.
      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="fade-right")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 7
          p.text-small.mb-0 Alistamiento de documentos de soporte que requiere la exportación, el transportador y/o la importación.

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-acento-contenido.p-5.py-2.d-flex.align-items-center(data-aos="flip-up")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 8
          p.text-small.mb-0 Entrega de la carga al transportador en el lugar acordado, junto con los documentos requeridos.

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="fade-left")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 9
          p.text-small.mb-0 Pago de fletes.

    Separador 

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_4 2.4 Incoterms
    
    p.mb-5(data-aos="fade-right") Representa un término universal que define una transacción entre el importador y el exportador, para que ambas partes entiendan las tareas, los costes, los riesgos y las responsabilidades, así como la logística y el manejo del transporte desde la salida del producto hasta su recepción por el país importador.
    .d-flex.mb-4(data-aos="fade-right")
      h3.py-3.px-4(style="background-color: #57DBD8; border-bottom-left-radius: 29px; border-top-right-radius: 29px;") Incoterms más utilizados para cualquier medio de transporte  

    .d-flex.flex-wrap.mb-5
      .col-lg-6.col-xl-8.pe-lg-4(data-aos="fade-right")
        p La estructura de los Incoterms 2020 es lógica y coherente, son fáciles de usar y no requieren ningún conocimiento previo significativo. Solo es importante saber qué modo de transporte se utiliza para una actividad específica; hay normas para todos los medios de transporte especialmente en el caso de los contenedores y normas que solo son apropiadas para el transporte marítimo y fluvial, también al transporte multimodal, que combina varios modos de transporte, por ejemplo, la carretera, el ferrocarril o el mar.

        p.mb-0 Los Incoterms 2020 se dividen en 11 términos para cualquier modo de transporte (EXW, FCA, CPT, CIP, DAP, DPU y DDP) y para transporte marítimos y aguas navegables (FAS, FOB, CFR y CIF). 
      .col-lg-6.col-xl-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema2/img-8.png" alt="Imagen decorativa")
    
    p.mb-4.text-center.fw-bold(data-aos="fade-right") A manera de consulta se recomienda que como aprendiz consulte las definiciones de los siguientes términos Incoterms:  

    .container-100.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.png')})`}"
      style="background-size: cover; background-repeat: no-repeat; background-position: center"
    )
      img.col-lg-8.col-xl-6.mx-auto(src="@/assets/curso/temas/tema2/img-9.svg" alt="Imagen decorativa" data-aos="zoom-in")

    p.mb-4.text-center.fw-bold(data-aos="fade-right") Revise en las tarjetas los conceptos clave de Incoterms:

    .container-100.py-5.mb-5(
      style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(233,255,254,1) 50%, rgba(255,255,255,1) 100%);"
    )
      .col-xl-9.mx-auto.row.justify-content-center.mb-4
        .col-lg-4.col-md-6.col-11.mb-4
          .crd_hover_txt(data-aos="flip-right")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/tjs-1.jpg" alt="Imagen decorativa Costo")
            .crd_hover_txt--body(style="background-color: #91B3FAF0")
              h5.mb-3.text-center Costo
              p.mb-0 Valor del producto en el lugar de entrega definido, este costo estará siempre asociado al INCOTERM aplicado y al medio de transporte empleado.

        .col-lg-4.col-md-6.col-11.mb-4
          .crd_hover_txt(data-aos="flip-up")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/tjs-2.jpg" alt="Imagen decorativa Flete")
            .crd_hover_txt--body(style="background-color: #57DBD8F0")
              h5.mb-3.text-center Flete
              p.mb-0 Costo del transporte principal que se encarga de cruzar la frontera durante el proceso de exportación en la DFI. Hace parte integral del Incoterm.

        .col-lg-4.col-md-6.col-11.mb-4
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/tjs-3.jpg" alt="Imagen decorativa Riesgo")
            .crd_hover_txt--body(style="background-color: #91B3FAF0")
              h5.mb-3.text-center Riesgo
              p.mb-0 Probabilidad de daño o pérdida de la carga durante el transporte principal. La responsabilidad de asumir el riesgo estará siempre definida por el Incoterm aplicado.
        .col-lg-4.col-md-6.col-11.mb-4
          .crd_hover_txt(data-aos="flip-right")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/tjs-4.jpg" alt="Imagen decorativa Seguro")
            .crd_hover_txt--body(style="background-color: #57DBD8F0")
              h5.mb-3.text-center Seguro
              p.mb-0 Costo de la póliza de seguro del transporte principal que ampara el riesgo asociado; este también estará definido en el Incoterm.

        .col-lg-4.col-md-6.col-11.mb-4
          .crd_hover_txt(data-aos="flip-up")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/tjs-5.jpg" alt="Imagen decorativa Transporte")
            .crd_hover_txt--body(style="background-color: #57DBD8F0")
              h5.mb-3.text-center Transporte
              p.mb-0 Modo de transporte principal de la carga que se encarga de cruzar la frontera de acuerdo con el modo de transporte que será aplicado por  el Incoterm.
    
    .tarjeta.color-primario.p-3.col-lg-10.mx-auto(style="background: linear-gradient(-90deg, rgba(58,180,177,1) 0%, rgba(26,15,145,1) 100%);")
      .row.justify-content-around.align-items-center(data-aos="flip-up")
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-26.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 7 novedades de los Incoterms
              p.text-small Se invita a consultar las 7 novedades de los Incoterms. Explore cada una de las novedades y descargue las guías gratuitas.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://imeanticipa.com/las-7-novedades-de-los-incoterms-2020/" target="_blank")
                span Ir al enlace
                i.fas.fa-link
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Una vez la mercancía llega al territorio aduanero nacional, y es llevada a un depósito aduanero,  se recomienda al importador que cuando tenga dudas sobre la descripción de la mercancía, los números de serie o de identificación o la cantidad,  solicite un preforo antes de presentar la declaración de importación y otros documentos.',
        imagen: require('@/assets/curso/temas/tema2/img-3.svg'),
      },
      {
        titulo: '',
        texto:
          'Para Colombia, la responsabilidad legal está fundamentada por el Decreto 390 que regula el Régimen Aduanero, según la formalidad que debe cumplirse para el régimen, destino u operación de que se trate.',
        imagen: require('@/assets/curso/temas/tema2/img-4.svg'),
      },
      {
        titulo: '',
        texto:
          'Se debe cumplir las formalidades aduaneras al momento de exportar  o importar, como declaración y pago de los derechos e impuestos correspondientes, además de la obligación de cumplir con los requerimientos administrativos que puedan surgir.',
        imagen: require('@/assets/curso/temas/tema2/img-5.svg'),
      },
      {
        titulo: '',
        texto:
          'Importante presentar las obligaciones relacionadas con la llegada del medio de transporte, la presentación de la mercancía ante las autoridades aduaneras, la descarga, la notificación y la disposición de la carga o las mercancías. <br><br>La omisión de las obligaciones aduaneras o pagos de derechos de aduana puede  generar sanciones drásticas.',
        imagen: require('@/assets/curso/temas/tema2/img-6.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
