<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Proceso logístico

    img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema3/img-1.png" data-aos="fade-right" alt="Imagen decorativa")
    .tarjeta.tarjeta-edit-2.col-xl-10.mx-auto.mb-5
      p.mb-0 De acuerdo con la DIAN (2021) el proceso logístico es ajustable a las operaciones de comercio exterior, con cifras que utilizan para promover las condiciones geográficas y territoriales del país para la mejora continua de su participación en la economía global de mercado. 
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema3/img-2.png" style="max-width: 400px" alt="Imagen decorativa")
      .col-lg-8.col-xl-8.ps-lg-4
        p.fw-bold Los principales aspectos a destacar son:
        ul.lista-ul--separador
          li(style="border-bottom-style: dashed;")
            i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
            | La operación del transporte combinado a través del territorio nacional, utilizando hasta tres modos diferentes de transporte por tierra, ferrocarril o carretera. En este último caso se espera recuperar la navegabilidad del Río Magdalena.
          li(style="border-bottom-style: dashed;")
            i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
            | Infraestructuras Logísticas Especializadas (ILE) donde se concentran actividades y operaciones múltiples que posicionarán al país como un lugar estratégico para el comercio internacional.
          li
            i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
            | Los Centros de Distribución Logística Internacional en puertos o aeropuertos o en infraestructuras logísticas especializadas (ILE) desde lugares de llegada habilitados, desde donde se podrá reembarcar, importar o exportar mercancías extranjeras, nacionales o en proceso de finalización de un régimen suspensivo o del régimen de transformación y/o ensamblaje, que entren allí para su almacenamiento.
          li
            i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
            | Las zonas de verificación para envíos de entrega rápida o mensajería urgente en aeropuertos, para la llegada o salida aeropuertos, para la llegada o salida de los envíos de forma organizada y para el cumplimiento de las aduanas en cumplimiento de las formalidades aduaneras propias del régimen.
          li
            i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
            | Las zonas de control comunes a varios puertos o muelles, que permitirán descongestionar el funcionamiento actual de los puertos.
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_3_1 3.1 Caracterización de modos y medios de transporte
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Para poder definir las formas de transportación se debe conocer en primera instancia los tipos de productos (características, pesos, compatibilidad, etc.) así como la operación logística del transporte (sitios, frecuencia, volúmenes y pesos) con el objeto de escoger la manera apropiada para un adecuado transporte en función de la naturaleza de la carga, normatividad, economías de escala, costos y tiempos de entrega que deberán ser una de las prioridades a nivel de transportación.
    
    .d-flex.flex-wrap.align-items-start.position-relative.mb-5
      .col-md-7.col-lg-8.col-xl-9.pe-md-4.order-2.order-md-1
        p El transporte juega un papel capital en la interpretación de las interrelaciones físicas y socioeconómicas entre los individuos y grupos en la sociedad; en los análisis de los movimientos de mercancías, personas e información; y en la exploración morfométrica y funcional de las infraestructuras, con el objetivo último de relacionar las restricciones espaciales y los atributos con el origen, extensión, naturaleza y propósito del movimiento. El espacio (geográfico) y movimiento (desplazamiento, intercambio, relación) son dos conceptos básicos que expresan de manera clara el fenómeno del transporte. 
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-left" style="background-color: #F2F6FE")
          p.mb-0 De dichos conceptos se desprenden tres consideraciones espaciales que se deben examinar con detenimiento. En primer lugar, las redes de transporte, su estructura y organización espacial; en segundo lugar, la demanda espacial de los servicios de transporte y, en tercer lugar, los sistemas surgidos en la compleja dialéctica redes-demanda-espacio. 
      img.col-md-5.col-lg-4.col-xl-3.mx-auto.mb-4.order-1.order-md-2(src="@/assets/curso/temas/tema3/img-4.png" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")

    .tarjeta-avatar-b.col-xl-11.me-xl-auto.mb-5
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema3/img-5.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Desde un punto de vista funcional y sistémico, las redes de transporte constituyen el sistema arterial de la organización regional. Están definidas por la estructura de las rutas de carreteras, ferrocarriles o los corredores marítimos y aéreos, entendiéndose como ruta la simple relación o arco entre los nodos que son parte de la red. Los nodos constituyen los focos de generación y atracción de flujos y estos últimos, los elementos transportados a través de las redes (personas, mercancías, información); sin embargo, el sector económico es importante en el desarrollo  del transporte en todas sus esferas. <b>(Martínez, 2009)</b>
    

    TabsB.color-acento-contenido
      .p-4.py-4.py-md-5.d-flex.flex-wrap(
        titulo="Modo terrestre"
        :icono="require('@/assets/curso/temas/tema3/img-6.svg')"
        style="background-color: #C4F2F1"
      )
        .col-lg-7.order-2.order-lg-1.pe-lg-4
          p Es muy versátil por su velocidad frente a la capacidad para prestar servicio puerta, este modo es el más asequible para cualquier tipo de empresa.
          p <b>Medios:</b>
            br
            |Camiones, camionetas, carrotanques, camabajas, niñeras.
        .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-auto
          img.mx-auto(src="@/assets/curso/temas/tema3/img-10.png" data-aos="fade-right" alt="Imagen decorativa medio de transporte terrestre")
      .p-4.py-4.py-md-5.d-flex.flex-wrap(
        titulo="Modo marítimo"
        :icono="require('@/assets/curso/temas/tema3/img-7.svg')"
        style="background-color: #C4F2F1"
      )
        .col-lg-7.order-2.order-lg-1.pe-lg-4
          p Tienen ventajas sobre los otros modos, pueden cargar embarques de grandes dimensiones y peso. Este modo de transporte el de más bajo costo para la movilización de mercancías al exterior.
          p <b>Medios:</b>
            br
            |Buques petroleros, portacontenedores, buques graneleros, buques frigoríficos, buques de carga general.
        .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-auto
          img.mx-auto(src="@/assets/curso/temas/tema3/img-11.png" data-aos="fade-right" alt="Imagen decorativa medio de transporte maritimo")
      .p-4.py-4.py-md-5.d-flex.flex-wrap(
        titulo="Modo aéreo"
        :icono="require('@/assets/curso/temas/tema3/img-8.svg')"
        style="background-color: #C4F2F1"
      )
        .col-lg-7.order-2.order-lg-1.pe-lg-4
          p Es el más veloz, también resulta el más costoso de todos los medios de transporte; se hace indispensable en envíos urgentes principalmente para mercancías perecederas o de alto valor.

          p <b>Medios:</b>
            br
            |Avión, helicóptero.
        .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-auto
          img.mx-auto(src="@/assets/curso/temas/tema3/img-12.png" data-aos="fade-right" alt="Imagen decorativa medio de transporte aéreo")
      .p-4.py-4.py-md-5.d-flex.flex-wrap(
        titulo="Modo férreo o ferroviario"
        :icono="require('@/assets/curso/temas/tema3/img-9.svg')"
        style="background-color: #C4F2F1"
      )
        .col-lg-7.order-2.order-lg-1.pe-lg-4
          p Entre las ventajas está la capacidad para considerables volúmenes, sus costos son los más bajos de todos y la gran desventaja para el comercio exterior es la infraestructura limitada en algunos países.

          p <b>Medios:</b>
            br
            |Tren-ferrocarril.
        .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-auto
          img.mx-auto(src="@/assets/curso/temas/tema3/img-13.png" data-aos="fade-right" alt="Imagen decorativa medio de transporte férreo o ferroviario")
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_3_2 3.2 Costos de exportación
    
    .d-flex.flex-wrap.align-items-start.position-relative.mb-5
      img.col-md-5.col-lg-4.col-xl-3.mx-auto.mb-4(src="@/assets/curso/temas/tema3/img-14.png" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md-7.col-lg-8.col-xl-9.ps-md-4
        p La globalización y la internacionalización de las industrias en todas las partes dependerán en gran medida del desempeño y de los costos en todas las áreas de actividades de la Distribución Física Internacional. A medida que las compañías vayan alcanzando una visión mundial de sus operaciones, la Distribución Física Internacional en adelante DFI alcanzará creciente importancia dentro de la organización, ya que los costos en especial de los transportes llegarán a ser una parte mayoritaria de la estructura total de costos. 
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-left" style="background-color: #F2F6FE")
          p.mb-0 Cada empresa que transforma y vende es un sistema para el diseño, la producción y la entrega de bienes a los clientes; y cuando es definida apropiadamente la logística y la distribución como un conjunto de actividades relacionadas con el movimiento de materiales, incluyendo la información y los sistemas de control, la distribución y la logística constituyen los hilos que pasan por todas las funciones y responsabilidades tradicionales, desde la obtención de materias primas hasta la entrega del producto.
    p.fw.bold-text-center.mb-5 El enfoque integrado de los costos de DFI los divide en tres categorías más o menos iguales, que son:

    .tarjeta-avatar-b.tarjeta-avatar-b-1.col-xl-11.me-xl-auto.mb-4
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema3/img-15.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta-e-1.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6; box-shadow: 0 2px 4px 4px #00000010")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Los más visibles y mejor controlados son los costos de transporte y manejo, las empresas tienen una gran idea del monto de estos costos pero en la realidad la manera de asignar entre los productos y grupos de clientes, es casi siempre por conjeturas. 
    
    .tarjeta-avatar-b.tarjeta-avatar-b-1.col-xl-11.me-xl-auto.mb-4
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema3/img-16.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta-e-2.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6; box-shadow: 0 2px 4px 4px #00000010")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Los costos asociados con inventarios se subestiman con mucha frecuencia, con las tasas de interés actuales, el costo de tener capital invertido en inventarios, puede llegar hasta un tercio de su valor. 
    
    .tarjeta-avatar-b.tarjeta-avatar-b-1.col-xl-11.me-xl-auto.mb-5
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema3/img-17.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta-e-1.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6; box-shadow: 0 2px 4px 4px #00000010")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Menos obvios y por ello frecuentemente ignorados son los costos de personal y del equipo de computación necesario para operar los sistemas de distribución, para procesar la información y el despacho de órdenes. 


    p.mb-5 Para el cálculo de los costos de exportación es esencial que la forma de negociación Incoterms quede absolutamente clara con el comprador, para una mejor comprensión se describe en el siguiente ejemplo:
  
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-18.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p El valor declarado por importación de carteras originarias de un país “a” es de US 3,5 en condiciones CIF. La importadora ofrece las carteras a un distribuidor mayorista en Colombia a US 4,0 cada una. 
        p Se puede notar que el precio de exportación es US 3,5 siempre y cuando no haya compensación entre las partes, generalmente el emisor o el exportador acuerdan el precio previamente, con el fin de no pagar más por el importador, vendiendo un producto más bajo que el valor de compra. 

    p.mb-5 De acuerdo con ProColombia (1999) existen costos relacionados con el país exportador, el tránsito internacional y el país importador. En cada uno de estos se involucran diferentes costos, bien sea que tengan una incidencia directa o indirecta en la Distribución Física Internacional. 

    .row
      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.ps-5.py-4.pe-4(data-aos="fade-right")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 1
          h4.text-center País exportador
          p(style="font-size: 15px") <b style="color: #1A0F91">Directos:</b> empaque, embalaje, documentación, unitarización, manipuleo en el local del exportador, seguro, transporte (hasta punto de embarque), almacenamiento intermedio, manipuleo preembarque, manipuleo embarque, seguro, bancario y agentes
          p(style="font-size: 15px") <b style="color: #1A0F91">Indirectos:</b> administrativos y capital (inventario).

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-acento-contenido.ps-5.py-4.pe-4(data-aos="flip-up")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 2
          h4.text-center Tránsito internacional
          p <b style="color: #35ACA9">Directos:</b> manipuleo desembarque, seguro internacional y transporte internacional.
          p <b style="color: #35ACA9">Indirectos:</b> capital (inventario).
          img.px-lg-3(src="@/assets/curso/temas/tema3/img-19.svg" alt="Imagen decorativa medios de transporte")

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.ps-5.py-4.pe-4(data-aos="fade-left")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 3
          h4.text-center País importador
          p <b style="color: #1A0F91">Directos:</b> transporte lugar convenido comprador, almacenamiento, seguro, documentación, aduaneros (impuestos), agentes y bancario.
          p <b style="color: #1A0F91">Indirectos:</b> administrativos y capital (inventario).
    
    p.mb-5 Los costos que se generan en la Distribución Física Internacional se describen de la siguiente manera:

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-20.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Antes de tomar la decisión de incursionar en mercados externos, las empresas deben realizar un análisis de los costos en los que puede incurrir el exportador y el importador, desde el momento en que se traslada la mercancía hacia el lugar de embarque en el país de origen o procedencia, pasando por la manipulación y el transporte internacional, el arribo al puerto, aeropuerto o cruce de frontera en el país importador hasta que llega a su destino final, lugar donde se realiza la compra (Legiscomex, s.f.).

    p.mb-5.text-center.fw-bold Estos son algunos de los elementos más importantes que se deben tener en cuenta para la determinación de los costos:

    .tabla-a.color-primario.mb-4.col-xl-10.mx-auto
      table
        thead
          tr(style="background-color: #E9F0FE")
            th(colspan="4") Datos generales
        tbody(style="background-color: white;")
          tr
            td.fw-bold(style="background-color: #F9FBFF") Nombre del producto:
            td
            td.fw-bold(style="background-color: #F9FBFF") Posición arancelaria:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Cantidad/unidad de venta:
            td
            td.fw-bold(style="background-color: #F9FBFF") Peso de la carga:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Dimensiones de la carga:
            td *Largo*ancho*alto
            td.fw-bold(style="background-color: #F9FBFF") Volumen de la carga:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Ubicación del exportador:
            td
            td.fw-bold(style="background-color: #F9FBFF") Puerto/aeropuerto embarque:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Ubicación el importador:
            td
            td.fw-bold(style="background-color: #F9FBFF") Puerto/aeropuerto desembarque:
            td
    .d-flex.flex-wrap.col-xl-10.mx-auto.mb-5
      .col-lg-8.pe-lg-4.mb-4
        .tabla-a.color-primario
          table(style="min-width: 500px")
            thead
              tr(style="background-color: #E9F0FE")
                th(colspan="2") Costos relativos al producto
            tbody(style="background-color: white;")
              tr
                td.fw-bold(style="background-color: #F9FBFF") Elaboración (fabricación del producto):
                td
              tr
                td.fw-bold(style="background-color: #F9FBFF") Empaque:
                td
              tr
                td.fw-bold(style="background-color: #F9FBFF") Embalaje:
                td
              tr
                td.fw-bold(style="background-color: #F9FBFF") Documentación:
                td
              tr
                td.fw-bold(style="background-color: #F9FBFF") Valor EXW venta directa:
                td
      .col-lg-4
        .p-4.mb-4(style="background-color: #F6F6F6")
          ul.lista-ul.border-ul-1
            li
              i.lista-ul__vineta(style="color: #91B3FA")
              | <b>Empaque:</b> incluye etiquetas y rótulos.
            li
              i.lista-ul__vineta(style="color: #91B3FA")
              | <b>Embalaje:</b> incluye etiquetas y rótulos. 
            li
              i.lista-ul__vineta(style="color: #91B3FA")
              | <b>Documentación:</b> factura comercial, lista de empaque (si se requiere), certificado de origen (si se requiere) y vistos buenos (si se requiere). 
            li
              i.lista-ul__vineta(style="color: #91B3FA")
              | <b>Valor EXW venta directa:</b> venta directa, el fabricante es el mismo exportador.
      figcaption.text-center.w-100(style="font-weight: normal; background-color: #F6F6F6") <b>Nota.</b> Tomado de Legiscomex (s.f.).
    
    .d-flex.flex-wrap.col-xl-10.mx-auto.mb-5
      .col-lg-8.pe-lg-4.mb-4
        .tabla-a.color-primario
          table(style="min-width: 500px")
            thead
              tr(style="background-color: #E9F0FE")
                th(colspan="2") Costos de comercialización
            tbody(style="background-color: white;")
              tr
                td.fw-bold(style="background-color: #F9FBFF") Promoción del producto en el exterior:
                td
              tr
                td.fw-bold(style="background-color: #F9FBFF") Comisión intermediarios país exportador:
                td
              tr
                td.fw-bold(style="background-color: #F9FBFF") Documentación:
                td
              tr
                td.fw-bold(style="background-color: #F9FBFF") Valor EXW venta directa:
                td
      .col-lg-4
        .p-4.mb-4(style="background-color: #F6F6F6")
          ul.lista-ul.border-ul-1
            li
              i.lista-ul__vineta(style="color: #91B3FA")
              | <b>Documentación:</b>  factura comercial, lista de empaque (si se requiere), certificado de origen (si se requiere) y vistos buenos (si se requiere).
            li
              i.lista-ul__vineta(style="color: #91B3FA")
              | <b>Valor EXW venta indirecta:</b> venta indirecta, a través de intermediario.
      figcaption.text-center.w-100(style="font-weight: normal; background-color: #F6F6F6") <b>Nota.</b> Tomado de Legiscomex (s.f.).


    .d-flex.flex-wrap.col-xl-10.mx-auto.mb-5
      .col-lg-6.pe-lg-2.mb-4
        .tabla-a.color-primario
          table(style="min-width: 500px")
            thead
              tr(style="background-color: #E9F0FE")
                th(colspan="3") Costos varios
            tbody(style="background-color: white;")
              tr
                td.py-2.fw-bold(style="background-color: #F9FBFF") Transporte interno de la mercancía: 
                td(rowspan="3") Desde la fábrica hasta el puerto o aeropuerto de salida de la mercancía
                td
              tr
                td.py-2.fw-bold(style="background-color: #F9FBFF") Comisión agente de aduanas:
                td 
              tr
                td.py-2.fw-bold(style="background-color: #F9FBFF") Costo seguro interno:
                td 
      .col-lg-6.ps-lg-2
        .tabla-a.color-primario
          table(style="min-width: 500px")
            thead
              tr(style="background-color: #E9F0FE")
                th(colspan="2") Costos financieros
            tbody(style="background-color: white;")
              tr
                td.py-4.fw-bold(style="background-color: #F9FBFF") Crédito otorgado al importador:
                td
              tr
                td.py-4.fw-bold(style="background-color: #F9FBFF") Seguro de crédito otorgado al importador:
                td

    .tabla-a.color-primario.col-xl-10.mx-auto
      table.mb-3
        thead
          tr(style="background-color: #E9F0FE")
            th(colspan="2") Costos portuarios en origen
        tbody(style="background-color: white;")
          tr
            td.fw-bold(style="background-color: #F9FBFF") Manejo de la carga en el puerto:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Utilización instalaciones portuarias:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Almacenamiento:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Pesajes y cubicaje de la carga:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Otros:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Valor FAS:
            td
          tr
            td.fw-bold(style="background-color: #E9F0FE" colspan="2") Cargue y estiba
          tr
            td.fw-bold(style="background-color: #F9FBFF") Valor FOB/FCA:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Valor DAF:
            td
    p.text-center.col-xl-10.mx-auto <b>Valor DAF:</b> se utiliza únicamente en caso de que la frontera sea terrestre.
    figcaption.mb-5.text-center.col-xl-10.mx-auto(style="font-weight: normal; background-color: #F6F6F6") <b>Nota.</b> Tomado de Legiscomex (s.f.).

    .d-flex.flex-wrap.col-xl-10.mx-auto
      .col-lg-6.pe-lg-2.mb-4
        .tabla-a.color-primario
          table(style="min-width: 500px")
            thead
              tr(style="background-color: #E9F0FE")
                th(colspan="2") Costos de transporte internacional
            tbody(style="background-color: white;")
              tr
                td.fw-bold(style="background-color: #F9FBFF") Marítimo:
                td
              tr
                td.fw-bold(style="background-color: #F9FBFF") Aéreo:
                td 
              tr
                td.fw-bold(style="background-color: #F9FBFF") Valor CFR/CPT:
                td 
      .col-lg-6.ps-lg-2
        .tabla-a.color-primario
          table(style="min-width: 500px")
            thead
              tr(style="background-color: #E9F0FE")
                th(colspan="2") Costos de seguro internacional
            tbody(style="background-color: white;")
              tr
                td.fw-bold(style="background-color: #F9FBFF") Póliza contra todo riesgo
                td
              tr
                td.fw-bold(style="background-color: #F9FBFF") Valor CIF/CIP:
                td
              tr
                td.fw-bold(style="background-color: #F9FBFF") Valor DES:
                td
    p.mb-2.text-center.col-xl-10.mx-auto <b>Valor CIF/CIP:</b> el vendedor paga el seguro, pero la responsabilidad está a cargo del comprador.
    p.text-center.col-xl-10.mx-auto <b>Valor DES:</b> el vendedor paga el seguro y asume el riesgo.
    figcaption.mb-5.text-center.col-xl-10.mx-auto(style="font-weight: normal; background-color: #F6F6F6") <b>Nota.</b> Tomado de Legiscomex (s.f.).

    .tabla-a.color-primario.mb-5.col-xl-10.mx-auto
      table(style="min-width: 500px")
        thead
          tr(style="background-color: #E9F0FE")
            th(colspan="2") Costos portuarios en destino
        tbody(style="background-color: white;")
          tr
            td.fw-bold(style="background-color: #F9FBFF") Descargue:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Manejo de la carga en el puerto:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Utilización instalaciones portuarias:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Valor DEQ:
            td
    .tabla-a.color-primario.mb-5.col-xl-10.mx-auto
      table(style="min-width: 500px")
        thead
          tr(style="background-color: #E9F0FE")
            th(colspan="2") Costos varios
        tbody(style="background-color: white;")
          tr
            td.fw-bold(style="background-color: #F9FBFF") Transporte interno de la mercancía:
            td(rowspan="3") Desde el puerto o aeropuerto de llegada de la mercancía hasta el lugar donde se pagan los tributos, puede ser la fábrica del importador o un almacenamiento previo. 
          tr
            td.fw-bold(style="background-color: #F9FBFF") Comisión seguro interno:
          tr
            td.fw-bold(style="background-color: #F9FBFF") Valor DDU:

    .tabla-a.color-primario.mb-5.col-xl-10.mx-auto
      table(style="min-width: 500px")
        thead
          tr(style="background-color: #E9F0FE")
            th(colspan="2") Costos de nacionalización o aduaneros
        tbody(style="background-color: white;")
          tr
            td.fw-bold(style="background-color: #F9FBFF") Gravamen arancelario:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Otros impuestos:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Comisión agente de aduanas:
            td
          tr
            td.fw-bold(style="background-color: #F9FBFF") Valor DDP:
            td
    figcaption.text-center.col-xl-10.mx-auto(style="font-weight: normal; background-color: #F6F6F6") <b>Nota.</b> Tomado de Legiscomex (s.f.).

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_3_3 3.3 Clasificación de mercancías

    p A la hora de realizar los envíos para el transporte internacional es importante tener en cuenta el espacio que ocupan en la clasificación de los diferentes tipos de mercancías que existen, ya que cada una de ellas requerirá una preparación y unas necesidades de transporte específicas. Se destacan los principales criterios utilizados para clasificar las mercancías en el comercio exterior.

    p.mb-5 De igual forma, su naturaleza se clasifica en peligrosa, perecedera y extradimensionada. A continuación, se encontrará una clasificación de manera detallada: 

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema3/img-21.svg" style="max-width: 400px" alt="Imagen decorativa")
      .col-lg-8.col-xl-8.ps-lg-4
        LineaTiempoD.color-secundario(data-aos="fade-right")
          div(numero="1" titulo="Peligrosa")
            .d-flex.flex-wrap
              .col-xl-7.order-2.order-xl-1.pe-xl-4
                p Mercancía que posee propiedades explosivas, venenosas, oxidantes, radioactivas que, durante su manipulación, transporte y almacenamiento representa riesgo para la vida humana. 

                p A partir de la clasificación de peligro es importante conocer las áreas de almacenamiento, alistamiento y despacho de mercancías, lo cual permite conocer la compatibilidad o incompatibilidad para el transporte y el almacenamiento de sustancias químicas.
              img.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-auto.mx-auto(src="@/assets/curso/temas/tema3/img-22.png" style="max-width: 282px" alt="Imagen decorativa")
          div(numero="1" titulo="Perecedera")
            .d-flex.flex-wrap
              .col-xl-7.order-2.order-xl-1.pe-xl-4
                p Por naturaleza son de vencimiento rápido para el consumo, requiere de condiciones especiales en el transporte y el almacenamiento, un ejemplo esta son las frutas, verduras, carne fresca, pescado y flores. 
              img.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-auto.mx-auto(src="@/assets/curso/temas/tema3/img-23.png" style="max-width: 282px" alt="Imagen decorativa")
          div(numero="1" titulo="Extradimensionada")
            .d-flex.flex-wrap
              .col-xl-7.order-2.order-xl-1.pe-xl-4
                p Es la carga que excede en peso y volumen el flete convencional, es decir, rebasa las dimensiones de la carrocería de los vehículos autorizados por el Ministerio de Transporte.
              img.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-auto.mx-auto(src="@/assets/curso/temas/tema3/img-24.png" style="max-width: 282px" alt="Imagen decorativa")
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_3_4 3.4 Políticas de negociación
    
    .d-flex.flex-wrap.align-items-start.position-relative.mb-5
      img.col-md-5.col-lg-4.col-xl-3.mx-auto.mb-4(src="@/assets/curso/temas/tema3/img-25.png" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md-7.col-lg-8.col-xl-9.ps-md-4
        p Los términos de la negociación juegan un papel determinante en los negocios internacionales, ya que estipulan las responsabilidades del vendedor y del comprador, contenidas en la cláusula del contrato de compraventa, con el fin de mostrar una negociación clara, que permita a las partes comprometerse; esto se deriva de saber qué lugar o qué situación genera riesgo, ya que la falta de claridad puede incurrir en pérdidas económicas para la empresa. También es importante tener claro que los medios de transporte no se aplican por igual en todos los casos.
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Además de esto, la incursión en los mercados internacionales debe estar regulada por una documentación que avale los procesos de compra y venta internacional, con el fin de reducir los riesgos comerciales, políticos, económicos y empresariales.
    
    p.fw-bold.text-center.mb-5 En el siguiente mapa conceptual se puede identificar los principales aspectos para tener en cuenta en una negociación: 

    img.col-xl-10.mx-auto(src="@/assets/curso/temas/tema3/img-26.svg" data-aos="fade-right" alt="Imagen de un mapa conceptual, donde se identifican los aspectos más importantes y que se deben tener en cuenta en una negociación como lo es la clasificación de la actividad económica y la contratación del transporte. De otra parte debe tenerse en cuenta los Incoterms y sus divisiones y finalmente otro aspecto muy importante como lo es la documentación tanto para exportar como para importar.")
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_3_5 3.5 Presupuesto y operaciones
    
    .d-flex.flex-wrap.align-items-start.position-relative.mb-5
      .col-md-7.col-lg-8.col-xl-9.pe-md-4.order-2.order-md-1
        p Toda organización pronostica, planea y presupuesta todas las áreas operativas, teniendo como base los ingresos, gastos y costos dentro de un período de tiempo establecido. 
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-left" style="background-color: #F2F6FE")
          p.mb-0 Si se tiene una buena estructura presupuestal y un buen manejo de los ingresos y los gastos se garantiza una empresa solvente y con un buen músculo financiero, lo que ayuda a la toma de decisiones eficientes y eficaces por parte de los directivos. 
      img.col-md-5.col-lg-4.col-xl-3.mx-auto.mb-4.order-1.order-md-2(src="@/assets/curso/temas/tema3/img-27.png" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")

    .d-flex.flex-wrap.align-items-start.position-relative.mb-5
      img.col-md-5.col-lg-4.col-xl-3.mx-auto.mb-4(src="@/assets/curso/temas/tema3/img-28.svg" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md-7.col-lg-8.col-xl-9.ps-md-4
        p Por lo anterior, se presentan los elementos y otros aspectos a tener en cuenta en la elaboración de un presupuesto como son: normas legales y contables, el ciclo presupuestal, los tipos de presupuestos, los costos logísticos que involucra y los indicadores de gestión con que se evalúa.

        p Se denomina presupuesto a los resultados esperados de los ingresos y egresos de una planeación económica enfocada en las operaciones y recursos por un tiempo determinado, reflejada en los valores financieros para cumplir con los objetivos o planes esperados.

        p Los principios para el presupuesto de operaciones se establecen en los documentos normativos para comerciantes y el Reglamento General de Contabilidad, entre otros documentos normativos. Los principios del control presupuestario nacieron al mismo tiempo que las técnicas presupuestarias; estos principios, no todos obligatorios, se clasifican en los siguientes grupos:
    
    ul.lista-ul--separador
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Previsión:</b> hace alusión a la necesidad de estudiar los elementos presupuestales con antelación y de alcanzar los objetivos propuestos.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>De predictibilidad:</b> es decir, la posibilidad de prever algo que probablemente ocurrirá o que se quiere que ocurra.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>De determinación cuantitativa:</b> con la que se determinan las divisas para cada uno de los planes presupuestarios de la empresa.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>De objetivo:</b> hablan de la posibilidad de previsión, siempre que se busque un objetivo.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>De planificación:</b> que indican el cambio para conseguir los objetivos deseados.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Precisión:</b> hablan de la necesidad de expresar los presupuestos de forma precisa y concreta.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Rentabilidad:</b> el beneficio de la instalación del sistema de control presupuestario, que debe superar el coste de instalación y el funcionamiento del sistema. 
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Flexibilidad:</b> los presupuestos deben dejar espacio para los cambios que surjan.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Unidad:</b> debe haber un único presupuesto en el que se coordinen todas las funciones empresariales.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Confianza:</b> un fuerte apoyo y fe por parte de la dirección es muy importante para el buen funcionamiento del presupuesto.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Participación:</b> la participación de todos los empleados es esencial para aprovechar la experiencia de cada uno de ellos.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Oportunidad:</b> la planificación del presupuesto debe estar finalizada antes del inicio del periodo presupuestario.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Contabilidad por áreas de responsabilidad:</b> deben cumplirse los principios contables generales, de contabilidad general y de control presupuestario.
      li(style="border-bottom-style: dashed;")
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Organizativo:</b> destaca la importancia de planificar las actividades para alcanzar los objetivos. Conlleva a estrategias de dirección en las que se evidencia la dirección organizacional de la compañía.
      li
        i.fas.fa-angle-right(style="font-size: 24px; color: #FE7062")
        | <b>Control:</b> permite comparar actividades sobre las cuales es necesario fijar normas del mismo control.
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_3_6 3.6 Indicadores de gestión de la negociación internacional
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-29.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Los indicadores de gestión, también conocidos como KPI, definidos como aquellos indicadores cuantitativos que permiten medir el desempeño y el resultado de cada proceso. Se relacionan con temas de abastecimiento y procesos tales como la recepción, el almacenamiento, los inventarios, el despacho, la distribución, las entregas, la facturación, el manejo de la información, entre otros que son importantes para una negociación. 

    p Con los indicadores logísticos se pretende evaluar la eficiencia y la eficacia de la gestión logística de una organización para llegar a tener un control permanente y seguro sobre las operaciones que allí se realizan y ejecutar un seguimiento oportuno al cumplimiento de metas y objetivos, además de propiciar la retroalimentación efectiva que permita mejorar la cadena de abastecimiento y, a raíz de esto, la importancia de incluirlos en los informes gerenciales.

    p Desde este punto de vista los indicadores de gestión son estratégicos en la entrega de informes y serán presentados de acuerdo con el tipo de informe que se esté realizando y la periodicidad establecida para su presentación. Hay que tener en cuenta que los indicadores de gestión por sí solos carecen de valor, si no se involucran dentro de un sistema que permita tener el control sobre las mediciones y generar una relación causa - efecto sobre sus resultados.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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

<style lang="sass">
table td
  font-size: 15px
</style>
