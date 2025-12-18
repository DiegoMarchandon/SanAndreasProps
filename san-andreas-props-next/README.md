This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

san-andreas-props-next/               # Proyecto Next.js 15 (con React dentro)             
├── app/                # App Router
│   ├── globals.css     # CSS global
│   ├── layout.js       # Layout global (envuelve todas las páginas)
│   ├── page.js         # página principal (/)
│   ├── profile/        # perfiles de usuarios
│   └── ...
├── components/         # componentes reutilizables (botones, forms, cards, etc.)
│       ├── layout/     # componentes relacionados con estructura y diseño gral (header, container, footer, etc.)
│       ├── ui/         # componentes relacionados con la interfaz de usuario (Button, input, Modal, Select, etc.)
│       ├── forms/      # componentes relacionados con formularios (LoginForm,RegisterForm,ContactForm, etc.)
│       └── ...
├── context/            # contextos creados para compartir datos entre componentes 
├── hooks/              # funciones personalizadas de React (useState, useEffect, etc.)
├── lib/                # funciones helpers (fetch API, validaciones)
├── styles/             # Tailwind o CSS modules
├── public/             # assets públicos (imágenes, íconos, favicon, etc.)
├── utils/             # funciones que manejan lógica relacionada a los componentes.
└── ...