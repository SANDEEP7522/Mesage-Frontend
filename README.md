
# 🚀 React + Vite Project (MessageSlackApp)
----
----
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

---

## ⚙️ Installation & Setup

Clone the repository and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

---

# 🚀 Project Features

⚡ Fast Refresh with Vite
🚀 Super-fast development server
🔄 Instant updates with Hot Module Replacement (HMR)
📦 Optimized build for production

### Styled with Tailwind CSS

💅 Utility-first CSS framework for rapid UI development
🎭 Easily customizable themes and styles
📱 Fully responsive and mobile-friendly

### 🔄 State Management with TanStack Query

🔍 Efficient and automatic data fetching
⚡ Optimized caching for performance
🔄 Background data synchronization

### 🏗 Modular UI Components from shadcn/ui

🎨 Beautiful, accessible, and reusable UI components
🛠 Built on top of Radix UI and Tailwind CSS
⚡ Easy to customize and extend

### 💬 Real-time Communication with Socket.io

📡 Bi-directional event-based communication
🔥 Low-latency updates for chat, notifications, and more
🌎 Works across different devices seamlessly

### 🔍 Routing with React Router

🛤️ Dynamic and declarative routing for React
🗺️ Nested routes for better structure
🔄 Seamless navigation without full page reloads

### ✅ ESLint with Auto Import Sorting

📏 Enforces clean and consistent code
🛠 Auto-fixes common issues
🔄 Automatically sorts and optimizes imports

### ✨ `Rich Text Editing with Quill.js

📝 Fully customizable WYSIWYG editor
✍️ Supports images, videos, and complex formatting
🎨 Themeable and extendable

### 🔐 Verification Input with react-verification-input

🔢 Elegant input field for OTP verification
🎯 Auto-focus and smooth user experience
🔒 Secure and customizable

### 📦 AWS S3 for Image Uploading

🌍 Cloud-based secure image storage
🚀 Scalable and high-performance uploads
🖼️ Supports image preview and optimization

---

## 📂 Project Structure

```
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Application pages
│   ├── hooks/         # Custom React hooks
│   ├── context/       # Global state management
│   ├── assets/        # Static assets
│   ├── styles/        # Global styles
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Entry point
│
├── public/            # Static public assets
├── .eslintrc.js       # ESLint configuration
├── tailwind.config.js # Tailwind configuration
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

---


## 🚀 Deployment

To deploy the project, use services like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS S3](https://aws.amazon.com/s3/)

---



## 📜 Scripts

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Starts the development server using Vite. |
| `npm run build`   | Builds the project for production.        |
| `npm run lint`    | Runs ESLint to check for linting issues.  |
| `npm run preview` | Previews the production build locally.    |

---



## 🔧 DevDependencies

| Package                     | Description                                               |
| --------------------------- | --------------------------------------------------------- |
| `@vitejs/plugin-react`      | Official Vite plugin for React with Fast Refresh support. |
| `eslint`                    | A pluggable linting tool for JavaScript and JSX.          |
| `eslint-plugin-react`       | ESLint plugin to enforce React best practices.            |
| `eslint-plugin-react-hooks` | Ensures correct usage of React hooks.                     |
| `postcss`                   | Tool for transforming CSS with JavaScript plugins.        |
| `tailwindcss`               | Utility-first CSS framework for building modern UIs.      |
| `vite`                      | A fast, modern build tool for frontend applications.      |

---

# 📦 Project Dependencies

This project utilizes various libraries to enhance functionality, styling, and performance. Below is a categorized list of dependencies along with their features.

---

## ⚙️ Core Libraries 

| 📌 Package | ✨ Feature | 🔗 Documentation |
|------------|------------|-----------------|
| [React](https://react.dev/) | 🏗️ UI Rendering & Component-Based Architecture | [Docs](https://react.dev/) |
| [React DOM](https://react.dev/) | 🌐 DOM Rendering for React | [Docs](https://react.dev/) |
| [React Router DOM](https://reactrouter.com/) | 🚏 Client-side Routing | [Docs](https://reactrouter.com/) |

---

## 🎨 UI & Styling

| 📌 Package | ✨ Feature | 🔗 Documentation |
|------------|------------|-----------------|
| [Tailwind CSS Animate](https://github.com/joe-bell/tailwindcss-animate) | 🎞️ Smooth Animations for TailwindCSS | [Docs](https://github.com/joe-bell/tailwindcss-animate) |
| [Tailwind Merge](https://github.com/dcastil/tailwind-merge) | 🎨 Smart Class Merging | [Docs](https://github.com/dcastil/tailwind-merge) |
| [Lucide React](https://lucide.dev/) | 🔥 Customizable Icons | [Docs](https://lucide.dev/) |
| [React Icons](https://react-icons.github.io/react-icons/) | 🎭 Popular Icons Library | [Docs](https://react-icons.github.io/react-icons/) |

---

## 🎛️ UI Components (Radix UI)

| 📌 Package | ✨ Feature | 🔗 Documentation |
|------------|------------|-----------------|
| [Radix Avatar](https://www.radix-ui.com/primitives/docs/components/avatar) | 🖼️ User Profile Avatar | [Docs](https://www.radix-ui.com/primitives/docs/components/avatar) |
| [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) | 💬 Accessible Modals | [Docs](https://www.radix-ui.com/primitives/docs/components/dialog) |
| [Radix Dropdown Menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu) | 🔽 Custom Dropdowns | [Docs](https://www.radix-ui.com/primitives/docs/components/dropdown-menu) |
| [Radix Separator](https://www.radix-ui.com/primitives/docs/components/separator) | 📏 Visual Dividers | [Docs](https://www.radix-ui.com/primitives/docs/components/separator) |
| [Radix Slot](https://www.radix-ui.com/primitives/docs/components/slot) | 🔌 Flexible Component Composition | [Docs](https://www.radix-ui.com/primitives/docs/components/slot) |
| [Radix Toast](https://www.radix-ui.com/primitives/docs/components/toast) | 🔔 Custom Toast Notifications | [Docs](https://www.radix-ui.com/primitives/docs/components/toast) |
| [Radix Tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip) | 🏷️ Interactive Tooltips | [Docs](https://www.radix-ui.com/primitives/docs/components/tooltip) |

---

## ⚡ State Management & Data Fetching

| 📌 Package | ✨ Feature | 🔗 Documentation |
|------------|------------|-----------------|
| [TanStack React Query](https://tanstack.com/query/latest) | 🔄 Advanced Data Fetching & Caching | [Docs](https://tanstack.com/query/latest) |
| [Axios](https://axios-http.com/) | 🌍 HTTP Requests Handling | [Docs](https://axios-http.com/) |

---

## 📝 Text & Editing

| 📌 Package | ✨ Feature | 🔗 Documentation |
|------------|------------|-----------------|
| [Quill](https://quilljs.com/) | ✍️ Rich Text Editor | [Docs](https://quilljs.com/) |
| [React Verification Input](https://github.com/smastrom/react-verification-input) | 🔢 OTP Input Handling | [Docs](https://github.com/smastrom/react-verification-input) |

---

## 📡 Real-time & WebSockets

| 📌 Package | ✨ Feature | 🔗 Documentation |
|------------|------------|-----------------|
| [Socket.io Client](https://socket.io/) | ⚡ Real-time WebSocket Communication | [Docs](https://socket.io/) |

---

## 🛠️ Utility & Helpers

| 📌 Package | ✨ Feature | 🔗 Documentation |
|------------|------------|-----------------|
| [Class Variance Authority](https://github.com/joe-bell/cva) | 🎭 ClassName Variants Management | [Docs](https://github.com/joe-bell/cva) |
| [clsx](https://github.com/lukeed/clsx) | 🏷️ Conditional Class Joining | [Docs](https://github.com/lukeed/clsx) |
| [ESLint Plugin Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort) | 🧹 Auto-sort Imports | [Docs](https://github.com/lydell/eslint-plugin-simple-import-sort) |
| [React Resizable Panels](https://github.com/bvaughn/react-resizable-panels) | 📏 Adjustable Panel Layouts | [Docs](https://github.com/bvaughn/react-resizable-panels) |

---





# 🌟 Setup Guides

### 📌 Install Dependencies

```sh
npm install
```

### 🎨 Setup ShadCN with Vite

Follow the official documentation: [ShadCN UI](https://ui.shadcn.com/docs/installation/vite)

### 🔍 Sorting Imports Automatically

Install `eslint-plugin-simple-import-sort` for clean and organized imports:

```sh
npm i eslint-plugin-simple-import-sort
```

### 🔄 React Router Setup

Install `react-router-dom` for client-side navigation:

```sh
npm i react-router-dom
```

### 🖼️ Rich Text Editor (Quill)

Quill is an open-source WYSIWYG editor with an expressive API:
[Learn More](https://quilljs.com/)

```sh
npm i quill
```

### 📩 Real-Time Messaging with Socket.io

Install `socket.io-client` for WebSocket-based communication:

```sh
npm i socket.io-client
```

### 🛠 AWS S3 for Image Uploads

Configure AWS S3 for secure image storage.

---

## 🌍 Additional Resources

- 📚 **Atomic Design**: [Read more](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97)
- 🏗 **Vite Plugins**: Explore the [official plugins](https://github.com/vitejs/vite-plugin-react)
- 🎨 **Tailwind CSS Docs**: [Visit](https://tailwindcss.com/docs/)

---


## 📝 License

This project is open-source and available under the [MIT License](LICENSE).


---

## 📜 Notes

- All dependencies are installed using `npm install` or `yarn add`.
- Make sure to check the respective documentation for deeper insights into usage.
- Keep dependencies up-to-date for better performance and security.

🚀 Happy Coding! 🎉