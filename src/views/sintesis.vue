<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-sm-8.col-lg-4
        figure
          img(src="@/assets/curso/1.png", alt="")
      .col-lg-8
        p El componente formativo ofrece al aprendiz una comprensión inicial de los fundamentos del mercadeo y su importancia en el desarrollo de estrategias orientadas al mercado. A partir del análisis del concepto de mercadeo, su evolución y sus principales enfoques, el componente permite reconocer distintos tipos de mercadeo y su aplicación en contextos organizacionales. Asimismo, aborda la relevancia del mercadeo en la generación de valor, el posicionamiento y la sostenibilidad de las empresas en entornos competitivos.
        .p-4.bg-sintesis.rounded-4
          p.mb-0 Adicionalmente, el componente presenta las variables del mercado a través de la mezcla de mercadeo, así como los elementos que intervienen en la formulación de un plan estratégico de mercadeo y el análisis de la competencia. Finalmente, se introduce el comercio electrónico y su marco legal vigente, destacando su papel en las dinámicas actuales de comercialización, de esta manera, el aprendiz fortalece su comprensión del entorno del mercadeo y su relación con los escenarios digitales.
    .row.justify-content-center
      .col-12 
        figure.mb-4
          img(src="@/assets/curso/sintesis.svg", alt="Esquema jerárquico titulado “Fundamentos del mercadeo”, del cual se desprenden varios componentes principales organizados en bloques: inducción al mercadeo, tipos de mercadeo, importancia del mercadeo, variables del mercadeo, plan estratégico del mercadeo, análisis de competencia y un apartado sobre el marco legal vigente del e-commerce y redes sociales; este último se desarrolla en subtemas que incluyen generalidades, características, regulación y normatividad del comercio electrónico, mostrando así una estructura integral de los elementos clave que conforman el estudio del mercadeo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
