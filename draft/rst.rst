*******************
Hidden notes
*******************

Also with ``sphinx.ext.autodoc``, which I use in the demo, I can link to :class:`test_py_module.test.Foo`.
It will link you right to my code documentation for it.

The default role for interpreted text is `Title Reference`.  Here are some explicit interpreted text roles:
a PEP reference (:PEP:`287`); an RFC reference (:RFC:`2822`); a :sub:`subscript`; a :sup:`superscript`;
and explicit roles for :emphasis:`standard` :strong:`inline` :literal:`markup`.

GUI labels are a useful way to indicate that :guilabel:`Some action` is to be taken by the user.
The GUI label should not run over ``line-height`` so as not to :guilabel:`interfere` with text from adjacent lines.

Key-bindings indicate that the read is to press a button on the keyboard or mouse,
for example :kbd:`MMB` and :kbd:`Shift-MMB`. Another useful markup to indicate a user action
is to use ``menuselection`` this can be used to show short and long menus in software.
For example, and ``menuselection`` can be seen here that breaks is too long to fit on this line.
:menuselection:`My --> Software --> Some menu --> Some sub menu 1 --> sub menu 2`.


Замена "replace"
====================

|{project}|-|{tnum}|


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
    console.log([document]);
    </script>


Code with Sidebar
-----------------

.. sidebar:: A code example

    With a sidebar on the right.

.. literalinclude:: test_py_module/test.py
    :language: python
    :caption: Literal includes can also have captions.
    :linenos:
    :lines: 1-40

References
==========

Footnotes
---------

.. [1] A footnote contains body elements, consistently indented by at
   least 3 spaces.

   This is the footnote's second paragraph.

.. [#label] Footnotes may be numbered, either manually (as in [1]_) or
   automatically using a "#"-prefixed label.  This footnote has a
   label so it can be referred to from multiple places, both as a
   footnote reference ([#label]_) and as a hyperlink reference
   (label_).

.. [#] This footnote is numbered automatically and anonymously using a
   label of "#" only.

.. [*] Footnotes may also use symbols, specified with a "*" label.
   Here's a reference to the next footnote: [*]_.

.. [*] This footnote shows the next symbol in the sequence.

.. [4] Here's an unreferenced footnote, with a reference to a
   nonexistent footnote: [5]_.

Citations
---------

.. [11] This is the citation I made, let's make this extremely long so that we can tell that it doesn't follow the normal responsive table stuff.

.. [12] This citation has some ``code blocks`` in it, maybe some **bold** and
       *italics* too. Heck, lets put a link to a meta citation [13]_ too.

.. [13] This citation will have two backlinks.


Here's a reference to the above, [12]_, and a [nonexistent]_ citation.

Here is another type of citation: `citation`
