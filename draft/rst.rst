*******************
Hidden notes
*******************

.. note::
    Скрытая страница для заметок и шаблонов по ReSt синтаксису.


.. contents:: содержание
   :depth: 2

Шаблоны
==========================

:menuselection:`Файл --> &Открыть`
:guilabel:`&Открыть`

#. numbered
#. numbered
#. numbered

* Первый уровень

    * Второй уровень

        * Третий уровень


Админка
    Административный интерфейс сайта «МИР24», предназначен для создания и управления контентом, публикациями и материалом отображаемом на сайте «МИР24». Административный интерфейс расположен по адресу: https://editors.mir24.tv

:Пагинация: порядковая нумерация страниц, используемая в интерфейсе сайта или админке для постраничного вывода информации.

::

   code-block code-block code-block

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
=============

|rawhtml|

.. |rawhtml| raw:: html

   <a href="../_sources/draft/rst.rst.txt" rel="nofollow"> View page source</a>


.. raw:: html

    <style media="screen">
        .figure img {
          box-shadow: #C3BBBB 3.5px 4px 4.4px 0.5px;
          margin-bottom: 7px;}
    </style>

    <script type="text/javascript">
    var s={
      n:'\n',t:'\t',l:'---'.repeat(6),htxt:'Hello! This is "raw: html" directive',
      hello:function(){
          let line = this.l.repeat(6)+this.n
          let text = this.l.repeat(2)+this.htxt+this.l.repeat(2)+this.n
          return line+text+line
      }},
    get={
      img:window.document.getElementsByTagName('img'),
      doc:this.document
    },
    Theme={
      URL_ROOT:this.DOCUMENTATION_OPTIONS.URL_ROOT,
      getCurrentURL:this.Documentation.getCurrentURL,
      Documentation:Documentation,
      SphinxRtd:this.SphinxRtdTheme,
      Location:document.location
    };
    console.log(s.hello(),'get',get,s.n+'Theme',Theme);
    console.log([]);
    </script>


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
   | |menu|                | Campground            |
   +-----------------------+-----------------------+
   | |menu|                | Lake                  |
   +-----------------------+-----------------------+

.. figure:: /images/admin/edit_form/form0.png
   :width: 40 %

.. image:: https://cheat.readthedocs.io/en/latest/_images/sphinx-cheatsheet-front-full.png
   :width: 60 %

.. image:: https://cheat.readthedocs.io/en/latest/_images/sphinx-cheatsheet-back-full.png
   :width: 60 %

.. |menu| image:: /images/admin/menubtn.png


.. code-block:: text

   Regex
   MIRSCR-.*$
