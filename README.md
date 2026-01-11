# RapidoBrilloso - Car Wash Landing Page 🚗✨

Una landing page moderna y profesional para un servicio de lavado de autos, diseñada con Bootstrap 5, jQuery y animaciones avanzadas.

## 🌟 Características

### Diseño y UI/UX
- ✅ Diseño totalmente responsive (móvil, tablet, desktop)
- ✅ Interfaz moderna con gradientes y efectos visuales
- ✅ Animaciones suaves con AOS (Animate On Scroll)
- ✅ Efectos hover interactivos en todos los elementos
- ✅ Paleta de colores profesional y atractiva

### Secciones
1. **Hero Section** - Pantalla de bienvenida con efecto parallax
2. **Features** - Características principales del servicio
3. **Servicios** - 6 servicios detallados con iconos
4. **Paquetes** - 4 planes de precios (Básico, Estándar, Premium, Elite)
5. **Galería** - Showcae de trabajos con overlay interactivo
6. **Testimonios** - Opiniones de clientes satisfechos
7. **Estadísticas** - Contador animado de logros
8. **Contacto** - Formulario funcional con validación
9. **Footer** - Información completa y newsletter

### Funcionalidades Interactivas
- 🎯 Navegación suave entre secciones
- 🎯 Navbar que cambia con el scroll
- 🎯 Botón flotante de WhatsApp
- 🎯 Botón de scroll to top
- 🎯 Contador animado de estadísticas
- 🎯 Sistema de notificaciones
- 🎯 Validación de formularios
- 🎯 Selección de paquetes interactiva
- 🎯 Lazy loading de imágenes
- 🎯 Easter egg (Konami Code)

### Tecnologías Utilizadas
- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados con animaciones
- **Bootstrap 5.3.2** - Framework CSS responsive
- **jQuery 3.7.1** - Manipulación del DOM y efectos
- **AOS 2.3.1** - Animaciones on scroll
- **Bootstrap Icons** - Iconografía moderna

## 🚀 Cómo Usar

### Despliegue en GitHub Pages

1. **Sube los archivos a tu repositorio:**
```bash
git init
git add .
git commit -m "Initial commit - RapidoBrilloso landing page"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/rapidobrilloso.git
git push -u origin main
```

2. **Activa GitHub Pages:**
   - Ve a Settings > Pages
   - En "Source" selecciona "main" branch
   - Guarda y espera unos minutos
   - Tu sitio estará en: `https://TU-USUARIO.github.io/rapidobrilloso/`

### Uso Local

Simplemente abre `index.html` en tu navegador. No requiere servidor, funciona directamente.

## 📁 Estructura de Archivos

```
rapidobrilloso/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS personalizados
├── script.js           # JavaScript interactivo
└── README.md           # Documentación
```

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #00d4ff;      /* Color principal */
    --secondary-color: #0099ff;    /* Color secundario */
    --dark-color: #1a1a2e;         /* Color oscuro */
}
```

### Modificar Precios
Edita los precios en `index.html` buscando la sección de paquetes:
```html
<span class="amount">150</span>  <!-- Cambia el número -->
```

### Actualizar Información de Contacto
Busca en `index.html` la sección `#contacto` y actualiza:
- Dirección
- Teléfonos
- Emails
- Horarios
- Enlaces de redes sociales

### Cambiar Imágenes
Las imágenes actuales son de Unsplash. Para cambiarlas:
1. Busca las URLs de imágenes en `index.html`
2. Reemplaza con tus propias imágenes (locales o URLs)

Ejemplo:
```html
<img src="https://images.unsplash.com/..." alt="...">
<!-- Cambia a: -->
<img src="./images/tu-imagen.jpg" alt="...">
```

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints:
- **Desktop:** > 992px
- **Tablet:** 768px - 992px
- **Mobile:** < 768px

## ⚡ Optimización

### Performance
- Lazy loading de imágenes
- CSS y JS minificados (opcional)
- Uso de CDN para librerías
- Animaciones optimizadas con CSS

### SEO
- Etiquetas meta configuradas
- Estructura semántica HTML5
- Alt tags en todas las imágenes
- URLs amigables con hash navigation

## 🛠️ Funcionalidades Adicionales

### Formulario de Contacto
El formulario está listo pero requiere backend. Opciones:
- **Formspree:** Agrega `action="https://formspree.io/f/YOUR_ID"`
- **EmailJS:** Implementa con JavaScript
- **Backend propio:** PHP, Node.js, etc.

### Analytics
Para agregar Google Analytics:
```html
<!-- En el <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🎁 Easter Eggs

- **Konami Code:** ↑↑↓↓←→←→BA - Activa modo fiesta y descuento especial
- **Mensaje de Bienvenida:** Primera visita muestra notificación especial

## 📞 Soporte

Para preguntas o sugerencias sobre el código:
- Revisa la consola del navegador para logs
- Todos los componentes están documentados en el código

## 📄 Licencia

Este proyecto es de código abierto. Puedes usarlo, modificarlo y distribuirlo libremente para proyectos personales o comerciales.

## 🙏 Créditos

- **Imágenes:** Unsplash (https://unsplash.com)
- **Iconos:** Bootstrap Icons
- **Fuentes:** System fonts
- **Avatares:** RandomUser API

## 🚀 Próximas Mejoras Sugeridas

- [ ] Integrar sistema de reservas real
- [ ] Agregar mapa de ubicación con Google Maps
- [ ] Sistema de cupones de descuento
- [ ] Chat en vivo con clientes
- [ ] Blog de consejos para el cuidado del auto
- [ ] Galería con lightbox expandible
- [ ] Reseñas de Google integradas
- [ ] Múltiples idiomas (i18n)

---

**Desarrollado con ❤️ para RapidoBrilloso**

*¡Tu auto merece el mejor cuidado!* 🚗✨
