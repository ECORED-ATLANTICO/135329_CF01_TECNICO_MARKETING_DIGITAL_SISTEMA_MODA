<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/introduccion/1.png", alt="")
      .col-lg-8
        p.mb-0 Apreciado aprendiz, bienvenido a este momento de aprendizaje diseñado a partir de un contenido temático, recursos educativos digitales y actividades de aprendizaje que pretenden ayudar en el reconocimiento del plan estratégico de mercadeo de la organización, de acuerdo con los objetivos de la marca. En este sentido, se ha creado un video que presenta el contexto del presente componente de formación y que se encuentra a continuación.
    
    figure.mb-4
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Wc51tl_VEHs" title="Fundamentos del mercadeo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: fundamentos del mercadeo

    .p-3.bg-terciario-t20.rounded-3
      p.mb-0 Luego de entender las condiciones iniciales, es momento de introducir los fundamentos del mercadeo a través de una conceptualización básica de algunos elementos, haciendo un recorrido por la evolución del concepto de mercadeo hasta llegar a la tendencia del #[em marketing] digital, desarrollada hoy con gran fuerza.

</template>

<script>
export default {
  name: 'Introduccion',
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
