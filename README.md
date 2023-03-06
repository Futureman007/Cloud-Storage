# Cloud-Storage

## Стиль кода

### Код

- Использование глобальных переменных (API_URL, JWT_SECRET) **только .env**!
- Имена классов, методов, перечислений, публичных полей, публичных свойств, пространств имен: `PascalCase`
- Имена локальных переменных и параметров: `camelCase`
- Имена private, protected, internal и protected internal полей и свойств: `_camelCase`
- Имена интерфейсов начинаются с I, например IUser
- Использование только функциональных компонентов (кроме Error Boundary)
- Экспорт компонентов всегда по умолчанию

### Файлы

- Слово **API** всегда `UPPERCASE`
- Название компонентов, сервисов, redux слайсов, моделей, контроллеров, : `PascalCase`, например: Home.tsx, IFile.ts, UserAPI.ts, AuthController.ts
- Название основных папок: `camelCase`, например: home, components, services, store
- Название дополнительных файлов: `camelCase`, например: useHttp.ts, actions.ts, sizeFormat.ts
- Название CSS / SASS / SCSS файла должно совпадать с названием компонента, где подключается этот файл стилей: home > Home.tsx home.scss
- Название CSS / SASS / SCSS файлов: `camelCase`

### Организация

#### Frontend

Если стандартный компонент. Сначала идет импорт необходимых зависимостей, обязательно последний импорт должен быть файл стилей. Если есть возможно сделать деструктуризацию – делаем, например: import React, { FC, useState, useEffect } from ‘react’.
Далее идет экспорт функционального компонента, порядок переменных, функций:

1. Свои переменные: let logo = null
2. useState константы
3. Константы для работы с API:
   a. RTK Query
   b. useSelector
   c. useDispatch
4. Стрелочные функции
5. Обычные функции
6. useEffect
7. IF
8. компоненты, которые возвращают tsx
9. основной render

#### Backend

- Порядок модификаторов следующий: `public protected internal private
new abstract virtual override sealed static readonly extern unsafe volatile
async`
- Объявления пространств имен `using` идут в самом начале, перед любыми пространствами имен
- Порядок членов класса:
  - Сгруппируйте участников класса в следующем порядке:
  -     Вложенные классы, перечисления, делегаты и события.
  -     Статические, константные и только для чтения поля.
  -     Поля и свойства.
  -     Конструкторы и финализаторы.
  -     Методы.
- Внутри каждой группы элементы должны располагаться в следующем порядке:
  - Public.
  - Internal.
  - Protected internal.
  - Protected.
  - Private.

### Формат

```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 80,
  "jsxSingleQuote": true,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "singleAttributePerLine": true
}
```
