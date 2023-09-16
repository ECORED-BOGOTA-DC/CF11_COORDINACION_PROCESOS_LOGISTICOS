<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La logística en el comercio exterior se refiere a la gestión eficiente del transporte, almacenamiento y distribución de productos a nivel internacional. Juega un papel crucial en garantizar el flujo eficiente de mercancías a través de las fronteras y hacia los destinos finales, cumpliendo con los requisitos aduaneros y asegurando la entrega oportuna y en condiciones óptimas.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis, este apartado resume todos los temas abordados en este componente formativo y todo lo que se debe conocer sobre la logística en el comercio exterior, como es el transporte, las pólizas de seguros para cualquier tipo de transporte, la logística a tener en cuenta para el almacenamiento de los productos y luego su distribución a nivel internacional teniendo en cuenta todo lo que implica la exportación los documentos a tener en cuenta los costos aduaneros y aranceles etre otras cosas;")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
