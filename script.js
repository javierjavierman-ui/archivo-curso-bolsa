// Datos estructurados a partir de los PDFs de UNED y Bolsa
const curriculumData = [
    {
        id: "mod-1",
        title: "Fundamentos de la Bolsa",
        icon: "fa-book-open",
        description: "Introducción al mundo de la Bolsa, el riesgo y el vocabulario básico.",
        lessons: [
            {
                title: "Introducción a la Bolsa", file: "uned_01_Bolsa.pdf", icon: "fa-building-columns",
                image: "infografias/fundamentos_bolsa.png",
                infographic: {
                    color: "blue", stat: "101", idea: "Fundamentos Base", points: [
                        { t: "Definición de Mercado de Valores", d: "Plataforma física y virtual donde compradores y vendedores negocian porciones de empresas. Su función es dotar de liquidez a las acciones y transparencia a los precios." },
                        { t: "Financiación de la Economía Real", d: "La bolsa canaliza el ahorro de particulares e instituciones hacia proyectos empresariales concretos, permitiendo el crecimiento industrial y tecnológico del país." },
                        { t: "Renta Variable vs. Renta Fija", d: "En renta variable eres dueño y asumes el riesgo del negocio (no hay promesa fija de ganar). En renta fija, eres un prestamista y tienes derecho contractual a cobrar un interés." }
                    ]
                }
            },
            {
                title: "Guía Renta 4", file: "uned_00_Guia_Bolsa_Renta4.pdf", icon: "fa-book",
                image: "infografias/guia_renta4.png",
                infographic: {
                    color: "indigo", stat: "R4", idea: "Primeros Pasos", points: [
                        { t: "Mecánica Operativa Básica", d: "Pasos prácticos para abrir una cuenta de valores, transferir fondos y asegurar que el intermediario (broker) esté regulado." },
                        { t: "Errores del Inversor Novato", d: "Caer en el pánico durante las caídas de mercado, invertir dinero que se necesita a corto plazo o dejarse llevar por rumores periodísticos sin fundamento." },
                        { t: "Gestión de Capital Emocional", d: "Separar la psicología del dinero. Una estrategia definida previamente evitará que tomes decisiones precipitadas por miedo o avaricia." }
                    ]
                }
            },
            {
                title: "Tolerancia al Riesgo", file: "cbolsa_tolerancia_al_riesgo.pdf", icon: "fa-scale-balanced",
                image: null,
                infographic: {
                    color: "red", stat: "R", idea: "Psicología Inversora", points: [
                        { t: "Aversión vs Propensión al Riesgo", d: "Grado de sufrimiento psicológico que le causa a una persona ver temporalmente su cartera en números rojos. Determina la composición ideal de sus inversiones." },
                        { t: "Perfiles de Idoneidad", d: "Clasificación general en Conservador (busca protección), Moderado (equilibro crecimiento-seguridad) y Agresivo (asume gran volatilidad por alta rentabilidad)." },
                        { t: "El Trinomio Fundamental", d: "Rentabilidad, Riesgo y Tiempo están unidos. Para mayores beneficios históricos, debes asumir mayores caídas, las cuales solo se neutralizan ampliando los años de inversión." }
                    ]
                }
            },
            {
                title: "Glosario de Bolsa", file: "cbolsa_glosario.pdf", icon: "fa-spell-check",
                infographic: {
                    color: "purple", stat: "A-Z", idea: "Jerga Financiera", points: [
                        { t: "Léxico Elemental (PER, Dividendos)", d: "El PER mide cuántos años tardarás en recuperar tu inversión con los beneficios; el dividendo es la caja que la empresa reparte físicamente en tu cuenta." },
                        { t: "Conceptos de Operativa (Spread, Ask)", d: "Aprenderás que el precio de compra (Ask) siempre es ligeramente superior al precio de venta (Bid) en el mismo instante. Esa diferencia es el Spread." },
                        { t: "Tipos de Acciones (Blue Chips)", d: "Diferenciación entre 'Blue Chips' (empresas gigantescas y estables como Iberdrola o Inditex) y 'Chicharros' (empresas pequeñas y altísimamente volátiles)." }
                    ]
                }
            }
        ]
    },
    {
        id: "mod-2",
        title: "Mercados e Instituciones",
        icon: "fa-globe",
        description: "Organismos rectores y mercados físicos en Europa.",
        lessons: [
            {
                title: "Bolsas y Mercados (BME)", file: "uned_02_BME.pdf", icon: "fa-flag",
                image: "infografias/mercado_continuo_sibe.png",
                infographic: {
                    color: "yellow", stat: "BME", idea: "Mercado Ibérico", points: [
                        { t: "Estructura Operativa Española", d: "BME agrupa a las cuatro bolsas nacionales (Madrid, Barcelona, Bilbao y Valencia) integrándolas bajo tecnología unificada." },
                        { t: "Mercado Continuo (SIBE)", d: "El Sistema de Interconexión Bursátil Español. Un gran ordenador central que cruza las compras y ventas nacionales a tiempo real y sin parones de 9:00 a 17:30." },
                        { t: "Compensación e Iberclear", d: "El organismo invisible pero crucial que garantiza que, tras ejecutar tu compra, el título se inscriba electrónicamente a tu nombre tras un periodo legal (T+2)." }
                    ]
                }
            },
            {
                title: "Euronext", file: "uned_04_Euronext.pdf", icon: "fa-earth-europe",
                image: "infografias/euronext_mercado.png",
                infographic: {
                    color: "blue", stat: "EU", idea: "Cruce de Fronteras", points: [
                        { t: "Consorcio Bursátil Paneuropeo", d: "Euronext nació como la alianza de varias bolsas locales (Francia, Holanda, Bélgica, Portugal) para competir por liquidez y eficiencia a escala global." },
                        { t: "Acceso Internacional Unificado", d: "Invertir en una empresa en París es operativamente idéntico a una en Ámsterdam, usando de marco una moneda (Euro) y normas armonizadas europeas." },
                        { t: "Impacto en las Comisiones", d: "La consolidación permitió modernizar la tecnología financiera, disminuyendo drásticamente las tasas de intermediación para el usuario." }
                    ]
                }
            },
            {
                title: "Euronext España", file: "uned_04_Euronext_Spain.pdf", icon: "fa-location-dot",
                image: "infografias/euronext_tech_espana.png",
                infographic: {
                    color: "orange", stat: "ES", idea: "Influencia Local", points: [
                        { t: "Mercado Alternativo Pyme", d: "Nicho especializado para que empresas tecnológicas y start-ups de la Península logren financiarse institucionalmente sin el altísimo coste regulatorio de la bolsa grande." },
                        { t: "Atracción de Capital Extranjero", d: "Cómo Euronext funge de pasarela internacional para que los fondos de pensiones americanos inviertan más fácilmente en proyectos hispanos emergentes." },
                        { t: "Complemento a BME", d: "Lejos de ser enemigos directos en todos los ámbitos, proponen modelos de negocio complementarios basados en los servicios y tamaño corporativo del cliente." }
                    ]
                }
            },
            {
                title: "La CNMV", file: "uned_05_CNMV.pdf", icon: "fa-gavel",
                image: "infografias/cnmv_proteccion.png",
                infographic: {
                    color: "green", stat: "Ley", idea: "Supervisión", points: [
                        { t: "Policía de los Mercados", d: "Autoridad adscrita a Economía que vela rigurosamente porque las empresas informen puntualmente de todo hecho (bueno o malo) que afecte su valor." },
                        { t: "Protección Contra Chiringuitos", d: "Mantienen alertas negras sobre brókers ilegales que estafan utilizando marketing engañoso en redes, protegiendo al ahorrador ingenuo." },
                        { t: "Revisión de Folletos Explicativos", d: "Ninguna entidad puede emitir acciones comerciales en España sin que la CNMV haya aprobado expresamente su folleto legal de riesgos." }
                    ]
                }
            }
        ]
    },
    {
        id: "mod-3",
        title: "Operativa Bursátil Real",
        icon: "fa-arrow-right-arrow-left",
        description: "Cómo nacen las acciones y mecánicas de compra-venta.",
        lessons: [
            {
                title: "Salidas a Bolsa (OPV)", file: "uned_03_Salidas_a_Bolsa.pdf", icon: "fa-rocket",
                image: "infografias/salida_bolsa_recoletos.png",
                image2: "infografias/salida_bolsa_recoletos_2.png",
                infographic: {
                    color: "pink", stat: "OPV", idea: "Nace la Acción", points: [
                        { t: "Oferta Pública de Venta", d: "Es la ceremonia financiera donde los dueños primigenios de la empresa privada ceden por primera vez porcentaje de sus acciones a los ciudadanos." },
                        { t: "Fijación del Precio 'Target'", d: "Bancos de inversión (Colocadores) tantean en un periodo secreto el apetito de las grandes fortunas para establecer a qué precio inicial se estrenará la acción." },
                        { t: "Ventajas de ser Cotizada", d: "Aporta estatus internacional, exige mucha transparencia contable y facilita el emitir nueva deuda barata si se requiere crecer fuertemente." }
                    ]
                }
            },
            {
                title: "Guía del Accionista (MiFID)", file: "uned_04_Guia_Accionistas.pdf", icon: "fa-users",
                image: "infografias/mifid_proteccion_inversor.png",
                infographic: {
                    color: "blue", stat: "MiFID", idea: "Protección Europea", points: [
                        { t: "Directiva MiFID", d: "Ley europea radical que obligó a los bancos a hacer un riguroso test de conveniencia antes de dejar a Manolo, de 80 años, comprar derivados exóticos." },
                        { t: "Clasificación de Clientes", d: "Los bancos te etiquetan legalmente como: Minorista (totalmente protegido por avisos legales), Profesional, o Contraparte Elegible (instituciones que asumen total riesgo propio)." },
                        { t: "Derechos Irrenunciables", d: "Todo accionista, posea 10 títulos o un millón, tiene derecho político de voz y voto, información corporativa cristalina y percepción proporcional de dividendos." }
                    ]
                }
            },
            {
                title: "Órdenes y Subastas", file: "uned_06_Guia_Ordenes.pdf", icon: "fa-gavel",
                image: "infografias/ordenes_telefonica.png",
                image2: "infografias/sibe_volatilidad_subastas.png",
                infographic: {
                    color: "orange", stat: "O/S", idea: "Ejecución Eficaz", points: [
                        { t: "Orden Limitada", d: "La regla de oro del inversor responsable. Especificas el precio MÁXIMO que estás dispuesto a pagar. Si la acción está más cara, no compras nada protegiendo tu dinero." },
                        { t: "Orden a Mercado / Por lo Mejor", d: "A mercado compras lo que haya, sin importar precio (altísimo riesgo de sobreprecio en pánico). Por lo mejor barren solo un rango del libro contiguo." },
                        { t: "Subasta de Cierre", d: "El lapso de infarto de 17:30 a 17:35 donde, fuera de mercado continuo, los grandes fondos cuadran órdenes ocultas para formar el precio definitivo del día." }
                    ]
                }
            },
            {
                title: "Operativa Práctica", file: "uned_06_Bolsa_operativa.pdf", icon: "fa-cash-register",
                image: "infografias/operativa_ordenes_costes.png",
                infographic: {
                    color: "purple", stat: "Ej.", idea: "Trinchera de Bolsa", points: [
                        { t: "Lectura del 'Depth of Book'", d: "Visualizar que en 12.45€ hay 50 mil acciones vendiéndose, y en 12.44€ hay 20 mil comprando, revelando las barreras invisibles a corto plazo." },
                        { t: "Gestión de las Comisiones", d: "Optimizar el número de operaciones, ya que un porcentaje desmedido en comisión del banco arruina matemáticamente por completo inversiones de poco capital." },
                        { t: "Liquidación y Compensación", d: "La confirmación final tras el bróker: tu cuenta corriente se restará del total más comisiones dos o tres días hábiles contables posteriores." }
                    ]
                }
            },
            {
                title: "Simulador de Bolsa", file: "uned_07_Simulador_de_Bolsa.pdf", icon: "fa-gamepad",
                image: "infografias/simulador_bolsa.png",
                infographic: {
                    color: "green", stat: "0€", idea: "Paper Trading", points: [
                        { t: "Inversión Ficticia en Vivo", d: "Herramientas que beben datos calcados del mercado real simultáneamente, pero usas 'monedas falsas'. Evita la sangría financiera novata." },
                        { t: "Prueba General de Sistema", d: "Permite testear fríamente (sin ansiedad de pérdida) la validez estadística de tus sistemas de inversión en tendencias largas o picos puntuales." },
                        { t: "Ausencia Crítica de Dolor", d: "La desventaja esencial del simulador es que al no doler psicológicamente el perder euros, el usuario se vuelve hiper-temerario y asume riesgos que no tomaría de forma realista." }
                    ]
                }
            }
        ]
    },
    {
        id: "mod-4",
        title: "Renta Fija y Asesoramiento",
        icon: "fa-landmark",
        description: "Letras del Estado, corporativos y cómo construir carteras seguras.",
        lessons: [
            {
                title: "Renta Fija Conceptual", file: "uned_08_rfija.pdf", icon: "fa-money-bill-wave",
                image: "infografias/renta_fija_basica.png",
                infographic: {
                    color: "teal", stat: "RF", idea: "Menos Riesgo", points: [
                        { t: "Obligaciones del Emisor", d: "Tanto un Estado como una compañía piden prestado al ciudadano. Legalmente deben devolver tu principal a los 'X' años de vencimiento prometido." },
                        { t: "El Pago del Cupón", d: "La compensación regular (anual o semestral) por haberles cedido liquidez, dictado por el porcentaje de la emisión en contrato." },
                        { t: "Diferencia de Plazos", d: "Las Letras deudas son muy a corto plazo (1 año). Los Bonos y Obligaciones son de 3 a 30 años; a mayor plazo, se exige mayor tasa de retribución por la incertidumbre." }
                    ]
                }
            },
            {
                title: "Renta Fija Avanzado", file: "uned_08_Renta_Fija_Guia.pdf", icon: "fa-book-bookmark",
                infographic: {
                    color: "indigo", stat: "TIR", idea: "Curva de Tipos", points: [
                        { t: "TIR (Tasa Interna de Retorno)", d: "Lo que realmente ganarás si mantienes la posesión del título hasta el gran día de vencimiento, independientemente de la volatilidad pasajera." },
                        { t: "Peligro de la Inversa T/P", d: "Regla sagrada: Si los tipos de los grandes bancos caen, tu bono antiguo (que rinde más) se vuelve un cofre de oro y sube de precio en mercado. Si suben, baja el tuyo." },
                        { t: "Rating de Calidad", d: "Agencias (Moody's, T.P) califican las insolvencias empresariales/estatales como Tripla A (segurísimo) o Bono Basura (alto dividendo pero con probabilidad de no pagarte)." }
                    ]
                }
            },
            {
                title: "Arquitectura Financiera", file: "uned_09_Asesoramiento.pdf", icon: "fa-handshake",
                image: "infografias/asesoramiento_financiero.png",
                infographic: {
                    color: "blue", stat: "Pro", idea: "El Asesor 360", points: [
                        { t: "Planificación Holística", d: "No es adivinar qué acción rompe gráficos, sino estructurar las herencias mortuorias, los ahorros infantiles y la fiscalidad en una hoja de ruta total." },
                        { t: "Mandato Discrecional", d: "Contratos estrictos por los cuales cedes (o no explícitamente) a un comité ciego el pulsar el botón de vender en las acciones para salvar tu estrés emocional en hecatombes." },
                        { t: "Arquitectura Abierta", d: "La buena fe de un banco debe permitir que tu cartera tenga excelentes fondos americanos, franceses o holandeses y no solamente los del propio fondo filial del banco en España." }
                    ]
                }
            }
        ]
    },
    {
        id: "mod-5",
        title: "Modelos de Análisis",
        icon: "fa-magnifying-glass-chart",
        description: "Técnico (Gráficos) vs Fundamental (Contabilidad pura)",
        lessons: [
            {
                title: "Análisis Técnico", file: "uned_10_atecnico.pdf", icon: "fa-chart-line",
                image: "infografias/fundamentos_analisis_tecnico.jpg",
                image2: "infografias/analisis_tecnico_trading.jpg",
                infographic: {
                    color: "orange", stat: "AT", idea: "Sigue al Precio", points: [
                        { t: "Descuento Universal de la Gráfica", d: "Precepto central del Dow Jones. Se da por hecho que el gráfico actual ya contiene y ha tasado todo lo sabido: guerras, malas ganancias pasadas y pandemias en línea." },
                        { t: "Tendencias y Resistencias", d: "Reconocimiento empírico de que los mercados suben en escalera. Hay techos psicológicos invisibles al alza (resistencias) que si se cruzan, disparan compras automáticas masivas sistemáticas." },
                        { t: "Velas Japonesas (Candlesticks)", d: "Anatomía gráfica. La mecha y el cuerpo de una vela muestran a simple golpe de vista el poder fiero que osos y toros pelearon en el transcurso del día de cotizaciones." }
                    ]
                }
            },
            {
                title: "Análisis Fundamental", file: "uned_13_intro_afundamental.pdf", icon: "fa-file-invoice-dollar",
                image: "infografias/analisis_fundamental.jpg",
                infographic: {
                    color: "green", stat: "AF", idea: "Tripas del Negocio", points: [
                        { t: "Valor Exacto vs. Precio Variable", d: "El dogma del 'Value Investing'. El AF clama que su valor contable (lo que te devuelve quebrando) suele ser distinto al irracional precio que te marca fugazmente tu bróker." },
                        { t: "Balances y Fichas", d: "Activo - Pasivo = Patrimonio. Evaluar severamente en las oficinas que no haya deudas agobiantes insostenibles al tipo de interés que viene a corto plazo." },
                        { t: "Rentabilidad por Dividendo y EPS", d: "Identificar flujos constantes de dólares libres ('Free cash Flow') que auguran que la empresa podrá pagar tranquilamente dividendos crecientes los próximos 10 ciclos." }
                    ]
                }
            },
            {
                title: "Perspectivas de Inversión", file: "uned_14_outlook_renta_variable.pdf", icon: "fa-eye",
                infographic: {
                    color: "teal", stat: "Macro", idea: "Vista de Pájaro", points: [
                        { t: "Top-Down Approach", d: "Una metódica analítica que observa primeramente qué hace la Reserva Federal en EEUU antes del Banco Europeo, para derivar el apetito final por los pequeños valores locales." },
                        { t: "Inflación Corrosiva", d: "Cómo la subida persistente del IPC afecta de forma gravísima directamente al consumo de retail, reorientando los flujos a petroleras y castigando fuertemente el lujo o tecnológicas nuevas." },
                        { t: "Estilos Growth vs Value", d: "La perpetua guerra de enfoques. Empresas del futuro apostándolo todo y caras en ventas presentes (Growth), contra negocios clásicos sin deudas, seguros pero estancados (Value)." }
                    ]
                }
            }
        ]
    },
    {
        id: "mod-6",
        title: "Productos Complejos Derivados",
        icon: "fa-chart-pie",
        description: "Contratos apalancados: Futuros y opciones en MEFF.",
        lessons: [
            {
                title: "Derivados BME (MEFF)", file: "uned_15_derivados.pdf", icon: "fa-cube",
                image: "infografias/derivados_futuros_opciones.jpg",
                infographic: {
                    color: "red", stat: "MEFF", idea: "Contratos Base", points: [
                        { t: "Aislamiento Matemático del Subyacente", d: "Producto artificial cuyo precio emana esclavizado de la cotización real de petróleo o barriles de trigo tangibles subyacentes." },
                        { t: "Coberturas (Hedging)", d: "Usadas originalmente no para hacerse millonarios locos, sino por granjeros que deseaban bloquear de antemano ventas de café en invierno impidiendo la pérdida mortal en primavera." },
                        { t: "Riesgos Simétricos del Apalancamiento", d: "Poder controlar $100.000 dejando un depósito ficticio marginal de $1.000. Si aciertas creces 10x, si falla la corrección debes reponer cientos en un margen call instantáneo o pierdes la casa." }
                    ]
                }
            },
            {
                title: "Warrants C/P", file: "uned_17_warrants.pdf", icon: "fa-bolt",
                infographic: {
                    color: "orange", stat: "X10", idea: "Apalancamiento Bancario", points: [
                        { t: "Call (Optimista) y Put (Pesimista)", d: "El concepto dicotómico maestro de las grandes ganancias en caída libre. Puedes forrarte apostando al derrumbe de una empresa (Put) a través de tu entidad de crédito." },
                        { t: "La Muerte por Valor Temporal", d: "Su letal desventaja intrínseca: el mismo warrant cada día que abres el alba es más barato sin que la acción se haya molestado en moverse porque la fecha de caducidad quema por dentro el tiempo restante." },
                        { t: "Volatilidad Implícita Oculta", d: "Factores griegos matemáticos opacos al ojo novato. Cuando hay nervios de guerra global son tan costosos que matemáticamente estás comprando infladamente en el peor día para tu bolsillo." }
                    ]
                }
            },
            {
                title: "Estructura Global CME", file: "uned_19_CME_contratos.pdf", icon: "fa-globe",
                image: "infografias/futuros_financieros.jpg",
                infographic: {
                    color: "indigo", stat: "CME", idea: "El Coloso de Chicago", points: [
                        { t: "Chicago Mercantile Exchange Hub", d: "El coloso del medioeste americano que lidera el brutal volumen mundial de negociantes diurnos, normalizando mundialmente la intermediación institucional de coberturas agrícolas y materias tangibles físicas." },
                        { t: "Estandarización de Intermediario", d: "Nadie incumple con las normas. La Cámara de Compensación extingue violentamente la opción remota de que el perdedor evada la deuda porque es el propio contrato central ciego quien exige solvencia permanente y fianza cada mañana." },
                        { t: "Futuros del S&P 500 Virtual", d: "Dominando la especulación nocturna financiera, al poderse intercambiar apuestas antes de que Nueva York abra las monumentales puertas o cuando hay festivo mundial sin tener que mover las miles de cotizadas." }
                    ]
                }
            }
        ]
    },
    {
        id: "mod-7",
        title: "Fiscalidad en España",
        icon: "fa-scale-unbalanced",
        description: "El socio oculto. Ganancias de acciones, tributaciones en fondos e IRPF.",
        lessons: [
            {
                title: "Guía General IRPF", file: "uned_20_Fiscalidad.pdf", icon: "fa-file-signature",
                image: "infografias/fiscalidad_irpf.jpg",
                infographic: {
                    color: "blue", stat: "IRPF", idea: "Hacienda Inversora", points: [
                        { t: "Tramos Inquisitivos del Ahorro", d: "Las ganancias en fondos e ingresos puros en Europa se asocian en sub-tramos que suelen abarcar desde casi un 19% al 28% castigando porcentualmente exponencial la destreza superlativa acumulativa final al contribuyente." },
                        { t: "Rendimientos de Capital vs Alteraciones", d: "Fiscalmente el dinero no es idéntico de clasificar cuando la empresa recompensa pasivamente un cupón recurrente a cuando tú proactivamente vendes tu silla ganando mil dólares en segundos sobre el parqué directo." },
                        { t: "El Gravamen Insidioso de Volatilidad", d: "Concepto de que fiscalmente no se descuenta para bien la inflación galopante, implicando que a veces hay falsas e ilusorias ganancias en compras de cincuenta años atrás en papel perdiendo estrepitoso poder de pan real adquisitivo." }
                    ]
                }
            },
            {
                title: "Acciones al Detalle", file: "uned_21_Guia_Fiscalidad_Acciones.pdf", icon: "fa-money-bill-trend-up",
                infographic: {
                    color: "red", stat: "FIFO", idea: "Retenciones y Ventas", points: [
                        { t: "El Principio Estricto FIFO", d: "Acronimia que exige férreamente que First In First Out rige; por ley te obligan inexcusable a que las históricamente primeras adquisiciones de Telefónicas sean obligadamente las declaradas liquidadas frente a la Agencia si vendes remesas de acciones partidas hoy." },
                        { t: "Sanción Anti-Aplicaciones", d: "Vender en dramáticas pérdidas finales el día víspera de año viejo y mágicamente recomprar secretamente el mismo día 2 de enero; el fisco paralizará e inhabilitará la bonificación fiscal de rescate cautelarmente impidiendo las trampas." },
                        { t: "Doble Imposición en EEUU", d: "El robo diplomático. Al percibir dividendos de corporaciones en Wall Street debes presentar formularios federales W-8BEN para lograr no asfixiarte pagando al Tío Sam excesivamente más aparte en la oficina hispana tributaria del lugar nacional." }
                    ]
                }
            },
            {
                title: "Paraíso de los Fondos", file: "uned_22_Guia_Fiscalidad_Fondos.pdf", icon: "fa-layer-group",
                infographic: {
                    color: "green", stat: "Cero", idea: "Traspasos Libres", points: [
                        { t: "Pilar Fiscal Diferido Único", d: "La gran conquista española exenta por ley que faculta cambiar al minuto la posición desde Silicon Valley pura a conservadurismos pasivos de Alemania bloqueando el devengo fiscal totalmente siempre no sacando a corriente personal." },
                        { t: "El Milagro de lo Exento y Compuesto", d: "Tener ese 21% sin atracos ni exacciones, reinvertidos masivamente a una década implica que al final de tu edad madura el volumen final matemático doblegue totalmente a un brillante particular operando por pura matemática en compraventas brutas de bolsa clásica sin fin." },
                        { t: "Transmisiones Testamentarias", d: "La perla escondida final mortuoria legal (plusvalía del muerto legal) en sucesorios de un patriarca legando con cero gravamen de lo ya obtenido vitaliciamente a herederos primarios limpiando rentabilidades de sangre impositivamente bajo la actual normativa hereditaria estipulada legal y pacíficamente." }
                    ]
                }
            }
        ]
    },
    {
        id: "mod-8",
        title: "Fondos, ETF y Gestión de Carteras",
        icon: "fa-wallet",
        description: "Inversión colectiva, fondos cotizados y construcción profesional de carteras.",
        lessons: [
            {
                title: "Clasificación de Fondos", file: "uned_24_Guía_Fondos_Clasificación.pdf", icon: "fa-tags",
                image: null,
                infographic: {
                    color: "teal", stat: "IIC", idea: "Tipos de Fondos", points: [
                        { t: "Fondos Ordinarios y Especiales", d: "Categorización oficial de la CNMV: ordinarios (renta fija, variable y mixtos), de fondos (invierten en otros fondos), subordinados (un único fondo maestro) y hedge funds (sin limitaciones de activos ni apalancamiento)." },
                        { t: "Vocación Inversora", d: "Monetarios (deuda corta y segura), renta fija pura, renta variable (+75% bolsa), mixtos (30-75%), garantizados (total o parcialmente) y de gestión pasiva que replican un índice sin intervención activa." },
                        { t: "Fondos Garantizados vs Libres", d: "Los garantizados ofrecen recuperar el capital con rendimiento fijo o variable avalado por un tercero. Los de inversión libre (hedge funds) operan sin restricciones pero exigen inversión mínima y perfil cualificado." }
                    ]
                }
            },
            {
                title: "Fondos de Inversión", file: "uned_25_Guía_Fondos_de_Inversión.pdf", icon: "fa-people-group",
                image: null,
                infographic: {
                    color: "blue", stat: "FI", idea: "Inversión Colectiva", points: [
                        { t: "Patrimonio Colectivo sin Personalidad", d: "Un fondo agrega los capitales de múltiples partícipes en un patrimonio único gestionado por una sociedad gestora profesional regulada, que toma las decisiones de inversión en nombre de todos." },
                        { t: "Gestora y Depositaria", d: "La gestora invierte y administra el fondo. La entidad depositaria custodia los activos y vigila que las decisiones de inversión respeten el folleto y la ley, actuando como escudo del partícipe." },
                        { t: "Suscripciones, Reembolsos y Traspasos", d: "El partícipe puede entrar (suscribir) o salir (reembolsar) cualquier día hábil al valor liquidativo. Los traspasos entre fondos no tributan en España, permitiendo rotar estrategias sin coste fiscal." }
                    ]
                }
            },
            {
                title: "ETF — Fondos Cotizados", file: "uned_26_Guía_ETF.pdf", icon: "fa-chart-simple",
                image: null,
                infographic: {
                    color: "orange", stat: "ETF", idea: "Bolsa + Fondos", points: [
                        { t: "Fondo que Cotiza como Acción", d: "Los ETF se compran y venden en tiempo real en el mercado secundario, combinando la diversificación de un fondo tradicional con la liquidez inmediata y transparencia de precio de una acción bursátil." },
                        { t: "Réplica de Índices", d: "La mayoría de ETF replican un índice (IBEX 35, S&P 500, EuroStoxx 50) de forma física (comprando los títulos subyacentes) o sintética (usando derivados), ofreciendo exposición amplia con un solo producto." },
                        { t: "Costes y Fiscalidad Diferencial", d: "Comisiones de gestión mucho más bajas que los fondos activos. Atención: en España los traspasos de ETF SÍ tributan a diferencia de los fondos tradicionales, lo que condiciona su uso patrimonial." }
                    ]
                }
            },
            {
                title: "Asset Allocation", file: "uned_27_Asset_Allocation.pdf", icon: "fa-scale-balanced",
                image: null,
                infographic: {
                    color: "indigo", stat: "AA", idea: "Distribución de Activos", points: [
                        { t: "Perfil del Inversor y Horizonte", d: "El Asset Allocation parte de definir correctamente tu horizonte temporal, tus restricciones de liquidez y tus objetivos de rentabilidad-riesgo. Una mala perfilación es la causa principal de pérdidas del inversor medio." },
                        { t: "Estratégico vs Táctico", d: "El AA Estratégico fija proporciones a largo plazo entre clases de activo (renta variable, fija, alternativos). El Táctico permite desviaciones temporales para aprovechar oportunidades de mercado sin romper la estructura." },
                        { t: "Gestión Activa vs Pasiva", d: "La gestión activa busca generar Alpha (batir al mercado) mediante selección de valores. La pasiva replica el Beta (rendimiento del índice) con costes mínimos. La evidencia muestra que pocos gestores superan consistentemente al índice." }
                    ]
                }
            },
            {
                title: "Gestión de Carteras", file: "uned_28_Gestion_de_Carteras.pdf", icon: "fa-briefcase",
                image: null,
                infographic: {
                    color: "purple", stat: "σ", idea: "Markowitz y Riesgo", points: [
                        { t: "Rentabilidad, Riesgo y Volatilidad", d: "El rendimiento esperado de un activo se estima por sus retornos históricos. El riesgo se mide por la volatilidad (desviación típica): a mayor dispersión de los retornos, mayor incertidumbre para el inversor." },
                        { t: "Frontera Eficiente de Markowitz", d: "Teoría Nobel que demuestra que combinando activos con baja correlación se puede construir una cartera con menor riesgo total que cualquiera de sus componentes individuales, obteniendo la mejor relación rentabilidad/riesgo posible." },
                        { t: "Riesgo Sistemático vs Específico", d: "El riesgo específico (de una empresa concreta) se elimina diversificando en 15-20 valores. El riesgo sistemático (crisis global, tipos de interés) no se puede diversificar y es el precio mínimo por invertir." }
                    ]
                }
            }
        ]
    }
];

// Elements
const roadmapContainer = document.getElementById("roadmap-container");
const modal = document.getElementById("lesson-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalLessons = document.getElementById("modal-lessons");
const modalBadge = document.querySelector(".modal-badge");

// Initialize Map
function renderRoadmap() {
    roadmapContainer.innerHTML = "";

    curriculumData.forEach((mod, index) => {
        const card = document.createElement("div");
        card.className = "module-card";
        card.innerHTML = `
            <div class="module-info">
                <h3><i class="fa-solid ${mod.icon}"></i> Módulo ${index + 1}: ${mod.title}</h3>
                <p>${mod.description}</p>
            </div>
            <div class="module-icon">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        `;

        card.addEventListener("click", () => openModal(mod, index + 1));
        roadmapContainer.appendChild(card);
    });
}

// --- Progress Logic ---
let userProgress = JSON.parse(localStorage.getItem('bolsaAcademyProgress')) || [];

function saveProgress() {
    localStorage.setItem('bolsaAcademyProgress', JSON.stringify(userProgress));
}

function updateProgressDashboard() {
    const totalModules = curriculumData.length;
    const completed = userProgress.length;
    const percentage = Math.round((completed / totalModules) * 100);

    // Update Text
    document.getElementById('progress-text-modulos').innerText = `${completed} de ${totalModules} Módulos`;
    document.getElementById('progress-percentage').innerText = `${percentage}%`;

    // Level
    let levelTitle = "Novato Financiero";
    if (completed >= 2) levelTitle = "Aprendiz de Mercado";
    if (completed >= 4) levelTitle = "Operador Intermedio";
    if (completed >= 6) levelTitle = "Analista Avanzado";
    if (completed >= 7) levelTitle = "Gestor de Carteras";
    if (completed === 8) levelTitle = "Maestro Inversor";
    document.getElementById('user-level').innerText = levelTitle;

    // Circular Progress Bar
    const circle = document.getElementById('circular-progress');
    circle.style.background = `conic-gradient(var(--primary) ${percentage * 3.6}deg, rgba(255,255,255,0.05) 0deg)`;

    // Render Badges
    const badgesGrid = document.getElementById('badges-grid');
    badgesGrid.innerHTML = "";

    curriculumData.forEach((mod, index) => {
        const isUnlocked = userProgress.includes(mod.id);
        const badge = document.createElement("div");
        badge.className = `badge-item ${isUnlocked ? 'unlocked' : ''}`;
        badge.innerHTML = `
            <div class="badge-icon"><i class="fa-solid ${mod.icon}"></i></div>
            <div class="badge-name">Módulo ${index + 1}</div>
        `;
        badgesGrid.appendChild(badge);
    });
}

// Open Modal
function openModal(mod, num) {
    modalBadge.textContent = `Módulo ${num}`;
    modalTitle.textContent = mod.title;
    modalDesc.textContent = mod.description;

    modalLessons.innerHTML = "";
    mod.lessons.forEach(lesson => {
        const wrapper = document.createElement("div");
        wrapper.className = "lesson-full-card";

        const pts = lesson.infographic.points;
        const accentColor = `var(--color-${lesson.infographic.color})`;

        wrapper.innerHTML = `
            <div class="infographic-container" style="--accent-infographic: ${accentColor}">
                <div class="infographic-header">
                    <h4>${lesson.title}</h4>
                    <span class="info-badge">${lesson.infographic.idea}</span>
                </div>
                
                <div class="infographic-body">
                    <div class="infographic-left">
                        <div class="stat-circle">
                            <span>${lesson.infographic.stat}</span>
                        </div>
                    </div>
                    <div class="infographic-right">
                        <ul class="detailed-points">
                            <li>
                                <div class="bullet-header"><i class="fa-solid fa-square-check"></i> ${pts[0].t}</div>
                                <div class="bullet-desc">${pts[0].d}</div>
                            </li>
                            <li>
                                <div class="bullet-header"><i class="fa-solid fa-square-check"></i> ${pts[1].t}</div>
                                <div class="bullet-desc">${pts[1].d}</div>
                            </li>
                            <li>
                                <div class="bullet-header"><i class="fa-solid fa-square-check"></i> ${pts[2].t}</div>
                                <div class="bullet-desc">${pts[2].d}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="infographic-footer">
                    ${lesson.image ? `
                    <button class="infografia-btn" onclick="openLightbox('${lesson.image}', '${lesson.title}')">
                        <i class="fa-solid fa-chart-bar"></i> Infografía de repaso
                    </button>
                    ` : ''}
                    ${lesson.image2 ? `
                    <button class="infografia-btn infografia-btn--alt" onclick="openLightbox('${lesson.image2}', '${lesson.title} — contexto avanzado')">
                        <i class="fa-solid fa-chart-bar"></i> Infografía de repaso (II)
                    </button>
                    ` : ''}
                    <a href="pdfs/${lesson.file}" target="_blank" class="pdf-btn">
                        <i class="fa-solid fa-file-pdf"></i> Estudiar PDF original
                    </a>
                </div>
            </div>
        `;
        modalLessons.appendChild(wrapper);
    });

    // Add "Marcar como Asimilado" Button
    const isCompleted = userProgress.includes(mod.id);
    const actionBtn = document.createElement("button");
    actionBtn.className = `mark-module-btn ${isCompleted ? 'completed' : ''}`;
    actionBtn.innerHTML = isCompleted
        ? `<i class="fa-solid fa-circle-check"></i> Módulo Asimilado`
        : `<i class="fa-regular fa-circle-check"></i> Marcar Módulo como Asimilado`;

    actionBtn.onclick = function () {
        if (userProgress.includes(mod.id)) {
            userProgress = userProgress.filter(id => id !== mod.id); // Toggle off
            actionBtn.classList.remove('completed');
            actionBtn.innerHTML = `<i class="fa-regular fa-circle-check"></i> Marcar Módulo como Asimilado`;
        } else {
            userProgress.push(mod.id); // Toggle on
            actionBtn.classList.add('completed');
            actionBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Módulo Asimilado`;
        }
        saveProgress();
        updateProgressDashboard();
    };

    modalLessons.appendChild(actionBtn);

    modal.classList.add("active");
}

// Close Modal
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

// Navigation Logic
const navBtns = document.querySelectorAll(".nav-btn");
const roadmapView = document.getElementById("roadmap-container");
const progresoView = document.getElementById("progreso-container");
const mainIntro = document.getElementById("main-intro");

navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all
        navBtns.forEach(b => b.classList.remove("active"));
        // Add active to clicked
        btn.classList.add("active");

        const view = btn.getAttribute("data-view");
        if (view === "mapa") {
            roadmapView.style.display = "flex";
            mainIntro.style.display = "block";
            progresoView.style.display = "none";
        } else if (view === "progreso") {
            roadmapView.style.display = "none";
            mainIntro.style.display = "none";
            progresoView.style.display = "block";
        }
    });
});

// Run Initializer
document.addEventListener("DOMContentLoaded", () => {
    renderRoadmap();
    updateProgressDashboard();
});

// === Lightbox para infografías ===
function openLightbox(src, title) {
    const lb = document.getElementById("lightbox-overlay");
    const img = document.getElementById("lightbox-img");
    const cap = document.getElementById("lightbox-caption");
    img.src = src;
    img.alt = `Infografía: ${title}`;
    cap.textContent = title;
    lb.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lb = document.getElementById("lightbox-overlay");
    lb.classList.remove("active");
    document.body.style.overflow = "";
    // Reset src after transition
    setTimeout(() => { document.getElementById("lightbox-img").src = ""; }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
    const lb = document.getElementById("lightbox-overlay");
    lb.addEventListener("click", (e) => {
        if (e.target === lb) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });
});
