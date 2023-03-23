## 프로적트 설치

```js
yarn create next-app --typescript
```

## 프로젝트 세팅

1. Eslint 설치

- eslint가 typescript 코드를 분석하고 javascript 코드와 동일한 linting 규칙을 적용하도록 합니다.

```js
@typescript-eslint/eslint-plugin
```

- 위의 패키지가 의존하고 있는 패키지를 설치합니다.

```js
@typescript-eslint/parser@^5.0.0
```

2. Prettier 설치

- prettier를 설치합니다.
- prettier와 eslint rule의 충돌을 예방하기 위해 설치합니다.

```js
yarn add --dev prettier eslint-config-prettier
```

3. Husky 설치

- 각 커밋에서 eslint, prettier를 실행하여 커밋한 모든 파일에 오류가 없고 형식이 올바르게 지정되었는지 확인합니다.

```js
yarn add --dev husky
```

4. Lint-staged 설치

- staged 상태인 파일만 husky를 실행하기 위함 입니다.
- pre-commit시 lint-staged가 실행되도록 합니다.

```js
yarn add --dev lint-staged
```

5. Commitlint 설치

- 커밋 메세지 컨벤션을 유지하기 위해 사용합니다.
- 커밋 명령어를 사용할 때 commitlint가 실행되도록 합니다.

```js
yarn add --dev @commitlint/config-conventional @commitlint/cli
```
