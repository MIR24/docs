*********************
Шаблоны
*********************

raw-html
=============

directive
------------
|rawhtml|

.. |rawhtml| raw:: html

    <a href="../_sources/devnote/rst.rst.txt" rel="nofollow"> View page source</a>

style
--------

.. raw:: html

    <style media="screen">
      .rst-content img {
        box-shadow: #C3BBBB 3.5px 4px 4.4px 0.5px;
    }</style>

tables
===========

.. csv-table:: Response
   :header: "Response Data", type
   :widths: 20, 30

   "ID записи", "(uint8,autoincrement)"
   "entity_id", "( = entity_id news table)"
   "url", "(нужно для быстрого поиска по url)"
   "from_datetime", "(timestamp)"
   "unique_views", "(uint8)"
   "total_views", "(uint8)"
   "complete", "(true,false)"

images
========

    * |sucss| Валидация успешна, ID-видео является корректным.
    * |fail| Валидация прошла неудачно, указанное значение в поле не является корректным, нет видео с данным ID на YouTube.


.. |sucss| image:: /images/youtube-sucss.jpg
.. |fail| image:: /images/youtube-fail.jpg
