# Cuberto Mouse Follower Integration

This project integrates the [Cuberto Mouse Follower](https://github.com/Cuberto/mouse-follower) library for a modern, animated custom cursor effect.

## How It Works

- The `mouse-follower` and `gsap` packages are installed via npm/pnpm.
- A Nuxt plugin (`app/plugins/mouseFollower.client.ts`) loads both libraries and attaches them to `window` for global access.
- The composable `useMouseFollower` (in `app/composables/useMouseFollower.ts`) encapsulates all initialization, pointer detection, and cleanup logic.
- The effect is initialized globally in the main layout (`app/layouts/default.vue`), so it loads only once for the entire app.
- Cursor styles are included in `app/assets/css/cursor.css` and imported in `app/assets/css/app.css`.
- You can use all [Mouse Follower data attributes](https://github.com/Cuberto/mouse-follower#attributes) in your Vue templates as in vanilla HTML.

## Usage Example

Add data attributes to any element:

```vue
<h2 data-cursor-magnify-sm-inner>
  <span data-cursor="-inverse">استعادة الوصول لحسابك</span>
</h2>
```

## Device Detection

- The cursor only appears on devices with a mouse or trackpad (using `(pointer: fine)` detection).
- It is automatically destroyed on touch-only devices.

## Customization

- Edit `app/assets/css/cursor.css` to change the cursor's appearance.
- Adjust the config in `useMouseFollower.ts` for advanced behavior.

## Troubleshooting

- If the cursor does not appear, ensure both `mouse-follower` and `gsap` are installed and that the plugin is loaded only on the client.
- For more, see the [official documentation](https://github.com/Cuberto/mouse-follower).

---

For questions or advanced usage, see the Cuberto Mouse Follower [GitHub repo](https://github.com/Cuberto/mouse-follower).
