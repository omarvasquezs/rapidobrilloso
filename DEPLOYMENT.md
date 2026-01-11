# 🚀 Guía Rápida de Despliegue - GitHub Pages

## Opción 1: Usando Git desde la terminal

```bash
# 1. Inicializar repositorio Git (si no existe)
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Add RapidoBrilloso car wash landing page"

# 4. Crear la rama main
git branch -M main

# 5. Conectar con tu repositorio de GitHub
# (Primero crea el repositorio en github.com)
git remote add origin https://github.com/TU-USUARIO/rapidobrilloso.git

# 6. Subir los archivos
git push -u origin main
```

## Opción 2: Usando GitHub Desktop

1. Abre GitHub Desktop
2. File > Add Local Repository
3. Selecciona la carpeta `rapidobrilloso`
4. Haz commit de los cambios
5. Publica el repositorio en GitHub

## Activar GitHub Pages

1. Ve a tu repositorio en GitHub.com
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En "Branch":
   - Selecciona: `main`
   - Carpeta: `/ (root)`
   - Click en **Save**
5. ¡Espera 1-2 minutos!
6. Tu sitio estará disponible en:
   ```
   https://TU-USUARIO.github.io/rapidobrilloso/
   ```

## ✅ Checklist Pre-Deploy

Antes de publicar, verifica:

- [ ] Todas las imágenes se cargan correctamente
- [ ] Los enlaces funcionan
- [ ] El formulario de contacto tiene tu información
- [ ] Los números de teléfono están actualizados
- [ ] Las direcciones de email son correctas
- [ ] Los enlaces de redes sociales apuntan a tus perfiles
- [ ] El año en el footer es correcto
- [ ] Probaste en móvil y desktop

## 🔧 Personalización Rápida

### Cambiar información de contacto

Edita `index.html` línea ~840:

```html
<p>+52 (55) 1234-5678</p>  <!-- Tu teléfono -->
<p>info@rapidobrilloso.com</p>  <!-- Tu email -->
<p>Av. Principal #123</p>  <!-- Tu dirección -->
```

### Cambiar WhatsApp

Edita `index.html` línea ~980:

```html
<a href="https://wa.me/525512345678">  <!-- Tu número -->
```

### Cambiar colores

Edita `styles.css` línea ~2:

```css
--primary-color: #00d4ff;  /* Tu color principal */
```

## 📱 Probar Localmente

### Opción 1: Servidor Python
```bash
cd rapidobrilloso
python3 -m http.server 8080
# Abre: http://localhost:8080
```

### Opción 2: Servidor Node.js
```bash
npx serve
```

### Opción 3: Doble click
Simplemente abre `index.html` con tu navegador.

## 🌐 Dominio Personalizado (Opcional)

Si tienes un dominio propio:

1. En GitHub Pages settings, añade tu dominio custom
2. En tu proveedor de DNS, crea un registro CNAME:
   ```
   www.tudominio.com -> TU-USUARIO.github.io
   ```

## 📊 Agregar Google Analytics

1. Crea una cuenta en analytics.google.com
2. Obtén tu ID de medición (G-XXXXXXXXXX)
3. Agrega al `<head>` de `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📧 Conectar Formulario de Contacto

### Opción 1: Formspree (Gratis)

1. Regístrate en formspree.io
2. Crea un nuevo form
3. Copia tu endpoint
4. Modifica el formulario en `index.html`:

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Opción 2: EmailJS

1. Regístrate en emailjs.com
2. Configura tu servicio de email
3. Añade el SDK y configura según su documentación

### Opción 3: Netlify Forms

Si despliegas en Netlify en lugar de GitHub Pages:

```html
<form name="contact" method="POST" data-netlify="true">
```

## 🔍 SEO Básico

Agrega estas meta tags al `<head>`:

```html
<meta property="og:title" content="RapidoBrilloso - Car Wash Premium">
<meta property="og:description" content="El mejor servicio de lavado de autos">
<meta property="og:image" content="URL_DE_TU_IMAGEN">
<meta property="og:url" content="https://tudominio.com">
<meta name="twitter:card" content="summary_large_image">
```

## 🐛 Solución de Problemas

### "Page not found" en GitHub Pages
- Verifica que el archivo se llame `index.html` (minúsculas)
- Espera 5 minutos después de activar Pages
- Verifica que la rama sea correcta

### Imágenes no se cargan
- Usa URLs completas (https://)
- O sube las imágenes a tu repositorio

### CSS/JS no funciona
- Verifica las rutas de los archivos
- Asegúrate que todos estén en la misma carpeta

## 📞 Soporte Técnico

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Verifica que todos los archivos estén subidos
3. Confirma que GitHub Pages esté activo

## 🎉 ¡Listo!

Tu sitio web profesional de car wash está listo para recibir clientes.

**URL de ejemplo:**
```
https://tu-usuario.github.io/rapidobrilloso/
```

---

**¡Éxito con tu negocio!** 🚗✨
