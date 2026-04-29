# 🚀 PROMPT UNIVERSAL: Migración SúperLanding Dark Mode

## 📋 INSTRUCCIONES PARA LA IA

Antes de generar la web, necesito que me respondas estas **5 PREGUNTAS**:

### ❓ PREGUNTA 1: Web existente del Proyecto
**Url de la página web actual:**

### ❓ PREGUNTA 2: Información del Proyecto en curso
*(Si la web actual tiene esta info clara, se extraerá sola en el Paso 0. Rellénalo solo para forzar correcciones)*
- **Nombre del negocio/marca:**
- **Tagline (frase descriptiva en 1 línea):**
- **Propuesta de valor (qué haces/ofreces):**

### ❓ PREGUNTA 3: Sector y Estilo
**Sector/Industria:** (Ejemplos: Tech/IA, Salud, Finanzas, Educación, E-commerce, Consultoría, Creatividad, Divulgación...)
**Tipo de web:** (Selecciona UNA)
- [ ] **Personal** (Freelancer, creador de contenido, consultor)
- [ ] **Corporativa** (Empresa establecida, B2B maduro)
- [ ] **Tech/Startup** (Tecnología, innovación, SaaS)
- [ ] **Industrial** (Manufactura, servicios tradicionales)
- [ ] **Creativa** (Diseño, arte, agencia, portfolio)
- [ ] **Divulgativa** (Blog, biblioteca, sin ánimo de lucro)

### ❓ PREGUNTA 4: Color Principal
**Color de acento principal:** (Elige UNO o proporciona código HEX)
- [ ] Púrpura/Lila (#A855F7), Azul Eléctrico (#3B82F6), Verde Neón (#22C55E), Naranja (#F97316), Rosa (#EC4899), Cian (#06B6D4), Otro HEX.

### ❓ PREGUNTA 5: Mantenimiento de Marca
- [ ] Conservar logo e imágenes clave originales. (Extráelas usando la URL).
- [ ] Rediseño completo de la marca (Genera un logo y recursos visuales todos nuevos con IA).

---

## 🔍 PASO 0: EXTRACCIÓN Y ANÁLISIS DE LA URL
**⚡ IMPORTANTE:** ANTES de generar código o imágenes, utiliza imperativamente las herramientas de navegación (`read_url_content`, navegador web...) para visitar la URL y analizar a fondo.
1. Extrae TODO el contenido real disponible: descripción exacta de los servicios, página de historia/sobre nosotros, testimonios aportados, ventajas competitivas o KPIs.
2. Identifica y almacena temporalmente este contenido textual.
3. Usa SIEMPRE este contenido extraído de la antigua web como *SKELETON* (esqueleto) para los textos de la fase de desarrollo. No uses NUNCA textos "Lorem Ipsum" ni inventes servicios que no existen. Se trata de una migración.

---

## 🎨 PASO 1: ACTIVOS E IMÁGENES
### 1. **LOGO DE LA MARCA** (`images/logo.png`)
- **Si el usuario pidió conservar:** Extrae el logo original de la web en la máxima calidad posible (o pide al usuario los assets si fallan los enlaces).
- **Si el usuario pidió rediseñar:** Prompt base DA-LLE: `Modern minimalist logo for [NOMBRE], [SECTOR], featuring [COLOR PRINCIPAL] as primary color, pure dark background, premium aesthetic, scalable icon, high contrast, non-childish.`

### 2. **IMÁGENES DE SERVICIOS/FEATURES** (`images/service_X.png`)
- **Si el usuario pidió rediseñar o faltan imágenes:** Prompt para generar: `Professional [DESCRIPCIÓN REAL EXTRAÍDA] visual for [SECTOR], [COLOR PRINCIPAL] accent lighting, dark luxury aesthetic, modern composition, 4K quality.` (Evita texto complejo en las fotos generadas).

### 3. **HERO VISUAL** (`images/hero_visual.png`)
- Genera uno nuevo en 3D futurista o reutiliza una buena imagen de la web (adaptada en CSS con destellos y bordes curvos).

---

## 💻 PASO 2: ESTRUCTURA WEB Y CÓDIGO (DARK LUXURY)
> **¡ATENCIÓN!** Usa HTML Semántico. Genera `index.html`, `styles.css` y `script.js`. Aplica **EXACTAMENTE** este sistema de diseño inyectando el contenido real recopilado en el PASO 0 y PASO 1.

### 1. PALETA Y TOKENS (CSS)
**FONDOS GLOBALES:** `--bg-primary: #000000;`, `--bg-secondary: #09090B;`, `--bg-tertiary: #18181B;`
**ACENTO Y GRADIENTES:** Configura todos los niveles (`--primary-50` al `--primary-900`) basados en el Color Principal escogido en la Pregunta 4. Utiliza luces radiales dispersas (Glow Effects) `radial-gradient` mediante variables `rgba()`.
**TEXTOS GLOBALES:** `--text-primary: #FFF;`, `--text-secondary: #E4E4E7;`.

### 2. TIPOGRAFÍA REQUERIDA
Títulos modernos de impacto: **"Plus Jakarta Sans"** (pesos 700-800).
Cuerpo y legibilidad: **"Inter"** (pesos 400-500). (Debes importarlas de Google Fonts).

### 3. COMPONENTES VISUALES MANDATORIOS
- **Glassmorphism (.glass-card):** `backdrop-filter: blur(24px) saturate(180%);` + fondos ultra tenues basados en la opacidad del color primario.
- **Botones CTA (.btn-primary):** `background-size: 200% 200%;` + borde brillante y drop-shadow glow emitido por el botón.
- **Garantía Responsive:** Adaptación total mediante `@media breakpoints` y Flexbox/Grid fluido. Mobile first layout. 

### 4. ANIMACIONES IMPERATIVAS (JavaScript + CSS)
- **Intersection Observer:** Los contenedores hijos deben revelarse (`fade-in-up`) en cascada natural conforme el usuario baja.
- **Metrics/Contadores:** Transición animada de los valores numéricos (0 a ValorFinal) cuando se entran en vista.
- **Navbar Sticky:** Transparente arriba, difuminado y fondo oscurecido a partir del scroll.
- **Partículas Aleatorias:** Pequeños divs (`box-shadow` e iluminación de color primario) flotando constantemente tras el Hero principal administrado por JS.
- **Flip Cards (Giro 3D):** En las secciones de servicios. Hover activa un rotado de 180º mostrando el listado de features en su cara trasera (en Mobile actuará por Touch/Tap). Se debe inyectar la info extraída aquí adentro.

---

=====================================================
✅ LISTA COMPLETA FUNCIONAL Y RESULTADO ESPERADO
=====================================================
Tu tarea finaliza entregando TODO el esqueleto:
1. Archivos `index.html`, `styles.css` y `script.js` puros, sin depender de librerías extrañas de CSS.
2. Elementos gráficos mapeados con los assets correctos `images/`.
3. Todos los textos placeholders (Testimonios genéricos, Lorem Ipsum, Precios falsos) purgados. Todo debe haber sido reemplazado con lógica a partir del **Paso 0**.
4. ¡Una web cuyo aspecto visual asuste por su profesionalidad y calidad percibida!
