*********************
Шаблоны
*********************

raw-html
=============

directive
------------
|rawhtml|

.. |rawhtml| raw:: html

    <a href="../_sources/draft/rst.rst.txt" rel="nofollow"> View page source</a>

style
--------

.. raw:: html

    <style media="screen">
        .figure img {
          box-shadow: #C3BBBB 3.5px 4px 4.4px 0.5px;
          margin-bottom: 7px;}
    </style>


links
================

:doc:`Any text you want <image_edit/index>`

:ref:`Статистика просмотров новостей в админке <google-analytics>`

`api <https://docs.mir24.tv/api/v2/?format=api>`_

MIRSCR-0000_

..	_MIRSCR-0000: https://mir24tv.atlassian.net/browse/MIRSCR-0000

lists
================

#. numbered
#. numbered
#. numbered

* Первый уровень

    * Второй уровень

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

::

   :align: top middle bottom left center right
   :width: 30 %
   :scale:

.. image:: https://cheat.readthedocs.io/en/latest/_images/sphinx-cheatsheet-front-full.png
   :width: 60 %

.. image:: https://cheat.readthedocs.io/en/latest/_images/sphinx-cheatsheet-back-full.png
   :width: 60 %

С подписью
-------------
.. figure:: /images/admin/cdn-on-site.jpg
   :scale: 50 %
   :alt: map to buried treasure

   This is the caption of the figure (a simple paragraph).

Подстановка
----------------
    * |sucss| Валидация успешна, ID-видео является корректным.
    * |fail| Валидация прошла неудачно, указанное значение в поле не является корректным, нет видео с данным ID на YouTube.


.. |sucss| image:: /images/youtube-sucss.jpg
.. |fail| image:: /images/youtube-fail.jpg
