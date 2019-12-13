*********************
Примеры
*********************

Шаблоны
==========

:term:`Админка`
:term:`Пагинация`
:term:`Прикрепление изображений`

:menuselection:`Файл --> &Открыть`
:guilabel:`&Открыть`
:guilabel:`&Меню` -- :guilabel:`&Служебные`

Админка
    Административный интерфейс сайта «МИР24», предназначен для создания и управления контентом, публикациями и материалом отображаемом на сайте «МИР24». Административный интерфейс расположен по адресу: https://editors.mir24.tv

:Пагинация: порядковая нумерация страниц, используемая в интерфейсе сайта или админке для постраничного вывода информации.

::

   code-block code-block code-block


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

images
========

.. image:: https://cheat.readthedocs.io/en/latest/_images/sphinx-cheatsheet-front-full.png
   :width: 60 %

.. image:: https://cheat.readthedocs.io/en/latest/_images/sphinx-cheatsheet-back-full.png
   :width: 60 %

* |fail| Валидация прошла неудачно, указанное значение в поле не является корректным, нет видео с данным ID на YouTube.

.. |fail| image:: /images/youtube-fail.jpg

С подписью
-------------
.. figure:: /images/admin/cdn-on-site.jpg
   :scale: 50 %
   :alt: map to buried treasure

   This is the caption of the figure (a simple paragraph).

.. code-block:: rst

  .. image::
     :align: top middle bottom left center right
     :width: 30 %
     :scale:

terms
============
:term:`term1`

  term 1 : classifier one : classifier two
      Definition 1.

code-blocks
============

.. code-block:: rst
   :linenos:

   Баг. MIRSCR-0000_
   ----------------------
   text

   .. |img| image:: /images/youtube-sucss.jpg
   ..	_MIRSCR-0000:: https://mir24tv.atlassian.net/browse/MIRSCR-0000

tables
===========

.. list-table:: Описание обязательных и опциональных элементов

    * - Элемент
      - Обязательный
      - Комментарии
    * - <?xml version="1.0" encoding="UTF-8"?>
      - да
      - Версия спецификации RSS. Ссылка в начале этого документа ведёт на описание этой спецификации

.. csv-table:: csv
   :header: "Response Data", type
   :widths: 30, 30

   "ID записи", "(uint8,autoincrement)"
   "entity_id", "( = entity_id news table)"

+----------------------------------------+-----------------------+
| Symbol                                 | Meaning               |
+========================================+=======================+
| .. image:: /images/admin/menubtn.png   | Campground            |
+----------------------------------------+-----------------------+

Контейнер container
====================
.. container:: page-screen

   |form|


.. |form| replace::
   |fig|
   |fig1|

.. |fig| image:: /images/admin/edit_form/form0.png
.. |fig1| image:: /images/admin/edit_form/form1.png


Секции
================

.. code-block:: rst

   *******************
   Page 1
   *******************
    Section 1
    ============

    Subsection 2
    ------------------
    Subsubsection 3
    ^^^^^^^^^^^^^^^^^^^^^^
    Paragraph 4
    """"""""""""""""""
    Paragraph 5
    ~~~~~~~~~~~~~~~~~~


raw-html
=============

ex1
------------
|rawhtml|

.. |rawhtml| raw:: html

    <a href="../_sources/draft/rst.rst.txt" rel="nofollow"> View page source</a>

ex2
--------

.. raw:: html

    <style media="screen">
        .figure img {
          box-shadow: #C3BBBB 3.5px 4px 4.4px 0.5px;
          margin-bottom: 7px;}
    </style>
