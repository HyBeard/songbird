[Link](https://songbeard-react.netlify.app/)

## Структура приложения

Игровое поле викторины состоит из четырёх блоков:

1. header
2. блок с текущим вопросом
3. блок с вариантами ответов
4. блок с описанием птицы

## Описание основных блоков

- header содержит название или логотип приложения, счёт игры, список вопросов.
- блок с вопросом содержит аудиоплеер с записью голоса птицы и заглушки на месте названия и изображения птицы. Когда игрок выбирает правильный ответ, в блоке с вопросом отображаются название и изображение птицы, голос которой звучвл.
- блок с вариантами ответов содержит список с названиями шести разных птиц.
- блок с описанием птицы содержит данные о ней: изображение, русское и латинское название, аудиозапись голоса, короткая информация.

## Механизм игры

- птица в блоке с вопросом рандомно выбирается из списка с вариантами ответов
- при клике по одному из пунктов списка с вариантами ответов, в блоке с описанием птицы выводятся информация о ней
- если игрок выбрал правильный ответ, в блоке с вопросом выводится название и изображение птицы
- на старте игры score: 0. Если игрок дал правильный ответ с первой попытки, его счёт увеличивается на 5 баллов, каждая следующая попытка даёт на один балл меньше, если правильный ответ дан только с последней, шестой попытки, игрок получает за него 0 баллов
- для правильных и неправильных ответов игрока используется звуковая и цветовая индикация
- когда игрок дал правильный ответ, активируется кнопка "Дальше" и он получает возможность перейти к следующему вопросу
- после последнего вопроса выводится счёт игры: "Вы набрали **_ баллов из _** возможных.
- если набрано не максимально возможное количество баллов, игроку предлагается пройти викторину ещё раз
- если набрано максимально возможное количество баллов, выводится поздравление и уведомление об окончании игры.

## Технические требования

- работа приложения проверяется в браузере Google Chrome последней версии
- использование jQuery не допускается
- можно использовать Bootstrap и другие CSS фреймворки
- необходимо использовать Angular/React/Vue
- можно использовать CSS preprocessors
