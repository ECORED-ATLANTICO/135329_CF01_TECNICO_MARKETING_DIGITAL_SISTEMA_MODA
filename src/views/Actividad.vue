<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Conceptos de mercadeo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión del aprendiz sobre los fundamentos del mercadeo mediante la resolución de preguntas de selección múltiple, a partir de la identificación de conceptos clave desarrollados en el componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué propósito cumple el mercadeo en las organizaciones modernas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear valor mediante relaciones con clientes y mercados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar procesos comerciales dentro de las organizaciones actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente las actividades administrativas empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la participación de consumidores en el mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento caracteriza la evolución del concepto de mercadeo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La eliminación de las necesidades del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La sustitución de procesos de intercambio comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La ampliación del enfoque hacia creación de valor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La desaparición de las estrategias empresariales modernas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Según AMA, qué genera el mercadeo para los consumidores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Procesos administrativos exclusivamente financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Restricciones comerciales entre organizaciones participantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminución permanente del intercambio de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ofertas con valor para consumidores y clientes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué aspecto fortaleció la evolución del marketing contemporáneo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprender necesidades y satisfacer expectativas del mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reducir la comunicación entre organizaciones y consumidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar procesos de análisis del comportamiento comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir estrategias de posicionamiento por acciones improvisadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué beneficio aporta comprender diferentes definiciones de mercadeo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Limitar el desarrollo de estrategias comerciales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Entender su evolución e importancia organizacional actual.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la relación entre empresa y consumidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente la gestión del marketing estratégico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué representa una necesidad dentro del proceso de mercadeo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un producto disponible para comercialización inmediata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una estrategia utilizada para incrementar las ventas empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una carencia que motiva deseos y comportamientos de consumo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un mechanism exclusivo para controlar precios del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál finalidad tienen los intercambios dentro del mercadeo moderno?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir las relaciones entre empresas y consumidores finales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la generación de valor para las organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir procesos comerciales mediante acciones administrativas internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Satisfacer necesidades mediante entrega de valor entre las partes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué orienta las decisiones estratégicas del mercadeo contemporáneo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El conocimiento de clientes, mercados y necesidades reales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La eliminación del análisis competitivo empresarial permanente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La reducción de procesos relacionados con investigación comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La sustitución de objetivos organizacionales por decisiones intuitivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué aporta el mercadeo al crecimiento sostenible de las organizaciones?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar procesos estratégicos relacionados con los consumidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Favorecer competitividad mediante creación y entrega de valor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir la planeación comercial por actividades improvisadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la innovación aplicada al desarrollo empresarial actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué aspecto diferencia el mercadeo de la simple actividad comercial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eliminación permanente de relaciones con los consumidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La reducción del intercambio entre organizaciones y mercados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La orientación estratégica hacia satisfacción y creación de valor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La sustitución del análisis por decisiones exclusivamente operativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué caracteriza un mercado desde la perspectiva del mercadeo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un grupo de organizaciones dedicadas exclusivamente a producir bienes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Personas u organizaciones con necesidades y capacidad de intercambio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un conjunto de actividades administrativas sin relación comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Espacios físicos destinados únicamente para la venta de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué importancia tiene identificar correctamente el mercado objetivo empresarial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite orientar estrategias hacia consumidores con necesidades específicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Elimina procesos de investigación desarrollados por las organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reduce la capacidad competitiva frente a otros mercados existentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituye completamente la planeación estratégica del mercadeo moderno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué finalidad cumple la segmentación dentro del proceso comercial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar diferencias existentes entre consumidores del mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Agrupar consumidores con características y necesidades similares.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir estrategias comerciales mediante acciones administrativas internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir posibilidades de posicionamiento empresarial competitivo actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué beneficio ofrece conocer el comportamiento del consumidor actual?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar procesos estratégicos relacionados con análisis del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir decisiones comerciales mediante acciones improvisadas empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir capacidad de adaptación frente cambios del entorno competitivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Favorecer decisiones estratégicas basadas en preferencias y necesidades reales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué relación existe entre valor y satisfacción del consumidor?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La satisfacción depende de la percepción del valor recibido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El valor elimina completamente expectativas del consumidor moderno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La satisfacción sustituye procesos estratégicos de comercialización empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El valor únicamente depende del precio del producto ofrecido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué fortalece una adecuada orientación hacia el cliente organizacionalmente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir procesos de fidelización desarrollados por las organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incrementar relaciones duraderas mediante satisfacción de necesidades reales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar actividades de investigación comercial y análisis competitivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir procesos comerciales mediante decisiones exclusivamente operativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué permite construir una propuesta de valor competitiva empresarial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar diferenciación entre productos disponibles en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir innovación aplicada al desarrollo de bienes y servicios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ofrecer beneficios diferenciadores acordes con necesidades del cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente estrategias de posicionamiento organizacional actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué favorece la investigación dentro de las decisiones de mercadeo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir información por experiencias individuales del equipo comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar análisis relacionados con consumidores y mercados actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir capacidad empresarial para responder cambios del entorno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Obtener información confiable para apoyar decisiones estratégicas organizacionales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué resultado genera aplicar principios estratégicos de mercadeo correctamente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mayor competitividad mediante satisfacción eficiente del mercado objetivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminación permanente de procesos comerciales organizacionales actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustitución de estrategias empresariales por decisiones intuitivas permanentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducción de oportunidades para fortalecer relaciones con consumidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué objetivo persigue el mercadeo en organizaciones contemporáneas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar procesos estratégicos relacionados con consumidores y mercados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Crear valor sostenible para clientes y organizaciones simultáneamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir investigación comercial mediante decisiones exclusivamente financieras actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir interacción entre empresas y públicos de interés estratégicos.',
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
}
</script>
