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




Ссылки
==================

`api <https://docs.mir24.tv/api/v2/?format=api>`_

MIRSCR-0000_
note_

.. _note: /
..	_MIRSCR-0000: https://mir24tv.atlassian.net/browse/MIRSCR-0000



Замена "replace"
====================

|{project}|-|{tnum}|
|rawhtml|

.. |{project}| replace:: MIRSCR
.. |{tnum}| replace:: 839
.. |rawhtml| raw:: html

   <script>
   console.console.log("hi")
    </script>
    <a href="_sources/devnote/rst.rst.txt">View page source</a>
    <br>

.. code-block:: ReSt

   |{project}|-|{tnum}|
   --------------------
   |rawhtml|
   .. |{project}| replace:: MIRSCR
   .. |{tnum}| replace:: 839
   .. |rawhtml| raw:: html
      <script>console.console.log("hi")
       </script>
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


.. code-block:: text

  Regex
   MIRSCR-.*$
