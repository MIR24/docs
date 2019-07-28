.. _update_publication:

=======================================================
Публикация. Код zen.yandex перенесен в Баннерное место
=======================================================

Баннерные места

.. warning::

   Код баннера ``https://zen.yandex.ru/mir24tv`` Перенесен в баннерное место.
   Во всех публикациях флаги включения баннеров Яндекс-zen проставляются автоматически!


В интерфейсе редактирования публикации добавлены флаги:

* Выводить баннеры в конце текста кроме amp-страниц
* Выводить баннеры в конце текста для amp-страниц

Данные флаги автоматически включают код после текста публикации:

.. code-block:: HTML

   <p></p>
   <p></p>
   <a href="https://zen.yandex.ru/mir24tv" class="tads-menu" style="text-align: center; color: white;background-color: #84c452;display: inline-block;padding: 6px 10px;">ПОЗНАЙ ДЗЕН С НАМИ</a><a href="https://news.yandex.ru/index.html?from=rubric&amp;favid=3087" class="tads-menu" style="text-align: center; color: white;background-color: #08a463;display: inline-block;padding: 6px 10px;">ЧИТАЙ НАС В ЯНДЕКС.НОВОСТЯХ</a>
   </p>


В поле текст печатается текст публикации без указания кода Яндекс-zen, для включения баннера проставляются флаги:

* Выводить баннеры в конце текста кроме amp-страниц
* Выводить баннеры в конце текста для amp-страниц

.. image:: /images/BannersInEndText.png
   :width: 80 %

В результате баннерный блок Яндекс-zen, включается после текста публикации:

.. image:: /images/doc_pubs_banner.jpg
   :width: 100 %
