*******************
Hidden notes
*******************

 .. note::

	Скрытая страница для заметок и шаблонов по ReSt синтаксису.

Шаблоны
==========================
.. code-block:: text

   Релиз 0.21 (ST-979_) от 19.07.2019

   Баг. MIRSCR-0000_
   ----------------------
   |sucss|

   .. |sucss| image:: /images/youtube-sucss.jpg
   .. |fail| image:: /images/youtube-fail.jpg

   ..	_MIRSCR-0000: https://mir24tv.atlassian.net/browse/MIRSCR-0000

update_publication_

:menuselection:` task --> update_publication --> item`

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
    ==================
    Subsection 2
    ------------------
    Subsubsection 3
    ^^^^^^^^^^^^^^^^^^^^^^
    Paragraph 4
    """"""""""""""""""
    Paragraph 5
    ~~~~~~~~~~~~~~~~~~


.. danger::

   for fun ONLY!!
   ``publication_``
   ``.. _publication: ./../../index.html``

..
  map_
  uriup_
  basic_
  srrc_
  conf_

  .. _map: ./../mirmap.html
  .. _uriup: ./../../index.html
  .. _conf: ./../../conf.py
  .. _build: ./../../../bash-build/build-rtd-docs.bat
  .. _basic: _static\basic.css
  .. _srrc: _devnote\rst.rst.txt

.. code-block:: text

  Regex
   MIRSCR-.*$
