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

История. MIRSCR-1130_
------------------------------------------
Сайт. Плеер ``playercdn``. Изменена генерация плеера, позволяя проигрывать ролики YouTube внутри плеера ``playercdn.cdnvideo.ru``.

Подготовлен новый динамический плеер, с помощью которого можно проигрывать ролики YouTube. Если есть ссылка на YouTube, то после публикации генерируется плеер по описанию ниже. *Время отмены показа YouTube одни сутки с момента публикации новости.*

Базовая ссылка: https://playercdn.cdnvideo.ru/aloha/players/mirtv_player_vod2.html.

Query string параметры те же, что у стандартного плеера ``mirtv_player_vod1.html``, плюс два новых:
| ``youtubechangedate`` - дата и время, по наступлению которых необходимо отображать стандартный плеер ``CDNvideo`` (например: ``youtubechangedate=2019-07-15T00:00:00Z``);
| ``youtubesource`` - id ролика в YouTube (например: ``youtubesource=rPf6y-csIKs``).

| Пример запроса данного динамического плеера:
| https://playercdn.cdnvideo.ru/aloha/players/mirtv_player_vod2.html?source=//video.platformcraft.ru/vod/5b71a3f90e47cf1673a1593c/playlist.m3u8&poster=https://imgtest.mir24.tv/uploaded/images/crops/2018/August/870x489_0x103_detail_crop_c8e44f83847eafc990f50dfdf25d6f9c65fd3af2c4e8f053f854a863fd854f5a.jpg&tag=//moevideo.biz/vast?ref=mir24.tv&impressionAfterPaid=1&youtubechangedate=2019-07-12T00:00:00Z&youtubesource=HRzi8-xBJ9Q






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
