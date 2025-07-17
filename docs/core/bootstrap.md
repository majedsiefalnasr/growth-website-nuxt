# Bootstrap Integration

This project uses [Bootstrap 5](https://getbootstrap.com/) for optional utility classes and interactive components.

## Installation & Usage

- Bootstrap is installed via npm and listed in `package.json`.
- The CSS is loaded by importing it at the top of your main CSS file: `app/assets/css/app.css`:

  ```css
  @import 'bootstrap/dist/css/bootstrap.min.css';
  ```

- Place your custom CSS and Tailwind layers after this import to override Bootstrap styles as needed.
- Bootstrap JS is loaded only on the client via a Nuxt plugin (`app/plugins/bootstrap.client.ts`).
- The plugin provides the Bootstrap JS API as `$bs` (see below).

## How it works

- **CSS:** All Bootstrap styles are available globally. Use TailwindCSS and NuxtUI as primary styling tools; use Bootstrap utility classes only if needed. Importing Bootstrap in your main CSS file ensures your custom styles can override Bootstrap defaults.
- **JS:** Interactive Bootstrap components (modals, dropdowns, etc.) work out of the box on the client side. You can also access the Bootstrap JS API via Nuxt's injection system.

### Accessing Bootstrap JS in your app

You can use Bootstrap's JS API in your components or composables like this:

```ts
const { $bs } = useNuxtApp()
// Example: programmatically show a modal
const modal = new $bs.Modal(document.getElementById('myModal'))
modal.show()
```

## Customization

- You can override Bootstrap variables by importing custom SCSS before the Bootstrap import (not currently set up).
- For advanced customization, see the [Bootstrap docs](https://getbootstrap.com/docs/5.3/customize/overview/).

## Accessibility

Bootstrap components are accessible by default, but always test with screen readers and keyboard navigation.

## Security

No sensitive data is exposed by this integration.

---

For more details, see the [Nuxt + Bootstrap guide](https://getbootstrap.com/docs/5.3/getting-started/vite/).
