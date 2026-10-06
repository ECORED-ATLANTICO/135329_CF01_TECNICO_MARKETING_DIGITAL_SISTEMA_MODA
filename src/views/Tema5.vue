<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan estratégico de mercadeo

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema5/1.png", alt="")
      .col-lg-8
        p.mb-3 Las empresas o negocios, por pequeños que sean, #[strong requieren una guía o ruta para planificar todas las acciones y estrategias para el cumplimiento de su objetivo]. Existen múltiples definiciones de lo que es un plan estratégico de mercadeo, pero se puede decir que hace referencia a la planeación sistemática y estructurada de la posición competitiva de la empresa, partiendo del análisis y conocimiento del mercado y buscando oportunidades que la empresa pueda realizar para satisfacer las necesidades de los consumidores, de manera óptima, eficiente y con calidad, a diferencia de los competidores.
        .p-4.bg-amarillo-claro.rounded-3.mb-3
          p.mb-0 Según Sainz de Vicuña (2015), #[strong “el plan estratégico constituye una herramienta en la que la alta dirección recoge las decisiones estratégicas de #[em marketing] que ha adoptado hoy”] (p.77), es decir que el plan estratégico para el #[em marketing] es una pieza clave del proceso de planificación comercial. Es uno de los instrumentos más valiosos que ayuda a combatir el riesgo comercial de las decisiones y aprovecha las oportunidades del mercado.

    img(data-aos="fade-up")(src="@/assets/curso/tema5/2.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--azul
          h5.mb-4 Estructura del plan de mercadeo
          p.mb-0 Hay tantas formas de estructurar un plan de mercadeo como empresas existentes. Sin embargo, se pueden definir unos elementos comunes y necesarios a la hora de estructurarlo. El plan de marketing se divide en una serie de fases y etapas consecutivas, las cuales se detallan a continuación, para que evalúe la forma de implementarlo en su contexto laboral.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Estructura del plan de mercadeo
        img.mb-2(data-aos="fade-down-right", src="@/assets/curso/tema5/4.svg", alt="La figura describe la estructura del plan de mercadeo mediante una ecuación conceptual. El esquema muestra que la combinación de un plan y el mercadeo da como resultado un documento estratégico.")
        figcaption Nota. SENA, (2026).
          
      .col-lg-6
        h5.mb-4 ¿Cómo estructurar un plan de mercadeo?
        p.mb-0 Antes de empezar, es importante identificar que el término plan tiene relación con el verbo planear, que significa, en nuestra lengua, trazar una ruta para llegar a un objetivo; y cuando se le suma la palabra mercadeo, ¿Qué se obtiene como resultado?

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .d-none.d-xl-block.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema5/5.png", alt="descripcion")
      .col-xl-9.custom-tabs.custom-tabs--ancho
        TabsA.color-acento-botones.mb-4.mb-lg-0
          .tarjeta.p-4.h-100.bg-terciario-t20(titulo="Análisis")
            h4 Análisis
            p.mb-3 Se requiere un análisis riguroso de la situación interna y externa de la empresa.
            p #[strong Análisis interno]
            p.mb-3 Se deben detectar fortalezas y debilidades empresariales. La herramienta Canvas es útil para ello, porque permite valorar la propia capacidad de la empresa para aprovechar las oportunidades y afrontar las amenazas.
            p #[strong Análisis externo]
            p Se realiza un análisis del entorno,  donde se observa la estructura, naturaleza y dinámica  del mercado, precisando factores como entorno, mercado y competencia.

          .tarjeta.p-4.h-100.bg-terciario-t20(titulo="Definición de objetivos de mercadeo")
            h4 Definición de objetivos de mercadeo
            p.mb-3 Partiendo del diagnóstico, se fijarán los objetivos del mercadeo, equiparados con las metas y estrategias de la empresa. 
            ul.lista-ul.mb-3.custom-list
              li.d-flex 
                i.lista-ul__vineta
                | Deben armonizar con los objetivos generales de la empresa.
              li.d-flex 
                i.lista-ul__vineta
                | Deben definirse de manera coherente con los recursos de la empresa.
              li.d-flex 
                i.lista-ul__vineta
                | Deben estar definidos y caracterizados por el planteamiento de metas mesurables. 
              li.d-flex 
                i.lista-ul__vineta
                | También pueden definirse con metas más genéricas y menos tangibles, en relación con el producto, servicio o marca.

          .tarjeta.p-4.h-100.bg-terciario-t20(titulo="Formulación de estrategia")
            h4 Formulación de estrategia
            p.mb-3 #[strong ¿Qué es?] Es la definición de la ruta a seguir para alcanzar los objetivos previstos, buscando posicionarse con ventaja en el mercado y alcanzar mayor rentabilidad de los recursos comerciales definidos. Exige tres niveles de estrategia:
            p #[strong Corporativa]
            p Se debe: 
            ul.lista-ul.mb-3.custom-list
              li.d-flex 
                i.lista-ul__vineta
                | Definir misión.
              li.d-flex
                i.lista-ul__vineta
                | Identificar unidades estratégicas.
              li.d-flex 
                i.lista-ul__vineta
                | Formular análisis y valoración de la cartera. 
              li.d-flex 
                i.lista-ul__vineta
                | Identificar nuevas unidades estratégicas de negocio. 
            p #[strong Unidad de negocio]
            p.mb-3 Se definen una serie de actividades, sobre las cuales se deben planear estrategias para cada una.
            p #[strong Funcional]
            p Da cuenta de las actividades funcionales de la empresa como son producción, las finanzas y el mercadeo. 

          .tarjeta.p-4.h-100.bg-terciario-t20(titulo="Ejecución")
            h4 Ejecución
            p.mb-3 Se trata de decidir las acciones que concretan la estrategia de #[em marketing], especificando público objetivo, pronóstico de demanda, plazos previstos, recursos humanos, materiales y financieros.
            p Los planes de acción pueden estar definidos sobre:
            ul.lista-ul.mb-3.custom-list
              li.d-flex 
                i.lista-ul__vineta
                | El producto.
              li.d-flex 
                i.lista-ul__vineta
                | El precio.
              li.d-flex 
                i.lista-ul__vineta
                | Distribución y fuerza de venta.
              li.d-flex 
                i.lista-ul__vineta
                | La comunicación.

          .tarjeta.p-4.h-100.bg-terciario-t20(titulo="Definición y asignación de presupuesto")
            h4 Definición y asignación de presupuesto
            p Se cuantificarán el coste de las acciones y de los recursos necesarios para llevarlas a cabo. Tener en cuenta el producto, su distribución, su promoción, el precio.

          .tarjeta.p-4.h-100.bg-terciario-t20(titulo="Evaluación de resultados o control")
            h4 Evaluación de resultados o control
            p.mb-3 Momento fundamental, ya que permite valorar si el desarrollo del plan ha servido para alcanzar los objetivos pretendidos a partir de cuatro acciones:
    
            ul.lista-ul.mb-3.custom-list
              li.d-flex 
                i.lista-ul__vineta
                | Análisis de los objetivos propuestos.
              li.d-flex 
                i.lista-ul__vineta
                | Medida del desempeño alcanzado.
              li.d-flex 
                i.lista-ul__vineta
                | Detección de desviaciones.
              li.d-flex 
                i.lista-ul__vineta
                | Adopción de medidas correctivas.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2.bg-azul-claro.p-3.p-lg-1.p-xl-0
      .col-3.col-sm-2.col-lg-1
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema5/6.svg", alt="descripcion")
      .col-lg-10
        p.mb-0 Es importante definir, durante el plan de mercadeo, fases de control periódicas, que pueden implicar modificaciones sobre el plan original, contribuyendo a la competitividad de la empresa.




</template>

<script>
export default {
  name: 'Tema5',
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
