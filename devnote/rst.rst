*******************
Hidden notes
*******************

.. note::
    Скрытая страница для заметок и шаблонов по ReSt синтаксису.


.. contents:: содержание
   :depth: 2

Шаблоны
==========================


.. raw:: html

    <script type="text/javascript">
    let shadow = ' box-shadow: black 2px 1px 8px 0px;';
    var i=window.document.getElementsByTagName('img');
    var img = window.document.images;
    console.log(i[0],shadow,img)
    console.log(img)
    </script>
    <script type="text/javascript">
    for (keys in this.i) {
      //console.log(i)//.style.cssText)
    };
    console.log(this)
    </script>

#. list
#. list

    #. list

#. list

* b

* Первый уровень

    * Второй уровень

        * Третий уровень

Админка
    Административный интерфейс сайта «МИР24», предназначен для создания и управления контентом, публикациями и материалом отображаемом на сайте «МИР24». Административный интерфейс расположен по адресу: https://editors.mir24.tv

:Пагинация: порядковая нумерация страниц, используемая в интерфейсе сайта или админке для постраничного вывода информации.

.. code-block:: rst
   :linenos:

   Релиз 0.00 (ST-979_) от 00.00.2019

   .. contents:: Содержание
      :depth: 2

   Баг. MIRSCR-0000_
   ----------------------
   text

   .. |img| image:: /images/youtube-sucss.jpg
   ..	_MIRSCR-0000: https://mir24tv.atlassian.net/browse/MIRSCR-0000

Ссылки
==================

:doc:`Any text you want <image_edit/index>`

`api <https://docs.mir24.tv/api/v2/?format=api>`_

MIRSCR-0000_

..	_MIRSCR-0000: https://mir24tv.atlassian.net/browse/MIRSCR-0000


Таблицы
====================

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




Замена "replace"
====================

|{project}|-|{tnum}|


.. |{project}| replace:: MIRSCR
.. |{tnum}| replace:: 839


.. code-block:: ReSt

   |{project}|-|{tnum}|
   --------------------

   .. |{project}| replace:: MIRSCR
   .. |{tnum}| replace:: 839


raw:: html:
------------

|rawhtml|

.. |rawhtml| raw:: html

    <a href="../_sources/devnote/rst.rst.txt" rel="nofollow"> View page source</a>

::

   .. |rawhtml| raw:: html

       <a href="_sources/devnote/rst.rst.txt">View page source</a>
       <br>

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


Изображения
================

::

   :align: top middle bottom left center right
   :width: 30 %
   :scale:


.. image:: /images/admin/cdn-on-site.jpg
   :width: 40 %

С подписью

.. figure:: /images/admin/cdn-on-site.jpg
   :scale: 50 %
   :alt: map to buried treasure

   This is the caption of the figure (a simple paragraph).

   The legend consists of all elements after the caption.  In this
   case, the legend consists of this paragraph and the following
   table:

   +-----------------------+-----------------------+
   | Symbol                | Meaning               |
   +=======================+=======================+
   | .. image:: tent.png   | Campground            |
   +-----------------------+-----------------------+
   | .. image:: waves.png  | Lake                  |
   +-----------------------+-----------------------+
   | .. image:: peak.png   | Mountain              |
   +-----------------------+-----------------------+

.. image:: https://cheat.readthedocs.io/en/latest/_images/sphinx-cheatsheet-front-full.png
   :width: 60 %


src_

.. _basic: _static\basic.css
.. _src: /_sources/devnote/rst.rst.txt


.. code-block:: text

  Regex
   MIRSCR-.*$
