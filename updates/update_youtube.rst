**************************
Врезка видео YouTube
**************************

Реализована автоматическая врезка встраиваемого видео из YouTube. Видео встраивается по ``ID-видео`` YouTube в соответствующее поле, имеющее автоматическую валидацию.

Описание функционала
-------------------------
| В поле "ID видео на YouTube" вставляется ссылка вида: ``HRzi8-xBJ9Q``.
| Данная ссылка является ``ID-видео`` в YouTube.
| :code:`youtube.com/watch?v={ID-видео}`
| Например, находясь на странице видео, ссылка в адресной строке:
| :code:`youtube.com/watch?v=HRzi8-xBJ9Q`
| ``{ID-видео}`` в данном случае: :code:`HRzi8-xBJ9Q` расположено после: :code:`/watch?v=`.


 * Поле расположено на формах редактирования публикаций:

        * Новости
        * Видео
        * Фотоленты
        * Статьи
        * Интерактив
        * Лица Мира
        * Пресс-релизы

 * После указания ID-видео YouTube происходит валидация ссылки, в виде пиктограмм:

    * |sucss| Валидация успешна, ID-видео является корректным.
    * |fail| Валидация прошла неудачно, указанное значение в поле не является корректным, нет видео с данным ID на YouTube.


.. |sucss| image:: /images/youtube-sucss.jpg
.. |fail| image:: /images/youtube-fail.jpg


**************************
Видео плеер CDNvideo
**************************

Описание
-------------------------
Блок с добавлением видео в плеер CDNvideo расположен в самом низу формы редактирования публикаций:

 * Новости
 * Видео
 * Статьи
 * Интерактив
 * Пресс-релизы

.. image:: /images/admin/youtube.jpg

Описание полей:

 * Код для вставки - Генерируется при указании "ID видео на YouTube" и Загрузке файла с видео;
 * Удалить видео через 24 ч. - Чекбокс для указания признака удаления видео;
 * ID видео на YouTube - поле для указания ID-видео YouTube, с валидацией
 * Время отмены показа YouTube - дата и время по наступлению которого youtube видео заменяется на загруженное локально
 * |upld| - Загрузить локальный файл с видео

При указании id видео youtube в поле "ID видео на YouTube", генерируется плеер ``CDNvideo`` с кодом вставки, показанный на примере ниже:

.. code-block:: html

   <iframe src="//playercdn.cdnvideo.ru/aloha/players/
   mirtv_player_vod1.html?source=%2F%2Fvideo.platformcraft.ru%2Fvod%2F5d63f2b4ef3db55ad5b8536b%2F
   playlist.m3u8" frameborder="0" width="100%" height="100%" scrolling="no"
   style="overflow:hidden;" allowfullscreen></iframe>

Видео добавится перед текстом публикации.

.. image:: /images/admin/cdn-on-site.jpg

.. |upld| image:: /images/admin/edit_form/uploadvideo.jpg

Загрузка видео
------------------

1
~~~~~~~~~~~~~~~~~

.. image:: /images/admin/edit_form/uploadvideo2.jpg

2
~~~~~~~~~~~~~~~~~
.. image:: /images/admin/edit_form/uploadvideo3.jpg

3
~~~~~~~~~~~~~~~~~
.. image:: /images/admin/edit_form/uploadvideo4.jpg

.. image:: /images/youtube-cd.jpg
