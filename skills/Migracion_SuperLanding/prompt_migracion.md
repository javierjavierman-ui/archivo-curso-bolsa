# 🚀 PROMPT UNIVERSAL: Migración SúperLanding Dark Mode

## 📋 INSTRUCCIONES PARA LA IA
Antes de generar la web, necesito que me respondas estas **5 PREGUNTAS**:

### ❓ PREGUNTA 1: Web existente del Proyecto
**Url de la página web actual:**

### ❓ PREGUNTA 2: Información del Proyecto en curso
*(Si la web actual tiene esta info, se extraerá sola en el Paso 0. Puedes rellenarlo para forzar)*
**Nombre del negocio/marca:**
**Tagline (frase descriptiva en 1 línea):**
**Propuesta de valor (qué haces/ofreces):**

### ❓ PREGUNTA 3: Sector y Estilo
**Sector/Industria:** (Ejemplos: Tech/IA, Salud, Finanzas, Educación, E-commerce, Consultoría, Creatividad, Divulgación, etc.)
**Tipo de web:** (Selecciona UNA)
- [ ] **Personal**
- [ ] **Corporativa**
- [ ] **Tech/Startup**
- [ ] **Industrial**
- [ ] **Creativa**
- [ ] **Divulgativa** (Sin ánimo de lucro, Blog, Biblioteca de contenidos)

### ❓ PREGUNTA 4: Color Principal
**Color de acento principal:** (Elige UNO o proporciona código HEX)
- [ ] Púrpura/Lila (#A855F7), Azul Eléctrico (#3B82F6), Verde Neón (#22C55E), Naranja (#F97316), Rosa (#EC4899), Cian (#06B6D4), Otro HEX.

### ❓ PREGUNTA 5: Mantenimiento de Marca
- [ ] Conservar logo e imágenes de la web. (La IA los extraerá y reutilizará).
- [ ] Rediseño completo de la marca (La IA generará logo e imágenes nuevos).

---

## 🔍 PASO 0: EXTRACCIÓN Y ANÁLISIS DE LA URL
**⚡ IMPORTANTE:** ANTES de generar código o imágenes, utiliza tus herramientas de navegación web (`read_url_content` u otras herramientas del navegador) para visitar la URL y analizar a fondo.
1. Extrae todo el contenido real: lista exacta de servicios, secciones "Sobre nosotros", testimonios y diferenciadores.
2. Almacena temporalmente ese contenido en tu memoria.
3. Usa SIEMPRE este contenido extraído en lugar de inventar texto o usar "Lorem Ipsum" durante la fase de desarrollo.

---

## 🎨 PASO 1: GENERACIÓN DE IMÁGENES
### 1. **LOGO DE LA MARCA** (`logo.png`)
- **Si conservar:** Descarga o copia el logo actual de la web.
- **Si rediseño:** Prompt: "Modern minimalist logo for [NOMBRE], [SECTOR], featuring [COLOR], dark background, premium... 512x512px SVG/PNG."

### 2. **IMÁGENES DE SERVICIOS** (6 imágenes: `service_1.png`...)
- Usa los servicios extraídos en el **Paso 0** en vez de placeholders genéricos.
- Prompt para generar: "Professional [DESCRIPCIÓN SERVICIO REAL] visual for [SECTOR], [COLOR] accent lighting, dark luxury aesthetic, 4K..."

### 3. **HERO VISUAL** (`hero_visual.png`)
- Genera usando el estilo futurista 3D y partículas con el [COLOR]. Todo adaptado al sector migrado.

---

## 🎨 PASO 2: ESTRUCTURA, CÓDIGO Y CONTENIDO PERSONALIZADO
> **¡ATENCIÓN!** Aplica **EXACTAMENTE** el sistema de diseño CSS Dark Luxury, tipografías y componentes (Glassmorphism Cards, Glow effects, Hover States, Flip Cards de la plantilla SúperLanding). 
> **LA ÚNICA GRAN DIFERENCIA:** Los textos, descripciones de flip cards, testimonios y CTAs en HTML DEBEN estar rellenos con el **Contenido Extraído en el Paso 0** y no con datos inventados. Adapta los textos viejos para que encajen perfectamente en los espacios del diseño Premium sin perder la identidad del cliente.

**FLUJO OBLIGATORIO FINAL:**
1. Lee preguntas.
2. PASO 0: Raspa y analiza URL vieja.
3. PASO 1: Genera / Descarga imágenes (`logo`, `hero`, `servicios`).
4. PASO 2: Codifica `index.html`, `styles.css`, `script.js` inyectando todo el diseño SúperLanding con *el contenido extraído realista*.
