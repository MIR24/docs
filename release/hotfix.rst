***********************************
Список хотфиксов
***********************************

.. contents:: Содержание
   :depth: 2

`MIRSCR-1098 <https://mir24tv.atlassian.net/browse/MIRSCR-1098>`_
------------------------------------------------------------------------------
Упрощен процесс сборки проекта для FS с учетом использования deployer.

Из ``frontend-server/gulpfile.js`` убраны лишние манипуляции при деплое, производящие только сборку без переключения версии.
Процесс деплоя упрощен в ``mir24-deploy/deploy.php`` с учетом изменений ``gulpfile.js``.
Добавлена build команда в ``package.json`` для сборки production версии:

.. code-block:: json
   :emphasize-lines: 3

   {
   "gulp": "gulp",
   "build": "gulp --production",
   "dev": "gulp watch"
   }

`MIRSCR-1104 <https://mir24tv.atlassian.net/browse/MIRSCR-1104>`_
------------------------------------------------------------------------------
Исправлена проблема со счетчиком mail.ru.
Добавлен спот в футер мобильной версии.

`MIRSCR-1106 <https://mir24tv.atlassian.net/browse/MIRSCR-1106>`_
------------------------------------------------------------------------------
Структурные элементы сайта. Футер. В линии "Мы на связи" сайта изменена телеграм-ссылка с https://t.me/mir24tv на https://t.me/nachalos



История. MIRSCR-908_
------------------------------------------
RSS. Фид wifi.rss. Передача фотографий источника "ТАСС" исключена из рассылки в wifi.rss_

В список исключений из rss-фида wifi.rss_ добавлены изображения которые в поле "Копирайт" содержат источники ТАСС:

.. code-block:: js
   :linenos:

   {
     "id":41,
     "link": "http://www.itar-tass.com", //Ссылка
     "type": "photo", //Тип источника = Для фото
     "origin": "ТАСС", //Заголовок
     "priority": 29109,
   },
   {
     "id":2,
     "link": "http://tass.ru/", //Ссылка
     "type": "text", //Тип источника = Текст
     "origin": "ТАСС", //Заголовок
     "priority": 1300,
   }

Из рассылки исключены изображения "Копирайт" которых содержит данные ``id``. Исключения определены в ``.env.example`` по ``id`` копирайтов:

.. code-block:: js

   COPYRIGHTS_EXCLUDE=2,41



Баг. MIRSCR-1146_
------------------------------------------
Yandex Turbo. RSS yandex_ Исправлена ошибка отображения видео/фото в турбо-страницах.

Исправлена ошибка, при которой видео/фото из оригинала публикации не отображалось в турбо странице. Публикуемый медиа-контент в турбо странице, расположенный внутри ``<figure>`` перенесен выше тега ``<header>``.

На примере турбо-страницы в фиде яндекса_

.. code-block:: xml
   :linenos:
   :emphasize-lines: 1-5

   <figure>
     <video> ...
     <img> ...
     <figcaption> ...
   <figure>
   <header>
    <h1>

.. _яндекса: yandex_
.. _yandex: https://mir24.tv/export/yandex.rss


Баг. MIRSCR-1196_
-------------------------------------------
Сайт. Мобильная версия. Счетчик LiveInternet_.

Исправлено отображение счетчика счётчика посещаемости в футоре ``mobile/footer.blade.php``

Счетчик:

.. code-block:: html

   <a href="http://www.liveinternet.ru/click" target=_blank><img src="//counter.yadro.ru/hit?t44.6;r" border='0' width='31' height='31'>
   </a>

|

Баг. MIRSCR-1202_
-------------------------------------------
RSS. Фид wifi.rss. Из рассылки удалена информация об авторе новости.

Из рассылки удален элемент ``<author></author>``

.. code-block:: xml
   :linenos:
   :emphasize-lines: 6

   <item>
      <title>Заголовок материала</title>
      <description>Краткое описание материала</description>
      <link>Ссылка на материал в источнике</link>
      <pubDate>Wed, 05 Jun 2019 12:50:00 +0300</pubDate>
      <author>author@bestmailever.ru</author>
      <fullText>


|

..	_MIRSCR-1202: https://mir24tv.atlassian.net/browse/MIRSCR-1202
..  _LiveInternet: https://www.liveinternet.ru/
..	_MIRSCR-1196: https://mir24tv.atlassian.net/browse/MIRSCR-1196
..	_MIRSCR-1172: https://mir24tv.atlassian.net/browse/MIRSCR-1172
..	_MIRSCR-1146: https://mir24tv.atlassian.net/browse/MIRSCR-1146
..  _wifi.rss: https://mir24.tv/export/wifi.rss
..	_MIRSCR-908: https://mir24tv.atlassian.net/browse/MIRSCR-908
..	_MIRSCR-1130: https://mir24tv.atlassian.net/browse/MIRSCR-1130
..	_MIRSCR-1131: https://mir24tv.atlassian.net/browse/MIRSCR-1131
..	_MIRSCR-1020: https://mir24tv.atlassian.net/browse/MIRSCR-1020
