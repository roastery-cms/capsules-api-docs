# @roastery-capsules/api-docs

OpenAPI documentation plugin for the Roastery CMS ecosystem.

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

## Overview

**api-docs** provides a thin wrapper around [`@elysiajs/openapi`](https://github.com/elysiajs/elysia-openapi) to expose interactive OpenAPI (Scalar) documentation in Roastery CMS applications with minimal configuration.

## Technologies

| Tool | Purpose |
|------|---------|
| [@elysiajs/openapi](https://github.com/elysiajs/elysia-openapi) | OpenAPI spec generation and Scalar UI |
| [Elysia](https://elysiajs.com) | HTTP framework (via `@roastery/barista`) |
| [tsup](https://tsup.egoist.dev) | Bundling to ESM + CJS with `.d.ts` generation |
| [Bun](https://bun.sh) | Runtime, test runner, and package manager |
| [Knip](https://knip.dev) | Unused exports and dependency detection |
| [Husky](https://typicode.github.io/husky) + [commitlint](https://commitlint.js.org) | Git hooks and conventional commit enforcement |

## Installation

```bash
bun add @roastery-capsules/api-docs
```

**Peer dependencies** (install alongside):

```bash
bun add @roastery/barista tsup typescript
```

---

## Usage

```typescript
import { CaffeineApiDocs } from '@roastery-capsules/api-docs';

const app = CaffeineApiDocs(true, 'https://api.example.com', {
  info: {
    title: 'My API',
    version: '1.0.0',
    description: 'API description here.',
  },
  tags: [
    { name: 'Users', description: 'User management' },
  ],
});
```

The docs are served at `/docs` by default.

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `enabled` | `boolean` | Whether to expose the documentation endpoint |
| `url` | `string` | Base server URL shown in the Scalar UI |
| `args` | `Args` (optional) | OpenAPI metadata: `info`, `tags`, `externalDocs` |

### Disabling in production

```typescript
const app = CaffeineApiDocs(process.env.NODE_ENV !== 'production', process.env.API_URL!);
```

---

## Development

```bash
# Build for distribution
bun run build

# Check for unused exports and dependencies
bun run knip

# Full setup (build + bun link)
bun run setup
```

## License

MIT
