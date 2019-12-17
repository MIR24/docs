********************************************
Общий интерфейс оформления контента
********************************************

Описание особенностей работы с полями оформления текста публикуемого контента. Описанные руководства (как и поля) является общими для создания и редактирования публикаций во всех разделах категории "Контент":

 * Новости
 * Передачи
 * Видео
 * Фотоленты
 * Статьи
 * Интерактив
 * Лица Мира
 * Пресс-релизы

Работа с полем текст
======================

.. image:: /images/admin/edit_form/field_text.jpg
   :width: 125 %

.. figure:: /images/text-field-write0.jpg
   :width: 125 %

..  :scale: 110 %


.. code-block:: html

   <h2>Ввод текста</h2>

   <p>При написании текста статьи «от руки» – печатая и оформляя <em>текст&nbsp;с применением&nbsp;</ em>
   <b>различного&nbsp;<em>форматирования, используя </em></b>интерфейс&nbsp;
   <em>«редактора текста»  (<b>выделено красным сверху</b>),&nbsp;необходимый для показа на сайте – </em>
   <b><em>HTML-код</em>&nbsp;</ b><em>формируется автоматически.&nbsp;</em></p>

   <p>Введенные текст готов к отображению на сайте&nbsp;в том виде в котором он выглядит во время написания.</p>

   <h2>Отображение&nbsp;текста</h2>

   <blockquote>
   <p>WYSIWYG&nbsp;( [ˈwɪziwɪɡ], What You See Is What You Get – «что видишь, то и получишь» )
   – это свойство  прикладных программ, в которых содержание
   отображается в процессе его редактирования и выглядит оно максимально близко к конечному результату.&nbsp;
   </p></blockquote>

   <p>Введенный текст,&nbsp;при просмотре данной статьи,
   &nbsp;отображается точно так же, как и в редакторе.
   <em>Так же форматирование&nbsp;текста практически полностью совместимо с офисными программами типа
   </em>  <b><em>MS Word</em></b></p>

Результат:

.. image:: /images/text-field-result.jpg
   :width: 125 %

Использование форматирования
---------------------------------


Копирование/Вставка форматированного текста
----------------------------------------------

.. sidebar:: Sidebar Title

   .. code-block:: html

     <p style="padding: 1em; color: rgb(200,255,255); ... "></p>

   .. code-block:: html

     {<style>@media(max-width:500px){
      #some_id{
        width:100%;max-width:none;margin-left:0;
      }</style>}

   .. code-block:: html

      ...
      <p id="some_id"></p>
      <div id="some_id">
      ...


Использование CSS-стилей
---------------------------------

.. image:: /images/text-field-style0.jpg
   :width: 125 %

.. code-block:: html

   <p style="padding: 1em;font-size: 19px;text-shadow: 0.5px 0.5px 5.5px #3de881;
   background-color: #2d2b2b; color: rgb(200,255,255)">
   Добавление CSS стилей в текст позволяет использовать расширенное форматирование текста</p>


.. code-block:: html

   {<style>p {padding: 1em;font-size: 19px;text-shadow: 0.5px 0.5px 5.5px #3de881;background-color: #2d2b2b; color: rgb(200,255,255)}<style>}

.. image:: /images/text-field-style-result0.jpg
   :width: 125 %

Копирование/Вставка текста с CSS-стилями
-------------------------------------------

.. parsed-literal::

   {<style>@media(max-width:500px){#test_inner_banner{
   width:100%;max-width:none;margin-left:0;}}#test_inner_banner{
   float:left;max-width:320px;margin-right:15px;margin-bottom:20px;clear:both;margin-left:-10px;border-left:5pxsolid#014e7d;font-size:12px;background-color:#f2f2f2;}#test_inner_bannera{color:#014e7d;}#test_inner_bannerimg{width:100%!important;}#test_inner_banner:hoverimg{
   opacity:0.7;}.mm_test_header{text-align:center;font-weight:500;font-size:16px;padding:8px;font-weight:700;}.mm_test_title{padding:8px;font-size:16px;font-weight:700;text-align:center;text-decoration:none;}.mm_test_titleh4{color:#333;font-size:18px;font-weight:700;margin-bottom:20px}.mm_test_titlep{color:#333;margin-bottom:0}</style><div id="test_inner_banner" data-mir-incut-id="836"><div class="mm_test_header">Каким автомобилям нужна антикоррозийная обработка</div><div class="mm_test_content"><a href="https://mir24.tv/articles/16385735/antikorroziinaya-obrabotka-avtomobilya-nuzhna-li-ona-i-pochemu"><img src="https://mir24.tv/uploaded/images/crops/2019/November/a3ccfa9b12c9e8d0dee5eb6194c7a8e5dbf4d19d9f8f2403719899bbab92de9b-320x_.jpg?token=92872a4a4928ba9acb1f0273f542813d"></a><div class="mm_test_title"><a href="https://mir24.tv/articles/16385735/antikorroziinaya-obrabotka-avtomobilya-nuzhna-li-ona-i-pochemu">И сколько это стоит</a></div></div></div>}


Использование HTML-разметки
---------------------------------
.. attention::

	.. parsed-literal::

		{&lt;style&gt;@media(max-width:500px){#test_inner_bannera{color:#014e7d;}}&lt;/style&gt;}

..
  .. image:: /images/admin/edit_form/news_fields1.jpg
     :width: 100 %

  .. image:: /images/admin/edit_form/news_fields2.jpg
     :width: 100 %

  .. image:: /images/admin/edit_form/news_fields3.jpg
     :width: 100 %

  .. image:: /images/admin/edit_form/news_fields4.jpg
     :width: 100 %

  .. |${n}| raw:: html

      <u class="nf">BB</u>
