*******************
Hidden notes
*******************

 .. note::
	Скрытая страница для заметок и шаблонов по ReSt синтаксису.

Шаблоны
==========================
.. code-block:: rst

   Релиз 0.00 (ST-979_) от 00.00.2019

   Баг. MIRSCR-0000_
   ----------------------
   text

   .. |img| image:: /images/youtube-sucss.jpg
   ..	_MIRSCR-0000: https://mir24tv.atlassian.net/browse/MIRSCR-0000





:menuselection:`task --> update_publication`

:menuselection:`menu item --> submenu item`

Ссылки
==================

`api <https://docs.mir24.tv/api/v2/?format=api>`_

note_

MIRSCR-0000_

.. _note: ./devnote/rst.html
..	_MIRSCR-0000: https://mir24tv.atlassian.net/browse/MIRSCR-0000

Замена "replace"
====================

|{project}|-|{tnum}|
--------------------

.. |{project}| replace:: MIRSCR

.. |{tnum}| replace:: 839

.. code-block:: text

   |{project}|-|{tnum}|
   --------------------
   .. |{project}| replace:: MIRSCR
   .. |{tnum}| replace:: 839

Секции
================

.. code-block:: text

   *******************
   Page 1
   *******************
    Section 1



    Subsection 2
    ------------------
    Subsubsection 3
    ^^^^^^^^^^^^^^^^^^^^^^
    Paragraph 4
    """"""""""""""""""
    Paragraph 5
    ~~~~~~~~~~~~~~~~~~


.. danger::

   For hard fun and customing
   ``publication_``
   ``.. _publication: ./../../index.html``

..
  map_
  index_
  basic_
  srrc_
  conf_

  .. _map: ./../mirmap.html
  .. _index: ./../../index.html
  .. _conf: ./../../conf.py
  .. _build: ./../../../bash-build/build-rtd-docs.bat
  .. _basic: _static\basic.css
  .. _srrc: _devnote\rst.rst.txt


.. |rawhtml| raw:: html

   <script>
   console.console.log("hi")
    </script>
    <a href="./../../index.html">root/index.html</a>
    <br>

.. code-block:: text

  Regex
   MIRSCR-.*$
