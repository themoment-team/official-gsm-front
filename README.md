# official-gsm-front

광주소프트웨어마이스터고등학교 공식 홈페이지입니다.

## Commands

> root `package.json` scripts에 `--filter` command를 포함하여 작성해두었습니다.

```bash
$ git clone https://github.com/themoment-team/official-gsm-front.git
$ cd official-gsm-front
$ pnpm install

# command of a specific package
$ pnpm <package-name> <command>

# example
$ pnpm client dev
```

## Directory structure

```bash
...
│── apps
│   └── client
│   └── admin
│   └── storybook
│
│── packages
│   └── api
│   └── common
│   └── eslint-config-custom
│   └── tsconfig
│   └── types
│   └── ui
...
```

## Skill set

```md
- application
  Next.js - App Router

- core library
  Storybook
  Typescript
  emotion
  @tanstack/react-query
  axios
```
